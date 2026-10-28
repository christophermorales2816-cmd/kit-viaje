/**
 * El catálogo de "Qué comer y beber" de cada país (spec, sección 18).
 *
 * Vive en el repo, como las guías, por la misma razón: es contenido editorial
 * y cada cambio tiene que ser un diff que alguien lee en un PR. Lo que sí
 * cambia solo —qué lugares sirven cada plato— no se escribe acá: sale de
 * OpenStreetMap cuando alguien abre el mapa (src/lib/comidas/overpass.ts).
 *
 * El país (nombre, zona) no se repite: sale de la guía con el mismo slug.
 */

/**
 * Lo que lleva un plato, en las categorías que deciden si alguien lo puede
 * comer.
 *
 * Se marca lo que lleva la versión de siempre, no la que se puede pedir. Los
 * filtros de dieta se derivan de esto (src/lib/comidas/filtros.ts) en vez de
 * marcarse a mano: "vegetariano" escrito al lado de un plato con caldo de
 * pescado es el error que más fácil se comete y el que más le importa a quien
 * lo lee. Con la lista de lo que lleva, ese error no se puede escribir.
 */
export type Contiene =
  /** Cualquier carne que no sea de cerdo: vaca, cordero, cabra, pollo, pato. */
  | "carne"
  /** También la grasa, el caldo y los embutidos. */
  | "cerdo"
  /** También el caldo, la salsa de pescado y las anchoas. */
  | "pescado"
  | "mariscos"
  /** Chapulines, gusanos de maguey: no es carne, pero tampoco es vegetariano. */
  | "insectos"
  | "huevo"
  | "lacteos"
  | "miel"
  /** En el plato o en la receta, aunque se evapore en parte al cocinarse. */
  | "alcohol"
  | "gluten"
  | "mani"
  | "frutos-secos"
  | "soja"
  | "sesamo";

/** De 0 a 3: nada, suave, medio, picante. */
export type Picante = 0 | 1 | 2 | 3;

/**
 * Lo que cuesta una porción para una persona, en dólares: de 1 ($) a 4 ($$$$).
 *
 * En dólares y no en moneda local porque la página es para comparar entre
 * países, y "$$" tiene que querer decir lo mismo en Japón que en México. Los
 * rangos están en src/lib/comidas/filtros.ts.
 */
export type Precio = 1 | 2 | 3 | 4;

/** Cuándo se come o se toma. Un plato puede tener varios. */
export type Momento =
  | "desayuno"
  | "almuerzo"
  | "cena"
  | "snack"
  | "postre"
  | "bebida";

/**
 * Dónde se consigue.
 *
 * Una lista corta y común a todos los países, para que el filtro quiera decir
 * lo mismo en todos. Lo que cambia es cómo se llama cada uno: en Japón el bar
 * es una izakaya y el almacén, un konbini (`nombresDeLugares`).
 */
export type Lugar =
  /** Puesto callejero, carrito o puesto de feria. */
  | "puesto"
  | "mercado"
  | "panaderia"
  /** Pastelería, confitería, dulcería. */
  | "dulceria"
  /** Tienda de conveniencia, kiosco, almacén. */
  | "almacen"
  /** Tienda especializada: de té, de quesos, de sake. */
  | "tienda"
  /** Restaurante sencillo y barato: fonda, bodegón, comedor. */
  | "casual"
  /** Restaurante de precio medio. */
  | "restaurante"
  | "alta-cocina"
  /** Bar, pub, cantina, izakaya. */
  | "bar"
  /** Café o casa de té. */
  | "cafe"
  | "heladeria"
  /** Se come sobre todo en casa o en fiestas: difícil de pedir afuera. */
  | "casa";

/**
 * Qué tan lejos está de lo que conoce alguien que nunca fue.
 *
 * "para-todos" no quiere decir "aburrido": quiere decir que nadie se va a
 * sorprender por la textura o el olor. "gusto-adquirido" es el natto.
 */
export type Aventura = "para-todos" | "para-animarse" | "gusto-adquirido";

/**
 * Los tipos de lugar de OpenStreetMap en los que se busca un plato
 * (src/lib/comidas/osm.ts traduce cada uno a sus etiquetas).
 */
export type TipoDeLugarOsm =
  /** Restaurantes, comida al paso y patios de comida. */
  | "comida"
  | "cafe"
  /** Bares y pubs. */
  | "bar"
  | "heladeria"
  | "panaderia"
  /** Pastelerías, confiterías y chocolaterías. */
  | "dulceria"
  | "mercado"
  | "almacen"
  /** Vinotecas y tiendas de bebidas. */
  | "bebidas";

/**
 * Cómo se encuentran en OpenStreetMap los lugares que sirven un plato.
 *
 * OpenStreetMap no sabe qué platos sirve cada lugar: sabe qué tipo de cocina
 * tiene (`cuisine`) y cómo se llama. Un lugar entra si es de alguno de los
 * tipos de `en` y además tiene alguna de las cocinas o alguna de las palabras
 * en el nombre. Sin cocinas ni palabras, entran todos los lugares de esos
 * tipos: sirve para un plato que tiene cualquier panadería.
 */
export interface BusquedaEnElMapa {
  /** Por defecto, ["comida"]. */
  en?: TipoDeLugarOsm[];
  /** Valores de `cuisine` en OpenStreetMap: "ramen", "sushi". */
  cocinas?: string[];
  /**
   * Palabras del nombre del local, como se escriben allá: "taquería",
   * "ラーメン". Sin distinguir mayúsculas en el alfabeto latino.
   */
  nombres?: string[];
}

export interface Plato {
  /** El slug de su página: /que-comer/{pais}/{id}. */
  id: string;
  /** En castellano, como lo conoce alguien que lo busca: "Tacos al pastor". */
  nombre: string;
  /** Como lo va a ver escrito allá, si se escribe distinto: "ラーメン". */
  local?: string;
  /** Una línea, para la tarjeta del catálogo. */
  resumen: string;
  /** Qué es, en dos o tres oraciones. */
  descripcion: string;
  /** A qué sabe: lo que la descripción no dice. */
  sabor: string;
  /** Los de la versión de siempre, de más a menos importante. */
  ingredientes: string[];
  contiene: Contiene[];
  picante: Picante;
  precio: Precio;
  momentos: Momento[];
  lugares: Lugar[];
  aventura: Aventura;
  /**
   * Las regiones de las que es típico (ids de `CatalogoDeComida.regiones`).
   * Vacío quiere decir en todo el país.
   */
  regiones: string[];
  /** Lo que no hay que irse sin probar. Pocos: si todo es imperdible, nada lo es. */
  imperdible: boolean;
  /** Si se puede pedir y comer bien estando solo: una barra, una porción. */
  paraComerSolo: boolean;
  /** Una advertencia de dieta o de costumbre: "Pedilo sin salsa de pescado". */
  nota?: string;
  /**
   * Cómo encontrar en el mapa dónde lo sirven. Lo que no tiene búsqueda tiene
   * `sinMapa`: el test exige exactamente uno de los dos.
   */
  buscar?: BusquedaEnElMapa;
  /** Por qué no hay mapa: "Lo vende cualquier konbini". */
  sinMapa?: string;
  /**
   * El nombre del archivo en Wikimedia Commons, sin "File:". null hasta que
   * haya una foto con licencia libre: la tarjeta sale sin foto, que es mejor
   * que una de stock que nadie se acuerda de cambiar (como en las guías, 8.6).
   */
  foto: string | null;
}

/** Un ingrediente de la despensa del país, para la introducción. */
export interface IngredienteDeLaDespensa {
  nombre: string;
  local?: string;
  descripcion: string;
}

export interface Region {
  id: string;
  nombre: string;
}

/**
 * Una ciudad en la que arranca el mapa de lugares.
 *
 * Son las del catálogo y no las del clima porque buscan otra cosa: dónde se
 * come bien, no dónde se duerme. También delimitan el mapa: solo se busca a
 * menos de RADIO_DEL_PAIS_KM de alguna (src/lib/comidas/celdas.ts).
 */
export interface CiudadDelMapa {
  id: string;
  nombre: string;
  /** [latitud, longitud] del centro gastronómico, no del ayuntamiento. */
  coords: [number, number];
  /** Si la ciudad está en una de las regiones del catálogo. */
  region?: string;
}

export type TipoDeMencion =
  /** Un puesto, un carrito, un mostrador: chico y de barrio. */
  | "puestito"
  /** Un lugar con historia, que está en la memoria de la ciudad. */
  | "emblematico"
  | "alta-cocina"
  | "mercado";

/**
 * Una mención de honor: un lugar elegido, no pagado.
 *
 * Va atada a su ficha de OpenStreetMap para que no quede vieja sola: si en
 * OpenStreetMap cierra, la mención deja de mostrarse al día siguiente, sin
 * que nadie la borre (src/lib/comidas/menciones.ts).
 */
export interface Mencion {
  id: string;
  nombre: string;
  /** El id de una de las `ciudades`. */
  ciudad: string;
  tipo: TipoDeMencion;
  /** Por qué ir, en una o dos oraciones. */
  porQue: string;
  /** Los platos por los que se lo menciona (ids). */
  platos: string[];
  /** Su ficha en OpenStreetMap: "node/123", "way/456". */
  osm: string;
  /** [latitud, longitud]. */
  coords: [number, number];
}

export interface CatalogoDeComida {
  /** El de la guía del país. */
  slug: string;
  /** La introducción: dos o tres párrafos cortos. */
  intro: string[];
  /** La despensa: qué se usa en la cocina del país. */
  despensa: {
    intro: string;
    ingredientes: IngredienteDeLaDespensa[];
  };
  /** La foto del encabezado, en Wikimedia Commons. null hasta que haya una. */
  foto: string | null;
  regiones: Region[];
  /** La primera es la del mapa cuando el plato no es de una región. */
  ciudades: CiudadDelMapa[];
  /** Cómo se llama cada tipo de lugar en este país, si no es el nombre común. */
  nombresDeLugares?: Partial<Record<Lugar, string>>;
  platos: Plato[];
  menciones: Mencion[];
  /** ISO date (YYYY-MM-DD) de la última revisión del catálogo. */
  revisado: string;
}
