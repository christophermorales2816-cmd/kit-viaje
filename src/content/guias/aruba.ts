import type { DestinationGuide } from "./types";

/**
 * Guía de Aruba.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Un territorio que cumple el criterio de 16.2 (spec, 22.8): es un país del
 * Reino de los Países Bajos, con moneda y reglas de entrada propias, y se
 * viaja a él como a un país.
 *
 * Lo que este país aporta: el Caribe sin lluvia. Aruba está fuera del
 * cinturón de huracanes y llueve poco todo el año; el motor no encuentra un
 * solo mes de lluvia. Y una entrada en dos pasos, ninguno en la puerta: la
 * tarjeta ED en línea y una tasa de sostenibilidad pagada antes de volar.
 */
export const aruba: DestinationGuide = {
  slug: "aruba",
  country: "Aruba",
  subregion: "Caribe",
  subhead:
    "Playas de arena blanca con agua calma, un parque nacional de cactus y cuevas, viento constante y casi nada de lluvia. Fuera del cinturón de huracanes.",

  image: null,

  highlights: [
    {
      value: "Fuera",
      label: "del cinturón de huracanes",
      note: "Aruba está al sur de su recorrido habitual, y llueve poco todo el año.",
    },
    {
      value: "Antes de volar",
      label: "tarjeta ED y tasa",
      note: "La tarjeta ED, de entrada y salida, se completa en línea y es gratis; la tasa de sostenibilidad se paga antes del check-in.",
    },
    {
      value: "1,79 = 1",
      label: "florines por dólar",
      note: "Paridad fija con el dólar estadounidense, que se acepta en todos lados.",
    },
    {
      value: "4 idiomas",
      label: "en la calle",
      note: "Papiamento, neerlandés, inglés y español, que casi todos hablan.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Aruba es un país del Reino de los Países Bajos, con sus propias reglas de entrada, distintas de las de Schengen. Muchos pasaportes entran sin visa; otros la necesitan, salvo que tengan ciertas visas vigentes de Estados Unidos, Canadá o del espacio Schengen. Verifica el tuyo.",
        "Quien llega en avión completa en línea la tarjeta ED, de entrada y salida, que es gratis, y la mayoría paga además una tasa de sostenibilidad. Las dos se resuelven antes del check-in: la aerolínea puede pedirlas para embarcar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El florín arubeño tiene paridad fija con el dólar estadounidense, que se acepta en todos lados. El cambio puede llegar en florines.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados. Muchas cuentas suman un cargo por servicio; si no, se deja alrededor de un 15 %.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Cualquier mes: llueve poco todo el año, y lo poco que llueve cae entre octubre y diciembre, en chaparrones cortos.",
        "De diciembre a abril es la temporada alta. El viento alisio sopla fuerte casi todo el año, más de mayo a julio: es bueno para el kitesurf y refresca el calor.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Los buses públicos unen Oranjestad con las playas del oeste y con San Nicolas. Los taxis tienen tarifas fijas por zona.",
        "Para el parque Arikok y la costa norte, de caminos de tierra, conviene un vehículo alto o una excursión.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias y nada de dejar cosas a la vista en el auto.",
        "La costa norte, de cara al viento, tiene olas y corrientes: se mira, no se nada.",
        "El agua corriente es potable: sale de una de las plantas desalinizadoras más grandes del mundo.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Playas",
      score: 9.5,
      rationale:
        "Eagle Beach y Palm Beach, de arena blanca y agua calma, y Baby Beach en el sur.",
    },
    {
      dimension: "Clima",
      score: 10,
      rationale: "Casi sin lluvia y fuera del cinturón de huracanes.",
    },
    {
      dimension: "Naturaleza",
      score: 7.5,
      rationale:
        "El parque Arikok, con cuevas, cactus y una piscina natural entre las rocas.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Isla de resorts, con precios de destino caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale:
        "Vuelos directos desde muchos lados y una isla pequeña, fácil de recorrer.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en todos lados.",
    },
  ],

  shines: [
    "Playa segura casi cualquier mes del año.",
    "Agua calma y transparente en la costa oeste.",
    "Una isla donde casi todos hablan español.",
  ],

  costs: [
    "El precio: es de los destinos caros del Caribe.",
    "La tasa y la tarjeta ED, que se resuelven antes de volar.",
    "El viento constante, que a algunos les molesta.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima, que cambia poco en toda la isla. Los precios son órdenes de magnitud, no cotizaciones, y van en florines arubeños.",

  places: [
    {
      id: "oranjestad",
      name: "Oranjestad",
      region: "Oeste",
      tag: "Capital de colores",
      blurb:
        "La capital, con casas de estilo holandés pintadas de colores, tiendas y el puerto. Es la base del planificador.",
      coords: [12.5186, -70.0358],
      featured: true,
      image: null,
    },
    {
      id: "eagle-beach",
      name: "Eagle Beach",
      region: "Oeste",
      tag: "Playa ancha",
      blurb:
        "Una de las playas más anchas del Caribe, con los árboles fofoti torcidos por el viento.",
      coords: [12.5521, -70.0565],
      image: null,
    },
    {
      id: "palm-beach",
      name: "Palm Beach",
      region: "Oeste",
      tag: "Resorts",
      blurb:
        "La zona de los hoteles grandes, con agua calma, deportes acuáticos y la vida nocturna de la isla.",
      coords: [12.5786, -70.0447],
      image: null,
    },
    {
      id: "malmok",
      name: "Malmok y el faro California",
      region: "Noroeste",
      tag: "Snorkel y faro",
      blurb:
        "Calas para el snorkel, como Boca Catalina y Arashi, y el faro California en el extremo norte.",
      coords: [12.6, -70.051],
      image: null,
    },
    {
      id: "costa-norte",
      name: "La costa norte y Alto Vista",
      region: "Norte",
      tag: "Costa salvaje",
      blurb:
        "La costa de cara al viento, de rocas y olas, con la capilla de Alto Vista y puentes naturales.",
      coords: [12.58, -69.99],
      image: null,
    },
    {
      id: "arikok",
      name: "Parque Arikok",
      region: "Este",
      tag: "Cuevas y cactus",
      blurb:
        "El parque nacional, con cactus, cuevas con pinturas de los pueblos originarios y la piscina natural de Conchi, entre las rocas.",
      coords: [12.4983, -69.94],
      image: null,
    },
    {
      id: "mangel-halto",
      name: "Mangel Halto y Savaneta",
      region: "Sur",
      tag: "Arrecife y manglar",
      blurb:
        "Una laguna con manglares y arrecife para el snorkel, junto al pueblo más antiguo de la isla.",
      coords: [12.4532, -69.9658],
      image: null,
    },
    {
      id: "san-nicolas",
      name: "San Nicolas",
      region: "Sur",
      tag: "Murales",
      blurb:
        "La segunda ciudad, con las calles llenas de murales y una vida más local que la de los resorts.",
      coords: [12.4319, -69.9068],
      image: null,
    },
    {
      id: "baby-beach",
      name: "Baby Beach",
      region: "Sureste",
      tag: "Laguna calma",
      blurb:
        "Una laguna de agua calma y poco profunda en el extremo sureste, ideal para niños y para hacer snorkel.",
      coords: [12.4185, -69.8812],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Aruba es verano seco todo el año: ropa ligera, traje de baño, protector alto y gafas de sol. El viento refresca, pero el sol quema igual. Casi no hace falta impermeable. Antes de volar, completa la tarjeta ED y paga la tasa de sostenibilidad.",
    keyPoints: [
      "Calor seco todo el año, con viento constante.",
      "Casi no llueve, y está fuera del cinturón de huracanes.",
      "La tarjeta ED y la tasa se resuelven antes de volar.",
      "El sol, con el viento, engaña: protector alto.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector alto y gafas de sol. Es el clima de la isla todo el año.",
      templado: "Camiseta y una capa ligera para el viento de la noche.",
      fresco: "Un suéter ligero alcanza para la noche más fresca del año.",
      frio: "En Aruba no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo A, tipo B y tipo F",
      voltage: "127 V, 60 Hz",
      note: "Lo más común es el enchufe de clavijas planas. Revisa que tus cargadores digan 100-240 V: el voltaje es 127 V.",
    },
    tips: {
      dos: [
        {
          title: "Completa la tarjeta ED y paga la tasa",
          body: "En el sitio oficial, antes del check-in: la aerolínea puede pedirlas.",
        },
        {
          title: "Usa protector alto aunque haya viento",
          body: "La brisa engaña: el sol de Aruba quema rápido.",
        },
        {
          title: "Ve al parque Arikok temprano",
          body: "Antes del calor del mediodía, con agua y un vehículo alto.",
        },
        {
          title: "Haz snorkel en Mangel Halto o Boca Catalina",
          body: "Agua calma y peces a pocos metros de la orilla.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes de la isla lo agradecen.",
        },
        {
          title: "Lleva un sombrero que no se vuele",
          body: "El viento es constante.",
        },
      ],
      donts: [
        {
          title: "No llegues al aeropuerto sin la tarjeta ED",
          body: "Se completa en línea antes de volar; en el aeropuerto no se hace.",
        },
        {
          title: "No te bañes en la costa norte",
          body: "Tiene olas y corrientes fuertes.",
        },
        {
          title: "No dejes cosas a la vista en el auto",
          body: "Es la precaución de cualquier estacionamiento de playa.",
        },
        {
          title: "No subestimes el sol",
          body: "Con el viento no se siente el calor, pero quema.",
        },
        {
          title: "No toques el coral",
          body: "Ni lo pises: un roce lo daña.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el equipaje de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Antes de volar",
        notice: {
          tone: "warn",
          title: "Tarjeta ED y tasa",
          body: "Las dos se resuelven en línea antes del check-in, y la aerolínea puede pedirlas para embarcar.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Tarjeta ED, aprobada",
          "Tasa de sostenibilidad, pagada",
          "Visa, si tu pasaporte la necesita",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: null,
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar alto que no dañe el coral",
          "Gafas de sol y sombrero que no se vuele",
          "Sandalias",
        ],
      },
      {
        id: "parque",
        title: "Parque Arikok",
        notice: {
          tone: "info",
          title: "Calor y caminos de tierra",
          body: "Sin sombra y con caminos de piedra: temprano, con agua y un vehículo alto.",
        },
        summary: "Para el parque nacional",
        items: ["Calzado cerrado", "Agua de sobra", "Linterna para las cuevas"],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para las quemaduras de sol",
          "Colirio: el viento seca los ojos",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a clavijas planas, si tu enchufe es distinto",
          "Cargadores que digan 100-240 V",
          "Batería portátil, en el equipaje de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Tarjeta ED de cada menor: va una por viajero",
          "Protector solar de factor alto y camiseta con protección UV",
          "Gorro con cordón para el viento",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo",
        why: "En Aruba no hay un mes frío.",
        instead: "Una capa ligera para el viento de la noche.",
      },
      {
        leave: "Paraguas",
        why: "Casi no llueve, y con el viento no sirve.",
        instead: "Nada.",
      },
      {
        leave: "Un sombrero de ala ancha suelto",
        why: "El viento se lo lleva.",
        instead: "Una gorra o un sombrero con cordón.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Los hoteles dan toallas de playa.",
        instead: "Nada, o una de microfibra.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Depende del pasaporte. Aruba tiene sus propias reglas: muchos pasaportes entran sin visa, y algunos de los que la necesitan entran con ciertas visas vigentes de Estados Unidos, Canadá o del espacio Schengen. Verifica el tuyo.",
      },
      {
        question: "¿Qué hay que hacer antes de volar?",
        answer:
          "Completar en línea la tarjeta ED, de entrada y salida, y pagar la tasa de sostenibilidad, antes del check-in.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en todos lados: tienen paridad fija con el florín. El cambio puede llegar en florines.",
      },
      {
        question: "¿Hay huracanes?",
        answer:
          "Casi nunca: Aruba está al sur del recorrido habitual. Por eso se viaja cualquier mes.",
      },
      {
        question: "¿Se habla español?",
        answer:
          "Sí, casi todos lo hablan, junto con el papiamento, el neerlandés y el inglés.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "Sí: sale de una planta desalinizadora y es de muy buena calidad.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 127 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
