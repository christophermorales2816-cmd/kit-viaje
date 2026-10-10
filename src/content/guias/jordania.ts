import type { DestinationGuide } from "./types";

/**
 * Guía de Jordania.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: es Medio Oriente con invierno de verdad. Amán y
 * Petra están en la meseta, a casi mil metros, y algunos inviernos nieva: el
 * dato que más cambia la valija es el que va en la portada. El dinar jordano va
 * con centavos por la regla del medio dólar.
 */
export const jordania: DestinationGuide = {
  slug: "jordania",
  country: "Jordania",
  subregion: "Asia Occidental",
  subhead:
    "Petra tallada en la roca rosa, el desierto rojo de Wadi Rum, flotar en el Mar Muerto, las columnas romanas de Jerash y el mar Rojo en Áqaba. Un país chico, hospitalario y con historia en cada colina.",

  image: null,

  highlights: [
    {
      value: "Nieve",
      label: "algunos inviernos en Amán y Petra",
      note: "La meseta está a casi mil metros: de diciembre a febrero hace frío de verdad, llueve y a veces nieva. Medio Oriente no es siempre calor.",
    },
    {
      value: "Petra",
      label: "la ciudad tallada en la roca",
      note: "El Tesoro al final del desfiladero del Siq, el Monasterio después de cientos de escalones y tumbas de colores. Merece dos días.",
    },
    {
      value: "Wadi Rum",
      label: "el desierto rojo del cine",
      note: "Arena roja, montañas de piedra y campamentos beduinos. Ahí se filmaron películas que transcurren en Marte.",
    },
    {
      value: "−430 m",
      label: "en el Mar Muerto, el punto más bajo de la Tierra",
      note: "El agua es tan salada que se flota sin esfuerzo. No te afeites antes y cuidá que no te entre en los ojos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Jordania",
      body: [
        "Muchos pasaportes latinoamericanos sacan la visa a la llegada o la evitan con el Jordan Pass; otros necesitan tramitarla antes. Verificá el tuyo antes de comprar el pasaje.",
        "El Jordan Pass se compra online antes del viaje: incluye el trámite de la visa, si te quedás un mínimo de noches, y la entrada a Petra y a decenas de sitios. Suele convenir.",
        "El pasaporte tiene que tener vigencia de sobra. Si entrás por tierra, fijate qué pasos de frontera aceptan el Jordan Pass para la visa.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Jordania",
      body: [
        "La moneda es el dinar jordano, atado al dólar y de más valor que él. La tarjeta funciona en hoteles, restaurantes y tiendas grandes; en taxis, puestos y pueblos, efectivo.",
        "Hay cajeros en todas las ciudades, incluso en Wadi Musa, al lado de Petra. En los mercados, el precio se conversa.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dinares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Más frío de lo que se espera",
      body: [
        "Jordania es hemisferio norte. Amán, Petra y las ciudades de la meseta están entre seiscientos y mil doscientos metros: inviernos fríos y lluviosos, a veces con nieve, y veranos calurosos y secos.",
        "El Mar Muerto, muy por debajo del nivel del mar, y Áqaba, sobre el mar Rojo, son templados en invierno y muy calurosos en verano.",
        "Wadi Rum es desierto: días calurosos y noches frías, sobre todo de noviembre a marzo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Marzo a mayo y septiembre a noviembre: templado en todo el país, ideal para Petra y Wadi Rum. Es también la temporada más llena.",
        "En invierno, Áqaba y el Mar Muerto son agradables y la meseta es fría. El Ramadán cambia horarios; la fecha se corre cada año.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Jordania",
      body: [
        "Entre Amán, Petra y Áqaba hay colectivos interurbanos cómodos. Para combinar más lugares, auto de alquiler por la Carretera del Rey, una de las rutas más lindas del país.",
        "En Amán, taxis amarillos con taxímetro y aplicaciones (Careem, Uber). A Wadi Rum se entra con un guía o un campamento que te busca en el centro de visitantes.",
        "Las precauciones son las de cualquier destino turístico: acordar el precio antes en los paseos a caballo o en burro de Petra, y la mochila cerrada en los mercados.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "Petra, Jerash, los mosaicos de Madaba y los castillos del desierto: miles de años en un país chico.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Mansaf, maqluba, hummus, falafel y las mesas de mezze que no terminan.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "El desierto rojo de Wadi Rum, los cañones de Dana y el Mar Muerto.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale:
        "Áqaba tiene arrecifes para el snorkel; las playas son chicas.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Comer es barato; las entradas y los hoteles del Mar Muerto, caros. El Jordan Pass ayuda.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Distancias cortas y buenos colectivos entre los lugares principales; el resto, en auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 10,
      rationale: "El dinar está atado al dólar y los precios son estables.",
    },
  ],

  shines: [
    "Petra, que justifica el viaje por sí sola.",
    "Desierto, mar y ruinas romanas a pocas horas.",
    "Gente muy hospitalaria.",
  ],

  costs: [
    "Inviernos fríos en la meseta.",
    "Entradas caras sin el Jordan Pass.",
    "Calor fuerte en verano en el desierto y el Mar Muerto.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Amán en enero que el Mar Muerto o Áqaba. Los precios están en dinares jordanos, con centavos, y son órdenes de magnitud.",

  places: [
    {
      id: "aman",
      name: "Amán",
      region: "Amán",
      tag: "La ciudadela y el teatro",
      blurb:
        "La ciudadela con el templo de Hércules, el teatro romano, el centro viejo y los cafés de Rainbow Street. Es la base del planificador: inviernos fríos y lluviosos, veranos calurosos y secos.",
      coords: [31.9454, 35.9284],
      featured: true,
      image: null,
    },
    {
      id: "petra",
      name: "Petra (Wadi Musa)",
      region: "Ma'an",
      tag: "La ciudad nabatea",
      blurb:
        "El Siq, el Tesoro, el Monasterio y cientos de tumbas talladas en la roca rosa. Patrimonio de la humanidad. A más de mil metros: frío en invierno.",
      coords: [30.3285, 35.4444],
      image: null,
    },
    {
      id: "wadi-rum",
      name: "Wadi Rum",
      region: "Áqaba",
      tag: "Desierto rojo",
      blurb:
        "Montañas de arenisca, arcos de piedra, inscripciones antiguas y campamentos beduinos. Se recorre en 4x4 o a camello. Noches frías.",
      coords: [29.573, 35.421],
      image: null,
    },
    {
      id: "aqaba",
      name: "Áqaba",
      region: "Áqaba",
      tag: "El mar Rojo",
      blurb:
        "Arrecifes de coral para el snorkel y el buceo, a pocos metros de la costa. Templada en invierno y muy calurosa en verano.",
      coords: [29.5321, 35.0063],
      image: null,
    },
    {
      id: "mar-muerto",
      name: "Mar Muerto",
      region: "Balqa",
      tag: "Flotar en el punto más bajo",
      blurb:
        "Hoteles con spa, barro mineral y un agua en la que se flota sin esfuerzo. Cerca, el sitio del bautismo de Jesús, patrimonio de la humanidad.",
      coords: [31.72, 35.59],
      image: null,
    },
    {
      id: "jerash",
      name: "Jerash",
      region: "Jerash",
      tag: "La ciudad romana",
      blurb:
        "Una de las ciudades romanas mejor conservadas fuera de Italia: calle de columnas, foro oval, teatros y el arco de Adriano.",
      coords: [32.2747, 35.8961],
      image: null,
    },
    {
      id: "madaba",
      name: "Madaba y el monte Nebo",
      region: "Madaba",
      tag: "Mosaicos",
      blurb:
        "El mapa de Tierra Santa en mosaico de la iglesia de San Jorge y, a minutos, el monte Nebo, con vista al Mar Muerto.",
      coords: [31.716, 35.7939],
      image: null,
    },
    {
      id: "dana",
      name: "Reserva de Dana",
      region: "Tafilah",
      tag: "Cañones y senderos",
      blurb:
        "Una aldea de piedra sobre un valle que baja hasta el desierto, con senderos y un albergue ecológico. Fresca y ventosa.",
      coords: [30.675, 35.608],
      image: null,
    },
    {
      id: "ajloun",
      name: "Ajloun",
      region: "Ajloun",
      tag: "El castillo en el bosque",
      blurb:
        "Un castillo de la época de Saladino entre bosques de pinos y olivos, en las colinas del norte. La más fría y lluviosa en invierno.",
      coords: [32.3326, 35.7517],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Jordania tiene invierno. De diciembre a febrero, campera de abrigo, gorro y algo impermeable para Amán y Petra. En primavera y otoño, ropa liviana de día y un buzo para la noche, que en el desierto es fría. En verano, ropa fresca que cubra, sombrero y mucha agua. Siempre, calzado firme para Petra —se camina mucho y se suben cientos de escalones— y traje de baño para el Mar Muerto.",
    keyPoints: [
      "Hemisferio norte: inviernos fríos en la meseta, a veces con nieve; veranos calurosos.",
      "El Jordan Pass, comprado antes, incluye el trámite de la visa y las entradas.",
      "Hombros y rodillas cubiertos fuera de los hoteles y las playas.",
      "Petra se camina: calzado firme y dos días.",
    ],
    adviceByBucket: {
      calido:
        "Ropa fresca de algodón o lino que cubra, sombrero, protector y mucha agua. En el Mar Muerto y Áqaba, el verano es muy caluroso.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, la mejor época para Petra y Wadi Rum.",
      fresco:
        "Capas, un buzo abrigado y una campera. Las noches del desierto y las mañanas de Petra son frías.",
      frio: "Campera de abrigo, gorro, guantes y calzado que no deje pasar el agua. Amán y Petra pueden tener nieve en invierno.",
    },
    plug: {
      types: "Tipos C, D, F, G y J",
      voltage: "230 V, 50 Hz",
      note: "Conviven varios tipos: los de dos patas redondas son los más comunes, y algunos hoteles tienen el británico. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Comprá el Jordan Pass antes de viajar",
          body: "Incluye el trámite de la visa, si cumplís con las noches mínimas, y las entradas a Petra y decenas de sitios.",
        },
        {
          title: "Dedicale dos días a Petra",
          body: "El primero, el Siq y el Tesoro temprano; el segundo, el Monasterio y los miradores.",
        },
        {
          title: "Dormí en un campamento de Wadi Rum",
          body: "Con cena beduina y el cielo más estrellado del país.",
        },
        {
          title: "Flotá en el Mar Muerto",
          body: "Entrá despacio, sin salpicar y sin mojarte la cara. Después, ducha de agua dulce.",
        },
        {
          title: "Manejá la Carretera del Rey",
          body: "Une Madaba, el castillo de Kerak, Dana y Petra por cañones y pueblos.",
        },
        {
          title: "Elegí pagar en dinares",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No te afeites antes del Mar Muerto",
          body: "La sal arde en cualquier cortecito, y en los ojos más todavía.",
        },
        {
          title: "No vayas descubierto a la ciudad",
          body: "Fuera de los hoteles y las playas, se esperan hombros y rodillas cubiertos.",
        },
        {
          title: "No contrates un paseo sin acordar el precio",
          body: "Los paseos a caballo, en burro o en camello en Petra se acuerdan antes de subir.",
        },
        {
          title: "No subestimes el frío del invierno",
          body: "En Amán y Petra, de diciembre a febrero, hace falta abrigo de verdad.",
        },
        {
          title: "No le saques fotos a la gente sin permiso",
          body: "Sobre todo a mujeres; preguntá antes.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "petra",
        title: "Para Petra y el desierto",
        notice: {
          tone: "info",
          title: "Se camina mucho",
          body: "Petra son kilómetros a pie y cientos de escalones; Wadi Rum, arena y noches frías.",
        },
        summary: "Lo que piden los días de caminata",
        items: [
          "Calzado firme, ya usado",
          "Sombrero, protector y agua",
          "Un buzo para la noche en el desierto",
          "Una mochila chica",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Resolvé la visa antes de llegar",
          body: "Muchos pasaportes la sacan a la llegada o la evitan con el Jordan Pass; otros la necesitan antes. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "El Jordan Pass impreso o en el teléfono",
          "Visa, si tu pasaporte la necesita antes",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para mezquitas, mercados y pueblos",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para el pelo en las mezquitas",
          "Calzado fácil de sacar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el estómago",
          "Protector labial para el viento del desierto",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano en invierno",
        why: "Amán y Petra son frías de diciembre a febrero, a veces con nieve.",
        instead: "Una campera de abrigo y un gorro.",
      },
      {
        leave: "Ojotas para Petra",
        why: "Son kilómetros de piedra y arena, con escalones.",
        instead: "Calzado firme ya usado.",
      },
      {
        leave: "Ropa ajustada o muy corta",
        why: "Fuera de los hoteles se esperan hombros y rodillas cubiertos.",
        instead: "Ropa liviana y holgada que cubra.",
      },
      {
        leave: "Pagar cada entrada por separado",
        why: "Sin el Jordan Pass, la visa y las entradas suman mucho más.",
        instead: "El Jordan Pass, comprado antes.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Taxis, puestos y pueblos cobran en efectivo.",
        instead: "Dinares en efectivo y una tarjeta.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Jordania?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos la sacan a la llegada o la evitan con el Jordan Pass; otros la tramitan antes. Verificalo antes de viajar.",
      },
      {
        question: "¿Conviene el Jordan Pass?",
        answer:
          "Casi siempre: incluye el trámite de la visa, si te quedás las noches mínimas, y la entrada a Petra y decenas de sitios.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De marzo a mayo y de septiembre a noviembre: templado en todo el país.",
      },
      {
        question: "¿Cuántos días hacen falta para Petra?",
        answer:
          "Dos, para ver el Tesoro temprano y subir al Monasterio sin correr.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Conviven varios tipos a 230 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "Sí, en bares, hoteles y algunos restaurantes, sobre todo en Amán y Áqaba.",
      },
      {
        question: "¿Se deja propina?",
        answer: "Es habitual: algo en restaurantes y a guías y choferes.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada, que es barata y está en todos lados.",
      },
    ],
  },
};
