import type { DestinationGuide } from "./types";

/**
 * Guía de Suiza.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la altura como eje de la valija, más que en
 * cualquier otro país de Europa, porque acá se sube en tren a más de tres mil
 * metros en una mañana. Y la primera moneda europea que no es el euro dentro
 * de Schengen: el franco suizo.
 *
 * La base es Zúrich y no Berna, la capital, por la misma razón que Antigua en
 * Guatemala: es donde empieza casi cualquier viaje.
 */
export const suiza: DestinationGuide = {
  slug: "suiza",
  country: "Suiza",
  subregion: "Europa Occidental",
  subhead:
    "Los Alpes en su mejor versión, lagos turquesa y trenes que llegan hasta las cumbres. Todo funciona, todo es caro, y la valija la decide la altura más que el mes.",

  image: null,

  highlights: [
    {
      value: "CHF",
      label: "franco suizo, no euro",
      note: "Suiza no usa el euro. Muchos lugares lo aceptan, pero el vuelto es en francos y a un cambio peor.",
    },
    {
      value: "3.454 m",
      label: "la estación de tren más alta de Europa",
      note: "En el Jungfraujoch. Arriba hay nieve y viento todo el año, aunque abajo sea pleno verano.",
    },
    {
      value: "Tipo J",
      label: "el enchufe suizo",
      note: "Acepta los enchufes finos de dos patas, pero no los gruesos alemanes. Un adaptador universal resuelve.",
    },
    {
      value: "4",
      label: "idiomas oficiales",
      note: "Alemán, francés, italiano y romanche. Según dónde estés cambia el saludo; el inglés funciona en todos lados.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: Schengen, sin ser Unión Europea",
      body: [
        "Suiza no es parte de la Unión Europea, pero sí del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Suiza, Italia y Francia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Francos, y caro",
      body: [
        "La moneda es el franco suizo, no el euro. Muchos lugares aceptan euros, pero el vuelto es en francos y a un cambio peor: lo más conveniente es la tarjeta, que se acepta en todos lados.",
        "Es de los países más caros del mundo. Los supermercados tienen comida preparada buena y bastante más barata que un restaurante, y en muchas regiones el alojamiento te da una tarjeta de huésped con transporte local gratis o descuentos.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "La altura manda",
      body: [
        "Suiza es hemisferio norte: enero es invierno y julio, verano. Pero acá el mes importa menos que la altura: por cada mil metros que subís, la temperatura baja unos seis grados.",
        "Las ciudades del llano —Zúrich, Berna, Ginebra— tienen inviernos cerca de cero, con niebla, y veranos templados. Los pueblos de montaña como Zermatt o St. Moritz pasan buena parte del invierno bajo cero, y en las cumbres hay nieve todo el año.",
        "El Tesino, al sur de los Alpes, es lo más templado del país. Y en la montaña el clima cambia en minutos: sol, niebla y tormenta en la misma tarde.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre es la temporada de caminatas, con los pasos de montaña abiertos y días largos. De diciembre a marzo, la de esquí.",
        "En abril, mayo y noviembre muchos teleféricos, trenes de montaña y hoteles de altura cierran por mantenimiento. Las ciudades siguen igual, pero revisá qué funciona arriba antes de armar el viaje.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Suiza",
      body: [
        "Los trenes son puntuales, están coordinados con los buses y los barcos de los lagos, y llegan a casi todos los pueblos y a varias cumbres. Es el país más fácil de recorrer sin auto.",
        "Si vas a moverte varios días, un pase de transporte para turistas o la tarjeta de medio precio pueden ahorrar bastante. Los trenes y teleféricos de montaña son lo más caro del viaje.",
        "Los trenes panorámicos, como el Glacier Express o el Bernina Express, piden reserva de asiento. Las precauciones son las de cualquier lugar concurrido: atención a la mochila en las estaciones grandes.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Montañas y paisajes",
      score: 10,
      rationale:
        "Los Alpes en su mejor versión: el Cervino, la Jungfrau, lagos turquesa y valles verdes.",
    },
    {
      dimension: "Trenes y transporte",
      score: 10,
      rationale:
        "Trenes puntuales que llegan a todos lados, incluso a las cumbres. Es el país más fácil de recorrer sin auto.",
    },
    {
      dimension: "Actividades al aire libre",
      score: 9.5,
      rationale:
        "Senderismo de todos los niveles en verano y algunas de las mejores pistas de esquí del mundo en invierno.",
    },
    {
      dimension: "Ciudades",
      score: 7.5,
      rationale:
        "Zúrich, Ginebra, Lucerna y Berna son lindas y ordenadas, pero se recorren en poco tiempo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4.5,
      rationale:
        "Todo funciona perfecto, y se paga: es de los países más caros del mundo para comer, dormir y moverse.",
    },
    {
      dimension: "Facilidad logística",
      score: 9.5,
      rationale:
        "Horarios coordinados, conexiones sin espera y todo señalizado. Lo único que complica es el costo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "El franco es de las monedas más estables del mundo. Caro, pero sin sorpresas.",
    },
  ],

  shines: [
    "Paisajes de montaña que justifican el viaje por sí solos.",
    "Trenes puntuales que llegan a pueblos y cumbres.",
    "Todo funciona: horarios, limpieza, señalización.",
  ],

  costs: [
    "Uno de los países más caros del mundo.",
    "Los trenes y teleféricos de montaña cuestan mucho.",
    "En la altura, el clima cambia en minutos.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: St. Moritz en enero no pide lo mismo que Lugano. Los precios están en francos suizos y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "zurich",
      name: "Zúrich",
      region: "Centro y norte",
      tag: "Ciudad y lago",
      blurb:
        "La ciudad más grande del país, sobre un lago y un río, con un casco viejo chico, museos y el aeropuerto con más vuelos. Es la base del planificador: invierno cerca de cero, verano templado.",
      coords: [47.3769, 8.5417],
      featured: true,
      image: null,
    },
    {
      id: "ginebra",
      name: "Ginebra",
      region: "Lago Lemán",
      tag: "Lago y organismos internacionales",
      blurb:
        "Sobre el lago Lemán, con el chorro de agua, sedes de la ONU y de la Cruz Roja, y Francia a minutos. Algo más templada que Zúrich.",
      coords: [46.2044, 6.1432],
      image: null,
    },
    {
      id: "lucerna",
      name: "Lucerna",
      region: "Centro y norte",
      tag: "Puente de madera",
      blurb:
        "El puente de madera cubierto, un lago entre montañas y cumbres como el Pilatus y el Rigi a un viaje corto. La puerta de entrada clásica a los Alpes.",
      coords: [47.0502, 8.3093],
      image: null,
    },
    {
      id: "berna",
      name: "Berna",
      region: "Centro y norte",
      tag: "Capital medieval",
      blurb:
        "La capital, con un casco medieval de arcadas sobre un meandro del río Aar, entero patrimonio de la humanidad. Tranquila y fácil de recorrer a pie.",
      coords: [46.948, 7.4474],
      image: null,
    },
    {
      id: "interlaken",
      name: "Interlaken y la Jungfrau",
      region: "Alpes",
      tag: "Entre dos lagos",
      blurb:
        "Entre dos lagos y al pie del Eiger, el Mönch y la Jungfrau. De acá sale el tren al Jungfraujoch, la estación más alta de Europa.",
      coords: [46.6863, 7.8632],
      image: null,
    },
    {
      id: "zermatt",
      name: "Zermatt",
      region: "Alpes",
      tag: "El Cervino",
      blurb:
        "Un pueblo sin autos al pie del Cervino, a 1.600 metros. Esquí casi todo el año en el glaciar, y temperaturas bajo cero buena parte del invierno.",
      coords: [46.0207, 7.7491],
      image: null,
    },
    {
      id: "lugano",
      name: "Lugano y el Tesino",
      region: "Tesino",
      tag: "Suiza italiana",
      blurb:
        "Lagos, palmeras y plazas de aire italiano al sur de los Alpes. Es la región más templada del país, con primavera temprana.",
      coords: [46.0037, 8.9511],
      image: null,
    },
    {
      id: "montreux",
      name: "Montreux y el lago Lemán",
      region: "Lago Lemán",
      tag: "Riviera suiza",
      blurb:
        "La riviera del lago Lemán, con el castillo de Chillon sobre el agua, viñedos en terrazas y un festival de jazz famoso en julio.",
      coords: [46.4312, 6.9107],
      image: null,
    },
    {
      id: "st-moritz",
      name: "St. Moritz y la Engadina",
      region: "Alpes",
      tag: "Alta montaña",
      blurb:
        "Un pueblo a 1.800 metros en la Engadina, sobre un lago que se congela en invierno. Uno de los lugares más fríos y más caros del país.",
      coords: [46.4908, 9.8355],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En Suiza la valija la decide la altura: las ciudades del llano tienen inviernos cerca de cero y veranos templados, pero en los pueblos de montaña y en las cumbres hace frío todo el año. Si vas a subir —y vas a querer—, llevá abrigo, gorro y anteojos de sol también en agosto. En invierno, ropa de nieve de verdad; en verano, capas, una campera impermeable y calzado para caminar.",
    keyPoints: [
      "Hemisferio norte: el invierno, de diciembre a marzo, es frío y con nieve en la montaña; el verano, de junio a septiembre, templado.",
      "La altura manda: por cada mil metros que subís, la temperatura baja unos seis grados. En las cumbres hay nieve todo el año.",
      "En la montaña el clima cambia en minutos: sol, niebla y tormenta en la misma tarde.",
      "El Tesino, al sur de los Alpes, es la región más templada del país.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana para las ciudades y los lagos, y un abrigo en la mochila si vas a subir: por encima de los dos mil metros el verano es fresco.",
      templado:
        "Capas, campera impermeable y calzado para caminar. Es el verano de los valles: ideal para el senderismo.",
      fresco:
        "Sweater o polar y campera impermeable. En la montaña sumá gorro y guantes, aunque abajo haga buen tiempo.",
      frio: "Ropa de nieve de verdad: campera abrigada e impermeable, primera capa térmica, gorro, guantes y botas. En Zermatt y St. Moritz el invierno pasa buena parte del tiempo bajo cero.",
    },
    plug: {
      types: "Tipo J y tipo C",
      voltage: "230 V, 50 Hz",
      note: "El toma suizo, de tres patas, acepta los enchufes finos de dos patas (tipo C), pero no los gruesos alemanes con descarga a tierra (tipo F). Si tus enchufes son de patas planas o del tipo F, llevá adaptador; si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Hacé la cuenta de un pase de tren",
          body: "Si vas a moverte mucho, un pase para turistas o la tarjeta de medio precio pueden ahorrar bastante. Compará con tu itinerario antes de comprar.",
        },
        {
          title: "Reservá los trenes panorámicos",
          body: "El Glacier Express y el Bernina Express piden reserva de asiento, y en temporada alta se agotan.",
        },
        {
          title: "Mirá las cámaras antes de subir",
          body: "Las cumbres pueden estar tapadas por las nubes. Las cámaras en vivo de cada montaña te dicen si vale la pena subir ese día.",
        },
        {
          title: "Comprá en el supermercado",
          body: "Tienen comida preparada buena y mucho más barata que un restaurante. Para el almuerzo de un día de caminata, es la mejor opción.",
        },
        {
          title: "Pedí la tarjeta de huésped",
          body: "En muchas regiones el alojamiento te da una tarjeta con transporte local gratis o descuentos. Pedila al hacer el check-in.",
        },
        {
          title: "Llená la botella en las fuentes",
          body: "El agua de las fuentes públicas es potable, salvo que un cartel diga lo contrario.",
        },
      ],
      donts: [
        {
          title: "No subas a la montaña en ropa de verano",
          body: "En el Jungfraujoch o en el Gornergrat hay nieve y temperaturas bajo cero también en agosto. Abrigo, gorro y anteojos de sol.",
        },
        {
          title: "No pagues en euros si podés evitarlo",
          body: "Muchos lugares los aceptan, pero el vuelto es en francos y a un cambio peor. La tarjeta, en francos, es lo más conveniente.",
        },
        {
          title: "No des por hecho que tus enchufes entran",
          body: "El toma suizo no acepta los enchufes gruesos con descarga a tierra que se usan en Alemania. Un adaptador universal evita sorpresas.",
        },
        {
          title: "No armes las cumbres sin margen",
          body: "Si el día está tapado, subir es pagar caro para ver niebla. Dejá algún día flexible para mover la excursión.",
        },
        {
          title: "No hagas ruido de noche ni el domingo",
          body: "En los edificios y barrios residenciales hay horas de silencio, de noche y los domingos, y se respetan.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "montana",
        title: "Montaña",
        notice: {
          tone: "warn",
          title: "Arriba hace frío todo el año",
          body: "En las cumbres a las que se sube en tren o teleférico, a más de tres mil metros, hay nieve y temperaturas bajo cero aun en verano, y el sol pega fuerte. Subí abrigado.",
        },
        summary: "Lo que va en la mochila para subir",
        items: [
          "Campera de abrigo y polar, también en verano",
          "Gorro y guantes",
          "Anteojos de sol con filtro",
          "Protector solar de factor alto",
          "Calzado con buena suela para nieve y senderos",
        ],
      },
      {
        id: "invierno",
        title: "Invierno y nieve",
        notice: {
          tone: "info",
          title: "Ropa de nieve de verdad",
          body: "En los pueblos de montaña la temperatura queda bajo cero muchos días de diciembre a marzo. Las ciudades del llano son más suaves.",
        },
        summary: "Lo que pide diciembre a marzo",
        items: [
          "Campera abrigada e impermeable",
          "Primera capa térmica",
          "Gorro, guantes y cuello",
          "Botas que no se mojen",
          "Protector labial y crema para el frío",
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
          title: "El enchufe suizo es propio",
          body: "Acepta los enchufes finos de dos patas (tipo C), pero no los gruesos con descarga a tierra. Un adaptador universal resuelve.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador tipo J, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil: el frío de la montaña descarga rápido el teléfono",
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
          "Curitas y algo para ampollas: se camina mucho",
          "Seguro de viaje con cobertura médica: la atención médica es muy cara",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa solo de verano",
        why: "En la montaña hace frío todo el año.",
        instead: "Capas y un abrigo para subir.",
      },
      {
        leave: "Euros como única plata",
        why: "El vuelto es en francos y a un cambio peor.",
        instead: "La tarjeta, que se acepta en todos lados.",
      },
      {
        leave: "Adaptadores tipo F",
        why: "El toma suizo no los acepta.",
        instead: "Un adaptador universal o uno tipo J.",
      },
      {
        leave: "Zapatos de ciudad para la montaña",
        why: "Los senderos tienen piedra, barro y, arriba, nieve.",
        instead: "Zapatillas de trekking.",
      },
      {
        leave: "Una valija enorme",
        why: "Los trenes son la forma de moverse, y cargarla en cada transbordo cansa.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Botellas de agua descartables",
        why: "El agua de las fuentes y de la canilla es potable y excelente.",
        instead: "Una botella reutilizable.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Suiza?",
        answer:
          "Suiza no es parte de la Unión Europea pero sí del espacio Schengen: muchos pasaportes latinoamericanos entran sin visa por hasta 90 días dentro de 180, sumando todo el espacio, pero no todos. Verificá el tuyo, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende del enchufe. El toma suizo acepta los finos de dos patas (tipo C), pero no los gruesos tipo F ni los de patas planas. Un adaptador universal evita problemas.",
      },
      {
        question: "¿Puedo pagar en euros?",
        answer:
          "En muchos lugares sí, pero el vuelto es en francos y a un cambio peor. Lo más conveniente es pagar con tarjeta, en francos.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre para caminar la montaña, y de diciembre a marzo para esquiar. En abril, mayo y noviembre algunos teleféricos y hoteles de altura cierran por mantenimiento.",
      },
      {
        question: "¿Conviene un pase de tren?",
        answer:
          "Si vas a moverte varios días, muchas veces sí. Compará el pase para turistas con la tarjeta de medio precio según tu recorrido.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Depende de la región: alemán en Zúrich, Berna y Lucerna; francés en Ginebra y Montreux; italiano en el Tesino. El inglés funciona en todos lados.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí, y la de las fuentes públicas también, salvo que un cartel diga lo contrario.",
      },
      {
        question: "¿Es tan caro como dicen?",
        answer:
          "Sí: comer, dormir y moverse cuesta más que en casi cualquier otro país de Europa. Los supermercados y los pases de transporte ayudan a equilibrar.",
      },
    ],
  },
};
