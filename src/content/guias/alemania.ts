import type { DestinationGuide } from "./types";

/**
 * Guía de Alemania.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el invierno de verdad, con días cortos y
 * temperaturas cerca de cero en todo el país, y dos costumbres que cambian el
 * día a día del viaje más que el clima: el efectivo, que todavía hace falta en
 * muchos lugares, y los domingos, cuando casi todo cierra.
 */
export const alemania: DestinationGuide = {
  slug: "alemania",
  country: "Alemania",
  subregion: "Europa Occidental",
  subhead:
    "Ciudades muy distintas entre sí, castillos, bosques y un transporte público que funciona. Inviernos fríos y grises, veranos templados con días larguísimos, y el efectivo todavía en la billetera.",

  image: null,

  highlights: [
    {
      value: "Domingos",
      label: "con los comercios cerrados",
      note: "Supermercados y tiendas cierran los domingos, salvo en las estaciones de tren grandes y los aeropuertos. Las compras, el sábado.",
    },
    {
      value: "Efectivo",
      label: "todavía hace falta",
      note: "Alemania usa más efectivo que sus vecinos. La tarjeta avanza, pero un cartel de solo efectivo en un bar no es raro.",
    },
    {
      value: "1 abono",
      label: "para el transporte regional de todo el país",
      note: "El Deutschlandticket cubre metro, buses y trenes regionales en toda Alemania. Es una suscripción mensual: acordate de darla de baja.",
    },
    {
      value: "Nov–Dic",
      label: "mercados navideños",
      note: "Desde fines de noviembre las plazas se llenan de puestos. Es frío de verdad, y temporada alta.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Alemania es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Alemania, Francia e Italia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Efectivo, todavía",
      body: [
        "La moneda es el euro, y Alemania usa más efectivo que el resto de Europa occidental. Las grandes cadenas y los hoteles aceptan tarjeta, pero muchos bares, panaderías, restaurantes chicos y puestos solo toman efectivo.",
        "Retirá de cajeros de bancos, que suelen cobrar menos que los independientes de las zonas turísticas. Y cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
        "Berlín, Hamburgo, Colonia y otras ciudades cobran una tasa por noche de alojamiento que puede no estar incluida en el precio de la reserva.",
      ],
    },
    {
      id: "clima",
      title: "Frío en invierno, templado en verano",
      body: [
        "Alemania es hemisferio norte: enero es invierno y julio, verano. El invierno es frío en todo el país, con temperaturas cerca de cero, cielos grises y días cortos; en Baviera y en la montaña, bajo cero y con nieve.",
        "El verano es templado y agradable, con días que se estiran hasta pasadas las nueve de la noche y algún golpe de calor. El norte, con Hamburgo, es más fresco y ventoso.",
        "La lluvia se reparte en todo el año, en lloviznas o chaparrones. En cualquier estación conviene algo impermeable.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre es la mejor época: días largos, cervecerías al aire libre, festivales y los ríos navegables. El Oktoberfest de Múnich empieza a mediados o fines de septiembre, y el alojamiento se reserva con muchos meses.",
        "Desde fines de noviembre y hasta Navidad, los mercados navideños llenan las plazas de todo el país. Es frío de verdad y temporada alta.",
        "Enero y febrero son grises y fríos, con menos gente y precios más bajos. El planificador usa el clima histórico de cada ciudad, no un pronóstico: con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Alemania",
      body: [
        "Los trenes rápidos unen las ciudades grandes en pocas horas: de Berlín a Múnich son unas cuatro. Se demoran seguido, así que dejá margen en las conexiones y antes de un vuelo.",
        "Dentro de las ciudades el transporte es excelente y no tiene molinetes, pero hay controles. Comprá el boleto antes de subir, y si es de papel, fijate si hay que validarlo en la máquina.",
        "El Deutschlandticket cubre metro, buses y trenes regionales de todo el país, aunque no los trenes rápidos de larga distancia. Se contrata como suscripción mensual, así que si lo sacás, acordate de darlo de baja.",
      ],
    },
    {
      id: "costumbres",
      title: "Domingos y costumbres",
      body: [
        "Los domingos casi todo cierra: supermercados, tiendas y muchos comercios. Abren los de las estaciones de tren grandes y los aeropuertos, y los restaurantes y museos funcionan normalmente.",
        "Las botellas y latas llevan un depósito, el Pfand, que te devuelven en las máquinas de los supermercados. En muchas veredas hay un carril para bicicletas, marcado con otro color: no camines por ahí.",
        "Los peatones esperan el verde aunque no venga nadie. Las precauciones son las de cualquier gran ciudad: atención al celular y a la mochila en el transporte y en las zonas concurridas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Historia y cultura",
      score: 9.5,
      rationale:
        "Berlín y su historia reciente, catedrales góticas, castillos y una oferta enorme de museos y música.",
    },
    {
      dimension: "Ciudades",
      score: 9,
      rationale:
        "Berlín, Múnich, Hamburgo y Colonia son muy distintas entre sí, y todas funcionan bien.",
    },
    {
      dimension: "Paisajes y naturaleza",
      score: 8.5,
      rationale:
        "Los Alpes bávaros, la Selva Negra, el valle del Rin y lagos por todas partes.",
    },
    {
      dimension: "Cerveza y gastronomía",
      score: 8,
      rationale:
        "Cervecerías, panaderías excelentes y cocina regional contundente. Las ciudades grandes suman comida de todo el mundo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7.5,
      rationale:
        "Más accesible de lo que su fama sugiere, sobre todo para comer y dormir fuera de Múnich.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale:
        "Transporte público excelente en las ciudades y trenes a todo el país, aunque los de larga distancia se demoran seguido.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "El euro y precios estables. Lo único a prever es el efectivo, que en muchos lugares todavía hace falta.",
    },
  ],

  shines: [
    "Transporte público que funciona, en las ciudades y entre ellas.",
    "Ciudades muy distintas en un mismo viaje: de Berlín a la Baviera de los castillos.",
    "Más accesible que sus vecinos para comer y dormir, salvo en Múnich.",
  ],

  costs: [
    "Inviernos fríos, grises y con días cortos.",
    "Comercios cerrados los domingos y efectivo que todavía hace falta.",
    "Trenes de larga distancia que se demoran seguido.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Füssen en enero no pide lo mismo que Colonia en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "berlin",
      name: "Berlín",
      region: "Berlín y Sajonia",
      tag: "Capital e historia",
      blurb:
        "Restos del Muro, una isla entera de museos y barrios con vida de día y de noche. Es la base del planificador: inviernos fríos y grises, veranos templados con días larguísimos.",
      coords: [52.52, 13.405],
      featured: true,
      image: null,
    },
    {
      id: "munich",
      name: "Múnich",
      region: "Baviera",
      tag: "Cerveza y Alpes",
      blurb:
        "Cervecerías, palacios y el Oktoberfest, que empieza en septiembre. Los Alpes quedan a un viaje corto. Es la ciudad más cara del país.",
      coords: [48.1351, 11.582],
      image: null,
    },
    {
      id: "hamburgo",
      name: "Hamburgo",
      region: "Norte",
      tag: "Puerto y canales",
      blurb:
        "Un puerto enorme, canales, depósitos de ladrillo y una sala de conciertos sobre el río. Clima del norte: fresco, ventoso y con lluvia frecuente.",
      coords: [53.5511, 9.9937],
      image: null,
    },
    {
      id: "colonia",
      name: "Colonia",
      region: "Renania",
      tag: "La catedral",
      blurb:
        "Una catedral gótica gigante junto a la estación de tren, a orillas del Rin. Ciudad abierta, con cerveza propia, y punto de partida al valle del Rin.",
      coords: [50.9375, 6.9603],
      image: null,
    },
    {
      id: "dresde",
      name: "Dresde",
      region: "Berlín y Sajonia",
      tag: "Barroco reconstruido",
      blurb:
        "Palacios e iglesias barrocas reconstruidos después de la guerra, a orillas del Elba. Tiene uno de los mercados navideños más antiguos del país.",
      coords: [51.0504, 13.7373],
      image: null,
    },
    {
      id: "heidelberg",
      name: "Heidelberg",
      region: "Suroeste",
      tag: "Castillo y universidad",
      blurb:
        "Un castillo en ruinas sobre el río y la universidad más antigua del país. Chica, linda y a una hora de Fráncfort.",
      coords: [49.3988, 8.6724],
      image: null,
    },
    {
      id: "neuschwanstein",
      name: "Füssen y Neuschwanstein",
      region: "Baviera",
      tag: "El castillo de cuento",
      blurb:
        "El castillo que inspiró a Disney, al pie de los Alpes. Las entradas tienen horario y se agotan; en invierno, nieve y mucho frío.",
      coords: [47.5696, 10.7004],
      image: null,
    },
    {
      id: "selva-negra",
      name: "Friburgo y la Selva Negra",
      region: "Suroeste",
      tag: "Bosques y relojes cucú",
      blurb:
        "Bosques oscuros, pueblos con relojes cucú y Friburgo, una de las ciudades más soleadas del país. Senderismo en verano y nieve en invierno.",
      coords: [47.999, 7.8421],
      image: null,
    },
    {
      id: "valle-del-rin",
      name: "Valle del Rin",
      region: "Renania",
      tag: "Castillos y viñedos",
      blurb:
        "El tramo del Rin con un castillo en cada curva y viñedos en las laderas. Se recorre en barco, en tren o en bicicleta, de la primavera al otoño.",
      coords: [50.1537, 7.7148],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Alemania tiene inviernos fríos y grises, con nieve en el sur y en la montaña, y veranos templados con días largos y algún golpe de calor. La lluvia se reparte en todo el año, así que en cualquier estación conviene una campera impermeable. De noviembre a febrero, abrigo de verdad, gorro y guantes; y siempre, algo de efectivo en la billetera, que en muchos lugares todavía hace falta.",
    keyPoints: [
      "Hemisferio norte: el invierno va de diciembre a febrero y es frío en todo el país, más en el sur y en la montaña.",
      "Llueve en cualquier mes, en lloviznas o chaparrones. Un impermeable liviano sirve de marzo a noviembre.",
      "El verano es templado y agradable, con días que se estiran hasta pasadas las nueve de la noche y algún golpe de calor.",
      "Muchos bares y comercios chicos todavía no aceptan tarjeta: llevá efectivo siempre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y algo de manga larga para la noche. Los días de calor fuerte existen, y muchas casas y trenes regionales no tienen aire acondicionado.",
      templado:
        "Capas y una campera impermeable liviana. Es el verano alemán: agradable y con chaparrones.",
      fresco:
        "Sweater o polar, campera impermeable y calzado que no se moje. Primavera y otoño cambian rápido.",
      frio: "Abrigo de verdad, gorro, guantes y calzado abrigado. En Baviera y en la montaña muchos días quedan bajo cero, y los mercados navideños se recorren al aire libre.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá efectivo siempre",
          body: "Muchos bares, panaderías y comercios chicos todavía no aceptan tarjeta. Retirá de un cajero de banco, que suele cobrar menos que los independientes.",
        },
        {
          title: "Hacé las compras el sábado",
          body: "Los domingos casi todo está cerrado. Las tiendas de las estaciones de tren grandes y de los aeropuertos son la excepción.",
        },
        {
          title: "Sacá el abono si te quedás varias semanas",
          body: "El Deutschlandticket cubre metro, buses y trenes regionales de todo el país. Es una suscripción mensual: acordate de darla de baja.",
        },
        {
          title: "Reservá Neuschwanstein con anticipación",
          body: "Las entradas al castillo tienen horario y se agotan en temporada alta. Sin reserva, lo más probable es verlo solo desde afuera.",
        },
        {
          title: "Devolvé las botellas",
          body: "Las botellas y latas llevan un depósito, el Pfand, que te devuelven en las máquinas de los supermercados.",
        },
        {
          title: "Validá el boleto si es de papel",
          body: "Algunos boletos comprados en las máquinas hay que sellarlos antes de subir. Viajar con uno sin validar se multa igual que sin boleto.",
        },
      ],
      donts: [
        {
          title: "No cruces en rojo",
          body: "Los alemanes esperan el verde aunque no venga nadie, y cruzar en rojo puede costarte una multa.",
        },
        {
          title: "No camines por la bicisenda",
          body: "En muchas veredas hay un carril para bicicletas, marcado con otro color. Las bicis van rápido y no esperan.",
        },
        {
          title: "No cuentes con que el tren llegue a horario",
          body: "Los trenes de larga distancia se demoran seguido. Si tenés una conexión o un vuelo, dejá margen.",
        },
        {
          title: "No subestimes el frío de los mercados navideños",
          body: "Se recorren de noche y al aire libre, con temperaturas cerca de cero o menos. Calzado abrigado y guantes.",
        },
        {
          title: "No viajes sin boleto porque no hay molinetes",
          body: "En el transporte público no hay barreras, pero sí controles, y la multa por viajar sin boleto válido es alta.",
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
          title: "El invierno alemán es frío de verdad",
          body: "De diciembre a febrero la temperatura queda cerca de cero en todo el país y bajo cero en el sur y la montaña, con días cortos. Sin abrigo adecuado, se pasa mal.",
        },
        summary: "Lo que pide noviembre a febrero",
        items: [
          "Campera de abrigo que corte el viento",
          "Gorro, guantes y bufanda",
          "Calzado abrigado que no se moje",
          "Medias térmicas",
          "Capas para sacarte adentro, donde hay calefacción",
        ],
      },
      {
        id: "pagos",
        title: "Efectivo y pagos",
        notice: {
          tone: "info",
          title: "Llevá efectivo",
          body: "La tarjeta avanza, pero muchos bares, panaderías y comercios chicos solo aceptan efectivo.",
        },
        summary: "Para no quedarte sin poder pagar",
        items: [
          "Efectivo en euros para el día",
          "Tarjeta que no cobre comisión en el exterior, si tenés",
          "Monedas para los baños públicos",
          "La app del transporte de la ciudad, para comprar boletos",
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
          "Protector labial y crema para el frío seco",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo tarjetas",
        why: "En muchos bares y comercios chicos el efectivo es la única opción.",
        instead: "Algo de efectivo siempre en la billetera.",
      },
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero hace frío en todo el país.",
        instead: "Abrigo de verdad, gorro y guantes.",
      },
      {
        leave: "Zapatos que no aguantan el agua",
        why: "Llueve en cualquier mes, y en invierno hay nieve y aguanieve.",
        instead: "Calzado cómodo e impermeable.",
      },
      {
        leave: "Una valija enorme",
        why: "Los trenes tienen poco espacio para equipaje y muchas estaciones tienen escaleras.",
        instead: "Una valija mediana que puedas subir sola.",
      },
      {
        leave: "Botellas de agua descartables",
        why: "El agua de la canilla es potable y de buena calidad, y las botellas llevan depósito.",
        instead: "Una botella reutilizable.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho y casi todos los alojamientos dan una.",
        instead: "Una de microfibra si vas a lagos o a la montaña.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Alemania?",
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
          "De mayo a septiembre: días largos y templados, cervecerías al aire libre y festivales. Diciembre tiene los mercados navideños, con frío de verdad.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "No siempre. Las grandes cadenas y los hoteles aceptan, pero muchos bares, panaderías y comercios chicos solo toman efectivo. Llevá algo encima.",
      },
      {
        question: "¿Abren los comercios los domingos?",
        answer:
          "Casi nunca. Supermercados y tiendas cierran; abren los de las estaciones de tren grandes, los aeropuertos y algunos quioscos. Restaurantes y museos funcionan.",
      },
      {
        question: "¿Cuándo es el Oktoberfest?",
        answer:
          "En Múnich, durante algo más de dos semanas que terminan a principios de octubre: empieza a mediados o fines de septiembre. El alojamiento se reserva con muchos meses de anticipación.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí, y de muy buena calidad. En los restaurantes, en cambio, el agua se paga: es raro que te traigan de la canilla.",
      },
      {
        question: "¿Qué es el Deutschlandticket?",
        answer:
          "Un abono mensual que cubre metro, buses y trenes regionales en todo el país, pero no los trenes rápidos de larga distancia. Es una suscripción: si lo sacás, acordate de darlo de baja.",
      },
    ],
  },
};
