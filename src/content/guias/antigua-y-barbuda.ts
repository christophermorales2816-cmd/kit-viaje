import type { DestinationGuide } from "./types";

/**
 * Guía de Antigua y Barbuda.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: una de las islas más secas del Caribe, y Barbuda,
 * que es lo opuesto a Antigua: pocos habitantes, pocos servicios y playas
 * vacías. El huracán Irma la arrasó en 2017; la guía no describe la
 * reconstrucción, pero sí lo que hay que llevar a una isla remota.
 *
 * Y el enchufe: clavijas planas, como en Estados Unidos, pero a 230 V. Un
 * cargador que solo diga 110 V se quema.
 */
export const antiguaYBarbuda: DestinationGuide = {
  slug: "antigua-y-barbuda",
  country: "Antigua y Barbuda",
  subregion: "Caribe",
  subhead:
    "Una playa para cada día del año, el astillero de Nelson y Barbuda, con arena rosada y fragatas. Una de las islas más secas y soleadas del Caribe.",

  image: null,

  highlights: [
    {
      value: "365",
      label: "playas",
      note: "Una para cada día del año, dice la isla. La costa está llena de calas.",
    },
    {
      value: "2 islas",
      label: "Antigua y Barbuda",
      note: "Barbuda, a veinte minutos de vuelo o hora y media de ferry, tiene arena rosada y una colonia de fragatas.",
    },
    {
      value: "2,70 = 1",
      label: "dólares del Caribe Oriental por dólar",
      note: "Una paridad fija con el dólar estadounidense, que se acepta en casi todos lados.",
    },
    {
      value: "230 V",
      label: "con clavijas planas",
      note: "El enchufe es como el de Estados Unidos, pero el voltaje no: un aparato que solo diga 110 V se quema.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
        "La llegada se registra con el formulario electrónico de migración y aduana. Pueden pedirte el pasaje de salida y la dirección del alojamiento.",
        "Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar del Caribe Oriental tiene paridad fija con el estadounidense, que se acepta en casi todos lados. El cambio suele llegar en moneda local.",
        "La tarjeta funciona en hoteles y restaurantes. Para los buses, los puestos y Barbuda, efectivo: en Barbuda hay muy pocos cajeros.",
        "Muchas cuentas suman un cargo por servicio. Si no lo traen, se deja alrededor de un 10 %.",
      ],
    },
    {
      id: "barbuda",
      title: "Barbuda",
      body: [
        "Barbuda es plana, casi vacía y con playas de arena rosada que no se terminan. En la laguna de Codrington anida una de las colonias de fragatas más grandes del mundo.",
        "Tiene pocos habitantes y pocos servicios: el efectivo, los medicamentos y lo que no se consigue en un almacén chico se resuelven en Antigua antes de ir. El huracán Irma la arrasó en 2017, y no todo volvió.",
        "Se llega en avioneta o en ferry desde Saint John's, y muchos la visitan en el día.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la temporada alta, seca y con brisa. Antigua llueve poco todo el año.",
        "De junio a noviembre es la temporada de huracanes, con el pico entre agosto y octubre.",
        "A fines de abril, la semana de regatas llena English Harbour, y los domingos hay fiesta con música al atardecer en Shirley Heights.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Los buses salen de las dos terminales de Saint John's, son baratos y paran donde se les pide, pero no van a todas las playas ni de noche.",
        "Los taxis tienen tarifas fijas: acuerda el precio antes de subir.",
        "Se conduce por la izquierda, y para alquilar un auto hace falta un permiso local, que tramita la empresa de alquiler.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias y nada de dejar cosas solas en la arena.",
        "El agua corriente sale de plantas desalinizadoras; mucha gente toma embotellada, y en Barbuda conviene hacerlo siempre.",
        "El manzanillo es un árbol de playa venenoso: su savia quema la piel. No conviene refugiarse debajo cuando llueve.",
      ],
    },
    {
      id: "emergencias",
      title: "Emergencias",
      body: ["999 · 911"],
    },
  ],

  factsUpdatedAt: "2026-11-22",

  scores: [
    {
      dimension: "Playas",
      score: 10,
      rationale:
        "Decenas de calas de arena blanca y agua calma, y las playas rosadas de Barbuda.",
    },
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "El astillero de Nelson, patrimonio de la UNESCO, y los fuertes de Shirley Heights.",
    },
    {
      dimension: "Navegación",
      score: 9.5,
      rationale:
        "English Harbour es una capital de la vela del Caribe, con su semana de regatas.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5.5,
      rationale:
        "Isla de resorts y yates, con precios a tono; lo local es más barato.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Vuelos directos desde Norteamérica y Europa, y una isla chica y fácil de recorrer.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en casi todos lados.",
    },
  ],

  shines: [
    "Una playa distinta cada día, casi todas de agua calma.",
    "Barbuda: playas vacías y fragatas, a veinte minutos de vuelo.",
    "Sol y poca lluvia casi todo el año.",
  ],

  costs: [
    "El precio de los resorts, que son la mayoría del alojamiento.",
    "Barbuda, con pocos servicios y caro de visitar.",
    "La temporada de huracanes, de junio a noviembre.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima, que cambia poco entre las dos islas. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares del Caribe Oriental.",

  places: [
    {
      id: "saint-johns",
      name: "Saint John's",
      region: "Antigua",
      tag: "Capital y puerto",
      blurb:
        "La capital, con su catedral, el mercado, el puerto de cruceros y las casas de colores de Redcliffe Quay. Es la base del planificador.",
      coords: [17.1274, -61.8468],
      featured: true,
      image: null,
    },
    {
      id: "dickenson-bay",
      name: "Dickenson Bay",
      region: "Antigua",
      tag: "Playa y resorts",
      blurb:
        "Una playa larga de agua calma en el norte, con resorts, deportes acuáticos y atardeceres.",
      coords: [17.159, -61.846],
      image: null,
    },
    {
      id: "english-harbour",
      name: "English Harbour",
      region: "Antigua",
      tag: "Astillero de Nelson",
      blurb:
        "El puerto histórico del sur, con el astillero de Nelson, patrimonio de la UNESCO, la marina de los yates y la fiesta de los domingos en Shirley Heights.",
      coords: [17.0083, -61.7633],
      image: null,
    },
    {
      id: "jolly-harbour",
      name: "Jolly Harbour",
      region: "Antigua",
      tag: "Marina",
      blurb:
        "Una marina en la costa oeste, rodeada de playas tranquilas como Valley Church y Ffryes.",
      coords: [17.07, -61.89],
      image: null,
    },
    {
      id: "darkwood",
      name: "Darkwood y la costa suroeste",
      region: "Antigua",
      tag: "Calas",
      blurb:
        "Playas de arena blanca al pie de las colinas del suroeste, junto a la ruta panorámica que sube al pico Obama, el más alto de la isla.",
      coords: [17.0335, -61.8835],
      image: null,
    },
    {
      id: "half-moon-bay",
      name: "Half Moon Bay",
      region: "Antigua",
      tag: "Costa atlántica",
      blurb:
        "Una bahía en forma de media luna sobre el Atlántico, con arena rosada y olas. Lejos de los resorts.",
      coords: [17.04, -61.675],
      image: null,
    },
    {
      id: "parham",
      name: "Parham y los cayos del norte",
      region: "Antigua",
      tag: "Cayos",
      blurb:
        "El pueblo más antiguo de la isla y la salida de los barcos a Great Bird Island y los cayos del arrecife norte.",
      coords: [17.097, -61.771],
      image: null,
    },
    {
      id: "codrington",
      name: "Codrington (Barbuda)",
      region: "Barbuda",
      tag: "Fragatas",
      blurb:
        "El único pueblo de Barbuda, junto a la laguna donde anida una de las colonias de fragatas más grandes del mundo. Remoto y con pocos servicios.",
      coords: [17.6426, -61.8204],
      image: null,
    },
    {
      id: "playas-de-barbuda",
      name: "Playas de Barbuda",
      region: "Barbuda",
      tag: "Arena rosada",
      blurb:
        "Kilómetros de playa de arena rosada, casi siempre vacías, en la costa oeste y el sur de Barbuda.",
      coords: [17.59, -61.85],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Antigua y Barbuda son verano todo el año: ropa ligera, traje de baño, protector y repelente. La brisa refresca, pero el sol quema igual, y llueve poco. Revisa tus cargadores: el voltaje es 230 V aunque el enchufe sea de clavijas planas.",
    keyPoints: [
      "Calor y sol todo el año, con poca lluvia.",
      "El enchufe es de clavijas planas, pero a 230 V.",
      "Barbuda tiene pocos servicios: efectivo y lo esencial, desde Antigua.",
      "La temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de las dos islas todo el año.",
      templado: "Camiseta y una capa ligera para la brisa de la noche.",
      fresco: "Un suéter ligero alcanza para la noche más fresca del año.",
      frio: "En Antigua y Barbuda no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "230 V, 60 Hz",
      note: "El enchufe es de clavijas planas, como en Estados Unidos, pero a 230 V. Revisa que tus cargadores digan 100-240 V: lo que solo diga 110 V se quema. Algunos hoteles tienen también tomas de 110 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisa el voltaje de tus cargadores",
          body: "Tienen que decir 100-240 V. El enchufe parece el de Estados Unidos, pero el voltaje es el doble.",
        },
        {
          title: "Lleva efectivo a Barbuda",
          body: "Hay muy pocos cajeros, y algunos lugares no aceptan tarjeta.",
        },
        {
          title: "Ve a Shirley Heights un domingo",
          body: "Música en vivo y la mejor vista de English Harbour al atardecer.",
        },
        {
          title: "Recorre las playas en auto",
          body: "Los buses no llegan a todas; con un auto alquilado, cada día una distinta.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes de la costa lo agradecen.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No enchufes un aparato de 110 V",
          body: "Si no dice 100-240 V, se quema con los 230 V de la isla.",
        },
        {
          title: "No vayas a Barbuda sin lo esencial",
          body: "Efectivo, medicamentos y agua: hay poco y lejos.",
        },
        {
          title: "No te refugies bajo un manzanillo",
          body: "Su savia quema la piel, también cuando gotea con la lluvia.",
        },
        {
          title: "No subestimes el sol",
          body: "La brisa engaña: quema igual.",
        },
        {
          title: "No reserves en septiembre sin seguro",
          body: "Es el pico de la temporada de huracanes.",
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
          title: "Entrada",
          body: "Muchos pasaportes entran sin visa; otros la necesitan. Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente y pasaje de salida",
          "El formulario electrónico de llegada",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre, con el pico entre agosto y octubre. Sigue los avisos locales y prefiere reservas que se puedan cambiar.",
        },
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Sandalias",
          "Snorkel propio, si tienes",
        ],
      },
      {
        id: "barbuda",
        title: "Barbuda",
        notice: {
          tone: "info",
          title: "Isla remota",
          body: "Pocos cajeros, pocos almacenes y un solo pueblo. Lo esencial se resuelve en Antigua.",
        },
        summary: "Si vas a pasar la noche",
        items: [
          "Efectivo en dólares",
          "Agua y algo para comer",
          "Medicación de más",
          "Repelente: en la laguna hay mosquitos",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para las quemaduras de sol",
          "Repelente de insectos: hay dengue",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "Clavijas planas a 230 V",
          body: "Lo que solo diga 110 V necesita un transformador, no un adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Cargadores que digan 100-240 V",
          "Adaptador a clavijas planas, si tu enchufe es distinto",
          "Batería portátil, en el equipaje de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte de cada menor; si viaja con un solo progenitor, la autorización que pida tu país",
          "Protector solar de factor alto y camiseta con protección UV",
          "Repelente apto para niños",
        ],
      },
    ],
    avoid: [
      {
        leave: "Aparatos que solo digan 110 V",
        why: "Con los 230 V de la isla se queman.",
        instead: "Cargadores de 100-240 V, o un transformador.",
      },
      {
        leave: "Abrigo",
        why: "En Antigua y Barbuda no hay un mes frío.",
        instead: "Una capa ligera para la brisa de la noche.",
      },
      {
        leave: "Solo tarjeta para Barbuda",
        why: "Hay muy pocos cajeros, y algunos lugares solo aceptan efectivo.",
        instead: "Efectivo, sacado en Antigua.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
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
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en casi todos lados: tienen paridad fija con el dólar del Caribe Oriental. El cambio suele llegar en moneda local.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. Y revisa el voltaje: es 230 V, así que tus cargadores tienen que decir 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la temporada seca y fuera de la de huracanes. A fines de abril, la semana de regatas.",
      },
      {
        question: "¿Vale la pena ir a Barbuda?",
        answer:
          "Sí, por las playas vacías y las fragatas. Se puede ir en el día, en avioneta o en ferry; para quedarse, con efectivo y lo esencial resuelto en Antigua.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "Sale de plantas desalinizadoras y mucha gente toma embotellada. En Barbuda, siempre embotellada.",
      },
      {
        question: "¿Cómo me muevo por la isla?",
        answer:
          "En bus desde Saint John's, en taxi con tarifa fija o en auto alquilado, con un permiso local.",
      },
    ],
  },
};
