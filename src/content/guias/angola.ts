import type { DestinationGuide } from "./types";

/**
 * Guía de Angola.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: una costa tropical sin calor de trópico. La
 * corriente fría de Benguela le da a Luanda un invierno fresco y nublado, el
 * cacimbo, que es el dato de su portada, y hacia el sur la costa se vuelve
 * desierto. Casi todos los pasaportes de América y Europa entran sin visa por
 * turismo desde 2023, y la vacuna de la fiebre amarilla es obligatoria para
 * todos. Ninguna ciudad está en Cabinda ni en las Lundas, donde varias
 * recomendaciones piden más precaución, y la guía lo dice como dato de
 * entrada.
 */
export const angola: DestinationGuide = {
  slug: "angola",
  country: "Angola",
  subregion: "África Central",
  subhead:
    "La bahía de Luanda, las cataratas de Kalandula, la ruta en zigzag de la Serra da Leba y el desierto de Namibe, donde crecen plantas de mil años. Se habla portugués.",

  image: null,

  highlights: [
    {
      value: "Invierno",
      label: "fresco y nublado en la costa, de junio a septiembre: el cacimbo",
      note: "La corriente fría de Benguela trae niebla y cielos grises a la costa, con noches de menos de veinte grados. El verano, de enero a abril, es caluroso y con algo de lluvia.",
    },
    {
      value: "Kalandula",
      label: "una de las cataratas más grandes de África",
      note: "Más de cien metros de caída y unos cuatrocientos de ancho sobre el río Lucala, en Malanje. Están más llenas de febrero a abril.",
    },
    {
      value: "Serra da Leba",
      label: "una ruta en zigzag que baja de la meseta al desierto",
      note: "La carretera entre Lubango y Namibe, con miradores sobre el precipicio y la fenda de Tundavala cerca.",
    },
    {
      value: "Sin visa",
      label: "por turismo para casi toda América y Europa",
      note: "Desde 2023, casi todos los pasaportes de América y Europa entran sin visa por turismo, hasta treinta días por entrada. Verificá el tuyo.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Angola",
      body: [
        "Desde 2023, casi todos los pasaportes de América y Europa entran sin visa por turismo, hasta treinta días por entrada; el resto tramita la visa electrónica. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Angola pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros, y lo controla al llegar. La vacuna tiene que estar aplicada al menos diez días antes.",
        "Ninguna ciudad del planificador está en Cabinda ni en las Lundas, donde varias recomendaciones de viaje piden más precaución. Si vas, revisá antes las de tu país.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Angola",
      body: [
        "La moneda es el kwanza. La tarjeta funciona en hoteles y restaurantes grandes de Luanda; en el resto, efectivo.",
        "Hay cajeros en las ciudades, pero muchos no aceptan tarjetas extranjeras. Llevá dólares o euros en billetes nuevos para cambiar en bancos o casas de cambio.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí kwanzas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Costa seca y meseta",
      body: [
        "Angola es hemisferio sur. La costa es seca por la corriente fría de Benguela: Luanda tiene un verano caluroso con algo de lluvia, de enero a abril, y un invierno fresco y nublado, el cacimbo, de junio a septiembre.",
        "Hacia el sur, en Namibe e Iona, empieza el desierto. La meseta, en Lubango, tiene lluvias de octubre a abril e inviernos secos de noches frías: en julio bajan a seis grados.",
        "Kalandula, en el norte, tiene la temporada de lluvias más larga, de octubre a abril, y es cuando las cataratas están más llenas.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: seco en todo el país, con el cacimbo en la costa; la mejor época para el sur y los parques.",
        "Para ver Kalandula con mucha agua, de febrero a abril. En la costa, el verano es la época de playa.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Angola",
      body: [
        "Las distancias son enormes: entre Luanda, Benguela y Lubango conviene volar, o ir en los buses de larga distancia, que son cómodos.",
        "En Luanda el tránsito es muy lento. Hay aplicaciones como Yango y candongueiros, las combis azules y blancas.",
        "Fuera de las ciudades, las rutas tienen tramos malos: viajá de día. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "La fortaleza de San Miguel, el museo de la esclavitud y la herencia portuguesa.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale: "Muamba de galinha, funge, calulu, mariscos y pan portugués.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Cataratas, la Serra da Leba, el desierto de Namibe y la costa.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale: "Mussulo, Cabo Ledo y la costa de Benguela.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "Luanda es de las ciudades más caras de África.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale:
        "Distancias enormes, tránsito pesado y pocos servicios fuera de las ciudades.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 4,
      rationale: "El kwanza pierde valor contra el dólar.",
    },
  ],

  shines: [
    "Paisajes enormes y casi sin turistas.",
    "La comida de mar con sabor portugués.",
    "Las cataratas de Kalandula y la Serra da Leba.",
  ],

  costs: [
    "Luanda es muy cara.",
    "Distancias enormes.",
    "Vacuna obligatoria, y efectivo fuera de Luanda.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Luanda en julio que Lubango o Namibe. Los precios están en kwanzas y son órdenes de magnitud; los hoteles de Luanda y los lodges de los parques pueden costar bastante más.",

  places: [
    {
      id: "luanda",
      name: "Luanda",
      region: "Luanda",
      tag: "La capital sobre la bahía",
      blurb:
        "La Marginal sobre la bahía, la fortaleza de San Miguel, la isla de Luanda con restaurantes de pescado y el museo de la esclavitud, en las afueras. Es la base del planificador: verano caluroso de enero a abril, invierno fresco y nublado de junio a septiembre.",
      coords: [-8.839, 13.2894],
      featured: true,
      image: null,
    },
    {
      id: "mussulo",
      name: "Isla de Mussulo",
      region: "Luanda",
      tag: "La península de arena",
      blurb:
        "Una lengua de arena frente a Luanda, con playas tranquilas y casas de fin de semana, a la que se cruza en lancha.",
      coords: [-8.98, 13.08],
      image: null,
    },
    {
      id: "quicama",
      name: "Parque Nacional de Quiçama",
      region: "Bengo",
      tag: "Safari cerca de la capital",
      blurb:
        "Un parque de sabana entre el río Kwanza y el mar, con elefantes, jirafas y antílopes, a pocas horas de Luanda.",
      coords: [-9.6, 13.6],
      image: null,
    },
    {
      id: "cabo-ledo",
      name: "Cabo Ledo (surf)",
      region: "Luanda",
      tag: "Surf",
      blurb:
        "Una bahía con olas largas y acantilados rojos, a un par de horas de Luanda.",
      coords: [-9.66, 13.23],
      image: null,
    },
    {
      id: "kalandula",
      name: "Cataratas de Kalandula",
      region: "Malanje",
      tag: "Las cataratas",
      blurb:
        "Cataratas de más de cien metros de altura y unos cuatrocientos de ancho sobre el río Lucala, más llenas de febrero a abril.",
      coords: [-9.075, 15.999],
      image: null,
    },
    {
      id: "benguela",
      name: "Benguela",
      region: "Benguela",
      tag: "Ciudad de acacias",
      blurb:
        "Una ciudad colonial de calles con acacias y playas largas, junto a Lobito y su península.",
      coords: [-12.5763, 13.4055],
      image: null,
    },
    {
      id: "lubango",
      name: "Lubango (Serra da Leba)",
      region: "Huíla",
      tag: "La meseta",
      blurb:
        "Una ciudad de altura, con el Cristo Rey sobre el cerro, la fenda de Tundavala y la ruta de la Serra da Leba cerca. Noches frías en invierno.",
      coords: [-14.9177, 13.4925],
      image: null,
    },
    {
      id: "namibe",
      name: "Namibe (desierto)",
      region: "Namibe",
      tag: "El desierto que llega al mar",
      blurb:
        "Una ciudad costera al borde del desierto, con las welwitschias, plantas que viven más de mil años, y los arcos de piedra cerca.",
      coords: [-15.1961, 12.1522],
      image: null,
    },
    {
      id: "iona",
      name: "Parque Nacional de Iona",
      region: "Namibe",
      tag: "El desierto",
      blurb:
        "El parque más grande del país, entre dunas, montañas y la costa, con órices y pueblos pastores. Se recorre con operador.",
      coords: [-16.8, 12.3],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Angola, ropa liviana, traje de baño, sombrero y protector para la costa y el verano. De junio a septiembre, un buzo para el cacimbo, y abrigo de verdad para las noches de Lubango. Repelente, el certificado de la fiebre amarilla en el bolso de mano y un adaptador.",
    keyPoints: [
      "Vacuna de la fiebre amarilla obligatoria para todos; casi todos entran sin visa por turismo.",
      "Costa seca: verano caluroso de enero a abril, invierno fresco y nublado de junio a septiembre.",
      "Lubango, en la meseta, tiene noches frías en invierno.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido: "Ropa liviana, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana de día y un buzo para el cacimbo y las noches.",
      fresco:
        "Un buzo y una campera liviana para el cacimbo y las noches de la meseta.",
      frio: "Campera de abrigo para Lubango en junio y julio, cuando de noche baja a seis grados.",
    },
    plug: {
      types: "Tipos C y F",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas, como en casi toda Europa. Si tu enchufe es de otro tipo, llevá adaptador. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes, con el certificado en el bolso de mano: lo controlan al llegar.",
        },
        {
          title: "Bajá la Serra da Leba",
          body: "La ruta en zigzag entre Lubango y Namibe, de día y con tiempo para los miradores.",
        },
        {
          title: "Probá la muamba de galinha",
          body: "Pollo con aceite de palma y quiabo, con funge, el puré de mandioca.",
        },
        {
          title: "Hablá en portuñol",
          body: "El portugués es el oficial: con español y paciencia, te entendés.",
        },
        {
          title: "Calculá el tránsito de Luanda",
          body: "Puede triplicar cualquier tiempo de viaje: salí al aeropuerto con horas de margen.",
        },
        {
          title: "Elegí pagar en kwanzas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el certificado de la fiebre amarilla",
          body: "Sin él te pueden negar la entrada.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares, el palacio presidencial o el aeropuerto.",
        },
        {
          title: "No manejes de noche fuera de las ciudades",
          body: "Las rutas tienen pozos, poca luz y animales sueltos.",
        },
        {
          title: "No te salgas de los caminos en el campo",
          body: "En algunas zonas rurales todavía quedan minas de la guerra.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "Las corrientes de la costa son fuertes.",
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
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Fiebre amarilla",
          body: "Angola pide el certificado de la fiebre amarilla a todos los viajeros y lo controla al llegar. Casi todos los pasaportes de América y Europa entran sin visa por turismo; verificá el tuyo.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "La visa, si tu pasaporte la necesita",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "costa",
        title: "Para la costa",
        notice: {
          tone: "info",
          title: "El cacimbo",
          body: "De junio a septiembre la costa está nublada y fresca: un buzo para la noche.",
        },
        summary: "Mar y sol",
        items: [
          "Traje de baño",
          "Protector y sombrero",
          "Un buzo para el cacimbo",
          "Ojotas",
        ],
      },
      {
        id: "recorrer",
        title: "Para recorrer",
        notice: null,
        summary: "Distancias largas",
        items: [
          "Calzado cómodo y cerrado",
          "Una campera para Lubango",
          "Efectivo para fuera de Luanda",
          "Una batería externa para los cortes de luz",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Ropa gruesa o de jean",
        why: "En la costa hace calor húmedo buena parte del año.",
        instead: "Algodón o lino livianos, y un buzo.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Luanda casi no se acepta.",
        instead: "Kwanzas en efectivo.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan al cambiar.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Solo ropa de verano para el sur",
        why: "Las noches de Lubango y del desierto son frías en invierno.",
        instead: "Una campera de abrigo.",
      },
      {
        leave: "Joyas y relojes caros",
        why: "Llaman la atención en Luanda.",
        instead: "Lo justo, y el teléfono guardado.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Angola?",
        answer:
          "Casi todos los pasaportes de América y Europa entran sin visa por turismo, hasta treinta días por entrada. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer: "Sí, para todos los viajeros, y se controla al llegar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De mayo a octubre, la temporada seca.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "El portugués es el oficial; con español te arreglás bastante.",
      },
      {
        question: "¿Es caro?",
        answer:
          "Luanda es de las ciudades más caras de África, sobre todo los hoteles; fuera de la capital baja bastante.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer: "Probablemente: Angola usa los tipos C y F a 220 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
