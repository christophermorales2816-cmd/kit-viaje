import type { DestinationGuide } from "./types";

/**
 * Guía de Polonia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un invierno continental duro, más hacia el este y
 * en los Tatras, y los sitios de memoria del siglo XX, que piden otra actitud
 * y otra ropa. El zloty se carga sin centavos, como el real o el sol: en
 * precios de este tamaño, redondear no cambia nada.
 */
export const polonia: DestinationGuide = {
  slug: "polonia",
  country: "Polonia",
  subregion: "Europa del Este",
  subhead:
    "Ciudades medievales reconstruidas, la historia del siglo XX contada con rigor y comida contundente a buen precio. Inviernos fríos de verdad y veranos templados con días largos.",

  image: null,

  highlights: [
    {
      value: "−8 °C",
      label: "de mínima en Zakopane en enero",
      note: "Los inviernos son fríos en todo el país, y al pie de los Tatras todavía más. En verano, Zakopane es la montaña de los polacos.",
    },
    {
      value: "PLN",
      label: "zlotys, no euros",
      note: "Polonia no usa el euro. La tarjeta se acepta en casi todos lados, y los cajeros de banco dan el mejor cambio.",
    },
    {
      value: "85 %",
      label: "de Varsovia, destruida y reconstruida",
      note: "La ciudad vieja se levantó de nuevo después de la guerra, ladrillo por ladrillo, y hoy es patrimonio de la humanidad.",
    },
    {
      value: "135 m",
      label: "bajo tierra en la mina de sal de Wieliczka",
      note: "Capillas talladas en sal, cerca de Cracovia. Abajo hace fresco todo el año: llevá un buzo aunque sea verano.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Polonia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Polonia, Chequia y Alemania en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Zlotys, y tarjeta",
      body: [
        "La moneda es el zloty. La tarjeta se acepta en casi todos lados, también sin contacto; el euro, poco y a mal cambio.",
        "Las casas de cambio de los aeropuertos y de las zonas turísticas suelen cambiar mal. Para el efectivo, un cajero de banco; y cuando una terminal te ofrece cobrarte en tu moneda, elegí zlotys.",
        "Un detalle de la propina: si al pagar decís gracias, el mozo puede entender que se queda con el vuelto. Si querés el cambio, pedilo antes.",
      ],
    },
    {
      id: "clima",
      title: "Continental, y más duro hacia el este",
      body: [
        "Polonia es hemisferio norte: enero es invierno y julio, verano. El invierno es frío y gris en todo el país, bajo cero muchos días de diciembre a febrero, y más duro hacia el este.",
        "El verano es templado, con días largos y alguna tormenta de tarde. La costa del Báltico es más fresca y ventosa todo el año.",
        "Zakopane, al pie de los Tatras, es lo más frío y lo más lluvioso: nieve de diciembre a marzo y senderos de montaña en verano.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre los días son largos y templados, ideales para las ciudades, la costa y la montaña.",
        "Diciembre trae mercados navideños, con frío de verdad. Enero y febrero son la temporada de esquí en los Tatras, y la más gris en las ciudades.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Polonia",
      body: [
        "Los trenes rápidos unen Varsovia con Cracovia, Gdansk, Breslavia y Poznan en pocas horas. Conviene comprar con anticipación.",
        "La mayoría de los comercios cierra los domingos: la ley limita la apertura dominical. Restaurantes, museos y algunas tiendas chicas funcionan.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en las plazas y en el transporte.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Ciudades históricas",
      score: 9,
      rationale:
        "Cracovia, Gdansk, Breslavia y Torun: plazas medievales y cascos viejos de los más lindos de Europa central.",
    },
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "Del esplendor medieval a la Segunda Guerra: Auschwitz, el gueto de Varsovia y la reconstrucción, contados con rigor.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Pierogi, sopas, panaderías y una cocina contundente, a precios muy accesibles.",
    },
    {
      dimension: "Naturaleza",
      score: 7.5,
      rationale:
        "Los Tatras, el bosque de Białowieża con sus bisontes y la costa del Báltico.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "De lo más accesible de la Unión Europea, con buena calidad en casi todo.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Trenes rápidos entre las ciudades grandes y buen transporte urbano.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Una moneda estable, precios claros y tarjeta en todos lados.",
    },
  ],

  shines: [
    "Ciudades medievales de primer nivel a precios accesibles.",
    "Una historia del siglo XX contada con rigor y memoria.",
    "Comer bien por poco.",
  ],

  costs: [
    "Inviernos fríos, grises y con días cortos.",
    "La mayoría de los comercios cerrados los domingos.",
    "Distancias largas entre las ciudades del norte y del sur.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Zakopane en enero no pide lo mismo que Gdansk en julio. Los precios están en zlotys y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "varsovia",
      name: "Varsovia",
      region: "Centro",
      tag: "Capital reconstruida",
      blurb:
        "Una ciudad vieja reconstruida ladrillo por ladrillo, museos que cuentan el siglo XX y barrios modernos con vida. Es la base del planificador: inviernos bajo cero, veranos templados.",
      coords: [52.2297, 21.0122],
      featured: true,
      image: null,
    },
    {
      id: "cracovia",
      name: "Cracovia",
      region: "Sur",
      tag: "La joya medieval",
      blurb:
        "Una de las plazas medievales más grandes de Europa, el castillo de Wawel y el barrio judío de Kazimierz. Cerca, Auschwitz y la mina de sal de Wieliczka.",
      coords: [50.0647, 19.945],
      image: null,
    },
    {
      id: "gdansk",
      name: "Gdansk",
      region: "Norte",
      tag: "Puerto del Báltico",
      blurb:
        "Casas de comerciantes sobre el río, ámbar y el astillero donde nació Solidaridad. Más fresca y ventosa que el resto del país.",
      coords: [54.352, 18.6466],
      image: null,
    },
    {
      id: "wroclaw",
      name: "Breslavia",
      region: "Oeste",
      tag: "Islas y duendes",
      blurb:
        "Una ciudad de puentes e islas sobre el Óder, con una plaza mayor colorida y cientos de duendes de bronce escondidos en las veredas.",
      coords: [51.1079, 17.0385],
      image: null,
    },
    {
      id: "zakopane",
      name: "Zakopane y los Tatras",
      region: "Sur",
      tag: "Montaña",
      blurb:
        "El pueblo de montaña al pie de los Tatras, con casas de madera, esquí en invierno y caminatas en verano. Lo más frío y lluvioso del país.",
      coords: [49.2992, 19.9496],
      image: null,
    },
    {
      id: "poznan",
      name: "Poznan",
      region: "Oeste",
      tag: "Plaza y cabras",
      blurb:
        "Una plaza mayor renacentista con un reloj del que salen dos cabras de metal todos los mediodías.",
      coords: [52.4064, 16.9252],
      image: null,
    },
    {
      id: "torun",
      name: "Torun",
      region: "Norte",
      tag: "Gótico y pan de jengibre",
      blurb:
        "La ciudad natal de Copérnico, con un casco gótico patrimonio de la humanidad y el pan de jengibre más famoso del país.",
      coords: [53.0138, 18.5984],
      image: null,
    },
    {
      id: "lublin",
      name: "Lublin",
      region: "Este",
      tag: "Ciudad vieja tranquila",
      blurb:
        "Una ciudad vieja con mucha historia y pocos turistas, puerta al este del país.",
      coords: [51.2465, 22.5684],
      image: null,
    },
    {
      id: "bialowieza",
      name: "Bosque de Białowieża",
      region: "Este",
      tag: "Bisontes",
      blurb:
        "Uno de los últimos bosques primarios de Europa, donde viven bisontes en libertad. Inviernos muy fríos.",
      coords: [52.7, 23.8667],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Polonia tiene inviernos fríos de verdad —bajo cero de diciembre a febrero, más hacia el este y en la montaña— y veranos templados con días largos y alguna tormenta. En invierno, abrigo, gorro, guantes y calzado que no resbale; en verano, ropa liviana con una campera para la noche y algo impermeable. Si vas a la mina de sal de Wieliczka, un buzo: abajo hace fresco todo el año.",
    keyPoints: [
      "Hemisferio norte: el invierno, de diciembre a febrero, es frío y gris; el verano, de junio a agosto, templado.",
      "Hacia el este y en los Tatras el invierno es más duro; la costa del Báltico es más fresca y ventosa todo el año.",
      "En verano las tardes calurosas pueden terminar en tormenta.",
      "La mayoría de los comercios cierra los domingos.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y una campera fina. Las tardes de verano pueden terminar en tormenta, y muchas casas no tienen aire acondicionado.",
      templado:
        "Capas y una campera liviana. Es el clima del verano en el Báltico y de la primavera en el sur.",
      fresco:
        "Sweater o polar y una campera impermeable. Las noches refrescan rápido.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. El frío es seco y fuerte, y en los Tatras hay nieve de diciembre a marzo.",
    },
    plug: {
      types: "Tipo C y tipo E",
      voltage: "230 V, 50 Hz",
      note: "El tipo E es el europeo de dos patas redondas, con una tercera pata que sale del toma; los enchufes tipo C entran sin problema. Si los tuyos son de patas planas, necesitás adaptador, y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Pagá con tarjeta",
          body: "Se acepta en casi todos lados, también sin contacto. Para el efectivo, cajeros de banco: los independientes suelen cambiar peor.",
        },
        {
          title: "Reservá Auschwitz con tiempo",
          body: "Las entradas al museo se asignan por horario y se agotan, sobre todo en verano. Conviene reservar con semanas.",
        },
        {
          title: "Llevá un buzo a Wieliczka",
          body: "La mina de sal se recorre a más de cien metros bajo tierra, con temperatura fresca todo el año.",
        },
        {
          title: "Comé en un bar de leche",
          body: "Los bares de leche, comedores tradicionales, sirven comida casera muy barata. Son una experiencia en sí mismos.",
        },
        {
          title: "Hacé las compras el sábado",
          body: "La mayoría de los comercios cierra los domingos. Restaurantes y museos, en cambio, funcionan.",
        },
        {
          title: "Elegí pagar en zlotys",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el frío",
          body: "De diciembre a febrero baja de cero en todo el país, y en el este y en la montaña bastante más.",
        },
        {
          title: "No cambies plata en cualquier lado",
          body: "Las casas de cambio de los aeropuertos y de las zonas turísticas suelen cambiar mal. Tarjeta o cajero de banco.",
        },
        {
          title: "No digas gracias si querés el vuelto",
          body: "Al pagar, un gracias puede entenderse como que el mozo se queda con el cambio. Pedí el vuelto antes.",
        },
        {
          title: "No cruces en rojo",
          body: "Los peatones esperan el verde, y cruzar en rojo se multa.",
        },
        {
          title: "No olvides dónde estás en los sitios de memoria",
          body: "Auschwitz y los memoriales del gueto son lugares de duelo. Se visitan en silencio y con respeto.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "invierno",
        title: "Ropa para el invierno",
        notice: {
          tone: "warn",
          title: "El invierno polaco es frío de verdad",
          body: "De diciembre a febrero la temperatura queda bajo cero muchos días, y en el este y en los Tatras todavía más. Sin abrigo adecuado, se pasa mal.",
        },
        summary: "Lo que pide noviembre a marzo",
        items: [
          "Campera de abrigo que corte el viento",
          "Gorro, guantes y bufanda",
          "Calzado abrigado que no resbale",
          "Medias térmicas",
          "Capas para sacarte adentro, donde hay calefacción",
        ],
      },
      {
        id: "memoria",
        title: "Sitios de memoria",
        notice: {
          tone: "info",
          title: "Lugares de duelo",
          body: "Auschwitz-Birkenau y los memoriales se visitan con respeto: ropa sobria, silencio y nada de fotos donde está prohibido.",
        },
        summary: "Si vas a Auschwitz-Birkenau",
        items: [
          "Entrada reservada con horario",
          "Calzado cómodo: el recorrido es largo y al aire libre",
          "Ropa para el clima del día: Birkenau es abierto y sin reparo",
          "Agua y algo para comer antes de entrar",
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
          body: "Los tomas son tipo E, donde entran los enchufes europeos de dos patas redondas. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil: el frío descarga rápido el teléfono",
          "Auriculares para los trenes",
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
          "Protector labial y crema para el frío",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero baja de cero.",
        instead: "Abrigo de verdad, gorro y guantes.",
      },
      {
        leave: "Euros para pagar",
        why: "Polonia usa el zloty, y el euro se acepta poco y a mal cambio.",
        instead: "Tarjeta o zlotys.",
      },
      {
        leave: "Zapatos que no aguantan el agua",
        why: "Lluvia en verano, y nieve y aguanieve en invierno.",
        instead: "Calzado cómodo e impermeable.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de zlotys para puestos y propinas.",
      },
      {
        leave: "Una valija enorme",
        why: "Trenes con poco espacio y edificios viejos sin ascensor.",
        instead: "Una valija mediana.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Ropa llamativa para los sitios de memoria",
        why: "Son lugares de duelo.",
        instead: "Ropa sobria y cómoda.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Polonia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo E, donde entran los europeos de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Polonia usa el euro?",
        answer:
          "No: la moneda es el zloty. La tarjeta se acepta en casi todos lados; el euro, poco y a mal cambio.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre: días largos y templados. Diciembre tiene mercados navideños, con frío de verdad.",
      },
      {
        question: "¿Cómo visito Auschwitz?",
        answer:
          "Desde Cracovia, a algo más de una hora. La entrada se reserva con horario, con semanas de anticipación, y la visita guiada ayuda a entender lo que se ve.",
      },
      {
        question: "¿Abren los comercios los domingos?",
        answer:
          "La mayoría no: la ley limita la apertura dominical. Abren algunos negocios chicos, las estaciones y los restaurantes.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí, aunque muchos polacos prefieren la embotellada por el sabor.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Lo habitual es dejar algo en los restaurantes si te atendieron bien. Ojo: si al pagar decís gracias, el mozo puede entender que se queda con el vuelto.",
      },
    ],
  },
};
