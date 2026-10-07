import type { DestinationGuide } from "./types";

/**
 * Guía de Bulgaria.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el euro más nuevo de la lista —el lev dejó de
 * circular en 2026— y dos detalles que confunden el primer día: los carteles
 * en cirílico fuera de las zonas turísticas y la cabeza que dice que sí
 * cuando se mueve de lado a lado.
 */
export const bulgaria: DestinationGuide = {
  slug: "bulgaria",
  country: "Bulgaria",
  subregion: "Europa del Este",
  subhead:
    "Monasterios en la montaña, ciudades con miles de años de historia, el mar Negro y el valle de las Rosas, a precios de los más bajos de la Unión Europea. Veranos calurosos, inviernos con nieve.",

  image: null,

  highlights: [
    {
      value: "May–Jun",
      label: "la cosecha de rosas",
      note: "En el valle de las Rosas, alrededor de Kazanlak, se cosechan las flores para el aceite de rosa, con un festival a principios de junio.",
    },
    {
      value: "Euro",
      label: "desde 2026",
      note: "Bulgaria cambió el lev por el euro el 1 de enero de 2026, y es parte plena del espacio Schengen desde 2025.",
    },
    {
      value: "Cirílico",
      label: "el alfabeto",
      note: "Bulgaria escribe en cirílico. En los lugares turísticos los carteles suelen estar también en alfabeto latino; fuera de ellos, no.",
    },
    {
      value: "Al revés",
      label: "el sí y el no con la cabeza",
      note: "Mover la cabeza de arriba abajo significa no, y de lado a lado, sí. Ante la duda, pedí la respuesta en palabras.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Bulgaria es parte plena del espacio Schengen desde 2025. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Bulgaria, Rumania y Grecia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Euros desde 2026",
      body: [
        "La moneda es el euro desde el 1 de enero de 2026; el lev ya no circula. Si te quedaron leva de un viaje anterior, se cambian en los bancos del país.",
        "La tarjeta se acepta en las ciudades; en pueblos, puestos y algunos restaurantes, el efectivo sigue siendo lo más práctico. En los restaurantes se acostumbra dejar propina si te atendieron bien.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Continental, con mar y montaña",
      body: [
        "Bulgaria es hemisferio norte: enero es invierno y julio, verano. Sofía, a quinientos metros de altura, tiene inviernos fríos, bajo cero de noche, y veranos cálidos.",
        "Plovdiv y el valle de las Rosas son lo más caluroso en julio, por encima de los treinta grados. La costa del mar Negro es más templada, con veranos de playa e inviernos suaves.",
        "Las montañas —Rila, Pirin, Bansko— son frescas en verano y nevadas de diciembre a marzo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Mayo, junio y septiembre son lo mejor para las ciudades y la montaña, y a fines de mayo empieza la cosecha de rosas.",
        "Julio y agosto son la temporada del mar Negro, con la costa llena. De diciembre a marzo, la de esquí en Bansko.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Bulgaria",
      body: [
        "Entre ciudades, el bus suele ser más rápido y frecuente que el tren. Sofía tiene metro, que llega al aeropuerto.",
        "Fuera de los lugares turísticos los carteles están en cirílico: reconocer las letras ayuda mucho con los nombres de las ciudades.",
        "Las precauciones son las de cualquier destino visitado: atención al celular y a la mochila en las zonas concurridas y en la costa en temporada alta.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "Ruinas tracias y romanas, fortalezas medievales y monasterios ortodoxos como el de Rila.",
    },
    {
      dimension: "Montaña y naturaleza",
      score: 8.5,
      rationale:
        "Las montañas de Rila y Pirin, con lagos glaciares, senderos y esquí.",
    },
    {
      dimension: "Costa",
      score: 7.5,
      rationale:
        "El mar Negro tiene playas largas y pueblos antiguos como Nesebar, aunque algunas zonas están muy construidas.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Ensalada shopska, yogur de verdad y vinos locales, a precios muy bajos.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9.5,
      rationale: "De lo más accesible de la Unión Europea, con buena calidad.",
    },
    {
      dimension: "Facilidad logística",
      score: 6.5,
      rationale:
        "Buses entre ciudades y trenes lentos, y carteles en cirílico fuera de las zonas turísticas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El euro desde 2026 y precios claros.",
    },
  ],

  shines: [
    "Historia de miles de años en ciudades accesibles.",
    "Montañas para caminar y esquiar a pocas horas de Sofía.",
    "De lo más barato de la Unión Europea.",
  ],

  costs: [
    "Transporte lento entre ciudades.",
    "Carteles en cirílico fuera de las zonas turísticas.",
    "La costa en pleno verano, muy llena.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Bansko en enero no pide lo mismo que Plovdiv en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "sofia",
      name: "Sofía",
      region: "Oeste",
      tag: "Capital entre montañas",
      blurb:
        "La catedral de Alejandro Nevski, iglesias y ruinas romanas una al lado de la otra, y el monte Vitosha a minutos. Es la base del planificador: inviernos fríos, veranos cálidos.",
      coords: [42.6977, 23.3219],
      featured: true,
      image: null,
    },
    {
      id: "plovdiv",
      name: "Plovdiv",
      region: "Centro",
      tag: "Teatro romano",
      blurb:
        "Una de las ciudades habitadas más antiguas de Europa, con un teatro romano y un casco viejo de casas pintadas. La más calurosa en julio.",
      coords: [42.1354, 24.7453],
      image: null,
    },
    {
      id: "veliko-tarnovo",
      name: "Veliko Tarnovo",
      region: "Norte",
      tag: "Fortaleza medieval",
      blurb:
        "La antigua capital de los zares, con la fortaleza de Tsarevets sobre un meandro del río.",
      coords: [43.0757, 25.6172],
      image: null,
    },
    {
      id: "rila",
      name: "Monasterio de Rila",
      region: "Montaña",
      tag: "Monasterio",
      blurb:
        "El monasterio más importante del país, patrimonio de la humanidad, entre montañas. Fresco en verano y nevado en invierno.",
      coords: [42.1333, 23.34],
      image: null,
    },
    {
      id: "bansko",
      name: "Bansko",
      region: "Montaña",
      tag: "Esquí y pueblo",
      blurb:
        "Un pueblo de casas de piedra al pie del Pirin, con la estación de esquí más grande del país y caminatas en verano.",
      coords: [41.8383, 23.4885],
      image: null,
    },
    {
      id: "varna",
      name: "Varna",
      region: "Mar Negro",
      tag: "La capital del mar",
      blurb:
        "La ciudad más grande de la costa, con playas, un parque junto al mar y el oro trabajado más antiguo del mundo en su museo.",
      coords: [43.2141, 27.9147],
      image: null,
    },
    {
      id: "nesebar",
      name: "Nesebar",
      region: "Mar Negro",
      tag: "Ciudad antigua en el mar",
      blurb:
        "Una península con iglesias bizantinas y casas de madera, patrimonio de la humanidad. Muy llena en julio y agosto.",
      coords: [42.6597, 27.7363],
      image: null,
    },
    {
      id: "kazanlak",
      name: "Kazanlak y el valle de las Rosas",
      region: "Centro",
      tag: "Valle de las Rosas",
      blurb:
        "El centro del valle de las Rosas, con un festival a principios de junio y tumbas tracias pintadas.",
      coords: [42.6194, 25.3929],
      image: null,
    },
    {
      id: "koprivshtitsa",
      name: "Koprivshtitsa",
      region: "Montaña",
      tag: "Pueblo museo",
      blurb:
        "Un pueblo de casas del siglo XIX pintadas de colores, conservado como museo, en las montañas.",
      coords: [42.6386, 24.3553],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Bulgaria tiene veranos cálidos a calurosos —Plovdiv y el valle de las Rosas pasan los treinta grados en julio— e inviernos fríos, bajo cero de noche en Sofía y con nieve en la montaña. En verano, ropa liviana, traje de baño para el mar Negro y un buzo para las noches de montaña; en invierno, abrigo de verdad y, si vas a Bansko, ropa de nieve. Y algo para cubrir hombros y rodillas en los monasterios.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es caluroso; el invierno, de diciembre a febrero, frío.",
      "La costa del mar Negro es más templada; la montaña, más fresca en verano y nevada en invierno.",
      "En los monasterios ortodoxos hay que cubrir hombros y rodillas.",
      "Mover la cabeza de arriba abajo significa no, y de lado a lado, sí.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector. En Plovdiv y en el valle de las Rosas el calor de julio es fuerte.",
      templado:
        "Capas y una campera liviana. Es el clima de mayo, junio y septiembre: el mejor para recorrer.",
      fresco:
        "Sweater o polar y una campera que corte el viento, sobre todo en la montaña.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. En Bansko y en Rila hay nieve de diciembre a marzo.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Pedí la respuesta en palabras",
          body: "Mover la cabeza de arriba abajo es no y de lado a lado es sí. Para no confundirte, pedí un da o un ne.",
        },
        {
          title: "Aprendé a reconocer el cirílico",
          body: "Fuera de los lugares turísticos los carteles están en cirílico. Reconocer las letras ayuda con los nombres de las ciudades y de las paradas.",
        },
        {
          title: "Visitá Rila temprano",
          body: "El monasterio se llena de excursiones al mediodía. A primera hora es otra cosa.",
        },
        {
          title: "Viajá en bus entre ciudades",
          body: "Suele ser más rápido y frecuente que el tren.",
        },
        {
          title: "Andá al valle de las Rosas a fines de mayo",
          body: "La cosecha es entre fines de mayo y principios de junio, y el festival de Kazanlak, a principios de junio.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No vayas a la costa en agosto sin reserva",
          body: "Es el mes más lleno del mar Negro: alojamiento y playas al límite.",
        },
        {
          title: "No entres a los monasterios sin cubrirte",
          body: "Piden hombros y rodillas cubiertos. Llevá un pañuelo.",
        },
        {
          title: "No subestimes el frío de la montaña",
          body: "En Bansko, Rila y Koprivshtitsa la temperatura queda bajo cero muchos días de invierno.",
        },
        {
          title: "No cuentes con tarjeta en todos lados",
          body: "En las ciudades se acepta casi siempre; en pueblos, puestos y algunos restaurantes, efectivo.",
        },
        {
          title: "No descuides la mochila en las zonas concurridas",
          body: "En el centro de Sofía y en la costa en temporada alta hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "monasterios",
        title: "Iglesias y monasterios",
        notice: {
          tone: "info",
          title: "Hombros y rodillas cubiertos",
          body: "Los monasterios y las iglesias ortodoxas piden ropa que cubra.",
        },
        summary: "Lo que te deja entrar",
        items: [
          "Pañuelo grande",
          "Pantalón o pollera por debajo de la rodilla",
          "Remera con mangas",
        ],
      },
      {
        id: "verano",
        title: "Verano y mar Negro",
        notice: {
          tone: "info",
          title: "Calor en el llano, mar templado",
          body: "En julio y agosto Plovdiv y el valle de las Rosas pasan los treinta grados, y la costa está en temporada.",
        },
        summary: "Lo que pide julio y agosto",
        items: [
          "Ropa liviana",
          "Traje de baño y ojotas",
          "Protector solar y sombrero",
          "Buzo para las noches de montaña",
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
          "Una app de traducción con cámara, para los carteles en cirílico",
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
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero hace frío, y en la montaña nieva.",
        instead: "Abrigo, gorro y guantes.",
      },
      {
        leave: "Solo tarjetas",
        why: "En pueblos y puestos se paga en efectivo.",
        instead: "Tarjeta y algo de efectivo en euros.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Los monasterios piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Empedrados en Plovdiv, Veliko Tarnovo y Nesebar.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Leva de un viaje anterior",
        why: "Desde 2026 la moneda es el euro, y el lev ya no circula.",
        instead: "Cambialos en un banco del país, o llevá euros.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Una valija enorme",
        why: "Buses, escaleras y cascos viejos en subida.",
        instead: "Una valija mediana o una mochila.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Bulgaria?",
        answer:
          "Depende del pasaporte. Bulgaria es parte plena del espacio Schengen desde 2025: muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Bulgaria usa el euro?",
        answer:
          "Sí, desde el 1 de enero de 2026. Antes la moneda era el lev, que ya no circula.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Mayo, junio y septiembre para las ciudades y la montaña; julio y agosto para el mar Negro; de diciembre a marzo, para esquiar en Bansko.",
      },
      {
        question: "¿Es cierto lo de la cabeza?",
        answer:
          "Sí: de arriba abajo es no y de lado a lado es sí. Mucha gente que trabaja con turistas se adapta, pero ante la duda, pedí la respuesta en palabras.",
      },
      {
        question: "¿Cómo llego al monasterio de Rila?",
        answer:
          "Está a unas dos horas de Sofía. Hay buses y excursiones de día, y conviene ir temprano.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En las ciudades, en general sí, aunque mucha gente prefiere la embotellada. En la montaña hay fuentes de agua de manantial.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Es lo habitual en los restaurantes si te atendieron bien. Redondear o sumar un poco alcanza.",
      },
    ],
  },
};
