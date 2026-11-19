import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";

/**
 * Nosotros (spec, 19.4): qué es el sitio, cómo se hace y de dónde salen los
 * datos, y los números que estaban en la portada.
 *
 * Las partes entre <marcas> se dibujan aparte, con `enriquecer()`.
 */
const nosotros = {
  titulo: "Nosotros",
  descripcion: `Qué es ${NOMBRE_DEL_SITIO}, cómo se hace y de dónde salen sus datos: sin registro, sin anuncios y con fuentes abiertas.`,
  bajada: `${NOMBRE_DEL_SITIO} es una guía para preparar el viaje: eliges un destino y te decimos qué llevar según el clima de tus fechas, cuánto vas a gastar en la moneda de allá y qué comer cuando llegues.`,

  comoLoHacemos: "Cómo lo hacemos",
  principios: {
    registro: {
      titulo: "Sin registro",
      texto:
        "Armas tu viaje sin cuenta y sin correo. Se guarda con un enlace privado, que es tuyo y de nadie más.",
    },
    anuncios: {
      titulo: "Sin anuncios ni venta de datos",
      texto:
        "El sitio es gratis. Para saber qué páginas se usan, medimos las visitas sin cookies.",
    },
    fechas: {
      titulo: "Cada dato, con su fecha",
      texto:
        "El clima es el promedio histórico de cada ciudad, los precios dicen cuándo se revisaron y las cotizaciones en vivo se actualizan cada pocos minutos. Lo que no es en vivo no se presenta como si lo fuera.",
    },
    fuentes: {
      titulo: "Fuentes abiertas",
      texto:
        "Los mapas y los lugares salen de OpenStreetMap, y las fotos de los platos, de Wikimedia Commons, con su licencia.",
    },
  },

  enNumeros: "En números",
  /** Las etiquetas y las notas de los números (src/lib/sitio/estadisticas.ts). */
  estadisticas: {
    destinos: (cantidad: number) => (cantidad === 1 ? "destino" : "destinos"),
    enUnLugar: (cantidad: number, lugar: string) => `${cantidad} en ${lugar}`,
    platosYBebidas: "platos y bebidas",
    dePaises: (paises: number) => `De ${paises} países, con dónde probarlos`,
    cotizacionesEnVivo: "cotizaciones en vivo",
    registros: "registros",
    sinCuenta: "Sin cuenta y sin correo",
  },

  deDondeSalen: "De dónde salen los datos",
  deDondeSalenBajada:
    "Servicios abiertos o gratuitos, cada uno con su licencia. Las guías y los catálogos de comida los escribimos nosotros, con la fecha de su última revisión.",
  /** Para qué sirve cada fuente. */
  fuentes: {
    openstreetmap: "Los lugares de comida y los mapas",
    wikimedia: "Las fotos de los platos",
    dolarapi: "Las cotizaciones de Argentina y Brasil",
    adsb: "Los aviones del radar",
    ourairports: "Los aeropuertos",
    mosaicos: "Los mosaicos de los mapas",
    nasa: "La foto de la Tierra del globo (Blue Marble)",
  },
  /** El nombre de la fuente de los mosaicos, que son dos. */
  nombreDeLosMosaicos: "OpenFreeMap y CARTO",
  empezar: "¿Quieres empezar? <enlace>Elige un destino</enlace>.",
};

export default nosotros;
