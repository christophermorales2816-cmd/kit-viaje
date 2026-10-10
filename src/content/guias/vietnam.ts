import type { DestinationGuide } from "./types";

/**
 * Guía de Vietnam.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: tres climas en un mismo país, con la lluvia en
 * meses distintos según la región. El norte tiene un invierno fresco de verdad
 * —Hanói en enero cae en `fresco`— y el centro llueve en el otoño, cuando el
 * sur ya está seco. La visa electrónica se tramita en el sitio oficial: hay
 * muchos intermediarios que cobran de más, y se dice como dato práctico.
 */
export const vietnam: DestinationGuide = {
  slug: "vietnam",
  country: "Vietnam",
  subregion: "Sudeste Asiático",
  subhead:
    "La bahía de Ha Long, el casco viejo de Hanói, la ciudad de faroles de Hoi An, arrozales en terrazas en el norte y el delta del Mekong en el sur. Un país largo, con tres climas y una cocina que se come en la vereda.",

  image: null,

  highlights: [
    {
      value: "3 climas",
      label: "de norte a sur",
      note: "Hanói tiene invierno fresco; el centro llueve en otoño; el sur es caluroso todo el año. Siempre hay una región en buena época.",
    },
    {
      value: "Ha Long",
      label: "miles de islotes de piedra en el mar",
      note: "Se recorre en barco, con noche a bordo o en el día. Patrimonio de la humanidad.",
    },
    {
      value: "Hoi An",
      label: "la ciudad de los faroles",
      note: "Un puerto comercial de hace siglos, con casas de madera, sastres que hacen ropa a medida en un día y el río iluminado de noche.",
    },
    {
      value: "Phở",
      label: "la sopa que se desayuna",
      note: "Caldo, fideos de arroz y carne, sentado en un banquito en la vereda. La cocina vietnamita es de las más frescas de Asia.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Vietnam",
      body: [
        "La mayoría de los pasaportes latinoamericanos necesita visa, que se tramita online como visa electrónica en el sitio oficial del gobierno; unos pocos están exentos por estadías cortas. Verificá el tuyo antes de comprar el pasaje.",
        "Usá solo el sitio oficial: hay muchas páginas intermediarias, con nombres parecidos, que cobran de más por el mismo trámite.",
        "Imprimí la visa aprobada y revisá que los datos coincidan con el pasaporte, letra por letra. El pasaporte tiene que tener vigencia de sobra.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Vietnam",
      body: [
        "La moneda es el dong. El efectivo manda: puestos, mercados, cafés y taxis cobran en efectivo. La tarjeta funciona en hoteles, restaurantes más grandes y tiendas de ciudad.",
        "Los billetes tienen muchos ceros y algunos colores se parecen: contá dos veces antes de pagar. Los dólares se cambian bien en las joyerías y casas de cambio de las ciudades.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dongs: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Tres climas en un país",
      body: [
        "Vietnam es hemisferio norte, pero largo: del trópico al subtrópico. El norte, con Hanói, Ha Long y Ninh Binh, tiene un invierno fresco y gris de diciembre a febrero y un verano caluroso y lluvioso.",
        "El centro, con Hue, Hoi An y Da Nang, tiene la lluvia de septiembre a diciembre, a veces con tifones e inundaciones; de febrero a agosto está seco y caluroso.",
        "El sur, con Ciudad Ho Chi Minh y Phu Quoc, es caluroso todo el año, seco de diciembre a abril y lluvioso de mayo a noviembre. Sapa, en la montaña del norte, puede bajar de los cinco grados en enero.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Para recorrer de norte a sur, marzo y abril son el mejor equilibrio: el norte ya no está gris y el centro y el sur están secos.",
        "Conviene esquivar el Tet, el Año Nuevo lunar (enero o febrero, según el año): todo el país viaja y muchos negocios cierran varios días.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Vietnam",
      body: [
        "El país es largo: entre el norte y el sur, vuelos internos baratos; entre ciudades cercanas, trenes y buses nocturnos con camas.",
        "En las ciudades, Grab para autos y motos, con precio fijo antes de subir. Cruzar la calle entre motos se hace caminando a ritmo parejo, sin correr ni frenar de golpe: te esquivan.",
        "Las precauciones son las de cualquier gran ciudad: el celular firme en la mano en la vereda y la mochila adelante en los mercados.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "La ciudadela imperial de Hue, Hoi An, los templos de Hanói y los sitios de la guerra.",
    },
    {
      dimension: "Gastronomía",
      score: 10,
      rationale:
        "Phở, bánh mì, bún chả, rollitos frescos y café con leche condensada, a toda hora y barato.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Ha Long, los arrozales en terrazas de Sapa y las montañas sobre los ríos de Ninh Binh.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Da Nang, Hoi An y Phu Quoc tienen buenas playas; no son el motivo principal del viaje.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "Comer, dormir y moverse sale muy poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Vuelos internos y Grab ayudan; las distancias son largas y el inglés es escaso fuera de lo turístico.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Precios estables; en mercados se regatea y hay que contar bien los billetes.",
    },
  ],

  shines: [
    "Comida excelente y muy barata.",
    "Paisajes únicos, de la bahía a las terrazas de arroz.",
    "Siempre hay una región con buen clima.",
  ],

  costs: [
    "Distancias largas de norte a sur.",
    "El tránsito de motos de las ciudades grandes.",
    "El centro llueve fuerte en otoño.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Hanói en enero que Ciudad Ho Chi Minh, y el centro llueve en otros meses. Los precios están en dongs y son órdenes de magnitud.",

  places: [
    {
      id: "hanoi",
      name: "Hanói",
      region: "Norte",
      tag: "El casco viejo",
      blurb:
        "Las calles de oficios del casco viejo, el lago Hoan Kiem, el Templo de la Literatura y la comida de vereda. Es la base del planificador: invierno fresco y gris, verano caluroso y lluvioso.",
      coords: [21.0285, 105.8542],
      featured: true,
      image: null,
    },
    {
      id: "ho-chi-minh",
      name: "Ciudad Ho Chi Minh",
      region: "Sur",
      tag: "La ciudad más grande del país",
      blurb:
        "La antigua Saigón: mercados, edificios coloniales franceses, los túneles de Cu Chi y la puerta al delta del Mekong. Calurosa todo el año, con lluvias de mayo a noviembre.",
      coords: [10.8231, 106.6297],
      image: null,
    },
    {
      id: "hoi-an",
      name: "Hoi An",
      region: "Centro",
      tag: "Faroles y sastres",
      blurb:
        "El casco antiguo de casas de madera y el puente japonés, sastres que hacen ropa a medida y la playa a unos minutos en bicicleta. Lluviosa de septiembre a diciembre.",
      coords: [15.8801, 108.338],
      image: null,
    },
    {
      id: "hue",
      name: "Hue",
      region: "Centro",
      tag: "La ciudad imperial",
      blurb:
        "La ciudadela de la última dinastía, tumbas imperiales a orillas del río Perfume y la cocina más picante del país. La más lluviosa en otoño.",
      coords: [16.4637, 107.5909],
      image: null,
    },
    {
      id: "ha-long",
      name: "Bahía de Ha Long",
      region: "Norte",
      tag: "Islotes de piedra",
      blurb:
        "Miles de islotes de piedra caliza sobre el agua verde, cuevas y kayak, con noche a bordo o en el día desde Hanói. Fresca y con niebla en invierno.",
      coords: [20.9101, 107.1839],
      image: null,
    },
    {
      id: "sapa",
      name: "Sapa",
      region: "Norte",
      tag: "Terrazas de arroz",
      blurb:
        "Arrozales en terrazas en la montaña, caminatas entre aldeas y el monte Fansipan, el más alto de Indochina. Fría en invierno, con niebla; verde de junio a septiembre.",
      coords: [22.3364, 103.8438],
      image: null,
    },
    {
      id: "da-nang",
      name: "Da Nang",
      region: "Centro",
      tag: "Playa y montañas de mármol",
      blurb:
        "Una playa larga dentro de la ciudad, las Montañas de Mármol y el Puente Dorado de las colinas de Ba Na. Aeropuerto para Hoi An y Hue.",
      coords: [16.0544, 108.2022],
      image: null,
    },
    {
      id: "ninh-binh",
      name: "Ninh Binh y Tam Coc",
      region: "Norte",
      tag: "La Ha Long de tierra",
      blurb:
        "Ríos entre montañas de piedra que se recorren en bote a remo, templos en cuevas y arrozales. A un par de horas de Hanói.",
      coords: [20.2506, 105.9745],
      image: null,
    },
    {
      id: "phu-quoc",
      name: "Isla de Phu Quoc",
      region: "Sur",
      tag: "La isla tropical",
      blurb:
        "Playas de arena blanca, atardeceres sobre el golfo de Tailandia y pueblos de pescadores. Seca de noviembre a abril.",
      coords: [10.2899, 103.984],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Vietnam son tres climas. Para el sur y el centro, ropa liviana que se seque rápido, protector, repelente y un impermeable para la temporada de lluvias. Para el norte en invierno, un buzo y una campera: Hanói es fresca y gris, y Sapa puede ser fría. Siempre, algo que cubra hombros y rodillas para los templos, sandalias y efectivo en dongs.",
    keyPoints: [
      "Tres climas: el norte tiene invierno fresco, el centro llueve en otoño y el sur es caluroso todo el año.",
      "La mayoría de los pasaportes necesita visa electrónica: tramitala solo en el sitio oficial.",
      "El efectivo manda en puestos, mercados y taxis.",
      "Grab para moverse en las ciudades, con precio antes de subir.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, protector, sombrero, repelente y un impermeable liviano: la lluvia del trópico es fuerte y corta.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño del norte, la mejor época para Hanói.",
      fresco:
        "Capas, un buzo abrigado y una campera impermeable. Es el invierno de Hanói y Ha Long: gris, húmedo y sin calefacción en todos lados.",
      frio: "Campera de abrigo, gorro y calzado que no deje pasar el agua. Sapa en invierno es fría y con niebla.",
    },
    plug: {
      types: "Tipo A, tipo C y tipo F",
      voltage: "220 V, 50 Hz",
      note: "Muchos tomas aceptan patas planas y redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramitá la visa solo en el sitio oficial",
          body: "Hay páginas con nombres parecidos que cobran de más. Revisá que los datos coincidan con el pasaporte.",
        },
        {
          title: "Cruzá la calle a ritmo parejo",
          body: "Sin correr ni frenar de golpe: las motos te esquivan si saben dónde vas a estar.",
        },
        {
          title: "Dormí una noche en la bahía",
          body: "En Ha Long, la noche a bordo deja ver la bahía al amanecer, sin los barcos del día.",
        },
        {
          title: "Hacete ropa a medida en Hoi An",
          body: "Los sastres la tienen en uno o dos días. Pedí una prueba antes de la entrega final.",
        },
        {
          title: "Usá Grab en las ciudades",
          body: "Autos y motos con precio fijo antes de subir.",
        },
        {
          title: "Elegí pagar en dongs",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No confundas los billetes",
          body: "Tienen muchos ceros y algunos colores se parecen. Contá dos veces antes de pagar.",
        },
        {
          title: "No viajes en el Tet sin planearlo",
          body: "En el Año Nuevo lunar todo el país viaja y muchos negocios cierran varios días.",
        },
        {
          title: "No entres a un templo descubierto",
          body: "Hombros y rodillas cubiertos, y sin zapatos donde te los pidan.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "La embotellada es barata y está en todos lados.",
        },
        {
          title: "No lleves el celular suelto en la vereda",
          body: "Firme en la mano o en el bolsillo: en las ciudades grandes pasan muchas motos pegadas al cordón.",
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
        title: "Según la región y la época",
        notice: {
          tone: "info",
          title: "Tres climas en un viaje",
          body: "Hanói en enero pide buzo y Ciudad Ho Chi Minh, ropa de verano. Mirá el clima de cada ciudad en el planificador.",
        },
        summary: "Lo que cambia con la región",
        items: [
          "Ropa liviana de secado rápido para el centro y el sur",
          "Un buzo y una campera para el norte en invierno",
          "Un impermeable liviano",
          "Sandalias de trekking",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "La mayoría de los pasaportes latinoamericanos necesita visa electrónica. Tramitala en el sitio oficial antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa electrónica aprobada, impresa",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "templos",
        title: "Templos y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Una camisa liviana o un pañuelo para los hombros",
          "Pantalón largo o pollera larga",
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
          "Sales de rehidratación y algo para el estómago",
          "Repelente de mosquitos",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo la tarjeta",
        why: "Puestos, mercados, cafés y taxis cobran en efectivo.",
        instead: "Dongs en efectivo y una tarjeta.",
      },
      {
        leave: "Una sola valija de verano",
        why: "El norte en invierno es fresco y Sapa, frío.",
        instead: "Capas: un buzo y una campera liviana.",
      },
      {
        leave: "Musculosas y shorts para los templos",
        why: "Piden hombros y rodillas cubiertos.",
        instead: "Una camisa liviana y un pantalón largo.",
      },
      {
        leave: "Zapatillas pesadas",
        why: "Con el calor y la lluvia, no se secan.",
        instead: "Sandalias de trekking y unas ojotas.",
      },
      {
        leave: "Tramitar la visa en cualquier página",
        why: "Hay intermediarios que cobran de más.",
        instead: "El sitio oficial del gobierno.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Vietnam?",
        answer:
          "La mayoría de los pasaportes latinoamericanos sí: se tramita online como visa electrónica, en el sitio oficial. Unos pocos están exentos por estadías cortas. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Para recorrer todo el país, marzo y abril. El norte está mejor en otoño y primavera; el sur, de diciembre a abril.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Muchos tomas aceptan patas planas y redondas a 220 V. Un adaptador universal resuelve cualquier caso.",
      },
      {
        question: "¿Cómo me muevo de norte a sur?",
        answer:
          "En vuelos internos, que son baratos. Entre ciudades cercanas, trenes y buses nocturnos con camas.",
      },
      {
        question: "¿Se puede pagar con tarjeta?",
        answer:
          "En hoteles y restaurantes más grandes. Para lo de todos los días, efectivo en dongs.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. En restaurantes turísticos y con guías, dejar algo es bien recibido.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No conviene tomarla: la embotellada es barata y está en todos lados.",
      },
      {
        question: "¿Cómo se cruza la calle con tantas motos?",
        answer:
          "Caminando a ritmo parejo, sin correr ni frenar de golpe. Las motos te esquivan.",
      },
    ],
  },
};
