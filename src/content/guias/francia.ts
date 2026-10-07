import type { DestinationGuide } from "./types";

/**
 * Guía de Francia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el clima de París no es extremo, es cambiante.
 * Llueve poco pero seguido, todo el año, y eso pide algo impermeable y liviano
 * más que abrigo. Y la montaña: en Chamonix el teleférico sube a casi 3.850
 * metros, donde hace frío también en agosto.
 */
export const francia: DestinationGuide = {
  slug: "francia",
  country: "Francia",
  subregion: "Europa Occidental",
  subhead:
    "París, el Mediterráneo, los Alpes y las regiones del vino, cada uno con su clima. Llueve poco pero seguido, se come bien en cualquier rincón y casi todo se reserva antes.",

  image: null,

  highlights: [
    {
      value: "4.800 m",
      label: "el Mont Blanc, sobre Chamonix",
      note: "El techo de Europa occidental. El teleférico sube a casi 3.850 metros: arriba hace frío también en agosto.",
    },
    {
      value: "Lun o mar",
      label: "cierran los grandes museos",
      note: "El Louvre cierra los martes y el Orsay, los lunes. Revisalo antes de armar la semana en París.",
    },
    {
      value: "12–14 h",
      label: "la hora del almuerzo",
      note: "Fuera de ese horario muchas cocinas cierran hasta la cena. La fórmula del mediodía es la comida que más rinde.",
    },
    {
      value: "Incluido",
      label: "el servicio en la cuenta",
      note: "Por ley el servicio va en el precio. Dejar algo más es un gesto, no una obligación.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Francia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Francia, España e Italia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Francia",
      body: [
        "La moneda es el euro y la tarjeta se acepta en todos lados, también sin contacto y con el teléfono. El efectivo queda para algún mercado o una panadería de pueblo.",
        "El servicio va incluido en la cuenta por ley, así que la propina es opcional. En los restaurantes podés pedir una jarra de agua de la canilla, que es gratis.",
        "Las ciudades cobran una tasa turística por noche que se paga en el alojamiento y no siempre está en el precio de la reserva. Y cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Un país, varios climas",
      body: [
        "Francia es hemisferio norte: enero es invierno y julio, verano. Y el clima cambia bastante según la región.",
        "París y el norte tienen un clima oceánico: inviernos fríos y grises, veranos templados con algún golpe de calor, y lluvia repartida todo el año en lloviznas cortas. Normandía y la costa atlántica suman viento.",
        "El sur mediterráneo —Niza, Marsella, la Provenza— tiene veranos secos y calurosos e inviernos suaves. El este, con Estrasburgo, tiene inviernos más fríos. Y en los Alpes manda la altura: nieve de diciembre a abril y frío arriba todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Primavera y otoño son lo mejor para París y las ciudades: días templados, la ciudad en su mejor momento y algo menos de gente.",
        "Julio y agosto son temporada alta en la costa y en la Provenza, con la lavanda en flor entre fines de junio y julio. En agosto muchos franceses se van de vacaciones y algunos comercios chicos de París cierran.",
        "El invierno es gris y frío, con menos filas en los museos; en los Alpes es temporada de esquí, y en Alsacia, de mercados navideños.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Francia",
      body: [
        "Los trenes de alta velocidad salen de París hacia Lyon, Burdeos, Marsella, Estrasburgo y los Alpes, y llegan en pocas horas. Las tarifas suben cerca de la fecha: conviene comprar con anticipación.",
        "Las huelgas de transporte no son raras. Si tenés un tren o un vuelo clave, revisá las noticias el día anterior.",
        "Para Normandía, la Provenza o los pueblos del interior, el auto da libertad. En París, el metro llega a todos lados y es la mejor forma de moverse.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en el metro de París y alrededor de los monumentos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Arte y museos",
      score: 10,
      rationale:
        "El Louvre, el Orsay, Versalles y cientos de museos más. París sola justifica el viaje.",
    },
    {
      dimension: "Gastronomía y vino",
      score: 10,
      rationale:
        "Panaderías, mercados, bistrós y las regiones del vino: Burdeos, Borgoña, Champaña. Comer es parte central del viaje.",
    },
    {
      dimension: "Paisajes y diversidad",
      score: 9,
      rationale:
        "La Costa Azul, los Alpes, la Provenza, Normandía y los castillos del Loira, cada uno con su clima.",
    },
    {
      dimension: "Vida urbana",
      score: 9,
      rationale:
        "París, Lyon y Marsella tienen barrios con mucha vida, mercados y terrazas.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Buena calidad a precios altos, sobre todo en París y la Costa Azul. El interior y la comida del mediodía equilibran.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Trenes de alta velocidad desde París a casi todo el país. Las huelgas de transporte pueden alterar los planes.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "El euro, tarjeta en todos lados y el servicio incluido en la cuenta.",
    },
  ],

  shines: [
    "Una capital que es un viaje en sí misma.",
    "Comer bien en cualquier rincón del país, del mercado al bistró.",
    "Trenes rápidos que conectan París con el mar, los Alpes y el sur.",
  ],

  costs: [
    "París y la Costa Azul son caras, sobre todo en verano.",
    "Huelgas de transporte que pueden cambiar un día de viaje.",
    "Filas y reservas obligatorias para los imperdibles.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Chamonix en enero no pide lo mismo que Niza. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "paris",
      name: "París",
      region: "París y el norte",
      tag: "La capital",
      blurb:
        "El Louvre, la torre Eiffel, el Sena y barrios para caminar sin rumbo. Es la base del planificador: invierno gris y frío, verano templado con días largos y algún golpe de calor.",
      coords: [48.8566, 2.3522],
      featured: true,
      image: null,
    },
    {
      id: "niza",
      name: "Niza y la Costa Azul",
      region: "Mediterráneo",
      tag: "Mar turquesa",
      blurb:
        "Paseo marítimo, mar turquesa y pueblos colgados como Èze, con Mónaco a un viaje corto en tren. El invierno más suave de Francia.",
      coords: [43.7102, 7.262],
      image: null,
    },
    {
      id: "lyon",
      name: "Lyon",
      region: "Centro y este",
      tag: "Capital de la cocina",
      blurb:
        "Un casco renacentista, los bouchons de cocina tradicional y dos ríos. Más tranquila y accesible que París, a dos horas en tren.",
      coords: [45.764, 4.8357],
      image: null,
    },
    {
      id: "burdeos",
      name: "Burdeos",
      region: "Atlántico",
      tag: "Vino",
      blurb:
        "Una ciudad de piedra clara a orillas del río, rodeada de algunos de los viñedos más famosos del mundo. Clima atlántico, suave y con lluvia repartida.",
      coords: [44.8378, -0.5792],
      image: null,
    },
    {
      id: "marsella",
      name: "Marsella",
      region: "Mediterráneo",
      tag: "Puerto y calas",
      blurb:
        "El puerto más antiguo de Francia, con calas de agua turquesa a minutos del centro y una cocina de mar propia. Calurosa y soleada en verano.",
      coords: [43.2965, 5.3698],
      image: null,
    },
    {
      id: "estrasburgo",
      name: "Estrasburgo",
      region: "Centro y este",
      tag: "Entre Francia y Alemania",
      blurb:
        "Casas con entramado de madera, canales y una catedral gótica enorme. En diciembre, uno de los mercados navideños más famosos de Europa, con frío de verdad.",
      coords: [48.5734, 7.7521],
      image: null,
    },
    {
      id: "normandia",
      name: "Normandía",
      region: "Atlántico",
      tag: "Desembarco y abadía",
      blurb:
        "Las playas del Desembarco, el tapiz de Bayeux y el Mont-Saint-Michel sobre la marea. Clima atlántico: fresco, ventoso y con lluvia en cualquier mes.",
      coords: [49.2764, -0.7024],
      image: null,
    },
    {
      id: "chamonix",
      name: "Chamonix",
      region: "Alpes",
      tag: "Al pie del Mont Blanc",
      blurb:
        "Un pueblo de montaña con teleféricos que suben a casi 3.850 metros. Esquí en invierno y caminatas en verano, con frío arriba todo el año.",
      coords: [45.9237, 6.8694],
      image: null,
    },
    {
      id: "provenza",
      name: "Aviñón y la Provenza",
      region: "Mediterráneo",
      tag: "Lavanda y pueblos",
      blurb:
        "El Palacio de los Papas, pueblos de piedra y los campos de lavanda, que florecen entre fines de junio y julio. Veranos muy calurosos y secos.",
      coords: [43.9493, 4.8055],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Francia tiene un clima amable pero cambiante, y la valija depende de la región. París es gris y fría en invierno y templada en verano, con algún golpe de calor; la Costa Azul y la Provenza tienen veranos calurosos y secos; Normandía y el Atlántico, viento y lluvia en cualquier mes; y los Alpes, nieve en invierno. Para París, algo impermeable y liviano en cualquier estación y calzado para caminar todo el día.",
    keyPoints: [
      "Hemisferio norte: de diciembre a febrero es invierno, y julio y agosto, verano.",
      "En París y el norte llueve poco pero seguido, todo el año. Un piloto liviano rinde más que un paraguas.",
      "El sur mediterráneo —Niza, Marsella, la Provenza— tiene veranos secos y calurosos e inviernos suaves.",
      "En los Alpes manda la altura: arriba de los teleféricos hace frío también en verano.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector. Los golpes de calor del verano parisino son cada vez más frecuentes y muchos alojamientos no tienen aire acondicionado: preguntá antes de reservar.",
      templado:
        "Capas livianas y una campera fina que aguante algo de lluvia. Es el clima ideal para caminar París.",
      fresco:
        "Sweater, campera impermeable y algo para el cuello. En el norte y en la costa atlántica el viento hace que se sienta más frío.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no se moje. En París el invierno es gris y húmedo; en los Alpes y en Alsacia, con nieve y temperaturas bajo cero.",
    },
    plug: {
      types: "Tipo C y tipo E",
      voltage: "230 V, 50 Hz",
      note: "El tipo E es el europeo de dos patas redondas, con una tercera pata que sale del toma; los enchufes tipo C entran sin problema. Si los tuyos son de patas planas, necesitás adaptador, y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Reservá el Louvre y la torre Eiffel con anticipación",
          body: "Las entradas tienen horario y se agotan. Para el Louvre, reservar es prácticamente obligatorio.",
        },
        {
          title: "Saludá al entrar",
          body: "Un bonjour al entrar a un negocio o a un café cambia el trato. En Francia es la cortesía básica, no un extra.",
        },
        {
          title: "Aprovechá la fórmula del mediodía",
          body: "Entrada y plato, o plato y postre, a precio cerrado. Es la forma más accesible de comer bien en un restaurante.",
        },
        {
          title: "Llevá un piloto liviano",
          body: "En París y el norte llueve poco pero seguido. Algo impermeable que se guarde en la mochila sirve todo el año.",
        },
        {
          title: "Revisá las huelgas antes de un tren clave",
          body: "Las huelgas de transporte no son raras. Si tenés un tren o un vuelo importante, fijate las noticias el día anterior.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No llegues a almorzar a las tres",
          body: "Muchas cocinas cierran entre las dos y las siete. Fuera de ese horario quedan las panaderías, los cafés y la comida al paso.",
        },
        {
          title: "No armes la semana sin mirar los cierres",
          body: "Los grandes museos cierran un día por semana, lunes o martes según cuál, y algunos feriados. Revisalo antes.",
        },
        {
          title: "No descuides la mochila en el metro",
          body: "En las líneas más turísticas de París y alrededor de los monumentos hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No cuentes con aire acondicionado en París",
          body: "Muchos hoteles y departamentos antiguos no tienen. Si viajás en julio o agosto, preguntá antes de reservar.",
        },
        {
          title: "No subas a la montaña en ropa de ciudad",
          body: "En la cima del teleférico de Chamonix hay temperaturas bajo cero en pleno verano. Llevá abrigo aunque abajo haga calor.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "lluvia",
        title: "Ropa para un clima cambiante",
        notice: {
          tone: "info",
          title: "Llueve poco, pero seguido",
          body: "En París y el norte la lluvia se reparte en todo el año en lloviznas cortas. Lo que sirve es algo impermeable y liviano, no un equipo de lluvia.",
        },
        summary: "Lo que cubre de París a la Costa Azul",
        items: [
          "Piloto o campera impermeable liviana",
          "Capas: remeras, un sweater y una campera",
          "Bufanda o pañuelo, que en Francia se usa todo el año",
          "Calzado cómodo que aguante la lluvia",
          "Algo un poco más arreglado para una cena",
        ],
      },
      {
        id: "montana",
        title: "Alpes",
        notice: {
          tone: "warn",
          title: "Arriba hace frío todo el año",
          body: "En Chamonix los teleféricos suben a casi 3.850 metros, donde la temperatura está bajo cero también en verano y el sol pega fuerte. Subí abrigado.",
        },
        summary: "Si vas a Chamonix o a la montaña",
        items: [
          "Campera de abrigo y polar, también en verano",
          "Gorro y guantes",
          "Anteojos de sol con filtro",
          "Protector solar de factor alto",
          "Calzado con buena suela para la nieve o el sendero",
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
          title: "Enchufes de dos patas redondas",
          body: "Entran los tipo C. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Auriculares para los trenes y los vuelos",
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
          "Curitas y algo para ampollas: en París se camina mucho",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Cochecito liviano: el metro de París tiene muchas escaleras y pocos ascensores",
          "Una capa de más para la montaña o la costa atlántica",
          "Entretenimiento offline para los trenes y los vuelos",
        ],
      },
    ],
    avoid: [
      {
        leave: "El paraguas grande",
        why: "La lluvia de París es corta y con viento, y un paraguas grande es un estorbo en el metro.",
        instead: "Un piloto liviano o un paraguas plegable.",
      },
      {
        leave: "Zapatos nuevos",
        why: "En París se camina más de lo que uno calcula, y un zapato sin usar son ampollas el segundo día.",
        instead: "Zapatillas cómodas y ya probadas.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta en todos lados, también sin contacto.",
        instead: "Algo de efectivo para mercados y panaderías.",
      },
      {
        leave: "Ropa solo de verano para los Alpes",
        why: "Arriba de los teleféricos hace frío todo el año.",
        instead: "Abrigo, gorro y guantes en el bolso del día.",
      },
      {
        leave: "Solo ropa deportiva",
        why: "Para cenar en París, algo un poco más arreglado te va a hacer sentir más cómodo.",
        instead: "Una prenda que sirva para salir de noche.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En el metro y en los lugares más turísticos llaman la atención de los carteristas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Francia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo E, donde entran los enchufes europeos de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir a París?",
        answer:
          "Primavera y otoño: días templados y la ciudad en su mejor momento. El verano es lindo pero lleno y con golpes de calor; el invierno, gris y frío, con menos filas.",
      },
      {
        question: "¿Se deja propina en Francia?",
        answer:
          "El servicio va incluido en la cuenta por ley. Redondear o dejar algo si te atendieron bien es un gesto, no una obligación.",
      },
      {
        question: "¿Cómo me muevo entre ciudades?",
        answer:
          "En tren de alta velocidad desde París a Lyon, Burdeos, Marsella, Estrasburgo y los Alpes. Conviene comprar con anticipación.",
      },
      {
        question: "¿Hace falta hablar francés?",
        answer:
          "No, pero un bonjour y un merci cambian el trato. En las zonas turísticas se habla inglés; en el interior, bastante menos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí, en todo el país. En los restaurantes podés pedir una jarra de agua de la canilla, que es gratis.",
      },
      {
        question: "¿Cuándo florece la lavanda en la Provenza?",
        answer:
          "Entre fines de junio y julio, según el año y la altura. A mediados de agosto la mayoría de los campos ya está cosechada.",
      },
    ],
  },
};
