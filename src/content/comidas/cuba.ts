import type { CatalogoDeComida } from "./types";

export const cuba: CatalogoDeComida = {
  slug: "cuba",

  intro: [
    "La cocina criolla cubana es española, africana y caribeña: arroz, frijoles negros, cerdo asado con mojo de naranja agria y ajo, y viandas —yuca, malanga, boniato, plátano— en todas sus formas.",
    "Para comer bien conviene ir a los paladares, los restaurantes particulares que funcionan muchas veces en una casa, más que a los estatales. La escasez de ingredientes es real y cambia de un mes a otro: no todo lo que dice el menú está disponible ese día.",
    "Para tomar, Cuba dio al mundo el mojito y el daiquirí, y el café se toma corto, fuerte y muy dulce. En la calle hay guarapo, el jugo de caña recién exprimido.",
  ],

  despensa: {
    intro:
      "Una despensa de viandas, arroz y cerdo, con el mojo como salsa de todo.",
    ingredientes: [
      {
        nombre: "Viandas",
        descripcion:
          "Así se llama a los tubérculos y plátanos: yuca, malanga, boniato, ñame y plátano, hervidos, fritos o en puré.",
      },
      {
        nombre: "Frijoles negros",
        descripcion:
          "Dormidos de un día para el otro, en caldo o cocinados con el arroz en los moros y cristianos.",
      },
      {
        nombre: "Mojo",
        descripcion:
          "Naranja agria, mucho ajo, comino y orégano, con aceite caliente: adoba el cerdo y se echa sobre la yuca.",
      },
      {
        nombre: "Sofrito",
        descripcion:
          "Cebolla, ajo y ají cachucha, un ají dulce y aromático: es la base de casi todo guiso.",
      },
      {
        nombre: "Caña de azúcar",
        descripcion:
          "Fue la riqueza de la isla durante siglos: de ella salen el azúcar del café, el guarapo y el ron.",
      },
    ],
  },

  foto: null,

  regiones: [
    { id: "habana", nombre: "La Habana" },
    { id: "occidente", nombre: "Viñales y el occidente" },
    { id: "centro", nombre: "El centro: Trinidad, Cienfuegos y Varadero" },
    { id: "oriente", nombre: "El oriente: Santiago y Baracoa" },
  ],

  extracto: "central-america/cuba",
  ciudades: [
    {
      id: "la-habana",
      nombre: "La Habana",
      coords: [23.1367, -82.3589],
      region: "habana",
    },
    {
      id: "vinales",
      nombre: "Viñales",
      coords: [22.6175, -83.7062],
      region: "occidente",
    },
    {
      id: "varadero",
      nombre: "Varadero",
      coords: [23.1561, -81.2449],
      region: "centro",
    },
    {
      id: "cienfuegos",
      nombre: "Cienfuegos",
      coords: [22.1461, -80.4436],
      region: "centro",
    },
    {
      id: "trinidad",
      nombre: "Trinidad",
      coords: [21.8027, -79.9848],
      region: "centro",
    },
    {
      id: "santa-clara",
      nombre: "Santa Clara",
      coords: [22.4069, -79.9647],
      region: "centro",
    },
    {
      id: "camaguey",
      nombre: "Camagüey",
      coords: [21.3808, -77.9169],
      region: "centro",
    },
    {
      id: "santiago-de-cuba",
      nombre: "Santiago de Cuba",
      coords: [20.0247, -75.8219],
      region: "oriente",
    },
    {
      id: "baracoa",
      nombre: "Baracoa",
      coords: [20.3467, -74.4958],
      region: "oriente",
    },
  ],

  nombresDeLugares: {
    restaurante: "Paladar o restaurante",
    casual: "Cafetería o paladar",
    almacen: "Bodega o tienda",
  },

  platos: [
    {
      id: "ropa-vieja",
      nombre: "Ropa vieja",
      resumen:
        "Carne de res deshilachada en sofrito de tomate, con arroz y frijoles.",
      descripcion:
        "Su nombre viene de las hebras de la carne, que parecen tela gastada. La falda de res se cocina hasta deshacerse y se termina en un sofrito de tomate, cebolla, ají y comino. Se sirve con arroz blanco, frijoles negros y plátano maduro frito.",
      sabor: "Tierna, jugosa y apenas especiada.",
      ingredientes: [
        "Falda de res",
        "Tomate, cebolla y ají",
        "Ajo y comino",
        "Arroz y frijoles negros",
      ],
      contiene: ["carne"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo", "cena"],
      lugares: ["restaurante", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["cuban", "regional"],
        nombres: ["paladar", "criollo", "criolla"],
      },
      foto: null,
    },
    {
      id: "moros-y-cristianos",
      nombre: "Moros y cristianos",
      resumen: "Arroz cocido junto con frijoles negros y sofrito.",
      descripcion:
        "El arroz se cocina en el caldo de los frijoles negros, con sofrito y a veces con tocino, y queda oscuro y sabroso. En el oriente se hace con frijoles colorados y se llama congrí.",
      sabor: "Sabroso, terroso y con el comino del sofrito.",
      ingredientes: [
        "Arroz",
        "Frijoles negros",
        "Sofrito de cebolla, ajo y ají",
        "Tocino (a veces)",
      ],
      contiene: ["cerdo"],
      picante: 0,
      precio: 1,
      momentos: ["almuerzo", "cena"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["cuban", "regional"],
        nombres: ["paladar", "criollo", "criolla"],
      },
      foto: null,
    },
    {
      id: "lechon-asado",
      nombre: "Lechón asado",
      resumen:
        "Cerdo adobado en mojo de naranja agria y ajo, asado lento, con yuca.",
      descripcion:
        "El plato de las fiestas y del fin de año, cuando el cerdo entero se asa durante horas en púa o en un hoyo en la tierra. En los paladares se sirve en porciones, con su piel crocante, yuca con mojo y moros y cristianos.",
      sabor: "Jugoso, ácido y muy ajoso.",
      ingredientes: [
        "Cerdo",
        "Mojo de naranja agria, ajo y orégano",
        "Yuca con mojo",
      ],
      contiene: ["cerdo"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo", "cena"],
      lugares: ["restaurante", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["cuban", "regional"],
        nombres: ["paladar", "criollo", "criolla", "lechón", "lechon"],
      },
      foto: null,
    },
    {
      id: "picadillo",
      nombre: "Picadillo a la habanera",
      resumen:
        "Carne molida con tomate, aceitunas y pasas, con arroz y huevo frito.",
      descripcion:
        "La comida de casa por excelencia. La carne molida se cocina en un sofrito de tomate con aceitunas, alcaparras y pasas, que le dan el contraste dulce y salado, y se sirve con arroz blanco y, si hay, un huevo frito encima.",
      sabor: "Salado, dulce y jugoso.",
      ingredientes: [
        "Carne molida de res",
        "Tomate y sofrito",
        "Aceitunas, alcaparras y pasas",
        "Arroz blanco",
      ],
      contiene: ["carne"],
      picante: 0,
      precio: 1,
      momentos: ["almuerzo", "cena"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["cuban", "regional"],
        nombres: ["paladar", "criollo", "criolla"],
      },
      foto: null,
    },
    {
      id: "ajiaco",
      nombre: "Ajiaco criollo",
      resumen:
        "Guiso espeso de carnes y viandas, el plato más antiguo de la isla.",
      descripcion:
        "Un guiso en el que entra de todo: cerdo, res o tasajo, maíz tierno, yuca, malanga, boniato, plátano y calabaza, cocinados hasta espesar. El etnólogo Fernando Ortiz lo usó para explicar a Cuba: una olla en la que se mezclan todos los que llegaron.",
      sabor: "Espeso, dulce por las viandas y profundo.",
      ingredientes: [
        "Cerdo y carne de res",
        "Maíz tierno",
        "Yuca, malanga, boniato y plátano",
        "Calabaza",
      ],
      contiene: ["cerdo", "carne"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["cuban", "regional"],
        nombres: ["paladar", "criollo", "criolla"],
      },
      foto: null,
    },
    {
      id: "enchilado",
      nombre: "Enchilado de camarones",
      resumen:
        "Camarones o langosta en salsa criolla de tomate, ají y vino seco.",
      descripcion:
        "A pesar del nombre no pica: 'enchilado' es la salsa criolla de tomate, cebolla, ají y vino seco en la que se cocinan los camarones o la langosta. Se sirve con arroz blanco y tostones.",
      sabor: "Ácido, dulce y marino, sin picante.",
      ingredientes: [
        "Camarones o langosta",
        "Tomate, cebolla y ají",
        "Vino seco",
        "Arroz blanco y tostones",
      ],
      contiene: ["mariscos", "alcohol"],
      picante: 0,
      precio: 3,
      momentos: ["almuerzo", "cena"],
      lugares: ["restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["seafood", "cuban"],
        nombres: ["paladar", "marisc"],
      },
      foto: null,
    },
    {
      id: "pan-con-lechon",
      nombre: "Pan con lechón",
      resumen: "Pan cubano con cerdo asado y mojo, la comida de la calle.",
      descripcion:
        "El sándwich que se vende en las ventanitas y cafeterías particulares de toda la isla: pan de corteza fina relleno de lechón asado deshilachado, con su mojo de naranja agria y ajo.",
      sabor: "Jugoso, ácido y crocante.",
      ingredientes: [
        "Pan cubano",
        "Lechón asado",
        "Mojo de naranja agria y ajo",
      ],
      contiene: ["gluten", "cerdo"],
      picante: 0,
      precio: 1,
      momentos: ["almuerzo", "snack"],
      lugares: ["puesto", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se vende en ventanitas y cafeterías particulares, que casi nunca están en el mapa: buscá el cartel escrito a mano.",
      foto: null,
    },
    {
      id: "cucurucho",
      nombre: "Cucurucho de Baracoa",
      resumen:
        "Dulce de coco con frutas, envuelto en un cono de hoja de palma.",
      descripcion:
        "El dulce de Baracoa, en el extremo oriental de la isla. Coco rallado con azúcar o miel, guayaba, naranja y otras frutas se cocinan juntos y se envuelven en un cono de yagua, la hoja de la palma real.",
      sabor: "Muy dulce, a coco y a fruta tropical.",
      ingredientes: [
        "Coco rallado",
        "Azúcar o miel",
        "Guayaba y naranja",
        "Yagua (hoja de palma real)",
      ],
      contiene: ["miel"],
      picante: 0,
      precio: 1,
      momentos: ["postre", "snack"],
      lugares: ["puesto"],
      aventura: "para-todos",
      regiones: ["oriente"],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Lo venden en la carretera de La Farola y en las calles de Baracoa, en puestos que no están en el mapa.",
      foto: null,
    },
    {
      id: "cafe-cubano",
      nombre: "Café cubano",
      resumen: "Un expreso corto, fuerte y muy dulce, con su espumita.",
      descripcion:
        "El café se hace en cafetera de hornalla y las primeras gotas se baten con el azúcar hasta formar una crema clara, la espumita, que corona la taza. Se toma en tacitas, y una colada es un vaso grande para repartir entre varios.",
      sabor: "Intenso, amargo y muy dulce a la vez.",
      ingredientes: ["Café", "Azúcar"],
      contiene: [],
      picante: 0,
      precio: 1,
      momentos: ["bebida", "desayuno"],
      lugares: ["cafe", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: { en: ["cafe"] },
      foto: null,
    },
    {
      id: "mojito",
      nombre: "Mojito",
      resumen: "Ron blanco, hierbabuena, lima, azúcar y soda con hielo.",
      descripcion:
        "El trago de La Habana. La hierbabuena se machaca apenas con azúcar y jugo de lima, y se completa con ron blanco, hielo y un chorro de soda.",
      sabor: "Fresco, dulce y ácido.",
      ingredientes: ["Ron blanco", "Hierbabuena", "Lima y azúcar", "Soda"],
      contiene: ["alcohol"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["bar", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      sinMapa: "Se pide en cualquier bar, paladar o terraza de la isla.",
      foto: null,
    },
    {
      id: "daiquiri",
      nombre: "Daiquirí",
      resumen: "Ron blanco, limón y azúcar con hielo frapé.",
      descripcion:
        "Nació en las minas de Daiquirí, cerca de Santiago, y se hizo famoso en los bares de La Habana. El ron blanco se bate con limón, azúcar y hielo frapé, y se sirve helado en copa.",
      sabor: "Ácido, dulce y helado.",
      ingredientes: ["Ron blanco", "Limón", "Azúcar", "Hielo frapé"],
      contiene: ["alcohol"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["bar"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa: "Se pide en cualquier bar de la isla.",
      foto: null,
    },
    {
      id: "guarapo",
      nombre: "Guarapo",
      resumen: "Jugo de caña de azúcar recién exprimido, con hielo y limón.",
      descripcion:
        "En las guaraperas de la calle, la caña se pasa por un trapiche y el jugo sale verde y espumoso. Se toma con hielo y, a veces, unas gotas de limón.",
      sabor: "Dulce, fresco y herbal.",
      ingredientes: ["Jugo de caña de azúcar", "Hielo y limón"],
      contiene: [],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["puesto"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa: "Se vende en guaraperas de la calle, que no están en el mapa.",
      foto: null,
    },
  ],

  menciones: [],

  revisado: "2026-11-12",
};
