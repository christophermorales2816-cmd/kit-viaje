import type { DestinationGuide } from "./types";

/**
 * Guía de Brasil (spec, secciones 8 y 10).
 *
 * Segundo corredor. Las mismas reglas de 8.4 que Argentina: nada de "alertas de
 * seguridad", ningún número volátil en prosa —sin cotizaciones, sin precios, sin
 * tarifas— y la fecha de revisión visible arriba del bloque.
 *
 * Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta al producto no es "otro destino": es el caso de UNA
 * sola cotización, que obligó a que las cuatro argentinas dejaran de estar
 * escritas dentro del motor de presupuesto (spec, 10.1).
 */
export const brasil: DestinationGuide = {
  slug: "brasil",
  country: "Brasil",
  subhead:
    "Un país del tamaño de un continente, con playa, selva y ciudad a horas de vuelo entre sí. Acá el cambio es uno solo: lo que se planifica es cuánto rinde y cuándo ir.",

  image: null,

  highlights: [
    {
      value: "1",
      label: "cotización, no cuatro",
      note: "El real tiene un único tipo de cambio. Lo que varía no es dónde cambiás, sino cuánto rinde.",
    },
    {
      value: "UTC−3",
      label: "en la costa",
      note: "Río, São Paulo y el Nordeste. El oeste y el Amazonas van una o dos horas atrás.",
    },
    {
      value: "90 días",
      label: "sin visa",
      note: "Para la mayoría de los pasaportes de América y la Unión Europea. Verificá el tuyo.",
    },
    {
      value: "7.400 km",
      label: "de costa atlántica",
      note: "Del Amazonas a la frontera con Uruguay. No es un destino: son varios países a la vez.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Brasil",
      body: [
        "A diferencia de Argentina, acá hay un solo tipo de cambio: el comercial. No existe un mercado paralelo relevante para un turista, así que no hay que elegir dónde cambiar ni entender un sistema. Lo que sí cambia el costo real del viaje es la tasa que cobre tu banco o tu tarjeta.",
        "El país está muy bancarizado y las tarjetas se aceptan casi en todos lados, incluso para montos chicos. Pix, el sistema de transferencias instantáneas, es de uso masivo entre locales, pero normalmente pide un CPF, o sea un número de identificación fiscal brasileño, que un turista no suele tener.",
        "Llevá algo de efectivo igual. Playas, feiras, quioscos de praia y pueblos chicos siguen funcionando con billetes, y ahí la tarjeta no siempre resuelve.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Hemisferio sur, igual que Argentina: enero es verano y julio es invierno. Pero en Río eso significa algo distinto, porque el invierno no es frío. La diferencia entre un mes y otro es cuánto calor y cuánta lluvia, no cuánta ropa de abrigo.",
        "El verano de Río es intenso: calor, humedad alta y la temporada de lluvias más marcada del año. Es también cuando la ciudad está más viva, con Año Nuevo en Copacabana y el Carnaval, que cae entre febrero y marzo según el año. Si vas por eso, el calor es parte del trato.",
        "Los meses secos y templados van de junio a septiembre, que es el invierno local. Menos lluvia, menos gente y días que siguen siendo de playa. Es la temporada que casi nadie de afuera imagina y la que más rinde.",
        "El planificador usa el clima histórico del mes elegido, no un pronóstico. Con meses de anticipación un pronóstico no existe; el promedio de ese mes sí, y es lo que sirve para decidir qué meter en la valija.",
      ],
    },
    {
      id: "moverse",
      title: "Las distancias son continentales",
      body: [
        "Brasil es más grande que la Europa continental y el error clásico es armar un itinerario como si se recorriera por tierra. Río a Manaos, o Río a Salvador, son vuelos, no viajes en micro.",
        "Los vuelos internos son frecuentes y suelen ser la única opción sensata entre regiones, pero se llevan una parte grande del presupuesto y conviene reservarlos con tiempo. Los micros funcionan bien en tramos cortos y en el sur, no para cruzar el país.",
        "La conclusión práctica es la misma que en cualquier país de este tamaño: elegí una región, o dos. Un viaje de dos semanas rinde mucho más con Río más una zona vecina que intentando sumar el Nordeste y el Amazonas al mismo itinerario.",
      ],
    },
    {
      id: "idioma",
      title: "Se habla portugués, y eso importa más de lo que parece",
      body: [
        "No es español con acento. Un hispanohablante entiende bastante leyendo y bastante menos escuchando, y en Brasil se asume que vas a intentar el portugués antes que el inglés, que fuera de los circuitos turísticos no está tan extendido.",
        "Nadie espera que lo hables bien. Saludar, pedir y agradecer en portugués cambia el tono de cualquier interacción, y unas pocas frases resuelven el noventa por ciento de un viaje.",
        "Descargá el idioma para uso offline en tu traductor antes de salir. Es gratis, ocupa poco y sirve justo cuando no hay señal, que es cuando hace falta.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande de América Latina: nada de valor a la vista, atención al celular en la calle, y preferir aplicaciones de transporte a parar un auto de noche. En la playa, no dejes nada solo mientras te metés al agua.",
        "El sol es más fuerte de lo que sugiere la sensación térmica, sobre todo con brisa de mar. El protector solar no es opcional y se consigue en cualquier farmacia, así que no hace falta cargarlo desde casa.",
        "Para el Amazonas y algunas zonas del centro y el norte suele recomendarse la vacuna contra la fiebre amarilla, y algunos países la exigen al volver. Consultalo con tiempo, porque necesita días para hacer efecto y no es algo que se resuelva en el aeropuerto.",
      ],
    },
  ],

  factsUpdatedAt: "2026-09-09",

  scores: [
    {
      dimension: "Naturaleza y paisajes",
      score: 9.5,
      rationale:
        "Selva amazónica, litoral atlántico, cataratas y el Pantanal. El rango es difícil de igualar.",
    },
    {
      dimension: "Playas",
      score: 10,
      rationale:
        "Miles de kilómetros de costa, con playa urbana de primer nivel dentro de la propia ciudad.",
    },
    {
      dimension: "Vida urbana y cultura",
      score: 9,
      rationale:
        "Música en vivo como parte de la vida cotidiana, no como programa especial. Río y São Paulo tiran para lados distintos y los dos valen.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Cocina regional muy variada y fruta tropical que no existe en otro lado. São Paulo sostiene además una escena de alta cocina propia.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Buena para quien llega con divisa fuerte, sin ser barato. Los vuelos internos son el gasto que descoloca.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "El tamaño obliga a volar entre regiones, y el portugués es una barrera real fuera del circuito turístico.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Una sola cotización y precios estables en el corto plazo. Es lo contrario del caso argentino.",
    },
  ],

  shines: [
    "Playa de verdad dentro de una ciudad grande, no a tres horas de auto.",
    "Música en vivo cualquier día de la semana, sin que sea un evento.",
    "Un invierno que sigue siendo temporada de playa.",
  ],

  costs: [
    "Los vuelos internos son caros y necesarios: el país no se recorre por tierra.",
    "El portugués no se resuelve con español, aunque se entienda a medias.",
    "El verano suma calor, humedad y lluvia al mismo tiempo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Manaos no pide lo mismo que Florianópolis. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "rio-de-janeiro",
      name: "Río de Janeiro",
      region: "Sudeste",
      tag: "Playa y morros",
      blurb:
        "Una ciudad grande metida entre el mar y la montaña, con playa urbana de verdad y cerros que se suben en la misma tarde. Es la base del planificador y el punto de entrada más común al país.",
      coords: [-22.9068, -43.1729],
      featured: true,
      image: null,
    },
    {
      id: "sao-paulo",
      name: "São Paulo",
      region: "Sudeste",
      tag: "Ciudad y cocina",
      blurb:
        "La contracara de Río: sin playa, con la mejor escena gastronómica y de museos del país, y una vida nocturna que no depende del clima. Llueve más de lo que la gente espera.",
      coords: [-23.5505, -46.6333],
      image: null,
    },
    {
      id: "salvador",
      name: "Salvador de Bahía",
      region: "Nordeste",
      tag: "Historia y tambores",
      blurb:
        "El centro histórico colonial más importante del país y el corazón de la cultura afrobrasileña. Calor parejo todo el año, con lluvias concentradas entre el otoño y el invierno local.",
      coords: [-12.9777, -38.5016],
      image: null,
    },
    {
      id: "recife",
      name: "Recife y Olinda",
      region: "Nordeste",
      tag: "Arrecifes y carnaval",
      blurb:
        "Dos ciudades pegadas y muy distintas: una moderna con piscinas naturales de arrecife, la otra colonial y en subida. El carnaval de Olinda se hace en la calle y sin entrada.",
      coords: [-8.0476, -34.877],
      image: null,
    },
    {
      id: "fernando-de-noronha",
      name: "Fernando de Noronha",
      region: "Nordeste",
      tag: "Archipiélago protegido",
      blurb:
        "Un parque nacional marino en pleno Atlántico, con cupo de visitantes y tasa ambiental diaria. Es el destino más caro del país y hay que decidirlo temprano, no agregarlo al final.",
      coords: [-3.8576, -32.4297],
      image: null,
    },
    {
      id: "foz-do-iguacu",
      name: "Foz do Iguaçu",
      region: "Sur",
      tag: "Cataratas",
      blurb:
        "El lado brasileño de las mismas cataratas que se ven desde Argentina, con la vista panorámica del conjunto. Se puede cruzar la frontera y ver los dos lados, que no son intercambiables.",
      coords: [-25.5163, -54.5854],
      image: null,
    },
    {
      id: "florianopolis",
      name: "Florianópolis",
      region: "Sur",
      tag: "Isla y surf",
      blurb:
        "Una isla con decenas de playas de carácter muy distinto, desde las de familia hasta las de surf. El verano se llena de argentinos; el resto del año está tranquila y más fresca.",
      coords: [-27.5954, -48.548],
      image: null,
    },
    {
      id: "manaos",
      name: "Manaos y el Amazonas",
      region: "Norte",
      tag: "Selva y río",
      blurb:
        "La puerta a la selva, con el encuentro de dos ríos de colores distintos y lodges río adentro. Calor y humedad altos todo el año; conviene revisar las vacunas antes de ir.",
      coords: [-3.119, -60.0217],
      image: null,
    },
    {
      id: "pantanal",
      name: "El Pantanal",
      region: "Centro-Oeste",
      tag: "Fauna y humedal",
      blurb:
        "El humedal más grande del mundo y el mejor lugar del continente para ver fauna, mucho más que el Amazonas. La temporada seca, de junio a octubre, concentra los animales y facilita verlos.",
      coords: [-17.6, -56.8],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Río no tiene un mes de abrigo: en el mes más fresco del año la máxima sigue arriba de los 25 grados. Lo que cambia mes a mes es cuánto calor y cuánta lluvia. Si podés elegir, apuntá a junio, julio, agosto o septiembre: es el invierno local, sigue siendo temporada de playa y llueve la mitad que en verano.",
    keyPoints: [
      "Las estaciones están invertidas respecto del hemisferio norte, pero el invierno de Río no es frío: es la temporada seca y templada.",
      "Se empaca parecido los doce meses. Lo que se agrega en verano no es abrigo, es tolerancia al calor y a la humedad.",
      "El país es enorme y estos números son de Río. El Amazonas, el Nordeste y el sur juegan otro partido y hay que sumarles lo suyo.",
      "La lluvia se concentra entre diciembre y marzo, y suele venir en chaparrones fuertes y cortos más que en días enteros de gris.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y que seque rápido, y algo de manga larga para el aire acondicionado y para el sol del mediodía. La humedad hace que se sienta bastante más caluroso de lo que marca el termómetro.",
      fresco:
        "Un buzo o polar y pantalón largo. En Río casi no aparece, pero sí en el sur del país y en las noches de invierno de São Paulo.",
      templado:
        "Lo mismo de siempre más una campera fina para la noche y para el aire acondicionado. En Río esto no es abrigo, es una capa.",
      frio: "No aplica en Río, pero sí si sumás el sur del país en invierno: ahí una campera de verdad deja de ser opcional.",
    },
    plug: {
      types: "Tipo N y tipo C",
      voltage: "127 V o 220 V, 60 Hz",
      note: "El enchufe tipo N es brasileño y no coincide con casi ningún otro país: si venís de afuera, adaptador seguro. El voltaje cambia según la ciudad, así que revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá ropa que seque rápido",
          body: "Con la humedad de Río, el algodón grueso tarda muchísimo en secarse. Las telas técnicas se lavan en el lavatorio y están listas al otro día.",
        },
        {
          title: "Reservá lugar para un par de ojotas",
          body: "Se usan todo el día y en todos lados, y comprarlas allá sale poco. Es de las pocas cosas que conviene sumar en destino en vez de traer.",
        },
        {
          title: "Sacale una foto a tus documentos",
          body: "Pasaporte, seguro y pasajes, guardados en el teléfono y en algún lado que no dependa del teléfono. Para la playa, salí con una copia y dejá el original en el alojamiento.",
        },
        {
          title: "Descargá el portugués para uso offline",
          body: "Ocupa poco y sirve justo cuando no hay señal. Fuera del circuito turístico el inglés no está tan extendido como se supone.",
        },
        {
          title: "Llevá una bolsa impermeable chica",
          body: "Para el teléfono y la plata en la playa, y para los chaparrones de verano, que llegan de golpe. Es lo que más se agradece por lo poco que pesa.",
        },
        {
          title: "Empacá la noche anterior, no la mañana de salida",
          body: "Te da tiempo de revisar la lista con la cabeza fría. Casi todo lo que se olvida se olvida apurado.",
        },
      ],
      donts: [
        {
          title: "No lleves ropa de abrigo pesada",
          body: "Salvo que sumes el sur del país en invierno, en Río no la vas a usar ni una vez. Es lo que más volumen ocupa y menos se estrena.",
        },
        {
          title: "No lleves protector solar desde casa",
          body: "Se consigue en cualquier farmacia y a precio local. Es líquido, pesa y es de lo que más riesgo tiene de abrirse en la valija.",
        },
        {
          title: "No lleves demasiados pares de zapatos",
          body: "Con unas ojotas, un par de zapatillas cómodas y algo liviano para salir de noche alcanza para todo el viaje.",
        },
        {
          title: "No salgas a la playa con todo encima",
          body: "Ni el pasaporte, ni todas las tarjetas, ni el reloj. Llevá lo justo y dejá el resto en el alojamiento: es el consejo local, no una precaución de extranjero.",
        },
        {
          title: "No des por sentado que el enchufe entra",
          body: "El tipo N brasileño es particular y no coincide con casi ningún otro país. Sin adaptador te quedás sin cargar.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Si la valija se demora, el viaje sigue igual.",
        },
      ],
    },
    checklists: [
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "warn",
          title: "El enchufe brasileño es distinto a todos",
          body: "El tipo N tiene tres patas redondas en línea y no acepta enchufes de otros países sin adaptador. Además el voltaje cambia según la ciudad: 127 V en Río y São Paulo, 220 V en buena parte del Nordeste y el sur.",
        },
        summary: "Lo que conviene llevar cargado y con qué enchufarlo",
        items: [
          "Adaptador de enchufe tipo N",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano — las aerolíneas no las aceptan despachadas",
          "Bolsa o funda impermeable para el teléfono en la playa",
          "Auriculares",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "El sol pega más de lo que se siente",
          body: "Con brisa de mar la sensación engaña y la quemadura llega igual. Repetí el protector después de cada baño, y evitá el sol del mediodía en verano.",
        },
        summary: "Lo específico de un destino de playa urbana",
        items: [
          "Traje de baño, dos si vas más de unos días: uno seco siempre",
          "Ojotas — o compralas allá, que salen poco",
          "Gorro o gorra y anteojos de sol",
          "Toalla liviana de microfibra, si tu alojamiento no presta",
          "Bolsa chica para llevar solo lo justo a la arena",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Consultá las vacunas con tiempo",
          body: "Para el Amazonas y algunas zonas del centro y el norte suele recomendarse la fiebre amarilla, y algunos países la exigen al volver. Necesita días para hacer efecto: no se resuelve en el aeropuerto.",
        },
        summary: "Botiquín básico y qué averiguar antes de salir",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos, imprescindible en el norte y en zonas de selva",
          "Analgésico y antiácido",
          "Sales de rehidratación: con calor y humedad se deshidrata más rápido de lo que parece",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "aseo",
        title: "Artículos de aseo",
        notice: {
          tone: "info",
          title: "Casi todo se consigue allá",
          body: "Farmacias y supermercados tienen la góndola completa y a precio local. Llevá lo justo para los primeros días y comprá el resto al llegar.",
        },
        summary: "Lo mínimo, en envases de viaje",
        items: [
          "Cepillo y pasta de dientes",
          "Desodorante",
          "Shampoo y jabón en envase chico, o en barra para evitar líquidos",
          "Después de sol: se usa más de lo previsto",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Protector solar de factor alto y remera con protección UV para el agua",
          "Entretenimiento offline para los vuelos internos, que son largos",
          "Botella reutilizable: con este calor se toma mucha más agua de la que uno calcula",
        ],
      },
    ],
    avoid: [
      {
        leave: "La campera de abrigo",
        why: "En Río no hay un mes que la justifique: en el más fresco del año la máxima sigue arriba de los 25 grados.",
        instead: "Una campera fina para el aire acondicionado y las noches.",
      },
      {
        leave: "Vaqueros pesados",
        why: "Con esta humedad son incómodos de usar y tardan muchísimo en secar si se mojan.",
        instead: "Un pantalón liviano y, si acaso, un jean fino.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Río es informal incluso de noche, y muy pocos lugares piden algo más que estar prolijo.",
        instead: "Algo liviano y cómodo que sirva para salir.",
      },
      {
        leave: "Muchas remeras de algodón grueso",
        why: "Retienen la humedad, tardan en secar y se usan una sola vez por el calor.",
        instead: "Menos remeras, de secado rápido, lavadas en el lavatorio.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa un volumen enorme y la mayoría de los alojamientos ya te dan una.",
        instead: "Una toalla de microfibra, o una canga comprada allá.",
      },
      {
        leave: "El protector solar en envase grande",
        why: "Pesa, es líquido y se consigue en cualquier farmacia a precio local.",
        instead:
          "Un envase chico para el primer día y comprar el resto al llegar.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan, y en la calle y la playa son exactamente lo que conviene no exhibir.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Casi con seguridad sí. El tipo N brasileño no coincide con los enchufes de casi ningún otro país. Además el voltaje cambia según la ciudad, así que revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir a Río?",
        answer:
          "De junio a septiembre, que es el invierno local: menos lluvia, menos calor y días que siguen siendo de playa. El verano es más intenso y más caro, y es cuando caen el Año Nuevo y el Carnaval.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "En las ciudades, casi. Brasil está muy bancarizado y se acepta tarjeta incluso para montos chicos. Aun así llevá algo de efectivo para playas, feiras y pueblos chicos.",
      },
      {
        question: "¿Sirve el español o necesito portugués?",
        answer:
          "Se entiende a medias leyendo y bastante menos escuchando. Nadie espera que lo hables bien, pero unas pocas frases en portugués cambian el tono de cualquier interacción, y el inglés no está tan extendido fuera del circuito turístico.",
      },
      {
        question: "¿De qué tamaño conviene la valija?",
        answer:
          "Más chica de lo que pensás. Sin ropa de abrigo y con prendas livianas, un carry-on grande alcanza para dos semanas si lavás en el camino.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En las grandes ciudades es tratada, pero mucha gente toma agua filtrada o embotellada por el sabor y por el estado de las cañerías. Preguntá en el alojamiento antes de llenar la botella.",
      },
      {
        question: "¿Qué llevo a la playa?",
        answer:
          "Lo mínimo: algo de efectivo, una copia del documento, el teléfono en una bolsa impermeable y protector solar. Nada de valor, y no dejes las cosas solas mientras te metés al agua.",
      },
      {
        question: "¿Necesito vacunas?",
        answer:
          "Para Río no suele pedirse nada especial. Para el Amazonas y algunas zonas del centro y el norte suele recomendarse la fiebre amarilla, y algunos países la exigen al volver. Consultalo con semanas de anticipación.",
      },
    ],
  },
};
