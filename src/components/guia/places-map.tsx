"use client";

import { useEffect, useMemo, useRef, useState } from "react";
// El CSS sí puede ir arriba: no toca window. La librería no (cargarMapLibre).
import "maplibre-gl/dist/maplibre-gl.css";
import type { Map as MapaDeMapLibre } from "maplibre-gl";

import {
  cargarMapLibre,
  mostrarEstados,
  ponerEtiquetasEnCastellano,
} from "@/components/mapa/maplibre";
import type { GuidePlace } from "@/content/guias";
import { sinSaltoDeAntimeridiano } from "@/lib/antimeridiano";
import { ESTILO_DEL_MAPA, textosDelMapa } from "@/lib/mapa/estilo";
import { useTextos } from "@/i18n/cliente";
import { TEXTOS_DE_LA_GUIA } from "@/i18n/guia";
import { TEXTOS_DEL_MAPA } from "@/i18n/mapa";

/**
 * "El país de un vistazo" (spec, secciones 8.8 y 24).
 *
 * MAPLIBRE, COMO LOS OTROS MAPAS DEL SITIO
 *
 * Era Leaflet con mosaicos raster de CARTO: nombres en el idioma de cada país
 * y, al encuadrar el país entero, nada adentro del contorno. Quienes probaron
 * el sitio pidieron ver los estados. Con MapLibre y los mosaicos vectoriales
 * de OpenFreeMap —los mismos del radar de vuelos y del mapa de cada plato—
 * los nombres salen en castellano y los estados y provincias se ven desde que
 * se ve el país (`mostrarEstados`).
 *
 * EL PIN ABRE UN POPUP, NO UNA PÁGINA
 *
 * El pin muestra el mismo texto que la tarjeta del mosaico. Es la misma
 * decisión que en `places-grid.tsx`: sin enlaces que no llevan a ningún lado.
 * MapLibre hace el pin accesible con el teclado cuando tiene popup: entra en
 * el orden de tabulación y se abre con Enter o con la barra, siempre que el
 * popup se ponga después de sumar el pin al mapa (ver el bucle de los pines).
 *
 * SIN WEBGL NO HAY MAPA
 *
 * El navegador que no tiene WebGL no puede dibujarlo. Queda el aviso en el
 * lugar del mapa y la lista por región, que tiene los mismos destinos.
 */

const PIN = `
<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
  <path fill="#f97316" stroke="#ffffff" stroke-width="1.5"
    d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" />
  <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
</svg>`;

/** El contenido del popup, armado con nodos: el texto nunca se lee como HTML. */
function contenidoDelPopup(place: GuidePlace): HTMLElement {
  const contenido = document.createElement("div");
  const nombre = document.createElement("strong");
  const etiqueta = document.createElement("span");

  nombre.textContent = place.name;
  etiqueta.textContent = place.tag;
  contenido.append(nombre, document.createElement("br"), etiqueta);

  return contenido;
}

export function PlacesMap({
  country,
  places,
}: {
  country: string;
  places: GuidePlace[];
}) {
  const t = useTextos(TEXTOS_DE_LA_GUIA).mapa;
  const textosDelMapaDeLaPagina = useTextos(TEXTOS_DEL_MAPA);
  const contenedor = useRef<HTMLDivElement>(null);
  const [mapaRoto, setMapaRoto] = useState(false);

  // Los textos de los controles se leen una sola vez, al montar el mapa: el
  // efecto depende solo de los destinos, y cambiar el idioma no tiene por qué
  // volver a crearlo.
  const textos = useRef({ titulo: t.titulo, mapa: textosDelMapaDeLaPagina });

  // Agrupado en el orden en que aparecen los destinos, no alfabético: es el
  // mismo orden del mosaico de arriba, y leer las dos secciones seguidas no
  // debería obligar a reordenar nada en la cabeza.
  const porRegion = useMemo(() => {
    const mapa = new Map<string, GuidePlace[]>();

    for (const place of places) {
      const actuales = mapa.get(place.region);
      if (actuales) actuales.push(place);
      else mapa.set(place.region, [place]);
    }

    return [...mapa];
  }, [places]);

  useEffect(() => {
    const nodo = contenedor.current;
    if (!nodo || places.length === 0) return;

    let instancia: MapaDeMapLibre | null = null;
    let cancelado = false;

    void (async () => {
      const maplibregl = await cargarMapLibre();

      // Si el componente se desmontó mientras cargaba la librería, no hay que
      // montar un mapa que nadie va a limpiar.
      if (cancelado) return;

      // Fiyi y Kiribati cruzan el antimeridiano: sin esto, sus pines quedan en
      // las dos puntas del mapa y el encuadre muestra el planeta entero.
      // MapLibre acepta longitudes de más de 180 y las dibuja seguidas.
      const posiciones = sinSaltoDeAntimeridiano(
        places.map((place) => place.coords),
      ).map(([lat, lon]) => [lon, lat] as [number, number]);

      // El encuadre sale de los destinos, no de un centro y un zoom a mano: si
      // mañana se suma un destino en otra punta del país, el mapa se reencuadra
      // solo en vez de dejarlo afuera.
      const encuadre = new maplibregl.LngLatBounds(
        posiciones[0],
        posiciones[0],
      );
      for (const posicion of posiciones) encuadre.extend(posicion);

      try {
        instancia = new maplibregl.Map({
          container: nodo,
          style: ESTILO_DEL_MAPA,
          bounds: encuadre,
          // El tope evita que un país de destinos muy juntos arranque a nivel
          // de calle.
          fitBoundsOptions: { padding: 40, maxZoom: 9 },
          // Un mapa que gira o se inclina no ayuda a ubicar el país: el norte
          // queda siempre arriba.
          dragRotate: false,
          pitchWithRotate: false,
          touchPitch: false,
          // La página sigue bajando con la rueda o con un dedo; el mapa se
          // mueve con Ctrl o con dos dedos. Sin esto, quien baja por la guía
          // queda atrapado adentro del mapa.
          cooperativeGestures: true,
          attributionControl: { compact: true },
          locale: textosDelMapa(textos.current.titulo, textos.current.mapa),
        });
      } catch {
        setMapaRoto(true);
        return;
      }

      const mapa = instancia;
      mapa.touchZoomRotate.disableRotation();
      mapa.addControl(
        new maplibregl.NavigationControl({ showCompass: false }),
        "top-right",
      );

      mapa.on("load", () => {
        ponerEtiquetasEnCastellano(mapa);
        mostrarEstados(mapa);
      });

      for (const [i, place] of places.entries()) {
        const pin = document.createElement("div");
        pin.innerHTML = PIN;
        // MapLibre le pone el rol solo a su pin por defecto; este abre un
        // popup, así que para el lector de pantalla es un botón con nombre.
        pin.setAttribute("role", "button");
        pin.setAttribute("aria-label", place.name);
        pin.style.cursor = "pointer";

        // El popup va después de `addTo`, no antes: `addTo` empieza por
        // `remove`, que le saca al pin el oyente del teclado que puso
        // `setPopup`. En el otro orden, el pin se abre con el mouse pero no
        // con Enter ni con la barra.
        new maplibregl.Marker({ element: pin, anchor: "bottom" })
          .setLngLat(posiciones[i])
          .addTo(mapa)
          .setPopup(
            new maplibregl.Popup({
              offset: 26,
              closeButton: false,
            }).setDOMContent(contenidoDelPopup(place)),
          );
      }
    })();

    return () => {
      cancelado = true;
      instancia?.remove();
    };
  }, [places]);

  return (
    <section
      aria-labelledby="mapa-titulo"
      className="flex w-full max-w-5xl flex-col gap-6"
    >
      <header className="flex flex-col gap-2">
        <h2
          id="mapa-titulo"
          className="text-3xl font-semibold tracking-tight text-balance"
        >
          {t.titulo}
        </h2>

        <p className="text-muted-foreground text-sm text-pretty">
          {t.bajada(country)}
        </p>
      </header>

      {/*
        Dos columnas, y no un mapa a todo el ancho como en el patrón de
        referencia: aquel país es ancho, Argentina es alta y angosta. De Salta
        a Ushuaia hay unos 30 grados de latitud contra unos 14 de longitud
        efectiva a esta altura del planeta, así que un mapa apaisado deja el
        país en una franja fina con vacío a los costados. El ancho sobrante se
        usa para la lista por región, que es lo que el reference pone debajo
        del mapa.
      */}
      <div className="grid gap-6 md:grid-cols-[minmax(0,420px)_1fr]">
        {mapaRoto ? (
          <p
            style={{ height: 560 }}
            className="text-muted-foreground flex w-full items-center justify-center rounded-xl border bg-muted p-6 text-center text-sm"
          >
            {t.sinMapa}
          </p>
        ) : (
          <div
            ref={contenedor}
            // La altura va en el elemento y no en una clase de utilidad porque
            // MapLibre mide el contenedor al montar: sin alto resuelto, el
            // mapa se inicializa en cero.
            style={{ height: 560 }}
            className="w-full overflow-hidden rounded-xl border bg-muted"
          />
        )}

        <div className="flex flex-col gap-5">
          {porRegion.map(([region, delRegion]) => (
            <div key={region} className="flex flex-col gap-2">
              <h3 className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                {region}
              </h3>

              <ul className="flex flex-col gap-1.5">
                {delRegion.map((place) => (
                  <li
                    key={place.id}
                    className="flex flex-wrap items-baseline gap-x-2 text-sm"
                  >
                    <span className="font-medium">{place.name}</span>
                    <span className="text-muted-foreground text-xs">
                      {place.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
