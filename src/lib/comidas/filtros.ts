import type {
  Aventura,
  CatalogoDeComida,
  Contiene,
  Lugar,
  Momento,
  Picante,
  Plato,
  Precio,
} from "@/content/comidas/types";

/**
 * Los filtros del catálogo (spec, 18.3).
 *
 * Dentro de un grupo se suman (vegano o vegetariano) y entre grupos se cruzan
 * (vegano y barato): es lo que espera cualquiera que usó una tienda en línea.
 * Cada opción muestra cuántos platos quedarían al elegirla, contando todo lo
 * demás que ya está elegido.
 */

export type Dieta = "vegetariano" | "vegano" | "con-carne" | "con-pescado";

/** La opción de región para lo que se come en todo el país. */
export const TODO_EL_PAIS = "todo-el-pais";

export interface Filtros {
  dieta: Dieta[];
  /**
   * "Halal" en el pedido original. No se llama así porque no podemos
   * certificarlo: halal también es cómo se faenó la carne. Lo que sí se puede
   * decir es si lleva cerdo o alcohol.
   */
  sinCerdoNiAlcohol: boolean;
  picante: Picante[];
  lugares: Lugar[];
  momentos: Momento[];
  aventura: Aventura[];
  precio: Precio[];
  /** Ids de región o TODO_EL_PAIS. */
  regiones: string[];
  imperdibles: boolean;
  paraComerSolo: boolean;
}

export type GrupoDeFiltro = keyof Filtros;

export const SIN_FILTROS: Filtros = {
  dieta: [],
  sinCerdoNiAlcohol: false,
  picante: [],
  lugares: [],
  momentos: [],
  aventura: [],
  precio: [],
  regiones: [],
  imperdibles: false,
  paraComerSolo: false,
};

const GRUPOS = Object.keys(SIN_FILTROS) as GrupoDeFiltro[];

export const DIETAS: Dieta[] = [
  "vegetariano",
  "vegano",
  "con-carne",
  "con-pescado",
];

// El orden en que se muestran las opciones de cada grupo.
const PICANTES: Picante[] = [0, 1, 2, 3];
const PRECIOS: Precio[] = [1, 2, 3, 4];
const AVENTURAS: Aventura[] = [
  "para-todos",
  "para-animarse",
  "gusto-adquirido",
];
const MOMENTOS: Momento[] = [
  "desayuno",
  "almuerzo",
  "cena",
  "snack",
  "postre",
  "bebida",
];
const LUGARES: Lugar[] = [
  "puesto",
  "mercado",
  "casual",
  "restaurante",
  "alta-cocina",
  "bar",
  "cafe",
  "panaderia",
  "dulceria",
  "heladeria",
  "almacen",
  "tienda",
  "casa",
];

const ANIMAL: Contiene[] = [
  "carne",
  "cerdo",
  "pescado",
  "mariscos",
  "insectos",
];
const DE_ORIGEN_ANIMAL: Contiene[] = [...ANIMAL, "huevo", "lacteos", "miel"];

export function esVegetariano(contiene: readonly Contiene[]): boolean {
  return !contiene.some((cosa) => ANIMAL.includes(cosa));
}

export function esVegano(contiene: readonly Contiene[]): boolean {
  return !contiene.some((cosa) => DE_ORIGEN_ANIMAL.includes(cosa));
}

export function llevaCarne(contiene: readonly Contiene[]): boolean {
  return contiene.includes("carne") || contiene.includes("cerdo");
}

export function llevaPescado(contiene: readonly Contiene[]): boolean {
  return contiene.includes("pescado") || contiene.includes("mariscos");
}

export function sinCerdoNiAlcohol(contiene: readonly Contiene[]): boolean {
  return !contiene.includes("cerdo") && !contiene.includes("alcohol");
}

export function tieneDieta(plato: Plato, dieta: Dieta): boolean {
  switch (dieta) {
    case "vegetariano":
      return esVegetariano(plato.contiene);
    case "vegano":
      return esVegano(plato.contiene);
    case "con-carne":
      return llevaCarne(plato.contiene);
    case "con-pescado":
      return llevaPescado(plato.contiene);
  }
}

function algunoDe<T>(elegidos: readonly T[], cumple: (valor: T) => boolean) {
  return elegidos.length === 0 || elegidos.some(cumple);
}

function cumpleElGrupo(
  plato: Plato,
  filtros: Filtros,
  grupo: GrupoDeFiltro,
): boolean {
  switch (grupo) {
    case "dieta":
      return algunoDe(filtros.dieta, (dieta) => tieneDieta(plato, dieta));
    case "sinCerdoNiAlcohol":
      return !filtros.sinCerdoNiAlcohol || sinCerdoNiAlcohol(plato.contiene);
    case "picante":
      return algunoDe(filtros.picante, (nivel) => plato.picante === nivel);
    case "lugares":
      return algunoDe(filtros.lugares, (lugar) =>
        plato.lugares.includes(lugar),
      );
    case "momentos":
      return algunoDe(filtros.momentos, (momento) =>
        plato.momentos.includes(momento),
      );
    case "aventura":
      return algunoDe(filtros.aventura, (nivel) => plato.aventura === nivel);
    case "precio":
      return algunoDe(filtros.precio, (precio) => plato.precio === precio);
    case "regiones":
      // Una región elegida muestra lo típico de ahí, no todo lo que se
      // consigue ahí: si no, Hokkaido mostraría medio catálogo.
      return algunoDe(filtros.regiones, (region) =>
        region === TODO_EL_PAIS
          ? plato.regiones.length === 0
          : plato.regiones.includes(region),
      );
    case "imperdibles":
      return !filtros.imperdibles || plato.imperdible;
    case "paraComerSolo":
      return !filtros.paraComerSolo || plato.paraComerSolo;
  }
}

/** Si el plato pasa todos los filtros, salvo los del grupo `salvo`. */
export function cumple(
  plato: Plato,
  filtros: Filtros,
  salvo?: GrupoDeFiltro,
): boolean {
  return GRUPOS.every(
    (grupo) => grupo === salvo || cumpleElGrupo(plato, filtros, grupo),
  );
}

export function filtrar(platos: readonly Plato[], filtros: Filtros): Plato[] {
  return platos.filter((plato) => cumple(plato, filtros));
}

/**
 * Cuántos platos quedarían con una opción más: la cuenta que va al lado de
 * cada una. Dentro de su grupo la opción se suma, así que la cuenta es la de
 * esa opción sola con el resto de los grupos como están.
 */
export function contarOpcion<G extends GrupoDeFiltro>(
  platos: readonly Plato[],
  filtros: Filtros,
  grupo: G,
  valor: Filtros[G] extends readonly (infer V)[] ? V : true,
): number {
  const conLaOpcion = {
    ...filtros,
    [grupo]: Array.isArray(filtros[grupo]) ? [valor] : true,
  } as Filtros;

  return platos.filter((plato) => cumple(plato, conLaOpcion)).length;
}

/** Cuántos filtros hay elegidos: el número del botón "Filtros". */
export function cantidadDeFiltros(filtros: Filtros): number {
  return GRUPOS.reduce((total, grupo) => {
    const valor = filtros[grupo];

    return total + (Array.isArray(valor) ? valor.length : valor ? 1 : 0);
  }, 0);
}

export interface OpcionesDelCatalogo {
  picante: Picante[];
  lugares: Lugar[];
  momentos: Momento[];
  aventura: Aventura[];
  precio: Precio[];
  /** Ids de región, y TODO_EL_PAIS al final si hay platos de todo el país. */
  regiones: string[];
  /**
   * Los interruptores que dejan afuera algún plato. Si en México todo se puede
   * comer solo, "Para comer solo" no filtra nada y no se muestra.
   */
  interruptores: ("imperdibles" | "paraComerSolo" | "sinCerdoNiAlcohol")[];
}

/**
 * Las opciones que tienen sentido en un país: las que tiene algún plato.
 *
 * Una opción que nunca puede dar resultados no es un filtro, es ruido: la
 * izakaya no aparece en México, ni la región de Kansai en la Argentina.
 */
export function opcionesDelCatalogo(
  catalogo: CatalogoDeComida,
): OpcionesDelCatalogo {
  const { platos } = catalogo;
  const presentes = <T>(todos: readonly T[], delPlato: (plato: Plato) => T[]) =>
    todos.filter((valor) =>
      platos.some((plato) => delPlato(plato).includes(valor)),
    );

  const regiones = catalogo.regiones
    .map((region) => region.id)
    .filter((id) => platos.some((plato) => plato.regiones.includes(id)));

  if (platos.some((plato) => plato.regiones.length === 0)) {
    regiones.push(TODO_EL_PAIS);
  }

  const interruptores = (
    ["imperdibles", "paraComerSolo", "sinCerdoNiAlcohol"] as const
  ).filter((grupo) =>
    platos.some((plato) => !cumple(plato, { ...SIN_FILTROS, [grupo]: true })),
  );

  return {
    picante: presentes(PICANTES, (plato) => [plato.picante]),
    lugares: presentes(LUGARES, (plato) => plato.lugares),
    momentos: presentes(MOMENTOS, (plato) => plato.momentos),
    aventura: presentes(AVENTURAS, (plato) => [plato.aventura]),
    precio: presentes(PRECIOS, (plato) => [plato.precio]),
    regiones,
    interruptores,
  };
}

/**
 * Los filtros en la URL, para que una búsqueda se pueda compartir: "comida
 * vegana y barata en Japón" es un link.
 *
 * Los nombres de los parámetros son los de la página, en castellano. Un valor
 * que no existe se ignora en vez de romper: la URL la puede escribir
 * cualquiera.
 */
const PARAMETROS: Record<GrupoDeFiltro, string> = {
  dieta: "dieta",
  sinCerdoNiAlcohol: "sin-cerdo-ni-alcohol",
  picante: "picante",
  lugares: "lugar",
  momentos: "momento",
  aventura: "aventura",
  precio: "precio",
  regiones: "region",
  imperdibles: "imperdibles",
  paraComerSolo: "para-comer-solo",
};

export function filtrosDeLaUrl(
  busqueda: URLSearchParams,
  regionesValidas: readonly string[],
): Filtros {
  const lista = <T>(grupo: GrupoDeFiltro, validos: readonly T[]): T[] => {
    const crudo = busqueda.get(PARAMETROS[grupo]);
    if (!crudo) return [];

    const pedidos = crudo.split(",");

    return validos.filter((valor) => pedidos.includes(String(valor)));
  };
  const si = (grupo: GrupoDeFiltro) => busqueda.get(PARAMETROS[grupo]) === "1";

  return {
    dieta: lista("dieta", DIETAS),
    sinCerdoNiAlcohol: si("sinCerdoNiAlcohol"),
    picante: lista("picante", PICANTES),
    lugares: lista("lugares", LUGARES),
    momentos: lista("momentos", MOMENTOS),
    aventura: lista("aventura", AVENTURAS),
    precio: lista("precio", PRECIOS),
    regiones: lista("regiones", [...regionesValidas, TODO_EL_PAIS]),
    imperdibles: si("imperdibles"),
    paraComerSolo: si("paraComerSolo"),
  };
}

/** La inversa de filtrosDeLaUrl: "?dieta=vegano&precio=1,2", o "". */
export function busquedaDeFiltros(filtros: Filtros): string {
  const busqueda = new URLSearchParams();

  for (const grupo of GRUPOS) {
    const valor = filtros[grupo];

    if (Array.isArray(valor)) {
      if (valor.length > 0) busqueda.set(PARAMETROS[grupo], valor.join(","));
    } else if (valor) {
      busqueda.set(PARAMETROS[grupo], "1");
    }
  }

  const texto = busqueda.toString();

  // URLSearchParams escribe la coma como %2C; en la barra del navegador se lee
  // mejor tal cual, y es válida en una query.
  return texto ? `?${texto.replaceAll("%2C", ",")}` : "";
}
