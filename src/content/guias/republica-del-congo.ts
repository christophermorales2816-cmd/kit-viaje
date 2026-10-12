import type { DestinationGuide } from "./types";

/**
 * Guía de la República del Congo.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: los gorilas de llanura de Odzala, el dato de su
 * portada, en lodges que cuestan varias veces lo que el factor permite (el
 * tope es 2,5, y Odzala lo usa): la nota de alcance lo dice. Es el Congo de
 * Brazzaville, no el de Kinshasa, y la guía lo aclara. Ninguna ciudad del
 * planificador está cerca de la frontera con la República Centroafricana ni
 * en el departamento del Pool fuera de la capital; como la ruta entre
 * Brazzaville y Pointe-Noire cruza el Pool, la guía recomienda volar.
 */
export const republicaDelCongo: DestinationGuide = {
  slug: "republica-del-congo",
  country: "República del Congo",
  subregion: "África Central",
  subhead:
    "Los gorilas de llanura de Odzala, Brazzaville frente a Kinshasa sobre el río Congo, la ruta de los esclavos en Loango y una costa donde la selva llega al mar.",

  image: null,

  highlights: [
    {
      value: "Gorilas",
      label:
        "de llanura en Odzala, una de las selvas mejor conservadas de África",
      note: "Un parque de selva y claros donde se juntan gorilas, elefantes de bosque y búfalos. Se visita con el lodge, que organiza los traslados.",
    },
    {
      value: "Rápidos",
      label: "del río Congo, a minutos del centro de Brazzaville",
      note: "El río se agita entre rocas, con restaurantes a la orilla y Kinshasa del otro lado.",
    },
    {
      value: "Loango",
      label: "la ruta de los esclavos, frente al Atlántico",
      note: "El antiguo puerto de la trata, con el memorial frente al mar, el museo de Diosso y las gargantas de arena roja, cerca de Pointe-Noire.",
    },
    {
      value: "Vacuna",
      label: "contra la fiebre amarilla, obligatoria para entrar",
      note: "La República del Congo pide el certificado a todos los viajeros. Tiene que estar aplicada al menos diez días antes de llegar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a la República del Congo",
      body: [
        "Casi todos los pasaportes necesitan visa, que se tramita antes de viajar; suelen pedir la reserva del hotel o una carta de invitación. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "La República del Congo pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros, y lo controla al llegar.",
        "Ninguna ciudad del planificador está a menos de cincuenta kilómetros de la frontera con la República Centroafricana ni en el departamento del Pool, fuera de la capital: las recomendaciones de viaje piden no ir o evitar los viajes que no sean esenciales. Si vas, revisá antes las de tu país.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en la República del Congo",
      body: [
        "La moneda es el franco CFA de África Central, el mismo de Camerún y Gabón, atado al euro.",
        "La tarjeta funciona en hoteles grandes de Brazzaville y Pointe-Noire; en el resto, efectivo. Los euros en billetes nuevos se cambian fácil.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Sobre el ecuador",
      body: [
        "Brazzaville, como Kinshasa, tiene calor húmedo todo el año, con lluvias de octubre a mayo y una temporada seca, más fresca y nublada, de junio a septiembre.",
        "La costa, en Pointe-Noire y Loango, es algo más fresca y seca.",
        "El norte, en Odzala y Ouesso, es selva ecuatorial, con lluvia buena parte del año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre: la temporada seca en el sur, la mejor para recorrer.",
        "Para Odzala, de junio a agosto y en enero, cuando llueve menos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por la República del Congo",
      body: [
        "Entre Brazzaville y Pointe-Noire conviene volar: la ruta cruza el Pool.",
        "A Odzala se llega en avioneta o en un viaje largo por ruta hacia el norte, casi siempre con el lodge.",
        "En las ciudades hay taxis: acordá el precio antes de subir. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Loango y la ruta de los esclavos, la basílica de Santa Ana y el memorial de Brazza.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale: "Saka-saka, pescado del río, mandioca y cocina francesa.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Selva, el río Congo y la costa atlántica.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale: "Playas en Pointe-Noire y Conkouati; el mar es fuerte.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "Hoteles caros; los lodges de Odzala, mucho más.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale: "Visa previa, rutas largas y vuelos chicos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "Los gorilas de Odzala.",
    "El río Congo y sus rápidos.",
    "Un país casi sin turistas.",
  ],

  costs: [
    "Visa previa y vacuna obligatoria.",
    "Lodges muy caros en el norte.",
    "Rutas largas: conviene volar.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Brazzaville en julio que Pointe-Noire u Odzala. Los precios están en francos CFA y son órdenes de magnitud; los lodges de Odzala se venden en paquetes que cuestan varias veces más.",

  places: [
    {
      id: "brazzaville",
      name: "Brazzaville",
      region: "Brazzaville",
      tag: "La capital frente a Kinshasa",
      blurb:
        "La basílica de Santa Ana con sus tejas verdes, el memorial de Pierre Savorgnan de Brazza y la costanera frente a Kinshasa. Es la base del planificador: calor húmedo, con lluvias de octubre a mayo y una temporada seca de junio a septiembre.",
      coords: [-4.2634, 15.2429],
      featured: true,
      image: null,
    },
    {
      id: "rapidos-del-congo",
      name: "Rápidos del Congo",
      region: "Brazzaville",
      tag: "Los rápidos",
      blurb:
        "Donde el río Congo se agita entre rocas, a minutos del centro, con restaurantes a la orilla.",
      coords: [-4.3, 15.21],
      image: null,
    },
    {
      id: "pointe-noire",
      name: "Pointe-Noire",
      region: "Pointe-Noire",
      tag: "El puerto atlántico",
      blurb:
        "La ciudad del petróleo y del puerto, con playas, mercados y la vida nocturna más animada del país.",
      coords: [-4.7692, 11.8664],
      image: null,
    },
    {
      id: "loango",
      name: "Loango (ruta de los esclavos)",
      region: "Kouilou",
      tag: "La ruta de los esclavos",
      blurb:
        "El antiguo reino y puerto de la trata, con el memorial frente al mar, el museo de Diosso y las gargantas de arena roja.",
      coords: [-4.65, 11.82],
      image: null,
    },
    {
      id: "conkouati",
      name: "Parque Nacional Conkouati-Douli",
      region: "Kouilou",
      tag: "Selva y mar",
      blurb:
        "Un parque donde la selva llega al mar, con lagunas, chimpancés rehabilitados y tortugas en la playa.",
      coords: [-3.95, 11.33],
      image: null,
    },
    {
      id: "mayombe",
      name: "Bosque del Mayombe (Dimonika)",
      region: "Kouilou",
      tag: "Selva de montaña",
      blurb:
        "La selva del Mayombe, montañosa y húmeda, con la reserva de Dimonika y el ferrocarril que la cruza.",
      coords: [-4.27, 12.43],
      image: null,
    },
    {
      id: "dolisie",
      name: "Dolisie",
      region: "Niari",
      tag: "La ciudad del ferrocarril",
      blurb:
        "Una de las ciudades más grandes del país, sobre el ferrocarril Congo-Océano, entre el Mayombe y el valle del Niari.",
      coords: [-4.1989, 12.6664],
      image: null,
    },
    {
      id: "odzala",
      name: "Parque Nacional Odzala-Kokoua",
      region: "Cuvette-Ouest",
      tag: "Gorilas de llanura",
      blurb:
        "Una de las selvas mejor conservadas de África, con gorilas de llanura, elefantes de bosque y claros donde se juntan los animales. Se visita con el lodge.",
      coords: [0.6, 14.9],
      image: null,
    },
    {
      id: "ouesso",
      name: "Ouesso (río Sangha)",
      region: "Sangha",
      tag: "La ciudad del Sangha",
      blurb:
        "Una ciudad en plena selva, sobre el río Sangha, con mercados de río y pueblos de pescadores.",
      coords: [1.6136, 16.0517],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para la República del Congo, ropa liviana y fresca, algo impermeable y calzado que se seque rápido. Para Odzala, ropa de colores neutros que cubra y calzado firme. Repelente siempre, el certificado de la fiebre amarilla en el bolso de mano y euros en efectivo.",
    keyPoints: [
      "Vacuna de la fiebre amarilla obligatoria para todos, y visa tramitada antes.",
      "Lluvias de octubre a mayo; temporada seca de junio a septiembre en el sur.",
      "Entre Brazzaville y Pointe-Noire conviene volar.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, sombrero, protector y repelente. Algo impermeable de octubre a mayo.",
      templado:
        "Ropa liviana y un buzo para la temporada seca, más fresca y nublada.",
      fresco: "Un buzo liviano para las noches de la temporada seca.",
      frio: "No hace frío en la República del Congo: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipos C y E",
      voltage: "230 V, 50 Hz",
      note: "Dos patas redondas finas (C) o el francés, con una tercera pata macho (E); las de dos patas entran en los dos. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes, con el certificado en el bolso de mano: lo controlan al llegar.",
        },
        {
          title: "Volá entre Brazzaville y Pointe-Noire",
          body: "Es un vuelo corto, y la ruta cruza el Pool.",
        },
        {
          title: "Reservá Odzala con el lodge",
          body: "Los traslados, los guías y los permisos van juntos.",
        },
        {
          title: "Probá el saka-saka",
          body: "Hojas de mandioca pisadas con pescado ahumado y aceite de palma.",
        },
        {
          title: "Escuchá rumba en vivo",
          body: "En los bares de Bacongo y Poto-Poto, en Brazzaville.",
        },
        {
          title: "Elegí pagar en francos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el certificado de la fiebre amarilla",
          body: "Sin él te pueden negar la entrada.",
        },
        {
          title: "No saques fotos sin permiso",
          body: "Edificios oficiales, puentes, el puerto y la policía están prohibidos.",
        },
        {
          title: "No compres carne de monte ni marfil",
          body: "Son de animales protegidos, y sacarlos del país es ilegal.",
        },
        {
          title: "No te bañes en el río",
          body: "El Congo tiene corrientes muy fuertes.",
        },
        {
          title: "No cambies plata en la calle",
          body: "Cambiá en bancos o en el hotel.",
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
          title: "Visa y fiebre amarilla",
          body: "Casi todos los pasaportes necesitan visa, tramitada antes, y todos los viajeros necesitan el certificado de la fiebre amarilla.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa aprobada",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Reserva de hotel o carta de invitación",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "selva",
        title: "Para la selva",
        notice: {
          tone: "info",
          title: "Humedad y barro",
          body: "En Odzala se camina por barro y agua: ropa que se seque rápido y calzado firme.",
        },
        summary: "Lo que pide Odzala",
        items: [
          "Calzado de trekking ya usado",
          "Ropa de colores neutros que cubra",
          "Una campera impermeable",
          "Binoculares",
        ],
      },
      {
        id: "calor",
        title: "Para el calor",
        notice: null,
        summary: "Sol y humedad",
        items: [
          "Ropa liviana de algodón o lino",
          "Sombrero y protector",
          "Una batería externa para los cortes de luz",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Sales de rehidratación y algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa gruesa o de jean",
        why: "Con la humedad no se seca nunca.",
        instead: "Ropa de secado rápido.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de los hoteles grandes casi no se acepta.",
        instead: "Francos o euros en efectivo.",
      },
      {
        leave: "Ropa de colores fuertes en los parques",
        why: "Espanta a los animales, y el azul y el negro atraen a las moscas tse-tse.",
        instead: "Colores neutros: beige, caqui, verde.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Los traslados dependen de vuelos chicos y rutas largas.",
        instead: "Días de margen.",
      },
      {
        leave: "Zapatillas de lona para la selva",
        why: "El barro las destroza.",
        instead: "Calzado de trekking ya usado.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a la República del Congo?",
        answer:
          "Casi todos los pasaportes la necesitan, y se tramita antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer: "Sí, para todos los viajeros, y se controla al llegar.",
      },
      {
        question: "¿Es lo mismo que la RD del Congo?",
        answer:
          "No: son dos países, uno a cada lado del río. Esta es la guía de Brazzaville; la RD del Congo, con Kinshasa, tiene la suya.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De junio a septiembre, la temporada seca en el sur.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés es el oficial; en la calle, el lingala y el kituba.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: la República del Congo usa los tipos C y E a 230 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
