import type { DestinationGuide } from "./types";

/**
 * Guía de Samoa.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la línea de cambio de fecha como dato de portada
 * —Samoa tiene trece horas más que Greenwich, y Samoa Americana, la vecina,
 * once menos— y un alojamiento propio, la fale de playa con media pensión, que
 * reemplaza al hotel en el presupuesto. El tala no lleva centavos (spec,
 * 16.3). Samoa Americana es territorio de Estados Unidos y queda afuera, como
 * Guam (spec, 16.2).
 */
export const samoa: DestinationGuide = {
  slug: "samoa",
  country: "Samoa",
  subregion: "Polinesia",
  subhead:
    "La pileta natural de To Sua, las fale sobre la arena de Lalomanu, los campos de lava y los agujeros sopladores de Savai'i, y una vida de aldea que gira alrededor de la familia y la iglesia.",

  image: null,

  highlights: [
    {
      value: "Un día",
      label: "de diferencia con Samoa Americana, a cien kilómetros",
      note: "Samoa cruzó la línea de cambio de fecha en 2011, para quedar más cerca de Australia y Nueva Zelanda: se salteó el 30 de diciembre. Hoy tiene trece horas más que Greenwich, y Samoa Americana, la vecina, once menos.",
    },
    {
      value: "Fa'a Samoa",
      label: "la costumbre que ordena la vida de las aldeas",
      note: "La vida gira alrededor de la familia, el jefe y la iglesia. El domingo es sagrado, y cada tarde hay un rato de oración, el sa, en que las aldeas piden silencio.",
    },
    {
      value: "Fale",
      label: "la casa sin paredes donde se duerme en la playa",
      note: "Las fale de playa son chozas abiertas, con esteras y mosquitero, que suelen incluir la cena y el desayuno. Es la forma más samoana de dormir.",
    },
    {
      value: "To Sua",
      label: "el hoyo del océano, con una escalera al agua",
      note: "Una pileta natural de agua de mar en el fondo de un pozo de treinta metros, rodeada de jardines, a la que se baja por una escalera de madera.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Samoa",
      body: [
        "Todos los pasaportes reciben al llegar un permiso de visitante, con el pasaje de salida, la reserva del alojamiento y fondos para la estadía. Verificá antes las condiciones para el tuyo en el sitio oficial.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Al llegar se declaran la comida, las plantas y los productos de origen animal.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Samoa",
      body: [
        "La moneda es el tala. En Apia, los hoteles, los restaurantes y los supermercados aceptan tarjeta; en las aldeas y en Savai'i, casi todo se paga en efectivo.",
        "Hay cajeros en Apia y en Salelologa, en Savai'i; en el resto de las aldeas, casi ninguno.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí talas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo, y una temporada de lluvias",
      body: [
        "Calor húmedo todo el año, con temperaturas casi iguales en todos los meses. De noviembre a abril es la temporada de lluvias y ciclones; de mayo a octubre llueve menos y sopla el alisio, aunque los chaparrones siguen.",
        "Julio y agosto son lo más seco del año.",
        "Samoa está al oeste de la línea de cambio de fecha: tiene trece horas más que Greenwich.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: llueve menos y hace un poco menos de calor. Julio y agosto son lo más seco.",
        "A fines de agosto o principios de septiembre se hace el Teuila, el festival de Samoa, con danzas, regatas de canoas y fuego en Apia.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Samoa",
      body: [
        "Upolu y Savai'i están unidas por un ferry, de Mulifanua a Salelologa, en alrededor de una hora.",
        "Los buses de colores, de madera, recorren las islas sin horario fijo y paran a pedido. Para recorrer, lo mejor es un auto: se maneja con un permiso temporario, que se saca con la licencia de tu país.",
        "Se maneja por la izquierda, desde 2009.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "La casa de Robert Louis Stevenson y una vida de aldea que sigue la costumbre.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Oka de pescado crudo, palusami, el umu cocido sobre piedras y el koko samoano.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Cascadas, selva, campos de lava y lagunas.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale: "Lalomanu y las playas de Savai'i, de arena blanca.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale: "Las fale de playa con media pensión son una buena compra.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale: "Un ferry entre las islas y buses sin horario.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale: "El tala se mueve poco y hay precios a la vista.",
    },
  ],

  shines: [
    "Las fale de playa.",
    "To Sua y las piletas naturales.",
    "Una cultura viva y hospitalaria.",
  ],

  costs: [
    "Domingos con casi todo cerrado.",
    "Buses sin horario fijo.",
    "Lluvias y ciclones de noviembre a abril.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Apia en enero que Lalomanu o Savai'i. Los precios están en talas y son órdenes de magnitud; el alojamiento es un hotel o una fale de playa con media pensión, y los resorts cuestan bastante más.",

  places: [
    {
      id: "apia",
      name: "Apia",
      region: "Upolu",
      tag: "La capital",
      blurb:
        "La capital, sobre la costa norte de Upolu, con el mercado, la feria de pescado, la casa de Robert Louis Stevenson en Vailima y la reserva marina de Palolo Deep. Es la base del planificador: calor húmedo todo el año, con lluvias en casi todos los meses menos julio y agosto.",
      coords: [-13.8333, -171.7667],
      featured: true,
      image: null,
    },
    {
      id: "to-sua",
      name: "To Sua (el hoyo del océano)",
      region: "Upolu",
      tag: "La pileta natural",
      blurb:
        "Una pileta natural en el fondo de un pozo de treinta metros, a la que se baja por una escalera, en la costa sur de Upolu.",
      coords: [-14.044, -171.562],
      image: null,
    },
    {
      id: "lalomanu",
      name: "Lalomanu (playa)",
      region: "Upolu",
      tag: "La playa",
      blurb:
        "Una de las playas más lindas del Pacífico, de arena blanca y agua turquesa, con fale sobre la arena y la isla de Nu'utele enfrente.",
      coords: [-14.065, -171.41],
      image: null,
    },
    {
      id: "piula",
      name: "Piula (la piscina de la cueva)",
      region: "Upolu",
      tag: "La cueva",
      blurb:
        "Una pileta de agua dulce dentro de una cueva, debajo de una iglesia metodista, en la costa norte de Upolu.",
      coords: [-13.87, -171.58],
      image: null,
    },
    {
      id: "manono",
      name: "Isla Manono",
      region: "Upolu",
      tag: "La isla sin autos",
      blurb:
        "Una isla chica entre Upolu y Savai'i, sin autos ni perros, que se recorre a pie en un par de horas, con fale en la playa.",
      coords: [-13.85, -172.1],
      image: null,
    },
    {
      id: "salelologa",
      name: "Salelologa (Savai'i)",
      region: "Savai'i",
      tag: "La puerta de Savai'i",
      blurb:
        "El puerto del ferry y el pueblo más grande de Savai'i, con el mercado y los cajeros de la isla.",
      coords: [-13.73, -172.2],
      image: null,
    },
    {
      id: "manase",
      name: "Manase (playas de Savai'i)",
      region: "Savai'i",
      tag: "Las playas del norte",
      blurb:
        "Playas de arena blanca en la costa norte de Savai'i, con fale sobre la arena y snorkel en la laguna.",
      coords: [-13.47, -172.36],
      image: null,
    },
    {
      id: "saleaula",
      name: "Saleaula (campos de lava)",
      region: "Savai'i",
      tag: "Los campos de lava",
      blurb:
        "Los campos de lava de la erupción de 1905 a 1911, que cubrieron pueblos enteros y dejaron una iglesia en ruinas y la tumba de una virgen en medio de la piedra negra.",
      coords: [-13.44, -172.3],
      image: null,
    },
    {
      id: "alofaaga",
      name: "Agujeros de Alofaaga",
      region: "Savai'i",
      tag: "Los agujeros sopladores",
      blurb:
        "Agujeros en la roca de la costa sur de Savai'i por donde el mar sopla chorros de decenas de metros; los guías tiran cocos para que salgan volando.",
      coords: [-13.802, -172.522],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Samoa, ropa liviana y fresca, traje de baño, protector y repelente: hace calor húmedo todo el año. Algo impermeable, sobre todo de noviembre a abril, y ropa que tape hombros y rodillas para las aldeas y la iglesia. Efectivo para Savai'i.",
    keyPoints: [
      "Todos reciben el permiso de visitante al llegar: verificá las condiciones antes.",
      "El domingo es sagrado: casi todo cierra, y en las aldeas se pide silencio.",
      "Lluvias y ciclones de noviembre a abril; julio y agosto, lo más seco.",
      "Efectivo para las aldeas y Savai'i; tarjeta en Apia.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana y un buzo fino para el ferry y las noches.",
      fresco: "Un buzo liviano para las noches.",
      frio: "No hace frío en Samoa: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo I",
      voltage: "230 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. En muchas fale de playa la luz es limitada. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Dormí en una fale de playa",
          body: "Con mosquitero, y casi siempre con la cena y el desayuno incluidos.",
        },
        {
          title: "Respetá el sa de la tarde",
          body: "Cuando suena la campana, la aldea reza: se para, se hace silencio y se espera.",
        },
        {
          title: "Probá el oka",
          body: "Pescado crudo con limón y leche de coco, el plato de las islas.",
        },
        {
          title: "Pagá la entrada de cada lugar",
          body: "Playas, cascadas y piletas naturales son de las aldeas, y se paga una entrada chica.",
        },
        {
          title: "Andá a misa un domingo",
          body: "Los cantos de las iglesias samoanas son un espectáculo, y se recibe bien a los visitantes.",
        },
        {
          title: "Elegí pagar en talas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No andes en traje de baño fuera de la playa",
          body: "En las aldeas y en Apia se tapan hombros y rodillas.",
        },
        {
          title: "No planees nada el domingo",
          body: "Es día de iglesia y de familia: casi todo cierra, y en muchas playas no se nada.",
        },
        {
          title: "No pases por una aldea durante el sa",
          body: "Es el rato de oración de la tarde: esperá a que termine.",
        },
        {
          title: "No comas ni tomes caminando por la aldea",
          body: "Se considera de mala educación.",
        },
        {
          title: "No cuentes con cajeros en Savai'i",
          body: "Hay en Salelologa, y casi en ningún otro lado.",
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
          title: "Permiso al llegar",
          body: "Todos los pasaportes reciben el permiso de visitante al llegar, con el pasaje de salida, la reserva del alojamiento y el pasaporte con seis meses de vigencia.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "Pasaje de salida del país",
          "Reserva del alojamiento",
          "Certificado de la fiebre amarilla, si venís de un país con riesgo",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "playa",
        title: "Para el sol y el mar",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "Cerca del ecuador, el sol quema en minutos, aun con nubes: protector alto, sombrero y una remera de lycra para el snorkel.",
        },
        summary: "Playas, lagunas y piletas naturales",
        items: [
          "Protector solar alto, que no dañe el arrecife",
          "Traje de baño y una remera de lycra",
          "Calzado para el agua",
          "Máscara y snorkel",
        ],
      },
      {
        id: "aldeas",
        title: "Para las aldeas y la iglesia",
        notice: null,
        summary: "Lo que pide la costumbre",
        items: [
          "Un pareo, el lavalava samoano",
          "Una remera que tape los hombros",
          "Ropa clara y prolija para la misa del domingo",
          "Efectivo en billetes chicos para las entradas",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Dengue",
          body: "Hay dengue, sobre todo en la temporada de lluvias: repelente y manga larga al atardecer. No hay malaria.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa corta para las aldeas",
        why: "En las aldeas y la iglesia se tapan hombros y rodillas.",
        instead: "Un lavalava o un pareo en la mochila.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En las aldeas y en Savai'i casi todo se paga en efectivo.",
        instead: "Efectivo en talas.",
      },
      {
        leave: "Un itinerario que dependa del domingo",
        why: "Ese día casi todo cierra y hay pocos traslados.",
        instead: "El domingo para la playa del alojamiento y la misa.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los buses, el ferry y las fale hay poco lugar.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Samoa?",
        answer:
          "No: todos los pasaportes reciben el permiso de visitante al llegar, con el pasaje de salida y la reserva del alojamiento. Verificá las condiciones para el tuyo en el sitio oficial.",
      },
      {
        question: "¿Por qué Samoa y Samoa Americana tienen distinto día?",
        answer:
          "Porque la línea de cambio de fecha pasa entre las dos: Samoa la cruzó en 2011 para quedar del lado de Australia y Nueva Zelanda.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre llueve menos; julio y agosto son lo más seco. El Teuila, el festival de Samoa, es a fines de agosto o en septiembre.",
      },
      {
        question: "¿Qué es una fale de playa?",
        answer:
          "Una choza abierta, sin paredes, con esteras y mosquitero, sobre la arena. Suele incluir la cena y el desayuno.",
      },
      {
        question: "¿Cómo llego a Savai'i?",
        answer:
          "En el ferry que sale de Mulifanua, en el oeste de Upolu, y llega a Salelologa en alrededor de una hora.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "El samoano, y el inglés, que se entiende en casi todos lados.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 230 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Apia suele ser tratada, pero conviene tomar embotellada, sobre todo en las aldeas.",
      },
    ],
  },
};
