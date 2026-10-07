import type { DestinationGuide } from "./types";

/**
 * Guía de Letonia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: Riga, con la mayor concentración de art nouveau del
 * mundo, y una costa casi entera de playas de arena con un mar que está fresco
 * aun en agosto. El invierno es el báltico de siempre: largo y bajo cero.
 */
export const letonia: DestinationGuide = {
  slug: "letonia",
  country: "Letonia",
  subregion: "Europa del Norte",
  subhead:
    "Riga y su art nouveau, playas de arena entre pinos, castillos en el valle del Gauja y bosques en medio país. Inviernos bajo cero, veranos templados con días larguísimos.",

  image: null,

  highlights: [
    {
      value: "1/3",
      label: "del centro de Riga es art nouveau",
      note: "La mayor concentración de edificios art nouveau del mundo, patrimonio de la humanidad.",
    },
    {
      value: "500 km",
      label: "de costa, casi toda playa",
      note: "Arena, dunas y bosques de pinos frente al Báltico. El mar está fresco aun en agosto.",
    },
    {
      value: "Mitad",
      label: "del país es bosque",
      note: "Bosques, ríos y lagos en todos lados, con castillos medievales en el valle del Gauja.",
    },
    {
      value: "Junio",
      label: "Jāņi, la noche más corta",
      note: "El solsticio de verano es la gran fiesta del país: fogatas, coronas de flores y una noche sin dormir.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Letonia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Letonia, Estonia y Lituania en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Letonia",
      body: [
        "La moneda es el euro y la tarjeta se acepta casi en todos lados; en mercados y pueblos chicos, el efectivo sigue siendo útil.",
        "La propina es opcional: redondear o dejar algo si te atendieron bien es lo habitual.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Báltico, con costa de arena",
      body: [
        "Letonia es hemisferio norte: enero es invierno y julio, verano. El invierno es bajo cero de diciembre a febrero, gris y con días cortos; el verano, templado, con días larguísimos.",
        "La costa —Jūrmala, Liepāja, Ventspils— es más suave en invierno y más fresca y ventosa en verano. El este, con Daugavpils, es el rincón más frío.",
        "Llueve en cualquier mes, sobre todo en la segunda mitad del verano y en otoño.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto es la mejor época: playas, bosques y la fiesta de Jāņi, a fines de junio. En septiembre y octubre, los bosques del Gauja se ponen rojos y amarillos.",
        "Diciembre trae mercados navideños en Riga, con frío de verdad; enero y febrero son grises y tranquilos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Letonia",
      body: [
        "Desde Riga salen trenes a Jūrmala y Sigulda, y buses a casi todo el país, además de a Tallin y Vilna.",
        "En Riga, tranvías, trolebuses y buses llegan a todos lados, y el casco viejo se recorre a pie.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en el casco viejo y en el mercado central.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Arquitectura",
      score: 9,
      rationale:
        "El casco medieval de Riga y la mayor concentración de art nouveau del mundo, en la misma ciudad.",
    },
    {
      dimension: "Naturaleza y costa",
      score: 8,
      rationale:
        "Playas de arena entre pinos, bosques y ríos, con mucho espacio y poca gente.",
    },
    {
      dimension: "Castillos y pueblos",
      score: 7.5,
      rationale:
        "Castillos medievales en el valle del Gauja, el palacio de Rundāle y pueblos de madera.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Pan negro, pescado ahumado y un mercado central enorme, dentro de viejos hangares de zepelines.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "Accesible, con buena calidad. El casco viejo de Riga es lo más caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Trenes y buses desde Riga a casi todo, y conexiones fáciles con Tallin y Vilna.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "Riga, entre lo medieval y el art nouveau.",
    "Playas de arena y bosques sin multitudes.",
    "Fácil de combinar con Estonia y Lituania.",
  ],

  costs: [
    "Inviernos largos, fríos y grises.",
    "Un mar fresco aun en pleno verano.",
    "Lluvia frecuente en la segunda mitad del verano.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Daugavpils en febrero no pide lo mismo que Jūrmala en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "riga",
      name: "Riga",
      region: "Riga",
      tag: "Art nouveau",
      blurb:
        "Un casco medieval, la mayor concentración de art nouveau del mundo y un mercado central dentro de viejos hangares de zepelines. Es la base del planificador: inviernos bajo cero, veranos templados.",
      coords: [56.9496, 24.1052],
      featured: true,
      image: null,
    },
    {
      id: "jurmala",
      name: "Jūrmala",
      region: "Costa",
      tag: "Playa y casas de madera",
      blurb:
        "Una playa de arena de más de treinta kilómetros, con casas de madera entre pinos, a media hora de Riga en tren.",
      coords: [56.968, 23.7704],
      image: null,
    },
    {
      id: "sigulda",
      name: "Sigulda y el valle del Gauja",
      region: "Valle del Gauja",
      tag: "Castillos y bosques",
      blurb:
        "Castillos medievales sobre el valle del río Gauja, cuevas de arenisca y bosques que en otoño se ponen rojos.",
      coords: [57.1537, 24.8519],
      image: null,
    },
    {
      id: "cesis",
      name: "Cēsis",
      region: "Valle del Gauja",
      tag: "Castillo medieval",
      blurb:
        "Uno de los castillos medievales mejor conservados del país, en un pueblo de calles de piedra.",
      coords: [57.3119, 25.2706],
      image: null,
    },
    {
      id: "kuldiga",
      name: "Kuldīga",
      region: "Curlandia",
      tag: "La cascada más ancha",
      blurb:
        "Un pueblo de casas de madera junto a la cascada más ancha de Europa: baja, pero larguísima.",
      coords: [56.9677, 21.9686],
      image: null,
    },
    {
      id: "liepaja",
      name: "Liepāja",
      region: "Curlandia",
      tag: "Música y mar",
      blurb:
        "Una ciudad de puerto con playa, música en vivo y un antiguo barrio militar que se visita.",
      coords: [56.5047, 21.0108],
      image: null,
    },
    {
      id: "rundale",
      name: "Palacio de Rundāle",
      region: "Semigalia",
      tag: "Palacio barroco",
      blurb:
        "Un palacio barroco con jardines a la francesa, del mismo arquitecto que el Palacio de Invierno de San Petersburgo.",
      coords: [56.4136, 24.0247],
      image: null,
    },
    {
      id: "ventspils",
      name: "Ventspils",
      region: "Curlandia",
      tag: "Puerto y playa",
      blurb:
        "Una ciudad portuaria ordenada, con playa y un castillo de la Orden Livonia.",
      coords: [57.3894, 21.5606],
      image: null,
    },
    {
      id: "daugavpils",
      name: "Daugavpils y Latgalia",
      region: "Latgalia",
      tag: "Lagos y Rothko",
      blurb:
        "La segunda ciudad del país, puerta a la región de los lagos, con el centro de arte de Mark Rothko, que nació acá.",
      coords: [55.8747, 26.5362],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Letonia tiene inviernos bajo cero de diciembre a febrero, grises y con días cortos, y veranos templados con días larguísimos y algo de lluvia. En invierno, abrigo de verdad, gorro, guantes y calzado que no resbale; en verano, ropa liviana con capas para la noche, una campera impermeable y traje de baño para la playa, aunque el mar esté fresco.",
    keyPoints: [
      "Hemisferio norte: el invierno, de diciembre a febrero, es bajo cero; el verano, de junio a agosto, templado.",
      "La costa es más suave en invierno y más fresca y ventosa en verano.",
      "Llueve en cualquier mes, más en la segunda mitad del verano y en otoño.",
      "En junio casi no oscurece, y el solsticio es la gran fiesta del país.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y un buzo para la noche. En la costa, el viento del Báltico refresca.",
      templado:
        "Capas y una campera liviana. Es el verano letón: luminoso y con algún chaparrón.",
      fresco: "Sweater o polar, campera impermeable y calzado que no se moje.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. Bajo cero, gris y con días cortos.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Caminá el barrio art nouveau",
          body: "Las calles Alberta y Elizabetes, a pocas cuadras del casco viejo, tienen las fachadas más impresionantes.",
        },
        {
          title: "Andá al mercado central",
          body: "Funciona en viejos hangares de zepelines: pescado ahumado, pan negro y comida al paso a buen precio.",
        },
        {
          title: "Escapate a Jūrmala en tren",
          body: "Media hora desde Riga y una playa de arena interminable entre pinos.",
        },
        {
          title: "Recorré el Gauja en otoño",
          body: "En septiembre y octubre los bosques del valle se ponen rojos y amarillos, con los castillos de fondo.",
        },
        {
          title: "Combiná con Tallin y Vilna",
          body: "Hay buses cómodos entre las tres capitales bálticas, a pocas horas una de otra.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el invierno",
          body: "De diciembre a febrero baja de cero, con días cortos y grises.",
        },
        {
          title: "No esperes un mar templado",
          body: "El Báltico está fresco aun en agosto. Las playas son lindas para caminar, y el chapuzón es para valientes.",
        },
        {
          title: "No camines los adoquines con suela lisa",
          body: "En el casco viejo de Riga resbalan con lluvia y con hielo.",
        },
        {
          title: "No te quedes solo en Riga",
          body: "El valle del Gauja, Kuldīga y la costa muestran otro país, a pocas horas.",
        },
        {
          title: "No descuides la mochila en el casco viejo",
          body: "En las zonas más turísticas y en el mercado central hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "invierno",
        title: "Ropa para el invierno",
        notice: {
          tone: "warn",
          title: "El invierno báltico es frío de verdad",
          body: "De diciembre a febrero la temperatura queda bajo cero muchos días, con días cortos y grises. Sin abrigo adecuado, se pasa mal.",
        },
        summary: "Lo que pide diciembre a febrero",
        items: [
          "Campera de abrigo que corte el viento",
          "Gorro, guantes y bufanda",
          "Calzado abrigado que no resbale",
          "Medias térmicas",
          "Capas para sacarte adentro, donde hay calefacción",
        ],
      },
      {
        id: "verano",
        title: "Verano y costa",
        notice: {
          tone: "info",
          title: "Días larguísimos, mar fresco",
          body: "En junio casi no oscurece, y la costa invita aunque el agua esté fresca.",
        },
        summary: "Lo que pide junio a agosto",
        items: [
          "Capas y una campera liviana",
          "Traje de baño y toalla de microfibra",
          "Repelente para los bosques",
          "Antifaz para dormir",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes latinoamericanos entran sin visa por hasta 90 días, pero no todos, y en la frontera pueden pedir pasaje de vuelta, reservas y seguro. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte vigente al menos tres meses después de la salida",
          "Pasaje de vuelta o de salida del espacio Schengen",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "Enchufes de dos patas redondas",
          body: "Entran los tipo C y F. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Auriculares para los buses",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el resfrío",
          "Protector labial y crema para el frío",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero baja de cero.",
        instead: "Abrigo de verdad, gorro y guantes.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Adoquines en el casco viejo, que resbalan con lluvia o hielo.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Solo ropa de verano para julio",
        why: "Las noches refrescan y en la costa hay viento.",
        instead: "Capas y un buzo.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de efectivo para mercados y pueblos chicos.",
      },
      {
        leave: "Una valija enorme",
        why: "Adoquines, buses y edificios viejos sin ascensor.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En el casco viejo y en el mercado llaman la atención de los carteristas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Letonia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a agosto para la costa y los días largos; septiembre y octubre para los bosques de otoño. El invierno es frío y gris, con mercados navideños en diciembre.",
      },
      {
        question: "¿Se puede nadar en el Báltico?",
        answer:
          "Sí, en pleno verano, pero el agua está fresca. Las playas de arena son lindas aunque no te metas.",
      },
      {
        question: "¿Cómo combino Riga con Tallin y Vilna?",
        answer:
          "En bus: hay servicios cómodos entre las tres capitales, a pocas horas una de otra.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "Casi todo. Llevá algo de efectivo para mercados y pueblos chicos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, aunque mucha gente prefiere la embotellada por el sabor.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Es opcional. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
