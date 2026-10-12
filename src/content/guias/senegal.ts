import type { DestinationGuide } from "./types";

/**
 * Guía de Senegal.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primer franco CFA del planificador, una moneda
 * atada al euro que comparten ocho países, y dos estaciones bien marcadas
 * —seca de noviembre a junio, lluvias de julio a octubre—, que es el dato de la
 * portada. En Dakar la lluvia no llega al bucket (spec, 14.12) ni en agosto,
 * el mes más lluvioso; en el delta del Sine Saloum, sí, en agosto y septiembre.
 * La salud pide preparación: fiebre amarilla y malaria. Ninguna ciudad del
 * planificador está en Casamance ni en el este, sobre la frontera con Malí, y
 * la guía lo dice como dato de entrada, como Kenia con la frontera de Somalia.
 */
export const senegal: DestinationGuide = {
  slug: "senegal",
  country: "Senegal",
  subregion: "África Occidental",
  subhead:
    "La música y los mercados de Dakar, la isla de Gorea, el lago Rosa, la vieja Saint-Louis y los manglares del Sine Saloum. La hospitalidad senegalesa tiene nombre propio: teranga.",

  image: null,

  highlights: [
    {
      value: "Lluvias",
      label: "de julio a octubre; el resto del año, seco",
      note: "De noviembre a junio casi no llueve, y Dakar es templada, con brisa del Atlántico. De julio a octubre llegan las lluvias y el calor húmedo, sobre todo en agosto y septiembre.",
    },
    {
      value: "Teranga",
      label: "la hospitalidad que es orgullo nacional",
      note: "Es la palabra wolof para la hospitalidad, y en Senegal se toma en serio: te van a invitar a comer de la fuente común y a tomar el attaya, el té que se sirve en tres rondas.",
    },
    {
      value: "Lago Rosa",
      label: "más rosa en la temporada seca",
      note: "El lago Retba, cerca de Dakar, se tiñe de rosa por un alga que vive en el agua muy salada. Se ve mejor con sol, de noviembre a junio, y no todos los años igual. Alrededor, se saca sal a mano.",
    },
    {
      value: "Gorea",
      label: "la isla de la memoria de la esclavitud",
      note: "Una isla chica frente a Dakar, de casas coloniales y calles sin autos, con la Casa de los Esclavos. Patrimonio de la humanidad, a un viaje corto en ferry.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Senegal",
      body: [
        "Muchos pasaportes entran sin visa para estadías cortas; otros la tramitan antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "La fiebre amarilla circula en Senegal: la vacuna se recomienda, y el certificado te lo pueden pedir al entrar —si venís de un país con riesgo— o en tu próximo destino. Tiene que estar aplicada al menos diez días antes de llegar.",
        "Ninguna ciudad del planificador está en Casamance ni en el este, sobre la frontera con Malí. Si vas, revisá antes las recomendaciones de viaje de tu país.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Senegal",
      body: [
        "La moneda es el franco CFA de África Occidental, atado al euro, que se usa también en otros siete países de la región.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados de Dakar y de Saly; en el resto, efectivo o pago por celular —Wave y Orange Money—, que usa todo el país.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Dos estaciones",
      body: [
        "Senegal tiene dos estaciones. De noviembre a junio es seco: Dakar y la costa son templadas, con brisa del Atlántico, y el interior es caluroso.",
        "De julio a octubre llueve, sobre todo en agosto y septiembre, y el calor es húmedo. En el delta del Sine Saloum, agosto es el mes más lluvioso.",
        "Dakar es la más fresca de día: en enero, las máximas rondan los veinticinco grados. En el desierto de Lompoul, las noches de enero bajan a dieciséis; en el Sine Saloum, el mediodía de abril y mayo ronda los treinta y cinco.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a mayo: temporada seca, cielos limpios y la costa templada. De noviembre a abril llegan las aves migratorias al parque del Djoudj, cerca de Saint-Louis, y al Sine Saloum.",
        "De julio a octubre llueve, hay más calor y más mosquitos, y algunos caminos de tierra se cortan; a cambio, el paisaje se pone verde.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Senegal",
      body: [
        "En Dakar hay un tren regional, el TER, buses rápidos y aplicaciones como Yango y Heetch. Los taxis no tienen reloj: el precio se arregla antes de subir.",
        "Entre ciudades, sept-place —autos colectivos de siete asientos— y buses; para el delta y las reservas, excursiones o auto con chofer. Se maneja por la derecha.",
        "A Gorea se va en el ferry desde el puerto de Dakar, en un viaje corto.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Gorea y Saint-Louis, patrimonio de la humanidad, y la memoria de la trata de esclavos.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Thieboudienne, el arroz con pescado que es plato nacional, yassa, mafé y el té attaya.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale:
        "Los manglares del Sine Saloum, el lago Rosa, las dunas de Lompoul y los baobabs.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "La Petite Côte y las playas de Dakar; el Atlántico, más movido que transparente.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale: "Comer y moverse es barato; los hoteles de Dakar, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Dakar está bien conectada; afuera, sept-place y caminos lentos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "La hospitalidad senegalesa, la teranga.",
    "La música y la vida de Dakar.",
    "Gorea y Saint-Louis, dos ciudades patrimonio.",
  ],

  costs: [
    "Calor húmedo y mosquitos de julio a octubre.",
    "Vendedores insistentes en las zonas turísticas.",
    "Fiebre amarilla y malaria, que piden preparación.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Dakar en agosto que Saint-Louis o el Sine Saloum. Los precios están en francos CFA y son órdenes de magnitud; un hotel de playa en Saly o un lodge en el delta pueden costar varias veces más.",

  places: [
    {
      id: "dakar",
      name: "Dakar",
      region: "Dakar",
      tag: "La capital",
      blurb:
        "La punta más al oeste del continente, con mercados, el Museo de las Civilizaciones Negras, la lucha senegalesa y música en vivo. Es la base del planificador: templada y seca de noviembre a junio, húmeda y lluviosa en agosto y septiembre.",
      coords: [14.7167, -17.4677],
      featured: true,
      image: null,
    },
    {
      id: "goree",
      name: "Isla de Gorea",
      region: "Dakar",
      tag: "La isla de la memoria",
      blurb:
        "Casas coloniales de colores, calles sin autos y la Casa de los Esclavos, frente a Dakar. Patrimonio de la humanidad.",
      coords: [14.667, -17.398],
      image: null,
    },
    {
      id: "lago-rosa",
      name: "Lago Rosa (Retba)",
      region: "Dakar",
      tag: "El lago rosa",
      blurb:
        "Un lago muy salado que se tiñe de rosa en la temporada seca, con recolectores de sal y dunas que llegan al mar.",
      coords: [14.839, -17.234],
      image: null,
    },
    {
      id: "saint-louis",
      name: "Saint-Louis",
      region: "Saint-Louis",
      tag: "La vieja capital",
      blurb:
        "La antigua capital del África Occidental Francesa, sobre una isla del río Senegal, con casas coloniales, el puente Faidherbe y, cerca, el parque de aves del Djoudj. Patrimonio de la humanidad.",
      coords: [16.0179, -16.4896],
      image: null,
    },
    {
      id: "lompoul",
      name: "Desierto de Lompoul",
      region: "Louga",
      tag: "Dunas naranjas",
      blurb:
        "Un pequeño desierto de dunas naranjas entre Dakar y Saint-Louis, con campamentos de carpas para pasar la noche. Las noches de enero bajan a dieciséis grados.",
      coords: [15.456, -16.662],
      image: null,
    },
    {
      id: "saly",
      name: "Saly (Petite Côte)",
      region: "Thiès",
      tag: "Playa",
      blurb:
        "El centro de playa de la Petite Côte, con hoteles, restaurantes y un mar más calmo que el de Dakar.",
      coords: [14.4466, -17.02],
      image: null,
    },
    {
      id: "sine-saloum",
      name: "Delta del Sine Saloum",
      region: "Fatick",
      tag: "Manglares en piragua",
      blurb:
        "Un delta de manglares, islas de conchillas y aldeas de pescadores que se recorren en piragua. Patrimonio de la humanidad; el mes más lluvioso es agosto.",
      coords: [13.784, -16.48],
      image: null,
    },
    {
      id: "bandia",
      name: "Reserva de Bandia",
      region: "Thiès",
      tag: "Safari corto",
      blurb:
        "Una reserva privada con jirafas, rinocerontes, cebras y baobabs enormes, que se recorre en una mañana desde Saly o Dakar.",
      coords: [14.5833, -17.0167],
      image: null,
    },
    {
      id: "joal-fadiouth",
      name: "Joal-Fadiouth",
      region: "Thiès",
      tag: "La isla de conchillas",
      blurb:
        "Un pueblo de pescadores unido por un puente de madera a Fadiouth, una isla hecha de conchillas, con un cementerio que comparten musulmanes y cristianos.",
      coords: [14.163, -16.833],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Senegal, ropa liviana y fresca que cubra hombros y rodillas fuera de la playa: es un país musulmán, y se agradece. De noviembre a junio, un buzo para la noche en la costa y en el desierto; de julio a octubre, algo impermeable y repelente de sobra. Todo el año, sombrero, protector y un adaptador universal.",
    keyPoints: [
      "Seco de noviembre a junio; lluvias y calor húmedo de julio a octubre.",
      "Fiebre amarilla y malaria: consultá con un médico de viajes con semanas de anticipación.",
      "Ropa que cubra hombros y rodillas fuera de la playa.",
      "Se paga en francos CFA, en efectivo o con el celular.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, de algodón o lino, sombrero, protector y repelente. De julio a octubre, algo impermeable.",
      templado:
        "Ropa liviana para el día y un buzo para la noche: es el invierno de Dakar y de la costa.",
      fresco:
        "Un buzo y una campera liviana para las noches del desierto y la brisa de la costa.",
      frio: "No hace frío en Senegal: un buzo alcanza para las noches más frescas.",
    },
    plug: {
      types: "Tipos C, D, E y K",
      voltage: "230 V, 50 Hz",
      note: "Lo más común son las de dos patas redondas, como en buena parte de Europa; también aparecen otras de tres patas redondas. Un adaptador universal resuelve casi todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vacunate contra la fiebre amarilla",
          body: "Al menos diez días antes de llegar, y llevá el certificado: te lo pueden pedir al entrar o en tu próximo destino.",
        },
        {
          title: "Aprendé a saludar en wolof",
          body: "Un «salam aleikum» al llegar y un «jërëjëf», gracias, abren muchas puertas.",
        },
        {
          title: "Aceptá el attaya",
          body: "El té en tres rondas es la forma de recibir visitas: tomarlo sin apuro es parte de la teranga.",
        },
        {
          title: "Pagá con el celular",
          body: "Con una línea local, Wave y Orange Money funcionan en todo el país, hasta en los puestos chicos.",
        },
        {
          title: "Arreglá el precio antes de subir al taxi",
          body: "No tienen reloj, y después de bajar ya no hay negociación.",
        },
        {
          title: "Elegí pagar en francos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No saques fotos de la gente sin preguntar",
          body: "Muchos no quieren, y algunos piden algo a cambio.",
        },
        {
          title: "No muestres de más fuera de la playa",
          body: "En los pueblos, en los mercados y en las mezquitas se usa ropa que cubra hombros y rodillas.",
        },
        {
          title: "No comas en la calle durante el Ramadán",
          body: "Por respeto, de día se come y se toma con discreción.",
        },
        {
          title: "No uses la mano izquierda en la fuente común",
          body: "Se come con la derecha, del lado de la fuente que te toca.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "En Dakar y en la costa norte, las corrientes son fuertes.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "calor",
        title: "Para el calor",
        notice: {
          tone: "info",
          title: "Sol fuerte y polvo",
          body: "En la temporada seca, el viento del desierto trae polvo, y el sol quema todo el año.",
        },
        summary: "Sol, polvo y humedad",
        items: [
          "Ropa liviana de algodón o lino",
          "Sombrero, lentes de sol y protector",
          "Un pañuelo para el polvo",
          "Una botella con filtro",
        ],
      },
      {
        id: "costumbres",
        title: "Para respetar las costumbres",
        notice: null,
        summary: "Un país musulmán y tolerante",
        items: [
          "Ropa que cubra hombros y rodillas",
          "Un pañuelo para entrar a las mezquitas",
          "Algo para cubrirse fuera de la playa",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa según el pasaporte, y fiebre amarilla",
          body: "Muchos pasaportes entran sin visa. La vacuna de la fiebre amarilla se recomienda, y el certificado te lo pueden pedir al entrar o en tu próximo destino.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa, si tu pasaporte la necesita",
          "Certificado internacional de vacunación contra la fiebre amarilla",
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
          body: "Hay malaria en todo el país, con más riesgo de julio a octubre y fuera de Dakar. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa muy corta o escotada",
        why: "Fuera de la playa llama la atención y puede incomodar.",
        instead: "Ropa liviana que cubra hombros y rodillas.",
      },
      {
        leave: "Billetes grandes",
        why: "En los mercados y en los taxis casi nunca hay vuelto.",
        instead: "Billetes chicos y monedas.",
      },
      {
        leave: "Solo ropa de verano",
        why: "De diciembre a marzo, las noches de la costa y del desierto son frescas.",
        instead: "Un buzo liviano.",
      },
      {
        leave: "Dólares para pagar",
        why: "Casi nadie los acepta: todo se paga en francos CFA.",
        instead: "Francos CFA, o euros para cambiar.",
      },
      {
        leave: "Bolsas de plástico",
        why: "Las finas están prohibidas en el país.",
        instead: "Bolsas de tela.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Senegal?",
        answer:
          "Muchos pasaportes entran sin visa para estadías cortas; otros la tramitan antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Necesito la vacuna de la fiebre amarilla?",
        answer:
          "Se recomienda, y te pueden pedir el certificado al entrar o en tu próximo destino. Tiene que estar aplicada al menos diez días antes de llegar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a mayo, la temporada seca: cielos limpios y la costa templada.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés es el oficial, pero en la calle se habla wolof. En las zonas turísticas, algo de inglés.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: lo más común son las de dos patas redondas, a 230 V. Un adaptador universal resuelve casi todo.",
      },
      {
        question: "¿Hay que regatear?",
        answer:
          "En los mercados y con los taxis, sí; en los comercios con precio marcado, no.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada o filtrada.",
      },
    ],
  },
};
