import type { DestinationGuide } from "./types";

/**
 * Guía de Turquía.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: casi todo su territorio está en Asia y la ONU lo
 * ubica en Asia Occidental, pero Estambul cruza el Bósforo y el país se viaja
 * como parte de Europa: acá va con Europa del Sur. La lira tiene inflación
 * alta, así que los precios en liras envejecen más rápido que en cualquier
 * otro país; se dice sin dar números, y la vista muestra su antigüedad.
 */
export const turquia: DestinationGuide = {
  slug: "turquia",
  country: "Turquía",
  subregion: "Europa del Sur",
  subhead:
    "Estambul entre dos continentes, globos sobre Capadocia, ciudades griegas y romanas en la costa y terrazas blancas de travertino. Un país enorme, con climas distintos y una lira que cambia de valor rápido.",

  image: null,

  highlights: [
    {
      value: "2 continentes",
      label: "en una sola ciudad: Estambul",
      note: "El Bósforo separa la orilla europea de la asiática, y se cruza en ferry como cualquier viaje en transporte público.",
    },
    {
      value: "Globos",
      label: "al amanecer sobre Capadocia",
      note: "Chimeneas de hadas, iglesias excavadas en la roca y ciudades subterráneas. Los vuelos dependen del viento: conviene dejar un día de margen.",
    },
    {
      value: "Éfeso",
      label: "una de las ciudades romanas mejor conservadas",
      note: "La biblioteca de Celso y el gran teatro, a minutos de Selçuk. Patrimonio de la humanidad.",
    },
    {
      value: "Lira",
      label: "con inflación alta",
      note: "Los precios cambian rápido: los de esta guía son órdenes de magnitud. Pagar en liras suele salir mejor que en euros o dólares.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: fuera de Schengen",
      body: [
        "Turquía no es parte del espacio Schengen ni de la Unión Europea, y tiene sus propias reglas de entrada. Muchos pasaportes latinoamericanos no necesitan visa para estadías cortas; otros necesitan una visa electrónica que se tramita online, en el sitio oficial del gobierno. Verificá el tuyo antes de comprar el pasaje.",
        "Los días que pasás acá no se descuentan de los 90 de Schengen, pero cada salida y entrada a ese espacio queda registrada, con huellas y foto la primera vez.",
        "El pasaporte tiene que tener vigencia de sobra después de la salida, y en la frontera pueden pedirte el pasaje de vuelta y las reservas.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Turquía",
      body: [
        "La moneda es la lira turca, con inflación alta: los precios cambian de un mes a otro. La tarjeta funciona en casi todo Estambul y en las zonas turísticas; en bazares, puestos y pueblos, efectivo.",
        "Las casas de cambio (döviz) son comunes y suelen dar mejor cambio que los aeropuertos. Algunos lugares turísticos cotizan en euros: pagar en liras sale mejor. En restaurantes, dejar algo de propina es lo habitual.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí liras: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Un país, muchos climas",
      body: [
        "Turquía es hemisferio norte: enero es invierno y julio, verano. Estambul tiene inviernos fríos y lluviosos y veranos calurosos y húmedos.",
        "La costa del Egeo y el Mediterráneo —Bodrum, Fethiye, Antalya— tiene veranos largos y secos que pasan los treinta grados. Capadocia, en la meseta, tiene inviernos con nieve y días calurosos en verano con noches frescas.",
        "La costa del Mar Negro, con Trabzon, es verde porque llueve en cualquier mes.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De abril a junio y de septiembre a octubre: buen clima en todo el país y menos gente. Julio y agosto son el calor fuerte de la costa y de Pamukkale.",
        "En invierno, Estambul es gris pero tiene vida, y Capadocia nevada es otra postal.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Turquía",
      body: [
        "Las distancias son grandes: entre regiones se viaja en vuelos internos o en buses de larga distancia, que son cómodos y llegan a todos lados.",
        "En Estambul, tranvía, metro y ferris con la misma tarjeta recargable. Para taxis, mejor una aplicación o uno con taxímetro.",
        "Las precauciones son las de cualquier gran ciudad turística: atención al celular y a la mochila en el Gran Bazar, en la zona de Sultanahmet y en el transporte lleno.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-09",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "Bizancio y el Imperio otomano en Estambul, Éfeso, Troya y Capadocia: pocas regiones del mundo acumulan tanto.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Kebab, meze, börek, baklava, el desayuno turco y el té a toda hora.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Las chimeneas de Capadocia, las terrazas de Pamukkale y la costa turquesa del sur.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "La costa turquesa, de Bodrum a Antalya, con calas y la laguna de Ölüdeniz.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Comer y moverse es barato; las entradas a los sitios famosos, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Vuelos internos, buses de larga distancia excelentes y transporte urbano bueno en Estambul.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 5,
      rationale:
        "La inflación cambia los precios de un mes a otro: el presupuesto es una referencia, no una cuenta cerrada.",
    },
  ],

  shines: [
    "Estambul, una de las ciudades más impresionantes del mundo.",
    "Historia de miles de años en cada región.",
    "Comida excelente y barata.",
  ],

  costs: [
    "Distancias largas entre regiones.",
    "Precios que cambian rápido por la inflación.",
    "Julio y agosto muy calurosos en la costa y el interior.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Estambul que Capadocia en invierno o Antalya en verano. Los precios están en liras turcas y son órdenes de magnitud; con la inflación, envejecen más rápido que en cualquier otro país.",

  places: [
    {
      id: "estambul",
      name: "Estambul",
      region: "Mármara",
      tag: "Entre dos continentes",
      blurb:
        "Santa Sofía, la Mezquita Azul, el palacio de Topkapı, el Gran Bazar y el Bósforo, con una orilla en Europa y otra en Asia. Es la base del planificador: inviernos fríos y lluviosos, veranos calurosos.",
      coords: [41.0082, 28.9784],
      featured: true,
      image: null,
    },
    {
      id: "capadocia",
      name: "Capadocia",
      region: "Anatolia Central",
      tag: "Globos y chimeneas",
      blurb:
        "Valles de chimeneas de hadas, iglesias excavadas en la roca y ciudades subterráneas, con globos al amanecer. Base en Göreme; inviernos con nieve.",
      coords: [38.6431, 34.8289],
      image: null,
    },
    {
      id: "antalya",
      name: "Antalya",
      region: "Mediterráneo",
      tag: "Puerta de la costa turquesa",
      blurb:
        "Un casco viejo amurallado sobre el puerto, playas largas y ruinas romanas cerca. Veranos largos y muy calurosos.",
      coords: [36.8969, 30.7133],
      image: null,
    },
    {
      id: "pamukkale",
      name: "Pamukkale",
      region: "Egeo",
      tag: "Terrazas de travertino",
      blurb:
        "Terrazas blancas de agua termal que se recorren descalzo, y arriba las ruinas de Hierápolis. Patrimonio de la humanidad.",
      coords: [37.9204, 29.1202],
      image: null,
    },
    {
      id: "efeso",
      name: "Éfeso y Selçuk",
      region: "Egeo",
      tag: "Ciudad romana",
      blurb:
        "La biblioteca de Celso, el gran teatro y las casas de las terrazas, a minutos del pueblo de Selçuk.",
      coords: [37.9496, 27.3681],
      image: null,
    },
    {
      id: "bodrum",
      name: "Bodrum",
      region: "Egeo",
      tag: "Castillo y bahías",
      blurb:
        "Un castillo de los caballeros sobre el puerto, casas blancas, bahías y vida nocturna en verano.",
      coords: [37.0344, 27.4305],
      image: null,
    },
    {
      id: "fethiye",
      name: "Fethiye y Ölüdeniz",
      region: "Mediterráneo",
      tag: "La laguna azul",
      blurb:
        "La laguna de Ölüdeniz, parapente desde el monte Babadağ y el inicio de la Ruta Licia, a lo largo de la costa.",
      coords: [36.6214, 29.1164],
      image: null,
    },
    {
      id: "esmirna",
      name: "Esmirna",
      region: "Egeo",
      tag: "Ciudad del Egeo",
      blurb:
        "La tercera ciudad del país, con paseo marítimo, bazar y la puerta de entrada a Éfeso y Pérgamo.",
      coords: [38.4237, 27.1428],
      image: null,
    },
    {
      id: "trabzon",
      name: "Trabzon y Sumela",
      region: "Mar Negro",
      tag: "Monasterio en el acantilado",
      blurb:
        "La costa verde del Mar Negro y el monasterio de Sumela, colgado de un acantilado entre bosques. Llueve en cualquier mes.",
      coords: [41.0027, 39.7168],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Turquía son varios climas. En verano, ropa liviana, protector y sombrero para la costa y el interior, que pasan los treinta grados, y algo abrigado para las noches de Capadocia. En invierno, Estambul pide campera impermeable y Capadocia, abrigo de nieve. Siempre, ropa que cubra hombros y rodillas para las mezquitas, y efectivo en liras para bazares y pueblos.",
    keyPoints: [
      "Hemisferio norte: verano caluroso de junio a septiembre; invierno frío y lluvioso en Estambul y con nieve en Capadocia.",
      "Las mezquitas piden hombros y rodillas cubiertos, y las mujeres, el pelo.",
      "No es Schengen: los días acá no se descuentan del cupo de 90.",
      "La lira tiene inflación alta: los precios son una referencia.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero, protector alto y agua. En julio y agosto, Pamukkale y la costa pasan los treinta y cinco grados.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, la mejor época para todo el país.",
      fresco:
        "Capas, un buzo abrigado y una campera impermeable. Es el invierno de la costa y de Estambul, con lluvia frecuente.",
      frio: "Campera de abrigo, gorro, guantes y calzado que no deje pasar el agua. Capadocia en invierno tiene nieve y heladas.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes europeos de dos patas redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Cruzá el Bósforo en ferry",
          body: "Es transporte público y la mejor vista de Estambul: de Eminönü a Kadıköy, de Europa a Asia.",
        },
        {
          title: "Reservá el globo con un día de margen",
          body: "Los vuelos de Capadocia se cancelan si hay viento. Con un día extra, no te quedás sin volar.",
        },
        {
          title: "Recorré Éfeso y Pamukkale temprano",
          body: "Al mediodía el calor es fuerte y casi no hay sombra; a primera hora llegan menos grupos.",
        },
        {
          title: "Desayuná a la turca",
          body: "Quesos, aceitunas, tomate, huevos, miel y pan, con té. Es una comida entera, no un café al paso.",
        },
        {
          title: "Viajá entre regiones en avión o en bus de noche",
          body: "Las distancias son grandes: un vuelo interno o un bus nocturno te ahorran un día.",
        },
        {
          title: "Elegí pagar en liras",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Hombros y rodillas cubiertos, sin zapatos y, las mujeres, con el pelo cubierto. Muchas prestan pañuelos en la entrada.",
        },
        {
          title: "No visites mezquitas a la hora del rezo",
          body: "Cierran a los visitantes durante las oraciones, sobre todo el viernes al mediodía.",
        },
        {
          title: "No pagues en euros si podés evitarlo",
          body: "Algunos lugares cotizan en euros, pero en liras suele salir mejor.",
        },
        {
          title: "No subestimes las distancias",
          body: "Estambul, Capadocia y la costa están a horas de distancia: no entran todas en una semana sin correr.",
        },
        {
          title: "No descuides la mochila en las zonas llenas",
          body: "En el Gran Bazar, Sultanahmet y el tranvía lleno, mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "climas",
        title: "Varios climas",
        notice: {
          tone: "info",
          title: "De la costa a la meseta",
          body: "En un mismo viaje podés pasar del calor de la costa a las noches frías de Capadocia. Capas en vez de un solo abrigo.",
        },
        summary: "Lo que pide un país de muchos climas",
        items: [
          "Ropa liviana, sombrero y protector para la costa",
          "Un buzo o polar para las noches de Capadocia",
          "Campera impermeable para Estambul en invierno",
          "Calzado cómodo para ruinas y empedrado",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Turquía no es Schengen y tiene sus propias reglas: algunos pasaportes entran sin visa y otros necesitan la visa electrónica. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica impresa, si tu pasaporte la necesita",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "mezquitas",
        title: "Mezquitas y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para cubrir el pelo",
          "Calzado fácil de sacar",
          "Una bolsa para llevar los zapatos",
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
        leave: "Solo la tarjeta",
        why: "En bazares, puestos y pueblos se paga en efectivo.",
        instead: "Liras en efectivo y una tarjeta.",
      },
      {
        leave: "Euros para pagar todo",
        why: "Donde aceptan euros, el cambio suele salir peor.",
        instead: "Liras de una casa de cambio o del cajero.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Las mezquitas piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "El empedrado de Estambul y las ruinas resbalan.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Un solo abrigo para todo el viaje",
        why: "La costa y la meseta tienen climas muy distintos.",
        instead: "Capas que sirvan para frío y calor.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Turquía?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías cortas, y otros necesitan una visa electrónica que se tramita online en el sitio oficial. Verificalo antes de viajar.",
      },
      {
        question: "¿Los días en Turquía cuentan para los 90 de Schengen?",
        answer:
          "No. Turquía no es parte del espacio Schengen, así que esos días no se descuentan.",
      },
      {
        question: "¿Conviene pagar en liras o en euros?",
        answer:
          "En liras, casi siempre. Por la inflación, los precios cambian rápido: los de esta guía son una referencia.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Turquía usa los tipos C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a junio y de septiembre a octubre: buen clima en todo el país y menos gente.",
      },
      {
        question: "¿Cómo me muevo entre Estambul, Capadocia y la costa?",
        answer:
          "En vuelos internos o en buses de larga distancia, que son cómodos y frecuentes. Las distancias son de horas.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada, que es barata y está en todos lados.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "En restaurantes, dejar algo es lo habitual; en el resto, redondear alcanza.",
      },
    ],
  },
};
