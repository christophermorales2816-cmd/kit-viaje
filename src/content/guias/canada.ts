import type { DestinationGuide } from "./types";

/**
 * Guía de Canadá.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el frío de verdad. Yellowknife, con mínimas de
 * −30 °C en enero, es la ciudad más fría del planificador, y está por las
 * auroras boreales, que son la razón por la que se viaja ahí en invierno.
 * Tiene diez ciudades y no nueve (spec, 22): con nueve, las Rocosas, Whistler
 * o el norte quedaban afuera, y son justo los destinos de nieve.
 */
export const canada: DestinationGuide = {
  slug: "canada",
  country: "Canadá",
  subregion: "Norteamérica",
  subhead:
    "Las Rocosas, lagos turquesa, ciudades en dos idiomas, nieve de diciembre a marzo y auroras boreales en el norte. El segundo país más grande del mundo.",

  image: null,

  highlights: [
    {
      value: "−30 °C",
      label: "en Yellowknife en enero",
      note: "Es uno de los mejores lugares del mundo para ver auroras boreales.",
    },
    {
      value: "2",
      label: "idiomas oficiales",
      note: "Inglés y francés. En Quebec, el francés es el idioma de todos los días.",
    },
    {
      value: "eTA o visa",
      label: "para entrar en avión",
      note: "Los pasaportes exentos de visa piden la eTA en línea antes de volar. Los ciudadanos de Estados Unidos no la necesitan.",
    },
    {
      value: "+ impuesto",
      label: "en la caja",
      note: "Como en Estados Unidos, el precio de la etiqueta no incluye el impuesto, que cambia según la provincia.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Los pasaportes exentos de visa que llegan en avión piden la eTA, una autorización electrónica que se tramita en línea antes de volar. Los ciudadanos de Estados Unidos no la necesitan.",
        "Algunos pasaportes que en general necesitan visa pueden pedir la eTA si tuvieron una visa canadiense en los últimos diez años o tienen una visa vigente de Estados Unidos, y solo para llegar en avión.",
        "El resto necesita una visa de visitante, con huellas y foto. Puede tardar semanas, así que conviene pedirla con tiempo. Verifica qué te corresponde en el sitio del gobierno de Canadá.",
        "Toda la comida se declara al llegar. La fruta, la carne y los lácteos frescos tienen restricciones.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "Con tarjeta casi en todos lados, también sin contacto. El efectivo sirve poco más que para propinas.",
        "Los precios no incluyen el impuesto: se suma en la caja y cambia según la provincia.",
        "En restaurantes con mesero, la propina va de un 15 a un 20 % de la cuenta, y la terminal de pago la pregunta. También se deja en bares, taxis y a quien limpia la habitación.",
      ],
    },
    {
      id: "idiomas",
      title: "Inglés y francés",
      body: [
        "Canadá tiene dos idiomas oficiales. En casi todo el país se habla inglés; en Quebec, francés.",
        "En Montreal mucha gente habla los dos. En la Ciudad de Quebec y en los pueblos de la provincia, el francés es lo que se escucha, aunque en lo turístico te atienden también en inglés.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto es verano: templado, con días largos y noches frescas en la montaña. Es la temporada alta en las Rocosas y en las cataratas del Niágara.",
        "Septiembre y octubre traen los colores del otoño en Ontario y Quebec.",
        "De diciembre a marzo es invierno de verdad: bajo cero en casi todo el país, con nieve. Es la temporada de esquí en Whistler y Banff, y la de auroras boreales en el norte.",
        "Vancouver es la excepción: inviernos suaves y lluviosos, sin el frío del resto del país.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Las distancias son enormes: de Toronto a Vancouver hay unas cinco horas de vuelo. Entre el este y el oeste se vuela.",
        "Entre Toronto, Ottawa, Montreal y la Ciudad de Quebec hay tren y buses frecuentes. El tren que cruza el país hasta Vancouver tarda cuatro noches: es un viaje en sí mismo.",
        "Para las Rocosas y los parques conviene un auto. En invierno, la ley exige neumáticos de invierno en Quebec y en muchas rutas de montaña de Columbia Británica.",
      ],
    },
    {
      id: "parques",
      title: "Parques y fauna",
      body: [
        "Los parques nacionales, como Banff y Jasper, cobran una entrada diaria, y hay un pase anual que cubre todos.",
        "En las Rocosas y en el norte hay osos. Se respetan las reglas de cada parque, la comida no se deja al alcance de los animales, y en los senderos se lleva aerosol contra osos, que se compra al llegar: no se puede llevar en el avión.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande: atención a las pertenencias en zonas concurridas.",
        "El frío del invierno pide respeto: con viento, la piel expuesta se congela en minutos. Y en verano, el humo de los incendios forestales puede cerrar rutas y parques en el oeste y el norte.",
        "El agua corriente es potable en todo el país.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Naturaleza y parques",
      score: 10,
      rationale:
        "Las Rocosas, los lagos de Banff, las cataratas del Niágara y bosques sin fin.",
    },
    {
      dimension: "Nieve e invierno",
      score: 10,
      rationale:
        "Whistler y Banff para esquiar, el carnaval de invierno de Quebec y las auroras del norte.",
    },
    {
      dimension: "Ciudades",
      score: 8.5,
      rationale:
        "Toronto, Montreal, la Ciudad de Quebec y Vancouver, cada una con su carácter.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Caro en alojamiento y en las zonas de montaña. Impuesto y propina se suman a cada cuenta.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Todo funciona y con tarjeta, pero las distancias obligan a volar o a conducir muchas horas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "El dólar canadiense flota sin sorpresas. Lo que cuesta acostumbrarse es al precio final.",
    },
  ],

  shines: [
    "Montañas, lagos y fauna en parques de primer nivel mundial.",
    "Un invierno de nieve de verdad, con esquí y auroras boreales.",
    "Ciudades tranquilas, en dos idiomas y fáciles de recorrer.",
  ],

  costs: [
    "El frío del invierno, que en el norte es extremo.",
    "Las distancias, que obligan a volar entre el este y el oeste.",
    "El precio, con el impuesto y la propina en cada cuenta.",
  ],

  dataScopeNote:
    "Eliges la ciudad en el planificador y los cálculos se hacen con su clima: Yellowknife en enero no pide lo mismo que Vancouver. Los precios son órdenes de magnitud, no cotizaciones, y no incluyen el impuesto.",

  places: [
    {
      id: "toronto",
      name: "Toronto",
      region: "Ontario",
      tag: "La ciudad grande",
      blurb:
        "La ciudad más grande del país, con la torre CN, barrios de todo el mundo y el lago Ontario. Inviernos fríos y veranos húmedos. Es la base del planificador.",
      coords: [43.6532, -79.3832],
      featured: true,
      image: null,
    },
    {
      id: "cataratas-del-niagara",
      name: "Cataratas del Niágara",
      region: "Ontario",
      tag: "Cataratas",
      blurb:
        "Las cataratas de la Herradura, a hora y media de Toronto, con barcos que llegan hasta la cortina de agua y viñedos alrededor. En invierno se congelan en parte.",
      coords: [43.0896, -79.0849],
      image: null,
    },
    {
      id: "ottawa",
      name: "Ottawa",
      region: "Ontario",
      tag: "Capital y canal",
      blurb:
        "La capital, con el Parlamento, museos nacionales y el canal Rideau, que en invierno se congela y se recorre en patines.",
      coords: [45.4215, -75.6972],
      image: null,
    },
    {
      id: "montreal",
      name: "Montreal",
      region: "Quebec",
      tag: "Francés y festivales",
      blurb:
        "Una ciudad en francés con el Viejo Montreal, el monte Royal, festivales de verano y una ciudad subterránea para el invierno.",
      coords: [45.5019, -73.5674],
      image: null,
    },
    {
      id: "quebec",
      name: "Ciudad de Quebec",
      region: "Quebec",
      tag: "Ciudad amurallada",
      blurb:
        "La única ciudad amurallada al norte de México, con calles de piedra sobre el río San Lorenzo. En febrero, el carnaval de invierno.",
      coords: [46.8139, -71.208],
      image: null,
    },
    {
      id: "halifax",
      name: "Halifax",
      region: "Provincias atlánticas",
      tag: "Puerto y faros",
      blurb:
        "Un puerto sobre el Atlántico, puerta a los faros y pueblos de pescadores de Nueva Escocia. Langosta y mariscos todo el año.",
      coords: [44.6488, -63.5752],
      image: null,
    },
    {
      id: "banff",
      name: "Banff y las Rocosas",
      region: "Alberta",
      tag: "Lagos y esquí",
      blurb:
        "El lago Louise, el lago Moraine y la ruta de los glaciares hasta Jasper. Caminatas en verano y esquí de diciembre a abril.",
      coords: [51.1784, -115.5708],
      image: null,
    },
    {
      id: "vancouver",
      name: "Vancouver",
      region: "Columbia Británica",
      tag: "Mar y montaña",
      blurb:
        "Una ciudad entre el Pacífico y las montañas, con el parque Stanley y esquí a media hora. Inviernos suaves y lluviosos.",
      coords: [49.2827, -123.1207],
      image: null,
    },
    {
      id: "whistler",
      name: "Whistler",
      region: "Columbia Británica",
      tag: "Esquí",
      blurb:
        "Una de las estaciones de esquí más grandes de Norteamérica, a dos horas de Vancouver. En verano, ciclismo de montaña y senderos.",
      coords: [50.1163, -122.9574],
      image: null,
    },
    {
      id: "yellowknife",
      name: "Yellowknife",
      region: "Territorios del Noroeste",
      tag: "Auroras boreales",
      blurb:
        "Una ciudad del norte, a orillas del Gran Lago del Esclavo, famosa por sus auroras boreales. En enero, las mínimas rondan los −30 °C.",
      coords: [62.454, -114.3718],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Canadá es frío de verdad en invierno: de diciembre a marzo, Ottawa, Montreal y Quebec pasan semanas bajo cero y Yellowknife llega a −30 °C, así que hace falta parka, gorro, guantes y botas. El verano es templado, con noches frescas en las Rocosas. Vancouver es la excepción: inviernos suaves y lluviosos. Elige la ciudad y el planificador arma la maleta con su clima.",
    keyPoints: [
      "De diciembre a marzo, bajo cero en casi todo el país, y extremo en el norte.",
      "Vancouver tiene inviernos suaves y lluviosos: impermeable antes que parka.",
      "El verano es templado, con noches frescas en la montaña.",
      "En las Rocosas y en el norte hay osos: se respetan las reglas de los parques.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera y protector solar, con una capa para la noche. Es el pleno verano de Toronto y Montreal, que puede ser caluroso y húmedo.",
      templado:
        "Camiseta y una chaqueta ligera. Es el verano de casi todo el país, y el de las Rocosas de día.",
      fresco:
        "Capas: suéter, chaqueta impermeable y algo para el viento. Es la primavera y el otoño, y el invierno de Vancouver.",
      frio: "Parka, gorro, guantes, bufanda y botas impermeables con suela que agarre en el hielo, con una capa térmica debajo. Es el invierno de casi todo Canadá; el de Yellowknife es extremo.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de clavijas planas, como en Estados Unidos. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vístete por capas en invierno",
          body: "Capa térmica, abrigo intermedio y parka. Adentro hay calefacción fuerte y afuera, bajo cero.",
        },
        {
          title: "Tramita la eTA o la visa antes de reservar",
          body: "Sin ella, la aerolínea no te deja embarcar.",
        },
        {
          title: "Suma el impuesto y la propina",
          body: "Los precios no los incluyen, y en un restaurante la cuenta final es bastante más alta que la del menú.",
        },
        {
          title: "Compra el pase de los parques nacionales",
          body: "Si vas a estar varios días en Banff o Jasper, sale más barato que pagar cada día.",
        },
        {
          title: "Reserva las Rocosas y Whistler con tiempo",
          body: "En verano y en la temporada de esquí, el alojamiento se llena meses antes.",
        },
        {
          title: "Para las auroras, elige noches sin luna",
          body: "En Yellowknife se ven de septiembre a abril, mejor lejos de las luces de la ciudad.",
        },
      ],
      donts: [
        {
          title: "No subestimes el frío",
          body: "Con viento, a −30 °C la piel expuesta se congela en minutos.",
        },
        {
          title: "No calcules el viaje con el mapa de un país chico",
          body: "Entre Toronto y Vancouver hay cinco horas de vuelo.",
        },
        {
          title: "No te acerques a la fauna",
          body: "Osos, alces y ciervos son salvajes: se miran de lejos.",
        },
        {
          title: "No lleves aerosol contra osos en el avión",
          body: "Está prohibido. Se compra al llegar a la montaña.",
        },
        {
          title: "No te vayas sin dejar propina",
          body: "En un restaurante con mesero es parte del sueldo de quien te atiende.",
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
        title: "Antes de reservar",
        notice: {
          tone: "info",
          title: "eTA o visa",
          body: "Los pasaportes exentos de visa piden la eTA para llegar en avión; el resto, una visa de visitante. Verifica qué te corresponde en el sitio del gobierno de Canadá.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "eTA aprobada o visa vigente",
          "Seguro de viaje con cobertura médica",
          "Reservas en las Rocosas o en Whistler, si es temporada alta",
          "Licencia de conducir, si vas a alquilar auto",
        ],
      },
      {
        id: "invierno",
        title: "Invierno y nieve",
        notice: {
          tone: "warn",
          title: "Frío extremo",
          body: "En el norte y en las praderas, el viento hace que −20 °C se sienta como −35 °C. La piel expuesta se congela en minutos.",
        },
        summary: "De diciembre a marzo",
        items: [
          "Parka larga y abrigada",
          "Gorro que cubra las orejas, guantes y bufanda o cuello",
          "Botas impermeables con suela que agarre en el hielo",
          "Capa térmica de lana o sintética",
          "Calcetines de lana",
        ],
      },
      {
        id: "montana",
        title: "Montaña y senderos",
        notice: {
          tone: "info",
          title: "Zona de osos",
          body: "En las Rocosas, el aerosol contra osos se compra al llegar y se lleva a mano en los senderos.",
        },
        summary: "Para Banff, Jasper y Whistler",
        items: [
          "Calzado de trekking",
          "Chaqueta impermeable y una capa abrigada, también en verano",
          "Repelente para los mosquitos del verano",
          "Botella de agua y algo para comer",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Protector labial y crema para el frío seco",
          "Protector solar, también para la nieve",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a clavijas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil: el frío descarga el teléfono rápido",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte y eTA o visa de cada menor",
          "Si viaja con un solo progenitor, una carta de autorización del otro",
          "Ropa de nieve completa para el invierno",
          "Silla de auto si van a alquilar uno",
        ],
      },
    ],
    avoid: [
      {
        leave: "Una parka pesada para Vancouver en invierno",
        why: "Ahí el invierno es lluvioso, no helado.",
        instead: "Una chaqueta impermeable y capas.",
      },
      {
        leave: "Zapatos de suela lisa en invierno",
        why: "Las calles y las aceras se congelan y resbalan.",
        instead: "Botas con suela de goma que agarre.",
      },
      {
        leave: "Algodón como capa térmica",
        why: "Si se moja, enfría.",
        instead: "Lana merino o tela sintética.",
      },
      {
        leave: "El secador o la plancha de pelo de 220 V",
        why: "Con 120 V no funcionan bien, y los hoteles tienen secador.",
        instead: "Nada, o uno de doble voltaje.",
      },
      {
        leave: "Mucho efectivo",
        why: "Casi todo se paga con tarjeta.",
        instead:
          "Una tarjeta sin cargos en el exterior y poco efectivo para propinas.",
      },
      {
        leave: "Fruta, carne o lácteos frescos",
        why: "Tienen restricciones al entrar, y toda la comida se declara.",
        instead: "Comprar al llegar.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa o eTA?",
        answer:
          "Depende del pasaporte. Los exentos de visa piden la eTA para llegar en avión; el resto, una visa de visitante. Los ciudadanos de Estados Unidos no necesitan ninguna de las dos.",
      },
      {
        question: "¿Se habla inglés o francés?",
        answer:
          "Inglés en casi todo el país y francés en Quebec. En Montreal mucha gente habla los dos.",
      },
      {
        question: "¿Cuándo se ven las auroras boreales?",
        answer:
          "De septiembre a abril, en el norte. Yellowknife es uno de los mejores lugares del mundo para verlas, en noches despejadas y sin luna.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre para las Rocosas y las ciudades; de diciembre a marzo para la nieve y las auroras; septiembre y octubre para los colores del otoño.",
      },
      {
        question: "¿Cuánto se deja de propina?",
        answer:
          "En restaurantes con mesero, entre el 15 y el 20 % de la cuenta. La terminal de pago la pregunta.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 120 V: revisa que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Cómo se recorre el país?",
        answer:
          "En avión entre el este y el oeste. En tren o bus entre Toronto, Ottawa, Montreal y Quebec, y en auto por las Rocosas.",
      },
    ],
  },
};
