import type { DestinationGuide } from "./types";

/**
 * Guía de Venezuela.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: vuelve la tesis de Argentina —más de un tipo de
 * cambio para la misma moneda— y la lleva más lejos. Los precios del
 * planificador van en DÓLARES, que es como se cobra a un viajero; en bolívares
 * quedarían viejos en semanas. `budgetConversionStatus` resuelve el cruce entre
 * un corredor en VES y precios en USD.
 */
export const venezuela: DestinationGuide = {
  slug: "venezuela",
  country: "Venezuela",
  subregion: "Sudamérica",
  subhead:
    "Tepuyes, el salto de agua más alto del mundo y un Caribe de cayos casi vacíos. El bolívar tiene dos cotizaciones, pero a un viajero se le cobra en dólares.",

  image: null,

  highlights: [
    {
      value: "2",
      label: "cotizaciones del bolívar",
      note: "La oficial y la paralela, que pueden estar lejos. Para un viajero, el dólar en efectivo es lo que circula.",
    },
    {
      value: "979 m",
      label: "de altura",
      note: "El Salto Ángel, en Canaima, es el salto de agua más alto del mundo.",
    },
    {
      value: "Dic–Abr",
      label: "estación seca",
      note: "Para las playas y Los Roques. El Salto Ángel, en cambio, tiene más agua en lluvias.",
    },
    {
      value: "UTC−4",
      label: "todo el año",
      note: "Una hora menos que Buenos Aires y sin horario de verano.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Dos cotizaciones, y el dólar en la mano",
      body: [
        "El bolívar tiene una cotización oficial, la del Banco Central, y una paralela que puede estar bastante más arriba. Es la misma tesis de Argentina llevada más lejos: el mismo gasto cambia de tamaño según cómo pagues.",
        "En la práctica, a un viajero se le cobra en dólares en efectivo, y por eso los precios del planificador están en dólares. Pagar con tarjeta extranjera suele liquidarse a la cotización oficial, lo que puede salir bastante más caro.",
        "Llevá dólares en billetes chicos y en buen estado. Muchos comercios no tienen cambio, y un billete roto o escrito puede ser rechazado.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la estación seca: el mejor momento para la costa, Los Roques y Margarita, con mar calmo y cielo despejado.",
        "De mayo a noviembre llueve más, sobre todo en el sur y en los Andes. Pero es la mejor época para el Salto Ángel: con poca agua el salto adelgaza y los ríos que llevan hasta su base pueden no ser navegables.",
        "Caracas, a 900 metros, tiene un clima templado y agradable todo el año. Mérida, en los Andes, es más fresca, y sus páramos son fríos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "conexiones",
      title: "Vuelos y conexiones",
      body: [
        "Las rutas aéreas internacionales hacia Venezuela cambian seguido: aparecen, se suspenden y vuelven. Antes de reservar, confirmá que el vuelo exista y con qué frecuencia opera.",
        "Los destinos más remotos, como Canaima y Los Roques, se alcanzan en avionetas o vuelos chicos con límites de equipaje estrictos. Una mochila blanda es más práctica que una valija rígida.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "El país es grande y las rutas son largas. Para Canaima y Los Roques no hay otra opción que el avión.",
        "Lo más simple es organizar los traslados con el alojamiento o con un operador local conocido. En Caracas, taxis pedidos por el hotel o por aplicación.",
        "Para Margarita hay vuelos y ferry desde la costa oriental.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país. Las condiciones cambian y conviene saber qué cubre tu seguro.",
        "Puede haber cortes de luz y de agua en algunas zonas. Una linterna y una batería portátil cargada no ocupan lugar y resuelven mucho.",
        "Las precauciones de cualquier ciudad grande valen doble en Caracas: nada de valor a la vista, el celular guardado y traslados organizados de antemano.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Naturaleza y paisajes",
      score: 10,
      rationale:
        "Tepuyes, el Salto Ángel, los Andes y la selva de la Gran Sabana. Paisajes que no existen en otro lugar.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Los Roques, Morrocoy y Mochima son Caribe de cayos y arrecifes, y casi sin gente.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Arepas, cachapas, pabellón y una cocina de mar sabrosa. Muy buena comida al paso.",
    },
    {
      dimension: "Infraestructura turística",
      score: 4,
      rationale:
        "Poca y desigual. Fuera de los destinos principales, todo depende de operadores locales.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Los destinos remotos, como Los Roques y Canaima, salen caros por la logística. Lo cotidiano rinde más.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale:
        "Vuelos internacionales cambiantes, avionetas para lo remoto y poca información confiable en línea.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 3,
      rationale:
        "Dos cotizaciones, inflación alta y pagos en dólares en efectivo. Lo opuesto a Chile o Ecuador.",
    },
  ],

  shines: [
    "El Salto Ángel y los tepuyes, que no se parecen a nada.",
    "Un Caribe de cayos y arrecifes casi sin turismo masivo.",
    "La comida al paso, empezando por la arepa.",
  ],

  costs: [
    "Vuelos y conexiones que cambian seguido.",
    "Pagar en dólares en efectivo, con billetes chicos y en buen estado.",
    "Poca infraestructura turística fuera de los destinos principales.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Mérida no pide lo mismo que Los Roques. Los precios están en dólares, que es como se cobra a un viajero, y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "caracas",
      name: "Caracas",
      region: "Centro-norte",
      tag: "Valle bajo el Ávila",
      blurb:
        "Una capital en un valle a 900 metros, al pie del parque nacional El Ávila, con clima templado todo el año. Es la base del planificador.",
      coords: [10.4806, -66.9036],
      featured: true,
      image: null,
    },
    {
      id: "los-roques",
      name: "Los Roques",
      region: "Caribe insular",
      tag: "Archipiélago de coral",
      blurb:
        "Un parque nacional de cayos y arrecifes en pleno Caribe, con agua transparente y posadas chicas. Se llega en avioneta y es el destino más caro del país.",
      coords: [11.85, -66.75],
      image: null,
    },
    {
      id: "canaima",
      name: "Canaima y el Salto Ángel",
      region: "Guayana",
      tag: "Tepuyes",
      blurb:
        "Una laguna con cascadas rodeada de tepuyes, y la puerta al Salto Ángel, el salto de agua más alto del mundo. Solo se llega en avión.",
      coords: [6.24, -62.85],
      image: null,
    },
    {
      id: "merida",
      name: "Mérida",
      region: "Andes",
      tag: "Ciudad de montaña",
      blurb:
        "Una ciudad universitaria en los Andes, con páramos, lagunas de altura y el teleférico más alto del mundo. Fresca de día y fría arriba.",
      coords: [8.5897, -71.1561],
      image: null,
    },
    {
      id: "margarita",
      name: "Isla de Margarita",
      region: "Caribe insular",
      tag: "Playas y puerto libre",
      blurb:
        "La isla más grande del país, con playas de todos los estilos y fortalezas coloniales. Seca y soleada casi todo el año.",
      coords: [11.0, -63.9],
      image: null,
    },
    {
      id: "choroni",
      name: "Choroní",
      region: "Costa central",
      tag: "Pueblo de cacao",
      blurb:
        "Un pueblo colonial entre la selva del parque Henri Pittier y el mar, famoso por su cacao. Se llega por una ruta de montaña desde Maracay.",
      coords: [10.493, -67.61],
      image: null,
    },
    {
      id: "mochima",
      name: "Mochima",
      region: "Oriente",
      tag: "Bahías e islotes",
      blurb:
        "Un parque nacional de bahías, islotes y playas a las que se llega en lancha. Agua calma y snorkel.",
      coords: [10.35, -64.35],
      image: null,
    },
    {
      id: "morrocoy",
      name: "Morrocoy",
      region: "Occidente",
      tag: "Cayos",
      blurb:
        "Un parque nacional de cayos de arena blanca frente a Tucacas, a pocas horas de Caracas. Se recorre en lancha.",
      coords: [10.8, -68.3167],
      image: null,
    },
    {
      id: "colonia-tovar",
      name: "Colonia Tovar",
      region: "Centro-norte",
      tag: "Pueblo alemán de montaña",
      blurb:
        "Un pueblo fundado por colonos alemanes a 1.800 metros, con casas de entramado y clima fresco, a dos horas de Caracas.",
      coords: [10.4069, -67.29],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Venezuela es calor en la costa y fresco en la montaña. Para el Caribe, ropa liviana, protector y repelente; para Mérida y Colonia Tovar, un polar y una campera; para Canaima, ropa de secado rápido y algo impermeable. Si vas a lugares remotos, mochila blanda: las avionetas tienen límite de peso. Y llevá dólares en billetes chicos y en buen estado.",
    keyPoints: [
      "La estación seca, de diciembre a abril, es la mejor para la costa y Los Roques.",
      "Los Andes de Mérida son frescos de día y fríos en los páramos.",
      "Las avionetas a Los Roques y Canaima tienen límites de equipaje estrictos.",
      "El efectivo en dólares, en billetes chicos, es parte de la valija.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y que seque rápido, traje de baño, protector y repelente. En los cayos el sol se refleja en el agua y en la arena.",
      templado:
        "Remera y algo de manga larga. Es el clima de Caracas todo el año; una campera liviana alcanza para la noche.",
      fresco:
        "Buzo o polar y campera. Es el clima de Mérida y de Colonia Tovar.",
      frio: "Campera de abrigo, gorro y guantes para los páramos de los Andes y el teleférico de Mérida.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá dólares en billetes chicos",
          body: "Es como se paga casi todo. Billetes de uno, cinco, diez y veinte, en buen estado: los rotos o escritos se rechazan.",
        },
        {
          title: "Usá mochila blanda para los destinos remotos",
          body: "Las avionetas a Los Roques y Canaima tienen límites de peso y espacio. Una valija rígida puede no entrar.",
        },
        {
          title: "Llevá linterna y batería portátil",
          body: "Puede haber cortes de luz. Ocupan poco y resuelven mucho.",
        },
        {
          title: "Organizá traslados de antemano",
          body: "Con el alojamiento o con un operador local conocido. Es más simple y más previsible que improvisar.",
        },
        {
          title: "Confirmá los vuelos antes de reservar",
          body: "Las rutas internacionales cambian seguido. Verificá que el vuelo exista y con qué frecuencia opera.",
        },
        {
          title: "Repelente y protector para la costa",
          body: "El sol del Caribe pega fuerte y los mosquitos aparecen al atardecer.",
        },
      ],
      donts: [
        {
          title: "No cuentes con pagar todo con tarjeta",
          body: "La tarjeta extranjera suele liquidarse a la cotización oficial y muchos lugares no la aceptan. El efectivo en dólares es la norma.",
        },
        {
          title: "No lleves billetes grandes o dañados",
          body: "Muchos comercios no tienen cambio, y un billete roto puede ser rechazado.",
        },
        {
          title: "No lleves una valija rígida a Los Roques",
          body: "Las avionetas tienen límites de equipaje y de forma.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada o filtrada, siempre.",
        },
        {
          title: "No muestres objetos de valor",
          body: "Nada de joyas ni el celular a la vista en la calle.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, efectivo, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "plata",
        title: "Efectivo",
        notice: {
          tone: "warn",
          title: "Dólares chicos y en buen estado",
          body: "Es como se paga casi todo. Los billetes rotos, manchados o escritos suelen rechazarse, y muchos comercios no tienen cambio para billetes grandes.",
        },
        summary: "Cómo llevar la plata",
        items: [
          "Dólares en billetes de uno, cinco, diez y veinte",
          "Billetes en buen estado, sin roturas ni escrituras",
          "Una riñonera o bolsillo interno para el efectivo",
          "Una tarjeta de respaldo para emergencias",
        ],
      },
      {
        id: "cortes",
        title: "Luz y agua",
        notice: {
          tone: "info",
          title: "Puede haber cortes",
          body: "En algunas zonas hay cortes de luz o de agua. Con un par de cosas en la valija no te afectan.",
        },
        summary: "Lo que resuelve un corte",
        items: [
          "Linterna o frontal",
          "Batería portátil cargada",
          "Toallitas húmedas",
          "Botella de agua",
        ],
      },
      {
        id: "playa",
        title: "Caribe y sol",
        notice: null,
        summary: "Lo específico de la costa y los cayos",
        items: [
          "Protector solar de factor alto",
          "Gorro y anteojos de sol",
          "Repelente",
          "Bolsa impermeable para el teléfono y la plata",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Llevá tu botiquín completo",
          body: "Algunos medicamentos pueden ser difíciles de conseguir. Llevá todo lo que uses, con receta y en envase original. Para Canaima suele recomendarse la vacuna contra la fiebre amarilla.",
        },
        summary: "Botiquín y qué averiguar antes",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico, antiácido y algo para el malestar estomacal",
          "Sales de rehidratación",
          "Seguro de viaje con cobertura médica",
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
    ],
    avoid: [
      {
        leave: "Una valija rígida grande",
        why: "Las avionetas a los destinos remotos tienen límites de peso y de forma.",
        instead: "Una mochila blanda.",
      },
      {
        leave: "Billetes grandes",
        why: "Muchos comercios no tienen cambio.",
        instead: "Dólares chicos.",
      },
      {
        leave: "Solo tarjeta",
        why: "Se liquida a la cotización oficial y muchos lugares no la aceptan.",
        instead: "Efectivo en dólares.",
      },
      {
        leave: "Abrigo pesado para la costa",
        why: "En el Caribe no hay un mes frío.",
        instead: "Solo un polar si vas a los Andes.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En la calle conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
      {
        leave: "Jeans pesados",
        why: "Con calor y humedad no se secan.",
        instead: "Pantalones livianos de secado rápido.",
      },
      {
        leave: "La confianza en el wifi",
        why: "La conexión puede ser intermitente, sobre todo con cortes de luz.",
        instead: "Mapas y documentos descargados en el teléfono.",
      },
    ],
    faq: [
      {
        question: "¿En qué moneda pago?",
        answer:
          "En la práctica, en dólares en efectivo. El bolívar existe y tiene dos cotizaciones, pero a un viajero se le cobra casi todo en dólares.",
      },
      {
        question: "¿Funciona mi tarjeta?",
        answer:
          "En algunos lugares sí, pero suele liquidarse a la cotización oficial, que puede salir bastante más caro. Contá con el efectivo.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 120 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril para la costa y Los Roques. De junio a noviembre para ver el Salto Ángel con agua.",
      },
      {
        question: "¿Cómo llego a Los Roques?",
        answer:
          "En avioneta desde Caracas o desde Margarita. Hay límite de equipaje: mochila blanda.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No. Agua embotellada o filtrada, siempre.",
      },
      {
        question: "¿Necesito vacunas?",
        answer:
          "Para Canaima y la Guayana suele recomendarse la fiebre amarilla. Consultalo con semanas de anticipación.",
      },
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro y que el vuelo exista con la frecuencia que figura.",
      },
    ],
  },
};
