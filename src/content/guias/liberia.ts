import type { DestinationGuide } from "./types";

/**
 * Guía de Liberia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la lluvia como dato de portada —Monrovia es una de
 * las capitales más lluviosas del mundo, y el bucket de lluvia (spec, 14.12)
 * se activa de abril a noviembre— y los 120 V del enchufe estadounidense, un
 * caso raro en África. La moneda es el dólar liberiano, pero al viajero se le
 * cobra en dólares estadounidenses: es el caso de Camboya y de la RD del
 * Congo, con el corredor en la moneda del país y los precios de la base en
 * USD.
 */
export const liberia: DestinationGuide = {
  slug: "liberia",
  country: "Liberia",
  subregion: "África Occidental",
  subhead:
    "Las olas de Robertsport, el lago Piso, playas casi vacías y la selva de Sapo, en la república que fundaron los libertos llegados de Estados Unidos. Casi todo se paga en dólares.",

  image: null,

  highlights: [
    {
      value: "Lluvia",
      label:
        "de mayo a octubre, en una de las capitales más lluviosas del mundo",
      note: "Monrovia recibe varias veces la lluvia de Buenos Aires, casi toda en esos meses. De noviembre a abril, en cambio, es temporada seca.",
    },
    {
      value: "120 V",
      label: "y enchufes de patas planas, como en Estados Unidos",
      note: "Un caso raro en África. Si tu país usa 220 V, revisá que el cargador diga 100-240 V; casi todos lo dicen. Una planchita o un secador de 220 V, no.",
    },
    {
      value: "Dólares",
      label: "para casi todo, aunque el país tenga su propia moneda",
      note: "El dólar liberiano y el estadounidense circulan juntos, y hoteles, restaurantes y casi todo lo que paga un viajero se cobra en el segundo. El liberiano queda para el vuelto y las compras chicas.",
    },
    {
      value: "Robertsport",
      label: "el pueblo del surf, entre la laguna y el mar",
      note: "Olas largas y constantes frente a un pueblo tranquilo, con playas de palmeras y el lago Piso a un paso.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Liberia",
      body: [
        "Casi todos los pasaportes de fuera de África Occidental necesitan visa: para muchos, se pide online antes de viajar y se retira al llegar al aeropuerto de Monrovia; otros la tramitan en un consulado. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Liberia pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes.",
        "El pasaporte tiene que tener al menos seis meses de vigencia.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Liberia",
      body: [
        "La moneda es el dólar liberiano, pero el estadounidense circula junto a él, y al viajero se le cobra en dólares estadounidenses casi todo: hoteles, restaurantes, transporte y excursiones.",
        "Llevá los dólares desde casa, en billetes nuevos y sin marcas: los viejos o rotos se rechazan. Los dólares liberianos sirven para el vuelto y las compras chicas.",
        "La tarjeta funciona en pocos hoteles y supermercados de Monrovia, y hay pocos cajeros. Si una terminal te ofrece cobrarte en tu moneda, elegí dólares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Mucha lluvia y calor húmedo",
      body: [
        "Calor húmedo todo el año, con máximas que casi no cambian. La temporada de lluvias va de mayo a octubre, con junio y septiembre como los meses más mojados.",
        "De noviembre a abril es la temporada seca, calurosa y húmeda, con el harmattan de diciembre a febrero, que trae polvo y cielos blancos.",
        "Tierra adentro, en Bong y en el parque de Sapo, llueve un poco menos y hace algo más de calor de día.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a abril: la temporada seca, la mejor para la playa y para los caminos de tierra, que en las lluvias se cortan.",
        "Las olas de Robertsport son más grandes de mayo a octubre, en plena temporada de lluvias.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Liberia",
      body: [
        "En Monrovia hay taxis compartidos, kekes —los triciclos— y motos taxi.",
        "Las rutas al interior son de tierra en buena parte, y en la temporada de lluvias se cortan: hacia el sudeste, a Sapo y a Harper, hacen falta un todoterreno y varios días.",
        "En las rutas hay controles: llevá el pasaporte. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "La república que fundaron los libertos llegados de Estados Unidos: la isla Providence, donde desembarcaron, y las viejas casas de Monrovia y Harper.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Arroz con salsas de palma, de hoja de mandioca o de maní, pescado y fufu.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale: "Selva tropical, lagunas y playas largas casi vacías.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Robertsport, Marshall y playas casi sin nadie; el mar es fuerte.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "Todo en dólares, y caro para lo que ofrece.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Pocas rutas asfaltadas y una temporada de lluvias que corta caminos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "El viajero paga en dólares, aunque el liberiano cambie de valor.",
    },
  ],

  shines: [
    "Robertsport y sus olas.",
    "Selva y playas casi sin turistas.",
    "La historia de la república de los libertos.",
  ],

  costs: [
    "Lluvia de mayo a octubre.",
    "Todo en dólares, y caro.",
    "Caminos de tierra que se cortan.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Monrovia en junio que Kpatawee o Harper. Los precios están en dólares, como se le cobra al viajero, y son órdenes de magnitud: el presupuesto no necesita convertirlos. Los lodges de playa y las salidas a Sapo pueden costar bastante más.",

  places: [
    {
      id: "monrovia",
      name: "Monrovia",
      region: "Montserrado",
      tag: "La capital",
      blurb:
        "La capital, sobre el cabo Mesurado: el Museo Nacional, el mercado de Waterside, la playa de Sinkor y las ruinas del hotel Ducor, con la vista más amplia de la ciudad. Es la base del planificador: calor húmedo todo el año, con lluvias de mayo a octubre.",
      coords: [6.3156, -10.8074],
      featured: true,
      image: null,
    },
    {
      id: "robertsport",
      name: "Robertsport (surf)",
      region: "Grand Cape Mount",
      tag: "El pueblo del surf",
      blurb:
        "Olas largas y constantes frente a un pueblo tranquilo, con playas de palmeras y alojamientos sencillos, a unas tres horas de Monrovia.",
      coords: [6.7533, -11.3686],
      image: null,
    },
    {
      id: "lago-piso",
      name: "Lago Piso",
      region: "Grand Cape Mount",
      tag: "La laguna",
      blurb:
        "Una laguna grande separada del mar por una franja de arena, con manglares, pueblos de pescadores y muchas aves.",
      coords: [6.75, -11.15],
      image: null,
    },
    {
      id: "marshall",
      name: "Marshall (playas)",
      region: "Margibi",
      tag: "Playas cerca de la capital",
      blurb:
        "Un pueblo en la desembocadura del río Farmington, con playas, las islas de los chimpancés rescatados y escapadas de fin de semana desde Monrovia.",
      coords: [6.15, -10.3833],
      image: null,
    },
    {
      id: "buchanan",
      name: "Buchanan",
      region: "Grand Bassa",
      tag: "El puerto",
      blurb:
        "Una ciudad portuaria sobre el Atlántico, con playas largas y pueblos de pescadores.",
      coords: [5.8808, -10.0467],
      image: null,
    },
    {
      id: "kpatawee",
      name: "Cascada de Kpatawee (Bong)",
      region: "Bong",
      tag: "La cascada",
      blurb:
        "Una cascada que cae entre rocas y selva, en el interior, con senderos y miradores. Más caluroso que la costa en la temporada seca.",
      coords: [7.1333, -9.6167],
      image: null,
    },
    {
      id: "sapo",
      name: "Parque Nacional de Sapo",
      region: "Sinoe",
      tag: "La selva",
      blurb:
        "La selva tropical más grande del país, con chimpancés, hipopótamos pigmeos y elefantes de bosque, muy difíciles de ver. Se llega en todoterreno y se recorre con guías del parque.",
      coords: [5.4167, -8.6667],
      image: null,
    },
    {
      id: "harper",
      name: "Harper (cabo Palmas)",
      region: "Maryland",
      tag: "La otra punta",
      blurb:
        "Una ciudad en el cabo Palmas, en el extremo sudeste del país, con casas de los primeros colonos, playas y un faro.",
      coords: [4.3667, -7.7167],
      image: null,
    },
    {
      id: "isla-providence",
      name: "Isla Providence",
      region: "Montserrado",
      tag: "Donde empezó el país",
      blurb:
        "La isla del río Mesurado donde desembarcaron, en 1822, los primeros colonos libertos llegados de Estados Unidos. Hoy, un sitio histórico en plena Monrovia.",
      coords: [6.3267, -10.7914],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Liberia, ropa liviana y fresca, sombrero y protector: hace calor húmedo todo el año. De mayo a octubre, impermeable y calzado que se seque rápido. Siempre, dólares nuevos en efectivo, el certificado de la fiebre amarilla en el bolso de mano y repelente.",
    keyPoints: [
      "Lluvia casi diaria de mayo a octubre; temporada seca de noviembre a abril.",
      "Dólares nuevos y sanos para casi todo: los billetes viejos se rechazan.",
      "Vacuna de la fiebre amarilla obligatoria para todos los viajeros.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, sombrero, protector y repelente. De mayo a octubre, un impermeable liviano y calzado que se seque rápido.",
      templado:
        "Ropa liviana y un buzo fino para el aire acondicionado y las noches de lluvia.",
      fresco: "Un buzo liviano: en Liberia casi nunca refresca más que eso.",
      frio: "No hace frío en Liberia: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de patas planas, como en Estados Unidos, aunque también se ven tomas de patas redondas. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V; casi todos los modernos lo dicen. Los cortes de luz son frecuentes, y muchos hoteles tienen generador.",
    },
    tips: {
      dos: [
        {
          title: "Llevá dólares nuevos desde casa",
          body: "En billetes sanos, sin marcas ni roturas: los demás se rechazan.",
        },
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes de llegar, y llevá el certificado en el bolso de mano.",
        },
        {
          title: "Andá a Robertsport",
          body: "Olas, playas y el lago Piso, a unas tres horas de Monrovia.",
        },
        {
          title: "Visitá la isla Providence",
          body: "Es donde empezó el país, en plena Monrovia.",
        },
        {
          title: "Dejá días de margen en la temporada de lluvias",
          body: "Los caminos de tierra se cortan, y los viajes se alargan.",
        },
        {
          title: "Elegí pagar en dólares",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el certificado de la fiebre amarilla",
          body: "Te lo piden al llegar, vengas de donde vengas.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "La costa tiene corrientes muy fuertes, que arrastran hasta a los buenos nadadores.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o del aeropuerto.",
        },
        {
          title: "No te bañes en lagunas ni ríos",
          body: "En muchos hay bilharzia.",
        },
        {
          title: "No enchufes nada de 220 V sin mirar",
          body: "A 120 V, una planchita o un secador calientan poco o no andan.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "lluvia",
        title: "Para la lluvia",
        notice: {
          tone: "info",
          title: "De mayo a octubre",
          body: "En la temporada de lluvias llueve casi todos los días, a veces sin parar: ropa que se seque rápido y todo lo importante en bolsas estancas.",
        },
        summary: "Una de las capitales más lluviosas del mundo",
        items: [
          "Impermeable liviano",
          "Calzado que se seque rápido",
          "Bolsas estancas para el teléfono y los documentos",
          "Ropa de secado rápido",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: null,
        summary: "Para pagar sin problemas",
        items: [
          "Dólares en billetes nuevos, sin marcas ni roturas",
          "Billetes chicos para el día a día",
          "Una tarjeta, para los pocos lugares que la aceptan",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa y fiebre amarilla",
          body: "Casi todos los pasaportes de fuera de África Occidental necesitan visa, que se pide antes de viajar, y todos los viajeros necesitan el certificado de la fiebre amarilla.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con al menos seis meses de vigencia",
          "La aprobación de la visa, impresa",
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
          body: "Hay malaria en todo el país, todo el año, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Sales de rehidratación y algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo y la lluvia no se seca nunca.",
        instead: "Ropa liviana de secado rápido.",
      },
      {
        leave: "Dólares viejos, rotos o con marcas",
        why: "Se rechazan casi en todos lados.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta, y hay pocos cajeros.",
        instead: "Dólares en efectivo.",
      },
      {
        leave: "Un itinerario sin margen en la temporada de lluvias",
        why: "Los caminos de tierra se cortan, y el viaje se alarga.",
        instead: "Días de margen.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los taxis compartidos y los todoterrenos hay poco lugar.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "La planchita o el secador de 220 V",
        why: "A 120 V calientan poco o no andan, y muchos hoteles tienen secador.",
        instead: "El del alojamiento, o uno que diga 100-240 V.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Liberia?",
        answer:
          "Casi todos los pasaportes de fuera de África Occidental la necesitan: para muchos, se pide online y se retira al llegar a Monrovia; otros la tramitan en un consulado. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer:
          "Sí, para todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes de llegar.",
      },
      {
        question: "¿Qué moneda llevo?",
        answer:
          "Dólares estadounidenses, en billetes nuevos: casi todo se paga en esa moneda. Los dólares liberianos sirven para el vuelto.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a abril, la temporada seca. De mayo a octubre llueve casi todos los días.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu país usa enchufes de patas redondas, sí: en Liberia son de patas planas, a 120 V, como en Estados Unidos.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El inglés es el oficial, y en la calle se habla un inglés liberiano que al principio cuesta entender.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
