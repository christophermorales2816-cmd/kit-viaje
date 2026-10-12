import type { DestinationGuide } from "./types";

/**
 * Guía de Togo.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un registro online que todos completan antes de
 * llegar y antes de irse —el de Cabo Verde, pero de ida y de vuelta—, además
 * de la visa, y otra vez la fiebre amarilla para todos. El dato de la portada
 * es lo angosto del país: cincuenta y seis kilómetros de costa. Ninguna ciudad
 * del planificador está al norte de Kandé, donde las recomendaciones de viaje
 * piden no ir, así que Koutammakou no está, y la guía lo dice como dato de
 * entrada.
 */
export const togo: DestinationGuide = {
  slug: "togo",
  country: "Togo",
  subregion: "África Occidental",
  subhead:
    "Una franja angosta entre Ghana y Benín: el mercado de fetiches de Lomé, el lago Togo y el pueblo que le dio nombre al país, y las colinas de Kpalimé, con cacao, cascadas y el monte Agou.",

  image: null,

  highlights: [
    {
      value: "56 km",
      label:
        "de costa: de la frontera con Ghana a la de Benín, en una hora de ruta",
      note: "Togo es una franja angosta que se estira tierra adentro hacia el norte. Lomé está pegada a la frontera con Ghana, y Aného, a un paso de Benín.",
    },
    {
      value: "Registro",
      label: "online para entrar y para salir, además de la visa",
      note: "Todos los viajeros completan un registro en la plataforma oficial antes de llegar y otro antes de irse, y la aerolínea pide el comprobante al embarcar.",
    },
    {
      value: "Vudú",
      label: "en la costa: el mercado de fetiches de Lomé y el lago Togo",
      note: "En Akodésséwa, en Lomé, se venden los objetos de los rituales, y en Togoville y Aného el vudú sigue vivo en templos y fiestas.",
    },
    {
      value: "Kpalimé",
      label: "colinas, cascadas y cacao, a dos horas de Lomé",
      note: "Caminatas entre plantaciones de café y cacao, mariposas, talleres de artesanos y el monte Agou, el más alto del país.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Togo",
      body: [
        "Casi todos los pasaportes de fuera de África Occidental necesitan visa, que se tramita online antes de viajar: ya no se da al llegar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Además, todos los viajeros —con visa o sin ella— completan un registro online antes de llegar y otro antes de irse. La aerolínea pide el comprobante al embarcar.",
        "Togo pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes.",
        "Ninguna ciudad del planificador está al norte de Kandé ni cerca de la frontera con Burkina Faso, donde las recomendaciones de viaje piden no ir: por eso Koutammakou, la tierra de los batammariba, no forma parte del planificador. Antes de viajar, revisá las de tu país.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Togo",
      body: [
        "La moneda es el franco CFA de África Occidental, atado al euro: el mismo de Senegal, Costa de Marfil y Benín.",
        "La tarjeta funciona en hoteles y en algunos restaurantes de Lomé; en el resto, efectivo o pago por celular, que usa todo el país. Los cajeros de los bancos grandes aceptan tarjetas extranjeras, casi todos en las ciudades.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor todo el año, y lluvias según la zona",
      body: [
        "Calor húmedo todo el año en la costa, con dos temporadas de lluvia: de abril a junio, y en septiembre y octubre. En Lomé, que queda en una franja más seca de la costa, llueve menos que en el resto del golfo.",
        "Las colinas de Kpalimé y el monte Agou son más lluviosas y algo más frescas, con noches agradables.",
        "Hacia el norte, en Sokodé y Kara, hay una sola temporada de lluvias, de mayo a octubre, y de diciembre a febrero sopla el harmattan, el viento del Sahara, con polvo y cielos blancos.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: temporada seca, la mejor para recorrer, aunque con el polvo del harmattan de diciembre a febrero.",
        "En agosto, la costa tiene una pausa seca y algo más fresca; en las colinas y en el norte, en cambio, es plena temporada de lluvias. Las luchas evala de Kara son en julio.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Togo",
      body: [
        "En Lomé hay taxis, zémidjans —las motos taxi— y aplicaciones como Gozem, que piden motos y autos con el precio a la vista.",
        "Una ruta asfaltada cruza el país de sur a norte, de Lomé a Kara, con buses y taxis colectivos. A las colinas de Kpalimé y a los pueblos se llega en taxi colectivo o en auto con chofer.",
        "En las rutas hay controles: llevá el pasaporte. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Aného y Togoville, de la época colonial, y la memoria viva del vudú.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Fufu, pâte con salsa de gombo, pescado a la parrilla y brochettes, con sodabi de palma.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale: "Playas de palmeras, el lago Togo y las colinas de Kpalimé.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale:
        "Una costa corta y de mar fuerte: más para mirar que para nadar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale: "Comer y moverse es barato; los buenos hoteles, en Lomé.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Un país chico con una ruta que lo cruza entero; visa y registro, antes de viajar.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "Las colinas de Kpalimé.",
    "El vudú de la costa.",
    "Un país chico, fácil de recorrer de punta a punta.",
  ],

  costs: [
    "Visa, registro y vacuna, que se tramitan antes.",
    "Un mar fuerte, con poco para nadar.",
    "Calor húmedo todo el año.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Lomé en junio que Kpalimé o Kara. Los precios están en francos CFA y son órdenes de magnitud; un hotel con pileta en Lomé cuesta bastante más.",

  places: [
    {
      id: "lome",
      name: "Lomé",
      region: "Marítima",
      tag: "La capital",
      blurb:
        "La capital, sobre el mar y pegada a la frontera con Ghana: el Gran Mercado, el mercado de fetiches de Akodésséwa, el Museo Nacional y la playa larga del bulevar. Es la base del planificador: calor húmedo todo el año, con junio como el mes más lluvioso.",
      coords: [6.1319, 1.2228],
      featured: true,
      image: null,
    },
    {
      id: "aneho",
      name: "Aného",
      region: "Marítima",
      tag: "La primera capital",
      blurb:
        "La primera capital colonial, entre el mar y la laguna, a un paso de Benín, con casas de época, iglesias viejas y templos vudú.",
      coords: [6.228, 1.5919],
      image: null,
    },
    {
      id: "togoville",
      name: "Togoville (lago Togo)",
      region: "Marítima",
      tag: "El pueblo del nombre",
      blurb:
        "El pueblo que le dio nombre al país, del otro lado del lago Togo, con su catedral y santuarios vudú. Se llega en piragua desde Agbodrafo.",
      coords: [6.235, 1.4878],
      image: null,
    },
    {
      id: "kpalime",
      name: "Kpalimé",
      region: "Plateaux",
      tag: "Las colinas",
      blurb:
        "El pueblo de las colinas del oeste, con mercado, artesanos y caminatas entre plantaciones de café y cacao hasta cascadas como la de Kpimé.",
      coords: [6.9, 0.6333],
      image: null,
    },
    {
      id: "monte-agou",
      name: "Monte Agou",
      region: "Plateaux",
      tag: "El techo del país",
      blurb:
        "La montaña más alta de Togo, cerca de Kpalimé, con pueblos en las laderas y, cuando el aire está limpio, vista hasta el lago Volta, en Ghana.",
      coords: [6.8667, 0.745],
      image: null,
    },
    {
      id: "atakpame",
      name: "Atakpamé",
      region: "Plateaux",
      tag: "La encrucijada",
      blurb:
        "Una ciudad de colinas en el centro, cruce de caminos entre el sur y el norte, rodeada de cascadas y pueblos.",
      coords: [7.5333, 1.1333],
      image: null,
    },
    {
      id: "badou",
      name: "Badou (cascada de Akloa)",
      region: "Plateaux",
      tag: "La cascada",
      blurb:
        "Un pueblo del café y el cacao cerca de la frontera con Ghana, con la cascada de Akloa al final de una caminata entre la selva.",
      coords: [7.5833, 0.6],
      image: null,
    },
    {
      id: "sokode",
      name: "Sokodé",
      region: "Central",
      tag: "La ciudad del centro",
      blurb:
        "La segunda ciudad del país, tierra del pueblo tem y de la fiesta de los cuchillos, el Adossa. Más seca que la costa, con el harmattan de diciembre a febrero.",
      coords: [8.9833, 1.1333],
      image: null,
    },
    {
      id: "kara",
      name: "Kara",
      region: "Kara",
      tag: "El norte del planificador",
      blurb:
        "La ciudad de las montañas kabyé, con mercado y, en julio, las luchas evala. Lo más caluroso del planificador en febrero y marzo.",
      coords: [9.5511, 1.1861],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Togo, ropa liviana y fresca, sombrero y protector: hace calor húmedo todo el año. Para las colinas y las temporadas de lluvia, algo impermeable. Repelente siempre, el certificado de la fiebre amarilla en el bolso de mano y el comprobante del registro online.",
    keyPoints: [
      "Visa y registro online, los dos antes de viajar; el registro, también antes de irte.",
      "Vacuna de la fiebre amarilla obligatoria para todos los viajeros.",
      "Temporada seca de noviembre a marzo; en la costa, lluvias de abril a junio y en septiembre y octubre.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, de algodón o lino, sombrero, protector y repelente.",
      templado:
        "Ropa liviana y un buzo fino para las noches de las colinas y el aire acondicionado.",
      fresco:
        "Un buzo liviano para las noches del harmattan en el norte y en el monte Agou.",
      frio: "No hace frío en Togo: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo C",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas finas. Si tu enchufe es de otro tipo, llevá adaptador. Los cortes de luz no son raros: una batería externa ayuda. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Hacé el registro online antes de llegar y antes de irte",
          body: "La aerolínea lo pide al embarcar, en los dos sentidos, aunque tengas la visa.",
        },
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes de llegar, y llevá el certificado en el bolso de mano.",
        },
        {
          title: "Subí a las colinas de Kpalimé",
          body: "Caminatas entre cacao y café, cascadas y el monte Agou, a dos horas de Lomé.",
        },
        {
          title: "Cruzá el lago Togo en piragua",
          body: "De Agbodrafo a Togoville, el pueblo que le dio nombre al país.",
        },
        {
          title: "Pedí las motos por aplicación en Lomé",
          body: "Con Gozem ves el precio antes de subir, sin regatear.",
        },
        {
          title: "Elegí pagar en francos",
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
          title: "No fotografíes ceremonias vudú sin permiso",
          body: "Preguntá antes: en muchos templos y fiestas no se puede.",
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
        id: "calor",
        title: "Para el calor",
        notice: {
          tone: "info",
          title: "Humedad todo el año",
          body: "Calor húmedo de día y de noche: ropa que se seque rápido y agua siempre a mano.",
        },
        summary: "Sol y humedad",
        items: [
          "Ropa liviana de algodón o lino",
          "Sombrero, lentes de sol y protector",
          "Una botella con filtro",
          "Algo impermeable para las temporadas de lluvia",
        ],
      },
      {
        id: "colinas",
        title: "Para las colinas",
        notice: null,
        summary: "Kpalimé, el monte Agou y las cascadas",
        items: [
          "Calzado cerrado para caminar",
          "Un buzo liviano para las noches",
          "Repelente",
          "Billetes chicos para los guías de los pueblos",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa, registro y fiebre amarilla",
          body: "Los pasaportes de fuera de África Occidental necesitan visa, tramitada online antes; todos los viajeros completan el registro online, a la ida y a la vuelta, y todos necesitan el certificado de la fiebre amarilla.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "El comprobante de la visa tramitada online",
          "El comprobante del registro online, impreso",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Pasaje de salida del país",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año, con más riesgo en las temporadas de lluvia. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Billetes grandes",
        why: "En los mercados y en las motos casi nunca hay vuelto.",
        instead: "Billetes chicos y monedas.",
      },
      {
        leave: "Dólares para pagar",
        why: "Casi nadie los acepta: todo se paga en francos CFA.",
        instead: "Francos CFA, o euros para cambiar.",
      },
      {
        leave: "El registro solo en el teléfono",
        why: "Sin batería o sin señal, no hay cómo mostrarlo al embarcar.",
        instead: "Una copia impresa, además.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los taxis colectivos y en las motos hay poco lugar.",
        instead: "Una mochila o un bolso mediano.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Togo?",
        answer:
          "Los pasaportes de fuera de África Occidental la necesitan: se tramita online antes de viajar, porque ya no se da al llegar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Qué es el registro online?",
        answer:
          "Un formulario que completan todos los viajeros, con visa o sin ella, antes de llegar y antes de irse. La aerolínea pide el comprobante al embarcar.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer:
          "Sí, para todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes de llegar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a marzo, la temporada seca, con el polvo del harmattan de diciembre a febrero. En agosto, la costa tiene una pausa seca y algo más fresca.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés, que es el oficial; en la calle, el ewe en el sur y el kabyé en el norte.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: son los de dos patas redondas finas, a 220 V. Un adaptador universal resuelve todo.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
