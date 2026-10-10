import type { DestinationGuide } from "./types";

/**
 * Guía de Myanmar.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 14.11 decidió para seis países: entra con aviso,
 * como Venezuela. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: la tesis de Venezuela en el Sudeste Asiático. El
 * kyat tiene una cotización oficial y otra de mercado muy lejos entre sí, y
 * con la inflación un precio en kyats quedaría viejo en semanas: los precios
 * van en dólares y el corredor, en MMK con dos cotizaciones. Las ciudades son
 * las de la ruta habitual; ninguna está en Rakhine ni en el norte del Shan.
 */
export const myanmar: DestinationGuide = {
  slug: "myanmar",
  country: "Myanmar",
  subregion: "Sudeste Asiático",
  subhead:
    "Miles de templos en la llanura de Bagan, la estupa dorada de Rangún, pescadores que reman con una pierna en el lago Inle y una roca dorada en equilibrio sobre un acantilado. Un país de pagodas y monjes.",

  image: null,

  highlights: [
    {
      value: "Descalzo",
      label: "en todos los templos, sin medias",
      note: "En pagodas y monasterios se entra sin calzado ni medias, también en los patios. Conviene llevar sandalias fáciles de sacar.",
    },
    {
      value: "Bagan",
      label: "más de dos mil templos en una llanura",
      note: "Templos y estupas de ladrillo de hace casi mil años, a orillas del río Irrawaddy. Patrimonio de la humanidad.",
    },
    {
      value: "Shwedagon",
      label: "la estupa dorada de Rangún",
      note: "Cubierta de oro y rodeada de templos, es el lugar más sagrado del país. Al atardecer se llena de fieles.",
    },
    {
      value: "Laphet thoke",
      label: "ensalada de hojas de té fermentadas",
      note: "Con maní, porotos fritos, tomate y ajo. Junto con la mohinga, la sopa de pescado del desayuno, es lo más del país.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Myanmar",
      body: [
        "Muchos pasaportes tramitan una visa electrónica de turista online; otros, en un consulado. Verificá el tuyo antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra, y pueden pedirte el pasaje de salida y la reserva del hotel.",
        "Se entra casi siempre en avión, por Rangún o Mandalay.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Myanmar",
      body: [
        "La moneda es el kyat, con una cotización oficial y otra de mercado muy lejos entre sí. Los precios del planificador están en dólares.",
        "Llevá dólares en efectivo, en billetes nuevos y sin marcas: es lo que se cambia sin problemas. La tarjeta funciona en pocos hoteles.",
        "En los mercados y los puestos se paga en kyats, en efectivo.",
      ],
    },
    {
      id: "clima",
      title: "Tropical con monzón",
      body: [
        "Myanmar es hemisferio norte. De noviembre a febrero es la época seca y templada, la mejor para viajar.",
        "Marzo y abril son muy calurosos, con más de treinta y cinco grados en Bagan y Mandalay. De junio a septiembre llueve casi todos los días en Rangún y la costa.",
        "Bagan y Mandalay, en la zona seca del centro, reciben menos lluvia. El lago Inle y Kalaw, a más de ochocientos metros, tienen noches frescas en invierno.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a febrero: seco, templado y con cielo claro sobre Bagan.",
        "Thingyan, el año nuevo, a mediados de abril, es una semana de batallas de agua en todo el país, y muchos negocios cierran.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Myanmar",
      body: [
        "Entre las ciudades, buses nocturnos y vuelos internos. Los trenes son lentos.",
        "En Rangún y Mandalay hay taxis por app.",
        "En Bagan, las bicicletas y las motos eléctricas son la forma de ir de templo en templo.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: desde 2021 hay conflicto armado en varias regiones, y muchos gobiernos desaconsejan viajar.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las rutas, los vuelos internos e internet pueden cortarse sin aviso, y hay cortes de luz frecuentes. Las ciudades del planificador son las de la ruta habitual.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "Bagan, la Shwedagon, Mandalay y miles de pagodas en todo el país.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale: "Mohinga, ensalada de té, fideos del Shan y curries.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "La llanura de templos, el lago Inle, montañas de piedra caliza y costa.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale:
        "Ngwe Saung tiene playas largas y tranquilas en la época seca.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale: "Comer y dormir sale poco para quien llega con dólares.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Rutas y vuelos que pueden cortarse, cortes de luz y casi todo en efectivo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 2,
      rationale:
        "Dos cotizaciones del kyat muy lejos entre sí e inflación alta.",
    },
  ],

  shines: [
    "Bagan al amanecer.",
    "Templos y pagodas por todos lados.",
    "Barato para quien llega con dólares.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Rutas, vuelos e internet que pueden cortarse.",
    "Todo en efectivo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Rangún que el lago Inle o Kalaw. Los precios están en dólares, que es como conviene pensarlos con un kyat de dos cotizaciones, y son órdenes de magnitud.",

  places: [
    {
      id: "rangun",
      name: "Rangún",
      region: "Rangún",
      tag: "La estupa dorada",
      blurb:
        "La pagoda Shwedagon, edificios coloniales en el centro, mercados y la pagoda Sule en el medio de una rotonda. Es la base del planificador: calor todo el año, monzón de junio a septiembre.",
      coords: [16.8409, 96.1735],
      featured: true,
      image: null,
    },
    {
      id: "bagan",
      name: "Bagan",
      region: "Mandalay",
      tag: "La llanura de los templos",
      blurb:
        "Más de dos mil templos y estupas de ladrillo sobre el Irrawaddy, patrimonio de la humanidad. Seco y muy caluroso en marzo y abril.",
      coords: [21.1717, 94.8585],
      image: null,
    },
    {
      id: "mandalay",
      name: "Mandalay",
      region: "Mandalay",
      tag: "La antigua capital real",
      blurb:
        "El palacio real, la colina de Mandalay al atardecer y, cerca, el puente de madera de U Bein en Amarapura.",
      coords: [21.9588, 96.0891],
      image: null,
    },
    {
      id: "lago-inle",
      name: "Lago Inle (Nyaungshwe)",
      region: "Shan",
      tag: "Pescadores que reman con una pierna",
      blurb:
        "Un lago de altura con aldeas sobre pilotes, jardines flotantes, mercados que rotan y pescadores que reman con una pierna. Noches frescas en invierno.",
      coords: [20.66, 96.93],
      image: null,
    },
    {
      id: "kalaw",
      name: "Kalaw",
      region: "Shan",
      tag: "El pueblo de montaña",
      blurb:
        "Un pueblo de montaña de la época colonial, punto de partida de la caminata de varios días hasta el lago Inle. Fresco todo el año.",
      coords: [20.6333, 96.5667],
      image: null,
    },
    {
      id: "hpa-an",
      name: "Hpa-An",
      region: "Kayin",
      tag: "Cuevas y montañas de piedra",
      blurb:
        "Montañas de piedra caliza entre arrozales, cuevas llenas de budas y un lago con un monasterio. Muy lluvioso en el monzón.",
      coords: [16.8906, 97.6333],
      image: null,
    },
    {
      id: "kyaiktiyo",
      name: "Roca Dorada (Kyaiktiyo)",
      region: "Mon",
      tag: "La roca en equilibrio",
      blurb:
        "Una roca cubierta de oro en equilibrio al borde de un acantilado, lugar de peregrinación, a la que se sube en camión. Lluvia fuerte en el monzón.",
      coords: [17.4833, 97.1],
      image: null,
    },
    {
      id: "bago",
      name: "Bago",
      region: "Bago",
      tag: "Budas gigantes",
      blurb:
        "Una antigua capital mon con una estupa enorme y budas reclinados gigantes, a un par de horas de Rangún.",
      coords: [17.3333, 96.4833],
      image: null,
    },
    {
      id: "ngwe-saung",
      name: "Ngwe Saung (playa)",
      region: "Ayeyarwady",
      tag: "Playa larga y tranquila",
      blurb:
        "Kilómetros de playa casi vacía sobre el golfo de Bengala, a unas horas de Rangún. Mejor de noviembre a abril.",
      coords: [16.8667, 94.3833],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Myanmar es calor casi todo el año. Ropa liviana que cubra hombros y rodillas, sandalias fáciles de sacar para los templos, protector, sombrero y repelente. En el monzón, todo impermeable. Para el lago Inle y Kalaw en invierno, un buzo para la noche. Siempre, dólares nuevos en efectivo y una batería portátil.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Hemisferio norte: lo mejor es de noviembre a febrero.",
      "En los templos se entra descalzo y sin medias, con hombros y rodillas cubiertos.",
      "Dólares nuevos en efectivo: la tarjeta casi no funciona.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana que cubra hombros y rodillas, sandalias, sombrero, protector y repelente. En el monzón, campera impermeable.",
      templado:
        "Ropa liviana de día y un buzo para las noches de invierno en el lago Inle y Kalaw.",
      fresco:
        "Un polar y una campera liviana para las madrugadas de Kalaw y el lago Inle en enero.",
      frio: "Un abrigo para las madrugadas más frías de Kalaw en enero.",
    },
    plug: {
      types: "Tipo C, tipo D, tipo F y tipo G",
      voltage: "230 V, 50 Hz",
      note: "Conviven varios enchufes. Un adaptador universal los resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Llevá dólares nuevos",
          body: "Sin marcas, roturas ni dobleces: los billetes viejos se rechazan.",
        },
        {
          title: "Usá sandalias",
          body: "En cada templo te sacás el calzado y las medias; con sandalias es un segundo.",
        },
        {
          title: "Recorré Bagan al amanecer",
          body: "Con la luz baja y antes del calor, en bicicleta o moto eléctrica.",
        },
        {
          title: "Llevá una batería portátil",
          body: "Los cortes de luz son frecuentes.",
        },
        {
          title: "Caminá las pagodas en sentido horario",
          body: "Es como lo hacen los fieles.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No entres a un templo con calzado o medias",
          body: "Ni en el patio: se camina descalzo.",
        },
        {
          title: "No toques la cabeza de nadie",
          body: "Es la parte más sagrada del cuerpo. Tampoco apuntes con los pies a un buda o a una persona.",
        },
        {
          title: "No fotografíes edificios oficiales ni militares",
          body: "Preguntá antes de sacar la cámara.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Embotellada.",
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
        title: "Antes de reservar",
        notice: {
          tone: "warn",
          title: "Recomendación de viaje, seguro y visa",
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Myanmar y si tu pasaporte necesita visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino",
          "Pasaporte con vigencia de sobra",
          "Visa electrónica impresa",
        ],
      },
      {
        id: "plata",
        title: "Efectivo",
        notice: {
          tone: "info",
          title: "Dólares impecables",
          body: "Los billetes viejos, marcados o doblados se rechazan.",
        },
        summary: "Cómo llevar la plata",
        items: [
          "Dólares en billetes nuevos",
          "Una billetera que no los doble",
          "Kyats en billetes chicos para el día a día",
        ],
      },
      {
        id: "templos",
        title: "Templos y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Sandalias fáciles de sacar",
          "Ropa que cubra hombros y rodillas",
          "Una bolsa para llevar el calzado",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente",
          "Sales de rehidratación y algo para el estómago",
          "Las vacunas y la profilaxis que te indique tu médico",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia rápido, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Billetes viejos o marcados",
        why: "Se rechazan.",
        instead: "Dólares nuevos e impecables.",
      },
      {
        leave: "Zapatillas con cordones",
        why: "En cada templo hay que sacarse el calzado.",
        instead: "Sandalias.",
      },
      {
        leave: "Ropa corta",
        why: "En los templos se cubren hombros y rodillas.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Depender de internet y de la luz",
        why: "Los cortes son frecuentes.",
        instead: "Mapas descargados y una batería portátil.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Myanmar y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Myanmar?",
        answer:
          "Sí: muchos pasaportes la tramitan online como visa electrónica de turista. Verificá el tuyo.",
      },
      {
        question: "¿Cómo se paga?",
        answer:
          "En efectivo: dólares nuevos que se cambian a kyats. La tarjeta funciona en pocos hoteles.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a febrero, seco y templado. En abril es Thingyan, el año nuevo, con batallas de agua.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: conviven los tipos C, D, F y G a 230 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria, pero se agradece en restaurantes y para guías.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: embotellada.",
      },
      {
        question: "¿Qué es lo amarillo que la gente se pone en la cara?",
        answer:
          "Thanaka, una pasta de corteza de árbol que protege del sol y refresca.",
      },
    ],
  },
};
