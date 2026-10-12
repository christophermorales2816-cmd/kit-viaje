import type { DestinationGuide } from "./types";

/**
 * Guía de Costa de Marfil.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el segundo país del franco CFA, la misma moneda que
 * Senegal, y otra vez la vacuna de la fiebre amarilla obligatoria para todos,
 * como en Ghana. La costa tiene dos temporadas de lluvia, con junio como el
 * mes más mojado: el bucket de lluvia (spec, 14.12) se activa en Abiyán en
 * mayo y junio. El dato de la portada es la basílica de Yamusukro.
 * La base es Abiyán y no Yamusukro, la capital, como Dubái en Emiratos: es la
 * ciudad más grande y la del aeropuerto. Ninguna ciudad está en el norte, sobre
 * las fronteras con Malí y Burkina Faso, donde las recomendaciones de viaje
 * piden no ir, y la guía lo dice como dato de entrada.
 */
export const costaDeMarfil: DestinationGuide = {
  slug: "costa-de-marfil",
  country: "Costa de Marfil",
  subregion: "África Occidental",
  subhead:
    "Las lagunas y los rascacielos de Abiyán, la vieja capital colonial de Grand-Bassam, las playas de Assinie y la basílica de Yamusukro. Calor húmedo todo el año y la comida de los maquis.",

  image: null,

  highlights: [
    {
      value: "Basílica",
      label: "entre las iglesias más grandes del mundo, en Yamusukro",
      note: "Nuestra Señora de la Paz, inspirada en San Pedro de Roma, con una cúpula enorme y vitrales en medio de la sabana. Se visita con guía.",
    },
    {
      value: "Vacuna",
      label: "contra la fiebre amarilla, obligatoria para entrar",
      note: "Costa de Marfil pide el certificado internacional a todos los viajeros, vengan de donde vengan. Tiene que estar aplicada al menos diez días antes de llegar.",
    },
    {
      value: "Grand-Bassam",
      label: "la primera capital, patrimonio de la humanidad",
      note: "Casas coloniales gastadas por el tiempo frente a una playa larga, a menos de una hora de Abiyán.",
    },
    {
      value: "Attiéké",
      label: "la mandioca rallada que acompaña todo",
      note: "Con pescado a la parrilla, cebolla y picante, es el plato de todos los días en los maquis, los restaurantes populares al aire libre.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Costa de Marfil",
      body: [
        "Los pasaportes de fuera de África Occidental necesitan visa: se tramita online antes de viajar y se completa al llegar al aeropuerto de Abiyán. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Costa de Marfil pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros, vengan de donde vengan. La vacuna tiene que estar aplicada al menos diez días antes.",
        "Ninguna ciudad del planificador está en el norte, sobre las fronteras con Malí y Burkina Faso, donde las recomendaciones de viaje piden no ir.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Costa de Marfil",
      body: [
        "La moneda es el franco CFA de África Occidental, atado al euro: el mismo de Senegal y de otros seis países de la región.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados de Abiyán; en el resto, efectivo o pago por celular —Wave, Orange Money—, que usa todo el país.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo y dos lluvias",
      body: [
        "Costa de Marfil está cerca del ecuador: calor húmedo todo el año en la costa, con dos temporadas de lluvia. La larga va de abril a julio, con junio como el mes más lluvioso; la corta, de octubre a noviembre.",
        "En Abiyán, las máximas van de veintisiete a treinta y dos grados, y las noches no bajan de veintidós.",
        "Hacia el centro, en Yamusukro y Bouaké, el clima es más seco, y de diciembre a febrero sopla el harmattan, el viento del Sahara, con polvo y cielos blancos.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a marzo: temporada seca en la costa, la mejor para la playa y para recorrer, aunque con el polvo del harmattan.",
        "De mayo a julio llueve mucho en la costa, con calles que se inundan en Abiyán. Agosto y septiembre son más secos y algo más frescos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Costa de Marfil",
      body: [
        "En Abiyán hay aplicaciones como Yango y Uber, taxis naranjas con reloj, y gbakas y woro-woros, las combis y los taxis colectivos. Entre las ciudades hay buses cómodos, y una autopista hasta Yamusukro.",
        "A las playas del este, Grand-Bassam y Assinie, se llega por ruta en una o dos horas; al oeste, a San-Pédro y Sassandra, el camino es bastante más largo.",
        "Las precauciones son las de una ciudad grande: el teléfono guardado en la calle y, de noche, siempre en auto. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Grand-Bassam, la primera capital colonial, patrimonio de la humanidad, y la basílica de Yamusukro.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Attiéké, alloco, kedjenou y pescado a la parrilla en los maquis.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale: "Lagunas, playas con palmeras y la selva del oeste.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Assinie y las playas de San-Pédro y Sassandra; el mar es fuerte.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Comer en los maquis es barato; dormir en Abiyán, caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Abiyán está bien conectada y hay buenos buses; fuera de las rutas principales, todo es lento.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "La comida de los maquis.",
    "La vida y la música de Abiyán.",
    "Playas y lagunas a pocas horas de la ciudad.",
  ],

  costs: [
    "Visa y vacuna, que se tramitan antes.",
    "Lluvias fuertes de mayo a julio.",
    "Abiyán, cara para dormir.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Abiyán en junio que Yamusukro o Assinie. Los precios están en francos CFA y son órdenes de magnitud; un hotel de playa en Assinie puede costar varias veces más.",

  places: [
    {
      id: "abiyan",
      name: "Abiyán",
      region: "Abiyán",
      tag: "La ciudad de las lagunas",
      blurb:
        "Rascacielos sobre la laguna Ébrié en el Plateau, los mercados de Treichville y Adjamé, el bosque del Banco en plena ciudad y los maquis de Cocody. Es la base del planificador: calor húmedo todo el año, con junio como el mes más lluvioso.",
      coords: [5.36, -4.0083],
      featured: true,
      image: null,
    },
    {
      id: "grand-bassam",
      name: "Grand-Bassam",
      region: "Sud-Comoé",
      tag: "La primera capital",
      blurb:
        "La primera capital de la colonia, con casas de época frente al mar y una playa larga, a menos de una hora de Abiyán. Patrimonio de la humanidad.",
      coords: [5.2, -3.7333],
      image: null,
    },
    {
      id: "assinie",
      name: "Assinie",
      region: "Sud-Comoé",
      tag: "Entre la laguna y el mar",
      blurb:
        "Una lengua de arena entre la laguna y el océano, con hoteles de playa adonde se escapa Abiyán los fines de semana.",
      coords: [5.1333, -3.2833],
      image: null,
    },
    {
      id: "jacqueville",
      name: "Jacqueville",
      region: "Grands-Ponts",
      tag: "Playa y laguna",
      blurb:
        "Playas tranquilas del otro lado de la laguna, a poco más de una hora de Abiyán, con casas coloniales y pueblos de pescadores.",
      coords: [5.2, -4.4167],
      image: null,
    },
    {
      id: "grand-lahou",
      name: "Grand-Lahou",
      region: "Grands-Ponts",
      tag: "Donde el Bandama llega al mar",
      blurb:
        "Un pueblo entre la laguna y la desembocadura del río Bandama, con playas vacías y paseos en piragua por los manglares.",
      coords: [5.1333, -5.0167],
      image: null,
    },
    {
      id: "yamusukro",
      name: "Yamusukro",
      region: "Yamusukro",
      tag: "La basílica",
      blurb:
        "La capital, con la basílica de Nuestra Señora de la Paz, una de las iglesias más grandes del mundo, y los cocodrilos del lago del palacio presidencial.",
      coords: [6.8276, -5.2893],
      image: null,
    },
    {
      id: "san-pedro",
      name: "San-Pédro",
      region: "San-Pédro",
      tag: "Playa del oeste",
      blurb:
        "El puerto del cacao y, cerca, playas como Monogaga, con olas y arena dorada. Más lluvioso que Abiyán.",
      coords: [4.7485, -6.6363],
      image: null,
    },
    {
      id: "sassandra",
      name: "Sassandra",
      region: "Gbôklé",
      tag: "Pueblo de pescadores",
      blurb:
        "Un pueblo de pescadores con piraguas de colores, la desembocadura del río Sassandra y playas largas casi sin nadie.",
      coords: [4.95, -6.0833],
      image: null,
    },
    {
      id: "bouake",
      name: "Bouaké",
      region: "Gbêkê",
      tag: "El centro del país",
      blurb:
        "La segunda ciudad, en la sabana del centro, con su gran mercado y el carnaval de marzo o abril. Más seca que la costa, con el harmattan de diciembre a febrero.",
      coords: [7.6899, -5.0303],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Costa de Marfil, ropa liviana y fresca, sombrero y protector: hace calor húmedo todo el año. De mayo a julio, algo impermeable. Repelente siempre, el certificado de la fiebre amarilla en el bolso de mano y un adaptador universal, si tu país usa otro enchufe.",
    keyPoints: [
      "Vacuna de la fiebre amarilla obligatoria para todos los viajeros.",
      "Calor húmedo todo el año; lluvias fuertes de mayo a julio en la costa.",
      "La visa se tramita online antes de viajar y se completa al llegar.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, de algodón o lino, sombrero, protector y repelente. Algo impermeable de mayo a julio.",
      templado: "Ropa liviana y un buzo fino para el aire acondicionado.",
      fresco:
        "Un buzo liviano para el aire acondicionado de los buses y de los hoteles.",
      frio: "No hace frío en Costa de Marfil: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipos C y E",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas, como en buena parte de Europa. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes de llegar, y llevá el certificado en el bolso de mano.",
        },
        {
          title: "Tramitá la visa online antes de viajar",
          body: "El trámite se hace antes, y la visa se completa al llegar al aeropuerto.",
        },
        {
          title: "Comé en los maquis",
          body: "Los restaurantes populares al aire libre son el mejor lugar para el attiéké y el pescado a la parrilla.",
        },
        {
          title: "Escapate a Grand-Bassam",
          body: "Está a menos de una hora de Abiyán y junta historia y playa.",
        },
        {
          title: "Pagá con el celular",
          body: "Con una línea local, Wave y Orange Money funcionan en todo el país.",
        },
        {
          title: "Elegí pagar en francos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el certificado de la fiebre amarilla",
          body: "Te lo piden al llegar, vengas de donde vengas.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "La costa tiene corrientes muy fuertes, que arrastran hasta a los buenos nadadores.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o aeropuertos: está prohibido.",
        },
        {
          title: "No camines de noche por Abiyán",
          body: "Moverse en taxi o con aplicación es la costumbre de todos.",
        },
        {
          title: "No te bañes en lagunas ni ríos",
          body: "En muchos hay bilharzia.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "calor",
        title: "Para el calor",
        notice: {
          tone: "info",
          title: "Humedad todo el año",
          body: "Calor húmedo de día y de noche: ropa que se seque rápido y agua siempre a mano.",
        },
        summary: "Sol y humedad",
        items: [
          "Ropa liviana de algodón o lino",
          "Sombrero, lentes de sol y protector",
          "Una botella con filtro",
          "Algo impermeable de mayo a julio",
        ],
      },
      {
        id: "playa",
        title: "Para la playa",
        notice: null,
        summary: "Assinie, Grand-Bassam y el oeste",
        items: [
          "Traje de baño",
          "Protector solar alto",
          "Ojotas",
          "Algo para cubrirse fuera de la playa",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa y fiebre amarilla",
          body: "Los pasaportes de fuera de África Occidental necesitan visa, tramitada online antes, y todos los viajeros necesitan el certificado de la fiebre amarilla.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "El comprobante de la visa tramitada online",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año, con más riesgo en las temporadas de lluvia. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Billetes grandes",
        why: "En los mercados y en los woro-woros casi nunca hay vuelto.",
        instead: "Billetes chicos y monedas.",
      },
      {
        leave: "Dólares para pagar",
        why: "Casi nadie los acepta: todo se paga en francos CFA.",
        instead: "Francos CFA, o euros para cambiar.",
      },
      {
        leave: "Protector solar solo para la playa",
        why: "El sol quema también en la ciudad y en los días nublados.",
        instead: "Protector todos los días.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los taxis colectivos y en los buses hay poco lugar.",
        instead: "Una mochila o un bolso mediano.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Costa de Marfil?",
        answer:
          "Los pasaportes de fuera de África Occidental la necesitan: se tramita online antes de viajar y se completa al llegar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer:
          "Sí, para todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes de llegar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a marzo, la temporada seca en la costa. De mayo a julio llueve mucho.",
      },
      {
        question: "¿Cuál es la capital?",
        answer:
          "Yamusukro es la capital oficial, pero Abiyán es la ciudad más grande y donde está casi todo, el aeropuerto incluido.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés, que es el oficial y se habla en todos lados; en la calle, también dioula y otros idiomas locales.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: son los de dos patas redondas, a 220 V. Un adaptador universal resuelve todo.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada o filtrada.",
      },
    ],
  },
};
