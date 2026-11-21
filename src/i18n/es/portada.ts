import type { IdDeOpcion, IdDeTarjeta } from "@/content/portada";

interface TextoDeTarjeta {
  titulo: string;
  /** Una línea que dice qué va a haber. */
  descripcion: string;
}

/** La portada: el hero con el globo y las secciones de abajo (spec, 19.5 y 19.6). */
const portada = {
  hero: {
    titulo: "El mundo en tus manos",
    bajada:
      "Elige un destino en el globo y te decimos qué llevar y cuánto vas a gastar.",
    detalle:
      "Guías de cada destino con lo que hay que saber antes de reservar, y dos motores que arman tu equipaje según el clima de tus fechas y tu presupuesto en la cotización que elijas. Te llevas la hoja de cálculo en CSV.",
    elegirEntre: (cantidad: number) => `Elegir entre ${cantidad} destinos`,
  },

  globo: {
    /** El nombre del globo para el lector de pantalla. */
    nombre: "Globo con los destinos",
    acercar: "Acercar",
    alejar: "Alejar",
    verElGloboEntero: "Ver el globo entero",
    cerrar: "Cerrar",
    muyCerca: "Muy cerca:",
    verLaGuia: "Ver la guía",
    /** Cuando alguien usa la rueda sola, que es de la página. */
    pistaDeRueda: "Para acercar, usa Ctrl + rueda o los botones",
    pistaDeRuedaEnMac: "Para acercar, usa ⌘ + rueda o los botones",
    instrucciones:
      "Arrastra para girar, acerca con los botones o con Ctrl + rueda, y toca un punto para elegirlo.",
    instruccionesTactiles:
      "Arrastra para girar, pellizca para acercar y toca un punto para elegirlo.",
  },

  buscador: {
    etiqueta: "Busca un destino",
    placeholder: "Busca un país o un destino",
    /** El nombre de la lista de resultados para el lector de pantalla. */
    resultados: "Destinos",
    sinResultados: (consulta: string) =>
      `No tenemos guía de “${consulta}” todavía.`,
  },

  /** El cartel de lo que todavía no existe. */
  pronto: {
    cartel: "Próximamente",
    /** Dentro de un título, solo para el lector de pantalla. */
    enElTitulo: " (próximamente)",
  },

  noticias: {
    antetitulo: "Noticias para viajeros",
    titulo: "Lo que cambia antes de que viajes",
    bajada:
      "Requisitos de entrada, paros de transporte, alertas de clima y avisos oficiales de cada destino, con la fuente y la fecha de cada dato.",
    enConstruccion: "Estamos armando este panel.",
    queVaASer:
      "Va a ser una herramienta más del sitio: lo que cambió en cada destino y desde cuándo, para enterarte antes de salir y no en el aeropuerto.",
    temasDelPanel: "Temas del panel",
    temas: {
      requisitos: "Requisitos de entrada",
      transporte: "Transporte y paros",
      clima: "Clima extremo",
      avisos: "Avisos oficiales",
    },
  },

  tarjetas: {
    "en-tendencia": {
      titulo: "En tendencia",
      descripcion:
        "Los destinos que más se están mirando en el sitio, semana a semana.",
    },
    ofertas: {
      titulo: "Ofertas de último momento",
      descripcion:
        "Las mejores tarifas de vuelos y hoteles para salir pronto, con el precio y la hora en que se vio.",
    },
    "edificios-historicos": {
      titulo: "Edificios históricos y cascos antiguos",
      descripcion:
        "Plazas, palacios y calles que cuentan la historia del lugar.",
    },
    "sitios-arqueologicos": {
      titulo: "Sitios arqueológicos",
      descripcion:
        "Ciudades mayas e incas, templos romanos y ruinas frente al mar.",
    },
    "espacios-sagrados": {
      titulo: "Espacios religiosos y sagrados",
      descripcion: "Catedrales, mezquitas, templos y monasterios.",
    },
    castillos: {
      titulo: "Castillos y fortalezas",
      descripcion: "Murallas, ciudadelas y castillos sobre lagos y colinas.",
    },
    museos: {
      titulo: "Museos",
      descripcion: "Los que justifican el viaje por sí solos.",
    },
    "arte-y-espectaculos": {
      titulo: "Arte y espectáculos",
      descripcion: "Teatros, salas de música y festivales.",
    },
    "elegidos-por-la-comunidad": {
      titulo: "Los elegidos por la comunidad",
      descripcion: "Los lugares que más recomiendan quienes ya fueron.",
    },
    paisajes: {
      titulo: "Paisajes",
      descripcion: "Glaciares, desiertos, fiordos y volcanes.",
    },
    "que-hacer": {
      titulo: "Qué hacer",
      descripcion:
        "Caminatas, buceo, safaris y todo lo que se hace al aire libre.",
    },
    vacaciones: {
      titulo: "Vacaciones",
      descripcion: "Playas, islas y lugares para no hacer nada.",
    },
  } satisfies Record<IdDeTarjeta, TextoDeTarjeta>,

  opciones: {
    "ultimas-ofertas": "Últimas ofertas",
    "mejores-hoteles": "Mejores hoteles",
  } satisfies Record<IdDeOpcion, string>,

  imperdibles: {
    antetitulo: "Imperdibles",
    titulo: "Lo que no te puedes perder",
    bajada:
      "Lo mejor de cada destino, por tema: de los cascos antiguos y las ruinas a los paisajes y las playas.",
    /** El nombre de las pestañas para el lector de pantalla. */
    porTema: "Imperdibles por tema",
    cultura: "Cultura",
    naturaleza: "Naturaleza",
    verOpciones: "Ver opciones",
    ocultarOpciones: "Ocultar opciones",
  },

  porContinente: {
    antetitulo: "Destinos",
    titulo: "Por continente",
    bajada:
      "Cada destino con su guía, su clima mes a mes y su presupuesto en moneda local.",
    verTodos: (cantidad: number) => `Ver los ${cantidad} destinos`,
    resumen: (destinos: number, zonas: number) =>
      `${destinos === 1 ? "1 destino" : `${destinos} destinos`} · ${
        zonas === 1 ? "1 zona" : `${zonas} zonas`
      }`,
  },

  planifica: {
    antetitulo: "Planifica tu viaje",
    titulo: "Qué llevar y cuánto vas a gastar, para tus fechas",
    bajada:
      "La lista de equipaje sale del clima de esas fechas, y el presupuesto, de la cotización que elijas. Sin registrarte.",
    pasos: {
      destino: {
        titulo: "Elige el destino y la ciudad",
        detalle:
          "El clima y los precios son los de esa ciudad, no un promedio del país.",
      },
      fechas: {
        titulo: "Pon las fechas y el tipo de viaje",
        detalle: "No es lo mismo una semana de playa que una de trabajo.",
      },
      lista: {
        titulo: "Llévate la lista y el presupuesto",
        detalle: "Para editar, compartir con un enlace y descargar en CSV.",
      },
    },
    adondeViajas: "¿Adónde viajas?",
    buscaUnPais: "Busca un país",
    queHaceElBuscador:
      "Te lleva al planificador de ese destino, donde eliges la ciudad y las fechas.",
    todaviaNoSabes: "¿Todavía no sabes adónde? Mira todos los destinos",
  },

  ongs: {
    titulo: "ONG en cada destino",
    bajada:
      "Organizaciones que trabajan en los lugares que visitas, para conocerlas, apoyarlas o sumarte como voluntario.",
  },

  preguntas: {
    antetitulo: "Ayuda",
    titulo: "Preguntas frecuentes",
    bajada: "Las dudas que más llegan, con su respuesta.",
  },
};

export default portada;
