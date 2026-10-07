import type { DestinationGuide } from "./types";

/**
 * Guía de Grecia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el verano mediterráneo en estado puro, con ruinas
 * sin sombra y un viento de verano, el meltemi, que refresca las islas y
 * cancela ferries. Y una temporada con fecha: fuera de ella, muchas islas
 * chicas cierran.
 */
export const grecia: DestinationGuide = {
  slug: "grecia",
  country: "Grecia",
  subregion: "Europa del Sur",
  subhead:
    "Historia antigua, islas de agua transparente y tabernas junto al mar. El verano es largo, seco y muy caluroso; el invierno, suave en la costa y frío de verdad en el norte.",

  image: null,

  highlights: [
    {
      value: "6.000",
      label: "islas e islotes",
      note: "Solo unas doscientas están habitadas. Elegir pocas y conectarlas bien en ferry es la mitad del viaje.",
    },
    {
      value: "34 °C",
      label: "de máxima en Atenas en julio",
      note: "Es el promedio de las máximas. La Acrópolis se sube temprano: al mediodía el mármol refleja el calor y no hay sombra.",
    },
    {
      value: "Meltemi",
      label: "el viento del Egeo en verano",
      note: "Sopla fuerte en julio y agosto en las Cícladas: refresca las tardes, pero puede demorar o cancelar ferries.",
    },
    {
      value: "Nov–Mar",
      label: "muchas islas cierran",
      note: "Fuera de temporada muchos hoteles, restaurantes y ferries de las islas chicas no funcionan. Atenas y Creta siguen vivas todo el año.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Grecia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Grecia, Italia y España en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Grecia",
      body: [
        "La moneda es el euro. La tarjeta se acepta en casi todos lados en las ciudades y en las islas grandes; en tabernas, kioscos y pueblos chicos el efectivo sigue siendo lo más práctico.",
        "Los alojamientos cobran una tasa por noche, más alta en temporada, que no siempre está incluida en el precio de la reserva. La propina es opcional: redondear en las tabernas es lo habitual.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Sol, mar y viento",
      body: [
        "Grecia es hemisferio norte: enero es invierno y julio, verano. Los veranos son largos, secos y muy calurosos —Atenas pasa los treinta y tres grados en julio— y los inviernos, suaves y lluviosos en la costa y en las islas.",
        "En las Cícladas, en julio y agosto, sopla el meltemi, un viento del norte que refresca y agita el mar. Engaña: con viento el sol se siente menos, pero quema igual.",
        "El norte y el interior tienen otro clima. Tesalónica y Meteora tienen inviernos fríos, con heladas y alguna nevada, y veranos tan calurosos como Atenas.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Mayo, junio, septiembre y principios de octubre son los mejores meses: el mar está templado, el calor se soporta y hay menos gente.",
        "Julio y agosto son temporada alta: calor fuerte, precios altos y las islas famosas llenas. El 15 de agosto es feriado nacional y todo el país viaja.",
        "De noviembre a marzo muchas islas chicas entran en pausa, con hoteles y restaurantes cerrados y menos ferries. Atenas, Tesalónica y Creta funcionan todo el año.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse entre islas y continente",
      body: [
        "Entre islas se viaja en ferry, desde los puertos de Atenas o entre islas cercanas. Los horarios cambian entre verano e invierno y el viento puede cancelar salidas; para Creta y Rodas también hay vuelos.",
        "En Atenas, el metro une el aeropuerto, el puerto de El Pireo y el centro histórico. Para el continente —Delfos, Meteora, el Peloponeso— el auto da libertad, y los buses llegan a los sitios principales.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en el metro de Atenas y en las zonas concurridas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Historia antigua",
      score: 10,
      rationale:
        "La Acrópolis, Delfos, Olimpia, Micenas y Cnosos. La cuna de la civilización occidental, a la vista.",
    },
    {
      dimension: "Islas y playas",
      score: 10,
      rationale:
        "Cientos de islas habitadas con aguas transparentes, cada una con su carácter: de Santorini a Creta.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Cocina mediterránea sencilla y excelente, en tabernas donde se come bien sin gastar mucho.",
    },
    {
      dimension: "Vida al aire libre",
      score: 9,
      rationale:
        "Terrazas, tabernas junto al mar y noches templadas de mayo a octubre.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Accesible en el continente y en las islas grandes. Santorini y Mykonos en verano juegan en otra liga de precios.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Los ferries conectan casi todo, pero los horarios cambian con la temporada y el viento. Combinar islas requiere planificar.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "El euro y precios estables. En las islas chicas conviene llevar efectivo.",
    },
  ],

  shines: [
    "Historia antigua y playas en el mismo viaje.",
    "Islas para todos los gustos, de las famosas a las tranquilas.",
    "Comer bien a buen precio en cualquier taberna.",
  ],

  costs: [
    "El calor de julio y agosto en Atenas y el continente.",
    "Santorini y Mykonos en temporada alta: llenas y muy caras.",
    "Ferries que dependen del viento y de horarios que cambian.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Meteora en enero no pide lo mismo que Rodas. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "atenas",
      name: "Atenas",
      region: "Atenas",
      tag: "La Acrópolis",
      blurb:
        "La Acrópolis sobre la ciudad, barrios como Plaka y Monastiraki y museos de primer nivel. Es la base del planificador: invierno suave y lluvioso, verano muy caluroso y seco.",
      coords: [37.9838, 23.7275],
      featured: true,
      image: null,
    },
    {
      id: "santorini",
      name: "Santorini",
      region: "Islas del Egeo",
      tag: "Atardeceres sobre el cráter",
      blurb:
        "Pueblos blancos colgados sobre una caldera volcánica, con los atardeceres más famosos del Egeo. Muy cara y llena en verano, y con viento.",
      coords: [36.3932, 25.4615],
      image: null,
    },
    {
      id: "mykonos",
      name: "Mykonos",
      region: "Islas del Egeo",
      tag: "Playas y noche",
      blurb:
        "Molinos, callejuelas blancas y la vida nocturna más intensa de las islas. Una de las más caras del país en temporada alta.",
      coords: [37.4467, 25.3289],
      image: null,
    },
    {
      id: "creta",
      name: "Creta",
      region: "Creta",
      tag: "La isla grande",
      blurb:
        "La isla más grande de Grecia: el palacio de Cnosos, gargantas para caminar, playas de todo tipo y una cocina propia. Tiene la temporada más larga del país.",
      coords: [35.5138, 24.018],
      image: null,
    },
    {
      id: "rodas",
      name: "Rodas",
      region: "Islas del Egeo",
      tag: "Ciudad medieval",
      blurb:
        "Una ciudad amurallada de los caballeros cruzados, playas y pueblos como Lindos. Muy soleada, con temporada larga.",
      coords: [36.4341, 28.2176],
      image: null,
    },
    {
      id: "corfu",
      name: "Corfú",
      region: "Islas Jónicas",
      tag: "Verde y veneciana",
      blurb:
        "La isla más verde de Grecia, con un casco antiguo de herencia veneciana. Más lluviosa en invierno y muy agradable en primavera.",
      coords: [39.6243, 19.9217],
      image: null,
    },
    {
      id: "tesalonica",
      name: "Tesalónica",
      region: "Continente",
      tag: "Ciudad viva",
      blurb:
        "La segunda ciudad del país, con murallas bizantinas, paseo marítimo y la mejor vida estudiantil y gastronómica del norte. Inviernos fríos de verdad.",
      coords: [40.6401, 22.9444],
      image: null,
    },
    {
      id: "meteora",
      name: "Meteora",
      region: "Continente",
      tag: "Monasterios en el aire",
      blurb:
        "Monasterios ortodoxos encaramados en columnas de roca, en el interior del país. Calor seco en verano y frío, a veces con nieve, en invierno.",
      coords: [39.7217, 21.6306],
      image: null,
    },
    {
      id: "nauplia",
      name: "Nauplia y el Peloponeso",
      region: "Continente",
      tag: "Puerto y fortalezas",
      blurb:
        "Una ciudad de puerto con fortalezas venecianas, base para Micenas, Epidauro y el resto del Peloponeso.",
      coords: [37.5673, 22.8015],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Grecia es verano largo: de mayo a octubre, ropa liviana, traje de baño, sombrero y protector, con un buzo para las noches con viento de las islas. Julio y agosto pasan los treinta y tres grados en Atenas y el continente. El invierno es suave y lluvioso en la costa y en las islas, pero frío de verdad en el norte y en el interior, donde puede nevar. Para las ruinas y los pueblos de las islas, calzado con buena suela: mármol pulido y escalones de piedra.",
    keyPoints: [
      "Hemisferio norte: el verano va de junio a septiembre y es seco y muy caluroso; el invierno, de diciembre a febrero, suave y lluvioso en la costa.",
      "En las Cícladas el meltemi, un viento fuerte de verano, refresca las tardes y puede cancelar ferries.",
      "El norte y el interior —Tesalónica, Meteora— tienen inviernos fríos, con heladas y alguna nevada.",
      "Para entrar a monasterios e iglesias ortodoxas hay que cubrir hombros y rodillas.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de algodón o lino, sombrero, anteojos de sol y protector alto. Las ruinas no tienen sombra: andá temprano y con agua.",
      templado:
        "Ropa liviana de día y un buzo o una campera fina para la noche, sobre todo en las islas con viento. Es el mejor clima del año: mayo, junio, septiembre y octubre.",
      fresco:
        "Capas, un sweater y una campera que corte el viento. En invierno llueve en la costa, así que sumá algo impermeable.",
      frio: "Abrigo de verdad, gorro y guantes. En Tesalónica y en el interior el invierno es frío y puede nevar, y muchas casas de las islas no están preparadas para el frío.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Subí a la Acrópolis a primera hora",
          body: "A la apertura hay menos gente y menos calor. Al mediodía de verano el mármol refleja el sol y no hay sombra.",
        },
        {
          title: "Reservá los ferries en verano",
          body: "En julio y agosto los barcos a las islas más pedidas se llenan, sobre todo los rápidos. Comprá con anticipación y dejá margen por si el viento cancela alguno.",
        },
        {
          title: "Elegí pocas islas",
          body: "Cada traslado en ferry se come medio día. Dos o tres islas bien combinadas rinden más que cinco a las corridas.",
        },
        {
          title: "Llevá efectivo a las islas chicas",
          body: "En tabernas, kioscos y pueblos chicos el efectivo sigue siendo lo más práctico, aunque la tarjeta avanza.",
        },
        {
          title: "Llevá algo para cubrir hombros y rodillas",
          body: "Los monasterios de Meteora y muchas iglesias lo piden. Un pañuelo en la mochila alcanza.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No tires el papel al inodoro",
          body: "En gran parte del país las cañerías son finas: el papel va al tacho que está al lado. Es la regla, no una excepción.",
        },
        {
          title: "No subestimes el sol con viento",
          body: "En las islas el viento disimula el calor, pero el sol quema igual. Protector, sombrero y agua, siempre.",
        },
        {
          title: "No vayas a las islas chicas fuera de temporada sin chequear",
          body: "De noviembre a marzo muchos hoteles, restaurantes y ferries no funcionan. Revisá qué está abierto antes de reservar.",
        },
        {
          title: "No camines por las ruinas con suela lisa",
          body: "El mármol de los sitios antiguos está pulido por siglos de pisadas y resbala. Calzado con buena suela.",
        },
        {
          title: "No dejes el ferry de vuelta para el día del vuelo",
          body: "El viento puede demorar o cancelar barcos. Volvé a Atenas al menos un día antes de tu vuelo internacional.",
        },
        {
          title: "No descuides la mochila en el metro de Atenas",
          body: "En el metro y en las zonas más turísticas hay carteristas. Mochila adelante y el teléfono a mano.",
        },
      ],
    },
    checklists: [
      {
        id: "sol",
        title: "Sol y calor",
        notice: {
          tone: "warn",
          title: "El sol del Egeo quema rápido",
          body: "En verano las ruinas y las playas no tienen sombra, y el viento disimula el calor. Sin protector, sombrero y agua, el primer día te pasa factura.",
        },
        summary: "Lo que pide el verano griego",
        items: [
          "Protector solar de factor alto",
          "Sombrero y anteojos de sol",
          "Botella reutilizable",
          "Ropa liviana de algodón o lino",
          "Calzado con buena suela para las ruinas",
        ],
      },
      {
        id: "islas",
        title: "Islas y ferries",
        notice: {
          tone: "info",
          title: "El viento manda",
          body: "En verano el meltemi puede demorar o cancelar ferries. Dejá un día de margen antes de tu vuelo de regreso.",
        },
        summary: "Si vas a saltar de isla en isla",
        items: [
          "Pastillas para el mareo, si te cuesta el barco",
          "Buzo o campera liviana para la cubierta y las noches",
          "Traje de baño y toalla de microfibra",
          "Ojotas o sandalias para la playa",
          "Efectivo para las islas chicas",
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
          "Funda resistente al agua para el teléfono, para la playa y el barco",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el estómago",
          "Crema para después del sol",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Zapatos de suela lisa",
        why: "El mármol de las ruinas y los escalones de las islas resbalan.",
        instead: "Zapatillas o sandalias con buena suela.",
      },
      {
        leave: "Un abrigo pesado en verano",
        why: "De junio a septiembre las noches son templadas; solo el viento refresca.",
        instead: "Un buzo liviano.",
      },
      {
        leave: "Ropa de verano para el invierno del norte",
        why: "Tesalónica y el interior tienen inviernos fríos, con heladas.",
        instead: "Abrigo medio y capas.",
      },
      {
        leave: "Una valija grande con ruedas",
        why: "Los pueblos de las islas tienen escalones y callejuelas de piedra, y en los ferries hay que cargarla.",
        instead: "Una valija chica o una mochila.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Monasterios e iglesias piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho y casi todos los alojamientos dan una.",
        instead: "Una de microfibra para la playa.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Grecia?",
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
          "Mayo, junio, septiembre y principios de octubre: mar templado, menos calor y menos gente. Julio y agosto son muy calurosos y caros en las islas.",
      },
      {
        question: "¿Cómo me muevo entre islas?",
        answer:
          "En ferry, desde los puertos de Atenas o entre islas cercanas. Para Creta y Rodas también hay vuelos. En verano conviene reservar.",
      },
      {
        question: "¿Hace calor en invierno?",
        answer:
          "No: es suave en la costa y en las islas, con lluvia, y frío en el norte y el interior. No es temporada de playa.",
      },
      {
        question: "¿Se puede tirar el papel al inodoro?",
        answer:
          "En gran parte del país, no: las cañerías son finas y el papel va al tacho que está al lado. Algunos hoteles nuevos avisan que sí se puede.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Atenas y en las ciudades grandes, sí. En muchas islas el agua es desalinizada o de calidad variable, y se toma embotellada.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo en las tabernas si te atendieron bien es lo habitual.",
      },
    ],
  },
};
