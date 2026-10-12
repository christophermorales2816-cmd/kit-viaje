import type { DestinationGuide } from "./types";

/**
 * Guía de Túnez.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: Mediterráneo y Sahara en un país chico, y una moneda
 * que no se puede sacar ni entrar. El dinar va sin centavos aunque se acerca a
 * la regla: vale alrededor de un tercio de dólar. Las zonas de frontera con
 * Argelia y Libia y la zona militar del sur se nombran como dato de entrada, y
 * ninguna ciudad del planificador está ahí.
 */
export const tunez: DestinationGuide = {
  slug: "tunez",
  country: "Túnez",
  subregion: "África del Norte",
  subhead:
    "Las ruinas de Cartago, el pueblo blanco y azul de Sidi Bou Said, el anfiteatro de El Djem, las playas de Hammamet y Djerba y las dunas del Sahara. Mediterráneo y desierto en un país chico.",

  image: null,

  highlights: [
    {
      value: "Dinar",
      label: "que no se puede sacar del país",
      note: "Se cambia allá, y lo que sobra se vuelve a cambiar antes de salir, con los comprobantes. Afuera casi no se consigue.",
    },
    {
      value: "Cartago",
      label: "a minutos de la capital",
      note: "Las ruinas de la ciudad púnica y romana, patrimonio de la humanidad, junto al pueblo blanco y azul de Sidi Bou Said.",
    },
    {
      value: "El Djem",
      label: "un anfiteatro romano entero",
      note: "Uno de los mejor conservados del mundo, en medio de un pueblo. Queda de camino entre Susa y el sur.",
    },
    {
      value: "Star Wars",
      label: "y los decorados de Tatooine en el sur",
      note: "En Matmata y cerca de Tozeur siguen en pie decorados de las películas, en medio del desierto.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Túnez",
      body: [
        "Muchos pasaportes sudamericanos entran sin visa por turismo; otros la necesitan antes de viajar. Verificá el tuyo antes de comprar el pasaje.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
        "Las zonas de frontera con Argelia y Libia y la zona militar del sur del desierto no forman parte de un viaje habitual: para entrar se necesita un permiso, y ninguna ciudad del planificador está ahí.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Túnez",
      body: [
        "La moneda es el dinar tunecino, y no se puede sacar ni entrar al país. Se cambia al llegar —en el aeropuerto, bancos y hoteles— o se saca del cajero, y lo que sobra se vuelve a cambiar antes de salir, con los comprobantes.",
        "La tarjeta funciona en hoteles y restaurantes de las zonas turísticas; en los zocos, los taxis y los pueblos, efectivo. En los mercados, el precio se negocia.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dinares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Mediterráneo en el norte, Sahara en el sur",
      body: [
        "Túnez es hemisferio norte. La costa —la capital, Hammamet, Susa, Djerba— tiene inviernos templados y lluviosos y veranos calurosos y secos.",
        "Tierra adentro, Kairuán es más extrema. El sur es desierto: Tozeur y Douz pasan los cuarenta grados en julio y tienen noches frías en enero.",
        "Djerba tiene el invierno más suave del país y casi no llueve en verano.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De abril a junio y de septiembre a octubre: el mar está tibio en la costa y las temperaturas son buenas para el desierto.",
        "Julio y agosto son temporada alta de playa y muy calurosos en el sur. De noviembre a marzo, el desierto es lo mejor de día, con noches frías.",
        "El Ramadán cambia los horarios; la fecha se corre cada año. El planificador usa el clima histórico de cada ciudad, no un pronóstico.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Túnez",
      body: [
        "Entre la capital, Susa y el sur hay trenes y louages, las combis colectivas que salen cuando se llenan. Para el desierto, excursión organizada o auto de alquiler.",
        "En la capital, el metro ligero y el TGM, el tren que va a Cartago, Sidi Bou Said y La Marsa. Los taxis amarillos usan taxímetro.",
        "Las precauciones son las de cualquier destino turístico: acordar el precio antes de los paseos en camello o en calesa, y la mochila cerrada en los zocos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-11",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "Cartago, el anfiteatro de El Djem, la medina de Túnez y la gran mezquita de Kairuán.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale: "Cuscús, brik, harissa, lablabi y pescado fresco en la costa.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Del Mediterráneo turquesa a los lagos de sal y las dunas del sur.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "Arena fina y agua tibia de junio a octubre en Hammamet, Susa y Djerba.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "Hoteles y comida baratos, también en la costa.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Trenes y louages entre ciudades; el desierto, en excursión o en auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "Los precios son estables; el dinar se cambia allá y no sale del país.",
    },
  ],

  shines: [
    "Mediterráneo, ruinas romanas y Sahara en un país chico.",
    "Precios bajos para la costa.",
    "Sidi Bou Said y la medina de Túnez.",
  ],

  costs: [
    "Calor fuerte en verano en el sur.",
    "Vendedores insistentes en los zocos turísticos.",
    "Una moneda que hay que cambiar allá y no sale del país.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo la capital en enero que Djerba o Tozeur. Los precios están en dinares tunecinos y son órdenes de magnitud.",

  places: [
    {
      id: "tunez",
      name: "Túnez",
      region: "Túnez",
      tag: "La medina y el Bardo",
      blurb:
        "La medina, patrimonio de la humanidad, el museo del Bardo con sus mosaicos romanos y la avenida Habib Bourguiba. Es la base del planificador: inviernos templados y lluviosos, veranos calurosos.",
      coords: [36.8065, 10.1815],
      featured: true,
      image: null,
    },
    {
      id: "sidi-bou-said",
      name: "Sidi Bou Said y Cartago",
      region: "Túnez",
      tag: "Blanco y azul sobre el mar",
      blurb:
        "El pueblo de casas blancas y puertas azules sobre el golfo, al lado de las ruinas de Cartago. Se llega en el TGM desde la capital.",
      coords: [36.8687, 10.3416],
      image: null,
    },
    {
      id: "hammamet",
      name: "Hammamet",
      region: "Nabeul",
      tag: "Playas",
      blurb:
        "Playas largas, una medina amurallada junto al mar y hoteles para todos los bolsillos. Agua tibia de junio a octubre.",
      coords: [36.4, 10.6167],
      image: null,
    },
    {
      id: "susa",
      name: "Susa",
      region: "Susa",
      tag: "La medina junto al puerto",
      blurb:
        "Una medina amurallada, patrimonio de la humanidad, el ribat frente al mar y playas. Cerca, Monastir y el anfiteatro de El Djem.",
      coords: [35.8256, 10.6411],
      image: null,
    },
    {
      id: "kairuan",
      name: "Kairuán",
      region: "Kairuán",
      tag: "La ciudad santa",
      blurb:
        "La gran mezquita, de las más antiguas del norte de África, los estanques aglabíes y las alfombras. Tierra adentro: más calor en verano y más frío en invierno.",
      coords: [35.6781, 10.0963],
      image: null,
    },
    {
      id: "djerba",
      name: "Djerba",
      region: "Medenine",
      tag: "La isla del sur",
      blurb:
        "Playas, pueblos blancos, la sinagoga de la Ghriba y el invierno más suave del país.",
      coords: [33.875, 10.8575],
      image: null,
    },
    {
      id: "tozeur",
      name: "Tozeur",
      region: "Tozeur",
      tag: "Oasis y lagos de sal",
      blurb:
        "Un oasis de palmeras, la medina de ladrillo, el lago salado de Chott el-Djerid y decorados de Star Wars en el desierto cercano.",
      coords: [33.9197, 8.1335],
      image: null,
    },
    {
      id: "douz",
      name: "Douz",
      region: "Kebili",
      tag: "La puerta del Sahara",
      blurb:
        "Dunas, paseos en camello y el festival del Sahara en invierno. Más de cuarenta grados en julio y noches frías en enero.",
      coords: [33.4569, 9.0203],
      image: null,
    },
    {
      id: "matmata",
      name: "Matmata",
      region: "Gabès",
      tag: "Casas trogloditas",
      blurb:
        "Casas excavadas en la tierra alrededor de patios, entre ellas el hotel que fue la casa de Luke Skywalker en Star Wars.",
      coords: [33.5427, 9.9681],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Túnez es Mediterráneo y desierto. De junio a septiembre, ropa liviana, traje de baño, sombrero y protector, y en el sur, mucha agua. De noviembre a marzo, ropa de entretiempo, un abrigo y algo para la lluvia en la costa, y una campera para las noches del desierto. Todo el año, algo que cubra hombros y rodillas para las medinas y las mezquitas.",
    keyPoints: [
      "Hemisferio norte: veranos calurosos y secos, inviernos templados y lluviosos en la costa.",
      "En el desierto, días de calor y noches frías, sobre todo de noviembre a marzo.",
      "El dinar no sale del país: se cambia allá, con comprobantes.",
      "Hombros y rodillas cubiertos fuera de los hoteles y las playas.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana que cubra, sombrero, protector y mucha agua. En la costa, traje de baño; en el sur, un pañuelo para el sol y la arena.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, lo mejor para recorrer.",
      fresco:
        "Capas, un buzo abrigado y una campera liviana; en la costa, algo para la lluvia.",
      frio: "Campera de abrigo para las noches del desierto y algo impermeable para el invierno del norte.",
    },
    plug: {
      types: "Tipos C y E",
      voltage: "230 V, 50 Hz",
      note: "Dos patas redondas, como en Francia. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tomá el TGM a Sidi Bou Said y Cartago",
          body: "Es el tren que sale de la capital y para en las ruinas y en el pueblo.",
        },
        {
          title: "Pasá una noche en el desierto",
          body: "En Douz o cerca de Tozeur, con el atardecer en las dunas. Llevá abrigo.",
        },
        {
          title: "Guardá los comprobantes de cambio",
          body: "Los necesitás para volver a cambiar los dinares que sobren antes de salir.",
        },
        {
          title: "Probá el brik y el lablabi",
          body: "El primero, una masa finita frita con huevo; el segundo, una sopa de garbanzos para el frío.",
        },
        {
          title: "Pará en El Djem de camino al sur",
          body: "El anfiteatro romano queda entre Susa y Sfax, y se recorre en un par de horas.",
        },
        {
          title: "Elegí pagar en dinares",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No te lleves dinares",
          body: "No se pueden sacar del país. Cambiá lo que sobre antes de pasar migraciones.",
        },
        {
          title: "No vayas descubierto a la ciudad",
          body: "Fuera de los hoteles y las playas, se esperan hombros y rodillas cubiertos.",
        },
        {
          title: "No entres a una mezquita sin consultar",
          body: "En casi todas, la entrada está reservada a los musulmanes. En Kairuán, los visitantes pueden ver el patio de la gran mezquita.",
        },
        {
          title: "No subestimes el frío del desierto",
          body: "En invierno, las noches de Douz y Tozeur bajan mucho.",
        },
        {
          title: "No contrates un paseo sin acordar el precio",
          body: "Los camellos, las calesas y los guías se acuerdan antes.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "desierto",
        title: "Para el desierto",
        notice: {
          tone: "info",
          title: "Del calor al frío en un día",
          body: "En el sur, la diferencia entre el día y la noche es grande, sobre todo de noviembre a marzo.",
        },
        summary: "Lo que piden el sur y las dunas",
        items: [
          "Abrigo para la noche",
          "Un pañuelo para el sol y la arena",
          "Lentes de sol",
          "Calzado cerrado",
        ],
      },
      {
        id: "costa",
        title: "Para la costa",
        notice: null,
        summary: "Playa y medinas",
        items: [
          "Traje de baño",
          "Protector solar",
          "Sombrero",
          "Algo para cubrirse al salir de la playa",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Verificá la visa y el certificado",
          body: "Muchos pasaportes entran sin visa. Si venís de un país con riesgo de fiebre amarilla, te pueden pedir el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el estómago",
          "Protector solar y protector labial",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Dinares comprados antes de viajar",
        why: "No se consiguen afuera, y entrarlos o sacarlos no está permitido.",
        instead: "El cajero o una casa de cambio al llegar.",
      },
      {
        leave: "Solo ropa de verano en invierno",
        why: "En invierno llueve en la costa y las noches del desierto son frías.",
        instead: "Un buzo, una campera y algo impermeable.",
      },
      {
        leave: "Ropa ajustada o muy corta",
        why: "Fuera de los hoteles se esperan hombros y rodillas cubiertos.",
        instead: "Ropa liviana y holgada que cubra.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Los zocos, los louages y los pueblos cobran en efectivo.",
        instead: "Dinares en efectivo y una tarjeta.",
      },
      {
        leave: "Una valija grande para el desierto",
        why: "Las excursiones van en 4x4 y los campamentos tienen poco lugar.",
        instead: "Una mochila para una o dos noches.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Túnez?",
        answer:
          "Depende del pasaporte. Muchos sudamericanos entran sin visa por turismo; otros la tramitan antes. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a junio y de septiembre a octubre: mar tibio y temperaturas buenas para el desierto.",
      },
      {
        question: "¿Puedo llevarme los dinares que me sobren?",
        answer:
          "No: no se pueden sacar del país. Se vuelven a cambiar antes de salir, con los comprobantes del cambio.",
      },
      {
        question: "¿Se puede ir al desierto en verano?",
        answer:
          "Sí, pero con mucho calor: pasa los cuarenta grados. Las excursiones salen temprano o a la tarde.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Son de tipo C y E, a 230 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer: "Sí, en hoteles, bares y restaurantes de las zonas turísticas.",
      },
      {
        question: "¿Se deja propina?",
        answer: "Es habitual dejar algo en restaurantes y a guías y choferes.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada, que es barata y está en todos lados.",
      },
    ],
  },
};
