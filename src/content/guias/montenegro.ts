import type { DestinationGuide } from "./types";

/**
 * Guía de Montenegro.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: usa el euro sin ser Unión Europea ni Schengen, así
 * que la entrada tiene reglas propias y los días no se descuentan del cupo de
 * 90. Y es dos climas a pocas horas: la costa mediterránea y la alta montaña de
 * Durmitor, con nieve en invierno.
 */
export const montenegro: DestinationGuide = {
  slug: "montenegro",
  country: "Montenegro",
  subregion: "Europa del Sur",
  subhead:
    "Una bahía encajonada entre montañas, ciudades venecianas de piedra y, a pocas horas, cañones y lagos glaciares. Usa el euro pero no es Schengen: playa en verano, abrigo en la montaña.",

  image: null,

  highlights: [
    {
      value: "Euro",
      label: "sin ser parte de la zona euro",
      note: "Montenegro adoptó el euro por su cuenta: pagás en euros, aunque el país no es de la Unión Europea ni del espacio Schengen.",
    },
    {
      value: "UNESCO",
      label: "la región natural y cultural de Kotor",
      note: "Murallas venecianas que suben por la montaña, iglesias y palacios de piedra en una bahía que parece un fiordo, aunque no lo es.",
    },
    {
      value: "1.300 m",
      label: "de profundidad en el cañón del Tara",
      note: "Uno de los cañones más profundos de Europa, en el Parque Nacional Durmitor. Se baja en rafting o se mira desde el puente de Đurđevića Tara.",
    },
    {
      value: "2.500 m",
      label: "las cumbres de Durmitor",
      note: "Del mar a la alta montaña hay pocas horas: en un mismo viaje caben el traje de baño y la campera de abrigo.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: fuera de Schengen",
      body: [
        "Montenegro no es parte del espacio Schengen ni de la Unión Europea, y tiene sus propias reglas de entrada. Muchos pasaportes latinoamericanos no necesitan visa para estadías cortas, pero no todos, y las reglas cambian: verificá el tuyo antes de comprar el pasaje.",
        "Los días que pasás acá no se descuentan de los 90 de Schengen, pero cada salida y entrada a ese espacio queda registrada, con huellas y foto la primera vez. Algunos pasaportes que necesitan visa pueden entrar con una visa vigente de Schengen o de Estados Unidos: confirmalo con el consulado.",
        "En la frontera pueden pedirte el pasaje de salida, las reservas y un seguro médico, y el pasaporte tiene que tener vigencia de sobra. Los extranjeros se registran al llegar: en hoteles lo hace el alojamiento, que además cobra una tasa turística por noche; en un departamento, confirmá que lo haga el anfitrión.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Montenegro",
      body: [
        "La moneda es el euro. La tarjeta funciona en Kotor, Budva y los hoteles; en pueblos, playas chicas y konobas, las tabernas de la costa, el efectivo sigue siendo lo más práctico.",
        "La propina no es obligatoria: redondear o dejar algo si te atendieron bien es lo habitual.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Costa mediterránea y alta montaña",
      body: [
        "Montenegro es hemisferio norte: enero es invierno y julio, verano. La costa es mediterránea, con veranos largos, secos y calurosos e inviernos suaves pero muy lluviosos: la bahía de Kotor es de los lugares donde más llueve en Europa entre noviembre y enero.",
        "La montaña es otro país. Cetinje, a pocos kilómetros del mar, ya es fresca, y Durmitor, a más de 1.400 metros, tiene nieve en invierno y noches frescas aun en julio.",
        "El lago de Skadar y la llanura del centro son lo más caluroso del verano.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Junio y septiembre son lo mejor: mar templado, calor amable y menos gente. Julio y agosto son calurosos y llenos, sobre todo en Budva y Kotor, con cruceros en la bahía.",
        "En invierno la costa está tranquila y lluviosa, y Durmitor tiene nieve. Para la montaña y el rafting en el Tara, de junio a septiembre.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Montenegro",
      body: [
        "Los buses unen la costa y las ciudades, y en la bahía de Kotor un bus local recorre los pueblos. Para la montaña y el lago de Skadar, un auto o una excursión ayudan: las rutas son lindas, angostas y con curvas.",
        "Hay dos aeropuertos, Tivat y Podgorica, y muchos llegan por tierra desde Dubrovnik, en Croacia, a un par de horas de Kotor.",
        "Las precauciones son las de cualquier destino muy visitado: atención al celular y a la mochila en el casco viejo de Kotor y en las playas llenas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Paisaje",
      score: 9.5,
      rationale:
        "La bahía de Kotor, el lago de Skadar y los cañones de Durmitor, en un país que se cruza en pocas horas.",
    },
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Ciudades venecianas amuralladas, monasterios ortodoxos y la vieja capital real de Cetinje.",
    },
    {
      dimension: "Playas",
      score: 7.5,
      rationale:
        "Mar limpio y calas lindas, pero muchas de piedra y llenas en agosto. La arena larga está en Ulcinj.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Pescado y mariscos en la costa, jamón de Njeguši y quesos de montaña, con influencia italiana y balcánica.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7.5,
      rationale:
        "Más barato que Croacia, aunque Kotor, Budva y Sveti Stefan en verano se le acercan.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Buses entre ciudades y distancias cortas, pero para la montaña conviene auto o excursión.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "El euro y precios claros; el efectivo sigue pesando fuera de la costa.",
    },
  ],

  shines: [
    "La bahía de Kotor, de las más lindas del Mediterráneo.",
    "Mar y alta montaña a pocas horas.",
    "Más barato que sus vecinos de la costa.",
  ],

  costs: [
    "Julio y agosto: calor fuerte, cruceros y mucha gente.",
    "Rutas de montaña angostas y lentas.",
    "Inviernos muy lluviosos en la costa.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo la costa, templada casi todo el año, que Durmitor, con nieve en invierno. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "kotor",
      name: "Kotor",
      region: "Bahía de Kotor",
      tag: "Ciudad amurallada",
      blurb:
        "Un casco viejo veneciano al pie de la montaña, con murallas que suben hasta la fortaleza de San Juan, en una bahía que parece un fiordo. Es la base del planificador: veranos calurosos e inviernos suaves y lluviosos.",
      coords: [42.4247, 18.7712],
      featured: true,
      image: null,
    },
    {
      id: "perast",
      name: "Perast",
      region: "Bahía de Kotor",
      tag: "Palacios frente al agua",
      blurb:
        "Un pueblo de palacios barrocos y campanarios frente a dos islotes; en uno, Nuestra Señora de las Rocas, la iglesia está sobre una isla hecha a mano por marineros.",
      coords: [42.4865, 18.6987],
      image: null,
    },
    {
      id: "budva",
      name: "Budva",
      region: "Riviera de Budva",
      tag: "Playas y vida nocturna",
      blurb:
        "Un casco viejo amurallado sobre el mar y una costa de playas, hoteles y bares: la más animada del país en verano.",
      coords: [42.2911, 18.84],
      image: null,
    },
    {
      id: "sveti-stefan",
      name: "Sveti Stefan",
      region: "Riviera de Budva",
      tag: "La isla hotel",
      blurb:
        "Un pueblo de pescadores sobre un islote unido a la costa, convertido en hotel de lujo. La vista desde la ruta y las playas de al lado son de todos.",
      coords: [42.2556, 18.8917],
      image: null,
    },
    {
      id: "herceg-novi",
      name: "Herceg Novi",
      region: "Bahía de Kotor",
      tag: "Escaleras y jardines",
      blurb:
        "La ciudad de la entrada de la bahía, de escaleras, fortalezas y jardines, más tranquila que Kotor y Budva.",
      coords: [42.4531, 18.5375],
      image: null,
    },
    {
      id: "ulcinj",
      name: "Ulcinj y la Velika Plaža",
      region: "Sur",
      tag: "La playa larga",
      blurb:
        "La ciudad más al sur, con un casco viejo sobre el mar, huella otomana y la Velika Plaža, una playa de arena de más de diez kilómetros.",
      coords: [41.9294, 19.2244],
      image: null,
    },
    {
      id: "cetinje",
      name: "Cetinje y el Lovćen",
      region: "Montaña",
      tag: "La vieja capital real",
      blurb:
        "La antigua capital del reino, con monasterio y museos, y al lado el Lovćen, con el mausoleo de Njegoš en la cumbre y vista a la bahía.",
      coords: [42.3906, 18.9142],
      image: null,
    },
    {
      id: "lago-de-skadar",
      name: "Lago de Skadar",
      region: "Centro",
      tag: "El lago de los pelícanos",
      blurb:
        "El lago más grande de los Balcanes, compartido con Albania, con monasterios en islas, nenúfares y pelícanos. Se recorre en bote desde Virpazar.",
      coords: [42.2449, 19.0901],
      image: null,
    },
    {
      id: "durmitor",
      name: "Durmitor y el cañón del Tara",
      region: "Montaña",
      tag: "Lagos glaciares y rafting",
      blurb:
        "Un parque nacional de picos de más de dos mil metros, lagos glaciares como el Lago Negro y el cañón del Tara, que se baja en rafting. Base en Žabljak; en invierno, nieve.",
      coords: [43.1556, 19.1236],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Montenegro es dos climas. En la costa, de junio a septiembre, ropa liviana, traje de baño, sandalias para el agua y protector; en invierno llueve mucho, aunque rara vez hace frío de verdad. La montaña, con Durmitor y Cetinje, pide capas y abrigo casi todo el año, y tiene nieve en invierno. Usa el euro y no es Schengen: los días acá no se descuentan del cupo de 90.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a septiembre, es caluroso y seco en la costa; el invierno, suave pero muy lluvioso.",
      "Durmitor está a más de 1.400 metros: noches frescas en verano y nieve en invierno.",
      "Usa el euro, pero no es Unión Europea ni Schengen.",
      "Muchas playas son de piedra: sandalias para el agua ayudan.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, sombrero y protector alto. En julio y agosto, la bahía y el lago de Skadar pasan los treinta grados.",
      templado:
        "Ropa liviana de día y un buzo para la noche. Es el clima de la primavera y el otoño en la costa, y del verano en la montaña.",
      fresco:
        "Capas y una campera impermeable. En la costa es el invierno, con lluvia frecuente; en la montaña, la primavera y el otoño.",
      frio: "Campera de abrigo, gorro, guantes y calzado que no deje pasar el agua. Durmitor y Cetinje tienen nieve y heladas en invierno.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes europeos de dos patas redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Subí las murallas de Kotor temprano",
          body: "La subida a la fortaleza de San Juan es de escaleras al sol. Temprano o al atardecer, y con agua.",
        },
        {
          title: "Recorré la bahía en bote",
          body: "Perast, Nuestra Señora de las Rocas y los pueblos de la bahía se ven mejor desde el agua.",
        },
        {
          title: "Dormí un par de noches en la montaña",
          body: "Durmitor y el cañón del Tara son otro Montenegro, fresco y verde, a pocas horas de la costa.",
        },
        {
          title: "Probá el jamón de Njeguši",
          body: "Jamón curado y queso del pueblo de Njeguši, en la ruta de Kotor a Cetinje.",
        },
        {
          title: "Llevá efectivo fuera de la costa",
          body: "En pueblos, konobas y playas chicas, la tarjeta no siempre funciona.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes las rutas de montaña",
          body: "Son angostas, con curvas y a veces sin guardarraíl. Calculá más tiempo del que dice el mapa.",
        },
        {
          title: "No vayas a Kotor a la hora de los cruceros",
          body: "Cuando atracan cruceros, el casco viejo se llena a media mañana. Temprano o a la tarde se disfruta.",
        },
        {
          title: "No esperes arena en todas las playas",
          body: "Muchas son de piedra o de cemento sobre las rocas. La arena larga está en Ulcinj.",
        },
        {
          title: "No subestimes el sol de verano",
          body: "En julio y agosto pega fuerte, y en las murallas y el lago casi no hay sombra. Protector, sombrero y agua.",
        },
        {
          title: "No descuides la mochila en las zonas llenas",
          body: "En el casco viejo de Kotor y en las playas de Budva en verano hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "sol",
        title: "Sol y mar",
        notice: {
          tone: "info",
          title: "Verano largo en la costa",
          body: "De junio a septiembre el sol pega fuerte y casi no llueve. Muchas playas son de piedra.",
        },
        summary: "Lo que pide el verano montenegrino",
        items: [
          "Protector solar de factor alto",
          "Sombrero y anteojos de sol",
          "Sandalias para el agua: costa de piedra",
          "Traje de baño y toalla de microfibra",
          "Botella reutilizable",
        ],
      },
      {
        id: "montana",
        title: "Montaña",
        notice: {
          tone: "info",
          title: "La montaña es otro clima",
          body: "Durmitor está a más de 1.400 metros: aun en julio, las noches piden abrigo.",
        },
        summary: "Para Durmitor y el Lovćen",
        items: [
          "Un buzo o polar para las noches",
          "Campera impermeable",
          "Calzado de trekking",
          "Gorro y guantes, si vas en invierno",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Montenegro no es Schengen y tiene sus propias reglas. Muchos pasaportes latinoamericanos entran sin visa por estadías cortas, pero no todos: verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica",
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
          "Analgésico y algo para el estómago",
          "Crema para después del sol",
          "Repelente para el lago y las noches de verano",
        ],
      },
    ],
    avoid: [
      {
        leave: "Un abrigo pesado para la costa",
        why: "En la costa casi nunca hace frío de verdad; el problema del invierno es la lluvia.",
        instead:
          "Capas y una campera impermeable; el abrigo, solo para la montaña.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "La piedra del casco viejo de Kotor se pule y resbala, sobre todo con lluvia.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de la costa y en lugares chicos, el efectivo sigue mandando.",
        instead: "Algo de efectivo en euros.",
      },
      {
        leave: "La valija grande",
        why: "Escaleras en los cascos viejos, botes y buses chicos.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Monasterios e iglesias ortodoxas piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Montenegro?",
        answer:
          "Depende del pasaporte. Montenegro no es Schengen y tiene sus propias reglas; muchos países latinoamericanos están exentos para estadías cortas, pero no todos. Verificalo antes de viajar.",
      },
      {
        question: "¿Los días en Montenegro cuentan para los 90 de Schengen?",
        answer:
          "No. Montenegro no es parte del espacio Schengen, así que esos días no se descuentan. Lo que sí queda registrado es cada salida y entrada a ese espacio.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El euro, aunque Montenegro no es parte de la zona euro. La tarjeta funciona en la costa; fuera de ella, llevá efectivo.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Montenegro usa los tipos C y F, de dos patas redondas, a 230 V. Si tus enchufes son de patas planas, necesitás adaptador.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Junio y septiembre: mar templado, calor amable y menos gente. Julio y agosto son muy calurosos y llenos.",
      },
      {
        question: "¿Cómo llego?",
        answer:
          "Por los aeropuertos de Tivat o Podgorica, o por tierra desde Dubrovnik, en Croacia, a un par de horas de Kotor.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En general sí, en ciudades y pueblos. Si dudás, preguntá en el alojamiento.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
