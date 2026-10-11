import type { DestinationGuide } from "./types";

/**
 * Guía de Marruecos.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: es el primero de África, y el que más rompe la idea
 * de que África es calor. En el Alto Atlas las noches de enero bajan de cero y
 * en el desierto el invierno es frío de noche. El dírham es una moneda cerrada:
 * se consigue allá y lo que sobra se cambia antes de salir. La base es
 * Marrakech y no Rabat, como Dubái en Emiratos: es por donde entra y donde pasa
 * más días casi todo el que viaja. Ninguna ciudad del planificador está en el
 * Sahara Occidental (spec, 15.2).
 */
export const marruecos: DestinationGuide = {
  slug: "marruecos",
  country: "Marruecos",
  subregion: "África del Norte",
  subhead:
    "Las medinas de Fez y Marrakech, las dunas del Sahara, las kasbas del sur, el pueblo azul de Chefchaouen y el Atlántico en Essaouira. Té de menta, zocos y un país mucho más frío en invierno de lo que se espera.",

  image: null,

  highlights: [
    {
      value: "Dunas",
      label: "del Sahara a un día de ruta de Marrakech",
      note: "En Merzouga se duerme en campamentos entre dunas de más de cien metros. Días de calor y noches frías: de noviembre a marzo, abrigo de verdad.",
    },
    {
      value: "Medinas",
      label: "las ciudades amuralladas de Fez y Marrakech",
      note: "Laberintos de callejones, zocos, curtiembres y riads con patio. La de Fez, patrimonio de la humanidad, se recorre entera a pie: los autos no entran.",
    },
    {
      value: "Bajo cero",
      label: "las noches de enero en el Alto Atlas",
      note: "Imlil, la puerta del Toubkal, está a casi 1.800 metros. En invierno hay nieve en las cumbres y hace falta abrigo, aunque Marrakech esté a una hora y media.",
    },
    {
      value: "Dírham",
      label: "una moneda que no sale del país",
      note: "Se cambia allá —en el aeropuerto, bancos o casas de cambio— y lo que sobra se cambia antes de irse. Guardá los comprobantes.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Marruecos",
      body: [
        "Muchos pasaportes sudamericanos entran sin visa por turismo; otros la tramitan antes, en algunos casos como visa electrónica. Verificá el tuyo antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra. Tené a mano la dirección del primer alojamiento y el pasaje de salida del país.",
        "El Sahara Occidental es un territorio en disputa que Marruecos administra en su mayor parte. Ninguna de las ciudades del planificador está ahí.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Marruecos",
      body: [
        "La moneda es el dírham marroquí, y es cerrada: no se consigue fuera del país, y sacarlo o entrarlo está limitado a montos chicos. Se cambia al llegar —en el aeropuerto, bancos y casas de cambio— o se saca del cajero.",
        "La tarjeta funciona en hoteles, riads y restaurantes de las ciudades; en los zocos, los taxis y los pueblos, efectivo. En los mercados, el precio se negocia.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dírhams: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Cuatro climas en un país",
      body: [
        "Marruecos es hemisferio norte. La costa atlántica —Casablanca, Essaouira— es suave todo el año, con viento. El norte, con Tánger y Chefchaouen, tiene inviernos lluviosos.",
        "Marrakech y Fez son secas: veranos de casi cuarenta grados e inviernos templados de día y frescos de noche.",
        "El Alto Atlas y el desierto son otra cosa. En Imlil, las noches de enero bajan de cero; en Merzouga, el verano pasa los cuarenta grados y las noches de invierno son frías.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Marzo a mayo y septiembre a noviembre: templado en las ciudades imperiales y buen momento para el desierto. Es la temporada más llena.",
        "En verano, la costa es la mejor opción y el interior es muy caluroso. En invierno, las ciudades son agradables de día y frías de noche, y el Atlas puede tener nieve.",
        "El Ramadán cambia los horarios de comercios y restaurantes; la fecha se corre cada año. El planificador usa el clima histórico de cada ciudad, no un pronóstico.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Marruecos",
      body: [
        "Entre Tánger, Rabat, Casablanca, Fez y Marrakech hay tren; el de alta velocidad une Tánger con Casablanca en pocas horas. Para el resto, colectivos de larga distancia cómodos, como CTM y Supratours.",
        "Para el desierto y el Atlas, excursión organizada o auto de alquiler. En las ciudades, petit taxis con taxímetro: pedí que lo pongan o acordá el precio antes de subir.",
        "Las precauciones son las de cualquier destino turístico: los falsos guías que se ofrecen a llevarte por la medina, y la mochila cerrada en los zocos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-11",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "Medinas medievales, la Kutubia, la mezquita Hassan II, las ruinas romanas de Volubilis y las kasbas del sur.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Tajines, el cuscús de los viernes, harira, pastela y el té de menta a toda hora.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Las dunas del Sahara, las gargantas del Todra, el Alto Atlas y la costa atlántica.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "El Atlántico tiene viento y agua fría; el Mediterráneo del norte es mejor para nadar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Riads con encanto y comida barata; las excursiones al desierto se negocian.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Buenos trenes y colectivos entre ciudades; el desierto y el Atlas, en excursión o en auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Los precios son estables; el dírham es una moneda cerrada y se cambia allá.",
    },
  ],

  shines: [
    "El Sahara, a un par de días de las ciudades imperiales.",
    "Medinas que se recorren a pie, con riads para dormir adentro.",
    "Comida barata y muy buena.",
  ],

  costs: [
    "Vendedores y falsos guías insistentes en las medinas.",
    "Calor fuerte en verano en el interior y en el desierto.",
    "Noches frías en invierno en el Atlas y en el desierto.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Marrakech en enero que Imlil o Merzouga. Los precios están en dírhams y son órdenes de magnitud; en los zocos, todo se negocia.",

  places: [
    {
      id: "marrakech",
      name: "Marrakech",
      region: "Marrakech-Safí",
      tag: "La plaza Jemaa el-Fna",
      blurb:
        "La plaza Jemaa el-Fna, los zocos, la Kutubia, los palacios y el jardín Majorelle. Es la base del planificador: inviernos templados de día y frescos de noche, veranos de casi cuarenta grados.",
      coords: [31.6295, -7.9811],
      featured: true,
      image: null,
    },
    {
      id: "fez",
      name: "Fez",
      region: "Fez-Mequinez",
      tag: "La medina medieval",
      blurb:
        "La medina de Fez el-Bali, patrimonio de la humanidad, con sus curtiembres, madrasas y miles de callejones. Inviernos frescos y lluviosos, veranos muy calurosos.",
      coords: [34.0331, -5.0003],
      image: null,
    },
    {
      id: "chefchaouen",
      name: "Chefchaouen",
      region: "Tánger-Tetuán-Alhucemas",
      tag: "El pueblo azul",
      blurb:
        "Casas pintadas de azul en las montañas del Rif, senderos y una plaza para quedarse. Inviernos frescos y lluviosos.",
      coords: [35.1688, -5.2684],
      image: null,
    },
    {
      id: "casablanca",
      name: "Casablanca",
      region: "Casablanca-Settat",
      tag: "La mezquita sobre el mar",
      blurb:
        "La mezquita Hassan II, con el minarete sobre el Atlántico, la cornisa y el centro art déco. Clima suave todo el año. Muchos vuelos llegan acá.",
      coords: [33.5731, -7.5898],
      image: null,
    },
    {
      id: "tanger",
      name: "Tánger",
      region: "Tánger-Tetuán-Alhucemas",
      tag: "La puerta desde España",
      blurb:
        "Una medina sobre el estrecho de Gibraltar, cafés históricos y el ferry que cruza desde Tarifa, en España. Inviernos lluviosos y veranos templados.",
      coords: [35.7595, -5.834],
      image: null,
    },
    {
      id: "essaouira",
      name: "Essaouira",
      region: "Marrakech-Safí",
      tag: "La medina junto al Atlántico",
      blurb:
        "Murallas sobre el mar, el puerto de los pescadores y una medina tranquila, patrimonio de la humanidad. Viento todo el año: ideal para el kitesurf y el windsurf.",
      coords: [31.5085, -9.7595],
      image: null,
    },
    {
      id: "merzouga",
      name: "Merzouga (Erg Chebbi)",
      region: "Drâa-Tafilalet",
      tag: "Las dunas del Sahara",
      blurb:
        "Las dunas de Erg Chebbi, paseos en camello o en 4x4 y noches en campamentos bajo las estrellas. Más de cuarenta grados en verano y noches frías en invierno.",
      coords: [31.0994, -4.011],
      image: null,
    },
    {
      id: "ouarzazate",
      name: "Ouarzazate y Aït Ben Haddou",
      region: "Drâa-Tafilalet",
      tag: "Kasbas y cine",
      blurb:
        "La kasba de Aït Ben Haddou, patrimonio de la humanidad, y los estudios donde se filmaron películas y series. Es la parada entre Marrakech y el desierto.",
      coords: [30.9189, -6.8934],
      image: null,
    },
    {
      id: "imlil",
      name: "Imlil (Alto Atlas)",
      region: "Marrakech-Safí",
      tag: "Alto Atlas",
      blurb:
        "Un pueblo de montaña a casi 1.800 metros, punto de partida para subir el Toubkal, el pico más alto del norte de África. Noches bajo cero en invierno.",
      coords: [31.1373, -7.9198],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Marruecos tiene invierno. De noviembre a marzo, en Marrakech y Fez alcanza con ropa de entretiempo y un abrigo para la noche; en el desierto y el Atlas, campera, gorro y guantes. En verano, ropa fresca que cubra, sombrero y mucha agua: el interior pasa los treinta y cinco grados. Todo el año, algo que cubra hombros y rodillas, calzado cómodo para las medinas y un pañuelo para el sol y el viento del desierto.",
    keyPoints: [
      "Hemisferio norte: inviernos frescos, con noches bajo cero en el Atlas; veranos muy calurosos en el interior.",
      "El dírham no sale del país: se cambia allá, y lo que sobra, antes de irse.",
      "Hombros y rodillas cubiertos fuera de los hoteles y las playas.",
      "En los zocos el precio se negocia, y casi todo se paga en efectivo.",
    ],
    adviceByBucket: {
      calido:
        "Ropa fresca de algodón o lino que cubra, sombrero, protector y mucha agua. En el desierto, un pañuelo para el sol y la arena.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño de las ciudades imperiales.",
      fresco:
        "Capas, un buzo abrigado y una campera liviana. Las noches del desierto y de las medinas en invierno son frías.",
      frio: "Campera de abrigo, gorro y guantes. En el Alto Atlas puede nevar, y en el desierto las noches de invierno bajan cerca de cero.",
    },
    plug: {
      types: "Tipos C y E",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas, como en buena parte de Europa. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Dormí en un riad",
          body: "Las casas tradicionales con patio, dentro de la medina, son la mejor forma de vivirla.",
        },
        {
          title: "Pasá al menos una noche en el desierto",
          body: "En Merzouga, con el atardecer y el amanecer sobre las dunas. Llevá abrigo para la noche.",
        },
        {
          title: "Negociá con una sonrisa",
          body: "En los zocos, el primer precio es el comienzo de la conversación. Si no te interesa, decí que no con amabilidad.",
        },
        {
          title: "Cambiá dírhams de a poco",
          body: "Sacá del cajero o cambiá lo que vas a usar, y guardá los comprobantes para volver a cambiar lo que sobre.",
        },
        {
          title: "Contratá un guía oficial para Fez",
          body: "Te ahorra perderte en la medina y a los falsos guías. Se consigue en el hotel o en la oficina de turismo.",
        },
        {
          title: "Aceptá el té de menta",
          body: "Es la forma de dar la bienvenida, en las casas y en las tiendas.",
        },
      ],
      donts: [
        {
          title: "No sigas a quien se ofrece a guiarte",
          body: "En las medinas, los falsos guías terminan en una tienda o pidiendo plata. Decí que no, gracias, y seguí.",
        },
        {
          title: "No le saques fotos a la gente sin permiso",
          body: "Preguntá antes. En la plaza Jemaa el-Fna, los artistas cobran por las fotos.",
        },
        {
          title: "No vayas descubierto a la ciudad",
          body: "Fuera de los hoteles y las playas, se esperan hombros y rodillas cubiertos.",
        },
        {
          title: "No subestimes el frío del desierto",
          body: "De noviembre a marzo, las noches en las dunas bajan mucho. Abrigo en la mochila.",
        },
        {
          title: "No entres a una mezquita sin consultar",
          body: "En casi todas, la entrada está reservada a los musulmanes. La Hassan II de Casablanca tiene visitas guiadas.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "desierto",
        title: "Para el desierto y el Atlas",
        notice: {
          tone: "info",
          title: "Del calor al frío en un día",
          body: "En el desierto y en la montaña, la diferencia entre el día y la noche es enorme, sobre todo en invierno.",
        },
        summary: "Lo que piden las dunas y la montaña",
        items: [
          "Abrigo para la noche, aunque de día haga calor",
          "Un pañuelo o turbante para el sol y la arena",
          "Lentes de sol",
          "Calzado cerrado para la arena",
          "Linterna o la luz del teléfono",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Verificá la visa antes de viajar",
          body: "Muchos pasaportes entran sin visa; otros la necesitan antes de viajar. Confirmalo con tiempo.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
          "Dirección del primer alojamiento",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para medinas, pueblos y mezquitas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para el pelo",
          "Calzado fácil de sacar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el estómago",
          "Protector solar y protector labial",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano en invierno",
        why: "Las noches de las medinas, el Atlas y el desierto son frías de noviembre a marzo.",
        instead: "Un buzo abrigado y una campera.",
      },
      {
        leave: "Ropa ajustada o muy corta",
        why: "Fuera de los hoteles se esperan hombros y rodillas cubiertos.",
        instead: "Ropa liviana y holgada que cubra.",
      },
      {
        leave: "Dírhams comprados en tu país",
        why: "Es una moneda cerrada: afuera casi no se consigue, y si se consigue, mal cambiada.",
        instead: "El cajero o una casa de cambio al llegar.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Los zocos, los taxis y los pueblos cobran en efectivo.",
        instead: "Dírhams en efectivo y una tarjeta.",
      },
      {
        leave: "Una valija con rueditas para la medina",
        why: "Callejones angostos, escalones y empedrado: a los riads no se llega en auto.",
        instead: "Una mochila o un bolso fácil de cargar.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles y riads tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Marruecos?",
        answer:
          "Depende del pasaporte. Muchos sudamericanos entran sin visa por turismo; otros la tramitan antes. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De marzo a mayo y de septiembre a noviembre: templado en las ciudades y buen clima para el desierto.",
      },
      {
        question: "¿Hace frío en el desierto?",
        answer:
          "De noche, sí, sobre todo de noviembre a marzo. De día puede hacer calor: llevá capas.",
      },
      {
        question: "¿Dónde cambio dírhams?",
        answer:
          "Allá: en el aeropuerto, en bancos, en casas de cambio o en el cajero. Afuera casi no se consiguen.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Son de tipo C y E, a 220 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "Sí, en hoteles, bares y algunos restaurantes de las ciudades grandes. En los pueblos y en las medinas es más difícil de encontrar.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Es habitual: algo en restaurantes, y a guías, choferes y a quien te ayuda con el equipaje.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada, que es barata y está en todos lados.",
      },
    ],
  },
};
