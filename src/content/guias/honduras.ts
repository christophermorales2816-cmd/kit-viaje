import type { DestinationGuide } from "./types";

/**
 * Guía de Honduras.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: DOS calendarios de lluvia en el mismo país. El
 * interior llueve de mayo a octubre; la costa caribe y las islas, de octubre a
 * enero, con los nortes. Roatán en noviembre y Copán en noviembre no están en
 * la misma temporada.
 */
export const honduras: DestinationGuide = {
  slug: "honduras",
  country: "Honduras",
  subregion: "México y Centroamérica",
  subhead:
    "Arrecife caribeño en las Islas de la Bahía y la ciudad maya de Copán en las montañas. Dos calendarios de lluvia en un mismo país.",

  image: null,

  highlights: [
    {
      value: "2",
      label: "temporadas de lluvia distintas",
      note: "El interior llueve de mayo a octubre; el Caribe y las islas, de octubre a enero.",
    },
    {
      value: "2.º",
      label: "arrecife más grande del mundo",
      note: "El Sistema Arrecifal Mesoamericano pasa frente a Roatán y Utila.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El lempira es estable. En las islas casi todo se cobra también en dólares.",
    },
    {
      value: "UTC−6",
      label: "todo el año",
      note: "Tres horas menos que Buenos Aires y sin horario de verano.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Honduras",
      body: [
        "El lempira tiene un solo tipo de cambio. En las Islas de la Bahía casi todo se cobra también en dólares, y en el continente se usa el lempira.",
        "La tarjeta funciona en hoteles y restaurantes de las islas y de las ciudades. Para buses, mercados y pueblos hace falta efectivo.",
        "Llevá billetes chicos en dólares si vas a las islas, y lempiras para el continente.",
      ],
    },
    {
      id: "dos-calendarios",
      title: "Dos calendarios de lluvia",
      body: [
        "En el interior —Tegucigalpa, Copán, Gracias— la estación seca va de noviembre a abril y llueve de mayo a octubre, igual que en el resto de Centroamérica.",
        "En la costa caribe y en las Islas de la Bahía es distinto: la temporada más lluviosa va de octubre a enero, cuando llegan los frentes fríos del norte. De marzo a agosto es la mejor época para bucear.",
        "Si combinás Copán con Roatán, elegí el mes mirando los dos calendarios. Marzo y abril funcionan bien para los dos.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Para un viaje que combine montaña y Caribe, de febrero a abril es lo más seguro: seco en el interior y antes de las lluvias en las islas.",
        "La temporada de huracanes del Caribe va de junio a noviembre. Las islas no suelen recibirlos de lleno, pero conviene seguir los avisos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Roatán tiene aeropuerto internacional, y desde La Ceiba salen ferries a Roatán y Utila.",
        "Entre San Pedro Sula, Copán y La Ceiba hay buses de empresas directas, que son la opción más cómoda. Los buses locales son baratos pero lentos.",
        "Lo más simple es organizar los traslados con el alojamiento o con una empresa de shuttles.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones de cualquier ciudad grande valen especialmente en Tegucigalpa y San Pedro Sula: nada de valor a la vista, traslados organizados y no caminar de noche por zonas que no conocés.",
        "El agua de la canilla no es para tomar. Agua embotellada o filtrada.",
        "Para el dengue, repelente de día y de noche, sobre todo en la costa y las islas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Buceo y arrecifes",
      score: 9.5,
      rationale:
        "Roatán y Utila están sobre el segundo arrecife más grande del mundo, y Utila es de los lugares más baratos del planeta para aprender a bucear.",
    },
    {
      dimension: "Historia y arqueología",
      score: 8.5,
      rationale: "Copán tiene la escultura maya más fina de toda la región.",
    },
    {
      dimension: "Naturaleza",
      score: 7.5,
      rationale:
        "Bosques nublados, el lago de Yojoa y cascadas. Poco explorado por el turismo.",
    },
    {
      dimension: "Gastronomía",
      score: 6.5,
      rationale:
        "La baleada, el pescado frito y la cocina garífuna de la costa. Sencilla y rica.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Barato en el continente y en Utila. Roatán tiene precios de destino caribeño.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Funciona entre los destinos principales, pero fuera de ellos la infraestructura es escasa.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8.5,
      rationale:
        "Un tipo de cambio y una moneda estable, con dólares aceptados en las islas.",
    },
  ],

  shines: [
    "Bucear en un arrecife de primer nivel a precios de los más bajos del Caribe.",
    "Copán, una ciudad maya con escultura de una finura única.",
    "Un país casi sin turismo masivo fuera de las islas.",
  ],

  costs: [
    "Dos calendarios de lluvia que hay que combinar con cuidado.",
    "Las ciudades grandes, que se recorren con precauciones.",
    "Poca infraestructura turística fuera de los destinos principales.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Roatán en noviembre no tiene la misma temporada que Copán. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "tegucigalpa",
      name: "Tegucigalpa",
      region: "Centro",
      tag: "Capital entre cerros",
      blurb:
        "La capital, en un valle a casi mil metros, con un centro colonial y pueblos mineros cerca como Valle de Ángeles. Clima templado. Es la base del planificador.",
      coords: [14.0723, -87.1921],
      featured: true,
      image: null,
    },
    {
      id: "roatan",
      name: "Roatán",
      region: "Islas de la Bahía",
      tag: "Arrecife y buceo",
      blurb:
        "La isla más grande de la bahía, sobre el arrecife mesoamericano, con playas de arena blanca y buceo de primer nivel. Tiene aeropuerto internacional.",
      coords: [16.3298, -86.53],
      image: null,
    },
    {
      id: "utila",
      name: "Utila",
      region: "Islas de la Bahía",
      tag: "Tiburón ballena",
      blurb:
        "Una isla chica y relajada, de los lugares más baratos del mundo para sacar la licencia de buceo. Con suerte, tiburones ballena.",
      coords: [16.095, -86.903],
      image: null,
    },
    {
      id: "copan",
      name: "Copán Ruinas",
      region: "Occidente",
      tag: "Ciudad maya",
      blurb:
        "Un pueblo de montaña junto a la ciudad maya de Copán, famosa por sus estelas y su escalinata jeroglífica. Guacamayas en las ruinas.",
      coords: [14.8404, -89.1416],
      image: null,
    },
    {
      id: "la-ceiba",
      name: "La Ceiba",
      region: "Caribe",
      tag: "Puerta a las islas",
      blurb:
        "La ciudad de la costa norte desde donde salen los ferries a Roatán y Utila, con rafting en el río Cangrejal y el parque Pico Bonito cerca.",
      coords: [15.7597, -86.7822],
      image: null,
    },
    {
      id: "lago-de-yojoa",
      name: "Lago de Yojoa",
      region: "Centro",
      tag: "Lago y cascadas",
      blurb:
        "El lago más grande del país, rodeado de bosque, con la cascada de Pulhapanzak y muchísimas aves. Una pausa entre la montaña y la costa.",
      coords: [14.8667, -87.9833],
      image: null,
    },
    {
      id: "gracias",
      name: "Gracias",
      region: "Occidente",
      tag: "Montaña y aguas termales",
      blurb:
        "Un pueblo colonial al pie del parque Celaque, con la montaña más alta del país, aguas termales y comunidades lencas.",
      coords: [14.5906, -88.5831],
      image: null,
    },
    {
      id: "tela",
      name: "Tela",
      region: "Caribe",
      tag: "Playas garífunas",
      blurb:
        "Playas largas sobre el Caribe, comunidades garífunas y el jardín botánico Lancetilla. Más tranquila que La Ceiba.",
      coords: [15.7769, -87.4567],
      image: null,
    },
    {
      id: "san-pedro-sula",
      name: "San Pedro Sula",
      region: "Norte",
      tag: "Ciudad industrial y aeropuerto",
      blurb:
        "La segunda ciudad del país y el aeropuerto con más vuelos internacionales. La mayoría la usa de paso hacia Copán o la costa.",
      coords: [15.5, -88.0333],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Honduras es calor en la costa y las islas, y templado en la montaña. Para Roatán y Utila, ropa liviana, traje de baño, protector y repelente; para Tegucigalpa, Copán y Gracias, sumá algo de manga larga y una campera liviana para la noche. Lo que cambia la fecha es la lluvia: el interior llueve de mayo a octubre y el Caribe de octubre a enero. De febrero a abril es seco en los dos.",
    keyPoints: [
      "Dos calendarios de lluvia: el interior de mayo a octubre, el Caribe de octubre a enero.",
      "De febrero a abril es la ventana que funciona para montaña y Caribe a la vez.",
      "Las islas son calor todo el año; la montaña tiene noches frescas.",
      "Repelente de día y de noche en la costa y las islas.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, protector biodegradable y repelente. Es el clima de las islas y la costa todo el año.",
      templado:
        "Remera y algo de manga larga, con una campera liviana para la noche. Es el clima de Tegucigalpa y Copán.",
      fresco:
        "Buzo o polar para las noches de la montaña, en Gracias y en el parque Celaque.",
      frio: "Casi no aparece. Alguna madrugada de invierno en la montaña alta puede pedir un abrigo medio.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Elegí el mes mirando los dos calendarios",
          body: "Si combinás montaña y Caribe, de febrero a abril es seco en los dos.",
        },
        {
          title: "Protector biodegradable para el arrecife",
          body: "El arrecife es frágil, y muchos operadores de buceo lo piden.",
        },
        {
          title: "Dólares chicos para las islas",
          body: "En Roatán y Utila casi todo se cobra en dólares, y no siempre hay cambio.",
        },
        {
          title: "Organizá los traslados con el alojamiento",
          body: "Es la forma más simple y previsible de moverse, sobre todo al llegar a San Pedro Sula o Tegucigalpa.",
        },
        {
          title: "Repelente de día y de noche",
          body: "En la costa y las islas el mosquito del dengue pica a toda hora.",
        },
        {
          title: "Una campera liviana para la montaña",
          body: "Copán y Gracias tienen noches frescas aunque el día sea caluroso.",
        },
      ],
      donts: [
        {
          title: "No vayas a las islas en noviembre sin saberlo",
          body: "Es la temporada más lluviosa del Caribe hondureño, aunque en el interior ya sea época seca.",
        },
        {
          title: "No camines de noche por zonas que no conocés",
          body: "En las ciudades grandes, traslados organizados de noche.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada o filtrada, siempre.",
        },
        {
          title: "No toques el arrecife",
          body: "Ni con las manos ni con las aletas. Tarda décadas en recuperarse.",
        },
        {
          title: "No cargues abrigo pesado",
          body: "Ni en la montaña hace frío de verdad. Una campera liviana alcanza.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "islas",
        title: "Islas y arrecife",
        notice: {
          tone: "info",
          title: "El arrecife se cuida",
          body: "Protector biodegradable y nada de tocar el coral. Muchos operadores de buceo lo exigen.",
        },
        summary: "Lo específico de Roatán y Utila",
        items: [
          "Protector solar biodegradable",
          "Traje de baño y remera con protección UV",
          "Máscara propia si tenés, para snorkel",
          "Bolsa impermeable para el teléfono",
          "Pastillas para el mareo, si tomás el ferry",
        ],
      },
      {
        id: "mosquitos",
        title: "Mosquitos",
        notice: {
          tone: "warn",
          title: "El dengue pica de día",
          body: "En la costa y las islas el mosquito que lo transmite está activo de día. Repelente desde la mañana.",
        },
        summary: "Lo que conviene llevar",
        items: [
          "Repelente con DEET o icaridina",
          "Una prenda de manga larga liviana",
          "Espiral o tableta si dormís con la ventana abierta",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el malestar estomacal y sales de rehidratación",
          "Gotas para los oídos si vas a bucear",
          "Seguro de viaje con cobertura médica, que incluya buceo si vas a bucear",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a fichas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Protector solar de factor alto y remera con protección UV",
          "Repelente apto para chicos",
          "Chaleco salvavidas propio si van a navegar seguido",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo pesado",
        why: "Ni en la montaña hace frío de verdad.",
        instead: "Una campera liviana.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral y muchos operadores no lo permiten.",
        instead: "Protector biodegradable.",
      },
      {
        leave: "Billetes grandes",
        why: "En las islas y los pueblos no siempre hay cambio.",
        instead: "Dólares y lempiras en billetes chicos.",
      },
      {
        leave: "Jeans pesados",
        why: "Con calor y humedad no se secan.",
        instead: "Pantalones livianos.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Las islas son de ojotas, y Copán se camina sobre piedra.",
        instead: "Ojotas y zapatillas cómodas.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan y en las ciudades conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
      {
        leave: "Una valija rígida enorme",
        why: "El ferry a las islas y los buses tienen poco espacio.",
        instead: "Una valija mediana o una mochila.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 120 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De febrero a abril, que es seco en el interior y en el Caribe a la vez.",
      },
      {
        question: "¿Cuándo llueve en Roatán?",
        answer:
          "Sobre todo de octubre a enero, con los frentes del norte. Es al revés que en el interior del país.",
      },
      {
        question: "¿Se puede pagar en dólares?",
        answer:
          "En las Islas de la Bahía, casi en todos lados. En el continente se usa el lempira.",
      },
      {
        question: "¿Cómo llego a Roatán?",
        answer:
          "En avión, con vuelos internacionales directos o vía San Pedro Sula, o en ferry desde La Ceiba.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No. Agua embotellada o filtrada.",
      },
      {
        question: "¿Es caro aprender a bucear?",
        answer:
          "Utila es de los lugares más baratos del mundo para sacar la licencia de buceo.",
      },
      {
        question: "¿De qué tamaño conviene la valija?",
        answer:
          "Chica o mediana. Con ropa liviana alcanza, y el ferry y los buses tienen poco espacio.",
      },
    ],
  },
};
