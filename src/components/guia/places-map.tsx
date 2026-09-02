"use client";

import { useEffect, useMemo, useRef } from "react";
// El CSS sí puede ir arriba: no toca window. La librería no — ver el efecto.
import "leaflet/dist/leaflet.css";

import type { GuidePlace } from "@/content/guias";

/**
 * "El país de un vistazo" (spec, sección 8.8).
 *
 * Leaflet directo, sin react-leaflet: es el mismo patrón que el globo — una
 * librería imperativa dentro de un efecto — y evita sumar un wrapper para
 * montar un mapa que no cambia después de montado.
 *
 * LEAFLET SE IMPORTA ADENTRO DEL EFECTO
 *
 * Leaflet lee `window` al evaluarse. Un componente de cliente igual se
 * renderiza en el servidor, así que importarlo arriba rompe el prerender con
 * "window is not defined" y tira el build entero. La alternativa habitual es
 * `next/dynamic` con `ssr: false`, que obliga a un componente extra porque en
 * un Server Component esa opción no está permitida. Importarlo adentro del
 * efecto resuelve lo mismo con una línea: el efecto solo corre en el browser.
 *
 * EL PIN ABRE UN POPUP, NO UNA PÁGINA
 *
 * En el patrón de referencia el pin lleva a la guía de ese destino. Acá esas
 * páginas no existen, así que el pin muestra el mismo texto que la tarjeta del
 * mosaico. Es la misma decisión que en `places-grid.tsx`: sin enlaces que no
 * llevan a ningún lado.
 *
 * MARCADOR PROPIO EN VEZ DEL ÍCONO POR DEFECTO
 *
 * El ícono default de Leaflet son PNG que la librería busca por una URL
 * relativa a su CSS. Con el bundler de Next esa ruta no resuelve y los pines
 * salen rotos — es el error más conocido de Leaflet con webpack. Un `divIcon`
 * con un SVG inline no depende de ninguna ruta, y de paso queda del color de
 * la marca.
 */

const PIN = `
<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
  <path fill="#f97316" stroke="#ffffff" stroke-width="1.5"
    d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" />
  <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
</svg>`;

export function PlacesMap({ places }: { places: GuidePlace[] }) {
  const contenedor = useRef<HTMLDivElement>(null);

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

    let mapa: import("leaflet").Map | null = null;
    let cancelado = false;

    void (async () => {
      const L = (await import("leaflet")).default;

      // Si el componente se desmontó mientras cargaba la librería, no hay que
      // montar un mapa que nadie va a limpiar.
      if (cancelado) return;

      mapa = L.map(nodo, {
        // Sin scroll-zoom: el mapa ocupa el ancho de la lectura, y capturar la
        // rueda dejaría al usuario atrapado a mitad de la página.
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(mapa);

      const icono = L.divIcon({
        html: PIN,
        className: "",
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -26],
      });

      for (const place of places) {
        L.marker(place.coords, { icon: icono, title: place.name })
          .addTo(mapa)
          .bindPopup(
            `<strong>${place.name}</strong><br><span>${place.tag}</span>`,
          );
      }

      // El encuadre sale de los destinos, no de un centro y un zoom a mano: si
      // mañana se suma un destino en otra punta del país, el mapa se reencuadra
      // solo en vez de dejarlo afuera.
      mapa.fitBounds(L.latLngBounds(places.map((place) => place.coords)), {
        padding: [32, 32],
      });
    })();

    return () => {
      cancelado = true;
      mapa?.remove();
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
          El país de un vistazo
        </h2>

        <p className="text-muted-foreground text-sm text-pretty">
          Las distancias de Argentina no se entienden en una lista. Tocá un pin
          para ver de qué destino se trata.
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
        <div
          ref={contenedor}
          // La altura va en el elemento y no en una clase de utilidad porque
          // Leaflet mide el contenedor al montar: sin alto resuelto, el mapa
          // se inicializa en cero y no se recupera.
          style={{ height: 560 }}
          className="w-full overflow-hidden rounded-xl border bg-muted"
        />

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
