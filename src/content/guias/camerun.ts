import type { DestinationGuide } from "./types";

/**
 * Guía de Camerún.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 15.8 decidió para nueve países de África: entra con
 * aviso, como Pakistán. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: paisajes muy distintos en un solo país —"África en
 * miniatura", como le dicen, que es el dato de su portada— y el franco CFA de
 * África Central, que vale lo mismo que el de Senegal y Costa de Marfil pero
 * no se acepta en su zona, ni el de ellos acá. La vacuna de la fiebre amarilla
 * es obligatoria para todos, como en Ghana. La base es Duala y no Yaundé, la
 * capital, como Abiyán en Costa de Marfil. Las ciudades del planificador son
 * las del Litoral, el Centro, el Sur, el Este y el Oeste; ninguna está en el
 * Noroeste ni en el Sudoeste anglófonos ni en el norte.
 */
export const camerun: DestinationGuide = {
  slug: "camerun",
  country: "Camerún",
  subregion: "África Central",
  subhead:
    "Selva virgen en el Dja, playas y la cascada que cae al mar en Kribi, los reinos y las jefaturas de las tierras altas del Oeste y la música de Duala.",

  image: null,

  highlights: [
    {
      value: "África",
      label: "en miniatura, por la variedad de paisajes y de pueblos",
      note: "Así le dicen a Camerún: selva, playas, tierras altas, sabana y más de doscientos pueblos con sus idiomas, en un solo país.",
    },
    {
      value: "Vacuna",
      label: "contra la fiebre amarilla, obligatoria para entrar",
      note: "Camerún pide el certificado a todos los viajeros, vengan de donde vengan, y también para tramitar la visa. Tiene que estar aplicada al menos diez días antes de llegar.",
    },
    {
      value: "Lobé",
      label: "la cascada que cae directo al mar, en Kribi",
      note: "Una de las pocas cascadas del mundo que desembocan en el océano, a unos kilómetros de Kribi.",
    },
    {
      value: "Foumban",
      label: "el palacio del sultán bamún y sus artesanos",
      note: "La ciudad del reino bamún, con el palacio hoy museo, la calle de los artesanos y la escritura que inventó el rey Njoya.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Camerún",
      body: [
        "Casi todos los pasaportes tramitan la visa electrónica online antes de viajar, con reserva de hotel y pasaje de salida. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Camerún pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros, vengan de donde vengan, y también para tramitar la visa. La vacuna tiene que estar aplicada al menos diez días antes de llegar.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Llevá copias: en las rutas hay controles.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Camerún",
      body: [
        "La moneda es el franco CFA de África Central, atado al euro. Vale lo mismo que el de África Occidental, pero ninguno se acepta en la zona del otro.",
        "La tarjeta funciona en hoteles y en algunos restaurantes de Duala y Yaundé; en el resto, efectivo. Hay cajeros en las ciudades, y los euros en billetes nuevos se cambian fácil.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Selva, costa y tierras altas",
      body: [
        "Duala es de las ciudades más lluviosas de África: llueve casi todos los días de junio a octubre, con calor húmedo todo el año.",
        "Yaundé, Kribi y el sur tienen dos temporadas de lluvia, de abril a junio y de septiembre a noviembre.",
        "Las tierras altas del Oeste son frescas: en Dschang y Bandjoun, las noches de la temporada seca rondan los doce o trece grados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a febrero: la temporada seca, la mejor para recorrer. Kribi y la costa sur tienen otra pausa en julio y agosto.",
        "De junio a octubre llueve muchísimo en Duala y en el Oeste.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Camerún",
      body: [
        "Entre Duala, Yaundé, Kribi y el Oeste hay buses de varias empresas: elegí las más conocidas y viajá de día.",
        "En las ciudades hay taxis colectivos, motos taxi y aplicaciones como Yango.",
        "En las rutas hay controles policiales: llevá siempre el pasaporte o una copia. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a partes de Camerún, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son las del Litoral, el Centro, el Sur, el Este y el Oeste. Ninguna está en el Noroeste ni en el Sudoeste, donde están Limbe y el monte Camerún, ni en el norte del país.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Los reinos del Oeste, como el bamún, y las jefaturas bamileke.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Ndolé, pescado a la brasa, poulet DG, plátano frito y beignets con porotos.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Selva, la costa de Kribi, cascadas y las tierras altas del Oeste.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "Playas de arena clara en Kribi, con la cascada de la Lobé; el mar es fuerte.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Comer en la calle es barato; los hoteles de Duala y Yaundé, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale: "Rutas lentas, controles y transporte informal.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "Selva, playa y montaña en un solo país.",
    "Los reinos y las artesanías del Oeste.",
    "La comida y la música.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Visa previa y vacuna obligatoria.",
    "Lluvia casi diaria de junio a octubre en Duala.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Duala en agosto que Kribi o las tierras altas del Oeste. Los precios están en francos CFA y son órdenes de magnitud; los hoteles de Duala y Yaundé pueden costar bastante más.",

  places: [
    {
      id: "duala",
      name: "Duala",
      region: "Litoral",
      tag: "El puerto y la ciudad más grande",
      blurb:
        "La ciudad más grande y el puerto del país, con el barrio colonial de Bonanjo, la pagoda de los reyes Bell, mercados enormes y mucha música en vivo. Es la base del planificador: calor húmedo todo el año y lluvia casi diaria de junio a octubre.",
      coords: [4.0511, 9.7679],
      featured: true,
      image: null,
    },
    {
      id: "yaunde",
      name: "Yaundé",
      region: "Centro",
      tag: "La capital de las siete colinas",
      blurb:
        "La capital, sobre colinas, con el monumento a la Reunificación, el museo nacional y el mirador del monte Fébé. Más fresca que Duala, con dos temporadas de lluvia.",
      coords: [3.848, 11.5021],
      image: null,
    },
    {
      id: "kribi",
      name: "Kribi",
      region: "Sur",
      tag: "Playa y cascada",
      blurb:
        "Playas de arena clara, pescado a la brasa en la arena y la cascada de la Lobé, que cae directo al mar a unos kilómetros.",
      coords: [2.9373, 9.9077],
      image: null,
    },
    {
      id: "ebodje",
      name: "Ebodjé (tortugas marinas)",
      region: "Sur",
      tag: "Tortugas marinas",
      blurb:
        "Un pueblo de pescadores con un proyecto de ecoturismo para cuidar a las tortugas marinas que desovan en la playa. Alojamiento simple.",
      coords: [2.5833, 9.8333],
      image: null,
    },
    {
      id: "edea",
      name: "Edéa (río Sanaga)",
      region: "Litoral",
      tag: "El río Sanaga",
      blurb:
        "Una ciudad sobre el río Sanaga, con el lago Ossa cerca y su reserva de manatíes.",
      coords: [3.8, 10.1333],
      image: null,
    },
    {
      id: "foumban",
      name: "Foumban (palacio del sultán)",
      region: "Oeste",
      tag: "El reino bamún",
      blurb:
        "El palacio del sultán bamún, hoy museo, la calle de los artesanos con bronces y tallas, y la escritura que inventó el rey Njoya. Fresca de noche.",
      coords: [5.7267, 10.9],
      image: null,
    },
    {
      id: "dschang",
      name: "Dschang (tierras altas del Oeste)",
      region: "Oeste",
      tag: "Las tierras altas",
      blurb:
        "Una ciudad universitaria en las tierras altas, con el museo de las civilizaciones, un lago y un clima fresco todo el año.",
      coords: [5.45, 10.0667],
      image: null,
    },
    {
      id: "bandjoun",
      name: "Bandjoun (jefatura bamileke)",
      region: "Oeste",
      tag: "La jefatura bamileke",
      blurb:
        "La jefatura tradicional de Bandjoun, con su gran casa de techo cónico y el museo de las artes bamileke.",
      coords: [5.35, 10.4167],
      image: null,
    },
    {
      id: "dja",
      name: "Reserva del Dja (Somalomo)",
      region: "Este",
      tag: "Selva virgen",
      blurb:
        "Una de las selvas mejor conservadas de África, patrimonio de la humanidad, con gorilas de llanura, chimpancés y elefantes de bosque. Se entra por Somalomo, con guías locales.",
      coords: [3.3667, 12.7333],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Camerún, ropa liviana y fresca, sombrero y protector: hace calor húmedo en Duala, Yaundé y la costa. De junio a octubre, impermeable y calzado que se seque rápido, sobre todo en Duala. Para el Oeste, un buzo. Siempre, el certificado de la fiebre amarilla en el bolso de mano, repelente y un adaptador.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Vacuna de la fiebre amarilla obligatoria para todos, y visa tramitada antes.",
      "Lluvia casi diaria de junio a octubre en Duala; la temporada seca va de noviembre a febrero.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, sombrero, protector y repelente. Algo impermeable en las temporadas de lluvia.",
      templado: "Ropa liviana de día y un buzo para la noche en el Oeste.",
      fresco:
        "Un buzo y una campera liviana para las noches de Dschang y Bandjoun.",
      frio: "No hace frío en Camerún: un buzo alcanza para las noches del Oeste.",
    },
    plug: {
      types: "Tipos C y E",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas finas (C) o el francés, con una tercera pata macho (E); las de dos patas entran en los dos. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Te piden el certificado para la visa y otra vez al llegar.",
        },
        {
          title: "Probá el ndolé",
          body: "Un guiso de hojas amargas con maní y carne o camarones: el plato nacional.",
        },
        {
          title: "Llevá copias del pasaporte",
          body: "En las rutas hay controles, y una copia agiliza.",
        },
        {
          title: "Viajá de día por ruta",
          body: "De noche hay poca luz y mucho tránsito pesado.",
        },
        {
          title: "Elegí pagar en francos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares, puentes o aeropuertos: está prohibido.",
        },
        {
          title: "No uses la mano izquierda para dar o recibir",
          body: "Se considera de mala educación: se da, se recibe y se come con la derecha.",
        },
        {
          title: "No te metas al mar sin preguntar",
          body: "En Kribi y Ebodjé hay corrientes fuertes.",
        },
        {
          title: "No compres carne de monte",
          body: "Muchas veces es de animales protegidos, cazados en forma ilegal.",
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
        title: "Antes de reservar",
        notice: {
          tone: "warn",
          title: "Recomendación de viaje, seguro y visa",
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Camerún y si tu pasaporte necesita visa: casi todos la tramitan antes, y todos necesitan la vacuna de la fiebre amarilla.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa electrónica aprobada",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Reserva de hotel y pasaje de salida",
        ],
      },
      {
        id: "lluvia",
        title: "Para la lluvia",
        notice: {
          tone: "info",
          title: "Duala, de junio a octubre",
          body: "Llueve casi todos los días, a veces durante horas: impermeable de verdad y calzado que se seque.",
        },
        summary: "Agua y humedad",
        items: [
          "Una campera impermeable liviana",
          "Calzado que se seque rápido",
          "Bolsas secas para el teléfono y los documentos",
          "Ropa de secado rápido",
        ],
      },
      {
        id: "recorrer",
        title: "Para recorrer",
        notice: null,
        summary: "Selva, playa y tierras altas",
        items: [
          "Calzado cerrado para la selva",
          "Un buzo para el Oeste",
          "Billetes chicos",
          "Una batería externa para los cortes de luz",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Sales de rehidratación y algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia rápido, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Billetes grandes",
        why: "En los mercados y en los taxis casi nunca hay vuelto.",
        instead: "Billetes chicos.",
      },
      {
        leave: "Francos CFA de África Occidental",
        why: "No se aceptan en Camerún, aunque valgan lo mismo.",
        instead: "Francos de África Central, o euros para cambiar.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Las rutas son lentas y con controles.",
        instead: "Días de margen.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Camerún y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Camerún?",
        answer:
          "Casi todos los pasaportes la tramitan online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer:
          "Sí, para todos los viajeros: te piden el certificado para la visa y al llegar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De noviembre a febrero, la temporada seca.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés y el inglés son los oficiales; en las ciudades del planificador se habla sobre todo francés, y en la calle, también idiomas locales.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Camerún usa los tipos C y E a 220 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
