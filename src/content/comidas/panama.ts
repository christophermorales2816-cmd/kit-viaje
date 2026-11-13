import type { CatalogoDeComida } from "./types";

export const panama: CatalogoDeComida = {
  slug: "panama",

  intro: [
    "Panamá es un cruce de caminos, y su mesa también: la cocina criolla del interior, de sancocho y arroz; la afroantillana de Colón y de Bocas del Toro, con coco y pescado; y lo que dejaron los chinos, los antillanos y todos los que llegaron con el ferrocarril y el Canal.",
    "En la capital se come en las fondas —comedores baratos con el menú del día en una pizarra— y en el Mercado de Mariscos, donde el ceviche se vende en vasitos. En el interior, en la península de Azuero, los desayunos llevan carimañolas, hojaldras y tortillas de maíz.",
    "Para tomar hay chicheme, raspaos con leche condensada y un aguardiente de caña que es casi la bebida nacional, el seco. Y en las montañas de Boquete se cultiva uno de los cafés más caros del mundo, el geisha.",
  ],

  despensa: {
    intro:
      "Una despensa de trópico y de dos mares: arroz, ñame, yuca, plátano, coco y pescado.",
    ingredientes: [
      {
        nombre: "Culantro",
        descripcion:
          "El de hoja larga, más intenso que el cilantro: es el que perfuma el sancocho.",
      },
      {
        nombre: "Ñame",
        descripcion:
          "Un tubérculo de pulpa blanca y harinosa que espesa el sancocho y acompaña los guisos.",
      },
      {
        nombre: "Ají chombo",
        descripcion:
          "El ají picante de Panamá, del tipo habanero, que se usa en salsas y en el ceviche.",
      },
      {
        nombre: "Arroz",
        descripcion:
          "Panamá es de los países que más arroz comen en América: blanco, con coco o con guandú.",
      },
      {
        nombre: "Coco",
        descripcion:
          "La base de la cocina afroantillana del Caribe: el arroz, el pescado y los dulces.",
      },
      {
        nombre: "Café",
        descripcion:
          "De las laderas del volcán Barú, en Boquete y Volcán, de donde salió el geisha que hoy se paga a precio récord.",
      },
    ],
  },

  foto: null,

  regiones: [
    { id: "ciudad", nombre: "Ciudad de Panamá" },
    { id: "interior", nombre: "El interior y Azuero" },
    { id: "chiriqui", nombre: "Chiriquí y Boquete" },
    { id: "caribe", nombre: "Colón, Bocas del Toro y el Caribe" },
  ],

  extracto: "central-america/panama",
  ciudades: [
    {
      id: "ciudad-de-panama",
      nombre: "Ciudad de Panamá",
      coords: [8.9824, -79.5199],
      region: "ciudad",
    },
    {
      id: "el-valle-de-anton",
      nombre: "El Valle de Antón",
      coords: [8.6031, -80.1286],
      region: "interior",
    },
    {
      id: "chitre",
      nombre: "Chitré",
      coords: [7.9614, -80.4297],
      region: "interior",
    },
    {
      id: "las-tablas",
      nombre: "Las Tablas",
      coords: [7.7646, -80.2756],
      region: "interior",
    },
    {
      id: "pedasi",
      nombre: "Pedasí",
      coords: [7.5299, -80.028],
      region: "interior",
    },
    {
      id: "boquete",
      nombre: "Boquete",
      coords: [8.78, -82.4411],
      region: "chiriqui",
    },
    {
      id: "david",
      nombre: "David",
      coords: [8.4273, -82.4308],
      region: "chiriqui",
    },
    {
      id: "bocas-del-toro",
      nombre: "Bocas del Toro",
      coords: [9.3402, -82.2416],
      region: "caribe",
    },
    {
      id: "portobelo",
      nombre: "Portobelo",
      coords: [9.555, -79.6556],
      region: "caribe",
    },
  ],

  nombresDeLugares: {
    casual: "Fonda",
    almacen: "Tienda o minisúper",
    puesto: "Puesto o kiosco",
  },

  platos: [
    {
      id: "sancocho",
      nombre: "Sancocho de gallina",
      resumen: "Caldo de gallina con ñame y culantro, el plato nacional.",
      descripcion:
        "El de Panamá es más simple que otros sancochos del Caribe, y por eso se lo reconoce: gallina de patio, ñame, culantro, orégano y poco más. Se sirve con arroz blanco aparte, y es el remedio para todo, de una resaca a un resfrío.",
      sabor: "Limpio, profundo y muy perfumado por el culantro.",
      ingredientes: [
        "Gallina de patio",
        "Ñame",
        "Culantro, orégano y ajo",
        "Arroz blanco",
      ],
      contiene: ["carne"],
      picante: 0,
      precio: 1,
      momentos: ["almuerzo"],
      lugares: ["casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["panamanian", "regional"],
        nombres: ["fonda", "sancocho", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "carimanolas",
      nombre: "Carimañolas",
      resumen: "Bollitos fritos de yuca rellenos de carne molida.",
      descripcion:
        "La masa de yuca hervida y molida se rellena con carne molida guisada, se le da forma de huso y se fríe hasta quedar crocante. Son del desayuno, con café, y se venden en las fondas y en los kioscos.",
      sabor: "Crocantes por fuera y suaves por dentro.",
      ingredientes: ["Yuca", "Carne molida de res guisada"],
      contiene: ["carne"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "snack"],
      lugares: ["casual", "puesto"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["panamanian", "regional"],
        nombres: ["fonda", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "hojaldras",
      nombre: "Hojaldras",
      resumen: "Masa frita, inflada y dorada, para el desayuno.",
      descripcion:
        "No es hojaldre: es una masa simple de harina que se estira y se fríe hasta inflarse. Se come en el desayuno con un bistec encebollado, huevos o queso blanco frito.",
      sabor: "Crocante por fuera, tierna por dentro y salada.",
      ingredientes: [
        "Harina de trigo",
        "Polvo de hornear",
        "Aceite para freír",
      ],
      contiene: ["gluten"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno"],
      lugares: ["casual", "puesto"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["panamanian", "regional"],
        nombres: ["fonda", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "tortilla-changa",
      nombre: "Tortilla changa",
      resumen: "Tortilla gruesa y dulce de maíz tierno, con queso blanco.",
      descripcion:
        "La de Chiriquí y del interior. Se hace con maíz nuevo molido, más dulce que el seco, y se cocina gruesa en la plancha; se come con queso blanco fresco o con natilla.",
      sabor: "Dulce, suave y a maíz fresco.",
      ingredientes: ["Maíz tierno molido", "Queso blanco fresco"],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "snack"],
      lugares: ["puesto", "casual"],
      aventura: "para-todos",
      regiones: ["chiriqui", "interior"],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["panamanian", "regional"],
        nombres: ["fonda", "típic", "tipic", "changa"],
      },
      foto: null,
    },
    {
      id: "ceviche",
      nombre: "Ceviche panameño",
      resumen: "Corvina curada en limón con cebolla y ají chombo, en vasito.",
      descripcion:
        "En el Mercado de Mariscos de la capital, los puestos venden el ceviche en vasitos de plástico: corvina picada en limón con cebolla, culantro y ají chombo. También lo hay de camarón, de pulpo y de concha negra, y se come con galletas.",
      sabor: "Ácido, fresco y con un picante que despierta.",
      ingredientes: ["Corvina", "Limón", "Cebolla, culantro y ají chombo"],
      contiene: ["pescado"],
      picante: 2,
      precio: 1,
      momentos: ["almuerzo", "snack"],
      lugares: ["mercado", "puesto", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        en: ["comida", "mercado"],
        cocinas: ["seafood", "ceviche"],
        nombres: ["cevich", "marisc"],
      },
      foto: null,
    },
    {
      id: "guacho",
      nombre: "Guacho",
      resumen: "Arroz caldoso con frijoles o guandú y carne salada de cerdo.",
      descripcion:
        "Un arroz que no termina de secarse, entre sopa y risotto, cocinado con frijoles o guandú y un trozo de rabito o de costilla salada de cerdo, con culantro. Es comida de casa y de fonda.",
      sabor: "Cremoso, salado y reconfortante.",
      ingredientes: [
        "Arroz",
        "Frijoles o guandú",
        "Rabito o costilla salada de cerdo",
        "Culantro",
      ],
      contiene: ["cerdo"],
      picante: 0,
      precio: 1,
      momentos: ["almuerzo"],
      lugares: ["casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["panamanian", "regional"],
        nombres: ["fonda", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "chicheme",
      nombre: "Chicheme",
      resumen: "Bebida dulce de maíz cocido con leche, canela y vainilla.",
      descripcion:
        "La bebida de La Chorrera, que se vende en las carreteras del interior. El maíz pilado se cocina hasta ablandarse y se sirve en su líquido con leche, azúcar, canela y vainilla, fría.",
      sabor: "Dulce, cremosa y con los granos de maíz enteros.",
      ingredientes: ["Maíz pilado", "Leche", "Azúcar, canela y vainilla"],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["bebida", "snack"],
      lugares: ["puesto", "casual"],
      aventura: "para-todos",
      regiones: ["interior"],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se vende en puestos de carretera y en fondas del interior, sobre todo en La Chorrera.",
      foto: null,
    },
    {
      id: "raspao",
      nombre: "Raspao",
      resumen: "Hielo raspado con jarabe de fruta y leche condensada.",
      descripcion:
        "El alivio para el calor, en carritos en cada plaza. El raspadero raspa un bloque de hielo, lo mete en un vaso y le echa jarabe de colores, leche condensada y, a veces, leche en polvo encima.",
      sabor: "Helado, muy dulce y frutal.",
      ingredientes: ["Hielo raspado", "Jarabe de fruta", "Leche condensada"],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["postre", "snack"],
      lugares: ["puesto"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se vende en carritos en plazas y parques, que no están en el mapa.",
      foto: null,
    },
    {
      id: "seco",
      nombre: "Seco",
      resumen: "Aguardiente de caña de Herrera, con leche o con limón y soda.",
      descripcion:
        "El destilado de caña de la provincia de Herrera es la bebida de las fiestas del interior y de los carnavales. Se toma con leche y hielo —'seco con vaca'— o con limón y soda.",
      sabor: "Seco, limpio y fuerte.",
      ingredientes: ["Aguardiente de caña", "Leche o limón y soda"],
      contiene: ["alcohol", "lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["bar"],
      aventura: "para-todos",
      regiones: ["interior"],
      imperdible: false,
      paraComerSolo: true,
      sinMapa: "Se pide en cualquier bar y se vende en cualquier tienda.",
      foto: null,
    },
    {
      id: "cafe-de-boquete",
      nombre: "Café de Boquete",
      resumen:
        "El café de las laderas del volcán Barú, cuna del geisha panameño.",
      descripcion:
        "En Boquete, a la sombra del volcán Barú, se cultiva el geisha, una variedad de origen etíope que en Panamá dio un café floral y delicado que rompe récords en las subastas. Las fincas de la zona se visitan, y en el pueblo hay cafeterías que lo sirven por taza.",
      sabor: "Floral, delicado y con notas a jazmín y frutas.",
      ingredientes: ["Café arábica de altura"],
      contiene: [],
      picante: 0,
      precio: 2,
      momentos: ["bebida", "desayuno"],
      lugares: ["cafe"],
      aventura: "para-todos",
      regiones: ["chiriqui"],
      imperdible: true,
      paraComerSolo: true,
      buscar: { en: ["cafe"] },
      foto: null,
    },
  ],

  menciones: [],

  revisado: "2026-11-12",
};
