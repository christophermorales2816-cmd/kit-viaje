import type { DestinationGuide } from "./types";

/**
 * Guía de Paraguay.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el CALOR como dato principal, y una moneda con
 * muchos ceros. Fue uno de los casos que obligaron a dejar de poner centavos a
 * todo lo que no fuera peso argentino.
 */
export const paraguay: DestinationGuide = {
  slug: "paraguay",
  country: "Paraguay",
  subregion: "Sudamérica",
  subhead:
    "Calor, ríos y misiones jesuíticas, en el país más barato del Cono Sur. Seis meses al año la máxima pasa los treinta grados, y eso define todo lo demás.",

  image: null,

  highlights: [
    {
      value: "+30 °C",
      label: "de octubre a marzo",
      note: "Casi todos los días, y en el Chaco más. El invierno es corto y templado de día.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El guaraní flota sin mercado paralelo. Tiene muchos ceros: acostumbrate a leer precios de seis cifras.",
    },
    {
      value: "2",
      label: "idiomas oficiales",
      note: "Español y guaraní. Casi todo el país es bilingüe y el guaraní se escucha en la calle todos los días.",
    },
    {
      value: "UTC−3",
      label: "todo el año",
      note: "Paraguay dejó el horario de verano y quedó con la hora de Buenos Aires.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Paraguay",
      body: [
        "Hay un solo tipo de cambio y no hay mercado paralelo. El guaraní tiene muchos ceros, así que los precios de todos los días tienen cinco o seis cifras: un café, un almuerzo o un viaje en colectivo se cuentan en miles.",
        "Paraguay es de los países más baratos de la región para un viajero, sobre todo en comida y transporte.",
        "La tarjeta se acepta en la ciudad, pero el efectivo sigue siendo importante en colectivos, mercados y pueblos del interior. En la frontera con Brasil y Argentina circulan también reales y pesos.",
      ],
    },
    {
      id: "calor",
      title: "El calor manda",
      body: [
        "De octubre a marzo la máxima pasa los treinta grados casi todos los días y puede acercarse a cuarenta. En el Chaco es más seco y más extremo.",
        "Se vive temprano y tarde. A la hora de la siesta muchos comercios bajan la persiana, y el tereré —mate frío con hierbas— no es folclore: es la forma local de hidratarse.",
        "El invierno, de junio a agosto, es corto y templado de día, con alguna madrugada fresca cuando entra un frente del sur.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre el clima es más amable: días templados, menos lluvia y nada del calor agobiante del verano. Es la mejor época para recorrer.",
        "Febrero tiene el carnaval de Encarnación, uno de los más grandes de la región. Si vas por eso, el calor es parte del trato.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Asunción, Encarnación y Ciudad del Este se conectan por ómnibus, con trayectos de cuatro a seis horas. Para el Chaco, las distancias son largas y conviene planificar con tiempo.",
        "En Asunción funcionan las aplicaciones de transporte y son la forma más simple de moverse.",
        "Muchos combinan Paraguay con las cataratas del Iguazú o con las misiones del lado argentino: Encarnación y Ciudad del Este están sobre las fronteras.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad: atención a las pertenencias en terminales, mercados y zonas concurridas, sobre todo en Ciudad del Este.",
        "Con este calor la deshidratación llega antes de lo que uno espera. Botella de agua siempre, y sombra en las horas del mediodía.",
        "Para el dengue, repelente de día y no solo de noche: el mosquito que lo transmite pica a toda hora.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Historia y patrimonio",
      score: 8,
      rationale:
        "Las misiones jesuíticas de Trinidad y Jesús son patrimonio de la UNESCO y se visitan casi sin gente.",
    },
    {
      dimension: "Naturaleza y ríos",
      score: 7,
      rationale:
        "Ríos enormes, el lago Ypacaraí y el Chaco, una de las regiones menos visitadas del continente.",
    },
    {
      dimension: "Cultura viva",
      score: 8,
      rationale:
        "Un país bilingüe en serio, con arpa, polca y una cultura del tereré que se comparte enseguida con quien llega.",
    },
    {
      dimension: "Gastronomía",
      score: 6.5,
      rationale:
        "Chipa, sopa paraguaya y asado. Cocina sencilla y contundente, mejor en mercados y comedores que en restaurantes.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "El país más barato del Cono Sur. Comida, transporte y alojamiento rinden mucho.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Ómnibus que funcionan entre las ciudades principales, pero poca infraestructura turística fuera de ellas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8.5,
      rationale:
        "Un tipo de cambio y precios estables. Lo único que cuesta es acostumbrarse a los ceros.",
    },
  ],

  shines: [
    "Misiones jesuíticas patrimonio de la humanidad, casi sin turistas.",
    "Precios que rinden como en pocos lugares de la región.",
    "Un país donde el guaraní se habla en la calle, no solo en los libros.",
  ],

  costs: [
    "El calor de octubre a marzo, que limita lo que se puede hacer al mediodía.",
    "Poca infraestructura turística fuera de las ciudades.",
    "Los precios con muchos ceros, que al principio confunden.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: el Chaco no pide lo mismo que Encarnación. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "asuncion",
      name: "Asunción",
      region: "Central",
      tag: "Capital sobre el río",
      blurb:
        "Una de las ciudades más antiguas del continente, sobre el río Paraguay, con un centro histórico y una costanera para el atardecer. Es la base del planificador.",
      coords: [-25.2637, -57.5759],
      featured: true,
      image: null,
    },
    {
      id: "encarnacion",
      name: "Encarnación",
      region: "Sur",
      tag: "Costanera y carnaval",
      blurb:
        "Frente a Posadas, del lado argentino, con playas de río sobre el Paraná y uno de los carnavales más grandes de la región en febrero.",
      coords: [-27.3306, -55.8667],
      image: null,
    },
    {
      id: "trinidad",
      name: "Trinidad y Jesús",
      region: "Sur",
      tag: "Misiones jesuíticas",
      blurb:
        "Las ruinas de dos reducciones jesuíticas del siglo XVIII, patrimonio de la UNESCO, a menos de una hora de Encarnación. Hay espectáculo de luces de noche.",
      coords: [-27.1316, -55.7036],
      image: null,
    },
    {
      id: "ciudad-del-este",
      name: "Ciudad del Este",
      region: "Este",
      tag: "Triple Frontera",
      blurb:
        "La ciudad comercial de la frontera, a minutos de Foz do Iguaçu y de Puerto Iguazú. Base para las cataratas, la represa de Itaipú y los saltos del Monday.",
      coords: [-25.5097, -54.6111],
      image: null,
    },
    {
      id: "san-bernardino",
      name: "San Bernardino",
      region: "Central",
      tag: "Lago Ypacaraí",
      blurb:
        "El lugar de veraneo de Asunción, a orillas del lago Ypacaraí, con casonas de colonos alemanes y vida nocturna en temporada.",
      coords: [-25.31, -57.3],
      image: null,
    },
    {
      id: "aregua",
      name: "Areguá",
      region: "Central",
      tag: "Cerámica y frutillas",
      blurb:
        "Un pueblo de artesanos sobre el lago, con calles empedradas, cerámica y la fiesta de la frutilla en invierno. Se hace en el día desde Asunción.",
      coords: [-25.3125, -57.3847],
      image: null,
    },
    {
      id: "villarrica",
      name: "Villarrica",
      region: "Centro",
      tag: "Ciudad del Guairá",
      blurb:
        "Una ciudad tranquila del interior, rodeada de cerros y saltos de agua. Buen lugar para ver el Paraguay que no sale en las guías.",
      coords: [-25.75, -56.4333],
      image: null,
    },
    {
      id: "concepcion",
      name: "Concepción",
      region: "Norte",
      tag: "Puerto sobre el río",
      blurb:
        "Un puerto del norte con casonas de la época de oro del río, y punto de partida de los barcos que suben hacia el Pantanal paraguayo.",
      coords: [-23.4064, -57.4344],
      image: null,
    },
    {
      id: "filadelfia",
      name: "Filadelfia",
      region: "Chaco",
      tag: "Colonias menonitas",
      blurb:
        "El centro de las colonias menonitas en pleno Chaco, una región enorme, seca y casi vacía. El calor del verano es extremo.",
      coords: [-22.35, -60.0333],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En Paraguay la valija la decide el calor. De octubre a marzo: ropa liviana y clara, gorro, protector y mucha agua, porque la máxima pasa los treinta casi todos los días. De mayo a septiembre los días son templados y alcanza con sumar un buzo para alguna madrugada fresca. Si podés elegir, andá en el invierno local: es cuando más se disfruta.",
    keyPoints: [
      "Seis meses al año hace más de treinta grados de máxima. La ropa liviana y clara no es opcional.",
      "El invierno es corto: días templados y alguna madrugada fresca cuando entra un frente del sur.",
      "El Chaco es más seco y más extremo que el resto del país, en calor y en distancias.",
      "Repelente de día y de noche: el mosquito del dengue pica a cualquier hora.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, clara y que respire, gorro y protector. Con este calor conviene moverse temprano y tarde, y llevar agua siempre.",
      templado:
        "Ropa liviana y una campera fina para la noche. Es el clima del invierno paraguayo y el más agradable del año.",
      fresco:
        "Un buzo o polar para las madrugadas de invierno, cuando entra un frente del sur. Dura pocos días.",
      frio: "Casi no aparece, pero alguna noche de julio puede bajar mucho. Un abrigo medio alcanza.",
    },
    plug: {
      types: "Tipo C",
      voltage: "220 V, 50 Hz",
      note: "Es el enchufe europeo de dos patas redondas. Si tus cargadores dicen 100-240 V y tu enchufe es distinto, alcanza con un adaptador simple.",
    },
    tips: {
      dos: [
        {
          title: "Llevá ropa liviana y clara",
          body: "Lino, algodón fino o telas técnicas. Con más de treinta grados, lo que no respira se vuelve insoportable al mediodía.",
        },
        {
          title: "Botella reutilizable siempre a mano",
          body: "Con este calor se toma mucha más agua de lo que uno calcula. Comprar agua embotellada en el camino es fácil y barato.",
        },
        {
          title: "Repelente para todo el día",
          body: "El mosquito que transmite el dengue pica de día. Aplicalo también a la mañana, no solo al atardecer.",
        },
        {
          title: "Probá el tereré",
          body: "Es la forma local de hidratarse con calor, y compartirlo es la forma más rápida de empezar una conversación.",
        },
        {
          title: "Llevá efectivo en guaraníes",
          body: "Colectivos, mercados y pueblos funcionan con efectivo. La tarjeta sirve en la ciudad, pero no alcanza para todo.",
        },
        {
          title: "Organizá el día alrededor del calor",
          body: "Lo que se camina, temprano o al atardecer. El mediodía es para la sombra, como hacen todos.",
        },
      ],
      donts: [
        {
          title: "No lleves jeans pesados en verano",
          body: "Con este calor no se aguantan. Un pantalón liviano hace el mismo papel y se seca rápido.",
        },
        {
          title: "No subestimes el sol del mediodía",
          body: "Entre las once y las cuatro el sol pega fuerte y la deshidratación llega antes de lo que se siente.",
        },
        {
          title: "No cargues abrigo de nieve en invierno",
          body: "El invierno es templado de día. Un buzo y una campera liviana alcanzan para las madrugadas frescas.",
        },
        {
          title: "No cambies plata en la calle",
          body: "Usá casas de cambio o cajeros. En las fronteras sobran ofertas, y no siempre son buenas.",
        },
        {
          title: "No dejes el repelente para la noche",
          body: "El dengue lo transmite un mosquito que pica de día.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "calor",
        title: "Calor y sol",
        notice: {
          tone: "warn",
          title: "El calor de verano es serio",
          body: "De octubre a marzo la máxima pasa los treinta grados casi todos los días y en el Chaco puede acercarse a cuarenta. La deshidratación llega rápido.",
        },
        summary: "Lo que pide el verano paraguayo",
        items: [
          "Ropa liviana, clara y que respire",
          "Gorro de ala ancha y anteojos de sol",
          "Protector solar de factor alto",
          "Botella reutilizable",
          "Sales de rehidratación",
        ],
      },
      {
        id: "mosquitos",
        title: "Mosquitos",
        notice: {
          tone: "warn",
          title: "El dengue pica de día",
          body: "El mosquito que lo transmite está activo durante el día. Repelente desde la mañana, y ropa larga liviana al atardecer.",
        },
        summary: "Lo que conviene llevar",
        items: [
          "Repelente con DEET o icaridina",
          "Una prenda de manga larga liviana",
          "Espiral o tableta si dormís con la ventana abierta",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador de enchufe tipo C, si el tuyo es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y antiácido",
          "Algo para el malestar estomacal",
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
          "Repelente apto para chicos",
          "Gorro y protector solar de factor alto",
          "Mucha agua: los chicos se deshidratan antes",
        ],
      },
    ],
    avoid: [
      {
        leave: "Jeans pesados",
        why: "Con más de treinta grados no se aguantan, y tardan en secarse.",
        instead: "Pantalones livianos de secado rápido.",
      },
      {
        leave: "Ropa oscura",
        why: "Absorbe el calor y el sol del mediodía la vuelve insoportable.",
        instead: "Colores claros.",
      },
      {
        leave: "Un abrigo grueso",
        why: "Incluso en invierno los días son templados.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Zapatos cerrados pesados",
        why: "Con el calor, los pies sufren.",
        instead: "Zapatillas livianas y sandalias.",
      },
      {
        leave: "Solo tarjeta",
        why: "Colectivos, mercados y pueblos funcionan con efectivo.",
        instead: "Algo de efectivo en guaraníes.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho y casi todos los alojamientos dan una.",
        instead: "Una de microfibra, si hace falta.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan y conviene no exhibirlos en mercados y terminales.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es el europeo de dos patas redondas, sí, uno simple. El voltaje es 220 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre, cuando los días son templados y llueve menos. Febrero tiene el carnaval de Encarnación, con calor fuerte.",
      },
      {
        question: "¿Cuánto calor hace en verano?",
        answer:
          "Mucho. De octubre a marzo la máxima pasa los treinta casi todos los días, y en el Chaco puede acercarse a cuarenta.",
      },
      {
        question: "¿Puedo pagar con tarjeta?",
        answer:
          "En la ciudad, en la mayoría de los comercios. Para colectivos, mercados y pueblos del interior hace falta efectivo.",
      },
      {
        question: "¿Se habla guaraní con los turistas?",
        answer:
          "Con los turistas se habla español, pero vas a escuchar guaraní todo el tiempo. Saber dos o tres palabras se agradece mucho.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Asunción es tratada, pero mucha gente toma agua embotellada o filtrada. Preguntá en el alojamiento antes de llenar la botella.",
      },
      {
        question: "¿Combina con las cataratas del Iguazú?",
        answer:
          "Muy bien. Ciudad del Este está a minutos de Foz do Iguaçu y de Puerto Iguazú, y Encarnación queda cerca de las misiones del lado argentino.",
      },
      {
        question: "¿Necesito vacunas?",
        answer:
          "Para las ciudades no suele pedirse nada especial. Consultá con tiempo por la fiebre amarilla si vas a zonas rurales o vas a seguir viaje.",
      },
    ],
  },
};
