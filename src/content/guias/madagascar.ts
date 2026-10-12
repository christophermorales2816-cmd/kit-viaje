import type { DestinationGuide } from "./types";

/**
 * Guía de Madagascar.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: una isla con varios climas. Las tierras altas tienen
 * invierno —en julio, Antananarivo ronda los diez grados de noche y Antsirabe
 * los seis—, la selva del este llueve casi todo el año y el bucket de lluvia
 * (spec, 14.12) se activa en Ranomafana los doce meses, mientras que Ifaty, en
 * el sur, no llega a activarlo nunca. El dato de la portada son los lémures:
 * es lo que trae a casi todos.
 * Las distancias son el otro tema: las rutas son lentas y el auto con chofer y
 * los vuelos internos no entran en el presupuesto, y la nota de los datos lo
 * dice.
 */
export const madagascar: DestinationGuide = {
  slug: "madagascar",
  country: "Madagascar",
  subregion: "África Oriental",
  subhead:
    "Lémures en la selva de Andasibe, la avenida de los baobabs en Morondava, los cañones de Isalo y las playas de Nosy Be. Una isla enorme, con tierras altas de invierno fresco.",

  image: null,

  highlights: [
    {
      value: "Lémures",
      label: "nativos solo de Madagascar",
      note: "Hay más de cien especies, todas nativas de la isla. En Andasibe se escucha al indri, el más grande, que canta a la mañana.",
    },
    {
      value: "10 °C",
      label: "de mínima en Antananarivo en julio",
      note: "Las tierras altas tienen invierno: días templados y noches frescas, que en Antsirabe bajan a seis grados. Un buzo y una campera van en la valija aunque el viaje termine en la playa.",
    },
    {
      value: "Baobabs",
      label: "la avenida de Morondava, al atardecer",
      note: "Una calle de tierra entre baobabs gigantes, en la costa oeste. Se llega por ruta o en un vuelo interno.",
    },
    {
      value: "Rutas",
      label: "lentas, donde un tramo corto lleva el día",
      note: "Las rutas son angostas y con pozos, y lo que en el mapa parece cerca lleva horas. Con poco tiempo, conviene elegir una región o volar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Madagascar",
      body: [
        "Casi todos los pasaportes necesitan visa de turista, que se tramita online antes de viajar o se saca al llegar al aeropuerto. El precio depende de la cantidad de días. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "En la frontera te pueden pedir el pasaje de salida del país, y el pasaporte tiene que tener vigencia de sobra.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Madagascar",
      body: [
        "La moneda es el ariary. Fuera de los hoteles grandes, casi todo se paga en efectivo: hay cajeros en las ciudades, pero no en los pueblos ni en los parques.",
        "Muchos hoteles, guías y excursiones se cotizan en euros. Si llevás euros o dólares, que sean billetes nuevos y sanos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí ariary: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Una isla con varios climas",
      body: [
        "Madagascar está en el hemisferio sur y en el trópico. Las lluvias van de noviembre a marzo, y el invierno, seco, de mayo a octubre.",
        "Las tierras altas tienen invierno de verdad: en julio, las noches de Antananarivo rondan los diez grados y las de Antsirabe, los seis. La selva del este, en Andasibe y Ranomafana, llueve casi todo el año.",
        "El oeste y el sur —Morondava, Isalo, Ifaty— son secos y calurosos. El norte, en Nosy Be y Diego Suárez, es tropical, con la temporada de ciclones de enero a marzo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De abril a noviembre: temporada seca, la mejor para las rutas y los parques. En septiembre y octubre se ven lémures con crías, y de julio a septiembre las ballenas jorobadas pasan por la costa este.",
        "De enero a marzo llueve mucho, hay ciclones posibles, algunos caminos se cortan y algunos parques del oeste cierran.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Madagascar",
      body: [
        "Las rutas son angostas y lentas, y los tramos largos llevan el día entero. Lo habitual es alquilar un auto con chofer —pocos manejan ellos mismos— o volar los tramos más largos.",
        "Los taxis-brousse, las combis colectivas entre ciudades, son baratos pero lentos e incómodos. En Antananarivo, taxis con el precio arreglado antes de subir.",
        "Las precauciones son las de una ciudad grande: el teléfono guardado en la calle y, de noche, siempre en taxi. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "El Rova de Antananarivo y la colina real de Ambohimanga, patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Arroz con todo, romazava, carne de cebú, frutas tropicales y vainilla.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "Selvas, baobabs, los cañones de Isalo y los tsingy, las agujas de piedra del oeste.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Arena blanca en Nosy Be e Ifaty; muchas costas, lejos de todo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Comer y dormir es barato; los vuelos internos y el auto con chofer suben la cuenta.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Rutas lentas, vuelos internos que cambian de horario y distancias enormes.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "El ariary pierde valor con los años, y muchos servicios se cotizan en euros.",
    },
  ],

  shines: [
    "Lémures, camaleones y baobabs, en su mayoría únicos de la isla.",
    "Paisajes muy distintos en una sola isla.",
    "Comer y dormir barato.",
  ],

  costs: [
    "Distancias largas y rutas lentas.",
    "Lluvias y ciclones de enero a marzo.",
    "Vuelos internos caros y poco puntuales.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Antananarivo en julio que Morondava o Nosy Be. Los precios están en ariary y son órdenes de magnitud; no incluyen el auto con chofer ni los vuelos internos, que en Madagascar son buena parte del viaje.",

  places: [
    {
      id: "antananarivo",
      name: "Antananarivo",
      region: "Tierras altas",
      tag: "La capital",
      blurb:
        "Una ciudad de colinas, con el Rova, el palacio de las reinas, mercados y casas de ladrillo en las laderas. Es la base del planificador: veranos lluviosos e inviernos secos de noches frescas.",
      coords: [-18.8792, 47.5079],
      featured: true,
      image: null,
    },
    {
      id: "andasibe",
      name: "Andasibe (lémures)",
      region: "Este",
      tag: "El canto del indri",
      blurb:
        "Selva húmeda con lémures, camaleones y orquídeas, y el indri, el lémur más grande, que canta a la mañana. Llueve casi todo el año.",
      coords: [-18.9333, 48.4167],
      image: null,
    },
    {
      id: "antsirabe",
      name: "Antsirabe",
      region: "Tierras altas",
      tag: "Ciudad termal",
      blurb:
        "Una ciudad de aguas termales y pousse-pousses, los carritos tirados a pie, sobre la ruta del sur. Las noches de invierno rondan los seis grados.",
      coords: [-19.8659, 47.0333],
      image: null,
    },
    {
      id: "ranomafana",
      name: "Ranomafana",
      region: "Este",
      tag: "Selva y lémures dorados",
      blurb:
        "Selva de montaña con el lémur dorado del bambú, termas y senderos empinados. Patrimonio de la humanidad, con lluvia todo el año.",
      coords: [-21.2581, 47.4553],
      image: null,
    },
    {
      id: "isalo",
      name: "Isalo (Ranohira)",
      region: "Sur",
      tag: "Cañones",
      blurb:
        "Un macizo de arenisca con cañones, piletas naturales y lémures de cola anillada. Seco casi todo el año, con noches frías en invierno.",
      coords: [-22.5537, 45.3592],
      image: null,
    },
    {
      id: "ifaty",
      name: "Ifaty (Toliara)",
      region: "Suroeste",
      tag: "Playa y bosque espinoso",
      blurb:
        "Playas sobre el canal de Mozambique, con arrecife, pueblos de pescadores vezo y un bosque de baobabs y plantas espinosas. El rincón más seco de la isla.",
      coords: [-23.15, 43.6167],
      image: null,
    },
    {
      id: "morondava",
      name: "Morondava (Avenida de los Baobabs)",
      region: "Oeste",
      tag: "La avenida de los baobabs",
      blurb:
        "Una calle de tierra entre baobabs gigantes, que se visita al atardecer, y la puerta a los tsingy de Bemaraha. Calor seco de abril a noviembre.",
      coords: [-20.2833, 44.2833],
      image: null,
    },
    {
      id: "nosy-be",
      name: "Nosy Be",
      region: "Noroeste",
      tag: "Isla de playa",
      blurb:
        "La isla de playa más conocida, con arena blanca, buceo, plantaciones de ylang-ylang y la reserva de Lokobe. Lluvias fuertes de diciembre a marzo.",
      coords: [-13.3333, 48.2667],
      image: null,
    },
    {
      id: "diego-suarez",
      name: "Diego Suárez (Antsiranana)",
      region: "Norte",
      tag: "La bahía del norte",
      blurb:
        "Una ciudad de aire colonial sobre una de las bahías más grandes del mundo, con el mar Esmeralda, los tsingy rojos y la Montaña de Ámbar cerca. Ventosa de mayo a octubre.",
      coords: [-12.2787, 49.2917],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Madagascar tiene varios climas. Para las tierras altas en invierno, de mayo a septiembre, un buzo y una campera para la noche; para la costa y el sur, ropa liviana, traje de baño y protector. Para la selva del este, algo impermeable todo el año. Siempre, repelente, calzado cerrado para los parques y un adaptador universal.",
    keyPoints: [
      "Invierno seco de mayo a octubre, con noches de diez grados en Antananarivo.",
      "La selva del este llueve casi todo el año.",
      "Lluvias y ciclones de enero a marzo, sobre todo en el norte y el este.",
      "Malaria en la costa y en las zonas bajas: consultá con un médico de viajes.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, sombrero, protector y repelente. Algo impermeable de diciembre a marzo.",
      templado:
        "Ropa liviana para el día y un buzo para la noche: es el clima de las tierras altas casi todo el año.",
      fresco:
        "Capas: un buzo abrigado y una campera para las noches de invierno en Antananarivo y en Isalo.",
      frio: "Campera de abrigo para las noches de invierno en Antsirabe y en las tierras altas.",
    },
    plug: {
      types: "Tipos C, D, E, J y K",
      voltage: "220 V, 50 Hz",
      note: "Lo más común son las de dos patas redondas, como en buena parte de Europa. Un adaptador universal resuelve casi todo. Los cortes de luz son frecuentes fuera de los hoteles grandes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Contratá un auto con chofer",
          body: "Es la forma habitual de recorrer la isla: las rutas son lentas, y el chofer conoce el camino y los pueblos.",
        },
        {
          title: "Elegí una región",
          body: "En dos o tres semanas no se ve todo: mejor el sur por la ruta 7, el norte o el oeste.",
        },
        {
          title: "Recorré los parques con guía",
          body: "Es obligatorio en casi todos, y sin guía no se ven los lémures ni los camaleones.",
        },
        {
          title: "Hacé una caminata nocturna",
          body: "Con linterna se ven lémures ratón, camaleones y ranas que de día no aparecen.",
        },
        {
          title: "Llevá efectivo",
          body: "Fuera de las ciudades no hay cajeros, y casi nada acepta tarjeta.",
        },
        {
          title: "Elegí pagar en ariary",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No toques a los lémures",
          body: "Ni les des de comer: en los parques está prohibido, y los animales se acostumbran mal.",
        },
        {
          title: "No pases por alto un fady",
          body: "Son tabúes locales que cambian de un pueblo a otro: preguntale al guía antes de entrar a un lugar sagrado.",
        },
        {
          title: "No camines de noche por Antananarivo",
          body: "Moverse en taxi es la costumbre de todos.",
        },
        {
          title: "No compres animales ni plantas protegidas",
          body: "Sacar del país tortugas, lémures, maderas preciosas o fósiles está prohibido.",
        },
        {
          title: "No encadenes tramos largos de ruta",
          body: "Lo que en el mapa parece corto lleva horas: dejá margen entre un destino y otro.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "parques",
        title: "Para los parques",
        notice: {
          tone: "info",
          title: "Selva, barro y noches",
          body: "En Andasibe y Ranomafana llueve casi todo el año, y las caminatas nocturnas piden linterna.",
        },
        summary: "Lo que pide la selva",
        items: [
          "Calzado cerrado que se pueda embarrar",
          "Campera impermeable",
          "Linterna o frontal",
          "Binoculares",
          "Repelente",
        ],
      },
      {
        id: "ruta",
        title: "Para la ruta",
        notice: null,
        summary: "Días largos en auto",
        items: [
          "Agua y algo para comer",
          "Una batería externa",
          "Efectivo para los pueblos",
          "Algo para el mareo, si lo necesitás",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "La visa, online o al llegar",
          body: "Casi todos los pasaportes necesitan visa, que se tramita online o al llegar. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y páginas en blanco",
          "La visa, o el comprobante del trámite online",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en la costa y en las zonas bajas, sobre todo en la temporada de lluvias; las tierras altas tienen menos riesgo. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica y evacuación",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano",
        why: "Las noches de invierno en las tierras altas rondan los diez grados, y menos en Antsirabe.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los taxis-brousse, en las avionetas y en los caminos de tierra aguanta mejor un bolso blando.",
        instead: "Un bolso blando o una mochila.",
      },
      {
        leave: "Billetes grandes de euro",
        why: "En los pueblos nadie tiene cambio.",
        instead: "Billetes chicos, y ariary para el día a día.",
      },
      {
        leave: "Sandalias para los parques",
        why: "Los senderos de la selva son empinados y con barro.",
        instead: "Calzado de trekking.",
      },
      {
        leave: "Dólares o euros viejos o rotos",
        why: "Se rechazan en bancos y casas de cambio.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Madagascar?",
        answer:
          "Casi todos los pasaportes la necesitan. Se tramita online antes de viajar o se saca al llegar al aeropuerto, y el precio depende de los días. Verificá el tuyo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a noviembre, la temporada seca. De enero a marzo llueve mucho y hay ciclones posibles.",
      },
      {
        question: "¿Hace frío en Madagascar?",
        answer:
          "En las tierras altas, en invierno, sí: las noches de Antananarivo rondan los diez grados. La costa es calurosa todo el año.",
      },
      {
        question: "¿Se puede manejar uno mismo?",
        answer:
          "Se puede, pero lo habitual es alquilar el auto con chofer: las rutas son lentas y difíciles.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, sobre todo en la costa y en las zonas bajas. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: lo más común son las de dos patas redondas, a 220 V. Un adaptador universal resuelve casi todo.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El malgache y el francés; en los hoteles y con los guías, también inglés.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
