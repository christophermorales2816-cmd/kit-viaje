import type { DestinationGuide } from "./types";

/**
 * Guía de España.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: es el primero de Europa, y con él llegan dos cosas
 * que en América no existían. Las estaciones dadas vuelta —enero es invierno—
 * y la entrada al espacio Schengen, que se cuenta sumando todos sus países.
 * Lo que define la valija es el calor del verano del interior.
 */
export const espana: DestinationGuide = {
  slug: "espana",
  country: "España",
  subregion: "Europa del Sur",
  subhead:
    "Cuatro climas en un país, el idioma de tu lado y un reloj propio: se almuerza a las tres y se cena pasadas las nueve. En verano el interior quema; en invierno, Canarias sigue en primavera.",

  image: null,

  highlights: [
    {
      value: "36 °C",
      label: "de máxima en Sevilla en julio",
      note: "Es el promedio de las máximas, no un día raro. En el sur, el verano se vive temprano y de noche.",
    },
    {
      value: "21 h",
      label: "la hora de la cena",
      note: "Y el almuerzo, de dos a cuatro. Es el reloj de todo el país, y conviene adoptarlo desde el primer día.",
    },
    {
      value: "90 días",
      label: "sin visa en el espacio Schengen",
      note: "Para muchos pasaportes latinoamericanos, dentro de cualquier período de 180 días y sumando todos los países del espacio. Verificá el tuyo.",
    },
    {
      value: "−1 h",
      label: "en Canarias",
      note: "Las islas tienen una hora menos que la península. Si combinás las dos, revisá los horarios de los vuelos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "España es parte del espacio Schengen, la zona de libre circulación de la mayoría de los países de Europa. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: un viaje por España, Francia e Italia consume un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en España",
      body: [
        "La moneda es el euro y la tarjeta se acepta en casi todos lados, también sin contacto y con el teléfono, incluso para montos chicos. El efectivo queda para algún bar de pueblo o un puesto de mercado.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no y elegí euros: la conversión que hace el comercio suele ser bastante peor que la de tu banco.",
        "Cataluña y las Baleares cobran una tasa turística por noche, y otras ciudades se fueron sumando. Se paga en el alojamiento y no siempre está incluida en el precio de la reserva: preguntá antes.",
      ],
    },
    {
      id: "climas",
      title: "Cuatro climas en un país",
      body: [
        "España es hemisferio norte: enero es invierno y julio, verano. Pero lo que define la valija es a qué parte del país vas.",
        "El interior es continental. Madrid tiene inviernos fríos y secos, con heladas de noche, y veranos que pasan los treinta y cinco grados; Sevilla y Córdoba están entre las ciudades más calurosas de Europa en julio. La costa mediterránea, de Barcelona a Valencia, es más pareja: inviernos suaves y veranos húmedos.",
        "El norte —Galicia, Asturias, el País Vasco— es verde porque llueve seguido, también en verano. Y Canarias, frente a la costa de África, tiene temperatura de primavera los doce meses.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "La primavera y el otoño son lo mejor para casi todo el país: de abril a junio y de septiembre a octubre hay días templados y menos gente que en verano.",
        "Julio y agosto son temporada alta en la costa y en las islas, y el interior y Andalucía se vuelven muy calurosos. Agosto, además, es el mes de vacaciones de los españoles: las playas se llenan y algunos comercios de las ciudades cierran.",
        "El invierno es una buena época para las ciudades, con cielos despejados y frío seco, y la mejor para Canarias. Semana Santa y las fiestas locales llenan todo: si coinciden con tu viaje, reservá antes.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "ritmo",
      title: "El ritmo español",
      body: [
        "Se almuerza entre las dos y las cuatro y se cena de las nueve en adelante. Muchos restaurantes cierran la cocina entre turno y turno, y llegar a cenar a las siete es encontrarlos vacíos. Al mediodía, el menú del día —entrada, plato principal, postre y bebida a precio cerrado— es la comida que más rinde.",
        "Entre ciudades, los trenes de alta velocidad unen Madrid con Barcelona, Sevilla, Valencia y Málaga en pocas horas, y los buses cubren el resto. A las islas se va en avión o en ferry.",
        "Las precauciones son las de cualquier destino muy visitado: atención al celular y a la mochila en el metro y en las calles más turísticas de Barcelona y Madrid.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Ciudades y patrimonio",
      score: 9.5,
      rationale:
        "Madrid, Barcelona, Sevilla y Granada, cada una distinta: museos de primer nivel, la Alhambra, la Sagrada Familia y cascos viejos para caminar.",
    },
    {
      dimension: "Gastronomía",
      score: 9.5,
      rationale:
        "Tapas, mercados, menú del día y una de las escenas gastronómicas más fuertes de Europa, a cualquier nivel de precio.",
    },
    {
      dimension: "Playas y clima",
      score: 8.5,
      rationale:
        "El Mediterráneo, las Baleares y Canarias. Del verano peninsular al invierno templado de las islas, siempre hay costa con sol.",
    },
    {
      dimension: "Vida social y nocturna",
      score: 9,
      rationale:
        "Se cena tarde y la calle se usa: terrazas, plazas y bares llenos hasta la madrugada, todo el año.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7.5,
      rationale:
        "Más accesible que Francia, el Reino Unido o el norte de Europa, con buena calidad en casi todo. Barcelona y las islas en verano son la excepción.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale:
        "Trenes de alta velocidad entre las ciudades grandes, buenos buses para el resto y el idioma de tu lado.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "El euro, precios estables y tarjeta en todos lados. Lo único a mirar es la comisión de tu banco.",
    },
  ],

  shines: [
    "Hablás el idioma: lo que en el resto de Europa es una barrera, acá no existe.",
    "Ciudades muy distintas entre sí, unidas por trenes rápidos.",
    "Comer bien a cualquier precio, con el menú del día como aliado.",
  ],

  costs: [
    "El calor del verano en el interior y en Andalucía, que obliga a reorganizar el día.",
    "Barcelona, las islas y la costa en julio y agosto: llenas y caras.",
    "Un horario corrido hacia la noche, al que hay que acostumbrarse.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Granada en enero no pide lo mismo que Tenerife. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "madrid",
      name: "Madrid",
      region: "Centro",
      tag: "Capital y museos",
      blurb:
        "Una capital en el centro de la meseta, con el Prado, el Reina Sofía y el Thyssen a pocas cuadras, barrios para tapear y parques enormes. Es la base del planificador: invierno frío y seco, verano muy caluroso.",
      coords: [40.4168, -3.7038],
      featured: true,
      image: null,
    },
    {
      id: "barcelona",
      name: "Barcelona",
      region: "Mediterráneo",
      tag: "Gaudí y mar",
      blurb:
        "Arquitectura modernista, el barrio gótico y playa urbana en la misma ciudad. Clima mediterráneo amable casi todo el año, y muchísima gente en verano.",
      coords: [41.3874, 2.1686],
      image: null,
    },
    {
      id: "sevilla",
      name: "Sevilla",
      region: "Andalucía",
      tag: "Patios y calor",
      blurb:
        "La catedral, el Alcázar, el barrio de Santa Cruz y naranjos en las calles. De las ciudades más calurosas de Europa en julio y agosto, y una delicia en primavera.",
      coords: [37.3891, -5.9845],
      image: null,
    },
    {
      id: "granada",
      name: "Granada",
      region: "Andalucía",
      tag: "La Alhambra",
      blurb:
        "La Alhambra frente a Sierra Nevada, el Albaicín para perderse y tapas que suelen venir con la bebida. Noches frías en invierno y veranos muy calurosos.",
      coords: [37.1773, -3.5986],
      image: null,
    },
    {
      id: "valencia",
      name: "Valencia",
      region: "Mediterráneo",
      tag: "Paella y playa",
      blurb:
        "La Ciudad de las Artes y las Ciencias, un casco histórico lindo, playa a minutos del centro y la paella en su tierra. Templada casi todo el año.",
      coords: [39.4699, -0.3763],
      image: null,
    },
    {
      id: "san-sebastian",
      name: "San Sebastián",
      region: "Norte",
      tag: "Pintxos y bahía",
      blurb:
        "Una bahía en forma de concha, la parte vieja llena de bares de pintxos y una de las escenas gastronómicas más premiadas del mundo. Verde porque llueve: en cualquier mes, algo impermeable.",
      coords: [43.3183, -1.9812],
      image: null,
    },
    {
      id: "palma",
      name: "Palma de Mallorca",
      region: "Islas",
      tag: "Isla mediterránea",
      blurb:
        "La catedral sobre el mar, calas de agua transparente y pueblos de piedra en la sierra. En verano es de las islas más concurridas del Mediterráneo; en primavera y otoño, mucho más tranquila.",
      coords: [39.5696, 2.6502],
      image: null,
    },
    {
      id: "santiago-de-compostela",
      name: "Santiago de Compostela",
      region: "Norte",
      tag: "Fin del Camino",
      blurb:
        "La catedral adonde llega el Camino de Santiago, en una ciudad de piedra donde llueve buena parte del año. Galicia es otra España: verde, atlántica y con mariscos de primera.",
      coords: [42.8782, -8.5448],
      image: null,
    },
    {
      id: "tenerife",
      name: "Tenerife",
      region: "Islas",
      tag: "Primavera todo el año",
      blurb:
        "Frente a la costa de África, con el Teide —el pico más alto de España— y temperaturas templadas los doce meses. Es el destino de invierno de media Europa, con una hora menos que la península.",
      coords: [28.4636, -16.2518],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "España tiene cuatro climas, y la valija depende de adónde y cuándo vas. En verano el interior y Andalucía pasan los treinta y cinco grados: ropa liviana, sombrero y el día organizado temprano. En invierno Madrid y Granada bajan a pocos grados de noche y piden abrigo; el norte pide algo impermeable en cualquier mes, y Canarias es primavera todo el año. Para el resto, calzado cómodo: España se camina.",
    keyPoints: [
      "Hemisferio norte: julio y agosto son pleno verano, y de diciembre a febrero es invierno.",
      "El interior es continental: Madrid tiene inviernos fríos y veranos muy calurosos y secos. La costa mediterránea es más pareja.",
      "El norte —Galicia, el País Vasco— es verde porque llueve seguido, también en verano.",
      "Canarias tiene temperatura de primavera los doce meses, y una hora menos que la península.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana que respire, sombrero, anteojos de sol y protector. En Sevilla o Córdoba en verano, las horas del medio del día son para estar adentro: las visitas se hacen temprano o al atardecer.",
      templado:
        "Capas livianas: remera, algo de manga larga y una campera fina para la noche. Es el clima de la primavera y el otoño en casi todo el país.",
      fresco:
        "Sweater o buzo y una campera liviana. En el norte, que sea impermeable: la lluvia es parte del paisaje.",
      frio: "Abrigo de verdad, bufanda y guantes. En Madrid y Granada el invierno es seco y soleado, pero de noche baja a pocos grados; en las sierras hay nieve.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Adaptate al horario español",
          body: "Se almuerza entre las dos y las cuatro y se cena de las nueve en adelante. Llegar a un restaurante a las siete de la tarde es encontrarlo vacío o cerrado.",
        },
        {
          title: "Aprovechá el menú del día",
          body: "Al mediodía, muchos restaurantes ofrecen entrada, plato principal, postre y bebida a precio cerrado. Es la comida que más rinde del día.",
        },
        {
          title: "Reservá los imperdibles con anticipación",
          body: "La Alhambra, la Sagrada Familia y otros sitios muy visitados venden entradas con horario que se agotan, sobre todo en temporada alta. No es algo que se resuelva al llegar.",
        },
        {
          title: "Comprá los trenes con tiempo",
          body: "Las tarifas de la alta velocidad suben a medida que se llenan los trenes. Sacarlos con semanas de anticipación ahorra bastante.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
        {
          title: "Llevá calzado cómodo y probado",
          body: "Las ciudades españolas se recorren a pie, con empedrado y cuestas en los cascos viejos. Unas zapatillas cómodas valen más que cualquier otra prenda.",
        },
      ],
      donts: [
        {
          title: "No planees caminatas al mediodía en verano",
          body: "En Andalucía y en el interior, en julio y agosto, el calor de la siesta no es un detalle. Las visitas al aire libre van temprano o al caer la tarde.",
        },
        {
          title: "No asumas que en invierno hace calor",
          body: "España tiene fama de sol, y lo tiene, pero en enero Madrid y Granada amanecen cerca de cero. Una valija solo de verano se queda corta.",
        },
        {
          title: "No descuides el celular en zonas turísticas",
          body: "En el metro y en las calles más concurridas de Barcelona y Madrid hay carteristas. Mochila adelante y el teléfono fuera del bolsillo de atrás.",
        },
        {
          title: "No te olvides de la tasa turística",
          body: "Cataluña y las Baleares cobran una tasa por noche que se paga en el alojamiento y no siempre está en el precio de la reserva. Preguntá antes.",
        },
        {
          title: "No cuentes con hacer compras el domingo",
          body: "Fuera de las ciudades grandes y las zonas turísticas, muchos comercios cierran los domingos y al mediodía. Planificá las compras.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "calor",
        title: "Sol y calor",
        notice: {
          tone: "warn",
          title: "El verano del sur no perdona",
          body: "En Sevilla, Córdoba o Granada, julio y agosto pasan seguido los treinta y cinco grados. Agua, sombra y horarios adaptados no son exageración.",
        },
        summary: "Lo que pide el verano del interior y del sur",
        items: [
          "Protector solar de factor alto",
          "Sombrero o gorra",
          "Anteojos de sol",
          "Botella reutilizable: el agua de la canilla es potable",
          "Ropa liviana de algodón o lino",
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
          body: "Entran los tipo C y F. Si los tuyos son de patas planas, necesitás adaptador.",
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
          "Curitas y algo para ampollas: se camina mucho",
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
          "Algo para picar entre comidas: el almuerzo y la cena son más tarde de lo habitual",
          "Gorro y protector solar en verano",
          "Cochecito liviano o mochila portabebé: los cascos viejos tienen empedrado y escaleras",
          "Entretenimiento offline para los trenes y los vuelos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa solo de verano en invierno",
        why: "Enero en Madrid o en Granada amanece cerca de cero, aunque el día sea soleado.",
        instead: "Un abrigo medio y capas.",
      },
      {
        leave: "Un abrigo pesado en verano",
        why: "De junio a septiembre casi todo el país es caluroso, incluso de noche en el sur.",
        instead: "Un buzo liviano para el aire acondicionado o el norte.",
      },
      {
        leave: "Zapatos de taco o de vestir",
        why: "Empedrado, cuestas y muchas horas a pie.",
        instead: "Zapatillas cómodas y unas sandalias.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta, también con el teléfono, se acepta casi en todos lados.",
        instead: "Algo de efectivo para bares chicos y mercados.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho y casi todos los alojamientos dan una.",
        instead: "Una de microfibra si vas a la playa.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En las zonas más turísticas llaman la atención de los carteristas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a España?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Primavera y otoño, de abril a junio y de septiembre a octubre: buen clima en casi todo el país y menos gente que en verano. Canarias es buena todo el año, sobre todo en invierno.",
      },
      {
        question: "¿Hace mucho calor en verano?",
        answer:
          "En el interior y en Andalucía, sí: julio y agosto pasan seguido los treinta y cinco grados. La costa mediterránea es más húmeda y algo menos extrema, y el norte, mucho más fresco.",
      },
      {
        question: "¿A qué hora se come?",
        answer:
          "Tarde. El almuerzo va de las dos a las cuatro y la cena, de las nueve en adelante. Los bares de tapas cubren el hueco del medio.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria y el servicio no se suma a la cuenta. Redondear o dejar algo en un restaurante, si te atendieron bien, es lo habitual.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí, en todo el país. En algunas ciudades del Mediterráneo y en las islas tiene un sabor fuerte, y mucha gente prefiere la embotellada por eso.",
      },
      {
        question: "¿Cómo me muevo entre ciudades?",
        answer:
          "En tren de alta velocidad entre las grandes —Madrid, Barcelona, Sevilla, Valencia, Málaga— y en bus para el resto. A las islas, en avión o en ferry.",
      },
    ],
  },
};
