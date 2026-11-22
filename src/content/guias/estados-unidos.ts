import type { DestinationGuide } from "./types";

/**
 * Guía de Estados Unidos.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: es el primero con más de nueve ciudades en el
 * planificador (spec, 22): doce, y trece desde que se sumó Vail para el
 * esquí (spec, 23). Con nueve, Alaska y Hawái no entraban sin sacar a
 * Nueva York o a California, y son justo los dos extremos que hacen que la
 * maleta dependa de la ciudad: Anchorage en enero y Honolulu en el mismo mes.
 * También es el primer país donde el precio de la etiqueta no es el que se
 * paga: el impuesto a las ventas se suma en la caja y la propina es parte del
 * sueldo. La guía lo dice arriba de todo, porque cambia el presupuesto.
 */
export const estadosUnidos: DestinationGuide = {
  slug: "estados-unidos",
  country: "Estados Unidos",
  subregion: "Norteamérica",
  subhead:
    "Rascacielos, parques nacionales, desiertos, nieve y playas de verano todo el año. Un país del tamaño de un continente, donde la maleta depende de la ciudad.",

  image: null,

  highlights: [
    {
      value: "+60",
      label: "parques nacionales",
      note: "Del Gran Cañón a Yellowstone, Yosemite y el Denali, en Alaska.",
    },
    {
      value: "+ impuesto",
      label: "en la caja",
      note: "El precio de la etiqueta no incluye el impuesto a las ventas, que cambia según el estado y la ciudad.",
    },
    {
      value: "18–20 %",
      label: "de propina",
      note: "En los restaurantes con servicio de mesa no es opcional en la práctica: es parte del sueldo de quien atiende.",
    },
    {
      value: "ESTA o visa",
      label: "para entrar",
      note: "Los pasaportes del Programa de Exención de Visas piden la ESTA antes de volar. El resto necesita una visa con entrevista.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Los pasaportes del Programa de Exención de Visas entran con la ESTA, una autorización que se pide en línea antes de volar. No es una visa ni garantiza la entrada: la decisión la toma el agente de migración al llegar.",
        "Los demás pasaportes necesitan una visa de turista, con entrevista en un consulado. La espera para la entrevista puede ser de meses, así que conviene pedirla con tiempo.",
        "Estados Unidos restringe la entrada de los ciudadanos de algunos países, y la lista cambia. Verifica la situación de tu pasaporte en el sitio del Departamento de Estado antes de reservar.",
        "Al llegar pueden preguntarte dónde te vas a quedar y cuándo te vas. No se puede entrar con fruta, verdura, carne ni plantas: si llevas comida, se declara.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "Con tarjeta casi en todos lados, y cada vez más sin contacto. Algunos lugares ya no aceptan efectivo. Una tarjeta sin cargos por compras en el exterior ahorra bastante.",
        "Los precios de las etiquetas y de los menús no incluyen el impuesto a las ventas: se suma en la caja y cambia según el estado y la ciudad.",
        "En restaurantes con mesero, la propina va de un 18 a un 20 % de la cuenta. También se deja en bares, taxis, viajes en aplicación y a quien limpia la habitación del hotel.",
        "Los hoteles suman impuestos y, en zonas turísticas, un cargo diario por instalaciones. Mira el precio total antes de reservar.",
      ],
    },
    {
      id: "salud",
      title: "Salud y seguro",
      body: [
        "La atención médica es carísima para quien no vive en el país: una consulta de urgencia puede costar miles de dólares. Un seguro de viaje con cobertura médica alta no es un detalle.",
        "El agua corriente es potable en todo el país.",
        "En farmacias de cadena se consiguen sin receta los medicamentos comunes. Para lo demás piden receta de un médico local, así que la medicación habitual se lleva desde casa, con su receta.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Depende de la región. En el noreste y el medio oeste, la primavera y el otoño son lo mejor; el invierno trae nieve y temperaturas bajo cero, y el verano es caluroso y húmedo.",
        "Florida y Hawái son verano casi todo el año. En Florida, de noviembre a abril es la época seca; de junio a noviembre es la temporada de huracanes, con el pico entre agosto y octubre.",
        "El desierto del suroeste se disfruta en primavera y en otoño: en julio, Las Vegas pasa los 40 grados. En las Rocosas, la temporada de esquí va de diciembre a abril, y la de caminatas, de junio a septiembre.",
        "Alaska se visita sobre todo de junio a agosto, con días de casi veinte horas de luz. En invierno hace mucho frío y es la época de las auroras boreales.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Las distancias son enormes: de Nueva York a Los Ángeles hay unas seis horas de vuelo. Entre regiones se vuela, y los vuelos internos suelen cobrar aparte cada maleta en bodega.",
        "El tren sirve sobre todo en el corredor del noreste, entre Boston, Nueva York y Washington. Para lo demás hay buses de larga distancia.",
        "Nueva York, Washington, Chicago y San Francisco se recorren en transporte público. Los Ángeles, Florida y los parques nacionales piden auto.",
        "Para alquilar un auto hace falta una tarjeta de crédito, y quien tiene menos de 25 años paga un recargo. En la mayoría de los estados alcanza con la licencia de tu país para una visita corta; el permiso internacional ayuda.",
      ],
    },
    {
      id: "parques",
      title: "Los parques nacionales",
      body: [
        "Son más de sesenta, del Gran Cañón a Yellowstone, Yosemite y Denali. Hay un pase anual que cubre la entrada a todos.",
        "Desde 2026, quienes no residen en Estados Unidos pagan un recargo por persona en los once parques más visitados, y el pase anual les cuesta más.",
        "En temporada alta, algunos parques piden reservar un horario de entrada, y los alojamientos de adentro o de al lado se llenan con meses de anticipación.",
      ],
    },
    {
      id: "nieve",
      title: "Nieve y esquí",
      body: [
        "De noviembre a abril se esquía en las Rocosas —Vail, Breckenridge y Aspen, en Colorado; Park City, en Utah, y Jackson Hole, en Wyoming—, en Lake Tahoe, entre California y Nevada, y en Vermont, en el noreste.",
        "El pase del día comprado en la ventanilla es de los más caros del mundo: los pases de varios días o de temporada, comprados con anticipación, rinden mucho más. El equipo y las clases se pagan aparte.",
        "En Colorado se esquía por encima de los 2.500 metros: el aire es seco, el sol es fuerte y algunos sienten la altura los primeros días.",
      ],
    },
    {
      id: "medidas",
      title: "Medidas y horarios",
      body: [
        "Las temperaturas se dan en grados Fahrenheit: 32 °F son 0 °C, y 86 °F son 30 °C. Las distancias, en millas, y la gasolina, en galones.",
        "El país tiene seis husos horarios. Casi todo cambia la hora de marzo a noviembre; Hawái y la mayor parte de Arizona no.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande: atención a las pertenencias en zonas concurridas y cuidado de noche en barrios que no conoces.",
        "La naturaleza pide respeto: en el desierto, agua y nada de caminatas en las horas de más calor; en la montaña, atención a las tormentas de la tarde; en Alaska, a los osos. En el oeste, el humo de los incendios forestales puede cerrar caminos en verano y otoño.",
      ],
    },
    {
      id: "emergencias",
      title: "Emergencias",
      body: ["911"],
    },
  ],

  factsUpdatedAt: "2026-11-22",

  scores: [
    {
      dimension: "Ciudades",
      score: 9.5,
      rationale:
        "Nueva York, Chicago, San Francisco y Nueva Orleans: cada una es un viaje en sí misma.",
    },
    {
      dimension: "Naturaleza y parques",
      score: 10,
      rationale:
        "El Gran Cañón, Yellowstone, Yosemite, los glaciares de Alaska y los volcanes de Hawái.",
    },
    {
      dimension: "Nieve y montaña",
      score: 9,
      rationale:
        "Las Rocosas de Colorado para esquiar y Alaska para el invierno de verdad.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "Florida, Hawái y California, con agua cálida en las dos primeras todo el año.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Caro, sobre todo el alojamiento en las ciudades grandes. Impuesto y propina se suman a cada cuenta.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Vuelos internos a todas partes y todo funciona con tarjeta, pero las distancias son enormes.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "Es el dólar. Lo que cuesta acostumbrarse es al precio final, con impuesto y propina.",
    },
  ],

  shines: [
    "Ciudades que son un viaje en sí mismas, de Nueva York a Nueva Orleans.",
    "Parques nacionales que no tienen comparación en el mundo.",
    "Nieve, desierto y playa en el mismo país, en el mismo mes.",
  ],

  costs: [
    "El precio: alojamiento caro, y el impuesto y la propina en cada cuenta.",
    "Las distancias, que obligan a volar entre regiones.",
    "La entrada: la ESTA o una visa que puede tardar meses.",
  ],

  dataScopeNote:
    "Eliges la ciudad en el planificador y los cálculos se hacen con su clima: Anchorage en enero no pide lo mismo que Miami. Los precios son órdenes de magnitud, no cotizaciones, y salvo la cena no incluyen la propina.",

  places: [
    {
      id: "nueva-york",
      name: "Nueva York",
      region: "Noreste",
      tag: "La ciudad",
      blurb:
        "Manhattan, Central Park, los museos, Broadway y barrios que son un mundo cada uno. Inviernos con nieve y veranos húmedos. Es la base del planificador.",
      coords: [40.7128, -74.006],
      featured: true,
      image: null,
    },
    {
      id: "washington",
      name: "Washington D. C.",
      region: "Noreste",
      tag: "Museos gratis",
      blurb:
        "La capital, con el Capitolio, los monumentos y los museos del Smithsonian, que no cobran entrada. Los cerezos florecen a fines de marzo.",
      coords: [38.9072, -77.0369],
      image: null,
    },
    {
      id: "chicago",
      name: "Chicago",
      region: "Medio Oeste",
      tag: "Arquitectura y blues",
      blurb:
        "Rascacielos sobre el lago Míchigan, recorridos de arquitectura en barco, blues y jazz. El invierno es de los más fríos y ventosos del país.",
      coords: [41.8781, -87.6298],
      image: null,
    },
    {
      id: "nueva-orleans",
      name: "Nueva Orleans",
      region: "Sur",
      tag: "Jazz y carnaval",
      blurb:
        "El Barrio Francés, el jazz en vivo cada noche, la cocina criolla y el Mardi Gras. Calor húmedo de mayo a septiembre.",
      coords: [29.9511, -90.0715],
      image: null,
    },
    {
      id: "miami",
      name: "Miami",
      region: "Florida",
      tag: "Playa todo el año",
      blurb:
        "Miami Beach, el art déco, la Pequeña Habana y la puerta a los Cayos de Florida y los Everglades. Verano todo el año, con lluvias de tarde de junio a octubre.",
      coords: [25.7617, -80.1918],
      image: null,
    },
    {
      id: "orlando",
      name: "Orlando",
      region: "Florida",
      tag: "Parques temáticos",
      blurb:
        "La capital de los parques temáticos, con Disney y Universal, y a una hora del Centro Espacial Kennedy. Inviernos templados y veranos de tormentas.",
      coords: [28.5384, -81.3789],
      image: null,
    },
    {
      id: "denver",
      name: "Denver y las Rocosas",
      region: "Montañas Rocosas",
      tag: "Esquí y montaña",
      blurb:
        "Una ciudad a 1.600 metros, puerta de las estaciones de esquí de Colorado y del Parque Nacional de las Montañas Rocosas. Inviernos con nieve y sol.",
      coords: [39.7392, -104.9903],
      image: null,
    },
    {
      id: "las-vegas",
      name: "Las Vegas y el Gran Cañón",
      region: "Suroeste",
      tag: "Desierto",
      blurb:
        "Los casinos y los espectáculos, y la base para el Gran Cañón, Zion y el Valle de la Muerte. En julio pasa los 40 grados.",
      coords: [36.1699, -115.1398],
      image: null,
    },
    {
      id: "los-angeles",
      name: "Los Ángeles",
      region: "California",
      tag: "Cine y playa",
      blurb:
        "Hollywood, las playas de Santa Mónica y Malibú y un clima templado casi todo el año. Es una ciudad para moverse en auto.",
      coords: [34.0522, -118.2437],
      image: null,
    },
    {
      id: "san-francisco",
      name: "San Francisco",
      region: "California",
      tag: "Puente y niebla",
      blurb:
        "El Golden Gate, los tranvías, Alcatraz y los viñedos de Napa a una hora. El verano es fresco por la niebla: hace falta abrigo en julio.",
      coords: [37.7749, -122.4194],
      image: null,
    },
    {
      id: "honolulu",
      name: "Honolulu (Hawái)",
      region: "Hawái",
      tag: "Islas volcánicas",
      blurb:
        "Waikiki, Pearl Harbor y el cráter Diamond Head en Oahu, la puerta a las demás islas de Hawái. Calor suave todo el año, en medio del Pacífico.",
      coords: [21.3069, -157.8583],
      image: null,
    },
    {
      id: "anchorage",
      name: "Anchorage (Alaska)",
      region: "Alaska",
      tag: "Glaciares y auroras",
      blurb:
        "La puerta de Alaska: glaciares, fiordos, osos y el Denali, la montaña más alta de Norteamérica. Veranos de días larguísimos e inviernos de nieve y auroras.",
      coords: [61.2181, -149.9003],
      image: null,
    },
    {
      id: "vail",
      name: "Vail y Breckenridge",
      region: "Montañas Rocosas",
      tag: "Esquí",
      blurb:
        "Dos de los centros de esquí más grandes del país, en las Rocosas de Colorado, a unas dos horas de Denver por la autopista de montaña. La temporada va de noviembre a abril.",
      coords: [39.6403, -106.3742],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Estados Unidos no tiene un clima: los tiene todos. Nueva York y Chicago en enero piden abrigo de invierno de verdad; Miami, Hawái y Los Ángeles son verano casi todo el año; Las Vegas pasa los 40 grados en julio, y en Anchorage y Denver nieva en invierno. Elige la ciudad y el planificador arma la maleta con su clima.",
    keyPoints: [
      "De la nieve de Alaska al calor del desierto: la maleta depende de la ciudad y del mes.",
      "El noreste y el medio oeste tienen inviernos bajo cero y veranos húmedos.",
      "El aire acondicionado es fuerte en verano: una capa ligera sirve adentro.",
      "La temporada de huracanes, de junio a noviembre, toca Florida y el golfo.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, protector solar y agua a mano. Es el verano de casi todo el país y el clima de Miami y Hawái todo el año. Suma una capa ligera para el aire acondicionado.",
      templado:
        "Camiseta y una capa: suéter o chaqueta ligera para la noche. Es la primavera y el otoño de Nueva York, y el clima de California casi todo el año.",
      fresco:
        "Capas: suéter, chaqueta y algo que corte el viento. San Francisco en verano también es así, por la niebla.",
      frio: "Abrigo de invierno de verdad: chaqueta acolchada, gorro, guantes y calzado que aguante nieve. Es el invierno de Nueva York, Chicago, Denver y Alaska.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de clavijas planas. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V: el secador o la plancha de pelo de 220 V no sirven.",
    },
    tips: {
      dos: [
        {
          title: "Suma el impuesto y la propina a cada precio",
          body: "Ni las etiquetas ni los menús los incluyen. En un restaurante, la cuenta final es un 25 o 30 % más alta que la suma del menú.",
        },
        {
          title: "Viaja con un seguro de cobertura médica alta",
          body: "La atención médica es carísima para quien no vive en el país.",
        },
        {
          title: "Reserva los parques nacionales con tiempo",
          body: "Algunos piden reservar un horario de entrada en temporada alta, y los alojamientos cercanos se llenan meses antes.",
        },
        {
          title: "Lleva una capa ligera aunque sea verano",
          body: "El aire acondicionado de tiendas, buses y aviones es fuerte.",
        },
        {
          title: "Usa una tarjeta sin cargos en el exterior",
          body: "Casi todo se paga con tarjeta, y en algunos lugares no aceptan efectivo.",
        },
        {
          title: "Mira el clima del día en el desierto y la montaña",
          body: "En el Gran Cañón el calor del verano es peligroso, y en las Rocosas las tormentas llegan de tarde.",
        },
      ],
      donts: [
        {
          title: "No vueles sin la ESTA o la visa",
          body: "Sin la autorización correcta, la aerolínea no te deja embarcar.",
        },
        {
          title: "No subestimes las distancias",
          body: "De costa a costa hay seis horas de vuelo: el país no se recorre en una semana.",
        },
        {
          title: "No te vayas sin dejar propina",
          body: "En un restaurante con mesero es parte del sueldo de quien te atiende.",
        },
        {
          title: "No lleves fruta ni comida fresca",
          body: "No se puede entrar con ella, y lo que no se declara se multa.",
        },
        {
          title: "No camines por el desierto sin agua",
          body: "En el Gran Cañón y el Valle de la Muerte el calor del verano mata.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el equipaje de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Antes de reservar",
        notice: {
          tone: "info",
          title: "ESTA o visa",
          body: "Los pasaportes del Programa de Exención de Visas piden la ESTA antes de volar; el resto, una visa con entrevista. Algunas nacionalidades tienen la entrada restringida: verifica la tuya.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "ESTA aprobada o visa vigente en el pasaporte",
          "Seguro de viaje con cobertura médica alta",
          "Reservas de los parques nacionales que piden horario",
          "Licencia de conducir y permiso internacional, si vas a alquilar auto",
        ],
      },
      {
        id: "invierno",
        title: "Invierno y nieve",
        notice: {
          tone: "info",
          title: "Frío de verdad",
          body: "En Nueva York, Chicago, Denver y Alaska el invierno baja de cero, y en Alaska mucho más. Con viento, se siente peor.",
        },
        summary: "Para el noreste, las Rocosas y Alaska",
        items: [
          "Chaqueta acolchada o parka",
          "Gorro, guantes y bufanda",
          "Calzado impermeable con suela que agarre en la nieve",
          "Capa térmica debajo de la ropa",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre en Florida y el golfo, con el pico entre agosto y octubre. Sigue los avisos locales y prefiere reservas que se puedan cambiar.",
        },
        summary: "Para Florida, Hawái y California",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral, para Hawái",
          "Sandalias",
          "Repelente para los Everglades y el atardecer",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Protector solar y algo para las quemaduras",
          "Agua y sales de rehidratación para el desierto",
          "Póliza del seguro a mano, impresa o en el teléfono",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a clavijas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el equipaje de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte y ESTA o visa de cada menor",
          "Si viaja con un solo progenitor, la autorización que pida tu país para salir",
          "Silla de auto si van a alquilar uno: la ley la exige",
          "Protector solar y gorro para los parques temáticos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo de invierno para Florida o Hawái",
        why: "Ahí no hay un mes frío.",
        instead: "Solo una capa ligera para el aire acondicionado.",
      },
      {
        leave: "El secador o la plancha de pelo de 220 V",
        why: "Con 120 V no funcionan bien, y los hoteles tienen secador.",
        instead: "Nada, o uno de doble voltaje.",
      },
      {
        leave: "Mucho efectivo",
        why: "Casi todo se paga con tarjeta, y algunos lugares no aceptan billetes.",
        instead:
          "Una tarjeta sin cargos en el exterior y poco efectivo para propinas.",
      },
      {
        leave: "Una maleta enorme si vas a volar entre ciudades",
        why: "Los vuelos internos suelen cobrar aparte cada maleta en bodega.",
        instead: "Una maleta mediana, o solo equipaje de mano.",
      },
      {
        leave: "Fruta, embutidos o queso fresco",
        why: "No se puede entrar con ellos al país.",
        instead: "Comprar al llegar.",
      },
      {
        leave: "Jeans pesados para el verano del sur",
        why: "Con el calor húmedo de Florida y Nueva Orleans no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "Zapatos nuevos para caminar la ciudad",
        why: "Nueva York se camina mucho, y las ampollas arruinan el viaje.",
        instead: "Calzado cómodo y ya usado.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Depende del pasaporte. Los del Programa de Exención de Visas piden la ESTA en línea antes de volar; el resto necesita una visa con entrevista. Algunas nacionalidades tienen la entrada restringida: verifícalo en el sitio del Departamento de Estado.",
      },
      {
        question: "¿Cuánto se deja de propina?",
        answer:
          "En restaurantes con mesero, entre el 18 y el 20 % de la cuenta. En bares, uno o dos dólares por trago, y también en taxis, aplicaciones y a quien limpia la habitación.",
      },
      {
        question: "¿Por qué pago más que el precio de la etiqueta?",
        answer:
          "Porque el impuesto a las ventas se suma en la caja, y cambia según el estado y la ciudad.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 120 V: revisa que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Depende de la región: primavera y otoño para el noreste y el desierto, el invierno para esquiar en las Rocosas, el verano para Alaska, y cualquier mes para Hawái.",
      },
      {
        question: "¿Cómo me muevo entre ciudades?",
        answer:
          "En avión entre regiones. El tren sirve en el noreste, y para los parques nacionales hace falta auto.",
      },
      {
        question: "¿Puedo conducir con mi licencia?",
        answer:
          "Para una visita corta, en la mayoría de los estados sí. El permiso internacional ayuda, y la empresa de alquiler te pide tarjeta de crédito.",
      },
    ],
  },
};
