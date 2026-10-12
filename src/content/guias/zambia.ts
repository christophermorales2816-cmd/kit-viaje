import type { DestinationGuide } from "./types";

/**
 * Guía de Zambia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: tres estaciones y no dos. Entre el invierno seco y
 * las lluvias hay dos meses de calor fuerte, septiembre y octubre, que son
 * también los mejores para los safaris: en los valles del Luangwa y del Zambeze
 * pasa los treinta y cinco grados, y la guía tiene que decirlo.
 * La base es Livingstone y no Lusaka, la capital: es el lado zambiano de las
 * Cataratas Victoria y por donde entra casi todo el que viaja. Muchos
 * pasaportes entran sin visa desde que Zambia la eliminó para decenas de
 * países; se describe el mecanismo y no la lista. Como Zimbabue, la ONU la pone
 * en África Oriental.
 */
export const zambia: DestinationGuide = {
  slug: "zambia",
  country: "Zambia",
  subregion: "África Oriental",
  subhead:
    "La Piscina del Diablo al borde de las Cataratas Victoria, los safaris a pie de South Luangwa, las canoas del Lower Zambezi y los murciélagos de Kasanka. Parques grandes y con poca gente.",

  image: null,

  highlights: [
    {
      value: "Piscina del Diablo",
      label: "al borde de las cataratas, cuando baja el río",
      note: "Una pileta natural sobre el borde mismo de la caída, en la isla Livingstone. Se nada solo con el río bajo, más o menos de agosto a enero, y siempre con guía.",
    },
    {
      value: "Safari a pie",
      label: "nacido en South Luangwa",
      note: "En el valle del Luangwa se inventó el safari caminando, con guía y explorador armado. Es también de los mejores lugares de África para ver leopardos, en los safaris nocturnos.",
    },
    {
      value: "Murciélagos",
      label: "diez millones en Kasanka, de fines de octubre a diciembre",
      note: "La migración de mamíferos más grande del mundo: llegan a un bosquecito del parque y salen todos juntos al atardecer.",
    },
    {
      value: "+37 °C",
      label: "en los valles en octubre, antes de las lluvias",
      note: "En South Luangwa y en el Lower Zambezi, el final de la temporada seca es el mejor momento para ver animales y el de más calor. Los safaris salen temprano y vuelven a la tarde.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Zambia",
      body: [
        "Muchos pasaportes entran sin visa desde que Zambia la eliminó para decenas de países; el resto la tramita online antes de viajar o la saca al llegar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Si vas a ir también a Zimbabue y necesitás visa en los dos, en Livingstone suele venderse la KAZA Univisa, que cubre los dos países. No siempre está disponible.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Zambia",
      body: [
        "La moneda es el kwacha. Los lodges, los safaris y las actividades de las cataratas se cotizan casi siempre en dólares; lo demás se paga en kwachas.",
        "La tarjeta funciona en hoteles, lodges y supermercados de Lusaka y Livingstone; en los pueblos, efectivo o pago por celular, que usa todo el país.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí kwachas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Tres estaciones",
      body: [
        "Zambia está en el hemisferio sur y tiene tres estaciones: lluvias de noviembre a marzo, un invierno seco y templado de mayo a agosto, y un final de la temporada seca muy caluroso, en septiembre y octubre.",
        "En los valles del Luangwa y del Zambeze, octubre pasa los treinta y cinco grados antes de que lleguen las lluvias. En la meseta, en Lusaka, las noches de julio rondan los ocho.",
        "Livingstone queda en el medio: noches frías en invierno y calor fuerte en octubre.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: temporada seca, la mejor para los safaris. Cuanto más avanza, más se juntan los animales cerca del agua, y más calor hace.",
        "En las lluvias, muchos campamentos de South Luangwa y del Lower Zambezi cierran y algunos caminos se cortan. A cambio, todo está verde, llegan los pájaros migratorios y, a Kasanka, los murciélagos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Zambia",
      body: [
        "A South Luangwa y al Lower Zambezi se llega en avioneta, desde Lusaka o Livingstone, o por ruta en 4x4. Entre las ciudades hay buses y vuelos internos.",
        "Las distancias son largas y algunas rutas tienen pozos: no se maneja de noche. Se maneja por la izquierda.",
        "Desde Livingstone se cruza a pie a Zimbabue por el puente de las cataratas, y en Kazungula hay un puente a Botsuana.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "El museo de Livingstone y las cataratas de Kalambo, donde se encontró la estructura de madera más antigua que se conoce.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale:
        "Nshima con relish, pescado de río y de lago, y carne a la parrilla.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Las cataratas, los valles del Luangwa y del Zambeze, y las llanuras de Liuwa.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale: "No tiene mar; sí playas de lago, en el Tanganica.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Los campamentos de safari son caros; comer y moverse, barato.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Avionetas a los parques y buen turismo en Livingstone; por ruta, todo es lejos y lento.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "El kwacha se mueve bastante; los safaris se cotizan en dólares.",
    },
  ],

  shines: [
    "La Piscina del Diablo y las cataratas desde el borde.",
    "Safaris a pie y nocturnos en South Luangwa.",
    "Parques grandes y con pocos visitantes.",
  ],

  costs: [
    "Calor muy fuerte en octubre en los valles.",
    "Campamentos que cierran en las lluvias.",
    "Distancias largas y rutas lentas.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Livingstone en octubre que South Luangwa o Lusaka. Los precios están en kwachas y son órdenes de magnitud; los campamentos de safari se cotizan en dólares y pueden costar varias veces más.",

  places: [
    {
      id: "livingstone",
      name: "Livingstone",
      region: "Sur",
      tag: "Las cataratas, del lado de Zambia",
      blurb:
        "El pueblo del lado zambiano de las cataratas, con la Piscina del Diablo, rafting en el Zambeze y el puente a Zimbabue. Es la base del planificador: noches frías en invierno, calor fuerte en octubre y lluvias de diciembre a febrero.",
      coords: [-17.8419, 25.8543],
      featured: true,
      image: null,
    },
    {
      id: "lusaka",
      name: "Lusaka",
      region: "Centro",
      tag: "La capital",
      blurb:
        "Una capital de mercados y tránsito, con un orfanato de elefantes en las afueras y vuelos a los parques. Templada en invierno, por la altura.",
      coords: [-15.3875, 28.3228],
      image: null,
    },
    {
      id: "south-luangwa",
      name: "South Luangwa (Mfuwe)",
      region: "Valle del Luangwa",
      tag: "Leopardos y safaris a pie",
      blurb:
        "El parque donde nació el safari caminando, con leopardos, hipopótamos en el río y safaris nocturnos. En octubre, el mediodía pasa los treinta y cinco grados.",
      coords: [-13.0833, 31.8],
      image: null,
    },
    {
      id: "lower-zambezi",
      name: "Lower Zambezi",
      region: "Valle del Zambeze",
      tag: "En canoa",
      blurb:
        "Frente a Mana Pools, del otro lado del río: canoas entre elefantes, pesca del pez tigre y lodges sobre la orilla. Muchos cierran en las lluvias.",
      coords: [-15.5, 29.6],
      image: null,
    },
    {
      id: "kafue",
      name: "Parque Nacional Kafue",
      region: "Centro-oeste",
      tag: "Grande y poco visitado",
      blurb:
        "Uno de los parques más grandes de África, con las llanuras de Busanga en el norte, leopardos y pocos vehículos.",
      coords: [-14.9, 26.0],
      image: null,
    },
    {
      id: "siavonga",
      name: "Siavonga (lago Kariba)",
      region: "Sur",
      tag: "Lago y represa",
      blurb:
        "Un pueblo sobre el lago Kariba, con la represa, paseos en barco y atardeceres sobre el agua. Caluroso casi todo el año.",
      coords: [-16.5333, 28.7167],
      image: null,
    },
    {
      id: "kasanka",
      name: "Kasanka",
      region: "Centro-norte",
      tag: "Los murciélagos",
      blurb:
        "Un parque chico, de bosques y pantanos, adonde llegan diez millones de murciélagos de fines de octubre a diciembre. También sitatungas, los antílopes del pantano.",
      coords: [-12.5833, 30.2167],
      image: null,
    },
    {
      id: "mpulungu",
      name: "Mpulungu (lago Tanganica)",
      region: "Norte",
      tag: "El lago Tanganica",
      blurb:
        "El puerto zambiano del Tanganica, uno de los lagos más profundos del mundo, con playas, peces de colores y las cataratas de Kalambo cerca.",
      coords: [-8.7667, 31.1167],
      image: null,
    },
    {
      id: "liuwa",
      name: "Llanura de Liuwa",
      region: "Oeste",
      tag: "La migración de ñus",
      blurb:
        "Una llanura remota con la segunda migración de ñus de África, que llega con las primeras lluvias, en noviembre, y hienas que cazan en grupo.",
      coords: [-14.4, 22.5],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Zambia, ropa liviana de colores neutros para el día y un buzo o una campera para la noche y el amanecer, que en invierno son fríos. En septiembre y octubre, ropa muy fresca, sombrero y protector: en los valles pasa los treinta y cinco grados. Para las cataratas, algo que se pueda mojar. Todo el año, repelente y un adaptador universal.",
    keyPoints: [
      "Tres estaciones: lluvias de noviembre a marzo, invierno seco y templado, y calor fuerte en septiembre y octubre.",
      "Muchos pasaportes entran sin visa: verificá el tuyo.",
      "La Piscina del Diablo solo se nada con el río bajo, más o menos de agosto a enero.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y muy fresca, de colores neutros, sombrero, protector y repelente. En octubre, en los valles, mucha agua.",
      templado:
        "Ropa liviana para el día y un buzo para la noche: es el clima de Lusaka y de Livingstone en invierno.",
      fresco:
        "Capas: un buzo abrigado y una campera para los safaris del amanecer, que en el vehículo abierto son fríos.",
      frio: "Campera de abrigo, gorro y guantes para las madrugadas de invierno en los parques.",
    },
    plug: {
      types: "Tipos C, D y G",
      voltage: "230 V, 50 Hz",
      note: "Lo más común es el británico, de tres patas rectangulares; también aparecen el de dos patas redondas finas y el de tres patas redondas. Un adaptador universal resuelve todo. Puede haber cortes de luz programados. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Nadá en la Piscina del Diablo, si el río lo permite",
          body: "Se hace con guía, más o menos de agosto a enero, y se reserva con anticipación.",
        },
        {
          title: "Hacé un safari a pie",
          body: "En South Luangwa, donde nació: se camina con guía y explorador, y se ve lo que desde el vehículo no.",
        },
        {
          title: "Probá un safari nocturno",
          body: "En South Luangwa están permitidos, y son la mejor forma de ver leopardos.",
        },
        {
          title: "Mirá las cataratas desde los dos lados",
          body: "Desde Zambia se llega al borde; desde Zimbabue se ve más frente. Se cruza a pie por el puente.",
        },
        {
          title: "Llevá binoculares",
          body: "Hacen la diferencia en un safari, sobre todo con los pájaros.",
        },
        {
          title: "Elegí pagar en kwachas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No bajes del vehículo en los parques",
          body: "Salvo en un safari a pie, con guía: los animales son salvajes.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o aeropuertos: está prohibido.",
        },
        {
          title: "No manejes de noche",
          body: "Hay animales, peatones y pozos en las rutas, y casi nada de luz.",
        },
        {
          title: "No te metas en ríos ni lagos sin preguntar",
          body: "Hay cocodrilos, hipopótamos y, en algunas aguas, bilharzia.",
        },
        {
          title: "No subestimes el calor de octubre",
          body: "En los valles pasa los treinta y cinco grados: los safaris se hacen temprano y a la tarde.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "safari",
        title: "Para el safari",
        notice: {
          tone: "info",
          title: "Madrugadas y polvo",
          body: "Los safaris salen al amanecer en vehículos abiertos: en invierno hace frío temprano, y en octubre, calor fuerte al mediodía.",
        },
        summary: "Lo que pide el monte",
        items: [
          "Ropa de colores neutros",
          "Buzo o campera para el amanecer",
          "Sombrero, lentes de sol y protector",
          "Binoculares",
          "Calzado cerrado para caminar",
        ],
      },
      {
        id: "cataratas",
        title: "Para las cataratas",
        notice: null,
        summary: "Agua por todos lados",
        items: [
          "Traje de baño, para la Piscina del Diablo",
          "Piloto o poncho, de marzo a mayo",
          "Funda impermeable para el teléfono",
          "Calzado que se pueda mojar",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "La visa depende del pasaporte",
          body: "Muchos pasaportes entran sin visa y otros la tramitan antes o al llegar. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y páginas en blanco",
          "La visa, si tu pasaporte la necesita",
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
          body: "Hay malaria en todo el país, todo el año, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Ropa de camuflaje",
        why: "Es de uso militar, y en Zimbabue, del otro lado de las cataratas, está prohibida para civiles.",
        instead: "Ropa de colores neutros.",
      },
      {
        leave: "Ropa azul oscura o negra para el safari",
        why: "Atrae a las moscas tse-tsé, que en el Luangwa y en Kafue abundan.",
        instead: "Ropa caqui, beige o verde oliva.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Las madrugadas de invierno son frías, y el safari sale en vehículo abierto.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Una valija rígida para las avionetas",
        why: "Los vuelos a los parques piden bolsos blandos y con poco peso.",
        instead: "Un bolso blando.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan en lodges y casas de cambio.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Zambia?",
        answer:
          "Muchos pasaportes entran sin visa; otros la tramitan online o la sacan al llegar. Si también vas a Zimbabue, mirá la KAZA Univisa. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cuándo se puede nadar en la Piscina del Diablo?",
        answer:
          "Con el río bajo, más o menos de agosto a enero, y siempre con guía. Se reserva con anticipación.",
      },
      {
        question: "¿Cuál es la mejor época para un safari?",
        answer:
          "De mayo a octubre, la temporada seca. Septiembre y octubre son los mejores meses para ver animales, y los de más calor.",
      },
      {
        question: "¿Hace frío en Zambia?",
        answer:
          "En invierno, de mayo a agosto, las noches y las madrugadas son frías. El resto del año hace calor, y mucho en octubre.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Lo más común es el británico, a 230 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí: a guías, exploradores y choferes de safari, y al personal de los lodges, casi siempre en una caja común.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada o filtrada; los lodges suelen darla.",
      },
    ],
  },
};
