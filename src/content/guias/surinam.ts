import type { DestinationGuide } from "./types";

/**
 * Guía de Surinam.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el único país de América donde el idioma oficial
 * es el neerlandés, y una entrada que no es visa pero se paga antes: muchos
 * pasaportes, exentos de visa, pagan en línea una tasa de entrada. Como Guyana,
 * un interior de selva que se alcanza por río o en avioneta, con malaria y
 * pocos servicios. Y el enchufe europeo de dos patas redondas, pero a 127 V.
 */
export const surinam: DestinationGuide = {
  slug: "surinam",
  country: "Surinam",
  subregion: "Sudamérica",
  subhead:
    "Una capital colonial de madera, la mezcla de culturas más grande de Sudamérica y una selva que cubre casi todo el país, con pueblos cimarrones sobre los ríos.",

  image: null,

  highlights: [
    {
      value: "+90 %",
      label: "del país es selva",
      note: "Uno de los países más verdes del mundo, con una reserva natural patrimonio de la UNESCO.",
    },
    {
      value: "Neerlandés",
      label: "idioma oficial",
      note: "El único país de América donde lo es. En la calle, el sranan tongo une a todos, y mucha gente habla inglés.",
    },
    {
      value: "Tasa de entrada",
      label: "antes de viajar",
      note: "Muchos pasaportes no necesitan visa, pero pagan en línea una tasa de entrada. Otros piden una visa electrónica.",
    },
    {
      value: "Izquierda",
      label: "lado por el que se conduce",
      note: "Como en Guyana, al contrario que el resto de Sudamérica.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta, pero pagan en línea una tasa de entrada antes de viajar. Otros necesitan una visa electrónica. Los ciudadanos de la Comunidad del Caribe están exentos.",
        "Verifica qué te corresponde en el sitio oficial, y usa solo ese: hay páginas que cobran de más por el trámite.",
        "Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado de vacunación. Para el interior, la vacuna se recomienda a todos los viajeros.",
      ],
    },
    {
      id: "salud",
      title: "Salud",
      body: [
        "En el interior hay malaria y dengue. Consulta a un médico de viajes antes de ir: la guía no receta, pero la protección contra los mosquitos no es opcional.",
        "Fuera de Paramaribo, la atención médica es básica. Un seguro con evacuación es parte del viaje.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar surinamés flota, y en los últimos años perdió mucho valor. En hoteles y con los operadores de excursiones se cobra en dólares estadounidenses o en euros.",
        "La tarjeta funciona en los hoteles y restaurantes grandes de Paramaribo. En el interior, efectivo, o el paquete pagado antes con el lodge.",
      ],
    },
    {
      id: "interior",
      title: "El interior",
      body: [
        "Los lodges del alto río Surinam se alcanzan en bus hasta Atjoni y después en canoa a motor; Raleighvallen y otros rincones de la reserva central, en avioneta.",
        "Se viaja con operadores que venden el paquete con traslados, comidas y guías. En los pueblos cimarrones se pide permiso antes de sacar fotos.",
        "Antes de salir de Paramaribo se resuelven el efectivo, los medicamentos y el repelente: en el interior no hay cajeros ni farmacias.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Hay dos épocas secas: la larga, de agosto a noviembre, y la corta, de febrero a abril. La lluvia más fuerte cae de mayo a julio.",
        "De abril a agosto, las tortugas laúd y verdes desovan en las playas de Galibi.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de siempre: atención a las pertenencias y taxis de confianza de noche en Paramaribo.",
        "Los ríos del interior tienen corrientes y rápidos: se navegan con operadores y chaleco salvavidas.",
        "En Paramaribo el agua corriente está tratada, pero mucha gente toma embotellada. En el interior, siempre embotellada o filtrada.",
      ],
    },
    {
      id: "emergencias",
      title: "Emergencias",
      body: ["112"],
    },
  ],

  factsUpdatedAt: "2026-11-22",

  scores: [
    {
      dimension: "Selva y ríos",
      score: 9.5,
      rationale:
        "La reserva de Surinam Central, los rápidos del alto río y monos, aves y caimanes.",
    },
    {
      dimension: "Cultura",
      score: 9,
      rationale:
        "Pueblos cimarrones, templos hindúes, una mezquita junto a una sinagoga y la comida javanesa.",
    },
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "El centro de madera de Paramaribo y Jodensavanne, patrimonio de la UNESCO, y las plantaciones de Commewijne.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Paramaribo es accesible; el interior, con traslados y lodges, cuesta más.",
    },
    {
      dimension: "Facilidad logística",
      score: 4.5,
      rationale:
        "Pocos vuelos internacionales, y el interior por río o avioneta.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "Una moneda que perdió mucho valor; lo turístico se cobra en dólares o euros.",
    },
  ],

  shines: [
    "Una mezcla de culturas que no existe en otro lugar.",
    "Selva casi intacta, a unas horas de la capital.",
    "Paramaribo, una capital colonial de madera.",
  ],

  costs: [
    "La tasa de entrada o la visa, que se tramitan antes.",
    "El interior: remoto, con malaria y pocos servicios.",
    "Llegar: pocos vuelos internacionales.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima: Brownsberg no pide lo mismo que Paramaribo. Los precios son órdenes de magnitud, no cotizaciones; en los lodges del interior, el paquete suele incluir comidas y traslados.",

  places: [
    {
      id: "paramaribo",
      name: "Paramaribo",
      region: "Costa",
      tag: "Ciudad de madera",
      blurb:
        "La capital, con el centro histórico de madera patrimonio de la UNESCO, el fuerte Zeelandia, la mezquita junto a la sinagoga y los mercados. Es la base del planificador.",
      coords: [5.852, -55.2038],
      featured: true,
      image: null,
    },
    {
      id: "commewijne",
      name: "Commewijne",
      region: "Costa",
      tag: "Plantaciones",
      blurb:
        "Al otro lado del río, viejas plantaciones que se recorren en bicicleta, el fuerte Nieuw-Amsterdam y delfines en el estuario.",
      coords: [5.88, -55.09],
      image: null,
    },
    {
      id: "jodensavanne",
      name: "Jodensavanne",
      region: "Interior cercano",
      tag: "Ruinas en la selva",
      blurb:
        "Las ruinas de un pueblo judío del siglo XVII junto al río, patrimonio de la UNESCO, con una sinagoga de ladrillo entre los árboles.",
      coords: [5.43, -54.98],
      image: null,
    },
    {
      id: "brownsberg",
      name: "Brownsberg",
      region: "Interior cercano",
      tag: "Meseta y monos",
      blurb:
        "Un parque sobre una meseta de unos quinientos metros, con monos, cascadas y vista al lago Brokopondo. Más fresco que la costa.",
      coords: [4.95, -55.18],
      image: null,
    },
    {
      id: "alto-surinam",
      name: "Alto río Surinam",
      region: "Interior",
      tag: "Pueblos cimarrones",
      blurb:
        "Lodges y pueblos cimarrones sobre el río, más allá de Atjoni, a los que se llega en canoa a motor entre rápidos.",
      coords: [4.3, -55.46],
      image: null,
    },
    {
      id: "raleighvallen",
      name: "Raleighvallen",
      region: "Interior",
      tag: "Reserva central",
      blurb:
        "Unos rápidos dentro de la reserva de Surinam Central, patrimonio de la UNESCO, con la roca de Voltzberg sobre la selva. Se llega en avioneta o en un largo viaje por río.",
      coords: [4.72, -56.2],
      image: null,
    },
    {
      id: "galibi",
      name: "Galibi",
      region: "Este",
      tag: "Tortugas",
      blurb:
        "Pueblos indígenas en la desembocadura del río Marowijne, donde de abril a agosto desovan las tortugas laúd y verdes.",
      coords: [5.75, -54.02],
      image: null,
    },
    {
      id: "albina",
      name: "Albina",
      region: "Este",
      tag: "Frontera",
      blurb:
        "El pueblo frente a la Guayana Francesa, sobre el río Marowijne, con canoas que cruzan a Saint-Laurent-du-Maroni.",
      coords: [5.4983, -54.0539],
      image: null,
    },
    {
      id: "nieuw-nickerie",
      name: "Nieuw Nickerie",
      region: "Oeste",
      tag: "Arrozales y aves",
      blurb:
        "La ciudad del oeste, entre arrozales, con la laguna de Bigi Pan, llena de garzas, ibis escarlata y flamencos.",
      coords: [5.9264, -56.9731],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Surinam es calor y humedad todo el año: ropa ligera de manga larga, repelente fuerte, impermeable y calzado cerrado para la selva. Si vas al interior, consulta a un médico de viajes por la fiebre amarilla y la malaria, y resuelve el efectivo en Paramaribo. Antes de viajar, paga la tasa de entrada o tramita la visa.",
    keyPoints: [
      "Calor y humedad todo el año, con dos épocas secas.",
      "Antes de viajar, la tasa de entrada o la visa electrónica.",
      "El interior tiene malaria y dengue: médico de viajes antes de ir.",
      "El enchufe es el europeo, pero a 127 V.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera de manga larga que seque rápido, repelente fuerte e impermeable. Es el clima del país todo el año.",
      templado:
        "Camiseta y una capa ligera para las noches de Brownsberg y del río.",
      fresco: "Un suéter ligero para la noche más fresca de la meseta.",
      frio: "En Surinam no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "127 V, 60 Hz",
      note: "El enchufe es el europeo de dos patas redondas, pero a 127 V. Revisa que tus cargadores digan 100-240 V: un aparato de 220 V que no lo diga funciona mal o no funciona.",
    },
    tips: {
      dos: [
        {
          title: "Paga la tasa de entrada en el sitio oficial",
          body: "Antes de viajar, y solo en el sitio del gobierno: las páginas de terceros cobran de más.",
        },
        {
          title: "Consulta a un médico de viajes",
          body: "Por la fiebre amarilla y la malaria del interior, con semanas de anticipación.",
        },
        {
          title: "Lleva efectivo desde Paramaribo",
          body: "En el interior no hay cajeros.",
        },
        {
          title: "Pide permiso antes de fotografiar",
          body: "En los pueblos cimarrones e indígenas, siempre.",
        },
        {
          title: "Prueba la comida javanesa e india",
          body: "Los warungs de Paramaribo y el roti son parte del viaje.",
        },
        {
          title: "Lleva repelente fuerte y manga larga",
          body: "Al atardecer, en la selva y en la costa.",
        },
      ],
      donts: [
        {
          title: "No viajes sin la tasa pagada o la visa",
          body: "Te la piden al embarcar o al llegar.",
        },
        {
          title: "No navegues sin chaleco salvavidas",
          body: "Los ríos del interior tienen rápidos y corrientes.",
        },
        {
          title: "No tomes agua del río ni del grifo en el interior",
          body: "Agua embotellada o filtrada.",
        },
        {
          title: "No enchufes un aparato de 220 V sin revisar",
          body: "Si no dice 100-240 V, a 127 V funciona mal.",
        },
        {
          title: "No camines de noche por zonas que no conoces",
          body: "En Paramaribo, taxis de confianza.",
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
          tone: "warn",
          title: "Tasa de entrada o visa",
          body: "Muchos pasaportes pagan en línea una tasa de entrada antes de viajar; otros necesitan visa electrónica. Sin eso, no se entra.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La tasa de entrada pagada o la visa electrónica",
          "Pasaporte con validez suficiente y pasaje de salida",
          "Certificado de fiebre amarilla",
          "Seguro de viaje con cobertura médica y evacuación",
        ],
      },
      {
        id: "selva",
        title: "Selva y ríos",
        notice: {
          tone: "warn",
          title: "Malaria y dengue",
          body: "En el interior hay malaria y dengue. Repelente, manga larga al atardecer y lo que indique un médico de viajes.",
        },
        summary: "Para el interior",
        items: [
          "Repelente fuerte",
          "Camisa y pantalón de manga larga, ligeros",
          "Calzado cerrado que se pueda mojar",
          "Bolsa impermeable para los viajes en canoa",
          "Linterna frontal",
        ],
      },
      {
        id: "remoto",
        title: "Lugares remotos",
        notice: {
          tone: "info",
          title: "Pocos servicios",
          body: "En el interior no hay cajeros, farmacias ni almacenes grandes. Lo esencial se resuelve en Paramaribo.",
        },
        summary: "Lo que no se consigue en el interior",
        items: [
          "Efectivo",
          "Medicación de más",
          "Batería portátil: en los lodges la electricidad es por horas",
          "Un botiquín con lo básico",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el malestar estomacal y sales de rehidratación",
          "Crema para picaduras",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador al enchufe europeo de dos patas, si el tuyo es distinto",
          "Cargadores que digan 100-240 V",
          "Cable de repuesto",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte y tasa de entrada o visa de cada menor",
          "Las vacunas que indique un pediatra de viajes",
          "Repelente apto para niños y ropa de manga larga",
        ],
      },
    ],
    avoid: [
      {
        leave: "Aparatos de 220 V que no digan 100-240 V",
        why: "Con los 127 V del país funcionan mal o no funcionan.",
        instead: "Cargadores de doble voltaje.",
      },
      {
        leave: "Una maleta rígida grande",
        why: "Al interior se va en canoa o en avioneta, con poco lugar.",
        instead: "Un bolso blando y ligero.",
      },
      {
        leave: "Sandalias para la selva",
        why: "Se camina por barro, raíces y agua.",
        instead: "Calzado cerrado que se pueda mojar.",
      },
      {
        leave: "Solo tarjeta para el interior",
        why: "No hay cajeros ni lugares que la acepten.",
        instead: "Efectivo, sacado en Paramaribo.",
      },
      {
        leave: "Ropa corta para los templos",
        why: "En templos, mezquitas y pueblos se pide ropa que cubra.",
        instead: "Pantalón o falda larga y hombros cubiertos.",
      },
      {
        leave: "Abrigo",
        why: "En Surinam no hay un mes frío.",
        instead: "Una capa ligera para las noches del río.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes no, pero pagan en línea una tasa de entrada antes de viajar; otros necesitan una visa electrónica. Verifica qué te corresponde en el sitio oficial.",
      },
      {
        question: "¿Necesito la vacuna de la fiebre amarilla?",
        answer:
          "Te piden el certificado si llegas desde un país con riesgo, y para el interior se recomienda a todos. Consulta a un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El oficial es el neerlandés. En la calle se habla sranan tongo, y mucha gente habla inglés; el español, poco.",
      },
      {
        question: "¿Cómo se llega al interior?",
        answer:
          "En bus hasta Atjoni y en canoa a motor por el río Surinam, o en avioneta a la reserva central. Con un operador y el paquete reservado.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De agosto a noviembre, la época seca larga. De abril a agosto, si quieres ver las tortugas de Galibi.",
      },
      {
        question: "¿Se puede pagar en dólares o euros?",
        answer:
          "En hoteles y con los operadores, sí. En la calle y en los mercados, en dólares surinameses.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En Paramaribo está tratada, pero mucha gente toma embotellada. En el interior, siempre embotellada o filtrada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es el europeo de dos patas redondas, sí. Y revisa el voltaje: es 127 V, así que tus cargadores tienen que decir 100-240 V.",
      },
    ],
  },
};
