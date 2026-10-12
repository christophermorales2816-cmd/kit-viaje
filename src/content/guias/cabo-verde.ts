import type { DestinationGuide } from "./types";

/**
 * Guía de Cabo Verde.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un registro online obligatorio para todos, aparte
 * de la visa, que es el dato de la portada. Casi no llueve —ningún mes de
 * ninguna ciudad llega al bucket de lluvia (spec, 14.12)—, hace calor templado
 * todo el año y el viento sopla casi siempre: la valija la definen el viento y
 * el sol más que la temperatura. La excepción es Chã das Caldeiras, adentro del
 * volcán de Fogo, con noches de diez grados.
 * La base es Santa Maria y no Praia, la capital: es donde llega y se aloja la
 * mayoría de los que viajan.
 */
export const caboVerde: DestinationGuide = {
  slug: "cabo-verde",
  country: "Cabo Verde",
  subregion: "África Occidental",
  subhead:
    "Playas de arena blanca y kitesurf en Sal y Boa Vista, el volcán de Fogo, las caminatas de Santo Antão y la morna de Mindelo. Diez islas en el Atlántico, con sol y viento casi todo el año.",

  image: null,

  highlights: [
    {
      value: "Registro",
      label: "online antes de llegar, aunque no pidas visa",
      note: "Todos los visitantes se registran antes en el sistema EASE y pagan ahí la tasa de seguridad aeroportuaria. Según el pasaporte, además, hace falta visa, y muchos ya no pueden sacarla al llegar.",
    },
    {
      value: "Viento",
      label: "casi todo el año, y kitesurf en Sal y Boa Vista",
      note: "Los alisios soplan casi sin parar de noviembre a junio: refrescan el calor y hacen de Sal y Boa Vista unas de las mejores playas del mundo para el kitesurf. Un rompevientos va en la valija.",
    },
    {
      value: "Volcán",
      label: "con un pueblo adentro, en Fogo",
      note: "Chã das Caldeiras está dentro de la caldera del Pico do Fogo, a casi 1.700 metros, con viñedos sobre la lava. Las noches de invierno bajan a diez grados.",
    },
    {
      value: "Morna",
      label: "la música de Cesária Évora",
      note: "La canción lenta y nostálgica de las islas, patrimonio inmaterial de la humanidad. Se escucha en vivo en los bares de Mindelo, la ciudad de Cesária.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Cabo Verde",
      body: [
        "Todos los visitantes se registran online antes de viajar en el sistema EASE, y pagan ahí la tasa de seguridad aeroportuaria. Hacelo con días de anticipación.",
        "Según el pasaporte, además, se entra sin visa o con una visa que se tramita antes. Desde 2026, muchos pasaportes ya no pueden sacarla al llegar: verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Cabo Verde",
      body: [
        "La moneda es el escudo caboverdiano, atado al euro. En las zonas turísticas aceptan euros, pero el vuelto suele venir en escudos, y la cuenta sale mejor pagando en escudos.",
        "La tarjeta funciona en hoteles y restaurantes de Sal y Boa Vista; en las islas chicas y en los pueblos, efectivo. Hay cajeros en las ciudades.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí escudos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor templado y viento",
      body: [
        "Cabo Verde está en el Atlántico, frente a Senegal, y casi no llueve: un poco de agosto a octubre, más en las islas de montaña y en las laderas que miran al norte.",
        "Hace calor templado todo el año, refrescado por los alisios: las máximas van de veinticinco grados en invierno a treinta en septiembre. El mar está fresco de enero a abril y tibio de agosto a octubre.",
        "De diciembre a febrero puede llegar la bruma seca, polvo del Sahara que tapa el cielo por días. En Chã das Caldeiras, adentro del volcán de Fogo, las noches de invierno bajan a diez grados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Todo el año sirve para la playa, porque casi no llueve. De noviembre a junio hay más viento, el mejor para el kitesurf; de julio a octubre, menos viento, el mar más tibio y algún chaparrón.",
        "Para caminar en Santo Antão y en Fogo, de noviembre a junio. De julio a octubre, las tortugas desovan en las playas de Boa Vista y Sal.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Cabo Verde",
      body: [
        "Entre las islas se va en vuelos internos o en ferry, con horarios que cambian y demoras frecuentes: dejá un día de margen antes del vuelo internacional.",
        "A Santo Antão se llega solo en ferry, desde Mindelo, en un cruce corto. En las islas hay aluguers —camionetas colectivas— y taxis; se maneja por la derecha.",
        "Sal y Boa Vista son planas y se recorren en un día; Santiago, Fogo y Santo Antão tienen montañas y caminos de empedrado.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Cidade Velha, la primera ciudad colonial europea en los trópicos, y el campo de presos de Tarrafal.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Cachupa, el guiso nacional de maíz y porotos, pescado fresco, langosta y el vino de Fogo.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "Las dunas de Boa Vista, el volcán de Fogo y los valles verdes de Santo Antão.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "Arena blanca y agua turquesa en Sal y Boa Vista, con viento para el kitesurf.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Los resorts de Sal y Boa Vista son caros; las islas de montaña, baratas.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Vuelos y ferries entre islas con demoras frecuentes; dentro de cada isla, todo es cerca.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El escudo está atado al euro.",
    },
  ],

  shines: [
    "Sol casi todo el año, sin lluvia.",
    "Kitesurf y windsurf en Sal y Boa Vista.",
    "Caminatas en Santo Antão y en el volcán de Fogo.",
  ],

  costs: [
    "Vuelos y ferries entre islas poco confiables.",
    "Viento constante, que en la playa no siempre se agradece.",
    "El mar fresco de enero a abril.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Santa Maria en enero que Mindelo o Chã das Caldeiras. Los precios están en escudos caboverdianos y son órdenes de magnitud; un resort con todo incluido en Sal o Boa Vista puede costar varias veces más.",

  places: [
    {
      id: "santa-maria",
      name: "Santa Maria (Sal)",
      region: "Sal",
      tag: "Playa y kitesurf",
      blurb:
        "Un pueblo de playa de arena blanca, con el muelle de los pescadores, kitesurf y las salinas de Pedra de Lume, donde se flota en agua salada. Es la base del planificador: calor templado, viento y casi nada de lluvia.",
      coords: [16.597, -22.905],
      featured: true,
      image: null,
    },
    {
      id: "sal-rei",
      name: "Sal Rei (Boa Vista)",
      region: "Boa Vista",
      tag: "Dunas y tortugas",
      blurb:
        "La villa de Boa Vista, entre dunas y playas larguísimas, adonde llegan las tortugas a desovar de julio a octubre.",
      coords: [16.177, -22.918],
      image: null,
    },
    {
      id: "praia",
      name: "Praia (Santiago)",
      region: "Santiago",
      tag: "La capital",
      blurb:
        "La capital, con el Plateau, el centro histórico sobre una meseta, el mercado de Sucupira y música en vivo. Santiago es la isla más africana del país.",
      coords: [14.933, -23.513],
      image: null,
    },
    {
      id: "cidade-velha",
      name: "Cidade Velha (Santiago)",
      region: "Santiago",
      tag: "La primera ciudad",
      blurb:
        "La primera ciudad colonial europea en los trópicos, con su picota, la Fortaleza Real de São Filipe y la Rua Banana. Patrimonio de la humanidad.",
      coords: [14.915, -23.605],
      image: null,
    },
    {
      id: "tarrafal",
      name: "Tarrafal (Santiago)",
      region: "Santiago",
      tag: "Playa y memoria",
      blurb:
        "Una playa de arena clara en el norte de Santiago, y el antiguo campo de presos políticos de la dictadura portuguesa, hoy museo.",
      coords: [15.278, -23.752],
      image: null,
    },
    {
      id: "mindelo",
      name: "Mindelo (São Vicente)",
      region: "São Vicente",
      tag: "La capital de la música",
      blurb:
        "Una ciudad de puerto con casas coloniales de colores, la de Cesária Évora, con morna en vivo y el carnaval más grande del país. Ventosa casi todo el año.",
      coords: [16.886, -24.988],
      image: null,
    },
    {
      id: "santo-antao",
      name: "Santo Antão (Ponta do Sol y Paul)",
      region: "Santo Antão",
      tag: "Caminatas",
      blurb:
        "La isla de las caminatas: valles verdes de caña y bananeros, senderos de empedrado al borde del mar y pueblos colgados de la montaña. Se llega en ferry desde Mindelo.",
      coords: [17.2, -25.092],
      image: null,
    },
    {
      id: "cha-das-caldeiras",
      name: "Chã das Caldeiras (Fogo)",
      region: "Fogo",
      tag: "Adentro del volcán",
      blurb:
        "Un pueblo dentro de la caldera del Pico do Fogo, a casi 1.700 metros, con viñedos sobre la lava y la subida al cráter. Las noches de invierno bajan a diez grados.",
      coords: [14.95, -24.35],
      image: null,
    },
    {
      id: "sao-filipe",
      name: "São Filipe (Fogo)",
      region: "Fogo",
      tag: "Casonas y arena negra",
      blurb:
        "La ciudad de Fogo, con casonas coloniales sobre el acantilado, playas de arena negra y el volcán de fondo.",
      coords: [14.896, -24.496],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Cabo Verde, ropa liviana, traje de baño, protector y un rompevientos: el sol es fuerte y el viento sopla casi todo el año. Para Fogo y Santo Antão, calzado de trekking y abrigo para la noche en la montaña. Todo el año, lentes de sol y un adaptador para el enchufe europeo, si tu país usa otro.",
    keyPoints: [
      "Casi no llueve: un poco de agosto a octubre.",
      "Viento casi todo el año: rompevientos y lentes de sol.",
      "Antes de viajar, el registro online en el sistema EASE.",
      "Adentro del volcán de Fogo, noches de diez grados.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, un sombrero que no se vuele, protector y lentes de sol.",
      templado:
        "Ropa liviana y un rompevientos: el viento refresca más de lo que dice el termómetro.",
      fresco:
        "Capas: un buzo y una campera rompevientos, para la montaña y las noches con viento.",
      frio: "Campera de abrigo para la noche en Chã das Caldeiras, adentro del volcán.",
    },
    plug: {
      types: "Tipos C y F",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas, como en buena parte de Europa. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Registrate en EASE con días de anticipación",
          body: "Es obligatorio para todos, y ahí mismo se paga la tasa de seguridad aeroportuaria.",
        },
        {
          title: "Dejá un día de margen entre islas",
          body: "Los vuelos y los ferries internos se demoran o cambian seguido: no encadenes uno con el vuelo internacional.",
        },
        {
          title: "Escuchá morna en Mindelo",
          body: "Los bares del centro tienen música en vivo casi todas las noches.",
        },
        {
          title: "Probá la cachupa",
          body: "El guiso nacional de maíz y porotos; la del desayuno viene frita, con huevo.",
        },
        {
          title: "Subí al Pico do Fogo con guía",
          body: "La subida al cráter es empinada y arranca de madrugada desde Chã das Caldeiras.",
        },
        {
          title: "Elegí pagar en escudos",
          body: "Aceptan euros, pero con un cambio que suele salir peor. Y si una terminal te ofrece cobrarte en tu moneda, decí que no.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el registro de EASE",
          body: "Sin él te pueden frenar en el embarque o al llegar.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "Fuera de las bahías hay corrientes y olas fuertes.",
        },
        {
          title: "No molestes a las tortugas",
          body: "De julio a octubre desovan de noche en las playas: nada de luces ni de flash, y siempre con guía.",
        },
        {
          title: "No te olvides del abrigo para Fogo",
          body: "Adentro del volcán, la noche baja a diez grados.",
        },
        {
          title: "No subestimes el sol",
          body: "Con el viento no se siente, pero quema igual.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "playa",
        title: "Para la playa",
        notice: {
          tone: "info",
          title: "Viento y sol",
          body: "El viento refresca y hace que el sol no se sienta, pero quema igual.",
        },
        summary: "Sal, Boa Vista y el viento",
        items: [
          "Traje de baño",
          "Protector solar alto",
          "Gorra o sombrero con cordón",
          "Rompevientos",
          "Lentes de sol",
        ],
      },
      {
        id: "montana",
        title: "Para la montaña",
        notice: null,
        summary: "Fogo y Santo Antão",
        items: [
          "Calzado de trekking",
          "Un buzo y una campera para la noche",
          "Agua y algo para comer en los senderos",
          "Bastones, si los usás",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "El registro, antes de viajar",
          body: "Todos los visitantes se registran en EASE y pagan la tasa aeroportuaria antes de viajar. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "El comprobante del registro en EASE",
          "La visa, si tu pasaporte la necesita",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Pasaje de vuelta y reserva del alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Sin malaria",
          body: "La OMS certificó a Cabo Verde libre de malaria en 2024. Igual hay mosquitos en la temporada de lluvias: repelente.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Un sombrero de ala ancha sin cordón",
        why: "El viento se lo lleva.",
        instead: "Una gorra o un sombrero con cordón.",
      },
      {
        leave: "Solo ropa de verano",
        why: "El viento refresca, y en la montaña las noches son frías.",
        instead: "Un rompevientos y un buzo.",
      },
      {
        leave: "Billetes grandes de euro",
        why: "En los pueblos y en los aluguers no tienen vuelto.",
        instead: "Escudos en billetes chicos.",
      },
      {
        leave: "Sandalias para las caminatas",
        why: "Los senderos de Santo Antão y de Fogo son de piedra y empinados.",
        instead: "Calzado de trekking.",
      },
      {
        leave: "Una valija grande",
        why: "Los aluguers y los ferries tienen poco lugar, y muchos caminos son de empedrado.",
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
        question: "¿Necesito visa para entrar a Cabo Verde?",
        answer:
          "Depende del pasaporte, y muchos ya no pueden sacarla al llegar. Lo que todos tienen que hacer es registrarse online en EASE antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Llueve en Cabo Verde?",
        answer:
          "Casi nunca: un poco de agosto a octubre, más en las islas de montaña.",
      },
      {
        question: "¿Hace calor todo el año?",
        answer:
          "Calor templado, con máximas de veinticinco a treinta grados y viento casi siempre. En la montaña de Fogo, las noches son frías.",
      },
      {
        question: "¿Qué isla elijo?",
        answer:
          "Para playa y kitesurf, Sal y Boa Vista; para caminar, Santo Antão y Fogo; para la música, Mindelo; para la historia, Santiago.",
      },
      {
        question: "¿Hay malaria?",
        answer: "No: la OMS certificó al país libre de malaria en 2024.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: son los de dos patas redondas, a 220 V. Un adaptador universal resuelve todo.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El criollo caboverdiano en la calle y el portugués, que es el oficial; en las zonas turísticas, también inglés.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada; en los hoteles suelen darla.",
      },
    ],
  },
};
