import type { DestinationGuide } from "./types";

/**
 * Guía de Nepal.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la altura como clima. Namche Bazar, a casi tres mil
 * quinientos metros en la ruta del Everest, pasa el invierno bajo cero, y Jomsom
 * queda a la sombra del monzón. El mal de altura y las reglas de trekking (guía
 * con licencia en muchas rutas desde 2023) se dicen como preparación, no como
 * alerta. Los precios suben con la altura: el factor de Namche es el más alto
 * del país.
 */
export const nepal: DestinationGuide = {
  slug: "nepal",
  country: "Nepal",
  subregion: "Asia del Sur",
  subhead:
    "El Himalaya desde la ventana, templos y plazas de ladrillo en el valle de Katmandú, lagos con vista a los Annapurna, rinocerontes en la selva de Chitwan y el lugar donde nació Buda. El país de las montañas más altas del mundo.",

  image: null,

  highlights: [
    {
      value: "8 de 14",
      label: "montañas de más de 8.000 m del mundo están en Nepal",
      note: "El Everest, el Annapurna, el Lhotse y el Manaslu, entre otras. La altura cambia todo: el clima, la valija y el ritmo del viaje.",
    },
    {
      value: "Everest",
      label: "el campamento base, a días de caminata",
      note: "La ruta pasa por Namche Bazar y monasterios sherpas. Se vuela a Lukla, un aeropuerto de montaña donde los vuelos dependen del tiempo.",
    },
    {
      value: "Octubre",
      label: "el cielo más claro del año",
      note: "Después del monzón, octubre y noviembre traen montañas sin nubes; marzo y abril, los rododendros en flor.",
    },
    {
      value: "Dal bhat",
      label: "la comida de todos los días, con repetición",
      note: "Arroz, lentejas y verduras con curry. En casi todos lados vuelven a servirte sin que lo pidas.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Nepal",
      body: [
        "Casi todos los pasaportes latinoamericanos sacan la visa de turista a la llegada, completando antes un formulario online, o la tramitan antes en un consulado. Verificá el tuyo antes de comprar el pasaje.",
        "La visa a la llegada se paga en el aeropuerto: llevá dólares en billetes sanos por si la tarjeta no funciona. El pasaporte tiene que tener vigencia de sobra.",
        "Para el trekking hacen falta permisos de los parques y áreas de conservación, y desde 2023 muchas rutas piden ir con un guía con licencia. Fijate qué rige para la tuya.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Nepal",
      body: [
        "La moneda es la rupia nepalesa. El efectivo manda: la tarjeta funciona en hoteles y restaurantes de Katmandú y Pokhara, y casi en ningún otro lado.",
        "Los cajeros de Katmandú y Pokhara aceptan tarjetas extranjeras, con un cargo por extracción. En la montaña casi no hay: llevá todo el efectivo del trekking desde la ciudad.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí rupias: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "La altura manda",
      body: [
        "Nepal es hemisferio norte. Katmandú, a mil cuatrocientos metros, tiene inviernos secos con noches frías y veranos templados; Chitwan y Lumbini, en la llanura del sur, son calurosos antes del monzón.",
        "El monzón, de junio a septiembre, llueve casi todos los días y tapa las montañas con nubes. En los senderos bajos aparecen sanguijuelas y los caminos se cortan.",
        "Arriba de los tres mil metros, como en Namche Bazar, las noches están bajo cero buena parte del año. Jomsom, detrás de los Annapurna, queda a la sombra del monzón y casi no llueve.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Octubre y noviembre: cielo claro, montañas a la vista y temperaturas agradables. Es la mejor época para el trekking y la más llena.",
        "Marzo, abril y mayo son la segunda temporada, con los rododendros en flor. Dashain y Tihar, las grandes fiestas de otoño, cierran negocios varios días.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Nepal",
      body: [
        "Entre Katmandú, Pokhara y Chitwan, colectivos turísticos por rutas de montaña lentas, o vuelos internos cortos. A Lukla, para el Everest, solo en avión.",
        "Los vuelos de montaña dependen del tiempo y se demoran seguido: dejá días de margen antes de un vuelo internacional.",
        "Arriba de los tres mil metros, el mal de altura es la precaución principal: subir despacio, dormir pocas veces más alto por día y bajar si los síntomas empeoran.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Las plazas reales del valle de Katmandú, Bhaktapur, las estupas budistas y Lumbini.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Dal bhat, momos y la cocina newar del valle; en la montaña, menús simples.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "El Himalaya: las montañas más altas del mundo, a la vista desde muchos pueblos.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "Nepal no tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "Comer y dormir sale muy poco; los permisos, los guías y los vuelos de montaña suman.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Rutas lentas, vuelos que dependen del tiempo y trekking con permisos y guía.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "La rupia está atada a la de India y los precios son estables, aunque suben con la altura.",
    },
  ],

  shines: [
    "Las montañas más altas del mundo.",
    "Templos y pueblos antiguos en el valle de Katmandú.",
    "Muy barato y hospitalario.",
  ],

  costs: [
    "El monzón tapa las montañas de junio a septiembre.",
    "Rutas lentas y vuelos de montaña inciertos.",
    "La altura pide tiempo y cuidado.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Katmandú que Chitwan o Namche Bazar, a casi tres mil quinientos metros. Los precios están en rupias nepalesas y son órdenes de magnitud; en la montaña, más altos.",

  places: [
    {
      id: "katmandu",
      name: "Katmandú",
      region: "Bagmati",
      tag: "El valle de los templos",
      blurb:
        "La plaza Durbar, la estupa de Boudhanath, el templo de los monos de Swayambhunath y Pashupatinath sobre el río. Es la base del planificador: inviernos secos con noches frías, monzón de junio a septiembre.",
      coords: [27.7172, 85.324],
      featured: true,
      image: null,
    },
    {
      id: "pokhara",
      name: "Pokhara",
      region: "Gandaki",
      tag: "El lago y los Annapurna",
      blurb:
        "Un lago con los Annapurna reflejados, parapente, la pagoda de la paz y el punto de partida de los trekkings del oeste.",
      coords: [28.2096, 83.9856],
      image: null,
    },
    {
      id: "bhaktapur",
      name: "Bhaktapur",
      region: "Bagmati",
      tag: "La ciudad medieval",
      blurb:
        "Plazas de ladrillo, pagodas de madera tallada, alfareros en la calle y el yogur cuajado del rey. Patrimonio de la humanidad.",
      coords: [27.671, 85.4298],
      image: null,
    },
    {
      id: "chitwan",
      name: "Parque Nacional de Chitwan",
      region: "Bagmati",
      tag: "Rinocerontes y selva",
      blurb:
        "Selva y pastizales con rinocerontes, cocodrilos y, con suerte, tigres, en safaris en 4x4, canoa o a pie. Caluroso antes del monzón.",
      coords: [27.578, 84.494],
      image: null,
    },
    {
      id: "lumbini",
      name: "Lumbini",
      region: "Lumbini",
      tag: "Donde nació Buda",
      blurb:
        "El jardín sagrado del nacimiento de Buda, con monasterios de todos los países budistas. Patrimonio de la humanidad. De lo más caluroso del país en mayo.",
      coords: [27.4833, 83.276],
      image: null,
    },
    {
      id: "nagarkot",
      name: "Nagarkot",
      region: "Bagmati",
      tag: "El amanecer sobre el Himalaya",
      blurb:
        "Un mirador a más de dos mil metros, al borde del valle, para ver amanecer sobre la cordillera. Noches frías en invierno.",
      coords: [27.715, 85.52],
      image: null,
    },
    {
      id: "bandipur",
      name: "Bandipur",
      region: "Gandaki",
      tag: "El pueblo de montaña",
      blurb:
        "Un pueblo newar sin autos en la calle principal, con casas antiguas y vista a la cordillera, a mitad de camino entre Katmandú y Pokhara.",
      coords: [27.938, 84.408],
      image: null,
    },
    {
      id: "namche-bazar",
      name: "Namche Bazar (Everest)",
      region: "Koshi",
      tag: "La capital sherpa",
      blurb:
        "Un pueblo en anfiteatro a casi tres mil quinientos metros, parada de aclimatación en la ruta al campamento base del Everest. Bajo cero buena parte del año de noche.",
      coords: [27.805, 86.714],
      image: null,
    },
    {
      id: "jomsom",
      name: "Jomsom (Mustang)",
      region: "Gandaki",
      tag: "Detrás de los Annapurna",
      blurb:
        "Un valle seco y ventoso a casi tres mil metros, en el circuito de los Annapurna y la puerta al Mustang. Casi no llueve en el monzón.",
      coords: [28.78, 83.73],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Nepal depende de la altura. Para Katmandú y Pokhara, ropa liviana de día y un buzo y una campera para la noche, que en invierno es fría. Para el trekking, capas: térmica, polar, campera de pluma y una impermeable, gorro, guantes y botas ya usadas. En el monzón, todo impermeable. Siempre, efectivo en rupias para la montaña y algo que cubra hombros y rodillas para los templos.",
    keyPoints: [
      "Hemisferio norte: la mejor época es octubre y noviembre; el monzón va de junio a septiembre.",
      "La altura manda: arriba de los tres mil metros, las noches están bajo cero.",
      "El trekking pide permisos y, en muchas rutas, guía con licencia.",
      "En la montaña no hay cajeros: llevá el efectivo desde la ciudad.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, protector, repelente y mucha agua para Chitwan y Lumbini antes del monzón. En el monzón, todo impermeable.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el otoño y la primavera de Katmandú y Pokhara, la mejor época.",
      fresco:
        "Capas, un polar y una campera para las mañanas y noches del valle en invierno y para los pueblos de montaña.",
      frio: "Campera de pluma, térmicas, gorro, guantes y bolsa de dormir abrigada para el trekking. Arriba de los tres mil metros, las noches están bajo cero.",
    },
    plug: {
      types: "Tipo C, tipo D y tipo M",
      voltage: "230 V, 50 Hz",
      note: "El tipo C es el de dos patas redondas finas; los D y M tienen tres patas redondas gruesas. Un adaptador universal resuelve los tres. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Subí despacio en la montaña",
          body: "Arriba de los tres mil metros, días de aclimatación y pocas subidas por día. Si los síntomas empeoran, se baja.",
        },
        {
          title: "Dejá días de margen para Lukla",
          body: "Los vuelos de montaña se demoran por el tiempo. Nada de vuelos internacionales al día siguiente.",
        },
        {
          title: "Caminá las estupas en sentido horario",
          body: "Boudhanath y Swayambhunath se rodean como lo hacen los fieles, haciendo girar las ruedas de oración.",
        },
        {
          title: "Llevá el efectivo del trekking",
          body: "En la montaña casi no hay cajeros, y los que hay fallan seguido.",
        },
        {
          title: "Contratá un guía con licencia",
          body: "En muchas rutas es obligatorio, y en todas suma: conocen el camino, los albergues y la altura.",
        },
        {
          title: "Elegí pagar en rupias",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subas rápido a la altura",
          body: "El mal de altura no depende del estado físico: depende de cuánto subís por día.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Ni en la ciudad ni en la montaña: embotellada, hervida o con pastillas o filtro.",
        },
        {
          title: "No entres calzado a un templo",
          body: "Te sacás los zapatos, y en algunos no se entra con cuero. Hombros y rodillas cubiertos.",
        },
        {
          title: "No le saques fotos a las cremaciones de cerca",
          body: "En Pashupatinath se miran desde la otra orilla, con respeto.",
        },
        {
          title: "No hagas trekking en el monzón sin prepararte",
          body: "De junio a septiembre hay barro, sanguijuelas, nubes y caminos cortados.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "trekking",
        title: "Para el trekking",
        notice: {
          tone: "info",
          title: "Capas, no un solo abrigo",
          body: "De día se camina con calor y de noche se duerme bajo cero. Lo que no lleves en la mochila se alquila o se compra en Katmandú.",
        },
        summary: "Lo que pide la montaña",
        items: [
          "Botas de trekking ya usadas",
          "Térmicas, polar y campera de pluma",
          "Campera y pantalón impermeables",
          "Gorro, guantes y anteojos de sol",
          "Pastillas o filtro para el agua",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y permisos",
        notice: {
          tone: "warn",
          title: "Visa y permisos de trekking",
          body: "Casi todos los pasaportes sacan la visa a la llegada, y el trekking pide permisos y, en muchas rutas, guía con licencia. Verificalo antes de viajar.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Fotos carnet para la visa y los permisos",
          "Dólares en billetes sanos para la visa",
          "Los permisos de la ruta de trekking",
          "Seguro de viaje que cubra rescate en altura",
        ],
      },
      {
        id: "templos",
        title: "Templos y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Calzado fácil de sacar",
          "Un pañuelo liviano",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Sales de rehidratación y algo para el estómago",
          "Lo que te indique tu médico para la altura",
          "Protector solar y labial para la montaña",
        ],
      },
    ],
    avoid: [
      {
        leave: "Botas nuevas para el trekking",
        why: "En días de caminata, una bota sin usar lastima.",
        instead: "Botas ya usadas en caminatas largas.",
      },
      {
        leave: "Un solo abrigo pesado",
        why: "De día se camina con calor y de noche hace mucho frío.",
        instead: "Capas: térmica, polar y campera de pluma.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Katmandú y Pokhara se paga en efectivo, y en la montaña no hay cajeros.",
        instead: "Rupias en efectivo para todo el trekking.",
      },
      {
        leave: "Ropa de algodón para la montaña",
        why: "Mojada de transpiración, no se seca y enfría.",
        instead: "Ropa sintética o de lana merino.",
      },
      {
        leave: "Una valija con rueditas para la montaña",
        why: "En los senderos no hay rutas: lo llevan porteadores o vos.",
        instead: "Una mochila o un bolso de trekking.",
      },
      {
        leave: "El secador de pelo",
        why: "En la montaña la electricidad es escasa, y si es de 110 V puede quemarse a 230 V.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Nepal?",
        answer:
          "Casi todos los pasaportes latinoamericanos la sacan a la llegada, completando antes un formulario online. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Octubre y noviembre, con el cielo más claro. Marzo, abril y mayo, la segunda temporada.",
      },
      {
        question: "¿Necesito guía para el trekking?",
        answer:
          "En muchas rutas sí, desde 2023, con licencia. Y los permisos de los parques se tramitan antes de salir.",
      },
      {
        question: "¿Qué pasa con la altura?",
        answer:
          "Arriba de los tres mil metros hay que subir despacio y aclimatarse. Hablá con tu médico antes del viaje.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Nepal usa los tipos C, D y M a 230 V; un adaptador universal los resuelve.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí, es habitual: en restaurantes, y a guías y porteadores al final del trekking.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: embotellada, hervida o tratada con pastillas o filtro.",
      },
      {
        question: "¿Cómo llego al Everest?",
        answer:
          "En avión a Lukla y caminando varios días por Namche Bazar. Dejá días de margen: los vuelos dependen del tiempo.",
      },
    ],
  },
};
