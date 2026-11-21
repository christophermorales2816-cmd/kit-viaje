import type { DestinationGuide } from "./types";

/**
 * Guía de Groenlandia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Parte del Reino de Dinamarca, pero fuera de Schengen y de la Unión
 * Europea, con reglas de entrada propias: cumple el criterio de 16.2 (spec,
 * 22.8). Va en Norteamérica, donde la pone la ONU.
 *
 * Lo que este país aporta: el destino más remoto del planificador. No hay
 * rutas entre los pueblos, el clima manda en los vuelos y fuera de los
 * pueblos no hay señal. La guía dice qué se encuentra en los asentamientos
 * —una tienda general, una enfermería— y qué hay que resolver antes de salir,
 * que es lo que pedían quienes probaron el sitio (spec, 22). Y es el frío de
 * verdad: Qaanaaq, a más de 77° de latitud norte, es la ciudad más al norte
 * del planificador.
 */
export const groenlandia: DestinationGuide = {
  slug: "groenlandia",
  country: "Groenlandia",
  subregion: "Norteamérica",
  subhead:
    "Icebergs del tamaño de edificios, trineos de perros, auroras y sol de medianoche. La isla más grande del mundo, sin rutas entre sus pueblos: se viaja en avión, helicóptero o barco.",

  image: null,

  highlights: [
    {
      value: "Ilulissat",
      label: "un fiordo lleno de icebergs",
      note: "Patrimonio de la humanidad: el glaciar que lo alimenta es de los más rápidos del mundo.",
    },
    {
      value: "Sin rutas",
      label: "entre los pueblos",
      note: "Se viaja en avión, helicóptero o barco, y el clima manda: conviene dejar días de margen.",
    },
    {
      value: "Sin Schengen",
      label: "una visa Schengen no sirve",
      note: "Es parte del Reino de Dinamarca, pero tiene reglas de entrada propias.",
    },
    {
      value: "Feb–Abr",
      label: "trineos de perros",
      note: "Con días más largos y frío seco. Las auroras, de septiembre a abril.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Groenlandia es parte del Reino de Dinamarca, pero no del espacio Schengen ni de la Unión Europea. Una visa Schengen no sirve para entrar: quien necesita visa pide una válida para Groenlandia, en una embajada o un consulado de Dinamarca.",
        "Muchos pasaportes entran sin visa. Verifica el tuyo, y también lo que pide la escala: casi todos los vuelos pasan por Dinamarca o Islandia.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "No hay rutas entre los pueblos. Se viaja en avión o en helicóptero, y en verano también en barco por la costa oeste.",
        "El clima atrasa o cancela vuelos con frecuencia: deja días de margen antes del vuelo internacional de vuelta, y no armes conexiones justas.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "Se usa la corona danesa. En los pueblos grandes la tarjeta funciona en casi todos lados; en los asentamientos pequeños conviene llevar efectivo.",
        "Es uno de los destinos más caros del mundo: casi todo llega en barco o en avión, y lo que más pesa son los vuelos internos y las excursiones.",
      ],
    },
    {
      id: "asentamientos",
      title: "Qué hay en los asentamientos",
      body: [
        "Fuera de los pueblos grandes hay asentamientos de pocas decenas o cientos de personas. Casi todos tienen una tienda general —por lo general un Pilersuisoq— que vende comida, ropa de abrigo y combustible y hace de correo, y muchos tienen una enfermería.",
        "Los horarios son cortos y los servicios, pocos: medicamentos, efectivo y lo esencial se resuelven en el pueblo grande antes de salir.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto es el verano: hay sol de medianoche al norte del círculo polar, se navega entre icebergs y se camina. De febrero a abril es la temporada de trineos de perros, con frío seco y días más largos. Las auroras se ven de septiembre a abril, con noches oscuras y cielo despejado.",
        "El invierno es largo, y en el norte y en el interior el frío es extremo. Al norte del círculo polar hay semanas sin sol en invierno y sin noche en verano.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Fuera de los pueblos no hay servicios ni señal de teléfono. Para caminar, navegar o salir al hielo se va con guía, o se deja la ruta y la fecha de regreso en el alojamiento.",
        "Los perros de trineo trabajan y no son mascotas: no se acercan sin permiso de su dueño.",
        "El agua corriente de los pueblos es potable.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Naturaleza",
      score: 10,
      rationale:
        "Icebergs, el casquete de hielo, fiordos y montañas sin gente.",
    },
    {
      dimension: "Aventura",
      score: 9.5,
      rationale:
        "Trineos de perros, kayak entre icebergs y caminatas de varios días.",
    },
    {
      dimension: "Cultura",
      score: 7.5,
      rationale:
        "La cultura inuit, con su idioma, su comida y sus pueblos de casas de colores.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Sin rutas entre los pueblos, vuelos caros y un clima que cambia los planes.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "De los destinos más caros del mundo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "La corona danesa está atada al euro.",
    },
  ],

  shines: [
    "Icebergs, glaciares y el casquete de hielo, sin multitudes.",
    "Trineos de perros, auroras y sol de medianoche.",
    "La cultura inuit, viva en cada pueblo.",
  ],

  costs: [
    "El precio: de los destinos más caros del mundo.",
    "Sin rutas: aviones y barcos que dependen del clima.",
    "El invierno largo y oscuro del norte.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima, que cambia mucho entre el sur, la costa oeste, el interior y el extremo norte. Los precios son órdenes de magnitud, no cotizaciones, y van en coronas danesas.",

  places: [
    {
      id: "nuuk",
      name: "Nuuk",
      region: "Sermersooq",
      tag: "Capital",
      blurb:
        "La capital, con museos, cafés, el puerto viejo y fiordos para navegar muy cerca. Tiene aeropuerto internacional desde fines de 2024. Es la base del planificador.",
      coords: [64.1814, -51.6941],
      featured: true,
      image: null,
    },
    {
      id: "ilulissat",
      name: "Ilulissat",
      region: "Avannaata",
      tag: "Fiordo de hielo",
      blurb:
        "El fiordo de hielo patrimonio de la humanidad, con icebergs gigantes a un paseo del pueblo y trineos de perros en invierno.",
      coords: [69.2198, -51.0986],
      image: null,
    },
    {
      id: "kangerlussuaq",
      name: "Kangerlussuaq",
      region: "Qeqqata",
      tag: "Puerta al hielo",
      blurb:
        "Una antigua base aérea tierra adentro, con un camino hasta el borde del casquete de hielo, bueyes almizcleros y un clima seco, de inviernos muy fríos.",
      coords: [67.0086, -50.6894],
      image: null,
    },
    {
      id: "sisimiut",
      name: "Sisimiut",
      region: "Qeqqata",
      tag: "Trineos y montaña",
      blurb:
        "La segunda ciudad del país, con trineos de perros en invierno y el final del Arctic Circle Trail, la caminata de varios días que llega desde Kangerlussuaq.",
      coords: [66.9395, -53.6735],
      image: null,
    },
    {
      id: "qaqortoq",
      name: "Qaqortoq",
      region: "Kujalleq",
      tag: "El sur",
      blurb:
        "El pueblo más grande del sur, con casas de colores, esculturas talladas en la roca y las ruinas nórdicas de Hvalsey cerca, en barco.",
      coords: [60.7184, -46.0356],
      image: null,
    },
    {
      id: "narsarsuaq",
      name: "Narsarsuaq",
      region: "Kujalleq",
      tag: "Glaciares y nórdicos",
      blurb:
        "Un asentamiento entre fiordos, con caminatas hasta un glaciar y, enfrente, Qassiarsuk, donde Erik el Rojo se instaló hace más de mil años.",
      coords: [61.1605, -45.4254],
      image: null,
    },
    {
      id: "tasiilaq",
      name: "Tasiilaq",
      region: "Sermersooq",
      tag: "La costa este",
      blurb:
        "El pueblo más grande de la costa este, entre montañas y hielo, con un dialecto y una cultura propios. Se llega en avión a Kulusuk y de ahí en helicóptero o barco.",
      coords: [65.6145, -37.6368],
      image: null,
    },
    {
      id: "uummannaq",
      name: "Uummannaq",
      region: "Avannaata",
      tag: "La montaña corazón",
      blurb:
        "Un pueblo en una isla del norte, al pie de una montaña con forma de corazón. En invierno, cuando el mar se congela, se sale en trineo.",
      coords: [70.6747, -52.1264],
      image: null,
    },
    {
      id: "qaanaaq",
      name: "Qaanaaq",
      region: "Avannaata",
      tag: "El extremo norte",
      blurb:
        "Uno de los pueblos más al norte del mundo, de cazadores que todavía viajan en trineo de perros. Remoto de verdad: pocos vuelos y servicios mínimos.",
      coords: [77.484, -69.333],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Groenlandia pide capas en cualquier época: en verano, ropa térmica, polar, una chaqueta impermeable y calzado de montaña; en invierno, abrigo de expedición, gorro, guantes y botas para la nieve. Y días de margen: el clima manda en los vuelos.",
    keyPoints: [
      "Frío todo el año en el norte y el interior; el verano de la costa es fresco.",
      "No hay rutas entre los pueblos: aviones, helicópteros y barcos que dependen del clima.",
      "Una visa Schengen no sirve para entrar.",
      "Es uno de los destinos más caros del mundo.",
    ],
    adviceByBucket: {
      frio: "Abrigo de plumas o de expedición, ropa térmica, gorro, guantes, bufanda y botas para la nieve con suela que agarre. En el norte y en el interior, el frío es extremo.",
      fresco:
        "Capas: ropa térmica, polar y una chaqueta impermeable y contra el viento. Gorro y guantes ligeros, también en verano.",
      templado:
        "Un polar y una chaqueta impermeable: los días templados del sur cambian rápido con el viento.",
      calido:
        "En Groenlandia no hace calor de verdad: aun en los mejores días, lleva una capa de abrigo.",
    },
    plug: {
      types: "Tipo C, tipo F y tipo K",
      voltage: "230 V, 50 Hz",
      note: "Es el enchufe danés, donde también entra el europeo de dos clavijas redondas. Si vienes de un país con 110-120 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Deja días de margen",
          body: "Antes del vuelo internacional de vuelta: el clima atrasa los vuelos internos.",
        },
        {
          title: "Sal con guía al hielo y al mar",
          body: "Fuera de los pueblos no hay señal ni rescate rápido.",
        },
        {
          title: "Avisa tu ruta y tu regreso",
          body: "Si caminas por tu cuenta, deja el plan y la fecha de vuelta en el alojamiento.",
        },
        {
          title: "Prueba la comida local",
          body: "Pescado del Ártico, cordero del sur, buey almizclero y, si te animas, mattak, la piel de ballena.",
        },
        {
          title: "Lleva efectivo a los asentamientos",
          body: "En los pueblos pequeños la tarjeta no siempre funciona.",
        },
        {
          title: "Lleva un antifaz en verano",
          body: "Al norte del círculo polar, en junio y julio no oscurece.",
        },
      ],
      donts: [
        {
          title: "No te acerques a los icebergs",
          body: "Se vuelcan o se parten sin aviso y levantan olas: se miran de lejos, también en kayak.",
        },
        {
          title: "No toques a los perros de trineo",
          body: "Trabajan y no son mascotas: solo con permiso de su dueño, y nunca con niños solos.",
        },
        {
          title: "No camines sobre el mar congelado sin guía",
          body: "El espesor del hielo cambia y no se ve.",
        },
        {
          title: "No armes conexiones justas",
          body: "Un vuelo interno atrasado puede hacerte perder el internacional.",
        },
        {
          title: "No compres artesanías de animales sin preguntar",
          body: "Las de foca, ballena o narval tienen reglas de exportación, y tu país puede prohibir que entren.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una capa de abrigo van en el equipaje de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Antes de reservar",
        notice: {
          tone: "warn",
          title: "Una visa Schengen no sirve",
          body: "Groenlandia no es parte del espacio Schengen. Si tu pasaporte necesita visa, pide una válida para Groenlandia en una embajada o un consulado de Dinamarca, y revisa también lo que pide la escala.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente",
          "Visa válida para Groenlandia, si tu pasaporte la necesita",
          "Lo que pida el país de la escala, si es Dinamarca o Islandia",
          "Seguro de viaje con cobertura médica y evacuación",
          "Días de margen antes del vuelo de vuelta",
        ],
      },
      {
        id: "abrigo",
        title: "Frío y nieve",
        notice: {
          tone: "info",
          title: "Capas, no un solo abrigo",
          body: "La temperatura cambia mucho entre afuera y adentro, y entre el sol y el viento: varias capas sirven más que una prenda gruesa.",
        },
        summary: "Lo que pide el frío",
        items: [
          "Ropa térmica de lana o sintética",
          "Polar o abrigo de plumas",
          "Chaqueta y pantalón impermeables y contra el viento",
          "Gorro, guantes y bufanda o cuello",
          "Botas impermeables con suela que agarre",
          "Gafas de sol: el reflejo del hielo y la nieve es fuerte",
        ],
      },
      {
        id: "remoto",
        title: "Lugares remotos",
        notice: {
          tone: "warn",
          title: "Sin señal ni servicios",
          body: "Fuera de los pueblos no hay señal de teléfono ni rescate rápido. Se sale con guía o con la ruta avisada.",
        },
        summary: "Para salir de los pueblos",
        items: [
          "Efectivo para los asentamientos",
          "Medicación para todo el viaje, con receta",
          "Batería portátil y linterna frontal",
          "Antifaz para el sol de medianoche, en verano",
          "Comida para un día más, por si el clima atrasa la vuelta",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Protector solar y bálsamo labial con filtro: el sol rebota en el hielo",
          "Algo para el mareo, si vas a navegar",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador al enchufe europeo, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el equipaje de mano: el frío descarga las baterías rápido",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte de cada menor; si viaja con un solo progenitor, la autorización que pida tu país",
          "Ropa de abrigo a su medida, con capas y guantes de repuesto",
          "Algo para entretenerse si un vuelo se atrasa",
        ],
      },
    ],
    avoid: [
      {
        leave: "Un solo abrigo grueso",
        why: "Adentro hace calor y afuera el clima cambia: no se puede ajustar.",
        instead: "Capas: térmica, polar y una chaqueta contra el viento.",
      },
      {
        leave: "Algodón como primera capa",
        why: "Guarda la humedad del sudor y enfría.",
        instead: "Ropa térmica de lana o sintética.",
      },
      {
        leave: "Calzado de ciudad",
        why: "Hay nieve, hielo y caminos de piedra.",
        instead: "Botas impermeables con suela que agarre.",
      },
      {
        leave: "Paraguas",
        why: "Con el viento no sirve.",
        instead: "Una chaqueta impermeable con capucha.",
      },
      {
        leave: "Muchos euros o dólares en efectivo",
        why: "Se usa la corona danesa, y en los pueblos casi no hay dónde cambiar.",
        instead:
          "Una tarjeta sin cargos en el exterior y algo de coronas para los asentamientos.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en el hielo ni en el barco.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Depende del pasaporte. Muchos entran sin visa; los que la necesitan piden una válida para Groenlandia, porque una visa Schengen no sirve. Verifica también lo que pide la escala, casi siempre en Dinamarca o Islandia.",
      },
      {
        question: "¿Cómo se viaja entre los pueblos?",
        answer:
          "En avión o en helicóptero, y en verano también en barco por la costa oeste. No hay rutas entre los pueblos.",
      },
      {
        question: "¿Cuándo se ven las auroras?",
        answer:
          "De septiembre a abril, con noches oscuras y cielo despejado. Kangerlussuaq, con su clima seco, es de los mejores lugares.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a agosto para caminar, navegar y ver icebergs con sol de medianoche. De febrero a abril, para los trineos de perros y las auroras.",
      },
      {
        question: "¿Qué se come?",
        answer:
          "Pescado y mariscos del Ártico, cordero del sur, buey almizclero, reno y, para probar, mattak: piel de ballena con su grasa.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer: "Sí, en los pueblos.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es el europeo de clavijas redondas, sí. El voltaje es 230 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
