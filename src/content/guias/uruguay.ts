import type { DestinationGuide } from "./types";

/**
 * Guía de Uruguay.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: cuatro estaciones de verdad en un país de costa, y
 * el caso de un destino caro para la región. El invierno no tiene nieve, pero
 * la humedad y el viento hacen que pida más abrigo del que sugiere el número.
 */
export const uruguay: DestinationGuide = {
  slug: "uruguay",
  country: "Uruguay",
  subregion: "Sudamérica",
  subhead:
    "Un país chico, de costa y de cuatro estaciones de verdad: el verano se va a la playa y el invierno es húmedo y ventoso. Tranquilo, previsible y caro para la región.",

  image: null,

  highlights: [
    {
      value: "4",
      label: "estaciones marcadas",
      note: "Verano de playa, invierno húmedo y ventoso. No hay nieve, pero el frío se siente más de lo que marca el termómetro.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El peso uruguayo flota sin mercado paralelo, y en zonas turísticas muchos precios se publican también en dólares.",
    },
    {
      value: "660 km",
      label: "de costa",
      note: "Del Río de la Plata al Atlántico. El agua es marrón en Montevideo y azul a partir de Punta del Este.",
    },
    {
      value: "UTC−3",
      label: "todo el año",
      note: "Sin horario de verano, igual que Argentina y Brasil.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Uruguay",
      body: [
        "Hay un solo tipo de cambio y no hay mercado paralelo. En zonas turísticas muchos precios aparecen en pesos y en dólares, y los dólares se aceptan en buena parte de los comercios de la costa.",
        "Pagar con tarjeta extranjera suele traer beneficios de IVA en restaurantes y alojamientos, aunque las condiciones cambian según la temporada. Preguntá al pagar: el descuento es grande y no siempre te lo aplican solo.",
        "La tarjeta se acepta casi en todos lados. Llevá algo de efectivo para ferias y pueblos chicos de la costa.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Hemisferio sur: enero es verano y julio es invierno. El verano, de diciembre a febrero, es la temporada de playa, con la costa llena y los precios en su punto más alto.",
        "El invierno es húmedo y ventoso. No nieva, pero con viento del sur y humedad alta una tarde de diez grados se siente bastante más fría. Es buena época para Montevideo, Colonia y las termas del litoral.",
        "Marzo, abril y noviembre son los meses que más rinden: agua todavía templada, menos gente y precios de temporada baja.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "temporada",
      title: "La temporada cambia todo en la costa",
      body: [
        "Punta del Este, José Ignacio o Punta del Diablo son lugares distintos en enero y en junio. En verano están llenos, caros y abiertos; en invierno muchos restaurantes y alojamientos cierran.",
        "Si vas en temporada alta, reservá con tiempo, sobre todo para la primera quincena de enero y Carnaval. Si vas fuera de temporada, confirmá antes que el lugar que elegiste esté abierto.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Es un país chico y se recorre bien en ómnibus. Montevideo a Punta del Este o a Colonia son dos o tres horas, con salidas frecuentes desde la terminal Tres Cruces.",
        "Muchos llegan desde Buenos Aires en ferry a Colonia o a Montevideo. Es una forma cómoda de entrar y combina bien con un viaje por Argentina.",
        "Para los pueblos chicos de la costa de Rocha conviene auto, o ajustarse a los horarios de los ómnibus, que fuera de temporada son pocos.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad: atención a las pertenencias en la rambla y en zonas concurridas de Montevideo.",
        "El sol de verano en la costa quema rápido, con brisa que engaña. El protector solar se consigue en todos lados.",
        "El agua de la canilla es potable en todo el país.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "La costa atlántica tiene playas amplias y de todos los estilos. El agua es fría para quien viene del trópico.",
    },
    {
      dimension: "Tranquilidad",
      score: 9,
      rationale:
        "Ritmo pausado, distancias cortas y pocas sorpresas. Es de los países más fáciles de la región para un primer viaje.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Parrilla de primer nivel, buenos vinos tannat y una cocina sencilla que se hace bien.",
    },
    {
      dimension: "Vida urbana y cultura",
      score: 7,
      rationale:
        "Montevideo tiene candombe, ferias y una vida de barrio con carácter. Colonia es patrimonio y se camina en una tarde.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5.5,
      rationale:
        "Es el país más caro de la región para un viajero, sobre todo en la costa en verano.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale:
        "Distancias cortas, buenos ómnibus y servicios confiables. Se recorre sin planificar demasiado.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "Un tipo de cambio, precios estables y tarjeta en todos lados.",
    },
  ],

  shines: [
    "Un país entero que se recorre en ómnibus sin vuelos internos.",
    "La costa de Rocha fuera de temporada, cuando los pueblos vuelven a ser de los pescadores.",
    "El agua potable y la previsibilidad: nada que entender, nada que adivinar.",
  ],

  costs: [
    "Los precios de la costa en enero, que están entre los más altos del continente.",
    "Un invierno húmedo y ventoso que pide más abrigo del que sugiere el número.",
    "Fuera de temporada, muchos lugares de la costa cierran.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima y sus precios: José Ignacio en enero no cuesta lo mismo que Salto en junio. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "montevideo",
      name: "Montevideo",
      region: "Sur",
      tag: "Rambla y Ciudad Vieja",
      blurb:
        "Una capital tranquila frente al Río de la Plata, con veinte kilómetros de rambla, una Ciudad Vieja para caminar y candombe en la calle. Es la base del planificador.",
      coords: [-34.9011, -56.1645],
      featured: true,
      image: null,
    },
    {
      id: "punta-del-este",
      name: "Punta del Este",
      region: "Costa atlántica",
      tag: "Playa y temporada",
      blurb:
        "El balneario más conocido del país, con una playa sobre el río y otra sobre el mar. En enero está lleno y caro; el resto del año, tranquilo.",
      coords: [-34.962, -54.945],
      image: null,
    },
    {
      id: "colonia-del-sacramento",
      name: "Colonia del Sacramento",
      region: "Litoral",
      tag: "Casco histórico",
      blurb:
        "Un barrio histórico de calles empedradas frente a Buenos Aires, patrimonio de la UNESCO. Se recorre en un día y es la entrada natural para quien llega en ferry.",
      coords: [-34.4626, -57.84],
      image: null,
    },
    {
      id: "jose-ignacio",
      name: "José Ignacio",
      region: "Costa atlántica",
      tag: "Pueblo de faro",
      blurb:
        "Un pueblo chico alrededor de un faro, con playas amplias y la gastronomía más cara del país. Es el lugar más exclusivo de la costa en temporada.",
      coords: [-34.8448, -54.634],
      image: null,
    },
    {
      id: "cabo-polonio",
      name: "Cabo Polonio",
      region: "Costa atlántica",
      tag: "Sin luz ni calles",
      blurb:
        "Un puñado de casas sobre una punta de dunas, con lobos marinos y sin red eléctrica. Se llega en camión por la arena desde la ruta.",
      coords: [-34.4005, -53.7816],
      image: null,
    },
    {
      id: "punta-del-diablo",
      name: "Punta del Diablo",
      region: "Costa atlántica",
      tag: "Surf y pescadores",
      blurb:
        "Un pueblo de pescadores que se volvió destino de surf y de gente joven en verano. Cerca está el parque de Santa Teresa.",
      coords: [-34.047, -53.553],
      image: null,
    },
    {
      id: "piriapolis",
      name: "Piriápolis",
      region: "Costa atlántica",
      tag: "Balneario clásico",
      blurb:
        "Un balneario de principios del siglo pasado, con rambla y cerros para subir. Más familiar y accesible que Punta del Este.",
      coords: [-34.8667, -55.2747],
      image: null,
    },
    {
      id: "carmelo",
      name: "Carmelo",
      region: "Litoral",
      tag: "Viñedos y río",
      blurb:
        "Un pueblo sobre el río rodeado de bodegas, tranquilo y con hoteles de campo. Combina bien con Colonia.",
      coords: [-34.0, -58.2833],
      image: null,
    },
    {
      id: "salto",
      name: "Salto",
      region: "Litoral norte",
      tag: "Termas",
      blurb:
        "La ciudad de las termas del litoral, con piletas de agua caliente abiertas todo el año. Es el mejor plan de invierno del país.",
      coords: [-31.3833, -57.9667],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Uruguay tiene cuatro estaciones de verdad. En verano alcanza con ropa liviana, traje de baño y algo para la noche, que en la costa refresca. En invierno no nieva, pero la humedad y el viento hacen que diez grados se sientan como cinco: abrigo medio, algo impermeable y capas. Si podés elegir, marzo, abril y noviembre son los meses que más rinden.",
    keyPoints: [
      "Las estaciones son las del hemisferio sur: enero es verano de playa y julio es invierno húmedo.",
      "El viento y la humedad hacen que el frío se sienta más de lo que marca el termómetro. Una campera cortaviento rinde más que un abrigo pesado.",
      "En la costa, las noches de verano refrescan: siempre algo de manga larga.",
      "Fuera de temporada muchos lugares de la costa cierran. Confirmá antes de ir.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y traje de baño. El sol de la costa quema rápido con brisa, así que protector y gorro aunque no se sienta calor.",
      templado:
        "Capas: remera, algo de manga larga y una campera liviana para la noche, que en la costa refresca enseguida.",
      fresco:
        "Buzo o polar y campera cortaviento. El viento del río hace que se sienta varios grados menos.",
      frio: "Campera de abrigo, bufanda y algo impermeable. No nieva, pero el invierno uruguayo es húmedo y el frío entra.",
    },
    plug: {
      types: "Tipo C, F, I y L",
      voltage: "220 V, 50 Hz",
      note: "Conviven varios tipos de enchufe y no siempre sabés cuál te va a tocar. Un adaptador universal resuelve todo; revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá una campera cortaviento",
          body: "El viento del río y del mar es constante y es lo que más cambia la sensación térmica, en verano de noche y en invierno todo el día.",
        },
        {
          title: "Pagá con tarjeta extranjera y preguntá por el IVA",
          body: "Suele haber beneficios de IVA para turistas que pagan con tarjeta del exterior. Las condiciones cambian según la temporada, así que preguntá al pagar.",
        },
        {
          title: "Reservá con tiempo si vas en enero",
          body: "La primera quincena de enero y Carnaval son los momentos más llenos de la costa. Lo que queda libre a último momento es lo más caro.",
        },
        {
          title: "Probá el ómnibus antes que el auto",
          body: "Para Montevideo, Colonia y Punta del Este, el ómnibus es cómodo, frecuente y mucho más barato que alquilar.",
        },
        {
          title: "Llevá traje de baño también en invierno",
          body: "Las termas del litoral funcionan todo el año y son el mejor plan del invierno uruguayo.",
        },
        {
          title: "Calzado cómodo para empedrado",
          body: "Colonia y la Ciudad Vieja de Montevideo se recorren a pie sobre adoquines. Un par cómodo vale más que dos lindos.",
        },
      ],
      donts: [
        {
          title: "No subestimes el invierno",
          body: "Diez grados con humedad y viento del sur se sienten mucho más fríos que diez grados secos. Llevá más abrigo del que pensás.",
        },
        {
          title: "No asumas que todo está abierto fuera de temporada",
          body: "En la costa de Rocha y en Punta del Este muchos restaurantes y alojamientos cierran de abril a noviembre.",
        },
        {
          title: "No cargues mucho efectivo",
          body: "La tarjeta se acepta casi en todos lados y además puede darte beneficios de IVA. El efectivo es para ferias y pueblos chicos.",
        },
        {
          title: "No compres agua embotellada en todos lados",
          body: "El agua de la canilla es potable en todo el país. Una botella reutilizable ahorra plata y plástico.",
        },
        {
          title: "No des por sentado que el enchufe entra",
          body: "Conviven varios tipos. Un adaptador universal evita sorpresas.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "ropa",
        title: "Ropa según la estación",
        notice: {
          tone: "info",
          title: "El viento cambia la temperatura",
          body: "En la rambla y en la costa el viento es casi constante. La misma temperatura se siente muy distinta con y sin viento.",
        },
        summary: "Lo que cubre verano e invierno",
        items: [
          "Campera cortaviento",
          "Buzo o polar",
          "Algo de manga larga para las noches de verano",
          "Abrigo medio y bufanda si vas entre mayo y septiembre",
          "Traje de baño, también para las termas en invierno",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "El sol quema aunque haga fresco",
          body: "Con brisa de mar no se siente el calor, pero la quemadura llega igual. Repetí el protector después del agua.",
        },
        summary: "Lo específico de la costa en verano",
        items: [
          "Protector solar de factor alto",
          "Gorro y anteojos de sol",
          "Ojotas",
          "Toalla liviana de microfibra",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador de enchufe universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y antiácido",
          "Repelente para las noches de verano en la costa",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Protector solar de factor alto y remera con protección UV",
          "Una capa extra para las noches con viento",
          "Botella reutilizable: el agua de la canilla es potable",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa solo de verano en marzo o noviembre",
        why: "Los días pueden ser de playa, pero las noches con viento son frescas.",
        instead: "Una campera liviana y algo de manga larga.",
      },
      {
        leave: "Un abrigo pesado de nieve",
        why: "No nieva y la temperatura casi nunca baja de cero. Lo que molesta es la humedad y el viento.",
        instead: "Abrigo medio, cortaviento y capas.",
      },
      {
        leave: "El paraguas",
        why: "Con el viento de la rambla dura poco.",
        instead: "Una campera con capucha.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados y puede darte beneficios de IVA.",
        instead: "Algo de efectivo para ferias y la tarjeta para el resto.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Uruguay es informal y buena parte del paseo es sobre adoquines o arena.",
        instead: "Algo cómodo que sirva para salir.",
      },
      {
        leave: "Agua embotellada en la valija",
        why: "El agua de la canilla es potable en todo el país.",
        instead: "Una botella reutilizable.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en un viaje de playa y conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente sí. Conviven varios tipos de enchufe y no siempre sabés cuál te va a tocar. Un adaptador universal resuelve todo. El voltaje es 220 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Para playa, de diciembre a febrero. Para combinar buen clima, precios más bajos y menos gente, marzo, abril y noviembre.",
      },
      {
        question: "¿Hace mucho frío en invierno?",
        answer:
          "No nieva y rara vez baja de cero, pero la humedad y el viento hacen que se sienta más frío de lo que marca el termómetro. Abrigo medio y capas alcanzan.",
      },
      {
        question: "¿Se puede pagar en dólares?",
        answer:
          "En zonas turísticas, en muchos comercios sí. Igual conviene pagar con tarjeta extranjera, que además puede darte beneficios de IVA.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Cómo llego desde Buenos Aires?",
        answer:
          "En ferry a Colonia o a Montevideo, o en avión. El ferry es cómodo y combina bien con un viaje por Argentina.",
      },
      {
        question: "¿Está todo abierto fuera de temporada?",
        answer:
          "En las ciudades sí. En la costa, muchos restaurantes y alojamientos cierran de abril a noviembre. Confirmá antes de ir.",
      },
      {
        question: "¿De qué tamaño conviene la valija?",
        answer:
          "En verano, un carry-on alcanza. En invierno, con abrigo y capas, una valija mediana es más realista.",
      },
    ],
  },
};
