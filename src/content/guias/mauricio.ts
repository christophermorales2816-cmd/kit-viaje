import type { DestinationGuide } from "./types";

/**
 * Guía de Mauricio.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: una isla que cambia en pocos kilómetros. El oeste
 * es seco y soleado, el este y el sur son más lluviosos, y la meseta central,
 * en Curepipe, es fresca y con lluvia casi todo el año: el bucket de lluvia
 * (spec, 14.12) se activa ahí once meses de doce.
 * El dato de la portada es la laguna, que es lo que la hace distinta para la
 * playa. Los ciclones, de enero a marzo, van en el hero y en una sección de la
 * valija. Rodrigues, a casi seiscientos kilómetros, es parte del país y entra
 * como una ciudad más. Sin malaria; la entrada pide un formulario online.
 */
export const mauricio: DestinationGuide = {
  slug: "mauricio",
  country: "Mauricio",
  subregion: "África Oriental",
  subhead:
    "Lagunas turquesas protegidas por el arrecife, la montaña de Le Morne, la tierra de colores de Chamarel y una cocina que mezcla India, África, China y Francia. Una isla chica en el Índico.",

  image: null,

  highlights: [
    {
      value: "Laguna",
      label: "de arrecife alrededor de casi toda la isla",
      note: "Un arrecife de coral rodea casi toda la costa y deja adentro una laguna de agua calma y tibia, para nadar y hacer snorkel.",
    },
    {
      value: "Ciclones",
      label: "posibles de enero a marzo",
      note: "La temporada va de noviembre a abril, y los meses de más riesgo son de enero a marzo. Si se acerca uno, hay avisos con días de anticipación: un seguro que cubra cambios de vuelo ayuda.",
    },
    {
      value: "Le Morne",
      label: "la montaña y la cascada submarina",
      note: "La montaña, patrimonio de la humanidad por la historia de los esclavos que se refugiaron en ella, y frente a la costa, una ilusión óptica de arena y corrientes que desde el aire parece una cascada bajo el mar.",
    },
    {
      value: "Siete colores",
      label: "en la tierra de Chamarel",
      note: "Dunas de tierra volcánica de varios colores, al lado de la cascada más alta de la isla, en el suroeste montañoso.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Mauricio",
      body: [
        "Casi todos los pasaportes entran sin visa previa: el permiso se da al llegar, con el pasaje de vuelta y la reserva del alojamiento. Verificá el tuyo antes de viajar.",
        "Antes de viajar hay que completar online un formulario de llegada, el All-in-One Travel Digital Form, que reemplazó a las tarjetas de papel.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Mauricio",
      body: [
        "La moneda es la rupia mauriciana. La tarjeta funciona en hoteles, restaurantes y supermercados; en los mercados, en los puestos de comida y en los colectivos, efectivo.",
        "Hay cajeros en el aeropuerto y en todos los pueblos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí rupias: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Trópico con invierno",
      body: [
        "Mauricio está en el hemisferio sur, en el trópico. De noviembre a abril es verano: calor húmedo, chaparrones de tarde y la temporada de ciclones, con más riesgo de enero a marzo.",
        "De junio a septiembre es invierno: días templados, alisios del sudeste y noches frescas, que en Curepipe, en la meseta central, rondan los catorce grados.",
        "La isla cambia en pocos kilómetros: el oeste —Flic en Flac, Le Morne— es lo más seco y soleado; el este y el sur reciben más viento y lluvia.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a diciembre: menos lluvia y menos humedad. Septiembre, octubre y noviembre son los meses más secos en casi toda la isla.",
        "De enero a marzo hace más calor y llueve más, con riesgo de ciclones; a cambio, el agua está más tibia. En invierno, la costa este puede tener viento fuerte, y el oeste está más reparado.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Mauricio",
      body: [
        "Se maneja por la izquierda, y alquilar un auto es la forma más simple de recorrer la isla. Los caminos son angostos y lentos: las distancias cortas llevan más tiempo del que parece.",
        "Hay colectivos entre los pueblos, baratos pero lentos, y un metro liviano entre Port Louis y Curepipe. Los taxis conviene arreglarlos antes de subir.",
        "A Rodrigues se llega en un vuelo corto desde el aeropuerto principal, o en barco, en más de un día.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Aapravasi Ghat y Le Morne, patrimonio de la humanidad por la historia de los trabajadores contratados y de los esclavos fugitivos, y el Port Louis colonial.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Una mezcla de India, África, China y Francia: dholl puri, curry, rougaille y mariscos.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Lagunas turquesas, montañas volcánicas, las gargantas del río Negro y la tierra de colores de Chamarel.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Arena blanca y lagunas calmas, protegidas por el arrecife, en casi todo el contorno.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Los resorts son caros; comer en la calle y moverse en colectivo, barato.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Una isla chica, con buenos caminos y casi todo a pocas horas en auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "La rupia es bastante estable, y casi todo se puede pagar con tarjeta.",
    },
  ],

  shines: [
    "Lagunas calmas y transparentes, protegidas por el arrecife.",
    "Una cocina que mezcla India, África, China y Francia.",
    "Playa y montaña en la misma isla, a poca distancia.",
  ],

  costs: [
    "Resorts caros, sobre todo en temporada alta.",
    "Ciclones posibles de enero a marzo.",
    "Caminos lentos, y la costa este con viento en invierno.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Grand Baie en julio que Curepipe o Rodrigues. Los precios están en rupias mauricianas y son órdenes de magnitud; un resort con todo incluido puede costar varias veces más.",

  places: [
    {
      id: "grand-baie",
      name: "Grand Baie",
      region: "Norte",
      tag: "El centro del norte",
      blurb:
        "Una bahía con restaurantes, bares y salidas en catamarán a las islas del norte, como Gabriel y Plate. Es la base del planificador: calor húmedo de diciembre a abril e inviernos templados.",
      coords: [-20.013, 57.58],
      featured: true,
      image: null,
    },
    {
      id: "port-louis",
      name: "Port Louis",
      region: "Noroeste",
      tag: "La capital",
      blurb:
        "El mercado central, el barrio chino, el puerto renovado del Caudan y Aapravasi Ghat, el depósito de inmigrantes que es patrimonio de la humanidad. Se visita en el día desde el norte.",
      coords: [-20.1609, 57.5012],
      image: null,
    },
    {
      id: "rodrigues",
      name: "Rodrigues",
      region: "Isla Rodrigues",
      tag: "La otra isla",
      blurb:
        "Una isla chica y tranquila, a casi seiscientos kilómetros, con una laguna enorme, senderos sobre la costa y tortugas gigantes en la reserva François Leguat.",
      coords: [-19.7245, 63.4272],
      image: null,
    },
    {
      id: "flic-en-flac",
      name: "Flic en Flac",
      region: "Oeste",
      tag: "Playa y atardeceres",
      blurb:
        "Una de las playas más largas de la isla, en la costa más seca y soleada, con atardeceres sobre el mar.",
      coords: [-20.2833, 57.3667],
      image: null,
    },
    {
      id: "le-morne",
      name: "Le Morne",
      region: "Suroeste",
      tag: "La montaña y el kitesurf",
      blurb:
        "La montaña de los esclavos fugitivos, patrimonio de la humanidad, una laguna de kitesurf y la cascada submarina, que se ve desde el aire.",
      coords: [-20.457, 57.31],
      image: null,
    },
    {
      id: "belle-mare",
      name: "Belle Mare",
      region: "Este",
      tag: "Playa larga",
      blurb:
        "Una playa larga de resorts, con la Île aux Cerfs cerca y alisios que refrescan. Más lluviosa que el oeste.",
      coords: [-20.188, 57.77],
      image: null,
    },
    {
      id: "mahebourg",
      name: "Mahébourg y Blue Bay",
      region: "Sudeste",
      tag: "Parque marino",
      blurb:
        "Un pueblo de pescadores cerca del aeropuerto, y Blue Bay, un parque marino con corales para el snorkel.",
      coords: [-20.4081, 57.7],
      image: null,
    },
    {
      id: "chamarel",
      name: "Chamarel",
      region: "Suroeste",
      tag: "La tierra de colores",
      blurb:
        "La tierra de siete colores, la cascada más alta de la isla, una destilería de ron y miradores sobre las gargantas del río Negro. Más fresco que la costa.",
      coords: [-20.424, 57.373],
      image: null,
    },
    {
      id: "curepipe",
      name: "Curepipe (meseta central)",
      region: "Meseta central",
      tag: "Fresco y lluvioso",
      blurb:
        "La ciudad de la meseta, junto al cráter del Trou aux Cerfs, con el lago sagrado de Grand Bassin cerca. Fresca y lluviosa casi todo el año.",
      coords: [-20.3163, 57.5259],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Mauricio, ropa liviana y fresca, traje de baño, protector y calzado para el agua. De junio a septiembre, un buzo o una campera liviana para la noche y para la meseta, que es fresca; de enero a marzo, algo impermeable. Todo el año, repelente y un adaptador para el enchufe británico.",
    keyPoints: [
      "Verano húmedo de noviembre a abril, con ciclones posibles de enero a marzo.",
      "Invierno templado de junio a septiembre, con noches frescas.",
      "El oeste es lo más seco; la meseta central, lo más fresco y lluvioso.",
      "Antes de viajar, el formulario de llegada online.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero y protector. Algo impermeable para los chaparrones de verano.",
      templado:
        "Ropa liviana para el día y un buzo para la noche: es el invierno de la costa.",
      fresco:
        "Capas y una campera rompevientos: es el clima de la meseta central en invierno.",
      frio: "Una campera de abrigo, por si subís a la meseta en una noche de invierno.",
    },
    plug: {
      types: "Tipos C y G",
      voltage: "230 V, 50 Hz",
      note: "Lo más común es el británico, de tres patas rectangulares; también aparece el de dos patas redondas finas. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Completá el formulario de llegada antes de viajar",
          body: "Es online y reemplaza a las tarjetas de papel.",
        },
        {
          title: "Usá calzado para el agua",
          body: "El fondo de la laguna tiene corales, piedras y erizos.",
        },
        {
          title: "Elegí la costa según la época",
          body: "En invierno, el oeste y el norte están más reparados del viento; en verano, toda la isla es buena.",
        },
        {
          title: "Probá la comida de la calle",
          body: "Dholl puri, gâteaux piments y currys, en los mercados y en las playas los fines de semana.",
        },
        {
          title: "Alquilá un auto para recorrer",
          body: "Con auto, cualquier punto de la isla queda a una excursión de un día; en colectivo, lleva mucho más.",
        },
        {
          title: "Elegí pagar en rupias",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No toques ni pises los corales",
          body: "Están vivos y se rompen; además, cortan.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "Fuera de la laguna, y en las playas del sur sin arrecife, las corrientes son fuertes.",
        },
        {
          title: "No te lleves corales ni caracoles",
          body: "Está prohibido sacarlos del país.",
        },
        {
          title: "No te olvides del repelente",
          body: "En algunas temporadas hay dengue, y los mosquitos que lo transmiten pican de día.",
        },
        {
          title: "No viajes sin seguro en la temporada de ciclones",
          body: "Un ciclón puede cerrar el aeropuerto por días: que el seguro cubra cambios de vuelo.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "playa",
        title: "Para la playa",
        notice: {
          tone: "info",
          title: "Sol fuerte todo el año",
          body: "Aunque el invierno sea templado, el sol del trópico quema: protector todos los días.",
        },
        summary: "Laguna y arrecife",
        items: [
          "Traje de baño",
          "Protector solar que no dañe el coral",
          "Calzado para el agua",
          "Máscara y snorkel",
          "Algo para cubrirse fuera de la playa",
        ],
      },
      {
        id: "ciclones",
        title: "Si viajás de enero a marzo",
        notice: {
          tone: "warn",
          title: "Temporada de ciclones",
          body: "Si se acerca un ciclón, hay avisos con días de anticipación y la isla se cierra hasta que pasa. Seguí las indicaciones del alojamiento.",
        },
        summary: "Por si llega un ciclón",
        items: [
          "Seguro de viaje que cubra cambios de vuelo",
          "Una batería externa",
          "Linterna o frontal",
          "Algo impermeable",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "El formulario, antes de viajar",
          body: "Hay que completar el formulario de llegada online. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "El formulario de llegada completo",
          "Pasaje de vuelta y reserva del alojamiento",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Sin malaria",
          body: "No hay malaria, pero en algunas temporadas hay dengue: repelente igual.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Protector solar con oxibenzona",
        why: "Daña el coral de la laguna.",
        instead: "Un protector que no dañe el coral, o ropa con filtro UV.",
      },
      {
        leave: "Solo ropa de verano",
        why: "De junio a septiembre las noches son frescas, y más en la meseta.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Sandalias para la laguna",
        why: "El fondo tiene corales, piedras y erizos.",
        instead: "Calzado para el agua.",
      },
      {
        leave: "El traje de baño fuera de la playa",
        why: "En Port Louis, en los mercados y en los templos se usa ropa que cubra.",
        instead: "Algo liviano para taparse.",
      },
      {
        leave: "Efectivo de más",
        why: "La tarjeta funciona en casi todos lados, y hay cajeros en todos los pueblos.",
        instead: "Una tarjeta y algo de efectivo para los mercados.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Mauricio?",
        answer:
          "Casi todos los pasaportes entran sin visa previa, con el pasaje de vuelta y la reserva del alojamiento. Antes de viajar hay que completar el formulario de llegada online. Verificá el tuyo.",
      },
      {
        question: "¿Cuándo es la temporada de ciclones?",
        answer:
          "De noviembre a abril, con más riesgo de enero a marzo. Si se acerca uno, hay avisos con días de anticipación.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a diciembre, con menos lluvia y humedad; septiembre, octubre y noviembre son los meses más secos.",
      },
      {
        question: "¿Hace frío en invierno?",
        answer:
          "En la costa, no: los días son templados y las noches, frescas. En la meseta central, en Curepipe, sí hace falta abrigo.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "No. En algunas temporadas hay dengue, así que el repelente va igual.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Lo más común es el británico, tipo G, a 230 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El criollo mauriciano en la calle, y el francés y el inglés en todos lados.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Mejor tomar embotellada o filtrada, sobre todo después de lluvias fuertes.",
      },
    ],
  },
};
