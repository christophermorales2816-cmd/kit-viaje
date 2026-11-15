import { allGuides } from "./index";
import type { DestinationGuide, GuideSubregion } from "./types";

/**
 * Los continentes del sitio y sus zonas (spec, sección 19).
 *
 * Las zonas (`GuideSubregion`) agrupan las guías en las listas de destinos; los
 * continentes agrupan las zonas en el menú, en el pie, en /destinos y en la
 * portada. Vivía en la portada, que era la única que agrupaba; ahora lo usan
 * cinco lugares, y por eso está acá.
 *
 * Este archivo importa todas las guías: se usa desde el servidor. Lo que llega
 * al navegador (el menú) recibe los datos ya armados por props.
 */

export type ContinenteId = "america" | "europa" | "africa" | "asia" | "oceania";

export interface Continente {
  id: ContinenteId;
  nombre: string;
  /** Una línea, para el menú y las tarjetas. */
  resumen: string;
  /** Sus zonas, en el orden en que se muestran. */
  zonas: GuideSubregion[];
}

/**
 * Las zonas en el orden en que se muestran: América de sur a norte, después
 * Europa, África de norte a sur, Asia de oeste a este y Oceanía, que empieza
 * por Australia y Nueva Zelanda y termina en la Polinesia. Los continentes van
 * de oeste a este (spec, 15.1 y 16.1): África, que tiene casi la misma
 * longitud que Europa, queda entre Europa y Asia, y Oceanía, al final.
 *
 * Una zona que falte en esta lista dejaría a sus países fuera de todas las
 * listas: el test lo verifica.
 */
export const ZONAS: GuideSubregion[] = [
  "Sudamérica",
  "México y Centroamérica",
  "Caribe",
  "Europa del Sur",
  "Europa Occidental",
  "Europa del Norte",
  "Europa del Este",
  "África del Norte",
  "África Occidental",
  "África Central",
  "África Oriental",
  "África Austral",
  "Asia Occidental",
  "Asia Central",
  "Asia del Sur",
  "Sudeste Asiático",
  "Asia Oriental",
  "Australia y Nueva Zelanda",
  "Melanesia",
  "Micronesia",
  "Polinesia",
];

/**
 * El continente de cada zona. Un Record sobre el tipo cerrado obliga a
 * decidirlo para cada zona nueva: sin su línea, no compila.
 */
const CONTINENTE_DE_LA_ZONA: Record<GuideSubregion, ContinenteId> = {
  Sudamérica: "america",
  "México y Centroamérica": "america",
  Caribe: "america",
  "Europa del Sur": "europa",
  "Europa Occidental": "europa",
  "Europa del Norte": "europa",
  "Europa del Este": "europa",
  "África del Norte": "africa",
  "África Occidental": "africa",
  "África Central": "africa",
  "África Oriental": "africa",
  "África Austral": "africa",
  "Asia Occidental": "asia",
  "Asia Central": "asia",
  "Asia del Sur": "asia",
  "Sudeste Asiático": "asia",
  "Asia Oriental": "asia",
  "Australia y Nueva Zelanda": "oceania",
  Melanesia: "oceania",
  Micronesia: "oceania",
  Polinesia: "oceania",
};

const NOMBRES: Record<ContinenteId, { nombre: string; resumen: string }> = {
  america: {
    nombre: "América",
    resumen: "De la Patagonia a México y las islas del Caribe.",
  },
  europa: {
    nombre: "Europa",
    resumen: "Del Mediterráneo al círculo polar, de Portugal a Turquía.",
  },
  africa: {
    nombre: "África",
    resumen: "Del Sahara al Cabo de Buena Esperanza y las islas del Índico.",
  },
  asia: {
    nombre: "Asia",
    resumen: "Del Cáucaso a Japón, pasando por la India y el Sudeste Asiático.",
  },
  oceania: {
    nombre: "Oceanía",
    resumen: "Australia, Nueva Zelanda y las islas del Pacífico.",
  },
};

/** Los cinco, de oeste a este. */
export const CONTINENTES: Continente[] = (
  ["america", "europa", "africa", "asia", "oceania"] as const
).map((id) => ({
  id,
  ...NOMBRES[id],
  zonas: ZONAS.filter((zona) => CONTINENTE_DE_LA_ZONA[zona] === id),
}));

const POR_ID = new Map(
  CONTINENTES.map((continente) => [continente.id, continente]),
);

/** `undefined` si no existe: la ruta responde 404. */
export function getContinente(id: string): Continente | undefined {
  return POR_ID.get(id as ContinenteId);
}

export function continenteDeLaZona(zona: GuideSubregion): Continente {
  return POR_ID.get(CONTINENTE_DE_LA_ZONA[zona])!;
}

export interface GuiasDeUnaZona {
  zona: GuideSubregion;
  guias: DestinationGuide[];
}

/**
 * Las guías agrupadas por zona, en el orden de `ZONAS` y por nombre adentro de
 * cada una. Las zonas sin guías no aparecen.
 */
export function guiasPorZona(
  guias: DestinationGuide[] = allGuides(),
): GuiasDeUnaZona[] {
  return ZONAS.map((zona) => ({
    zona,
    guias: guias
      .filter((guia) => guia.subregion === zona)
      .sort((a, b) => a.country.localeCompare(b.country, "es")),
  })).filter(({ guias: deLaZona }) => deLaZona.length > 0);
}

export function guiasDelContinente(
  id: ContinenteId,
  guias: DestinationGuide[] = allGuides(),
): DestinationGuide[] {
  return guias.filter((guia) => CONTINENTE_DE_LA_ZONA[guia.subregion] === id);
}

/** Lo que el menú necesita de cada continente: va al navegador por props. */
export interface ContinenteDelMenu {
  id: ContinenteId;
  nombre: string;
  resumen: string;
  cantidad: number;
}

export function continentesDelMenu(
  guias: DestinationGuide[] = allGuides(),
): ContinenteDelMenu[] {
  return CONTINENTES.map(({ id, nombre, resumen }) => ({
    id,
    nombre,
    resumen,
    cantidad: guiasDelContinente(id, guias).length,
  }));
}

/** El primer número del hero de cada guía: lo que define a ese país. */
export function rasgoDeLaGuia(guia: DestinationGuide): string {
  const [primero] = guia.highlights;
  return `${primero.value} ${primero.label}`;
}
