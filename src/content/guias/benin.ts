import type { DestinationGuide } from "./types";

/**
 * Guía de Benín.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el vudú como religión reconocida, con feriado
 * nacional, que es el dato de su portada. Pide la fiebre amarilla a todos,
 * como Togo. La base es Cotonú y no Porto Novo, la capital, como Abiyán en
 * Costa de Marfil: es la ciudad más grande y la del aeropuerto. Ninguna ciudad
 * está en el norte —el Atacora y el Alibori, con los parques de la Pendjari y
 * W—, donde las recomendaciones de viaje piden no ir, y la guía lo dice como
 * dato de entrada.
 */
export const benin: DestinationGuide = {
  slug: "benin",
  country: "Benín",
  subregion: "África Occidental",
  subhead:
    "La cuna del vudú: el templo de las pitones y la ruta de los esclavos de Ouidah, los palacios de los reyes de Dahomey en Abomey, Ganvié sobre el lago Nokoué y la Porto Novo afrobrasileña.",

  image: null,

  highlights: [
    {
      value: "Vudú",
      label: "con feriado nacional: la gran fiesta es en enero, en Ouidah",
      note: "El vudú nació en esta región y es una religión reconocida. El 10 de enero es feriado, y Ouidah se llena de ceremonias, danzas y visitantes. El resto del año, el templo de las pitones y el bosque sagrado de Kpassè se visitan con guía.",
    },
    {
      value: "Ganvié",
      label: "un pueblo entero sobre pilotes, en el lago Nokoué",
      note: "Casas, escuelas y mercado sobre el agua, a los que se llega en piragua o en lancha desde Abomey-Calavi, a media hora de Cotonú.",
    },
    {
      value: "Abomey",
      label: "los palacios de los reyes de Dahomey, patrimonio de la humanidad",
      note: "Los palacios de barro del reino que dominó la región durante casi tres siglos, con bajorrelieves que cuentan su historia.",
    },
    {
      value: "Ruta",
      label: "de los esclavos, de Ouidah a la Puerta del No Retorno",
      note: "El camino que va del mercado donde se vendía a las personas hasta la playa de donde partían los barcos, con memoriales en el trayecto.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Benín",
      body: [
        "Los pasaportes de fuera de África necesitan visa: la electrónica se tramita online antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Benín pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes.",
        "Ninguna ciudad del planificador está en el norte —el Atacora y el Alibori, con los parques de la Pendjari y W—, donde las recomendaciones de viaje piden no ir. Antes de viajar, revisá las de tu país.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Benín",
      body: [
        "La moneda es el franco CFA de África Occidental, atado al euro: el mismo de Togo y de Senegal.",
        "La tarjeta funciona en hoteles y en algunos restaurantes de Cotonú; en el resto, efectivo o pago por celular, que usa todo el país. Hay cajeros en las ciudades.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo y dos lluvias",
      body: [
        "Calor húmedo todo el año en la costa, con dos temporadas de lluvia: la larga, de abril a julio, con junio como el mes más lluvioso, y la corta, en septiembre y octubre. En agosto llueve poco.",
        "En Cotonú, las máximas van de veintiocho a treinta y dos grados, y las noches no bajan de veintitrés.",
        "Tierra adentro, en Abomey, Dassa y Savalou, la pausa de agosto casi no se nota, y de diciembre a febrero sopla el harmattan, el viento del Sahara, con polvo y cielos blancos.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: temporada seca, la mejor para recorrer, aunque con el polvo del harmattan.",
        "La fiesta del vudú es en enero, con el feriado del 10: si vas, reservá en Ouidah con tiempo. En agosto, la costa tiene una pausa seca.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Benín",
      body: [
        "En Cotonú hay taxis, zémidjans —las motos taxi, de camisa amarilla— y aplicaciones como Gozem.",
        "Entre las ciudades hay buses y taxis colectivos. Ouidah, Porto Novo y el embarcadero de Ganvié están a menos de una hora de Cotonú, y Abomey, a unas tres.",
        "En las rutas hay controles: llevá el pasaporte. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Los palacios reales de Abomey, la ruta de los esclavos de Ouidah y la Porto Novo afrobrasileña.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Pâte de maíz con salsas, pescado del lago, akassa y el sodabi, el licor de palma.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale: "Lagunas, pueblos sobre el agua y playas de palmeras.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale: "Grand-Popo y la costa de Ouidah; el mar es fuerte.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale: "Comer y moverse es barato; dormir bien en Cotonú, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale: "Distancias cortas en el sur, buenas rutas y la visa online.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "El vudú, vivo y abierto al visitante.",
    "Abomey, Ouidah y la historia de Dahomey.",
    "Ganvié y los pueblos del agua.",
  ],

  costs: [
    "Visa y vacuna, que se tramitan antes.",
    "Un mar fuerte para nadar.",
    "El norte y sus parques, fuera del planificador.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Cotonú en junio que Abomey o Savalou. Los precios están en francos CFA y son órdenes de magnitud; un hotel de playa en Grand-Popo o en Ouidah puede costar bastante más.",

  places: [
    {
      id: "cotonu",
      name: "Cotonú",
      region: "Litoral",
      tag: "La ciudad grande",
      blurb:
        "La ciudad más grande y la del aeropuerto, entre el mar y el lago Nokoué: el mercado de Dantokpa, uno de los más grandes de África Occidental, la música en vivo y los maquis. Es la base del planificador: calor húmedo todo el año, con junio como el mes más lluvioso.",
      coords: [6.3654, 2.4183],
      featured: true,
      image: null,
    },
    {
      id: "ouidah",
      name: "Ouidah (ruta de los esclavos)",
      region: "Atlántico",
      tag: "La ciudad del vudú",
      blurb:
        "El templo de las pitones, el bosque sagrado de Kpassè, el museo en el viejo fuerte portugués y la ruta de los esclavos hasta la Puerta del No Retorno, frente al mar.",
      coords: [6.3631, 2.0851],
      image: null,
    },
    {
      id: "ganvie",
      name: "Ganvié (pueblo lacustre)",
      region: "Atlántico",
      tag: "Sobre el agua",
      blurb:
        "Un pueblo de pescadores sobre pilotes en el lago Nokoué, con casas, mercado y escuela sobre el agua. Se llega en lancha o en piragua desde Abomey-Calavi.",
      coords: [6.4667, 2.4167],
      image: null,
    },
    {
      id: "porto-novo",
      name: "Porto Novo",
      region: "Ouémé",
      tag: "La capital",
      blurb:
        "La capital, con casas y una gran mezquita de estilo brasileño, que levantaron los descendientes de esclavos vueltos de Brasil, el museo del palacio real y el jardín de las plantas.",
      coords: [6.4969, 2.6289],
      image: null,
    },
    {
      id: "abomey",
      name: "Abomey (palacios reales)",
      region: "Zou",
      tag: "Los reyes de Dahomey",
      blurb:
        "La capital del antiguo reino de Dahomey, con los palacios reales, patrimonio de la humanidad, y talleres de telas con apliques que cuentan la historia de cada rey.",
      coords: [7.1829, 1.9912],
      image: null,
    },
    {
      id: "grand-popo",
      name: "Grand-Popo",
      region: "Mono",
      tag: "Playa y río",
      blurb:
        "Un pueblo de pescadores entre el mar y el río Mono, con playas largas de palmeras y paseos en piragua hasta la Boca del Rey, donde el río llega al mar.",
      coords: [6.2833, 1.8167],
      image: null,
    },
    {
      id: "possotome",
      name: "Possotomé (lago Ahémé)",
      region: "Mono",
      tag: "El lago",
      blurb:
        "Un pueblo a orillas del lago Ahémé, conocido por su agua mineral, con paseos en piragua y pueblos de pescadores alrededor.",
      coords: [6.507, 1.97],
      image: null,
    },
    {
      id: "dassa-zoume",
      name: "Dassa-Zoumé (las colinas)",
      region: "Collines",
      tag: "Las colinas",
      blurb:
        "La ciudad de las cuarenta y una colinas, con la gruta mariana de Arigbo, que recibe una gran peregrinación en agosto.",
      coords: [7.75, 2.1833],
      image: null,
    },
    {
      id: "savalou",
      name: "Savalou",
      region: "Collines",
      tag: "La fiesta del ñame",
      blurb:
        "Una ciudad de colinas del centro, con el palacio del rey, el mercado y la fiesta del ñame en agosto. Lo más caluroso del planificador en febrero y marzo.",
      coords: [7.9281, 1.9756],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Benín, ropa liviana y fresca, sombrero y protector: hace calor húmedo todo el año. De abril a julio, algo impermeable. Repelente siempre, el certificado de la fiebre amarilla en el bolso de mano y un adaptador universal, si tu país usa otro enchufe.",
    keyPoints: [
      "Vacuna de la fiebre amarilla obligatoria para todos los viajeros.",
      "Visa electrónica antes de viajar para los pasaportes de fuera de África.",
      "Temporada seca de noviembre a marzo; lluvias fuertes de abril a julio en la costa.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, de algodón o lino, sombrero, protector y repelente. Algo impermeable de abril a julio.",
      templado: "Ropa liviana y un buzo fino para el aire acondicionado.",
      fresco:
        "Un buzo liviano para las noches del harmattan y el aire acondicionado de los buses.",
      frio: "No hace frío en Benín: un buzo liviano alcanza.",
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
          title: "Tramitá la visa electrónica antes de viajar",
          body: "Sale online, y conviene llevarla impresa.",
        },
        {
          title: "Visitá Ouidah con guía",
          body: "El templo de las pitones, el bosque sagrado y la ruta de los esclavos se entienden mejor con alguien que los cuente.",
        },
        {
          title: "Subite a una piragua en Ganvié",
          body: "Salen de Abomey-Calavi, a media hora de Cotonú.",
        },
        {
          title: "Probá la pâte rouge",
          body: "Pasta de maíz con salsa de tomate y palma, el plato de todos los días.",
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
          title: "No fotografíes ceremonias vudú sin permiso",
          body: "Preguntá antes: en muchos templos y conventos no se puede.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "La costa tiene corrientes muy fuertes, que arrastran hasta a los buenos nadadores.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o del aeropuerto.",
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
          "Algo impermeable de abril a julio",
        ],
      },
      {
        id: "recorrer",
        title: "Para el vudú y los pueblos",
        notice: null,
        summary: "Ouidah, Abomey y Ganvié",
        items: [
          "Ropa que cubra hombros y rodillas para los templos",
          "Billetes chicos para las entradas y los guías",
          "Calzado cómodo y fácil de sacar",
          "Una bolsa estanca para la piragua",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa y fiebre amarilla",
          body: "Los pasaportes de fuera de África necesitan la visa electrónica, tramitada antes, y todos los viajeros necesitan el certificado de la fiebre amarilla.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa electrónica, impresa",
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
        why: "En los mercados y en las motos casi nunca hay vuelto.",
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
        why: "En las motos y en los taxis colectivos hay poco lugar.",
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
        question: "¿Necesito visa para entrar a Benín?",
        answer:
          "Los pasaportes de fuera de África la necesitan: la electrónica se tramita online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer:
          "Sí, para todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes de llegar.",
      },
      {
        question: "¿Cuándo es la fiesta del vudú?",
        answer:
          "En enero, con el feriado nacional del 10. La celebración más grande es en Ouidah.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a marzo, la temporada seca. De abril a julio llueve mucho en la costa.",
      },
      {
        question: "¿Cuál es la capital?",
        answer:
          "Porto Novo es la capital oficial, pero Cotonú es la ciudad más grande y donde está casi todo, el aeropuerto incluido.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés, que es el oficial; en la calle, el fon y el yoruba en el sur.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada o filtrada.",
      },
    ],
  },
};
