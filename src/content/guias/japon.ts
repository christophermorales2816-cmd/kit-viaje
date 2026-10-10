import type { DestinationGuide } from "./types";

/**
 * Guía de Japón.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: es el primero de Asia. El enchufe es de 100 V, el
 * único del sitio por debajo de 110: lo que funciona con 220 V puede no andar.
 * Y la propina no existe, así que su precio es cero y el nombre lo dice.
 */
export const japon: DestinationGuide = {
  slug: "japon",
  country: "Japón",
  subregion: "Asia Oriental",
  subhead:
    "Templos de madera en Kioto, el tren bala, Tokio de noche, cerezos en primavera y arces rojos en otoño. Un país ordenado, puntual y fácil de recorrer aunque no hables el idioma.",

  image: null,

  highlights: [
    {
      value: "100 V",
      label: "en los enchufes, de dos patas planas",
      note: "El voltaje más bajo de todos los países del sitio. Lo que dice 100-240 V funciona; una planchita o un secador de 220 V, no.",
    },
    {
      value: "Shinkansen",
      label: "trenes bala que salen y llegan en hora",
      note: "De Tokio a Kioto en poco más de dos horas. Es la forma de moverse entre las ciudades grandes.",
    },
    {
      value: "Sakura",
      label: "los cerezos de fines de marzo y principios de abril",
      note: "La floración se corre unos días cada año y se sigue con los pronósticos que publican los medios japoneses. Es la temporada más llena del año.",
    },
    {
      value: "Kioto",
      label: "más de mil templos y santuarios",
      note: "Fue la capital durante más de mil años. Los portales rojos de Fushimi Inari, el Pabellón Dorado y Gion, el barrio de las geishas.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Japón",
      body: [
        "Muchos pasaportes latinoamericanos —el argentino, el brasileño, el chileno, el mexicano o el uruguayo, entre otros— entran sin visa como turistas por estadías cortas; otros necesitan visa del consulado. Verificá el tuyo antes de comprar el pasaje.",
        "Japón prepara una autorización electrónica previa para quienes entran sin visa, parecida a las de Estados Unidos o el Reino Unido. Fijate si ya está vigente cuando viajes.",
        "Al llegar te toman huellas y foto. El formulario de inmigración y aduana se puede completar antes, online, en Visit Japan Web, y la llegada es más rápida.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Japón",
      body: [
        "La moneda es el yen. La tarjeta funciona en hoteles, cadenas, tiendas y casi todos los restaurantes de las ciudades; en templos, puestos de comida, pueblos y algunos restaurantes chicos, efectivo.",
        "Los cajeros de los minimercados (konbini) y del correo aceptan tarjetas extranjeras. La tarjeta de transporte recargable —Suica, Pasmo o ICOCA, en el celular o física— sirve para trenes, metro, colectivos, máquinas expendedoras y konbini.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí yenes: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Cuatro estaciones de verdad",
      body: [
        "Japón es hemisferio norte: enero es invierno y julio, verano. Tokio y Kioto tienen inviernos fríos y secos, y veranos calurosos y muy húmedos.",
        "De junio a mediados de julio es la temporada de lluvias (tsuyu) en casi todo el país. De agosto a octubre pueden llegar tifones que frenan trenes y vuelos un día o dos.",
        "Hokkaido, con Sapporo, tiene nieve de diciembre a marzo, igual que la costa del mar de Japón, con Kanazawa. Okinawa, en el sur, es subtropical: nunca hace frío.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Primavera (fines de marzo a mayo) y otoño (octubre y noviembre): clima agradable, cerezos o arces rojos. Son también las semanas más llenas.",
        "Conviene esquivar la Golden Week (fines de abril y principios de mayo), mediados de agosto y el fin de año: viaja todo el país y los alojamientos se agotan.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Japón",
      body: [
        "Entre ciudades, el Shinkansen y los trenes expresos; para Hokkaido y Okinawa, vuelos internos. El pase de trenes para turistas no siempre conviene: hacé la cuenta con los tramos que vas a hacer.",
        "En las ciudades, metro y trenes con la tarjeta recargable. Los carteles están también en inglés y los anuncios, también. Las valijas se pueden mandar de un hotel a otro con servicios de envío (takkyubin), y viajar liviano.",
        "Es de los países más tranquilos para viajar. Lo que más se pierde son cosas olvidadas en el tren, y suelen aparecer en la oficina de objetos perdidos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "Templos, castillos y santuarios de más de mil años, sobre todo en Kioto y Nara, y la memoria de Hiroshima.",
    },
    {
      dimension: "Gastronomía",
      score: 10,
      rationale:
        "Sushi, ramen, tempura, izakayas y la comida del konbini, buena hasta en lo más barato.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "El monte Fuji, los Alpes japoneses, los cerezos y los arces rojos, y las playas de Okinawa.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "Okinawa tiene playas tropicales; en el resto del país, el mar no es el motivo del viaje.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Comer bien es barato y el servicio es impecable; los alojamientos y el tren bala, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 10,
      rationale:
        "Trenes puntuales, carteles en inglés y una tarjeta que sirve para casi todo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "Precios estables y casi sin regateo: lo que dice la etiqueta es lo que se paga.",
    },
  ],

  shines: [
    "Trenes y transporte que funcionan como un reloj.",
    "Comida excelente en cualquier rango de precio.",
    "Ciudades limpias y tranquilas a cualquier hora.",
  ],

  costs: [
    "Alojamiento caro y chico en Tokio y Kioto.",
    "Primavera y otoño muy llenos en los lugares famosos.",
    "Pocas personas hablan otro idioma fuera de lo turístico.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Sapporo en enero que Okinawa. Los precios están en yenes y son órdenes de magnitud.",

  places: [
    {
      id: "tokio",
      name: "Tokio",
      region: "Kanto",
      tag: "Neón y templos",
      blurb:
        "Shibuya y su cruce, el templo Senso-ji en Asakusa, Shinjuku de noche y barrios que parecen pueblos. Es la base del planificador: inviernos fríos y secos, veranos calurosos y húmedos.",
      coords: [35.6762, 139.6503],
      featured: true,
      image: null,
    },
    {
      id: "kioto",
      name: "Kioto",
      region: "Kansai",
      tag: "La capital de los templos",
      blurb:
        "Los portales rojos de Fushimi Inari, el Pabellón Dorado, el bosque de bambú de Arashiyama y Gion al atardecer.",
      coords: [35.0116, 135.7681],
      image: null,
    },
    {
      id: "osaka",
      name: "Osaka",
      region: "Kansai",
      tag: "La cocina de Japón",
      blurb:
        "Dotonbori y sus carteles de neón, comida callejera, el castillo y la base más práctica para recorrer Kioto, Nara y Kobe.",
      coords: [34.6937, 135.5023],
      image: null,
    },
    {
      id: "hiroshima",
      name: "Hiroshima",
      region: "Chugoku",
      tag: "Memoria y paz",
      blurb:
        "El Parque de la Paz y la Cúpula de la Bomba Atómica, y a un rato en ferry, la isla de Miyajima con su portal en el agua.",
      coords: [34.3853, 132.4553],
      image: null,
    },
    {
      id: "nara",
      name: "Nara",
      region: "Kansai",
      tag: "Ciervos y el gran Buda",
      blurb:
        "La primera capital, con el Buda gigante del templo Todai-ji y un parque lleno de ciervos que hacen reverencias. Se visita en el día desde Kioto u Osaka.",
      coords: [34.6851, 135.8048],
      image: null,
    },
    {
      id: "hakone",
      name: "Hakone y el monte Fuji",
      region: "Kanagawa",
      tag: "Aguas termales y el Fuji",
      blurb:
        "Onsen, un lago con vista al Fuji cuando el día está despejado y un recorrido en teleférico sobre fumarolas. Más fresco que Tokio y muy lluvioso en verano.",
      coords: [35.2324, 139.1069],
      image: null,
    },
    {
      id: "sapporo",
      name: "Sapporo",
      region: "Hokkaido",
      tag: "Nieve y festival de hielo",
      blurb:
        "La capital de Hokkaido, con esquí cerca, el festival de esculturas de nieve en febrero y veranos frescos. La más fría de Japón en el planificador.",
      coords: [43.0618, 141.3545],
      image: null,
    },
    {
      id: "kanazawa",
      name: "Kanazawa",
      region: "Ishikawa",
      tag: "Jardines y casas de té",
      blurb:
        "El jardín Kenroku-en, barrios de casas de té y de samuráis, y pan de oro en todo. Inviernos con nieve y mucha lluvia.",
      coords: [36.5613, 136.6562],
      image: null,
    },
    {
      id: "naha",
      name: "Naha (Okinawa)",
      region: "Okinawa",
      tag: "El Japón tropical",
      blurb:
        "Playas de agua turquesa, arrecifes y una cultura propia, la del antiguo reino de Ryukyu. Nunca hace frío; la lluvia y los tifones se concentran de mayo a septiembre.",
      coords: [26.2124, 127.6809],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Japón tiene cuatro estaciones marcadas. En invierno, abrigo para Tokio y Kioto y ropa de nieve para Hokkaido; en verano, ropa liviana que se seque rápido y un paraguas, porque hace calor húmedo y llueve. Siempre, calzado cómodo que se saque fácil —en templos, casas y algunos restaurantes se entra descalzo— y medias sin agujeros. El enchufe es de 100 V: revisá tus cargadores.",
    keyPoints: [
      "Hemisferio norte: invierno de diciembre a febrero y verano húmedo de junio a agosto, con lluvias de junio a mediados de julio.",
      "El enchufe es de dos patas planas a 100 V: lo que no diga 100-240 V puede no funcionar.",
      "No se deja propina, y en muchos lugares se entra sin zapatos.",
      "El efectivo sigue haciendo falta en templos, puestos y pueblos.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana que se seque rápido, un pañuelo para la transpiración, protector y agua. El verano japonés es húmedo, y en los templos se camina mucho al sol.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, la mejor época. Un paraguas plegable por si llueve.",
      fresco:
        "Capas, un buzo abrigado y una campera liviana. Es el principio y el final del invierno en Tokio y Kioto, con días claros y noches frías.",
      frio: "Campera de abrigo, gorro, guantes y calzado que no resbale. Hokkaido y la costa del mar de Japón tienen nieve todo el invierno.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "100 V, 50 Hz en el este y 60 Hz en el oeste",
      note: "Son las dos patas planas, como en Estados Unidos, y muchos tomas no aceptan la tercera pata. El cargador del celular o de la notebook suele decir 100-240 V y funciona; una planchita o un secador de 220 V, no.",
    },
    tips: {
      dos: [
        {
          title: "Cargá la tarjeta de transporte",
          body: "Suica, Pasmo o ICOCA, en el celular o física: sirve para trenes, metro, colectivos, máquinas y konbini en todo el país.",
        },
        {
          title: "Mandá la valija entre hoteles",
          body: "El envío de equipaje (takkyubin) se hace en la recepción y llega al día siguiente. Viajar en tren con una mochila es otra cosa.",
        },
        {
          title: "Comé en el konbini sin culpa",
          body: "Los minimercados tienen onigiri, sándwiches y platos calientes buenos y baratos. Es como come mucha gente que trabaja.",
        },
        {
          title: "Visitá los templos famosos temprano",
          body: "Fushimi Inari al amanecer o el bosque de bambú antes de las ocho son otro lugar que a media mañana.",
        },
        {
          title: "Probá un onsen",
          body: "Las aguas termales son parte de la cultura. Se entra desnudo, después de lavarse sentado en las duchas de la entrada.",
        },
        {
          title: "Elegí pagar en yenes",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No dejes propina",
          body: "No se usa y puede incomodar: a veces te persiguen para devolvértela.",
        },
        {
          title: "No entres con zapatos donde hay tatami",
          body: "En templos, casas, ryokan y algunos restaurantes hay que descalzarse. Si hay pantuflas en la entrada, es la señal.",
        },
        {
          title: "No hables por teléfono en el tren",
          body: "Se viaja en silencio y con el celular en vibrador. Comer en el tren urbano también está mal visto; en el Shinkansen, no.",
        },
        {
          title: "No camines comiendo",
          body: "Se come parado al lado del puesto o de la máquina donde lo compraste, no por la calle.",
        },
        {
          title: "No esperes tachos de basura en la calle",
          body: "Casi no hay. La basura se lleva hasta el hotel o se tira en los tachos de los konbini, separada.",
        },
        {
          title: "No cuentes con pagar todo con tarjeta",
          body: "Templos, puestos, pueblos y algunos restaurantes chicos aceptan solo efectivo.",
        },
      ],
    },
    checklists: [
      {
        id: "estaciones",
        title: "Según la estación",
        notice: {
          tone: "info",
          title: "El mismo país, cuatro valijas distintas",
          body: "Enero en Sapporo y agosto en Kioto no comparten nada. Mirá el clima de la ciudad y del mes en el planificador.",
        },
        summary: "Lo que cambia con la época",
        items: [
          "Ropa liviana que se seque rápido para el verano húmedo",
          "Un paraguas plegable para la temporada de lluvias",
          "Abrigo, gorro y guantes para el invierno",
          "Calzado para nieve si vas a Hokkaido en invierno",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes latinoamericanos entran sin visa, pero no todos, y Japón prepara una autorización electrónica previa. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "El código QR de Visit Japan Web, si lo completaste",
        ],
      },
      {
        id: "costumbres",
        title: "Costumbres",
        notice: null,
        summary: "Para entrar a templos, casas y onsen",
        items: [
          "Calzado que se saque y se ponga rápido",
          "Medias sin agujeros",
          "Una toalla chica de mano, que se usa todo el tiempo",
          "Una bolsa para llevar la basura hasta el hotel",
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
          "Repelente para el verano",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "La planchita o el secador de 220 V",
        why: "A 100 V calientan poco o no andan, y casi todos los hoteles tienen secador.",
        instead: "El del alojamiento, o uno que diga 100-240 V.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Templos, puestos y pueblos aceptan solo efectivo.",
        instead: "Yenes en efectivo, sacados en un konbini, y una tarjeta.",
      },
      {
        leave: "Una valija enorme",
        why: "Los trenes tienen poco lugar y las habitaciones son chicas.",
        instead:
          "Una valija mediana o mochila, y el envío de equipaje entre hoteles.",
      },
      {
        leave: "Zapatillas con cordones difíciles",
        why: "Te las vas a sacar y poner muchas veces por día.",
        instead: "Calzado cómodo que se saque sin desatar.",
      },
      {
        leave: "Ropa de algodón grueso en verano",
        why: "Con la humedad no se seca nunca.",
        instead: "Ropa liviana de secado rápido.",
      },
      {
        leave: "Comprar el pase de trenes sin hacer la cuenta",
        why: "Ya no siempre conviene: depende de cuántos tramos largos hagas.",
        instead: "Sumá los tramos que vas a hacer y compará.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Japón?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos entran sin visa por estadías cortas como turistas, y Japón prepara una autorización electrónica previa. Verificalo antes de viajar.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Japón usa los tipos A y B, de dos patas planas, a 100 V. Fijate que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Conviene el pase de trenes para turistas?",
        answer:
          "Solo si hacés varios tramos largos en pocos días. Sumá lo que costarían los pasajes sueltos y compará.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Primavera, de fines de marzo a mayo, y otoño, en octubre y noviembre. Evitá la Golden Week, mediados de agosto y el fin de año.",
      },
      {
        question: "¿Se puede pagar todo con tarjeta?",
        answer:
          "En las ciudades, casi todo. En templos, puestos y pueblos, efectivo: los cajeros de los konbini aceptan tarjetas extranjeras.",
      },
      {
        question: "¿Se deja propina?",
        answer: "No. El servicio está incluido y dejar plata puede incomodar.",
      },
      {
        question: "¿Me arreglo sin hablar japonés?",
        answer:
          "Sí. Los carteles del transporte están en inglés y un traductor en el celular resuelve el resto.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
    ],
  },
};
