import type { DestinationGuide } from "./types";

/**
 * Guía de Brunéi.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un sultanato chico y ecuatorial, con el dólar de
 * Brunéi a la par del de Singapur —que también circula— y con centavos. La
 * venta de alcohol está prohibida y el viernes al mediodía cierra casi todo:
 * se dicen como preparación. El transporte público es escaso, y eso es lo que
 * más cambia el viaje.
 */
export const brunei: DestinationGuide = {
  slug: "brunei",
  country: "Brunéi",
  subregion: "Sudeste Asiático",
  subhead:
    "Mezquitas con cúpulas de oro, una aldea entera sobre pilotes en el río, selva virgen en Borneo con pasarelas sobre los árboles y un ritmo tranquilo. Uno de los países más chicos y menos visitados del Sudeste Asiático.",

  image: null,

  highlights: [
    {
      value: "Viernes",
      label: "al mediodía, todo cierra para la oración",
      note: "Negocios, restaurantes y oficinas cierran un par de horas. Conviene planear ese rato con tiempo.",
    },
    {
      value: "Kampong Ayer",
      label: "una aldea entera sobre pilotes",
      note: "Casas, escuelas y mezquitas sobre el río Brunéi, unidas por pasarelas y taxis de agua.",
    },
    {
      value: "Ulu Temburong",
      label: "selva virgen con pasarelas sobre los árboles",
      note: "Un parque nacional de selva primaria al que se llega en lancha larga por el río.",
    },
    {
      value: "Nasi katok",
      label: "arroz, pollo y sambal, a toda hora",
      note: "El plato barato y popular del país, envuelto en papel.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Brunéi",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros necesitan tramitarla antes. Verificá el tuyo antes de comprar el pasaje.",
        "La venta de alcohol está prohibida. Quien no es musulmán puede entrar una cantidad chica para consumo propio, declarándola en la aduana.",
        "El país aplica la ley islámica: ropa discreta y conducta reservada en público.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Brunéi",
      body: [
        "La moneda es el dólar de Brunéi, que vale lo mismo que el de Singapur; los dos circulan a la par. La tarjeta funciona en hoteles, restaurantes y centros comerciales.",
        "En los mercados y los puestos de comida, efectivo. Hay cajeros en las ciudades.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares de Brunéi: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Ecuatorial",
      body: [
        "Brunéi está en la costa norte de Borneo, cerca del ecuador: calor y humedad parejos todo el año, alrededor de treinta y dos grados de máxima.",
        "Llueve casi todos los meses, en chaparrones de la tarde, y más de octubre a enero.",
        "Temburong, separado del resto del país, es selva: más húmeda y un poco más fresca.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Cualquier época sirve; de febrero a abril suele llover un poco menos.",
        "En Hari Raya, al final del Ramadán, el palacio del sultán abre sus puertas al público unos días.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Brunéi",
      body: [
        "El transporte público es escaso: hay pocos buses y casi no hay taxis en la calle. Se pide auto por app o se alquila.",
        "A Temburong se llega por un puente largo sobre el mar o en lancha, y al parque, en lancha larga por el río.",
        "Por Kampong Ayer se anda en taxi de agua, que se para desde el muelle.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale: "Mezquitas, el museo de la realeza y la vida en Kampong Ayer.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale: "Nasi katok, ambuyat y mercados nocturnos con cocina malaya.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale: "Selva primaria de Borneo, ríos y manglares.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale:
        "Playas tranquilas en el mar de China Meridional, sin gran desarrollo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Comer en los mercados sale poco; hoteles y excursiones son caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale: "Un país chico y ordenado, pero con poco transporte público.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El dólar de Brunéi está atado al de Singapur.",
    },
  ],

  shines: [
    "Selva virgen a una hora de la capital.",
    "Tranquilo y ordenado.",
    "Pocos turistas.",
  ],

  costs: [
    "Poco transporte público.",
    "Sin alcohol en venta.",
    "Poca vida nocturna.",
  ],

  dataScopeNote:
    "Elegís el lugar en el planificador y los cálculos se hacen con su clima, que casi no cambia en el año. Los precios están en dólares de Brunéi, con centavos, y son órdenes de magnitud.",

  places: [
    {
      id: "bandar-seri-begawan",
      name: "Bandar Seri Begawan",
      region: "Brunéi-Muara",
      tag: "Cúpulas de oro",
      blurb:
        "La mezquita de Omar Ali Saifuddien sobre una laguna, el museo de la realeza y el mercado nocturno de Gadong. Es la base del planificador: calor y humedad todo el año.",
      coords: [4.9031, 114.9398],
      featured: true,
      image: null,
    },
    {
      id: "kampong-ayer",
      name: "Kampong Ayer",
      region: "Brunéi-Muara",
      tag: "La aldea sobre el agua",
      blurb:
        "Una aldea sobre pilotes en el río Brunéi, con casas, escuelas y mezquitas unidas por pasarelas, y una galería que cuenta su historia.",
      coords: [4.8833, 114.9417],
      image: null,
    },
    {
      id: "temburong",
      name: "Temburong (Ulu Temburong)",
      region: "Temburong",
      tag: "Selva de Borneo",
      blurb:
        "Selva primaria con una pasarela de acero sobre las copas de los árboles, ríos para recorrer en lancha y casas comunales. Más húmedo y un poco más fresco.",
      coords: [4.55, 115.15],
      image: null,
    },
    {
      id: "muara",
      name: "Muara y la playa de Serasa",
      region: "Brunéi-Muara",
      tag: "El puerto y la playa",
      blurb:
        "El puerto del país y playas tranquilas al norte, con atardeceres sobre el mar.",
      coords: [5.0167, 115.0667],
      image: null,
    },
    {
      id: "jerudong",
      name: "Jerudong",
      region: "Brunéi-Muara",
      tag: "Parque y mercado",
      blurb:
        "Un parque de diversiones y un mercado de comida al atardecer, cerca de la costa oeste de la capital.",
      coords: [4.9449, 114.8337],
      image: null,
    },
    {
      id: "tutong",
      name: "Tutong",
      region: "Tutong",
      tag: "Playas y mercado",
      blurb:
        "Un pueblo costero con mercado semanal y playas largas, entre la capital y el oeste.",
      coords: [4.8028, 114.65],
      image: null,
    },
    {
      id: "tasek-merimbun",
      name: "Lago Merimbun",
      region: "Tutong",
      tag: "El lago de agua oscura",
      blurb:
        "El lago natural más grande del país, de agua oscura, rodeado de selva y con una pasarela hacia una isla.",
      coords: [4.5833, 114.6667],
      image: null,
    },
    {
      id: "seria",
      name: "Seria",
      region: "Belait",
      tag: "La ciudad del petróleo",
      blurb:
        "La ciudad donde empezó el petróleo del país, con pozos sobre la playa y un monumento al barril número mil millones.",
      coords: [4.6069, 114.3236],
      image: null,
    },
    {
      id: "kuala-belait",
      name: "Kuala Belait",
      region: "Belait",
      tag: "La puerta a Sarawak",
      blurb:
        "La ciudad del oeste, junto a la frontera con Sarawak, en Malasia, con playa y un paseo junto al río.",
      coords: [4.5833, 114.2],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Brunéi es calor y humedad todo el año. Ropa liviana que cubra hombros y rodillas, un paraguas o campera liviana para los chaparrones, repelente y protector. Para la selva de Temburong, calzado cerrado y ropa de secado rápido. Para las mezquitas, mangas largas y, las mujeres, un pañuelo.",
    keyPoints: [
      "Calor y humedad parejos; llueve casi todos los meses.",
      "Ropa discreta en público.",
      "Sin venta de alcohol; el viernes al mediodía cierra casi todo.",
      "Poco transporte público: auto por app o alquilado.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana que cubra hombros y rodillas, repelente, protector y un paraguas para los chaparrones de la tarde.",
      templado: "Ropa liviana y un buzo fino para el aire acondicionado.",
      fresco: "Un buzo liviano para los interiores con aire acondicionado.",
      frio: "No hace frío en Brunéi: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo G",
      voltage: "240 V, 50 Hz",
      note: "El tipo G es el británico, de tres patas planas. Un adaptador universal lo resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Planeá el viernes",
          body: "Al mediodía cierran negocios y restaurantes un par de horas para la oración.",
        },
        {
          title: "Recorré Kampong Ayer en taxi de agua",
          body: "Se para desde el muelle y se negocia el recorrido antes de subir.",
        },
        {
          title: "Reservá Temburong con un operador",
          body: "El parque se visita en excursión, con lancha larga y guía.",
        },
        {
          title: "Comé en el mercado de Gadong",
          body: "Al atardecer, con puestos de nasi katok, satay y jugos.",
        },
        {
          title: "Pedí auto por app",
          body: "Casi no hay taxis en la calle, y los buses son pocos.",
        },
        {
          title: "Elegí pagar en dólares de Brunéi",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Mangas largas, piernas cubiertas y, las mujeres, el pelo. Muchas prestan túnicas en la entrada.",
        },
        {
          title: "No tomes alcohol en público",
          body: "La venta está prohibida y tomar en la calle, también.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
        },
        {
          title: "No señales con el dedo índice",
          body: "Se señala con el pulgar, con la mano cerrada.",
        },
        {
          title: "No subestimes los chaparrones",
          body: "Llegan rápido a la tarde: un paraguas en la mochila.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Documentos",
        notice: {
          tone: "warn",
          title: "Verificá la visa",
          body: "Muchos pasaportes entran sin visa por estadías cortas, pero no todos. Confirmalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Pasaje de salida",
          "Reserva del hotel",
          "Seguro de viaje",
        ],
      },
      {
        id: "selva",
        title: "Para la selva",
        notice: {
          tone: "info",
          title: "Húmedo y embarrado",
          body: "En Temburong se camina por senderos húmedos y se sube a una pasarela alta. Ropa que se seque rápido.",
        },
        summary: "Lo que pide Temburong",
        items: [
          "Calzado cerrado con buen agarre",
          "Ropa de secado rápido",
          "Repelente",
          "Bolsa estanca para el teléfono",
        ],
      },
      {
        id: "mezquitas",
        title: "Mezquitas y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra brazos y piernas",
          "Un pañuelo para la cabeza",
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
          "Repelente",
          "Algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa corta",
        why: "En público se cubren hombros y rodillas.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Contar con taxis en la calle",
        why: "Casi no hay.",
        instead: "Auto por app o alquilado.",
      },
      {
        leave: "Zapatillas de tela para la selva",
        why: "No se secan con la humedad.",
        instead: "Calzado cerrado de secado rápido.",
      },
      {
        leave: "Alcohol sin declarar",
        why: "La venta está prohibida y la aduana lo controla.",
        instead: "Nada, o una cantidad chica declarada.",
      },
      {
        leave: "Abrigo",
        why: "Hace calor todo el año.",
        instead: "Un buzo liviano para el aire acondicionado.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 240 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Brunéi?",
        answer:
          "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros la necesitan. Verificá el tuyo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "Cualquiera. De febrero a abril suele llover un poco menos.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "No se vende. Quien no es musulmán puede entrar una cantidad chica para consumo propio, declarándola en la aduana.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Brunéi usa el tipo G, de tres patas planas, a 240 V.",
      },
      {
        question: "¿Se deja propina?",
        answer: "No es habitual; muchas cuentas suman un cargo por servicio.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Es tratada, pero casi todos toman embotellada o filtrada.",
      },
      {
        question: "¿Cómo me muevo sin auto?",
        answer:
          "Con autos por app y algunos buses. Para Temburong, en excursión.",
      },
      {
        question: "¿Se puede visitar el palacio del sultán?",
        answer:
          "Solo unos días al año, en Hari Raya, al final del Ramadán, cuando abre al público.",
      },
    ],
  },
};
