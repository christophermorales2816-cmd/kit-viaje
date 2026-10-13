import type { DestinationGuide } from "./types";

/**
 * Guía de Australia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la bioseguridad como dato de entrada —toda la
 * comida se declara al llegar, y es el dato de su portada— y un país con tres
 * husos horarios y climas de todos los buckets, del calor seco de Uluru a las
 * noches frías de Hobart. El dólar australiano es la primera moneda de
 * Oceanía con centavos (spec, 16.3). La base es Sídney y no Canberra, la
 * capital: es la ciudad más grande y la del aeropuerto.
 */
export const australia: DestinationGuide = {
  slug: "australia",
  country: "Australia",
  subregion: "Australia y Nueva Zelanda",
  subhead:
    "La Ópera y la bahía de Sídney, los cafés de Melbourne, la Gran Barrera de Coral frente a Cairns y las Whitsunday, el rojo de Uluru y la Tasmania de Hobart.",

  image: null,

  highlights: [
    {
      value: "Bioseguridad",
      label: "estricta: se declara toda la comida al llegar",
      note: "Frutas, carnes, lácteos, semillas, madera y hasta la tierra de las zapatillas: todo se declara en la tarjeta de llegada. Declarar no cuesta nada; no hacerlo puede costar una multa alta.",
    },
    {
      value: "Gran Barrera",
      label: "el arrecife de coral más grande del mundo, frente a Cairns",
      note: "Se recorre en barco desde Cairns, Port Douglas o las Whitsunday, con snorkel o buceo. De junio a octubre el agua está más clara y no hay medusas peligrosas.",
    },
    {
      value: "Uluru",
      label: "la roca sagrada del centro rojo",
      note: "Un monolito en medio del desierto, sagrado para el pueblo anangu, que cambia de color al amanecer y al atardecer. No se sube: se camina alrededor.",
    },
    {
      value: "3 husos",
      label: "horarios en un mismo país",
      note: "Perth tiene dos o tres horas menos que Sídney, según la época del año, y Uluru y Adelaida, media hora o una y media. Revisá la hora de cada vuelo.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Australia",
      body: [
        "Todos los pasaportes, salvo el de Nueva Zelanda, necesitan una autorización o una visa antes de viajar: según el pasaporte, la ETA o el eVisitor, que se tramitan online, o una visa de visitante. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Al llegar se declara toda la comida, las plantas, las semillas y los productos de origen animal. Los controles de bioseguridad son estrictos, y no declarar algo puede costar una multa alta.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Australia",
      body: [
        "La moneda es el dólar australiano. La tarjeta, sobre todo sin contacto, funciona en casi todos lados, del café al colectivo, y el efectivo casi no se usa.",
        "En el transporte de Sídney, Melbourne y Brisbane se paga apoyando la tarjeta o el teléfono en el lector, sin comprar boleto.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares australianos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Un país, todos los climas",
      body: [
        "Hemisferio sur: el verano va de diciembre a febrero y el invierno, de junio a agosto. Sídney, Brisbane y Perth tienen inviernos suaves; Melbourne, Adelaida y Hobart, frescos, y en Hobart las noches de julio bajan de los cinco grados.",
        "El norte tropical, con Cairns y las Whitsunday, tiene calor húmedo y una temporada de lluvias de diciembre a marzo.",
        "En Uluru, en el centro, los días de verano pasan los treinta y cinco grados y las noches de invierno rondan los cuatro.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De septiembre a noviembre y de marzo a mayo: primavera y otoño, buenos para casi todo el país. Para el norte tropical y Uluru, de mayo a septiembre, cuando no hace tanto calor.",
        "En verano, las playas del sur están en su mejor momento y la costa del norte, en plena temporada de lluvias, con medusas en el mar.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Australia",
      body: [
        "Las distancias son enormes: entre Sídney y Perth hay más de cuatro horas de vuelo. Entre las ciudades grandes se va en avión, y el auto alquilado sirve para las rutas costeras.",
        "En las ciudades hay trenes, ferris, colectivos y aplicaciones como Uber, y se paga apoyando la tarjeta.",
        "Se maneja por la izquierda. En las rutas del interior hay animales sueltos al atardecer, y las distancias entre estaciones de servicio son largas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "La cultura aborigen más antigua del mundo y las ciudades coloniales del siglo XIX.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Café de primera, cocina asiática por todos lados, mariscos y vinos del sur.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "La Gran Barrera, el desierto rojo, la selva tropical y las costas del sur.",
    },
    {
      dimension: "Playas",
      score: 10,
      rationale: "Bondi, las Whitsunday y miles de kilómetros de costa.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Todo funciona, pero comer y dormir es caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Transporte excelente en las ciudades; entre ellas, distancias que piden avión.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Una moneda estable y precios a la vista.",
    },
  ],

  shines: [
    "La Gran Barrera de Coral.",
    "Ciudades fáciles de recorrer y bien conectadas.",
    "Paisajes que no se ven en otro lado.",
  ],

  costs: [
    "Caro para comer y dormir.",
    "Distancias que obligan a volar.",
    "Autorización de entrada y bioseguridad estrictas.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Sídney en julio que Cairns o Hobart. Los precios están en dólares australianos y son órdenes de magnitud; los resorts de Uluru y de las Whitsunday cuestan bastante más.",

  places: [
    {
      id: "sidney",
      name: "Sídney",
      region: "Nueva Gales del Sur",
      tag: "La bahía",
      blurb:
        "La Ópera y el puente de la bahía, el barrio de The Rocks, las playas de Bondi y Manly y los ferris que cruzan el puerto. Es la base del planificador: veranos cálidos e inviernos suaves, con lluvias repartidas en el año.",
      coords: [-33.8688, 151.2093],
      featured: true,
      image: null,
    },
    {
      id: "melbourne",
      name: "Melbourne",
      region: "Victoria",
      tag: "Los cafés",
      blurb:
        "La ciudad de los cafés en callejones, el arte callejero, el tranvía y los museos, punto de partida de la Great Ocean Road. Cuatro estaciones en un día, según dicen sus vecinos.",
      coords: [-37.8136, 144.9631],
      image: null,
    },
    {
      id: "uluru",
      name: "Uluru (Uluṟu-Kata Tjuṯa)",
      region: "Territorio del Norte",
      tag: "El centro rojo",
      blurb:
        "La roca sagrada de los anangu y las cúpulas de Kata Tjuṯa, en pleno desierto. Calor seco en verano y noches frías en invierno; el lugar más caluroso del planificador en Australia.",
      coords: [-25.3444, 131.0369],
      image: null,
    },
    {
      id: "cairns",
      name: "Cairns (Gran Barrera de Coral)",
      region: "Queensland",
      tag: "La Gran Barrera",
      blurb:
        "La puerta de la Gran Barrera de Coral y de la selva de Daintree, con salidas diarias al arrecife. Calor húmedo, con lluvias de diciembre a abril.",
      coords: [-16.9186, 145.7781],
      image: null,
    },
    {
      id: "whitsunday",
      name: "Islas Whitsunday (Airlie Beach)",
      region: "Queensland",
      tag: "Islas y arena blanca",
      blurb:
        "Setenta y cuatro islas sobre el arrecife, con la playa de Whitehaven, de arena de sílice, y salidas en velero desde Airlie Beach.",
      coords: [-20.2688, 148.7187],
      image: null,
    },
    {
      id: "brisbane",
      name: "Brisbane",
      region: "Queensland",
      tag: "La ciudad del río",
      blurb:
        "Una ciudad junto al río, con playas artificiales en la orilla y la Gold Coast y la Sunshine Coast a una hora. Inviernos templados y veranos de tormentas.",
      coords: [-27.4698, 153.0251],
      image: null,
    },
    {
      id: "perth",
      name: "Perth",
      region: "Australia Occidental",
      tag: "La otra costa",
      blurb:
        "La ciudad más aislada del país, con playas sobre el Índico, el puerto de Fremantle y los quokkas de la isla Rottnest. Veranos secos y lluvias de mayo a septiembre.",
      coords: [-31.9505, 115.8605],
      image: null,
    },
    {
      id: "hobart",
      name: "Hobart (Tasmania)",
      region: "Tasmania",
      tag: "La isla del sur",
      blurb:
        "La capital de Tasmania, con el puerto, el museo MONA y la montaña Wellington detrás, y parques nacionales a pocas horas. Lo más fresco del planificador en Australia.",
      coords: [-42.8821, 147.3272],
      image: null,
    },
    {
      id: "adelaida",
      name: "Adelaida",
      region: "Australia Meridional",
      tag: "Vinos y la isla de los canguros",
      blurb:
        "Una ciudad de parques con los viñedos de Barossa y McLaren Vale cerca, y la isla Canguro a un ferry. Veranos secos y calurosos.",
      coords: [-34.9285, 138.6007],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Australia depende de dónde y cuándo: ropa liviana, traje de baño y protector para el norte y el verano; abrigo para el invierno del sur y las noches del desierto. Siempre, protector solar alto, la autorización de entrada tramitada antes y nada de comida sin declarar.",
    keyPoints: [
      "Autorización o visa antes de viajar, para todos salvo los neozelandeses.",
      "Se declara toda la comida al llegar: la bioseguridad es estricta.",
      "Hemisferio sur: verano de diciembre a febrero, invierno de junio a agosto.",
      "El sol es muy fuerte: protector alto, sombrero y lentes todo el año.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, sombrero de ala ancha, lentes y protector alto.",
      templado: "Ropa liviana de día y un buzo o una campera para la noche.",
      fresco:
        "Un buzo, una campera de abrigo liviana y algo impermeable para el sur.",
      frio: "Las noches bajan de diez grados: abrigo de verdad, y gorro para el sur y el desierto.",
    },
    plug: {
      types: "Tipo I",
      voltage: "230 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina. Si el tuyo es de otro tipo, llevá adaptador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Declará toda la comida al llegar",
          body: "Aunque sea un paquete de galletitas: declarar no cuesta nada, y no hacerlo puede costar caro.",
        },
        {
          title: "Tramitá la autorización con tiempo",
          body: "La ETA o el eVisitor salen online, pero conviene no dejarlos para el último día.",
        },
        {
          title: "Usá protector solar todo el año",
          body: "La radiación es de las más altas del mundo, aun en días nublados.",
        },
        {
          title: "Nadá entre las banderas",
          body: "En las playas vigiladas, la zona segura está entre las banderas rojas y amarillas.",
        },
        {
          title: "Elegí la época de la Gran Barrera",
          body: "De junio a octubre el agua está más clara y no hay medusas peligrosas.",
        },
        {
          title: "Elegí pagar en dólares australianos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres comida sin declarar",
          body: "Ni fruta del avión ni carne en conserva: se declara todo, y el control lo revisa.",
        },
        {
          title: "No subestimes las distancias",
          body: "Un viaje de Sídney a Cairns es como de Buenos Aires a Lima: se vuela.",
        },
        {
          title: "No nades en el norte sin traje de lycra",
          body: "De noviembre a mayo, en la costa tropical hay medusas peligrosas: se nada en zonas con red o con traje.",
        },
        {
          title: "No te metas en ríos y estuarios del norte",
          body: "Hay cocodrilos de agua salada: respetá los carteles.",
        },
        {
          title: "No subas a Uluru",
          body: "Está prohibido desde 2019, por respeto a los anangu: se camina alrededor.",
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
          tone: "warn",
          title: "Autorización y bioseguridad",
          body: "Todos los pasaportes, salvo el neozelandés, necesitan la ETA, el eVisitor o una visa antes de viajar, y al llegar se declara toda la comida.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La ETA, el eVisitor o la visa, aprobados",
          "La tarjeta de llegada, con la comida declarada",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "sol",
        title: "Para el sol y la playa",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "La radiación ultravioleta es de las más altas del mundo: protector alto, sombrero y lentes, aun en invierno y con nubes.",
        },
        summary: "Playas, arrecife y desierto",
        items: [
          "Protector solar alto, que no dañe el arrecife",
          "Sombrero de ala ancha y lentes de sol",
          "Traje de baño y una remera de lycra",
          "Una botella de agua grande para el desierto",
        ],
      },
      {
        id: "abrigo",
        title: "Para el invierno del sur",
        notice: null,
        summary: "Melbourne, Hobart y las noches de Uluru",
        items: [
          "Un buzo y una campera de abrigo",
          "Algo impermeable",
          "Calzado cerrado para caminar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Medicamentos con receta",
          body: "Los medicamentos de uso personal entran con la receta y en su envase original; algunos necesitan declararse.",
        },
        summary: "Botiquín",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente para el norte tropical",
          "Seguro de viaje con cobertura médica: la salud es cara",
        ],
      },
    ],
    avoid: [
      {
        leave: "Comida en la valija",
        why: "Hay que declararla toda, y mucha no entra.",
        instead: "Comprarla allá.",
      },
      {
        leave: "Mucho efectivo",
        why: "Casi todo se paga con tarjeta sin contacto.",
        instead: "Una tarjeta sin comisiones en el exterior.",
      },
      {
        leave: "Un itinerario que cruce el país por tierra",
        why: "Las distancias son enormes.",
        instead: "Vuelos internos entre las regiones.",
      },
      {
        leave: "Protector solar de factor bajo",
        why: "El sol quema mucho más rápido que en otros lados.",
        instead: "Factor 50.",
      },
      {
        leave: "Solo ropa de verano",
        why: "El sur tiene inviernos frescos, y el desierto, noches frías.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Australia?",
        answer:
          "Todos los pasaportes, salvo el neozelandés, necesitan algo antes de viajar: la ETA o el eVisitor, online, o una visa de visitante. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Qué tengo que declarar al llegar?",
        answer:
          "Toda la comida, las plantas, las semillas y los productos de origen animal. Declarar no cuesta nada; no hacerlo puede costar una multa alta.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Primavera y otoño para casi todo el país; de mayo a septiembre para el norte tropical y Uluru.",
      },
      {
        question: "¿Cuál es la capital?",
        answer:
          "Canberra, aunque Sídney es la ciudad más grande y la del aeropuerto por donde entra casi todo el que viaja.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 230 V.",
      },
      {
        question: "¿Es peligroso el mar?",
        answer:
          "En las playas vigiladas se nada entre las banderas. En el norte tropical, de noviembre a mayo, hay medusas peligrosas, y en los ríos, cocodrilos.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "El inglés, con un acento y unas palabras propias.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
    ],
  },
};
