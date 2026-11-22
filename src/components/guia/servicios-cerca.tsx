"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { celdaDeClave } from "@/lib/comidas/celdas";
import { horarioEnCastellano } from "@/lib/comidas/horarios";
import { urlEnOpenStreetMap, urlParaLlegar } from "@/lib/comidas/lugares";
import { minutosDePausa } from "@/lib/comidas/mapa";
import { formatCount, formatDistance, formatTimestamp } from "@/lib/format";
import {
  type VistaDeServicios,
  juntarServicios,
  serviciosPorCercania,
} from "@/lib/servicios/mapa";
import {
  DIBUJO_DEL_SERVICIO,
  type RespuestaDeServicios,
  type ServicioCercano,
  type ServiciosDeLaCelda,
  TIPOS_DE_SERVICIO,
  hrefDeTelefono,
  rutaDeServicios,
} from "@/lib/servicios/servicios";
import { useTextos } from "@/i18n/cliente";
import { enriquecer } from "@/i18n/enriquecer";
import { TEXTOS_DE_LA_GUIA, type TextosDeLaGuia } from "@/i18n/guia";

/**
 * Los servicios para viajeros del mapa de la guía (spec, 26): lo que los pide
 * y el panel de abajo del mapa. La capa del mapa la dibuja `PlacesMap`.
 *
 * Se pide como en el mapa de cada plato (src/components/comer/mapa-de-lugares.tsx):
 * por celdas, solo las que se ven y todavía no se pidieron. Si la API avisa
 * que los datos se están renovando, se muestran igual, se dice, y se vuelven
 * a pedir una vez a los REPEDIR_MS. Si Overpass frenó al sitio, se espera lo
 * que dice el Retry-After.
 */

const REPEDIR_MS = 8_000;

/** Cuántos servicios entran en la lista; el resto, en el mapa. */
const FILAS = 30;

type TextosDeServicios = TextosDeLaGuia["mapa"]["servicios"];

export type CeldasDeServicios = Record<
  string,
  | { estado: "cargando" }
  /** `vieja`: pasó la vigencia y se está renovando. */
  | { estado: "lista"; datos: ServiciosDeLaCelda; vieja: boolean }
  /** `segundos`: lo que pidió esperar el servidor antes de volver a preguntar. */
  | { estado: "pausa"; segundos: number }
  | { estado: "fallo" }
>;

/** Pide las celdas de la vista que todavía no se pidieron. */
export function useServiciosCerca(guia: string, vista: VistaDeServicios) {
  const [celdas, setCeldas] = useState<CeldasDeServicios>({});
  const [intento, setIntento] = useState(0);
  // Lo pedido y lo vuelto a pedir, fuera del estado: dos movimientos seguidos
  // del mapa no tienen que pedir dos veces la misma celda.
  const pedidas = useRef(new Set<string>());
  const repedidas = useRef(new Set<string>());
  const esperas = useRef(new Set<number>());

  useEffect(() => {
    const pendientes = esperas.current;

    return () => {
      for (const espera of pendientes) window.clearTimeout(espera);
    };
  }, []);

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
        const respuesta = await fetch(rutaDeServicios(guia, celda));

        if (respuesta.status === 503) {
          const segundos = Number(respuesta.headers.get("retry-after")) || 60;

          setCeldas((antes) =>
            antes[clave]?.estado === "lista"
              ? antes
              : { ...antes, [clave]: { estado: "pausa", segundos } },
          );
          esperar(segundos * 1000, () => void pedir(clave));
          return;
        }

        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

        const datos: RespuestaDeServicios = await respuesta.json();
        const vieja = datos.renovando === true;

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
  }, [vista, guia, intento]);

  const servicios = useMemo(
    () =>
      juntarServicios(
        Object.values(celdas).flatMap((celda) =>
          celda.estado === "lista" ? [celda.datos.servicios] : [],
        ),
      ),
    [celdas],
  );

  return {
    celdas,
    servicios,
    // Las que fallaron ya no están en `pedidas`: con otro intento, el efecto
    // de arriba las vuelve a pedir.
    reintentar: () => setIntento((antes) => antes + 1),
  };
}

function nombreDe(servicio: ServicioCercano, t: TextosDeServicios): string {
  if (!servicio.nombre) return t.sinNombre;

  return servicio.nombreLatino
    ? `${servicio.nombre} (${servicio.nombreLatino})`
    : servicio.nombre;
}

/**
 * El popup de un servicio en el mapa, armado con nodos: el texto viene de
 * OpenStreetMap y nunca se lee como HTML. Los enlaces salen solo de lo que ya
 * se revisó: la web es http o https, y el teléfono, dígitos.
 */
export function contenidoDelServicio(
  servicio: ServicioCercano,
  t: TextosDeServicios,
): HTMLElement {
  const contenido = document.createElement("div");
  contenido.className = "flex flex-col gap-1 text-sm";

  const tipo = document.createElement("span");
  tipo.className = "text-xs font-medium";
  tipo.style.color = DIBUJO_DEL_SERVICIO[servicio.tipo].color;
  tipo.textContent = t.tipos[servicio.tipo];

  const nombre = document.createElement("strong");
  nombre.textContent = nombreDe(servicio, t);

  contenido.append(tipo, nombre);

  if (servicio.direccion) {
    const direccion = document.createElement("span");
    direccion.className = "text-muted-foreground text-xs";
    direccion.textContent = servicio.direccion;
    contenido.append(direccion);
  }

  const llamar = hrefDeTelefono(servicio.telefono);
  if (servicio.telefono && llamar) {
    const fila = document.createElement("span");
    const enlace = document.createElement("a");
    enlace.href = llamar;
    enlace.className = "underline";
    enlace.textContent = servicio.telefono;
    fila.append(`${t.telefono}: `, enlace);
    contenido.append(fila);
  }

  const horario = horarioEnCastellano(servicio.horario);
  if (horario) {
    const fila = document.createElement("span");
    fila.textContent = `${t.horario}: ${horario}`;
    contenido.append(fila);
  }

  const enlaces = document.createElement("span");
  enlaces.className = "flex flex-wrap gap-x-3 text-xs";

  const destinos: [string, string][] = [
    ...(servicio.web ? [[t.web, servicio.web] as [string, string]] : []),
    [t.comoLlegar, urlParaLlegar(servicio.lat, servicio.lon)],
    [t.verEnOpenStreetMap, urlEnOpenStreetMap(servicio)],
  ];

  for (const [texto, url] of destinos) {
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.className = "underline";
    enlace.textContent = texto;
    enlaces.append(enlace);
  }

  contenido.append(enlaces);

  return contenido;
}

/** El círculo con la letra de un tipo, como en el mapa. */
function Marca({ tipo }: { tipo: ServicioCercano["tipo"] }) {
  const { color, letra } = DIBUJO_DEL_SERVICIO[tipo];

  return (
    <span
      aria-hidden="true"
      className="inline-flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-white text-[11px] leading-none font-bold text-white shadow-sm"
      style={{ backgroundColor: color }}
    >
      {letra}
    </span>
  );
}

interface Props {
  activo: boolean;
  onCambiar: (activo: boolean) => void;
  onVerElPais: () => void;
  vista: VistaDeServicios;
  celdas: CeldasDeServicios;
  servicios: ServicioCercano[];
  centro: [number, number];
  onReintentar: () => void;
}

/** El panel de abajo del mapa: el botón, lo que está pasando, la leyenda y la lista. */
export function PanelDeServicios({
  activo,
  onCambiar,
  onVerElPais,
  vista,
  celdas,
  servicios,
  centro,
  onReintentar,
}: Props) {
  const t = useTextos(TEXTOS_DE_LA_GUIA).mapa.servicios;

  const visibles = vista.tipo === "celdas" ? vista.claves : [];
  const estados = visibles.map((clave) => celdas[clave]);
  const listas = estados.flatMap((celda) =>
    celda?.estado === "lista" ? [celda.datos] : [],
  );
  const pausas = estados.flatMap((celda) =>
    celda?.estado === "pausa" ? [celda.segundos] : [],
  );
  // La fecha que se muestra es la de los datos del servidor, no la de la
  // consulta: un servidor atrasado contesta hoy con datos de hace días.
  const masVieja =
    listas.map((datos) => datos.datosDel ?? datos.actualizado).sort()[0] ??
    null;
  const renovando = estados.some(
    (celda) => celda?.estado === "lista" && celda.vieja,
  );
  const idsEnLaZona = new Set(
    listas.flatMap((datos) => datos.servicios.map((servicio) => servicio.id)),
  );
  const enLaZona = servicios.filter((servicio) => idsEnLaZona.has(servicio.id));
  const cercanos = serviciosPorCercania(enLaZona, centro);
  const recortado = listas.some((datos) => datos.recortado);
  const fallo = estados.some((celda) => celda?.estado === "fallo");

  let mensaje: string | null = null;

  if (vista.tipo === "apagado") {
    // Prendidos pero todavía sin vista: el mapa va volando al destino.
    mensaje = activo ? t.buscando : null;
  } else if (vista.tipo === "lejos") {
    mensaje = t.acercalo;
  } else if (vista.tipo === "fuera") {
    mensaje = t.fuera;
  } else if (vista.tipo === "celdas") {
    if (estados.some((celda) => !celda || celda.estado === "cargando")) {
      mensaje = t.buscando;
    } else if (pausas.length > 0) {
      mensaje = t.pausa(minutosDePausa(Math.max(...pausas)));
    } else if (fallo) {
      mensaje = t.fallo;
    } else if (enLaZona.length === 0) {
      mensaje = t.sinServicios;
    } else {
      mensaje = t.enLaZona(enLaZona.length, formatCount(enLaZona.length));
    }
  }

  // La hora puede terminar en "a. m.": la frase termina con ella, y el punto
  // no se repite.
  const hora = masVieja ? formatTimestamp(masVieja) : "";
  const cuando = hora.endsWith(".") ? hora : `${hora}.`;
  const fecha =
    masVieja && vista.tipo === "celdas"
      ? renovando
        ? t.actualizando(cuando)
        : t.datosDel(cuando)
      : null;

  return (
    <div className="flex flex-col gap-3 rounded-xl border p-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{t.titulo}</h3>
        <p className="text-muted-foreground text-sm text-pretty">{t.bajada}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant={activo ? "outline" : "default"}
          aria-pressed={activo}
          onClick={() => onCambiar(!activo)}
        >
          {activo ? t.ocultar : t.mostrar}
        </Button>

        {activo && (
          <Button size="sm" variant="outline" onClick={onVerElPais}>
            {t.verElPais}
          </Button>
        )}
      </div>

      {activo && (
        <>
          <p className="text-sm" aria-live="polite">
            {mensaje}{" "}
            {fecha && <span className="text-muted-foreground">{fecha}</span>}
            {fallo && (
              <>
                {" "}
                <button
                  type="button"
                  className="underline"
                  onClick={onReintentar}
                >
                  {t.reintentar}
                </button>
              </>
            )}
          </p>

          {recortado && vista.tipo === "celdas" && (
            <p className="text-muted-foreground text-xs">{t.recortado}</p>
          )}

          <ul
            aria-label={t.leyenda}
            className="grid grid-cols-1 gap-x-4 gap-y-1.5 text-xs sm:grid-cols-2"
          >
            {TIPOS_DE_SERVICIO.map((tipo) => (
              <li key={tipo} className="flex items-center gap-2">
                <Marca tipo={tipo} />
                {t.tipos[tipo]}
              </li>
            ))}
          </ul>

          {cercanos.length > 0 && (
            <details className="text-sm">
              <summary className="cursor-pointer font-medium">
                {t.verLaLista(formatCount(cercanos.length))}
              </summary>

              <ul className="mt-3 flex flex-col gap-3">
                {cercanos.slice(0, FILAS).map(({ servicio, distanciaKm }) => {
                  const llamar = hrefDeTelefono(servicio.telefono);
                  const horario = horarioEnCastellano(servicio.horario);

                  return (
                    <li key={servicio.id} className="flex gap-2">
                      <Marca tipo={servicio.tipo} />
                      <div className="flex min-w-0 flex-col gap-0.5">
                        <span className="font-medium">
                          {nombreDe(servicio, t)}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {t.tipos[servicio.tipo]} ·{" "}
                          {t.delCentro(formatDistance(distanciaKm))}
                        </span>
                        {servicio.telefono && llamar && (
                          <span className="text-xs">
                            {t.telefono}:{" "}
                            <a href={llamar} className="underline">
                              {servicio.telefono}
                            </a>
                          </span>
                        )}
                        {horario && (
                          <span className="text-xs">
                            {t.horario}: {horario}
                          </span>
                        )}
                        <span className="flex flex-wrap gap-x-3 text-xs">
                          {servicio.web && (
                            <a
                              href={servicio.web}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              {t.web}
                            </a>
                          )}
                          <a
                            href={urlParaLlegar(servicio.lat, servicio.lon)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                          >
                            {t.comoLlegar}
                          </a>
                          <a
                            href={urlEnOpenStreetMap(servicio)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                          >
                            {t.verEnOpenStreetMap}
                          </a>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {cercanos.length > FILAS && (
                <p className="text-muted-foreground mt-3 text-xs">
                  {t.yMas(formatCount(cercanos.length - FILAS))}
                </p>
              )}
            </details>
          )}

          <p className="text-muted-foreground text-xs text-pretty">
            {enriquecer(t.fuentes, {
              osm: (texto) => (
                <a
                  href="https://www.openstreetmap.org/copyright"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {texto}
                </a>
              ),
            })}
          </p>
        </>
      )}
    </div>
  );
}
