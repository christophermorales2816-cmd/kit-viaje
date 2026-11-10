"use client";

import { useEffect, useMemo, useRef, useState } from "react";
// El CSS sí puede ir arriba: no toca window. La librería no (cargarMapLibre).
import "maplibre-gl/dist/maplibre-gl.css";
import type { GeoJSONSource, Map as MapaDeMapLibre } from "maplibre-gl";

import {
  cargarMapLibre,
  ponerEtiquetasEnCastellano,
} from "@/components/mapa/maplibre";
import { Button } from "@/components/ui/button";
import type {
  CiudadDelMapa,
  Mencion,
  TipoDeLugarOsm,
} from "@/content/comidas/types";
import {
  ZOOM_MINIMO,
  celdaDeClave,
  celdaDelPais,
  celdasVisibles,
  claveDeCelda,
  rutaDeLugares,
} from "@/lib/comidas/celdas";
import { NOMBRES_DE_MENCION } from "@/lib/comidas/etiquetas";
import { horarioEnCastellano } from "@/lib/comidas/horarios";
import {
  type LugarDeComida,
  type LugaresDeLaCelda,
  VIGENCIA_S,
  anoDeLaUltimaNovedad,
  sinNovedades,
  urlEnOpenStreetMap,
  urlParaAvisar,
  urlParaLlegar,
} from "@/lib/comidas/lugares";
import {
  geojsonDeLugares,
  juntarLugares,
  porCercania,
} from "@/lib/comidas/mapa";
import {
  formatCount,
  formatDistance,
  formatMonthYear,
  formatTimestamp,
} from "@/lib/format";
import { ESTILO_DEL_MAPA, textosDelMapa } from "@/lib/mapa/estilo";

/**
 * Dónde sirven un plato, en un mapa (spec, 18.4).
 *
 * Arranca en una ciudad del país y pide los lugares de las celdas que se ven
 * (src/lib/comidas/celdas.ts), como un mapa pide mosaicos: al moverlo, solo
 * se piden las nuevas. Los lugares salen de OpenStreetMap por la API del sitio
 * (src/app/api/que-comer/lugares), que los renueva cada doce horas.
 *
 * LA FECHA SIEMPRE A LA VISTA
 *
 * Lo que se muestra dice de cuándo es. Si una celda llega con datos de más de
 * un día —nadie la miró en un tiempo—, la caché del servidor ya los está
 * renovando: el mapa los muestra, avisa y los vuelve a pedir una vez a los
 * REPEDIR_MS. Y cada lugar dice si alguien confirmó hace poco que sigue
 * abierto, o si hace años que nadie lo toca.
 */

const REPEDIR_MS = 8_000;

/** Cuántos lugares entran en la lista; el resto, en el mapa. */
const FILAS = 30;

const ZOOM_DE_CIUDAD = 14;

const COLOR = "#f97316";
const COLOR_DUDOSO = "#94a3b8";
const COLOR_MENCION = "#eab308";
const COLOR_TEXTO = "#0f172a";

const NOMBRES_DE_TIPO: Record<TipoDeLugarOsm, string> = {
  comida: "Restaurante o comida al paso",
  cafe: "Café",
  bar: "Bar",
  heladeria: "Heladería",
  panaderia: "Panadería",
  dulceria: "Pastelería",
  mercado: "Mercado",
  almacen: "Almacén",
  bebidas: "Tienda de bebidas",
};

type Celdas = Record<
  string,
  | { estado: "cargando" }
  /** `vieja`: con más de un día, se está renovando (ver arriba). */
  | { estado: "lista"; datos: LugaresDeLaCelda; vieja: boolean }
  | { estado: "pausa" }
  | { estado: "fallo" }
>;

type Vista =
  | { tipo: "iniciando" }
  | { tipo: "lejos" }
  | { tipo: "fuera" }
  | { tipo: "celdas"; claves: string[] };

interface Props {
  pais: string;
  nombreDelPais: string;
  plato: { id: string; nombre: string };
  ciudades: CiudadDelMapa[];
  ciudadInicial: string;
  menciones: Mencion[];
}

function edadS(datos: LugaresDeLaCelda): number {
  return (Date.now() - Date.parse(datos.actualizado)) / 1000;
}

/**
 * Las celdas alrededor de un punto, para cuando no hay mapa que diga qué se
 * ve: sin WebGL, la lista sigue mostrando los lugares de la ciudad.
 */
function vistaAlrededorDe([lat, lon]: [number, number]): Vista {
  const claves =
    celdasVisibles({
      sur: lat - 0.05,
      oeste: lon - 0.05,
      norte: lat + 0.05,
      este: lon + 0.05,
    })?.map(claveDeCelda) ?? [];

  return { tipo: "celdas", claves };
}

export function MapaDeLugares({
  pais,
  nombreDelPais,
  plato,
  ciudades,
  ciudadInicial,
  menciones,
}: Props) {
  const contenedor = useRef<HTMLDivElement>(null);
  const mapa = useRef<MapaDeMapLibre | null>(null);
  // Lo pedido y lo vuelto a pedir, fuera del estado: dos movimientos seguidos
  // del mapa no tienen que pedir dos veces la misma celda.
  const pedidas = useRef(new Set<string>());
  const repedidas = useRef(new Set<string>());
  const esperas = useRef(new Set<number>());

  const inicial =
    ciudades.find((ciudad) => ciudad.id === ciudadInicial) ?? ciudades[0];

  const [ciudad, setCiudad] = useState(inicial.id);
  const [celdas, setCeldas] = useState<Celdas>({});
  const [vista, setVista] = useState<Vista>({ tipo: "iniciando" });
  const [centro, setCentro] = useState<[number, number]>(inicial.coords);
  const [elegido, setElegido] = useState<string | null>(null);
  const [mapaListo, setMapaListo] = useState(false);
  const [mapaRoto, setMapaRoto] = useState(false);

  const lugares = useMemo(
    () =>
      juntarLugares(
        Object.values(celdas).flatMap((celda) =>
          celda.estado === "lista" ? [celda.datos.lugares] : [],
        ),
      ),
    [celdas],
  );

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
          center: [inicial.coords[1], inicial.coords[0]],
          zoom: ZOOM_DE_CIUDAD,
          minZoom: 3,
          maxZoom: 18,
          dragRotate: false,
          pitchWithRotate: false,
          touchPitch: false,
          // Como en el radar: la ficha sigue bajando con la rueda o con un
          // dedo, y el mapa se mueve con Ctrl o con dos dedos.
          cooperativeGestures: true,
          attributionControl: { compact: true },
          locale: textosDelMapa(
            `Mapa de los lugares que sirven ${plato.nombre}. La lista de abajo tiene los mismos datos.`,
          ),
        });
      } catch {
        // Sin WebGL no hay mapa; la lista sigue sirviendo.
        setMapaRoto(true);
        setVista(vistaAlrededorDe(inicial.coords));
        return;
      }

      mapa.current = instancia;
      instancia.touchZoomRotate.disableRotation();
      instancia.addControl(
        new maplibregl.NavigationControl({ showCompass: false }),
        "top-right",
      );

      function actualizarVista() {
        const { lat, lng } = instancia.getCenter().wrap();
        setCentro([lat, lng]);

        if (instancia.getZoom() < ZOOM_MINIMO) {
          setVista({ tipo: "lejos" });
          return;
        }

        const limites = instancia.getBounds();
        const visibles = celdasVisibles({
          sur: limites.getSouth(),
          oeste: limites.getWest(),
          norte: limites.getNorth(),
          este: limites.getEast(),
        });

        if (!visibles) {
          setVista({ tipo: "lejos" });
          return;
        }

        const delPais = visibles.filter((celda) =>
          celdaDelPais(celda, ciudades),
        );

        setVista(
          delPais.length === 0
            ? { tipo: "fuera" }
            : { tipo: "celdas", claves: delPais.map(claveDeCelda) },
        );
      }

      instancia.on("load", () => {
        ponerEtiquetasEnCastellano(instancia);

        instancia.addSource("lugares", {
          type: "geojson",
          data: geojsonDeLugares([], new Date(), null),
          cluster: true,
          clusterRadius: 45,
          clusterMaxZoom: 15,
        });
        instancia.addLayer({
          id: "grupos",
          type: "circle",
          source: "lugares",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": COLOR_TEXTO,
            "circle-opacity": 0.85,
            "circle-radius": [
              "step",
              ["get", "point_count"],
              14,
              20,
              18,
              100,
              24,
            ],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 2,
          },
        });
        instancia.addLayer({
          id: "grupos-numero",
          type: "symbol",
          source: "lugares",
          filter: ["has", "point_count"],
          layout: {
            "text-field": ["get", "point_count_abbreviated"],
            "text-font": ["Noto Sans Regular"],
            "text-size": 12,
            "text-allow-overlap": true,
          },
          paint: { "text-color": "#ffffff" },
        });
        instancia.addLayer({
          id: "lugares",
          type: "circle",
          source: "lugares",
          filter: ["!", ["has", "point_count"]],
          paint: {
            "circle-color": ["case", ["get", "dudoso"], COLOR_DUDOSO, COLOR],
            "circle-radius": ["case", ["get", "elegido"], 10, 7],
            "circle-stroke-color": [
              "case",
              ["get", "elegido"],
              COLOR_TEXTO,
              "#ffffff",
            ],
            "circle-stroke-width": ["case", ["get", "elegido"], 3, 2],
          },
        });

        instancia.addSource("menciones", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: menciones.map((mencion) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [mencion.coords[1], mencion.coords[0]],
              },
              properties: { id: mencion.osm, nombre: mencion.nombre },
            })),
          },
        });
        instancia.addLayer({
          id: "menciones",
          type: "circle",
          source: "menciones",
          paint: {
            "circle-color": COLOR_MENCION,
            "circle-radius": 9,
            "circle-stroke-color": COLOR_TEXTO,
            "circle-stroke-width": 2,
          },
        });
        instancia.addLayer({
          id: "menciones-nombre",
          type: "symbol",
          source: "menciones",
          minzoom: 13,
          layout: {
            "text-field": ["get", "nombre"],
            "text-font": ["Noto Sans Regular"],
            "text-size": 12,
            "text-offset": [0, 1.4],
            "text-anchor": "top",
            "text-optional": true,
          },
          paint: {
            "text-color": COLOR_TEXTO,
            "text-halo-color": "#ffffff",
            "text-halo-width": 1.5,
          },
        });

        setMapaListo(true);
        actualizarVista();
      });

      instancia.on("click", async (evento) => {
        const [tocado] = instancia.queryRenderedFeatures(evento.point, {
          layers: ["menciones", "lugares", "grupos"],
        });

        if (!tocado) {
          setElegido(null);
          return;
        }

        const grupo = tocado.properties?.cluster_id;

        if (typeof grupo === "number") {
          const fuente = instancia.getSource("lugares") as
            | GeoJSONSource
            | undefined;
          const zoom = await fuente?.getClusterExpansionZoom(grupo);
          const [lon, lat] = (tocado.geometry as GeoJSON.Point).coordinates;

          instancia.easeTo({
            center: [lon, lat],
            zoom: zoom ?? ZOOM_DE_CIUDAD,
          });
          return;
        }

        const id = tocado.properties?.id;
        setElegido(typeof id === "string" ? id : null);
      });

      for (const capa of ["menciones", "lugares", "grupos"]) {
        instancia.on("mouseenter", capa, () => {
          instancia.getCanvas().style.cursor = "pointer";
        });
        instancia.on("mouseleave", capa, () => {
          instancia.getCanvas().style.cursor = "";
        });
      }

      instancia.on("moveend", actualizarVista);

      instancia.on("error", (evento) => {
        // Un mosaico que no carga no es un mapa roto; el estilo sí.
        if (!instancia.isStyleLoaded()) {
          setMapaRoto(true);
          setVista(vistaAlrededorDe(inicial.coords));
        }
        console.error(evento.error);
      });
    })();

    const pendientes = esperas.current;

    return () => {
      cancelado = true;
      for (const espera of pendientes) window.clearTimeout(espera);
      mapa.current?.remove();
      mapa.current = null;
    };
    // El mapa se monta una vez; lo que cambia después entra por las fuentes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Las celdas que se ven y todavía no se pidieron.
  useEffect(() => {
    if (vista.tipo !== "celdas") return;

    function esperar(ms: number, accion: () => void) {
      const espera = window.setTimeout(() => {
        esperas.current.delete(espera);
        accion();
      }, ms);
      esperas.current.add(espera);
    }

    async function pedir(clave: string) {
      const celda = celdaDeClave(clave);
      if (!celda) return;

      pedidas.current.add(clave);
      setCeldas((antes) =>
        antes[clave]?.estado === "lista"
          ? antes
          : { ...antes, [clave]: { estado: "cargando" } },
      );

      try {
        const respuesta = await fetch(rutaDeLugares(pais, plato.id, celda));

        if (respuesta.status === 503) {
          const segundos = Number(respuesta.headers.get("retry-after")) || 60;

          setCeldas((antes) => ({ ...antes, [clave]: { estado: "pausa" } }));
          esperar(segundos * 1000, () => void pedir(clave));
          return;
        }

        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

        const datos: LugaresDeLaCelda = await respuesta.json();

        const vieja = edadS(datos) > VIGENCIA_S;

        setCeldas((antes) => ({
          ...antes,
          [clave]: { estado: "lista", datos, vieja },
        }));

        if (vieja && !repedidas.current.has(clave)) {
          repedidas.current.add(clave);
          esperar(REPEDIR_MS, () => void pedir(clave));
        }
      } catch {
        // Si ya había datos de esta celda, se quedan; si no, falla.
        setCeldas((antes) =>
          antes[clave]?.estado === "lista"
            ? antes
            : { ...antes, [clave]: { estado: "fallo" } },
        );
        pedidas.current.delete(clave);
      }
    }

    for (const clave of vista.claves) {
      if (!pedidas.current.has(clave)) void pedir(clave);
    }
  }, [vista, pais, plato.id]);

  // Lo que se dibuja: los lugares y el elegido.
  useEffect(() => {
    if (!mapaListo) return;

    (mapa.current?.getSource("lugares") as GeoJSONSource | undefined)?.setData(
      geojsonDeLugares(lugares, new Date(), elegido),
    );
  }, [mapaListo, lugares, elegido]);

  /** Un vuelo corto dentro de la ciudad; a otra ciudad, un salto. */
  function irA(
    lat: number,
    lon: number,
    zoom = ZOOM_DE_CIUDAD,
    saltar = false,
  ) {
    if (saltar) {
      mapa.current?.jumpTo({ center: [lon, lat], zoom });
    } else {
      mapa.current?.flyTo({ center: [lon, lat], zoom });
    }
  }

  function reintentar() {
    if (vista.tipo !== "celdas") return;

    // Las que fallaron ya no están en `pedidas`: con una vista nueva, el
    // efecto de arriba las vuelve a pedir.
    setVista({ ...vista });
  }

  const visibles = vista.tipo === "celdas" ? vista.claves : [];
  const estados = visibles.map((clave) => celdas[clave]);
  const listas = estados.flatMap((celda) =>
    celda?.estado === "lista" ? [celda.datos] : [],
  );
  const fechas = listas.map((datos) => datos.actualizado).sort();
  const masVieja = fechas[0] ?? null;
  // La fecha de referencia para "hace años que nadie lo toca" es la de los
  // datos, no la del reloj: así el render no depende de cuándo corre.
  const hoy = new Date(fechas.at(-1) ?? masVieja ?? 0);
  const renovando = estados.some(
    (celda) => celda?.estado === "lista" && celda.vieja,
  );
  const cercanos = porCercania(lugares, centro);
  const idsEnLaZona = new Set(
    listas.flatMap((datos) => datos.lugares.map((lugar) => lugar.id)),
  );
  const enLaZona = idsEnLaZona.size;

  let mensaje: string;

  if (mapaRoto) {
    mensaje =
      "No se pudo dibujar el mapa en este navegador. La lista de abajo tiene los mismos lugares.";
  } else if (vista.tipo === "iniciando") {
    mensaje = "Cargando el mapa…";
  } else if (vista.tipo === "lejos") {
    mensaje = "Acercá el mapa para ver los lugares.";
  } else if (vista.tipo === "fuera") {
    mensaje = `Esta parte del mapa queda fuera de ${nombreDelPais}.`;
  } else if (estados.some((celda) => !celda || celda.estado === "cargando")) {
    mensaje = "Buscando lugares en OpenStreetMap…";
  } else if (estados.some((celda) => celda?.estado === "pausa")) {
    mensaje =
      "OpenStreetMap pidió una pausa: volvemos a buscar en un minuto. Mientras, quedan los últimos datos.";
  } else if (estados.some((celda) => celda?.estado === "fallo")) {
    mensaje = "No pudimos traer los lugares de una parte del mapa.";
  } else if (enLaZona === 0) {
    mensaje =
      "Todavía no hay lugares con este plato cargados en OpenStreetMap en esta zona.";
  } else {
    mensaje = `${formatCount(enLaZona)} ${enLaZona === 1 ? "lugar" : "lugares"} en esta zona.`;
  }

  // La hora puede terminar en "a. m.": la frase termina con ella, y el
  // punto no se repite.
  const hora = masVieja ? formatTimestamp(masVieja) : "";
  const cuando = hora.endsWith(".") ? hora : `${hora}.`;
  const fecha =
    masVieja && vista.tipo === "celdas"
      ? renovando
        ? `Estamos actualizando los datos de OpenStreetMap, que son del ${cuando}`
        : `Datos de OpenStreetMap del ${cuando}`
      : null;

  const lugarElegido = lugares.find((lugar) => lugar.id === elegido) ?? null;
  const mencionElegida =
    menciones.find((mencion) => mencion.osm === elegido) ?? null;
  const recortado = listas.some((datos) => datos.recortado);

  return (
    <section
      aria-label={`Dónde comer ${plato.nombre}`}
      className="flex flex-col gap-3"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Dónde comer {plato.nombre}</h3>
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          role="group"
          aria-label="Ciudades"
        >
          {ciudades.map((otra) => (
            <Button
              key={otra.id}
              size="sm"
              variant={otra.id === ciudad ? "default" : "outline"}
              aria-pressed={otra.id === ciudad}
              onClick={() => {
                setCiudad(otra.id);
                setElegido(null);

                if (mapa.current) {
                  irA(otra.coords[0], otra.coords[1], ZOOM_DE_CIUDAD, true);
                } else {
                  setCentro(otra.coords);
                  setVista(vistaAlrededorDe(otra.coords));
                }
              }}
            >
              {otra.nombre}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-sm" aria-live="polite">
        {mensaje}{" "}
        {fecha && <span className="text-muted-foreground">{fecha}</span>}{" "}
        {estados.some((celda) => celda?.estado === "fallo") && (
          <Button variant="link" className="h-auto p-0" onClick={reintentar}>
            Reintentar
          </Button>
        )}
      </p>

      <div className="relative">
        {/*
          El alto va en el contenedor mismo y no heredado con "absolute
          inset-0": MapLibre le pone position: relative al contenedor, y sin
          alto propio el mapa queda en cero.
        */}
        <div
          ref={contenedor}
          className="bg-muted h-[420px] w-full overflow-hidden rounded-xl border sm:h-[480px]"
        />
        {!mapaListo && (
          <div className="bg-muted text-muted-foreground absolute inset-0 flex items-center justify-center rounded-xl p-6 text-center text-sm">
            {mapaRoto ? "El mapa no se pudo cargar." : "Cargando el mapa…"}
          </div>
        )}
      </div>

      <p className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-xs">
        <span className="inline-flex items-center gap-1.5">
          <span
            className="size-2.5 rounded-full"
            style={{ background: COLOR }}
          />
          Confirmado o con cambios en los últimos años
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="size-2.5 rounded-full"
            style={{ background: COLOR_DUDOSO }}
          />
          Sin confirmar hace años: puede haber cerrado
        </span>
        {menciones.length > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="size-2.5 rounded-full border border-slate-900"
              style={{ background: COLOR_MENCION }}
            />
            Mención de honor
          </span>
        )}
      </p>

      {recortado && (
        <p className="text-muted-foreground text-xs">
          En esta zona hay más lugares de los que mostramos: son tantos que
          traemos los primeros mil de cada parte del mapa.
        </p>
      )}

      {(lugarElegido || mencionElegida) && (
        <FichaDeLugar
          lugar={lugarElegido}
          mencion={mencionElegida}
          hoy={hoy}
          onCerrar={() => setElegido(null)}
        />
      )}

      {cercanos.length > 0 && (
        <details className="rounded-xl border">
          <summary className="cursor-pointer px-4 py-3 text-sm font-medium">
            Ver los lugares en una lista ({formatCount(cercanos.length)})
          </summary>
          <ol className="divide-y border-t text-sm">
            {cercanos.slice(0, FILAS).map(({ lugar, distanciaKm }) => (
              <li
                key={lugar.id}
                className="flex items-center justify-between gap-3 px-4 py-2"
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium">
                    {lugar.nombre ?? "Sin nombre cargado"}
                  </span>
                  <span className="text-muted-foreground block text-xs">
                    {formatDistance(distanciaKm)} del centro del mapa
                    {sinNovedades(lugar, hoy) ? " · puede haber cerrado" : ""}
                  </span>
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setElegido(lugar.id);
                    irA(lugar.lat, lugar.lon, 16);
                  }}
                >
                  Ver
                </Button>
              </li>
            ))}
          </ol>
        </details>
      )}

      <p className="text-muted-foreground text-xs text-pretty">
        Lugares: © colaboradores de{" "}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          OpenStreetMap
        </a>
        , con licencia ODbL. ¿Falta uno, o cerró?{" "}
        <a
          href={urlParaAvisar(centro[0], centro[1])}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          Avisalo en OpenStreetMap
        </a>
        : cuando alguien lo corrige, acá se ve en un día.
      </p>
    </section>
  );
}

function FichaDeLugar({
  lugar,
  mencion,
  hoy,
  onCerrar,
}: {
  lugar: LugarDeComida | null;
  mencion: Mencion | null;
  hoy: Date;
  onCerrar: () => void;
}) {
  const nombre = lugar?.nombre ?? mencion?.nombre ?? "Sin nombre cargado";
  const lat = lugar?.lat ?? mencion!.coords[0];
  const lon = lugar?.lon ?? mencion!.coords[1];
  const horario = horarioEnCastellano(lugar?.horario ?? null);

  let novedad: string | null = null;

  if (lugar?.verificado) {
    novedad = `Alguien confirmó que sigue abierto en ${formatMonthYear(lugar.verificado)}.`;
  } else if (lugar && sinNovedades(lugar, hoy)) {
    const ano = anoDeLaUltimaNovedad(lugar);
    novedad = ano
      ? `Nadie lo confirma en OpenStreetMap desde ${ano}: puede haber cerrado.`
      : "Nadie lo confirmó en OpenStreetMap: puede haber cerrado.";
  } else if (lugar) {
    novedad = `Última novedad en OpenStreetMap: ${anoDeLaUltimaNovedad(lugar)}.`;
  }

  return (
    <div className="bg-card flex flex-col gap-2 rounded-xl border p-4 text-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-semibold">{nombre}</p>
          {lugar?.nombreLatino && (
            <p className="text-muted-foreground">{lugar.nombreLatino}</p>
          )}
          <p className="text-muted-foreground text-xs">
            {mencion
              ? `Mención de honor · ${NOMBRES_DE_MENCION[mencion.tipo]}`
              : lugar
                ? NOMBRES_DE_TIPO[lugar.tipo]
                : null}
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={onCerrar}>
          Cerrar
        </Button>
      </div>

      {mencion && <p className="text-pretty">{mencion.porQue}</p>}

      <dl className="grid gap-1">
        {lugar?.direccion && (
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Dirección</dt>
            <dd>{lugar.direccion}</dd>
          </div>
        )}
        {horario && (
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Horario</dt>
            <dd>{horario}</dd>
          </div>
        )}
        {lugar?.telefono && (
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Teléfono</dt>
            <dd>
              <a
                href={`tel:${lugar.telefono.replace(/[^\d+]/g, "")}`}
                className="underline underline-offset-2"
              >
                {lugar.telefono}
              </a>
            </dd>
          </div>
        )}
        {lugar?.web && (
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Web</dt>
            <dd className="min-w-0 truncate">
              <a
                href={lugar.web}
                target="_blank"
                rel="noopener noreferrer nofollow ugc"
                className="underline underline-offset-2"
              >
                {new URL(lugar.web).hostname}
              </a>
            </dd>
          </div>
        )}
      </dl>

      {novedad && <p className="text-muted-foreground text-xs">{novedad}</p>}

      <p className="flex flex-wrap gap-x-4 gap-y-1">
        <a
          href={urlParaLlegar(lat, lon)}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-2"
        >
          Cómo llegar
        </a>
        <a
          href={urlEnOpenStreetMap(lugar ?? { id: mencion!.osm })}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          Ver en OpenStreetMap
        </a>
        <a
          href={urlParaAvisar(lat, lon)}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          ¿Cerró o está mal? Avisá
        </a>
      </p>
    </div>
  );
}
