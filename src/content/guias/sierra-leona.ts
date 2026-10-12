import type { DestinationGuide } from "./types";

/**
 * Guía de Sierra Leona.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: una moneda que perdió tres ceros en 2022 —el dato
 * de su portada, porque en la calle todavía se oyen precios en leones viejos—
 * y un aeropuerto del otro lado de la bahía, en Lungi, con un cruce en lancha
 * hasta la capital. Pide la fiebre amarilla a todos, como Liberia. La
 * temporada de lluvias es de las más fuertes de África: el bucket de lluvia
 * (spec, 14.12) se activa de mayo a octubre en todas las ciudades.
 */
export const sierraLeona: DestinationGuide = {
  slug: "sierra-leona",
  country: "Sierra Leona",
  subregion: "África Occidental",
  subhead:
    "Playas de arena blanca entre montañas con selva a una hora de Freetown, los chimpancés de Tacugama, las islas Banana, la isla Tiwai y la memoria de la trata en Isla Bunce.",

  image: null,

  highlights: [
    {
      value: "Leones",
      label: "nuevos desde 2022, con tres ceros menos",
      note: "En la calle todavía se oyen precios en leones viejos: cincuenta mil puede querer decir cincuenta. Preguntá en cuál te están cobrando antes de pagar.",
    },
    {
      value: "Península",
      label: "con playas de arena blanca a una hora de Freetown",
      note: "River Number Two, Tokeh y Bureh, sobre la costa de la península, entre montañas cubiertas de selva. De noviembre a abril, el mar está más tranquilo.",
    },
    {
      value: "Tacugama",
      label: "el santuario de chimpancés, en las colinas de Freetown",
      note: "Chimpancés rescatados, en plena selva sobre la ciudad. Se visita con reserva y con guía.",
    },
    {
      value: "Isla Bunce",
      label: "el fuerte de la trata, en el estuario de Sierra Leona",
      note: "Desde este fuerte británico se embarcó a miles de personas esclavizadas hacia América. Se llega en lancha desde Freetown.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Sierra Leona",
      body: [
        "Casi todos los pasaportes de fuera de África Occidental necesitan visa: según el pasaporte, se tramita online antes de viajar o se saca al llegar al aeropuerto. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Sierra Leona pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes.",
        "El pasaporte tiene que tener al menos seis meses de vigencia.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Sierra Leona",
      body: [
        "La moneda es el leone. Desde 2022 circula el leone nuevo, con tres ceros menos, y todavía se oyen precios en leones viejos: preguntá en cuál te cobran.",
        "Casi todo se paga en efectivo: hay cajeros en Freetown, pero pocos aceptan tarjetas extranjeras. Los dólares y los euros en billetes nuevos se cambian en bancos y casas de cambio.",
        "La tarjeta funciona en pocos hoteles y restaurantes de Freetown. Si una terminal te ofrece cobrarte en tu moneda, elegí leones: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo y una lluvia muy fuerte",
      body: [
        "Calor húmedo todo el año, con una de las temporadas de lluvia más fuertes de África, de mayo a octubre: en julio y agosto llueve casi todos los días.",
        "De noviembre a abril es la temporada seca, con el harmattan de diciembre a febrero, que trae polvo y cielos blancos.",
        "Las colinas de Freetown, en Tacugama, son algo más frescas; tierra adentro, en Makeni y en Outamba-Kilimi, marzo y abril pasan los treinta y cinco grados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a abril: la temporada seca, la mejor para las playas de la península y para recorrer.",
        "De junio a septiembre llueve tanto que muchos caminos se cortan y varios alojamientos de playa cierran.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Sierra Leona",
      body: [
        "El aeropuerto está en Lungi, del otro lado de la bahía: a Freetown se cruza en lancha rápida o en ferry, o se rodea por ruta, con varias horas de viaje.",
        "En Freetown hay taxis compartidos, kekes, okadas —las motos taxi— y poda-podas, las combis. A las playas de la península y al interior se va mejor en auto con chofer.",
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
        "Isla Bunce y la memoria de la trata, y Freetown, fundada para los libertos.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Arroz con plasas —guisos de hojas—, pescado a la parrilla y la cocina krio.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Montañas con selva que caen al mar, islas y ríos.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale: "Las playas de la península, de arena blanca y casi vacías.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Comer es barato; los buenos hoteles de Freetown, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "El cruce desde el aeropuerto, caminos de tierra y una temporada de lluvias muy fuerte.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 5,
      rationale:
        "El leone pierde valor con los años: conviene cambiar de a poco.",
    },
  ],

  shines: [
    "Las playas de la península.",
    "Chimpancés y selva.",
    "La memoria de Isla Bunce.",
  ],

  costs: [
    "Lluvias muy fuertes de mayo a octubre.",
    "El cruce desde el aeropuerto.",
    "Casi todo en efectivo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Freetown en agosto que Makeni o las islas Banana. Los precios están en leones nuevos y son órdenes de magnitud; los lodges de playa y las lanchas cuestan bastante más.",

  places: [
    {
      id: "freetown",
      name: "Freetown",
      region: "Área Occidental",
      tag: "La capital",
      blurb:
        "La capital, entre las montañas y la bahía: el mercado de Big Market, el Museo Nacional, la vida de Lumley y Aberdeen y playas a la vuelta. Es la base del planificador: calor húmedo todo el año, con lluvias muy fuertes de mayo a octubre.",
      coords: [8.484, -13.2299],
      featured: true,
      image: null,
    },
    {
      id: "river-number-two",
      name: "Playa de River Number Two",
      region: "Área Occidental",
      tag: "Arena blanca",
      blurb:
        "Una playa de arena blanca donde un río llega al mar, entre montañas con selva, a una hora de Freetown. La cuida la gente del pueblo, que tiene ahí su alojamiento.",
      coords: [8.33, -13.22],
      image: null,
    },
    {
      id: "bureh",
      name: "Bureh Beach (surf)",
      region: "Área Occidental",
      tag: "Surf",
      blurb:
        "Una playa larga al sur de la península, con la escuela de surf del pueblo y olas para aprender.",
      coords: [8.22, -13.15],
      image: null,
    },
    {
      id: "islas-banana",
      name: "Islas Banana",
      region: "Área Occidental",
      tag: "Islas",
      blurb:
        "Tres islas frente a la punta de la península, con pueblos, ruinas coloniales y snorkel. Se llega en lancha desde Kent.",
      coords: [8.1167, -13.2],
      image: null,
    },
    {
      id: "tacugama",
      name: "Santuario de chimpancés de Tacugama",
      region: "Área Occidental",
      tag: "Chimpancés",
      blurb:
        "Un santuario de chimpancés rescatados, en la selva de las colinas sobre Freetown, con senderos y cabañas. Algo más fresco que la ciudad.",
      coords: [8.4333, -13.2],
      image: null,
    },
    {
      id: "isla-bunce",
      name: "Isla Bunce (fuerte de la trata)",
      region: "Estuario de Sierra Leona",
      tag: "La memoria de la trata",
      blurb:
        "Las ruinas del fuerte británico desde donde se embarcaba a las personas esclavizadas hacia América, en una isla del estuario. Se llega en lancha desde Freetown.",
      coords: [8.5694, -13.0403],
      image: null,
    },
    {
      id: "tiwai",
      name: "Isla Tiwai (río Moa)",
      region: "Sur",
      tag: "Selva y primates",
      blurb:
        "Una isla de selva en el río Moa, con once especies de primates, entre ellas el colobo rojo y el chimpancé, e hipopótamos pigmeos muy difíciles de ver.",
      coords: [7.55, -11.35],
      image: null,
    },
    {
      id: "makeni",
      name: "Makeni",
      region: "Norte",
      tag: "El norte",
      blurb:
        "La ciudad más grande del norte, con mercado, vida de universidad y las colinas de Wusum cerca. Más seca y calurosa que la costa en la temporada seca.",
      coords: [8.8833, -12.05],
      image: null,
    },
    {
      id: "outamba-kilimi",
      name: "Parque Nacional Outamba-Kilimi",
      region: "Norte",
      tag: "Sabana y río",
      blurb:
        "Sabana, bosque y el río Little Scarcies, con hipopótamos, monos y elefantes que casi no se ven. Lo más caluroso del planificador en marzo y abril.",
      coords: [9.7333, -12.3333],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Sierra Leona, ropa liviana y fresca, traje de baño, sombrero y protector: hace calor húmedo todo el año. De mayo a octubre, impermeable y calzado que se seque rápido. Repelente siempre, el certificado de la fiebre amarilla en el bolso de mano y efectivo.",
    keyPoints: [
      "Vacuna de la fiebre amarilla obligatoria para todos los viajeros.",
      "Temporada seca de noviembre a abril; lluvias muy fuertes de mayo a octubre.",
      "Leones nuevos, con tres ceros menos: preguntá en cuál te cobran.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente. De mayo a octubre, impermeable y calzado que se seque rápido.",
      templado:
        "Ropa liviana y un buzo fino para el aire acondicionado y las noches de lluvia.",
      fresco: "Un buzo liviano para las noches del harmattan y las lanchas.",
      frio: "No hace frío en Sierra Leona: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipos D y G",
      voltage: "230 V, 50 Hz",
      note: "Conviven el enchufe británico, de tres patas planas, y el de tres patas redondas grandes. Llevá un adaptador universal. Los cortes de luz son frecuentes, y muchos hoteles tienen generador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Planeá el cruce desde Lungi",
          body: "El aeropuerto está del otro lado de la bahía: reservá la lancha o el traslado con tiempo.",
        },
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes de llegar, y llevá el certificado en el bolso de mano.",
        },
        {
          title: "Preguntá si el precio es en leones viejos o nuevos",
          body: "Mucha gente todavía habla en los viejos, con tres ceros más.",
        },
        {
          title: "Visitá Tacugama con reserva",
          body: "Las visitas son con guía y en horarios fijos.",
        },
        {
          title: "Probá las plasas",
          body: "Guisos de hojas de mandioca o de papa con pescado, servidos con arroz.",
        },
        {
          title: "Elegí pagar en leones",
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
          title: "No cambies plata en la calle",
          body: "Con tantos ceros de por medio, es fácil que te den de menos.",
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
          title: "El mar, de noviembre a abril",
          body: "En la temporada de lluvias el mar se pone bravo, y varias playas pierden servicios.",
        },
        summary: "La península y las islas",
        items: [
          "Traje de baño y una remera de lycra",
          "Protector solar alto y sombrero",
          "Ojotas",
          "Una bolsa estanca para las lanchas",
        ],
      },
      {
        id: "lluvia",
        title: "Para la lluvia",
        notice: null,
        summary: "De mayo a octubre",
        items: [
          "Impermeable liviano",
          "Calzado que se seque rápido",
          "Bolsas estancas para el teléfono y los documentos",
          "Ropa de secado rápido",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa y fiebre amarilla",
          body: "Casi todos los pasaportes de fuera de África Occidental necesitan visa, online antes o al llegar, y todos los viajeros necesitan el certificado de la fiebre amarilla.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con al menos seis meses de vigencia",
          "La visa, o lo que pida tu pasaporte para sacarla al llegar",
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
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta, y los cajeros fallan con las tarjetas extranjeras.",
        instead: "Efectivo.",
      },
      {
        leave: "Billetes grandes",
        why: "En los mercados y en los kekes casi nunca hay vuelto.",
        instead: "Billetes chicos.",
      },
      {
        leave: "Un itinerario sin margen en la temporada de lluvias",
        why: "Los caminos de tierra se cortan, y el viaje se alarga.",
        instead: "Días de margen.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En las lanchas y en los taxis compartidos hay poco lugar.",
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
        question: "¿Necesito visa para entrar a Sierra Leona?",
        answer:
          "Casi todos los pasaportes de fuera de África Occidental la necesitan: online antes de viajar o al llegar, según el pasaporte. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer:
          "Sí, para todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes de llegar.",
      },
      {
        question: "¿Cómo llego del aeropuerto a Freetown?",
        answer:
          "En lancha rápida o en ferry, cruzando la bahía, o por ruta, con varias horas más de viaje.",
      },
      {
        question: "¿Qué son los leones nuevos?",
        answer:
          "Desde 2022, el leone tiene tres ceros menos, y mucha gente todavía dice los precios en la moneda vieja: preguntá en cuál te cobran.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a abril, la temporada seca. De mayo a octubre llueve mucho.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El inglés es el oficial; en la calle se habla krio, un criollo de base inglesa.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
