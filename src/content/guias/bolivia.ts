import type { DestinationGuide } from "./types";

/**
 * Guía de Bolivia (spec, secciones 8 y 10).
 *
 * Tercer corredor. Mismas reglas de 8.4: nada de "alertas de seguridad", ningún
 * número volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la
 * fecha de revisión visible arriba del bloque.
 *
 * Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta al producto: vuelve a la tesis de Argentina —hay más
 * de un tipo de cambio— pero con una variable que ninguno de los dos anteriores
 * tenía, la altura. La Paz está a 3.600 metros y eso cambia qué se empaca más
 * que la temperatura.
 */
export const bolivia: DestinationGuide = {
  slug: "bolivia",
  country: "Bolivia",
  subhead:
    "El país más alto de América y uno de los más baratos. Acá lo que define la valija no es el calor ni el frío, sino a cuántos metros vas a dormir.",

  image: null,

  highlights: [
    {
      value: "3.600 m",
      label: "sobre el mar en La Paz",
      note: "La capital administrativa más alta del mundo. El cuerpo lo nota el primer día.",
    },
    {
      value: "2",
      label: "tipos de cambio",
      note: "El oficial y el paralelo. Cuál conseguís cambia el costo real del viaje.",
    },
    {
      value: "UTC−4",
      label: "todo el año",
      note: "Sin horario de verano: la diferencia con tu país no se mueve durante el viaje.",
    },
    {
      value: "6",
      label: "pisos ecológicos",
      note: "Del altiplano a la Amazonía en un día de viaje. No es un destino, son varios climas.",
    },
  ],

  facts: [
    {
      id: "altura",
      title: "La altura es lo primero, antes que cualquier otra cosa",
      body: [
        "La Paz está a unos 3.600 metros y El Alto, donde aterriza el avión, todavía más arriba. A esa altura hay bastante menos oxígeno por respiración, y el cuerpo tarda varios días en compensarlo. El mal de altura —soroche— no distingue edad ni estado físico: le pega a deportistas y no le pega a gente sedentaria, sin lógica aparente.",
        "Lo que sí funciona es no pelearla. Llegar y descansar el primer día, comer liviano, tomar mucha agua y no tomar alcohol hasta estar aclimatado. El mate de coca es la costumbre local y ayuda con los síntomas leves. Si tenés una condición cardíaca o respiratoria, esto se consulta con un médico antes de comprar el pasaje, no después.",
        "Si podés elegir el itinerario, entrar por una ciudad más baja —Santa Cruz, Cochabamba, Sucre— y subir de a poco es mucho más amable que aterrizar directo en El Alto.",
      ],
    },
    {
      id: "plata",
      title: "Por qué hay más de un cambio",
      body: [
        "El boliviano tuvo durante años un tipo de cambio fijo frente al dólar, y esa estabilidad fue parte de la identidad económica del país. Cuando las reservas se ajustaron, apareció un mercado paralelo con un precio distinto, y hoy conviven los dos: el oficial, que es el de los bancos, y el paralelo, que es el que rige en la práctica para quien llega con divisa.",
        "Para un viajero eso significa lo mismo que en Argentina: el mismo gasto tiene dos tamaños según dónde cambies. Y significa también que conseguir dólares dentro del país puede ser difícil, así que conviene entrar con efectivo y no contar con sacarlo de un cajero.",
        "El planificador de más abajo te deja ver el presupuesto en cada cotización. Acá no ponemos el número porque el número envejece en semanas.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Bolivia no se ordena por estaciones de temperatura sino por estación seca y estación de lluvias. La seca va de mayo a octubre: cielos despejados, noches muy frías en el altiplano y caminos en buen estado. La de lluvias va de noviembre a marzo, con tardes de tormenta y rutas de tierra que se complican.",
        "El Salar de Uyuni es la excepción que invierte la regla. En la estación seca se recorre entero en vehículo; en la de lluvias se cubre de una capa de agua y se convierte en el espejo que sale en todas las fotos, pero buena parte queda inaccesible. Las dos versiones valen y son viajes distintos: hay que elegir cuál se quiere.",
        "El planificador usa el clima histórico del mes elegido, no un pronóstico. Con meses de anticipación un pronóstico no existe; el promedio de ese mes sí, y es lo que sirve para decidir qué meter en la valija.",
      ],
    },
    {
      id: "moverse",
      title: "Las distancias se miden en horas, no en kilómetros",
      body: [
        "Un mapa de Bolivia engaña. Trescientos kilómetros de altiplano con curvas de montaña pueden ser ocho horas de micro, y la ruta a la Amazonía baja miles de metros por caminos que la lluvia deteriora. Planificar por distancia en línea recta es el error clásico.",
        "Los micros de larga distancia son la forma normal de moverse y son baratos; los nocturnos ahorran un día pero se duerme poco y hace frío. Los vuelos internos cuestan bastante más y a veces son la única opción sensata, sobre todo para llegar a la Amazonía.",
        "La conclusión práctica es la de siempre en países así: dos regiones, no cinco. Y dejar margen, porque un camino cortado no es una rareza.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier país de la región: atención a las pertenencias en terminales y mercados, preferir transporte acordado por el alojamiento antes que parar un auto en la calle, y no cambiar plata con alguien que te aborde ofreciendo una cotización mejor.",
        "El agua de la canilla no es potable en general. Se toma embotellada o hervida, y conviene el mismo criterio con el hielo y con las ensaladas crudas fuera de lugares establecidos.",
        "Para la Amazonía suele recomendarse la vacuna contra la fiebre amarilla, y algunos países la exigen al volver. Necesita días para hacer efecto, así que se consulta con semanas de anticipación y no en el aeropuerto.",
      ],
    },
  ],

  factsUpdatedAt: "2026-09-11",

  scores: [
    {
      dimension: "Paisajes de altura",
      score: 10,
      rationale:
        "El salar más grande del mundo, la cordillera y el altiplano. No hay nada parecido en el continente.",
    },
    {
      dimension: "Culturas vivas",
      score: 9.5,
      rationale:
        "Aymara y quechua no son folklore de museo: son idiomas que se hablan y formas de vida que siguen funcionando.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9.5,
      rationale:
        "Es de los países más baratos de América para el viajero, y la diferencia se nota en cuánto rinde un presupuesto.",
    },
    {
      dimension: "Naturaleza y biodiversidad",
      score: 9,
      rationale:
        "Del altiplano a la Amazonía en el mismo país, con parques poco visitados y fauna abundante.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Cocina de mercado muy rica y variada por región. La escena de alta cocina es chica pero tiene cosas serias.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Distancias lentas, caminos que la lluvia complica y una infraestructura turística despareja fuera del circuito.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 5,
      rationale:
        "Dos tipos de cambio conviviendo y dificultad para conseguir divisa dentro del país.",
    },
  ],

  shines: [
    "Paisajes que no existen en ninguna otra parte, empezando por el salar.",
    "Un presupuesto rinde acá más que en cualquier país vecino.",
    "Culturas originarias vivas, no puestas para el turista.",
  ],

  costs: [
    "La altura condiciona los primeros días te guste o no.",
    "Moverse es lento, y en época de lluvias además incierto.",
    "Conviene entrar con efectivo: sacar dólares adentro es difícil.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: el altiplano y la Amazonía no piden lo mismo. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "la-paz",
      name: "La Paz",
      region: "Altiplano",
      tag: "Ciudad en un cañón",
      blurb:
        "Una ciudad metida en una hondonada a 3.600 metros, con teleféricos que funcionan como transporte público y vista al Illimani. Es la base del planificador y la puerta de entrada más común.",
      coords: [-16.4897, -68.1193],
      featured: true,
      image: null,
    },
    {
      id: "uyuni",
      name: "Salar de Uyuni",
      region: "Altiplano",
      tag: "Sal y espejo",
      blurb:
        "Doce mil kilómetros cuadrados de sal a 3.660 metros. En seco se recorre entero; en lluvias se cubre de agua y se vuelve un espejo. Son dos viajes distintos y hay que elegir cuál.",
      coords: [-20.4597, -66.8258],
      image: null,
    },
    {
      id: "copacabana",
      name: "Copacabana y el Titicaca",
      region: "Altiplano",
      tag: "Lago sagrado",
      blurb:
        "El pueblo a orillas del lago navegable más alto del mundo, con la Isla del Sol a un barco de distancia. El sol de altura pega fuerte aunque el aire esté fresco.",
      coords: [-16.166, -69.0865],
      image: null,
    },
    {
      id: "potosi",
      name: "Potosí",
      region: "Altiplano",
      tag: "Cerro y plata",
      blurb:
        "A más de 4.000 metros, una de las ciudades habitadas más altas del planeta y la que financió medio imperio español. Hace frío de verdad casi todo el año.",
      coords: [-19.5836, -65.7531],
      image: null,
    },
    {
      id: "sucre",
      name: "Sucre",
      region: "Valles",
      tag: "Capital blanca",
      blurb:
        "La capital constitucional, con un centro colonial cuidado y un clima mucho más amable que el altiplano. Es donde mucha gente se queda a estudiar español.",
      coords: [-19.0333, -65.2627],
      image: null,
    },
    {
      id: "cochabamba",
      name: "Cochabamba",
      region: "Valles",
      tag: "Comida y clima",
      blurb:
        "Valle templado que llaman la ciudad de la eterna primavera, y la capital gastronómica del país. Buen lugar para aclimatarse antes de subir.",
      coords: [-17.3895, -66.1568],
      image: null,
    },
    {
      id: "tarija",
      name: "Tarija",
      region: "Valles",
      tag: "Vino de altura",
      blurb:
        "Bodegas a casi 2.000 metros, entre las viñas más altas del mundo. Clima suave y un ritmo que no se parece al del resto del país.",
      coords: [-21.5355, -64.7296],
      image: null,
    },
    {
      id: "santa-cruz",
      name: "Santa Cruz de la Sierra",
      region: "Oriente",
      tag: "Llanura y negocios",
      blurb:
        "La ciudad más grande y el motor económico, en tierra baja y caliente. Punto de partida hacia las misiones jesuíticas de la Chiquitania.",
      coords: [-17.7833, -63.1821],
      image: null,
    },
    {
      id: "rurrenabaque",
      name: "Rurrenabaque",
      region: "Amazonía",
      tag: "Selva y pampas",
      blurb:
        "La entrada a la Amazonía boliviana, con el parque Madidi y las pampas del Yacuma. Calor y humedad todo el año, y a pocas horas de vuelo del altiplano helado.",
      coords: [-14.4419, -67.5281],
      image: null,
    },
    {
      id: "oruro",
      name: "Oruro",
      region: "Altiplano",
      tag: "Carnaval y viento",
      blurb:
        "A 3.735 metros, la ciudad minera donde cada febrero se baila el Carnaval que la UNESCO declaró patrimonio. El resto del año es altiplano puro: seco, ventoso y frío de noche.",
      coords: [-17.9833, -67.15],
      image: null,
    },
    {
      id: "coroico",
      name: "Coroico",
      region: "Yungas",
      tag: "Bajar al calor",
      blurb:
        "Tres horas de bajada desde La Paz y estás a 1.750 metros, entre cafetales y niebla subtropical. Es el contraste más rápido del país: salís con campera y llegás en remera.",
      coords: [-16.19, -67.73],
      image: null,
    },
    {
      id: "sorata",
      name: "Sorata",
      region: "Yungas",
      tag: "Al pie del Illampu",
      blurb:
        "Un pueblo de valle a 2.680 metros con el nevado Illampu encima, base clásica de trekking hacia la Cordillera Real. Templado de día y fresco apenas se esconde el sol.",
      coords: [-15.7728, -68.65],
      image: null,
    },
    {
      id: "torotoro",
      name: "Torotoro",
      region: "Valles",
      tag: "Huellas de dinosaurio",
      blurb:
        "Un parque nacional de cañones, cavernas y huellas de dinosaurio a 2.600 metros. Se llega desde Cochabamba y casi todo se camina bajo sol directo.",
      coords: [-18.1333, -65.7667],
      image: null,
    },
    {
      id: "tupiza",
      name: "Tupiza",
      region: "Valles",
      tag: "Quebradas rojas",
      blurb:
        "Quebradas coloradas y cardones en el extremo sur, a 2.950 metros. Es la entrada alternativa al Salar y el lugar donde se acabó la historia de Butch Cassidy.",
      coords: [-21.4433, -65.7192],
      image: null,
    },
    {
      id: "concepcion",
      name: "Concepción",
      region: "Oriente",
      tag: "Misiones jesuíticas",
      blurb:
        "El corazón de la Chiquitania, con iglesias de madera restauradas que también son patrimonio de la UNESCO. Tierra baja, calor húmedo y un circuito que se hace por ruta desde Santa Cruz.",
      coords: [-16.1333, -62.0333],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En Bolivia la valija no la decide la estación sino la altura. La Paz tiene la misma temperatura todo el año —unos 14 grados de día y cerca de cero de noche— así que se empaca igual en enero que en julio: capas. Lo que sí cambia es la lluvia. Si podés elegir, andá entre mayo y octubre, que es la estación seca.",
    keyPoints: [
      "La amplitud térmica del altiplano es brutal: el mismo día puede ir de helada de madrugada a sol fuerte al mediodía. Se resuelve con capas, no con una prenda gruesa.",
      "El sol de altura quema aunque el aire esté fresco. Protector solar, gorro y anteojos no son opcionales, y no dependen del mes.",
      "El país tiene seis pisos ecológicos. Si el itinerario combina La Paz con Rurrenabaque, hay que empacar para dos climas opuestos en el mismo viaje.",
      "Lo que cambia entre meses es la lluvia, no la temperatura. La estación seca va de mayo a octubre.",
    ],
    adviceByBucket: {
      frio: "Capas de verdad: térmica, abrigo y algo que corte el viento, más gorro y guantes. En el altiplano la noche baja de cero aunque el día haya sido soleado.",
      fresco:
        "Capas livianas que se puedan sacar al mediodía: buzo o polar, pantalón largo y una campera que corte el viento. Es el rango más común en el altiplano.",
      templado:
        "Manga corta de día y una capa para la noche. Es el clima de los valles, Sucre, Cochabamba y Tarija, y el más fácil de empacar.",
      calido:
        "Ropa liviana y de secado rápido, y manga larga fina para el sol y los mosquitos. Es el oriente y la Amazonía, donde la humedad hace el resto.",
    },
    plug: {
      types: "Tipo A y tipo C",
      voltage: "230 V, 50 Hz",
      note: "La mayoría del país funciona a 230 V, pero en zonas de La Paz todavía hay instalaciones de 115 V. Revisá que tus cargadores digan 100-240 V y preguntá en el alojamiento antes de enchufar algo sensible.",
    },
    tips: {
      dos: [
        {
          title: "Empacá en capas, no en prendas gruesas",
          body: "En el altiplano el mismo día va de helada a sol fuerte. Tres capas finas se adaptan a eso; una campera gruesa te deja incómodo la mitad del día.",
        },
        {
          title: "Llevá protector solar aunque vayas en invierno",
          body: "A 3.600 metros hay mucha menos atmósfera filtrando el sol. Quema con aire fresco y con el cielo nublado, y sobre la sal del salar rebota de abajo también.",
        },
        {
          title: "Dejá el primer día libre",
          body: "No agendes nada exigente para el día que llegás a La Paz. Aclimatarse no es opcional y descansar las primeras horas cambia el resto del viaje.",
        },
        {
          title: "Entrá con efectivo en dólares",
          body: "Conseguir divisa dentro del país es difícil, y fuera de las ciudades grandes la tarjeta no siempre resuelve. Cambialo en lugares establecidos, nunca en la calle.",
        },
        {
          title: "Sacale una foto a tus documentos",
          body: "Pasaporte, seguro y pasajes, guardados en el teléfono y en algún lado que no dependa del teléfono. Salí con una copia y dejá el original en el alojamiento.",
        },
        {
          title: "Descargá los mapas antes de salir",
          body: "La señal desaparece apenas salís de las ciudades, y buena parte de lo que vale la pena está justo ahí.",
        },
      ],
      donts: [
        {
          title: "No llegues y salgas a caminar el primer día",
          body: "Es la forma más común de arruinarse los tres días siguientes. El soroche no distingue estado físico y no se vence por voluntad.",
        },
        {
          title: "No tomes alcohol hasta estar aclimatado",
          body: "A esa altura pega mucho más fuerte y empeora los síntomas. Los primeros días conviene mate de coca y agua.",
        },
        {
          title: "No des por hecho que hay cajeros",
          body: "Fuera de las ciudades grandes escasean, y los que hay no siempre tienen efectivo. Salí con más de lo que calculás necesitar.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "No es potable en general. Aplica también al hielo y a las ensaladas crudas fuera de lugares establecidos.",
        },
        {
          title: "No empaques una sola prenda de abrigo pesada",
          body: "Ocupa muchísimo y sirve solo de noche. Dos o tres capas finas pesan menos y cubren todo el rango del día.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Si la valija se demora, el viaje sigue igual.",
        },
      ],
    },
    checklists: [
      {
        id: "altura",
        title: "Altura y aclimatación",
        notice: {
          tone: "warn",
          title:
            "Consultá antes de viajar si tenés una condición cardíaca o respiratoria",
          body: "A 3.600 metros hay bastante menos oxígeno por respiración. Para la mayoría es cuestión de descansar unos días; para algunas condiciones no, y eso se conversa con un médico antes de comprar el pasaje.",
        },
        summary: "Lo que ayuda los primeros días",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico para el dolor de cabeza, que es el síntoma más común",
          "Botella reutilizable: a esta altura se deshidrata mucho más rápido",
          "Crema humectante y protector labial — el aire seco parte los labios en un día",
          "Snacks livianos para los tramos largos de micro",
        ],
      },
      {
        id: "sol",
        title: "Sol de altura",
        notice: {
          tone: "warn",
          title: "Quema aunque haga frío",
          body: "A 3.600 metros hay mucha menos atmósfera filtrando la radiación, y sobre la sal del salar rebota también desde abajo. La sensación de frío engaña y la quemadura llega igual.",
        },
        summary: "Lo que no se negocia en el altiplano",
        items: [
          "Protector solar de factor alto, incluso en invierno",
          "Anteojos de sol con protección UV — en el salar son imprescindibles",
          "Gorro o sombrero de ala",
          "Protector labial con factor de protección",
        ],
      },
      {
        id: "ropa",
        title: "Ropa por capas",
        notice: {
          tone: "info",
          title: "Se compra muy bien allá",
          body: "Los tejidos de alpaca son de buena calidad y baratos, y se consiguen en cualquier mercado. Es de lo poco que conviene comprar en destino en vez de traer.",
        },
        summary: "Cómo se arma el sistema de capas",
        items: [
          "Una capa térmica fina para la noche",
          "Buzo o polar de abrigo medio",
          "Campera que corte el viento, preferentemente impermeable",
          "Pantalón largo cómodo para caminar",
          "Gorro y guantes livianos, que ocupan poco y se agradecen",
        ],
      },
      {
        id: "salud",
        title: "Salud y agua",
        notice: {
          tone: "warn",
          title: "El agua de la canilla no es potable",
          body: "Se toma embotellada o hervida. Mismo criterio con el hielo y con las ensaladas crudas fuera de lugares establecidos. Para la Amazonía suele recomendarse la vacuna contra la fiebre amarilla.",
        },
        summary: "Botiquín y qué averiguar antes de salir",
        items: [
          "Sales de rehidratación",
          "Antidiarreico y antiácido",
          "Repelente de insectos, imprescindible en la Amazonía y el oriente",
          "Seguro de viaje con cobertura médica y, si vas a zonas remotas, con evacuación",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Consultá la altura con el pediatra antes de programar el altiplano",
          "Protector solar de factor alto y gorro, más que en cualquier otro destino",
          "Entretenimiento offline: los tramos por tierra son largos y sin señal",
        ],
      },
    ],
    avoid: [
      {
        leave: "Una sola campera de abrigo gruesa",
        why: "Ocupa muchísimo y solo sirve de noche. El altiplano pide adaptarse varias veces por día.",
        instead: "Tres capas finas que se pongan y se saquen.",
      },
      {
        leave: "Vaqueros pesados",
        why: "Pesan, tardan en secar y no abrigan cuando de verdad hace falta.",
        instead:
          "Un pantalón liviano de viaje y una térmica debajo para la noche.",
      },
      {
        leave: "Zapatos de vestir",
        why: "El país se camina, y muchas calles de La Paz son cuesta empinada o empedrado.",
        instead: "Un par de zapatillas cómodas con buena suela.",
      },
      {
        leave: "Secador de pelo y aparatos de alto consumo",
        why: "El voltaje no es uniforme y en algunas zonas de La Paz todavía hay instalaciones de 115 V.",
        instead: "Nada, o confirmar antes en el alojamiento.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa un volumen enorme y la mayoría de los alojamientos ya te dan una.",
        instead: "Una toalla de microfibra, si acaso.",
      },
      {
        leave: "Botellas de agua compradas desde casa",
        why: "Pesan y se consiguen en cualquier esquina a precio local.",
        instead: "Una botella reutilizable y comprar agua al llegar.",
      },
      {
        leave: "Ropa de abrigo para la Amazonía",
        why: "Si el itinerario baja a Rurrenabaque, ahí no hay un solo mes que la justifique.",
        instead: "Dejar el abrigo en el alojamiento de La Paz mientras bajás.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tarda uno en aclimatarse a la altura?",
        answer:
          "Para la mayoría, dos o tres días de tomarlo con calma alcanzan para sentirse normal. Los síntomas leves —dolor de cabeza, falta de aire al subir escaleras, dormir mal— son esperables el primer día. Si aparecen síntomas fuertes, lo que corresponde es bajar de altura, no aguantar.",
      },
      {
        question: "¿Conviene ir en estación seca o en lluvias?",
        answer:
          "De mayo a octubre es seco, con cielos despejados y caminos en buen estado, y es lo que conviene para casi todo. La excepción es el Salar de Uyuni: en lluvias se cubre de agua y se vuelve un espejo, pero buena parte queda inaccesible. Son dos viajes distintos.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de un país con enchufe tipo A o C, no. Lo que sí hay que revisar es el voltaje: el país funciona a 230 V pero en zonas de La Paz todavía hay instalaciones de 115 V, así que confirmá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Puedo pagar con tarjeta?",
        answer:
          "En las ciudades grandes sí, en hoteles y restaurantes del circuito. Fuera de eso el efectivo manda, y conseguir divisa dentro del país es difícil. Conviene entrar con dólares en efectivo y cambiarlos en lugares establecidos.",
      },
      {
        question: "¿De qué tamaño conviene la valija?",
        answer:
          "Mediana. El sistema de capas ocupa menos de lo que parece, y si el itinerario combina altiplano y Amazonía conviene poder dejar parte del equipaje en el alojamiento mientras bajás.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En general no. Se toma embotellada o hervida, y el mismo criterio aplica al hielo y a las ensaladas crudas fuera de lugares establecidos.",
      },
      {
        question: "¿Necesito vacunas?",
        answer:
          "Para el altiplano no suele pedirse nada especial. Para la Amazonía y el oriente suele recomendarse la fiebre amarilla, y algunos países la exigen al volver. Necesita días para hacer efecto, así que se consulta con semanas de anticipación.",
      },
      {
        question:
          "¿Se puede combinar La Paz con la Amazonía en un viaje corto?",
        answer:
          "Sí, y es de lo más interesante que ofrece el país, pero hay que empacar para dos climas opuestos. Rurrenabaque está a menos de una hora de vuelo de La Paz y unos treinta grados más arriba.",
      },
    ],
  },
};
