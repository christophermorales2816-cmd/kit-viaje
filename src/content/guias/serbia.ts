import type { DestinationGuide } from "./types";

/**
 * Guía de Serbia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: fuera de Schengen, con el dinar, y la única
 * excepción de precio por ciudad de la base: en Belgrado el transporte urbano
 * es gratis desde 2025 y en el resto del país no (ver su migración). El clima
 * es continental, con inviernos fríos de verdad.
 */
export const serbia: DestinationGuide = {
  slug: "serbia",
  country: "Serbia",
  subregion: "Europa del Sur",
  subhead:
    "Belgrado, una capital que no duerme sobre la confluencia de dos ríos, fortalezas en el Danubio, monasterios y montañas suaves. Inviernos fríos, veranos calurosos y cocina de kafana.",

  image: null,

  highlights: [
    {
      value: "2 ríos",
      label: "se juntan a los pies de Belgrado",
      note: "El Sava desemboca en el Danubio bajo la fortaleza de Kalemegdan: el atardecer desde sus murallas es el clásico de la ciudad.",
    },
    {
      value: "Gratis",
      label: "el transporte urbano en Belgrado",
      note: "Desde 2025, buses, tranvías y trolebuses de la ciudad no cobran pasaje, también para turistas. Fijate si sigue así cuando viajes.",
    },
    {
      value: "Kafana",
      label: "la taberna tradicional, con música en vivo",
      note: "Mesas largas, carne a la parrilla, rakija y músicos que pasan por las mesas. Es la forma serbia de salir a cenar.",
    },
    {
      value: "100 km",
      label: "de cañón del Danubio en las Puertas de Hierro",
      note: "El río se encajona entre Serbia y Rumania, con la fortaleza de Golubac en la entrada.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: fuera de Schengen",
      body: [
        "Serbia no es parte del espacio Schengen ni de la Unión Europea, y tiene sus propias reglas de entrada. Muchos pasaportes latinoamericanos no necesitan visa para estadías cortas, pero no todos, y las reglas cambian: verificá el tuyo antes de comprar el pasaje.",
        "Los días que pasás acá no se descuentan de los 90 de Schengen, pero cada salida y entrada a ese espacio queda registrada, con huellas y foto la primera vez. Algunos pasaportes que necesitan visa pueden entrar con una visa vigente de Schengen o de Estados Unidos: confirmalo con el consulado.",
        "En la frontera pueden pedirte el pasaje de salida, las reservas y un seguro médico. Los extranjeros se registran ante la policía al llegar: en hoteles lo hace el alojamiento; en un departamento, confirmá que lo haga el anfitrión.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Serbia",
      body: [
        "La moneda es el dinar. La tarjeta funciona en casi todo Belgrado y Novi Sad; en kafanas, mercados, pueblos y la montaña, conviene tener efectivo.",
        "Las casas de cambio, menjačnica, son comunes y suelen dar mejor cambio que los bancos. Casi nadie acepta euros en el día a día. La propina no es obligatoria; redondear es lo habitual.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dinares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Clima continental",
      body: [
        "Serbia es hemisferio norte: enero es invierno y julio, verano. Los inviernos son fríos, con días bajo cero y algo de nieve, y los veranos, calurosos: Belgrado y Niš pasan los treinta grados.",
        "La montaña, con Zlatibor, Tara y Kopaonik, es fresca en verano y tiene nieve en invierno; Kopaonik es el centro de esquí del país.",
        "En invierno puede soplar la košava, un viento frío del sureste que en Belgrado se siente fuerte.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De abril a junio y de septiembre a octubre: temperaturas amables y la ciudad en la calle. Julio y agosto son calurosos, con las terrazas y los bares sobre el río a pleno; de diciembre a marzo, Kopaonik tiene nieve.",
        "El invierno en Belgrado es gris y frío, pero con mucha vida puertas adentro.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Serbia",
      body: [
        "Entre ciudades, el bus es lo más práctico: buena red y muchos horarios. Para Tara, Mokra Gora y el Danubio, un auto o una excursión dan libertad.",
        "En Belgrado, el transporte urbano es gratis desde 2025. Para taxis, mejor una aplicación o una parada oficial.",
        "Las precauciones son las de cualquier ciudad grande: atención al celular y a la mochila en el transporte lleno y en las zonas de bares.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Vida nocturna",
      score: 9,
      rationale:
        "Belgrado tiene fama ganada: kafanas, bares y clubes sobre balsas en el río, hasta tarde.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Carne a la parrilla, pljeskavica, ajvar, sarma y la rakija de sobremesa.",
    },
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Fortalezas sobre el Danubio, monasterios medievales y la arquitectura austrohúngara del norte.",
    },
    {
      dimension: "Naturaleza",
      score: 7.5,
      rationale:
        "El cañón del Danubio, el Parque Nacional Tara y las montañas de Zlatibor y Kopaonik.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "Más barato que sus vecinos de la Unión Europea, con una capital a la altura de cualquiera.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Buena red de buses y distancias cortas; conviven el cirílico y el latino, y en las ciudades se habla inglés.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "El dinar es estable y la tarjeta funciona en las ciudades; para lo demás, efectivo.",
    },
  ],

  shines: [
    "Belgrado, de las capitales con más vida nocturna de Europa.",
    "Comida abundante y barata.",
    "Fortalezas, monasterios y el Danubio a pocas horas.",
  ],

  costs: [
    "Inviernos grises y fríos, con viento.",
    "Fuera de las ciudades, poco inglés y carteles en cirílico.",
    "Para la montaña conviene auto o excursión.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Belgrado y la llanura del norte tienen veranos calurosos, y Kopaonik, nieve en invierno. Los precios están en dinares y son órdenes de magnitud, no cotizaciones; en Belgrado, el transporte urbano figura gratis.",

  places: [
    {
      id: "belgrado",
      name: "Belgrado",
      region: "Belgrado",
      tag: "Capital sobre dos ríos",
      blurb:
        "La fortaleza de Kalemegdan sobre la confluencia del Sava y el Danubio, el barrio bohemio de Skadarlija y una noche que no termina. Es la base del planificador: inviernos fríos y veranos calurosos.",
      coords: [44.8125, 20.4612],
      featured: true,
      image: null,
    },
    {
      id: "novi-sad",
      name: "Novi Sad",
      region: "Voivodina",
      tag: "Fortaleza sobre el Danubio",
      blurb:
        "Una ciudad de aire austrohúngaro, con la fortaleza de Petrovaradin sobre el Danubio y un centro peatonal lleno de cafés.",
      coords: [45.2671, 19.8335],
      image: null,
    },
    {
      id: "sremski-karlovci",
      name: "Sremski Karlovci y Fruška Gora",
      region: "Voivodina",
      tag: "Vino y monasterios",
      blurb:
        "Un pueblo barroco de bodegas al pie de Fruška Gora, una sierra baja de bosques y monasterios ortodoxos.",
      coords: [45.2028, 19.9339],
      image: null,
    },
    {
      id: "subotica",
      name: "Subotica",
      region: "Voivodina",
      tag: "Art nouveau",
      blurb:
        "La ciudad del norte, cerca de Hungría, con el ayuntamiento y la sinagoga art nouveau y el lago Palić al lado.",
      coords: [46.1003, 19.6656],
      image: null,
    },
    {
      id: "nis",
      name: "Niš",
      region: "Sur",
      tag: "Fortaleza otomana",
      blurb:
        "Una de las ciudades más antiguas de los Balcanes, cuna del emperador Constantino, con fortaleza otomana y mucha vida de café.",
      coords: [43.3209, 21.8958],
      image: null,
    },
    {
      id: "zlatibor",
      name: "Zlatibor",
      region: "Oeste",
      tag: "Montaña suave",
      blurb:
        "Una meseta de pinares y praderas a unos mil metros, fresca en verano y con nieve en invierno.",
      coords: [43.7265, 19.6969],
      image: null,
    },
    {
      id: "tara",
      name: "Parque Nacional Tara y Mokra Gora",
      region: "Oeste",
      tag: "Miradores sobre el Drina",
      blurb:
        "Bosques y miradores sobre el cañón del Drina, y al lado el tren de montaña Šargan Ocho y el pueblo de madera de Drvengrad.",
      coords: [43.79, 19.505],
      image: null,
    },
    {
      id: "kopaonik",
      name: "Kopaonik",
      region: "Centro",
      tag: "Centro de esquí",
      blurb:
        "El centro de esquí más grande del país, entre bosques a casi dos mil metros. En verano, senderos y bicicleta.",
      coords: [43.2856, 20.8125],
      image: null,
    },
    {
      id: "golubac",
      name: "Golubac y las Puertas de Hierro",
      region: "Este",
      tag: "Cañón del Danubio",
      blurb:
        "Una fortaleza medieval en la entrada del cañón del Danubio, que sigue por el Parque Nacional Đerdap hasta las Puertas de Hierro, frente a Rumania.",
      coords: [44.6625, 21.6731],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Serbia es continental: en invierno hace frío de verdad, con días bajo cero, viento y algo de nieve, así que campera de abrigo, gorro y guantes. En verano, Belgrado y Niš pasan los treinta grados: ropa liviana y una capa para la montaña, que refresca. Llevá algo de efectivo en dinares para kafanas y mercados.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es caluroso; el invierno, de diciembre a febrero, frío y gris.",
      "En Belgrado el transporte urbano es gratis desde 2025.",
      "No es Schengen: los días acá no se descuentan del cupo de 90.",
      "Los carteles mezclan el alfabeto cirílico y el latino.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, protector y agua. En julio y agosto, Belgrado y Niš pasan los treinta grados; la vida se muda a las terrazas y al río.",
      templado:
        "Ropa liviana de día y un buzo para la noche. Es el clima de la primavera y el otoño, el mejor para recorrer.",
      fresco:
        "Capas, un buzo abrigado y una campera. Es el clima de la primavera temprana y el otoño, y de las noches de montaña.",
      frio: "Campera de abrigo, gorro, guantes y calzado que no deje pasar el agua. En Belgrado el viento de invierno se siente, y Kopaonik tiene nieve.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes europeos de dos patas redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Mirá el atardecer desde Kalemegdan",
          body: "La fortaleza sobre la confluencia del Sava y el Danubio es el mejor mirador de Belgrado, y es gratis.",
        },
        {
          title: "Cená en una kafana",
          body: "Mesas largas, carne a la parrilla, música en vivo y rakija. En Skadarlija están las más conocidas.",
        },
        {
          title: "Aprovechá el transporte gratis de Belgrado",
          body: "Buses, tranvías y trolebuses de la ciudad no cobran pasaje desde 2025. Fijate si sigue así cuando viajes.",
        },
        {
          title: "Hacé una escapada a Novi Sad",
          body: "La fortaleza de Petrovaradin y el centro peatonal se recorren bien en un día desde Belgrado.",
        },
        {
          title: "Cambiá en una menjačnica",
          body: "Las casas de cambio de la calle suelen dar mejor cambio que los bancos.",
        },
        {
          title: "Elegí pagar en dinares",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el invierno",
          body: "Enero en Belgrado pasa días bajo cero y el viento corta. Abrigo de verdad.",
        },
        {
          title: "No te tomes el primer taxi de la estación",
          body: "Mejor una aplicación o una parada oficial, con taxímetro.",
        },
        {
          title: "No esperes inglés en todos lados",
          body: "En Belgrado y Novi Sad se habla bastante; en pueblos, poco, y los carteles pueden estar en cirílico.",
        },
        {
          title: "No te apures con la rakija",
          body: "El aguardiente de frutas se ofrece como bienvenida y tiene mucho alcohol. Con calma.",
        },
        {
          title: "No descuides la mochila en las zonas de bares",
          body: "En Knez Mihailova, Skadarlija y el transporte lleno, mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "clima",
        title: "Frío y calor",
        notice: {
          tone: "info",
          title: "Inviernos de verdad",
          body: "De diciembre a febrero, días bajo cero, viento y algo de nieve. En verano, calor fuerte en la llanura.",
        },
        summary: "Lo que pide el clima continental",
        items: [
          "Campera de abrigo, gorro y guantes, si vas en invierno",
          "Un buzo o polar para sumar capas",
          "Ropa liviana y protector, si vas en verano",
          "Calzado cómodo que no deje pasar el agua",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Serbia no es Schengen y tiene sus propias reglas. Muchos pasaportes latinoamericanos entran sin visa por estadías cortas, pero no todos: verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Pasaje de salida del país",
          "Reservas de alojamiento, que además hace el registro policial",
          "Seguro de viaje con cobertura médica",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "plata",
        title: "Plata y pagos",
        notice: null,
        summary: "Para pagar sin problemas",
        items: [
          "Dinares en efectivo para kafanas y mercados",
          "Tarjeta de débito para el cajero",
          "Una segunda tarjeta, por las dudas",
          "Billetes chicos para propinas y kioscos",
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
          "Protector solar, si vas en verano",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Una campera liviana en enero",
        why: "El invierno continental pasa días bajo cero, con viento.",
        instead: "Campera de abrigo, gorro y guantes.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En kafanas, mercados y pueblos, el efectivo sigue siendo lo más práctico.",
        instead: "Dinares en efectivo y una tarjeta.",
      },
      {
        leave: "Euros para pagar todo",
        why: "La moneda es el dinar y casi nadie acepta euros en el día a día.",
        instead: "Dinares de una casa de cambio o del cajero.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "El empedrado de Skadarlija y las fortalezas resbala con lluvia.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "La valija grande",
        why: "Escaleras, buses y veredas irregulares.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Serbia?",
        answer:
          "Depende del pasaporte. Serbia no es Schengen y tiene sus propias reglas; muchos países latinoamericanos están exentos para estadías cortas, pero no todos. Verificalo antes de viajar.",
      },
      {
        question: "¿Los días en Serbia cuentan para los 90 de Schengen?",
        answer:
          "No. Serbia no es parte del espacio Schengen, así que esos días no se descuentan.",
      },
      {
        question: "¿Es cierto que el transporte de Belgrado es gratis?",
        answer:
          "Desde 2025, buses, tranvías y trolebuses de la ciudad no cobran pasaje, también para turistas. Fijate si sigue así cuando viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Serbia usa los tipos C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a junio y de septiembre a octubre: clima amable. El verano es caluroso; el invierno, frío, con esquí en Kopaonik.",
      },
      {
        question: "¿Se usa el alfabeto cirílico?",
        answer:
          "Sí, conviven el cirílico y el latino. En Belgrado muchos carteles están en los dos; en pueblos, a veces solo en cirílico.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Belgrado y las ciudades grandes, sí. Si dudás, preguntá en el alojamiento.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
