import type { DestinationGuide } from "./types";

/**
 * Guía de Andorra.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: no es Schengen, pero no tiene aeropuerto y solo se
 * llega por España o Francia, así que la entrada real es la de Schengen. Y es
 * el país donde la altura manda más que el mes: Pas de la Casa, a más de dos
 * mil metros, es varios grados más fría que la capital.
 */
export const andorra: DestinationGuide = {
  slug: "andorra",
  country: "Andorra",
  subregion: "Europa del Sur",
  subhead:
    "Un país entero en valles de los Pirineos, entre España y Francia: esquí de diciembre a abril, senderos y lagos en verano, y compras con impuestos bajos. La altura manda más que el mes.",

  image: null,

  highlights: [
    {
      value: "1.023 m",
      label: "la capital más alta de Europa",
      note: "Andorra la Vella está a algo más de mil metros, y el país entero es montaña: ningún punto queda por debajo de los ochocientos.",
    },
    {
      value: "2",
      label: "copríncipes: un obispo y el presidente de Francia",
      note: "Andorra es un coprincipado desde la Edad Media: los jefes de Estado son el obispo de Urgel y el presidente francés.",
    },
    {
      value: "0",
      label: "aeropuertos: se llega por ruta",
      note: "Los más cercanos están en España y Francia; desde Barcelona y Toulouse hay buses directos.",
    },
    {
      value: "UNESCO",
      label: "el valle del Madriu",
      note: "Un valle glaciar sin rutas, con refugios, bordas de piedra y senderos, que se camina desde Escaldes.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: por España o Francia",
      body: [
        "Andorra no es parte del espacio Schengen ni de la Unión Europea, pero no tiene aeropuerto: solo se llega por España o Francia, así que primero tenés que poder entrar al espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, pero no todos están exentos: verificá el tuyo.",
        "En la frontera no suelen pedir el pasaporte, pero llevalo siempre: hay controles de aduana y te lo pueden pedir. Si tu visa Schengen es de una sola entrada, volver de Andorra cuenta como entrar de nuevo: consultalo antes de cruzar.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Andorra",
      body: [
        "La moneda es el euro, por un acuerdo con la Unión Europea, y la tarjeta se acepta en casi todos lados.",
        "Los impuestos son más bajos que en España y Francia, y por eso las compras son un clásico. Al volver hay controles de aduana y límites para lo que llevás: revisalos antes de comprar. La propina no es obligatoria.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "La altura manda",
      body: [
        "Andorra es hemisferio norte: enero es invierno y julio, verano. Es un país de montaña, y la altura manda más que el mes: la capital tiene inviernos fríos, con heladas, y veranos agradables.",
        "Más arriba, Soldeu y Pas de la Casa tienen nieve de diciembre a abril y noches frescas aun en julio.",
        "En verano, las tormentas de la tarde son frecuentes en la montaña: las caminatas largas, mejor temprano.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril, para esquiar: Grandvalira y Pal Arinsal son las grandes estaciones. De junio a septiembre, para caminar, con lagos, refugios y días largos.",
        "Primavera y otoño son tranquilos, con algunas estaciones y hoteles cerrados entre temporadas.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Andorra",
      body: [
        "Se llega en bus o en auto desde Barcelona, en unas tres horas, o desde Toulouse. Dentro del país, los buses de línea unen las parroquias, y todo queda a menos de una hora.",
        "La ruta principal se llena en temporada de esquí y los fines de semana de compras: salí temprano. Con nieve, piden neumáticos de invierno o cadenas.",
        "Las precauciones son las de cualquier destino turístico: atención a la mochila en las zonas de compras y en las estaciones de esquí.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Esquí",
      score: 9,
      rationale:
        "Grandvalira es de las estaciones más grandes de los Pirineos, y Pal Arinsal y Ordino Arcalís suman variedad.",
    },
    {
      dimension: "Naturaleza",
      score: 8.5,
      rationale:
        "Valles glaciares, lagos de montaña y senderos, con el Madriu como joya.",
    },
    {
      dimension: "Compras",
      score: 8,
      rationale:
        "Impuestos bajos y tiendas en la avenida principal; al volver, revisá los límites de aduana.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Cocina de montaña catalana: trinxat, embutidos, carne a la brasa y bordas convertidas en restaurantes.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Comer y comprar es más barato que en Francia; dormir en temporada de esquí, no.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Todo queda cerca y hay buses entre parroquias, pero se llega solo por ruta y en temporada el tránsito pesa.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "Esquí de primer nivel a tres horas de Barcelona.",
    "Senderos, lagos y refugios en verano.",
    "Compras con impuestos bajos.",
  ],

  costs: [
    "Sin aeropuerto: se llega solo por ruta.",
    "Tránsito pesado en temporada de esquí y fines de semana.",
    "Alojamiento caro en invierno.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: en Andorra la altura cambia todo, y Pas de la Casa, a más de dos mil metros, es varios grados más fría que la capital. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "andorra-la-vella",
      name: "Andorra la Vella",
      region: "Centro",
      tag: "La capital más alta",
      blurb:
        "La capital, con el barrio antiguo y la Casa de la Vall, el viejo parlamento de piedra, y una avenida entera de tiendas. Es la base del planificador: inviernos fríos y veranos agradables.",
      coords: [42.5063, 1.5218],
      featured: true,
      image: null,
    },
    {
      id: "escaldes",
      name: "Escaldes-Engordany",
      region: "Centro",
      tag: "Aguas termales",
      blurb:
        "Pegada a la capital, con Caldea, un spa termal de vidrio, y la puerta de entrada al valle del Madriu.",
      coords: [42.5097, 1.5386],
      image: null,
    },
    {
      id: "canillo",
      name: "Canillo",
      region: "Este",
      tag: "Miradores y románico",
      blurb:
        "Un pueblo de valle con la iglesia románica de Sant Joan de Caselles, el mirador del Roc del Quer y telecabina a Grandvalira.",
      coords: [42.567, 1.5978],
      image: null,
    },
    {
      id: "soldeu",
      name: "Soldeu y El Tarter",
      region: "Este",
      tag: "Corazón de Grandvalira",
      blurb:
        "Los pueblos de esquí de Grandvalira, con pistas que empiezan al lado del hotel. En verano, senderos y bicicleta.",
      coords: [42.577, 1.6676],
      image: null,
    },
    {
      id: "pas-de-la-casa",
      name: "Pas de la Casa",
      region: "Este",
      tag: "En la frontera francesa",
      blurb:
        "El pueblo más alto, en la frontera con Francia, con nieve de diciembre a abril, compras y vida nocturna de temporada.",
      coords: [42.5422, 1.7333],
      image: null,
    },
    {
      id: "ordino",
      name: "Ordino",
      region: "Norte",
      tag: "El pueblo de piedra",
      blurb:
        "El pueblo más tradicional, de casas de piedra, con Ordino Arcalís para esquiar y caminatas a los lagos de Tristaina.",
      coords: [42.556, 1.533],
      image: null,
    },
    {
      id: "arinsal",
      name: "La Massana y Arinsal",
      region: "Oeste",
      tag: "Esquí y bordas",
      blurb:
        "Un valle de pueblos de montaña con la estación de Pal Arinsal y restaurantes en bordas, los viejos graneros de piedra.",
      coords: [42.545, 1.515],
      image: null,
    },
    {
      id: "sant-julia",
      name: "Sant Julià de Lòria",
      region: "Sur",
      tag: "La entrada desde España",
      blurb:
        "La primera parroquia al llegar desde España, la más baja y templada, con el parque de Naturlandia.",
      coords: [42.4637, 1.4913],
      image: null,
    },
    {
      id: "madriu",
      name: "Valle del Madriu",
      region: "Centro",
      tag: "Valle glaciar",
      blurb:
        "Un valle glaciar sin rutas, patrimonio de la humanidad, con refugios, bordas y lagos. Se camina desde Escaldes; mejor de junio a octubre.",
      coords: [42.49, 1.59],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Andorra es montaña, y la altura manda. En invierno, abrigo de nieve —campera, gorro, guantes y calzado impermeable—, más si vas a esquiar. En verano, ropa liviana de día, un buzo para la noche y un impermeable para las tormentas de la tarde; si vas a caminar, calzado de trekking. Y llevá el pasaporte aunque no te lo pidan.",
    keyPoints: [
      "Hemisferio norte: esquí de diciembre a abril; caminatas de junio a septiembre.",
      "Cuanto más alto, más frío: Pas de la Casa está a más de dos mil metros.",
      "Se llega solo por ruta, desde España o Francia, y hay que poder entrar al espacio Schengen.",
      "Al volver, hay controles de aduana y límites para las compras.",
    ],
    adviceByBucket: {
      calido:
        "Pasa en la capital en los días más calurosos de julio. Ropa liviana, protector alto —el sol de montaña quema— y un buzo para la noche.",
      templado:
        "Ropa liviana de día, un buzo y un impermeable liviano: es el verano de la capital, con tormentas a la tarde.",
      fresco:
        "Capas, un buzo abrigado y una campera impermeable. Es la primavera y el otoño en el valle, y el verano en la montaña.",
      frio: "Campera de abrigo, gorro, guantes y calzado impermeable. Si esquiás, ropa de nieve; en Pas de la Casa el frío es serio.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes europeos de dos patas redondas, los mismos de España y Francia. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Caminá el valle del Madriu",
          body: "Patrimonio de la humanidad y sin rutas: se entra a pie desde Escaldes. En verano, salí temprano, antes de las tormentas.",
        },
        {
          title: "Comé en una borda",
          body: "Los viejos graneros de piedra son restaurantes de cocina de montaña: trinxat, embutidos y carne a la brasa.",
        },
        {
          title: "Sacá el pase de esquí con anticipación",
          body: "En temporada alta, comprarlo antes suele salir más barato que en la ventanilla.",
        },
        {
          title: "Relajate en Caldea",
          body: "El spa termal de Escaldes es el plan de la tarde, después de esquiar o caminar.",
        },
        {
          title: "Visitá las iglesias románicas",
          body: "Sant Joan de Caselles, Santa Coloma y Sant Climent de Pal, de piedra y con campanarios lombardos.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el sol de montaña",
          body: "A más de dos mil metros quema rápido, también en invierno sobre la nieve. Protector y anteojos de sol.",
        },
        {
          title: "No arranques caminatas largas tarde",
          body: "En verano, las tormentas suelen llegar a la tarde. Salí temprano y mirá el pronóstico.",
        },
        {
          title: "No compres sin mirar los límites de aduana",
          body: "Al volver a España o Francia hay controles, y lo que pasa los límites paga impuestos.",
        },
        {
          title: "No manejes en invierno sin preparar el auto",
          body: "Con nieve piden neumáticos de invierno o cadenas. Si alquilás, pedilo.",
        },
        {
          title: "No cruces la frontera sin pasaporte",
          body: "No suelen pedirlo, pero hay controles de aduana y te lo pueden pedir.",
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
        title: "Nieve y montaña",
        notice: {
          tone: "info",
          title: "La altura manda",
          body: "En invierno hay nieve en todo el país, y aun en verano las noches de montaña son frescas.",
        },
        summary: "Lo que pide la montaña",
        items: [
          "Campera de abrigo e impermeable",
          "Gorro, guantes y cuello",
          "Anteojos de sol y protector alto",
          "Botas impermeables o calzado de trekking",
          "Un buzo o polar para sumar capas",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Necesitás poder entrar a Schengen",
          body: "Andorra no tiene aeropuerto: llegás por España o Francia. Verificá qué pide tu pasaporte, y si tu visa Schengen es de una sola entrada, consultá antes de cruzar.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte vigente, siempre encima",
          "Pasaje de vuelta",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica, y de esquí si vas a esquiar",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador de enchufe europeo, si el tuyo es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería externa: el frío descarga el teléfono más rápido",
          "Mapas descargados para los senderos",
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
          "Protector labial y crema para el frío",
          "Curitas para las ampollas de las caminatas",
        ],
      },
    ],
    avoid: [
      {
        leave: "Zapatillas de tela",
        why: "La nieve, el barro o los senderos de piedra las mojan y no sujetan.",
        instead: "Botas impermeables o calzado de trekking.",
      },
      {
        leave: "Ropa de algodón para la nieve",
        why: "Se moja y no abriga.",
        instead: "Capas térmicas y una campera impermeable.",
      },
      {
        leave: "Comprar sin pensar en la vuelta",
        why: "Hay límites de aduana al volver a España o Francia.",
        instead: "Revisá los límites antes de comprar.",
      },
      {
        leave: "Un auto sin equipo de invierno",
        why: "Con nieve piden neumáticos de invierno o cadenas.",
        instead: "Auto preparado o bus de línea.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta en casi todos lados.",
        instead: "Algo de efectivo para bordas y refugios.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Andorra?",
        answer:
          "Andorra no pide visa propia, pero solo se llega por España o Francia, así que necesitás poder entrar al espacio Schengen. Muchos pasaportes latinoamericanos no necesitan visa para estadías cortas, pero no todos: verificalo.",
      },
      {
        question: "¿Andorra es parte de Schengen?",
        answer:
          "No, aunque se llega por países Schengen. Si tu visa Schengen es de una sola entrada, volver de Andorra cuenta como una nueva entrada: consultalo antes de cruzar.",
      },
      {
        question: "¿Cómo llego?",
        answer:
          "En bus o auto desde Barcelona, en unas tres horas, o desde Toulouse. No hay aeropuerto en el país.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Andorra usa los tipos C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuándo hay nieve?",
        answer:
          "De diciembre a abril en las estaciones de esquí; en la capital, solo algunos días de invierno.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El catalán es el idioma oficial; el español se habla en todos lados, y el francés también se entiende.",
      },
      {
        question: "¿Las compras son más baratas?",
        answer:
          "En general sí, por los impuestos más bajos, pero al volver hay límites de aduana para lo que llevás.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
