import type { CatalogoDeComida } from "./types";

export const elSalvador: CatalogoDeComida = {
  slug: "el-salvador",

  intro: [
    "El Salvador se come con las manos: la pupusa es el plato nacional, tiene su día en el calendario y se vende en cada cuadra, de la mañana a la noche. Detrás vienen la yuca frita, los panes con chumpe y las sopas de gallina de los domingos.",
    "Es el país más chico de Centroamérica y se recorre en pocas horas: el mar y los mariscos de La Libertad, los pueblos de la Ruta de las Flores con su feria gastronómica de fin de semana, y la capital, donde las pupuserías abren hasta tarde.",
    "Para tomar hay horchata de morro, atoles de maíz para la tarde y un café de altura que dio una variedad propia, el pacamara.",
  ],

  despensa: {
    intro:
      "Una despensa de maíz, frijol y lo que crece en los volcanes: café, loroco y frutas.",
    ingredientes: [
      {
        nombre: "Maíz y arroz",
        descripcion:
          "La masa de maíz es la de la pupusa de siempre; la de arroz, más suave, es la de Olocuilta.",
      },
      {
        nombre: "Loroco",
        descripcion:
          "La flor verde de una enredadera, con un aroma entre herbal y floral: va con el queso en la pupusa más pedida.",
      },
      {
        nombre: "Curtido",
        descripcion:
          "Repollo, zanahoria y cebolla en vinagre con orégano, que acompaña la pupusa y la yuca frita.",
      },
      {
        nombre: "Quesillo y queso duro",
        descripcion:
          "El quesillo, blando y elástico, se derrite adentro de la pupusa; el duro, salado, se ralla encima de casi todo.",
      },
      {
        nombre: "Semilla de morro",
        descripcion:
          "La semilla de un árbol de jícaras, tostada y molida con arroz y especias: es la base de la horchata.",
      },
      {
        nombre: "Café",
        descripcion:
          "De los volcanes del occidente. El pacamara, un cruce de pacas y maragogipe, se creó en el país.",
      },
    ],
  },

  foto: null,

  regiones: [
    { id: "capital", nombre: "San Salvador" },
    { id: "occidente", nombre: "El occidente y la Ruta de las Flores" },
    { id: "costa", nombre: "La costa" },
    { id: "oriente", nombre: "El oriente" },
  ],

  extracto: "central-america/el-salvador",
  ciudades: [
    {
      id: "san-salvador",
      nombre: "San Salvador",
      coords: [13.6929, -89.2182],
      region: "capital",
    },
    {
      id: "olocuilta",
      nombre: "Olocuilta",
      coords: [13.57, -89.1172],
      region: "capital",
    },
    {
      id: "suchitoto",
      nombre: "Suchitoto",
      coords: [13.9381, -89.0278],
      region: "capital",
    },
    {
      id: "santa-ana",
      nombre: "Santa Ana",
      coords: [13.9942, -89.5597],
      region: "occidente",
    },
    {
      id: "juayua",
      nombre: "Juayúa (Ruta de las Flores)",
      coords: [13.8417, -89.7458],
      region: "occidente",
    },
    {
      id: "la-libertad",
      nombre: "Puerto de La Libertad",
      coords: [13.4883, -89.3203],
      region: "costa",
    },
    {
      id: "el-tunco",
      nombre: "El Tunco",
      coords: [13.4936, -89.3831],
      region: "costa",
    },
    {
      id: "san-miguel",
      nombre: "San Miguel",
      coords: [13.4833, -88.1833],
      region: "oriente",
    },
  ],

  nombresDeLugares: {
    casual: "Pupusería o comedor",
    almacen: "Tienda",
    puesto: "Puesto o champa",
  },

  platos: [
    {
      id: "pupusas",
      nombre: "Pupusas",
      resumen:
        "Tortillas gruesas de maíz rellenas de queso, frijol o chicharrón.",
      descripcion:
        "La masa se palmea, se rellena y se cocina en el comal hasta dorarse. Las más pedidas son las de queso con loroco, las de frijol con queso y las revueltas, con chicharrón; se comen con la mano, con curtido y salsa de tomate. El segundo domingo de noviembre es el Día Nacional de la Pupusa.",
      sabor: "Tostadas, con el queso que se estira y el curtido ácido.",
      ingredientes: [
        "Masa de maíz o de arroz",
        "Quesillo y loroco",
        "Frijoles o chicharrón",
        "Curtido y salsa de tomate",
      ],
      contiene: ["lacteos", "cerdo"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "cena", "snack"],
      lugares: ["casual", "puesto"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      nota: "Las de arroz, más suaves, son las de Olocuilta, sobre la ruta al aeropuerto.",
      buscar: { cocinas: ["salvadoran", "pupusa"], nombres: ["pupus"] },
      foto: null,
    },
    {
      id: "yuca-frita",
      nombre: "Yuca frita con chicharrón",
      resumen:
        "Yuca frita o hervida con chicharrón, curtido y salsa de tomate.",
      descripcion:
        "La otra comida de la calle. La yuca se hierve y después se fríe hasta quedar dorada por fuera, y se sirve con trozos de chicharrón, curtido, salsa de tomate y, a veces, pescaditas fritas.",
      sabor: "Crocante, harinosa y salada.",
      ingredientes: [
        "Yuca",
        "Chicharrón de cerdo",
        "Curtido y salsa de tomate",
      ],
      contiene: ["cerdo"],
      picante: 0,
      precio: 1,
      momentos: ["snack", "cena"],
      lugares: ["puesto", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: { nombres: ["yuca", "pupus"] },
      foto: null,
    },
    {
      id: "panes-con-chumpe",
      nombre: "Panes con chumpe",
      resumen: "Pan relleno de pavo en salsa, con berro, rábano y pepino.",
      descripcion:
        "El chumpe es el pavo, y estos panes son el plato de la Navidad y de las ventas de la calle todo el año. El pavo se cocina en una salsa de recado con tomate, chiles y semillas, y se mete en un pan francés con berro, rábano, pepino y bastante salsa. Los de pollo son los de todos los días.",
      sabor: "Jugoso, especiado y fresco por el berro.",
      ingredientes: [
        "Pan francés",
        "Pavo o pollo en salsa de recado",
        "Ajonjolí (sésamo) y pepitoria en la salsa",
        "Berro, rábano y pepino",
      ],
      contiene: ["gluten", "carne", "sesamo"],
      picante: 0,
      precio: 1,
      momentos: ["almuerzo", "cena", "snack"],
      lugares: ["puesto", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: { nombres: ["chumpe", "panes con", "pan con"] },
      foto: null,
    },
    {
      id: "sopa-de-gallina-india",
      nombre: "Sopa de gallina india",
      resumen: "Caldo de gallina de campo con verduras, arroz y tortillas.",
      descripcion:
        "La sopa de los domingos y de los restaurantes de carretera. La gallina india, de campo, se cocina horas con güisquil, papa, zanahoria y elote, y se sirve con la gallina dorada aparte, arroz, tortillas y limón.",
      sabor: "Profundo, limpio y reconfortante.",
      ingredientes: [
        "Gallina de campo",
        "Güisquil, papa, zanahoria y elote",
        "Arroz y tortillas",
      ],
      contiene: ["carne"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["salvadoran", "regional"],
        nombres: ["gallina", "típic", "tipic", "comedor"],
      },
      foto: null,
    },
    {
      id: "mariscada",
      nombre: "Mariscada",
      resumen:
        "Sopa cremosa de mariscos y pescado, la de los restaurantes de la costa.",
      descripcion:
        "En el Puerto de La Libertad y en toda la costa, la mariscada es la sopa del almuerzo frente al mar: camarones, cangrejo, almejas y pescado en un caldo espeso, con crema y especias, que se sirve con tortillas o pan.",
      sabor: "Cremosa, marina y abundante.",
      ingredientes: [
        "Camarones, cangrejo y almejas",
        "Pescado",
        "Crema",
        "Tomate, cebolla y chile dulce",
      ],
      contiene: ["mariscos", "pescado", "lacteos"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["restaurante", "casual"],
      aventura: "para-todos",
      regiones: ["costa"],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["seafood"],
        nombres: ["marisc", "mariscada"],
      },
      foto: null,
    },
    {
      id: "tamales-de-elote",
      nombre: "Tamales de elote",
      resumen: "Tamales dulces de maíz tierno, envueltos en su propia hoja.",
      descripcion:
        "El elote tierno se muele con un poco de azúcar y sal, se envuelve en sus hojas verdes y se cuece. Se comen tibios con crema, a la tarde, junto con los de pollo y los pisques, de frijol.",
      sabor: "Dulce, suave y a maíz fresco.",
      ingredientes: ["Elote tierno molido", "Azúcar", "Crema para servir"],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["snack", "desayuno"],
      lugares: ["puesto", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: { nombres: ["tamal", "pupus"] },
      foto: null,
    },
    {
      id: "empanadas-de-platano",
      nombre: "Empanadas de plátano",
      resumen:
        "Plátano maduro relleno de leche poleada o frijol, frito y con azúcar.",
      descripcion:
        "Un postre de la calle y de las pupuserías. El plátano maduro se hace masa, se rellena con leche poleada —una crema espesa de leche, fécula y canela— o con frijol dulce, se fríe y se pasa por azúcar.",
      sabor: "Dulce, cremoso y con un toque de canela.",
      ingredientes: [
        "Plátano maduro",
        "Leche poleada (leche, fécula y canela)",
        "Azúcar",
      ],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["postre", "snack"],
      lugares: ["puesto", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se venden en pupuserías, cafeterías y puestos de la calle, que no las anuncian en el nombre.",
      foto: null,
    },
    {
      id: "quesadilla",
      nombre: "Quesadilla salvadoreña",
      resumen: "Un bizcocho dulce de queso y crema, con ajonjolí encima.",
      descripcion:
        "No tiene nada que ver con la mexicana: es un pan dulce y húmedo de harina de arroz, queso duro rallado, crema y huevo, con ajonjolí por arriba, que se come con café a la tarde.",
      sabor: "Dulce y salado a la vez, húmedo y denso.",
      ingredientes: [
        "Harina de arroz",
        "Queso duro rallado y crema",
        "Huevo y mantequilla",
        "Ajonjolí (sésamo)",
      ],
      contiene: ["lacteos", "huevo", "sesamo"],
      picante: 0,
      precio: 1,
      momentos: ["snack", "postre", "desayuno"],
      lugares: ["panaderia", "cafe"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      nota: "Muchas panaderías le suman harina de trigo: preguntá si no podés comer gluten.",
      buscar: { en: ["panaderia", "cafe"] },
      foto: null,
    },
    {
      id: "horchata",
      nombre: "Horchata de morro",
      resumen: "Bebida fría de semilla de morro, arroz, cacao y especias.",
      descripcion:
        "La salvadoreña no es la de chufa ni la mexicana de arroz: se hace con semilla de morro tostada y molida con arroz, cacao, canela, ajonjolí y maní, y se toma con hielo, con leche o con agua.",
      sabor: "Tostada, especiada y apenas achocolatada.",
      ingredientes: [
        "Semilla de morro",
        "Arroz y cacao",
        "Canela, ajonjolí (sésamo) y maní",
        "Agua o leche",
      ],
      contiene: ["sesamo", "mani", "lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["casual", "puesto"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "La sirven en cualquier pupusería, comedor o puesto de refrescos.",
      foto: null,
    },
    {
      id: "chilate-con-nuegados",
      nombre: "Chilate con nuegados",
      resumen:
        "Bebida caliente de maíz sin azúcar, con buñuelos en miel de panela.",
      descripcion:
        "La merienda de las tardes de lluvia y de las fiestas patronales. El chilate es una bebida de maíz tostado con jengibre y pimienta, sin azúcar, que se toma con nuegados —buñuelos de yuca bañados en miel de panela—, plátano en miel o camote.",
      sabor: "El chilate, suave y especiado; los nuegados, muy dulces.",
      ingredientes: [
        "Maíz tostado",
        "Jengibre y pimienta",
        "Nuegados de yuca y huevo",
        "Miel de panela",
      ],
      contiene: ["huevo"],
      picante: 0,
      precio: 1,
      momentos: ["bebida", "postre"],
      lugares: ["puesto", "mercado"],
      aventura: "para-animarse",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se vende en los mercados y en las fiestas patronales de cada pueblo, sobre todo a la tarde.",
      foto: null,
    },
    {
      id: "cafe",
      nombre: "Café",
      resumen: "Café de los volcanes, cuna de la variedad pacamara.",
      descripcion:
        "El café hizo rico al país en el siglo XIX y sigue en las laderas del occidente, de Apaneca a Santa Ana. El pacamara, de grano grande, se desarrolló en El Salvador y gana premios en todo el mundo.",
      sabor: "Dulce, balanceado y con notas a fruta y chocolate.",
      ingredientes: ["Café arábica de altura"],
      contiene: [],
      picante: 0,
      precio: 1,
      momentos: ["bebida", "desayuno"],
      lugares: ["cafe"],
      aventura: "para-todos",
      regiones: ["occidente"],
      imperdible: true,
      paraComerSolo: true,
      buscar: { en: ["cafe"] },
      foto: null,
    },
  ],

  menciones: [],

  revisado: "2026-11-12",
};
