import type { DestinationGuide } from "./types";

/**
 * Guía de los Países Bajos.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un clima sin extremos que igual define la valija,
 * porque lo que pesa es el viento y la lluvia, no la temperatura. Y la
 * bicicleta como transporte principal, que cambia hasta qué ropa conviene.
 */
export const paisesBajos: DestinationGuide = {
  slug: "paises-bajos",
  country: "Países Bajos",
  subregion: "Europa Occidental",
  subhead:
    "Canales, museos de primer nivel y un país entero hecho para la bicicleta. Plano, húmedo y con viento todo el año: lo que manda en la valija no es el frío, es la lluvia.",

  image: null,

  highlights: [
    {
      value: "35.000 km",
      label: "de ciclovías",
      note: "La bicicleta es el transporte principal y tiene prioridad. Al caminar, la bicisenda no es vereda.",
    },
    {
      value: "Abr–May",
      label: "los tulipanes",
      note: "Los campos florecen entre fines de marzo y principios de mayo, y Keukenhof abre solo en esa ventana.",
    },
    {
      value: "26 %",
      label: "del país bajo el nivel del mar",
      note: "Por eso los diques, los canales y los molinos. Y por eso el viento: no hay montañas que lo frenen.",
    },
    {
      value: "Sin efectivo",
      label: "en muchos cafés y comercios",
      note: "Se paga con tarjeta o con el teléfono, y algunos lugares ya no reciben billetes. Llevá dos tarjetas por si una falla.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Los Países Bajos son parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: los Países Bajos, Bélgica y Alemania en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Tarjeta, casi siempre",
      body: [
        "La moneda es el euro, y los Países Bajos están entre los países que menos usan efectivo: muchos cafés, negocios y algunos supermercados solo aceptan tarjeta o teléfono. Llevá dos tarjetas por si una no pasa.",
        "Ámsterdam cobra una de las tasas turísticas más altas de Europa, que se suma al precio del alojamiento. Fijate si la reserva la incluye.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Plano, húmedo y con viento",
      body: [
        "Los Países Bajos son hemisferio norte: enero es invierno y julio, verano. El clima es oceánico: inviernos grises y húmedos cerca de cero, veranos frescos con días largos y lluvia en cualquier mes.",
        "No hay montañas, así que el viento del mar del Norte cruza el país sin freno y hace que todo se sienta más frío. En bicicleta, se siente el doble.",
        "La diferencia entre ciudades es poca: la costa y las islas son algo más templadas en invierno y más frescas en verano, y el sur, con Maastricht, un poco más cálido en julio.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Abril y mayo son la temporada de los tulipanes y la más linda del año, también la más llena. A fines de abril, el Día del Rey tiñe el país de naranja.",
        "De junio a septiembre los días son largos y frescos, ideales para pedalear. El invierno es gris y oscuro temprano, pero los museos no cierran y diciembre trae luces y mercados.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por los Países Bajos",
      body: [
        "Los trenes unen las ciudades cada pocos minutos y todo el país queda a pocas horas. Se paga apoyando la tarjeta sin contacto al subir y al bajar: si no marcás la salida, te cobran la tarifa máxima.",
        "La bicicleta es el transporte principal. Se alquila en todas las ciudades y en muchas estaciones de tren, y las ciclovías llegan a todos lados.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en el centro de Ámsterdam y en las estaciones, y candado siempre para la bici.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Ciudades y canales",
      score: 9,
      rationale:
        "Ámsterdam, Utrecht, Haarlem y Delft: canales, casas angostas y centros chicos que se recorren a pie o en bicicleta.",
    },
    {
      dimension: "Museos",
      score: 9.5,
      rationale:
        "El Rijksmuseum, el Van Gogh y la casa de Ana Frank en una sola ciudad, y museos de primer nivel en el resto.",
    },
    {
      dimension: "Andar en bicicleta",
      score: 10,
      rationale:
        "El país mejor preparado del mundo para pedalear: plano, con ciclovías por todos lados y bicicletas para alquilar en cada estación.",
    },
    {
      dimension: "Paisajes",
      score: 7,
      rationale:
        "Molinos, campos de tulipanes y diques. Lindo y muy característico, pero plano y parecido de punta a punta.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6.5,
      rationale:
        "Alojamiento caro, sobre todo en Ámsterdam. Comer y moverse es razonable.",
    },
    {
      dimension: "Facilidad logística",
      score: 9.5,
      rationale:
        "Un país chico, con trenes cada pocos minutos entre ciudades y todo a menos de tres horas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "El euro y precios claros. Lo único a prever es que muchos lugares no aceptan efectivo.",
    },
  ],

  shines: [
    "Recorrer un país entero en bicicleta, sin subidas y con ciclovías por todos lados.",
    "Museos de primer nivel en ciudades chicas y fáciles.",
    "Trenes tan frecuentes que se puede dormir en un lugar y moverse por el día.",
  ],

  costs: [
    "Lluvia y viento en cualquier mes.",
    "Ámsterdam es cara para dormir, y se llena.",
    "Paisajes lindos pero parecidos: el país es plano de punta a punta.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima, aunque acá las diferencias son chicas: el viento de Texel no es el de Maastricht. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "amsterdam",
      name: "Ámsterdam",
      region: "Ámsterdam y alrededores",
      tag: "Canales y museos",
      blurb:
        "Canales del siglo XVII, el Rijksmuseum, el Van Gogh y la casa de Ana Frank, en una ciudad que se recorre en bicicleta. Es la base del planificador: invierno gris cerca de cero, verano fresco con días larguísimos.",
      coords: [52.3676, 4.9041],
      featured: true,
      image: null,
    },
    {
      id: "rotterdam",
      name: "Róterdam",
      region: "Centro y oeste",
      tag: "Arquitectura moderna",
      blurb:
        "El puerto más grande de Europa y una ciudad reconstruida con arquitectura de vanguardia. Cerca, los molinos de Kinderdijk.",
      coords: [51.9244, 4.4777],
      image: null,
    },
    {
      id: "la-haya",
      name: "La Haya y la costa",
      region: "Costa e islas",
      tag: "Cortes y playa",
      blurb:
        "La sede del gobierno y de las cortes internacionales, con La joven de la perla en su museo y la playa de Scheveningen a minutos.",
      coords: [52.0705, 4.3007],
      image: null,
    },
    {
      id: "utrecht",
      name: "Utrecht",
      region: "Centro y oeste",
      tag: "Canales con terrazas",
      blurb:
        "Canales con terrazas a ras del agua, una torre medieval y vida estudiantil. Tiene el encanto de Ámsterdam con mucha menos gente.",
      coords: [52.0907, 5.1214],
      image: null,
    },
    {
      id: "haarlem",
      name: "Haarlem y los tulipanes",
      region: "Ámsterdam y alrededores",
      tag: "Tulipanes en primavera",
      blurb:
        "Una ciudad chica y linda a quince minutos de Ámsterdam en tren, y la puerta a los campos de tulipanes y a Keukenhof entre fines de marzo y principios de mayo.",
      coords: [52.3874, 4.6462],
      image: null,
    },
    {
      id: "maastricht",
      name: "Maastricht",
      region: "Sur",
      tag: "Otro país",
      blurb:
        "En el extremo sur, entre Bélgica y Alemania, con colinas, cuevas y una cocina más de sobremesa. La ciudad más cálida del país en verano.",
      coords: [50.8514, 5.691],
      image: null,
    },
    {
      id: "groninga",
      name: "Groninga",
      region: "Norte",
      tag: "Ciudad estudiantil",
      blurb:
        "La gran ciudad del norte, joven y universitaria, con un centro sin autos y vida nocturna. Más fría y ventosa que el oeste.",
      coords: [53.2194, 6.5665],
      image: null,
    },
    {
      id: "giethoorn",
      name: "Giethoorn",
      region: "Norte",
      tag: "Pueblo sin calles",
      blurb:
        "Un pueblo de casas con techo de paja unido por canales y puentes de madera, que se recorre en bote. Muy visitado en verano; en invierno, a veces, los canales se congelan.",
      coords: [52.7392, 6.0778],
      image: null,
    },
    {
      id: "texel",
      name: "Texel",
      region: "Costa e islas",
      tag: "Isla de dunas",
      blurb:
        "La isla más grande del mar de Frisia, con dunas, playas largas, ovejas y faros, a un ferry corto del continente. Viento todo el año.",
      coords: [53.0547, 4.797],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En los Países Bajos el clima no es extremo, pero es húmedo, ventoso y cambiante: la valija se arma en capas, con una campera impermeable que corte el viento en cualquier estación. Los veranos son frescos y rara vez pasan los veinticinco grados; los inviernos, grises y cerca de cero. Si vas a andar en bicicleta —y vas a querer—, sumá algo impermeable para las piernas y dejá el paraguas: con el viento no sirve.",
    keyPoints: [
      "Hemisferio norte: el invierno va de diciembre a febrero, gris y cerca de cero; el verano, de junio a agosto, fresco y con días largos.",
      "Llueve poco pero seguido, en cualquier mes, y el viento es constante: no hay montañas que lo frenen.",
      "Los tulipanes florecen entre fines de marzo y principios de mayo. Es la temporada más linda y la más llena.",
      "La bicicleta es el transporte principal y tiene prioridad: la bicisenda no es vereda.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y un buzo para la noche. Los días de más de veinticinco grados son pocos, y muchas casas y hoteles no tienen aire acondicionado.",
      templado:
        "Capas y una campera impermeable liviana. Es el verano holandés: agradable, ventoso y con algún chaparrón.",
      fresco:
        "Sweater o polar y campera impermeable con capucha. El viento hace que se sienta varios grados menos.",
      frio: "Abrigo que corte el viento, gorro, guantes y calzado que no se moje. El frío es húmedo, y en bicicleta se siente el doble.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Alquilá una bicicleta",
          body: "Es la mejor forma de moverse en cualquier ciudad holandesa. Respetá las señales, usá luces de noche y atala siempre con candado: los robos de bicicletas son comunes.",
        },
        {
          title: "Marcá la entrada y la salida en el transporte",
          body: "En trenes, tranvías y buses se apoya la tarjeta sin contacto al subir y al bajar. Si te olvidás de marcar la salida, te cobran la tarifa máxima.",
        },
        {
          title: "Reservá los museos grandes",
          body: "El Rijksmuseum, el Van Gogh y la casa de Ana Frank venden entradas con horario. La de Ana Frank se agota con semanas de anticipación.",
        },
        {
          title: "Andá a Keukenhof temprano",
          body: "En temporada de tulipanes el parque se llena desde media mañana. Llegar a la apertura y entre semana cambia la visita.",
        },
        {
          title: "Salí de Ámsterdam",
          body: "Utrecht, Haarlem o Delft tienen canales y casas igual de lindos, con mucha menos gente, a menos de una hora en tren.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No camines por la bicisenda",
          body: "Están marcadas en rojo o con otro piso, y las bicicletas van rápido. Es la forma más común de llevarse un susto.",
        },
        {
          title: "No cuentes con pagar en efectivo",
          body: "Muchos cafés, negocios y hasta algunos supermercados no aceptan billetes. La tarjeta o el teléfono resuelven todo.",
        },
        {
          title: "No saques fotos en el Barrio Rojo",
          body: "Fotografiar a las personas en las vidrieras está prohibido y mal visto. Si vas, que sea a mirar sin cámara.",
        },
        {
          title: "No subestimes el viento en bicicleta",
          body: "Diez kilómetros con viento en contra se sienten como veinte. Calculá margen y, si podés, elegí una bici con cambios.",
        },
        {
          title: "No lleves una valija enorme",
          body: "Las casas y los hoteles del centro tienen escaleras angostas y empinadas, muchas veces sin ascensor.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "lluvia",
        title: "Lluvia y viento",
        notice: {
          tone: "info",
          title: "Viento todos los días",
          body: "El país es plano y está frente al mar del Norte: el viento es constante y la lluvia llega de golpe. Lo impermeable vale más que lo abrigado.",
        },
        summary: "Lo que cubre cualquier mes",
        items: [
          "Campera impermeable que corte el viento",
          "Pantalón que seque rápido, o uno impermeable si vas a pedalear",
          "Gorro y guantes de octubre a abril",
          "Calzado que no se moje",
          "Capas para el interior, donde hay calefacción",
        ],
      },
      {
        id: "bicicleta",
        title: "En bicicleta",
        notice: {
          tone: "warn",
          title: "La bici tiene prioridad",
          body: "Las bicisendas están en todos lados y las bicicletas van rápido. Mirá antes de cruzar cualquier carril rojo, y si pedaleás, respetá las señales y usá luces de noche.",
        },
        summary: "Si vas a pedalear",
        items: [
          "Ropa cómoda que aguante la lluvia",
          "Candado: los robos de bicicletas son comunes",
          "Luces para la noche, si la bici no tiene",
          "Mochila chica en vez de bolso de mano",
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
          "Analgésico y algo para el resfrío",
          "Curitas, por si la bici o los adoquines te juegan una mala pasada",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "El paraguas",
        why: "Con el viento holandés dura poco, y en bicicleta no se puede usar.",
        instead: "Una campera impermeable con capucha.",
      },
      {
        leave: "Mucho efectivo",
        why: "Muchos lugares ya no aceptan billetes.",
        instead: "Dos tarjetas, por si una falla.",
      },
      {
        leave: "Ropa solo de verano para julio",
        why: "El verano holandés es fresco y ventoso, con noches de menos de quince grados.",
        instead: "Capas y un buzo.",
      },
      {
        leave: "Zapatos de taco",
        why: "Calles de ladrillo, adoquines, puentes y muchas horas a pie o en bici.",
        instead: "Zapatillas cómodas.",
      },
      {
        leave: "Una valija enorme",
        why: "Las casas y hoteles del centro tienen escaleras angostas y empinadas, muchas veces sin ascensor.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En las zonas más turísticas de Ámsterdam llaman la atención de los carteristas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a los Países Bajos?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuándo florecen los tulipanes?",
        answer:
          "Entre fines de marzo y principios de mayo, según el año. Keukenhof, el parque de flores más famoso, abre solo en esa temporada.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a septiembre. Abril y mayo tienen los tulipanes y el Día del Rey; el verano, días largos y frescos. El invierno es gris, pero los museos no cierran.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "Casi todo, y muchos lugares solo aceptan tarjeta. Llevá dos por si una falla; el efectivo casi no hace falta.",
      },
      {
        question: "¿Puedo andar en bicicleta si no tengo experiencia?",
        answer:
          "Las ciclovías son excelentes, pero el tránsito de bicis en el centro de Ámsterdam es intenso. Empezá en un parque o en una ciudad más tranquila, como Utrecht o Haarlem.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, y de muy buena calidad.",
      },
      {
        question: "¿Qué es el Día del Rey?",
        answer:
          "A fines de abril, el cumpleaños del rey: el país entero se viste de naranja y las calles se llenan de ferias y fiestas. Es divertido, y es el día más lleno del año en Ámsterdam.",
      },
    ],
  },
};
