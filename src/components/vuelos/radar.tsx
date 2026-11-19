"use client";

import { useEffect, useRef, useState } from "react";
// El CSS sí puede ir arriba: no toca window. La librería no — ver el efecto.
import "maplibre-gl/dist/maplibre-gl.css";
import type { GeoJSONSource, Map as MapaDeMapLibre } from "maplibre-gl";

import {
  cargarMapLibre,
  ponerEtiquetasEnCastellano,
} from "@/components/mapa/maplibre";
import {
  formatAltitude,
  formatCount,
  formatDistance,
  formatSpeed,
} from "@/lib/format";
import { ESTILO_DEL_MAPA, textosDelMapa } from "@/lib/mapa/estilo";
import {
  geojsonDeAviones,
  geojsonDeZona,
  limitesDeZona,
  porCercania,
  puntoCardinal,
} from "@/lib/vuelos/radar";
import type {
  AvionEnVuelo,
  CentroDeZona,
  ZonaEnVivo,
} from "@/lib/vuelos/tipos";
import { RADIO_DE_ZONA_KM, centroDeZona, rutaDeZona } from "@/lib/vuelos/zona";
import { useTextos } from "@/i18n/cliente";
import { TEXTOS_DEL_MAPA } from "@/i18n/mapa";
import { TEXTOS_DE_VUELOS, type TextosDeVuelos } from "@/i18n/vuelos";

/**
 * El radar: lo que vuela ahora alrededor de un punto (spec, 17.5).
 *
 * Arranca en el aeropuerto de quien mira y muestra los aviones de su zona
 * —463 km a la redonda, lo que da adsb.lol por pedido—, que se actualizan cada
 * CADA_MS mientras la pestaña está a la vista. Al mover el mapa lejos del
 * centro, carga la zona de ahí (src/lib/vuelos/zona.ts).
 *
 * MapLibre se carga adentro del efecto, por lo mismo que Leaflet en el mapa de
 * las guías: lee `window` al evaluarse (src/components/mapa/maplibre.ts).
 *
 * EL PRIMER PEDIDO LO HACE EL SERVIDOR
 *
 * Los números y la lista llegan con la página (`inicial`), sin esperar a que
 * el navegador pida nada. Llegan por el streaming de React, que necesita
 * JavaScript para mostrarse: sin JavaScript, la página dice que el radar lo
 * necesita (src/app/vuelos/page.tsx), y "Salgo desde" sigue andando.
 */

const CADA_MS = 15_000;
const REINTENTO_MS = 30_000;

/** Cuántos aviones entran en la lista; el resto, en el mapa. */
const FILAS = 50;

const COLOR = "#334155";
const COLOR_ELEGIDO = "#f97316";

/** Un avión visto desde arriba, con la nariz hacia el norte, en 24×24. */
const SILUETA =
  "M12 2c.8 0 1.3.7 1.3 1.6v5.6l7.7 4.4v2l-7.7-2.4v5.2l2.3 1.8v1.6L12 20.8l-3.6 1v-1.6l2.3-1.8v-5.2L3 15.6v-2l7.7-4.4V3.6C10.7 2.7 11.2 2 12 2z";

/** El aeropuerto en el que arranca el mapa. */
export interface Foco {
  lat: number;
  lon: number;
  iata: string;
}

type Estado = "listo" | "cargando" | "pausa" | "fallo";

/** El ícono del avión, dibujado en un canvas: sin archivos que servir. */
function icono(color: string): ImageData {
  const lado = 48;
  const lienzo = document.createElement("canvas");
  lienzo.width = lado;
  lienzo.height = lado;

  const contexto = lienzo.getContext("2d")!;
  const silueta = new Path2D(SILUETA);

  // 24×24 dibujado al doble, para pantallas de alta densidad (pixelRatio 2).
  contexto.scale(2, 2);
  contexto.lineJoin = "round";
  contexto.lineWidth = 2;
  contexto.strokeStyle = "#ffffff";
  contexto.stroke(silueta);
  contexto.fillStyle = color;
  contexto.fill(silueta);

  return contexto.getImageData(0, 0, lado, lado);
}

/**
 * Dónde queda la zona, para quien no ve el mapa.
 *
 * Con el nombre del aeropuerto y no con su ciudad: OurAirports pone el
 * municipio, que a veces no dice nada ("Calden" es el aeropuerto de Kassel) y a
 * veces está en inglés ("London").
 */
function textoDeZona(
  t: TextosDeVuelos["radar"],
  zona: ZonaEnVivo | null,
): string {
  const referencia = zona?.referencia;

  return referencia
    ? t.zonaAlrededorDe(RADIO_DE_ZONA_KM, referencia.nombre, referencia.iata)
    : t.zonaAlrededorDelCentro(RADIO_DE_ZONA_KM);
}

export function Radar({
  inicial,
  centroInicial,
  foco,
}: {
  /** Lo que trajo el servidor, o `null` si adsb.lol no respondió. */
  inicial: ZonaEnVivo | null;
  centroInicial: CentroDeZona;
  foco: Foco;
}) {
  const t = useTextos(TEXTOS_DE_VUELOS).radar;
  const textosDelMapaDeLaPagina = useTextos(TEXTOS_DEL_MAPA);
  const contenedor = useRef<HTMLDivElement>(null);
  const mapa = useRef<MapaDeMapLibre | null>(null);
  // La zona pedida, también para los eventos del mapa, que se registran una
  // sola vez y no ven el estado nuevo.
  const zonaPedida = useRef(centroInicial);
  const datos = useRef(inicial);

  const [zona, setZona] = useState(inicial);
  const [centro, setCentro] = useState(centroInicial);
  const [estado, setEstado] = useState<Estado>(inicial ? "listo" : "fallo");
  const [elegido, setElegido] = useState<string | null>(null);
  const [mapaListo, setMapaListo] = useState(false);
  const [mapaRoto, setMapaRoto] = useState(false);

  // El mapa: se monta una vez.
  useEffect(() => {
    const nodo = contenedor.current;
    if (!nodo) return;

    let cancelado = false;

    void (async () => {
      const maplibregl = await cargarMapLibre();

      if (cancelado) return;

      let instancia: MapaDeMapLibre;

      try {
        instancia = new maplibregl.Map({
          container: nodo,
          style: ESTILO_DEL_MAPA,
          bounds: limitesDeZona(centroInicial, RADIO_DE_ZONA_KM),
          fitBoundsOptions: { padding: 16 },
          minZoom: 3,
          maxZoom: 12,
          // Un mapa que gira o se inclina no ayuda a leer hacia dónde va cada
          // avión: el norte queda siempre arriba.
          dragRotate: false,
          pitchWithRotate: false,
          touchPitch: false,
          // La página sigue bajando con la rueda o con un dedo; el mapa se
          // mueve con Ctrl o con dos dedos. Sin esto, quien baja por la
          // página queda atrapado adentro del mapa.
          cooperativeGestures: true,
          attributionControl: { compact: true },
          // MapLibre se lo pone al canvas del mapa, para los lectores de
          // pantalla.
          locale: textosDelMapa(t.tituloDelMapa, textosDelMapaDeLaPagina),
        });
      } catch {
        // Sin WebGL no hay mapa; la lista sigue sirviendo.
        setMapaRoto(true);
        return;
      }

      mapa.current = instancia;
      instancia.touchZoomRotate.disableRotation();
      instancia.addControl(
        new maplibregl.NavigationControl({ showCompass: false }),
        "top-right",
      );

      instancia.on("load", () => {
        ponerEtiquetasEnCastellano(instancia);

        instancia.addImage("avion", icono(COLOR), { pixelRatio: 2 });
        instancia.addImage("avion-elegido", icono(COLOR_ELEGIDO), {
          pixelRatio: 2,
        });

        instancia.addSource("zona", {
          type: "geojson",
          data: geojsonDeZona(zonaPedida.current, RADIO_DE_ZONA_KM),
        });
        instancia.addLayer({
          id: "zona",
          type: "line",
          source: "zona",
          paint: {
            "line-color": "#64748b",
            "line-width": 1.5,
            "line-dasharray": [2, 2],
          },
        });

        instancia.addSource("foco", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: { type: "Point", coordinates: [foco.lon, foco.lat] },
            properties: { iata: foco.iata },
          },
        });
        instancia.addLayer({
          id: "foco",
          type: "circle",
          source: "foco",
          paint: {
            "circle-radius": 5,
            "circle-color": "#ffffff",
            "circle-stroke-color": COLOR_ELEGIDO,
            "circle-stroke-width": 3,
          },
        });

        instancia.addSource("aviones", {
          type: "geojson",
          data: geojsonDeAviones(
            datos.current?.aviones ?? [],
            zonaPedida.current,
            null,
          ),
        });
        instancia.addLayer({
          id: "aviones",
          type: "symbol",
          source: "aviones",
          layout: {
            "icon-image": [
              "case",
              ["get", "elegido"],
              "avion-elegido",
              "avion",
            ],
            "icon-rotate": ["coalesce", ["get", "rumbo"], 0],
            "icon-rotation-alignment": "map",
            "icon-allow-overlap": true,
            "icon-ignore-placement": true,
            // El elegido, arriba de los demás.
            "symbol-sort-key": ["case", ["get", "elegido"], 1, 0],
            // El número de vuelo, recién cuando hay lugar para leerlo.
            "text-field": [
              "step",
              ["zoom"],
              "",
              8,
              ["coalesce", ["get", "vuelo"], ""],
            ],
            "text-font": ["Noto Sans Regular"],
            "text-size": 11,
            "text-offset": [0, 1.3],
            "text-anchor": "top",
            "text-optional": true,
          },
          paint: {
            "text-color": COLOR,
            "text-halo-color": "#ffffff",
            "text-halo-width": 1.5,
          },
        });

        setMapaListo(true);
      });

      instancia.on("click", (evento) => {
        const [tocado] = instancia.queryRenderedFeatures(evento.point, {
          layers: ["aviones"],
        });
        const hex = tocado?.properties?.hex;

        setElegido(typeof hex === "string" ? hex : null);
      });

      instancia.on("mouseenter", "aviones", () => {
        instancia.getCanvas().style.cursor = "pointer";
      });
      instancia.on("mouseleave", "aviones", () => {
        instancia.getCanvas().style.cursor = "";
      });

      // Lejos del centro, otra zona: la de la grilla más cercana al centro
      // del mapa.
      instancia.on("moveend", () => {
        const { lat, lng } = instancia.getCenter().wrap();
        const nueva = centroDeZona(lat, lng);
        const actual = zonaPedida.current;

        if (nueva.lat === actual.lat && nueva.lon === actual.lon) return;

        zonaPedida.current = nueva;
        setCentro(nueva);
        setEstado("cargando");
      });

      instancia.on("error", (evento) => {
        // Un mosaico que no carga no es un mapa roto; el estilo sí.
        if (!instancia.isStyleLoaded()) setMapaRoto(true);
        console.error(evento.error);
      });
    })();

    return () => {
      cancelado = true;
      mapa.current?.remove();
      mapa.current = null;
    };
    // El mapa se monta una vez; lo que cambia después entra por las fuentes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Los datos: cada CADA_MS, solo con la pestaña a la vista.
  useEffect(() => {
    let cancelado = false;
    let espera: number | undefined;
    let pedido: AbortController | undefined;
    // Hasta cuándo pidió esperar adsb.lol: volver a la pestaña no lo saltea.
    let pausaHasta = 0;

    function programar(ms: number) {
      window.clearTimeout(espera);
      espera = window.setTimeout(buscar, ms);
    }

    async function buscar() {
      // Con la pestaña oculta no se pide nada; al volver, alVolver retoma.
      if (document.visibilityState === "hidden") return;

      pedido?.abort();
      pedido = new AbortController();

      try {
        const respuesta = await fetch(rutaDeZona(centro), {
          signal: pedido.signal,
        });

        if (cancelado) return;

        if (respuesta.status === 503) {
          const segundos = Number(respuesta.headers.get("retry-after")) || 60;

          pausaHasta = Date.now() + segundos * 1000;
          setEstado("pausa");
          programar(segundos * 1000);
          return;
        }

        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

        const nueva: ZonaEnVivo = await respuesta.json();

        if (cancelado) return;

        datos.current = nueva;
        setZona(nueva);
        setEstado("listo");
        programar(CADA_MS);
      } catch {
        if (cancelado) return;

        setEstado("fallo");
        programar(REINTENTO_MS);
      }
    }

    function alVolver() {
      if (document.visibilityState === "visible") {
        programar(Math.max(0, pausaHasta - Date.now()));
      }
    }

    // Si los datos que hay son de esta zona —los trajo el servidor—, se
    // espera el turno; si no, se piden ya.
    const actuales = datos.current?.centro;
    const alDia = actuales?.lat === centro.lat && actuales?.lon === centro.lon;

    programar(alDia ? CADA_MS : 0);
    document.addEventListener("visibilitychange", alVolver);

    return () => {
      cancelado = true;
      window.clearTimeout(espera);
      pedido?.abort();
      document.removeEventListener("visibilitychange", alVolver);
    };
  }, [centro]);

  // Lo que se ve en el mapa sigue a los datos, la zona pedida y el elegido.
  useEffect(() => {
    const instancia = mapa.current;
    if (!mapaListo || !instancia) return;

    (instancia.getSource("zona") as GeoJSONSource | undefined)?.setData(
      geojsonDeZona(centro, RADIO_DE_ZONA_KM),
    );
    (instancia.getSource("aviones") as GeoJSONSource | undefined)?.setData(
      geojsonDeAviones(zona?.aviones ?? [], centro, elegido),
    );
  }, [mapaListo, zona, centro, elegido]);

  const aviones = zona?.aviones ?? [];
  const lista = porCercania(aviones, zona?.centro ?? centro);
  const seleccionado = aviones.find((avion) => avion.hex === elegido);

  function verEnElMapa(avion: AvionEnVuelo) {
    setElegido(avion.hex);
    mapa.current?.flyTo({
      center: [avion.lon, avion.lat],
      zoom: Math.max(mapa.current.getZoom(), 8),
    });
    contenedor.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end gap-x-10 gap-y-3">
        <div className="flex flex-col">
          <span className="text-4xl font-semibold tabular-nums">
            {formatCount(aviones.length)}
          </span>
          <span className="text-muted-foreground text-sm">{t.enLaZona}</span>
        </div>

        {zona?.totalGlobal != null ? (
          <div className="flex flex-col">
            <span className="text-4xl font-semibold tabular-nums">
              {formatCount(zona.totalGlobal)}
            </span>
            <span className="text-muted-foreground text-sm">{t.enElMundo}</span>
          </div>
        ) : null}
      </div>

      {/*
        Lo que cambia se anuncia: al mover el mapa, "buscando"; cuando llegan
        los aviones, la zona nueva. El refresco de cada 15 segundos no cambia
        el texto, así que no interrumpe a nadie.
      */}
      <p aria-live="polite" className="text-muted-foreground text-sm">
        {textoDeZona(t, zona)} {t.estados[estado]}
      </p>

      <div className="relative">
        <div
          ref={contenedor}
          className="bg-muted h-[380px] w-full overflow-hidden rounded-xl border sm:h-[480px]"
        />

        {!mapaListo ? (
          <p className="text-muted-foreground pointer-events-none absolute inset-0 flex items-center justify-center p-6 text-center text-sm">
            {mapaRoto ? t.mapaRoto : t.cargandoElMapa}
          </p>
        ) : null}
      </div>

      {seleccionado ? (
        <FichaDeVuelo avion={seleccionado} alCerrar={() => setElegido(null)} />
      ) : (
        <p className="text-muted-foreground text-sm">
          {t.tocaUnAvion(foco.iata)}
        </p>
      )}

      <details className="rounded-xl border">
        <summary className="cursor-pointer px-4 py-3 text-sm font-medium">
          {t.verLaLista}
        </summary>

        {lista.length === 0 ? (
          <p className="text-muted-foreground px-4 pb-4 text-sm">
            {t.sinAviones}
          </p>
        ) : (
          <div className="overflow-x-auto px-4 pb-4">
            <table className="w-full text-left text-sm">
              <caption className="text-muted-foreground pb-2 text-left text-xs">
                {t.orden}
                {lista.length > FILAS
                  ? t.recorte(FILAS, formatCount(lista.length))
                  : null}
              </caption>
              <thead className="text-muted-foreground text-xs">
                <tr>
                  <th scope="col" className="py-1 pr-4 font-medium">
                    {t.columnas.vuelo}
                  </th>
                  <th scope="col" className="py-1 pr-4 font-medium">
                    {t.columnas.modelo}
                  </th>
                  <th scope="col" className="py-1 pr-4 font-medium">
                    {t.columnas.altitud}
                  </th>
                  <th scope="col" className="py-1 pr-4 font-medium">
                    {t.columnas.velocidad}
                  </th>
                  <th scope="col" className="py-1 pr-4 font-medium">
                    {t.columnas.distancia}
                  </th>
                  <th scope="col" className="py-1 font-medium">
                    <span className="sr-only">{t.columnas.enElMapa}</span>
                  </th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {lista.slice(0, FILAS).map(({ avion, distanciaKm }) => (
                  <tr key={avion.hex} className="border-t">
                    <td className="py-1.5 pr-4 font-medium">
                      {avion.vuelo ?? "—"}
                    </td>
                    <td className="py-1.5 pr-4">{avion.modelo ?? "—"}</td>
                    <td className="py-1.5 pr-4">
                      {formatAltitude(avion.altitudM)}
                    </td>
                    <td className="py-1.5 pr-4">
                      {avion.velocidadKmH === null
                        ? "—"
                        : formatSpeed(avion.velocidadKmH)}
                    </td>
                    <td className="py-1.5 pr-4">
                      {formatDistance(distanciaKm)}
                    </td>
                    <td className="py-1.5">
                      <button
                        type="button"
                        onClick={() => verEnElMapa(avion)}
                        className="text-muted-foreground hover:text-foreground underline underline-offset-2"
                      >
                        {t.ver}
                        <span className="sr-only">
                          {" "}
                          {t.verEnElMapa(avion.vuelo ?? avion.hex)}
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </details>
    </div>
  );
}

function FichaDeVuelo({
  avion,
  alCerrar,
}: {
  avion: AvionEnVuelo;
  alCerrar: () => void;
}) {
  const t = useTextos(TEXTOS_DE_VUELOS).radar;

  return (
    <div
      aria-live="polite"
      className="flex flex-wrap items-start justify-between gap-4 rounded-xl border p-4"
    >
      <div className="flex flex-col gap-2">
        <p className="font-medium">
          {avion.vuelo ?? t.sinNumero}
          {avion.matricula ? (
            <span className="text-muted-foreground font-normal">
              {" "}
              · {avion.matricula}
            </span>
          ) : null}
        </p>

        <dl className="text-muted-foreground grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          <dt>{t.columnas.modelo}</dt>
          <dd className="text-foreground">{avion.modelo ?? t.noInforma}</dd>
          <dt>{t.columnas.altitud}</dt>
          <dd className="text-foreground">{formatAltitude(avion.altitudM)}</dd>
          <dt>{t.columnas.velocidad}</dt>
          <dd className="text-foreground">
            {avion.velocidadKmH === null
              ? t.noInforma
              : formatSpeed(avion.velocidadKmH)}
          </dd>
          <dt>{t.rumbo}</dt>
          <dd className="text-foreground">
            {avion.rumbo === null
              ? t.noInforma
              : t.hacia(
                  t.puntosCardinales[puntoCardinal(avion.rumbo)],
                  avion.rumbo,
                )}
          </dd>
        </dl>
      </div>

      <button
        type="button"
        onClick={alCerrar}
        className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-2"
      >
        {t.cerrar}
      </button>
    </div>
  );
}
