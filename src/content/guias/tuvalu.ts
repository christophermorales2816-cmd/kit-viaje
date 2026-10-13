import type { DestinationGuide } from "./types";

/**
 * Guía de Tuvalu.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el país más bajo del planificador —su punto más
 * alto está a 4,6 metros, el dato de su portada—, el dólar australiano
 * prestado, con centavos (spec, 16.3), y un transporte entre islas que es
 * solo el barco del gobierno, pocas veces por mes. Se llega únicamente desde
 * Fiyi. Como el clima casi no cambia de una isla a otra, la nota de alcance
 * habla de la lluvia y no de las ciudades.
 */
export const tuvalu: DestinationGuide = {
  slug: "tuvalu",
  country: "Tuvalu",
  subregion: "Polinesia",
  subhead:
    "La pista de aterrizaje que es la plaza de Funafuti, los islotes del área de conservación, las islas de afuera en el barco del gobierno y uno de los países menos visitados del mundo.",

  image: null,

  highlights: [
    {
      value: "4,6 m",
      label: "sobre el mar en su punto más alto",
      note: "Nueve islas bajas de coral, con el punto más alto en Niulakita. Tuvalu es uno de los países más expuestos a la suba del mar, y uno de los menos visitados del mundo.",
    },
    {
      value: "La pista",
      label: "de aterrizaje que es la plaza del pueblo",
      note: "En Funafuti, la pista del aeropuerto es también donde se juega al fútbol, se pasea y, en las noches de calor, se duerme al fresco. Cuando llega un avión, suena una sirena y se despeja.",
    },
    {
      value: ".tv",
      label: "el dominio que ayuda a pagar el país",
      note: "Tuvalu alquila su dominio de internet, .tv, y lo que cobra es una parte importante del presupuesto del país.",
    },
    {
      value: "Barco",
      label: "del gobierno a las otras islas, pocas veces por mes",
      note: "A las islas de afuera se llega solo en los barcos del gobierno, que tardan días y salen pocas veces por mes. Hay que organizar el viaje con tiempo, y tener días de margen.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Tuvalu",
      body: [
        "Todos los pasaportes reciben la visa al llegar, con el pasaje de salida y fondos para la estadía.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Al llegar se declaran la comida, las plantas y los productos de origen animal.",
        "Solo se llega en avión desde Fiyi, con pocos vuelos por semana: revisá también lo que pide Fiyi para la escala.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Tuvalu",
      body: [
        "La moneda es el dólar australiano, con monedas propias de Tuvalu que valen lo mismo y solo se aceptan en el país.",
        "Casi todo se paga en efectivo, y las tarjetas extranjeras casi no sirven: llevá dólares australianos suficientes desde afuera.",
        "El banco nacional, en Funafuti, cambia otras monedas, pero conviene llegar con dólares australianos.",
      ],
    },
    {
      id: "clima",
      title: "Calor parejo, y lluvia todo el año",
      body: [
        "Calor húmedo y parejo todo el año, sin estaciones de temperatura: las máximas rondan los treinta y un grados y las mínimas, los veinticinco.",
        "Lo que cambia es la lluvia: más fuerte de noviembre a marzo, la temporada de ciclones, aunque llueve seguido todo el año.",
        "En las mareas más altas del año, entre febrero y marzo, el mar a veces entra en partes de Funafuti.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre llueve un poco menos y no hay ciclones.",
        "El 1 de octubre es el día de la independencia, con fiestas, danzas y competencias en Funafuti.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Tuvalu",
      body: [
        "Funafuti se recorre en moto o en bici alquilada: la isla principal es una franja angosta de tierra entre la laguna y el mar.",
        "A las islas de afuera se va en los barcos del gobierno, que salen pocas veces por mes y tardan días: hay que organizar el viaje con tiempo.",
        "Se maneja por la izquierda.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 3,
      rationale:
        "Restos de la Segunda Guerra en Funafuti y la vida tradicional de las islas.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale: "Pescado, pulaka, coco y fruta del pan.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale: "Atolones, lagunas y los islotes del área de conservación.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale: "Islotes de arena en el área de conservación.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Alojamiento sencillo, con pocas opciones.",
    },
    {
      dimension: "Facilidad logística",
      score: 2,
      rationale:
        "Pocos vuelos, barcos que tardan días y casi todo en efectivo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "Usa el dólar australiano.",
    },
  ],

  shines: [
    "Uno de los países menos visitados del mundo.",
    "El área de conservación de Funafuti.",
    "La vida en un atolón.",
  ],

  costs: [
    "Pocos vuelos, solo desde Fiyi.",
    "Barcos a las islas que tardan días.",
    "Casi todo en efectivo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima, que casi no cambia de una isla a otra: lo que cambia es la lluvia, según el mes. Los precios están en dólares australianos y son órdenes de magnitud; en las islas de afuera casi no hay alojamiento, y se duerme en casas de familia.",

  places: [
    {
      id: "funafuti",
      name: "Funafuti",
      region: "Funafuti",
      tag: "La capital",
      blurb:
        "La capital, en una franja de tierra entre la laguna y el mar, con la pista de aterrizaje que es también la plaza del pueblo y el único aeropuerto del país. Es la base del planificador: calor parejo todo el año, con lluvias en todos los meses.",
      coords: [-8.52, 179.2],
      featured: true,
      image: null,
    },
    {
      id: "conservacion-funafuti",
      name: "Área de conservación de Funafuti",
      region: "Funafuti",
      tag: "Islotes y tortugas",
      blurb:
        "Islotes de arena y palmeras en el borde oeste de la laguna, con tortugas, aves y el mejor snorkel del país, a un rato de lancha.",
      coords: [-8.45, 179.08],
      image: null,
    },
    {
      id: "nukufetau",
      name: "Nukufetau",
      region: "Nukufetau",
      tag: "La laguna de la guerra",
      blurb:
        "Un atolón con una laguna grande y restos de la pista de la Segunda Guerra.",
      coords: [-7.99, 178.4],
      image: null,
    },
    {
      id: "vaitupu",
      name: "Vaitupu",
      region: "Vaitupu",
      tag: "La isla más grande",
      blurb:
        "La isla más grande del país, con la escuela secundaria de Motufoua y una laguna casi cerrada.",
      coords: [-7.48, 178.68],
      image: null,
    },
    {
      id: "nui",
      name: "Nui",
      region: "Nui",
      tag: "Otra lengua",
      blurb:
        "Un atolón donde se habla una lengua emparentada con la de Kiribati, con pueblos tranquilos y una laguna para el snorkel.",
      coords: [-7.24, 177.15],
      image: null,
    },
    {
      id: "nanumea",
      name: "Nanumea",
      region: "Nanumea",
      tag: "El norte",
      blurb:
        "El atolón más al norte, con una iglesia de torre alta, restos de la pista de la guerra y lagunas de agua clara.",
      coords: [-5.68, 176.12],
      image: null,
    },
    {
      id: "niutao",
      name: "Niutao",
      region: "Niutao",
      tag: "Lagos interiores",
      blurb:
        "Una isla de coral con lagos interiores en lugar de una laguna abierta, y pueblos que viven de la pesca y del pulaka.",
      coords: [-6.11, 177.34],
      image: null,
    },
    {
      id: "nanumanga",
      name: "Nanumanga",
      region: "Nanumanga",
      tag: "Las cuevas sumergidas",
      blurb:
        "Una isla chica, con cuevas submarinas descubiertas en los años ochenta, que pudieron estar sobre el mar hace miles de años.",
      coords: [-6.29, 176.32],
      image: null,
    },
    {
      id: "nukulaelae",
      name: "Nukulaelae",
      region: "Nukulaelae",
      tag: "El sur",
      blurb:
        "El atolón del sur, con islotes alrededor de una laguna grande y una vida que gira alrededor de la iglesia y la pesca.",
      coords: [-9.38, 179.84],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Tuvalu, ropa liviana y fresca, traje de baño, protector, sombrero y repelente: hace calor húmedo todo el año y llueve seguido. Dólares australianos en efectivo desde afuera, días de margen para los vuelos y ropa que tape hombros y rodillas fuera de la playa.",
    keyPoints: [
      "Visa al llegar para todos los pasaportes.",
      "Se llega solo desde Fiyi, con pocos vuelos por semana.",
      "Casi todo se paga en efectivo, en dólares australianos.",
      "A las otras islas se va en barcos del gobierno, que salen pocas veces por mes.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana y un buzo fino para el avión y el barco.",
      fresco: "Un buzo liviano para las noches de viento y el barco.",
      frio: "No hace frío en Tuvalu: un buzo liviano para el avión alcanza.",
    },
    plug: {
      types: "Tipo I",
      voltage: "220 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. Los cortes de luz son frecuentes, y en las islas de afuera la luz es solar o de generador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá dólares australianos desde afuera",
          body: "Casi todo se paga en efectivo, y las tarjetas extranjeras casi no sirven.",
        },
        {
          title: "Dejá días de margen",
          body: "Hay pocos vuelos por semana, y si uno se cancela, el siguiente puede tardar días.",
        },
        {
          title: "Andá al área de conservación",
          body: "Islotes de arena, tortugas y el mejor snorkel, a un rato de lancha.",
        },
        {
          title: "Mirá un fatele",
          body: "La danza de Tuvalu, con canto y percusión, en las fiestas.",
        },
        {
          title: "Pasá una tarde en la pista",
          body: "Al atardecer, la pista de aterrizaje es la plaza del pueblo.",
        },
        {
          title: "Probá el pulaka",
          body: "Un tubérculo que crece en pozos excavados en el coral, la base de la comida de las islas.",
        },
      ],
      donts: [
        {
          title: "No andes en traje de baño fuera de la playa",
          body: "En el pueblo se tapan hombros y rodillas.",
        },
        {
          title: "No planees nada el domingo",
          body: "Es día de iglesia y de descanso.",
        },
        {
          title: "No cuentes con internet",
          body: "La conexión es lenta: avisá en casa que vas a estar poco conectado.",
        },
        {
          title: "No dejes basura",
          body: "En un atolón no hay dónde ponerla: lo que traés, te lo llevás.",
        },
        {
          title: "No cuentes con la tarjeta",
          body: "Casi nadie la acepta.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "info",
          title: "Visa al llegar",
          body: "Todos los pasaportes reciben la visa al llegar, con el pasaje de salida. Se llega desde Fiyi: revisá lo que pide Fiyi para la escala.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "Pasaje de salida del país",
          "Reserva del alojamiento",
          "Lo que pida Fiyi para la escala",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "efectivo",
        title: "Para el atolón",
        notice: {
          tone: "warn",
          title: "Efectivo para todo",
          body: "Casi todo se paga en efectivo, y las tarjetas extranjeras casi no sirven: llevá dólares australianos suficientes desde afuera.",
        },
        summary: "Lo que no se consigue allá",
        items: [
          "Dólares australianos en efectivo",
          "Una linterna y una batería externa",
          "Una botella para cargar agua",
          "Calzado para el agua",
        ],
      },
      {
        id: "sol",
        title: "Para el sol",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "Cerca del ecuador y sin sombra en los islotes, el sol quema en minutos: protector alto, sombrero y una remera de lycra.",
        },
        summary: "Islotes, laguna y lancha",
        items: [
          "Protector solar alto",
          "Sombrero y lentes de sol",
          "Traje de baño y una remera de lycra",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Atención básica",
          body: "La atención médica es básica, y hay dengue: repelente y manga larga al atardecer. No hay malaria.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y para todo el viaje",
          "Repelente con DEET o icaridina",
          "Un botiquín básico",
          "Seguro de viaje con cobertura médica y evacuación",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta.",
        instead: "Dólares australianos en efectivo.",
      },
      {
        leave: "Un itinerario sin margen",
        why: "Hay pocos vuelos por semana.",
        instead: "Días libres antes de la conexión internacional.",
      },
      {
        leave: "Ropa corta para el pueblo",
        why: "Fuera de la playa se tapan hombros y rodillas.",
        instead: "Remeras y pantalones o polleras livianas.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los barcos y las motos hay poco lugar.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Tuvalu?",
        answer:
          "No antes de viajar: todos los pasaportes la reciben al llegar, con el pasaje de salida.",
      },
      {
        question: "¿Cómo se llega?",
        answer:
          "En avión desde Fiyi, con pocos vuelos por semana. Revisá lo que pide Fiyi para la escala.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El dólar australiano, con monedas propias de Tuvalu que valen lo mismo. Casi todo se paga en efectivo.",
      },
      {
        question: "¿Cómo llego a las otras islas?",
        answer:
          "En los barcos del gobierno, que salen pocas veces por mes y tardan días. Hay que organizarlo con tiempo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre llueve un poco menos y no hay ciclones. El 1 de octubre es el día de la independencia.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "El tuvaluano y el inglés, que se entiende en Funafuti.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 220 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Se toma agua de lluvia: mejor hervila o tomá embotellada.",
      },
    ],
  },
};
