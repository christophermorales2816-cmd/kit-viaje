import type { GuidePlace } from "@/content/guias";
import { type Celda, centroDeCelda, claveDeCelda } from "@/lib/comidas/celdas";
import { distanciaKm } from "@/lib/geo";

/**
 * Los servicios para viajeros cerca de los destinos de una guía (spec, 26).
 *
 * Lo que alguien necesita encontrar lejos de una ciudad, con el teléfono y el
 * horario cuando OpenStreetMap los tiene: dónde preguntar, dónde atenderse,
 * dónde cargar combustible o sacar efectivo, dónde pasar la noche en la
 * montaña. Salen de OpenStreetMap por la misma grilla de celdas que el mapa de
 * cada plato (src/lib/comidas/celdas.ts), y se piden solo cuando alguien los
 * activa en el mapa de la guía.
 */

/**
 * Los tipos de servicio, en el orden de la leyenda: primero lo que más sirve
 * en un lugar remoto.
 */
export const TIPOS_DE_SERVICIO = [
  "informacion",
  "salud",
  "farmacia",
  "policia",
  "combustible",
  "dinero",
  "refugio",
] as const;

export type TipoDeServicio = (typeof TIPOS_DE_SERVICIO)[number];

/**
 * Cómo se dibuja cada tipo: un círculo de color con una letra blanca adentro.
 *
 * La letra no es un adorno: rojo y verde —salud y farmacia— se confunden con
 * el daltonismo más común, y la letra los distingue igual. Los colores tienen
 * contraste de 4,5:1 o más con el blanco, para que la letra se lea.
 */
export const DIBUJO_DEL_SERVICIO: Record<
  TipoDeServicio,
  { color: string; letra: string }
> = {
  informacion: { color: "#2563eb", letra: "i" },
  salud: { color: "#dc2626", letra: "H" },
  farmacia: { color: "#15803d", letra: "+" },
  policia: { color: "#7c3aed", letra: "P" },
  combustible: { color: "#b45309", letra: "C" },
  dinero: { color: "#0f766e", letra: "$" },
  refugio: { color: "#57534e", letra: "R" },
};

/** Un servicio, tal como viaja del servidor al mapa. */
export interface ServicioCercano {
  /** Como en la URL de OpenStreetMap: "node/123", "way/456". */
  id: string;
  tipo: TipoDeServicio;
  /** null si en OpenStreetMap no tiene nombre. */
  nombre: string | null;
  /** El nombre en alfabeto latino, si el de allá no lo está. */
  nombreLatino: string | null;
  lat: number;
  lon: number;
  /** Para mostrar; el enlace sale de `hrefDeTelefono`. */
  telefono: string | null;
  /** El horario tal como está en OpenStreetMap ("Mo-Fr 08:00-20:00"). */
  horario: string | null;
  /** Solo http o https. */
  web: string | null;
  direccion: string | null;
}

/** Los servicios de una celda, con la hora en que se le preguntaron a OpenStreetMap. */
export interface ServiciosDeLaCelda {
  celda: string;
  /** Cuándo se le preguntó a Overpass, en ISO: decide si la caché sigue al día. */
  actualizado: string;
  /** Hasta cuándo llegan los datos del servidor de Overpass, en ISO, o null. */
  datosDel: string | null;
  servicios: ServicioCercano[];
  /** Si de algún tipo había más de los que se traen por celda. */
  recortado: boolean;
}

/** Lo que contesta la API por cada celda (src/app/api/servicios). */
export interface RespuestaDeServicios extends ServiciosDeLaCelda {
  /** Si los datos pasaron VIGENCIA_DE_SERVICIOS_S y ya se están pidiendo de nuevo. */
  renovando: boolean;
}

/**
 * Hasta qué edad los servicios de una celda se consideran al día: una semana.
 *
 * Un hospital, una comisaría o una estación de servicio no cambian de un día
 * para otro como un restaurante, y a OpenStreetMap se le pregunta lo menos
 * posible: el servidor es ajeno (src/lib/comidas/overpass.ts). La fecha de los
 * datos queda siempre a la vista.
 */
export const VIGENCIA_DE_SERVICIOS_S = 7 * 86_400;

/**
 * Hasta dónde se buscan servicios desde los destinos de la guía.
 *
 * Es "cerca de un destino": un día de ruta de ida y vuelta. También acota lo
 * que la API acepta pedirle a OpenStreetMap en nombre de alguien.
 */
export const RADIO_DE_SERVICIOS_KM = 150;

/** Desde qué zoom se cargan servicios: más lejos, las celdas son demasiadas. */
export const ZOOM_MINIMO_DE_SERVICIOS = 11;

/** A qué zoom lleva "Servicios cerca": unos 15 km alrededor del destino. */
export const ZOOM_DE_SERVICIOS = 11.5;

/** Si una celda queda a menos de RADIO_DE_SERVICIOS_KM de algún destino de la guía. */
export function celdaCercaDeLaGuia(
  celda: Celda,
  places: readonly Pick<GuidePlace, "coords">[],
): boolean {
  const centro = centroDeCelda(celda);

  return places.some(
    (place) => distanciaKm(centro, place.coords) <= RADIO_DE_SERVICIOS_KM,
  );
}

export function rutaDeServicios(guia: string, celda: Celda): string {
  const busqueda = new URLSearchParams({ guia, celda: claveDeCelda(celda) });

  return `/api/servicios?${busqueda}`;
}

/**
 * El enlace para llamar: "tel:" y solo los dígitos, con el + adelante si lo
 * tiene. null si no quedan dígitos suficientes para un número.
 *
 * El teléfono viene de lo que cargó cualquiera en OpenStreetMap y termina en
 * un `href`: no pasa nada que no sea un dígito.
 */
export function hrefDeTelefono(telefono: string | null): string | null {
  const texto = telefono?.trim();
  if (!texto) return null;

  const digitos = texto.replace(/\D/g, "");
  if (digitos.length < 6 || digitos.length > 15) return null;

  return `tel:${texto.startsWith("+") ? "+" : ""}${digitos}`;
}
