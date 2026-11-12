import type { CatalogoDeComida } from "./types";

export const honduras: CatalogoDeComida = {
  slug: "honduras",

  intro: [
    "La cocina hondureña es de comedor y de esquina: la baleada, una tortilla de harina doblada sobre frijoles y queso, se come a toda hora, y el plato típico junta en un solo plato todo lo que el país tiene para el almuerzo.",
    "Tiene dos mares y dos cocinas. Tierra adentro mandan el maíz, el frijol y la carne asada; en la costa del Caribe y en las Islas de la Bahía, la cocina garífuna cocina todo en leche de coco, del caracol al pescado.",
    "Es el mayor productor de café de Centroamérica, y en las montañas de Copán y de Marcala hay fincas que lo muestran. Para la tarde, rosquillas con café; para la noche, cerveza bien fría.",
  ],

  despensa: {
    intro:
      "Una despensa de maíz y frijol en el interior, y de coco, plátano y mar en el Caribe.",
    ingredientes: [
      {
        nombre: "Harina de trigo",
        descripcion:
          "En el resto de Centroamérica la tortilla es de maíz; en Honduras también la hay de harina, gruesa, y con ella se hace la baleada.",
      },
      {
        nombre: "Frijol rojo",
        descripcion:
          "Se come frito y molido, en la baleada, en el plato típico y al lado de casi todo.",
      },
      {
        nombre: "Mantequilla rala",
        descripcion:
          "No es manteca: es una crema agria y líquida que se unta en la baleada y acompaña el desayuno.",
      },
      {
        nombre: "Coco",
        descripcion:
          "La base de la cocina garífuna: su leche va en las sopas, el arroz y el pan.",
      },
      {
        nombre: "Plátano",
        descripcion:
          "Verde, en tajadas fritas o machacado en un pilón; maduro, frito y dulce.",
      },
      {
        nombre: "Café",
        descripcion:
          "De altura, de las montañas del occidente: Copán, Marcala, Santa Bárbara.",
      },
    ],
  },

  foto: null,

  regiones: [
    { id: "centro", nombre: "Tegucigalpa y el centro" },
    { id: "norte", nombre: "San Pedro Sula y el norte" },
    { id: "caribe", nombre: "La costa caribe y las islas" },
    { id: "occidente", nombre: "Copán y el occidente" },
  ],

  extracto: "central-america/honduras",
  ciudades: [
    {
      id: "tegucigalpa",
      nombre: "Tegucigalpa",
      coords: [14.1058, -87.2047],
      region: "centro",
    },
    {
      id: "comayagua",
      nombre: "Comayagua",
      coords: [14.4532, -87.6376],
      region: "centro",
    },
    {
      id: "san-pedro-sula",
      nombre: "San Pedro Sula",
      coords: [15.5042, -88.025],
      region: "norte",
    },
    {
      id: "la-ceiba",
      nombre: "La Ceiba",
      coords: [15.783, -86.793],
      region: "caribe",
    },
    {
      id: "tela",
      nombre: "Tela",
      coords: [15.779, -87.4617],
      region: "caribe",
    },
    {
      id: "roatan",
      nombre: "Roatán",
      coords: [16.3003, -86.5958],
      region: "caribe",
    },
    {
      id: "utila",
      nombre: "Utila",
      coords: [16.0975, -86.8994],
      region: "caribe",
    },
    {
      id: "copan-ruinas",
      nombre: "Copán Ruinas",
      coords: [14.8406, -89.1553],
      region: "occidente",
    },
  ],

  nombresDeLugares: {
    casual: "Comedor o baleadería",
    almacen: "Pulpería",
    puesto: "Puesto o champa",
  },

  platos: [
    {
      id: "baleadas",
      nombre: "Baleadas",
      resumen:
        "Tortilla gruesa de harina doblada sobre frijoles, mantequilla y queso.",
      descripcion:
        "El desayuno, el almuerzo y la cena de la costa norte, nacida en La Ceiba y en San Pedro Sula. La tortilla de harina se rellena con frijoles rojos fritos, mantequilla rala y queso duro rallado: es la sencilla. La que se pide 'con todo' suma huevo revuelto, aguacate y carne asada o chorizo.",
      sabor: "Suave, salada y cremosa.",
      ingredientes: [
        "Tortilla de harina de trigo",
        "Frijoles rojos fritos",
        "Mantequilla rala y queso duro",
      ],
      contiene: ["gluten", "lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "cena", "snack"],
      lugares: ["puesto", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      nota: "La sencilla es vegetariana; la que lleva 'con todo' suma huevo y carne o chorizo.",
      buscar: { nombres: ["baleada"] },
      foto: null,
    },
    {
      id: "plato-tipico",
      nombre: "Plato típico",
      resumen:
        "Carne asada, frijoles, plátano frito, chorizo, queso y aguacate.",
      descripcion:
        "El almuerzo completo de cualquier comedor: carne asada, frijoles fritos, tajadas de plátano maduro, chorizo, queso frito o fresco, mantequilla rala, aguacate, chismol —una salsa fresca de tomate y cebolla— y tortillas de maíz.",
      sabor: "Abundante, salado y con el dulce del plátano.",
      ingredientes: [
        "Carne asada",
        "Frijoles y plátano maduro",
        "Chorizo",
        "Queso y mantequilla rala",
        "Aguacate y chismol",
      ],
      contiene: ["carne", "cerdo", "lacteos"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["honduran", "regional"],
        nombres: ["típic", "tipic", "catrach", "comedor"],
      },
      foto: null,
    },
    {
      id: "sopa-de-caracol",
      nombre: "Sopa de caracol",
      resumen: "Sopa de caracol de mar en leche de coco, con yuca y plátano.",
      descripcion:
        "La sopa de la costa caribe, a la que una canción le dio fama en toda América. El caracol se cocina en leche de coco con yuca, plátano verde, culantro y especias, y se sirve con arroz o con pan de coco.",
      sabor: "Cremosa, dulce y marina.",
      ingredientes: [
        "Caracol de mar",
        "Leche de coco",
        "Yuca y plátano verde",
        "Culantro y chile",
      ],
      contiene: ["mariscos"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["restaurante", "casual"],
      aventura: "para-todos",
      regiones: ["caribe"],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["seafood"],
        nombres: ["caracol", "marisc", "garífuna", "garifuna"],
      },
      foto: null,
    },
    {
      id: "pescado-de-yojoa",
      nombre: "Pescado frito del lago de Yojoa",
      resumen:
        "Tilapia entera frita, con tajadas de plátano verde y encurtido.",
      descripcion:
        "Entre Tegucigalpa y San Pedro Sula, a orillas del lago de Yojoa, la ruta se llena de comedores que fríen tilapia entera recién sacada del agua. Se sirve con tajadas de plátano verde, encurtido de cebolla y chile, y limón.",
      sabor: "Crocante, salado y fresco por el encurtido.",
      ingredientes: [
        "Tilapia entera frita",
        "Tajadas de plátano verde",
        "Encurtido de cebolla y chile",
      ],
      contiene: ["pescado"],
      picante: 1,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: ["centro", "norte"],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["fish", "seafood"],
        nombres: ["pescad", "yojoa", "marisc"],
      },
      foto: null,
    },
    {
      id: "machuca",
      nombre: "Machuca",
      local: "Hudut",
      resumen:
        "Plátano machacado en pilón con sopa de pescado en leche de coco.",
      descripcion:
        "El plato garífuna por excelencia. El plátano verde y el maduro se hierven y se machacan en un pilón de madera hasta formar una masa, que se come a bocados mojados en una sopa de pescado frito y leche de coco.",
      sabor: "Denso, dulce y marino.",
      ingredientes: [
        "Plátano verde y maduro",
        "Pescado frito",
        "Leche de coco",
        "Culantro y ajo",
      ],
      contiene: ["pescado"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual", "restaurante"],
      aventura: "para-animarse",
      regiones: ["caribe"],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["seafood"],
        nombres: ["garífuna", "garifuna", "machuca", "hudut"],
      },
      foto: null,
    },
    {
      id: "pollo-chuco",
      nombre: "Pollo chuco",
      resumen: "Pollo frito sobre tajadas de plátano, con repollo y aderezo.",
      descripcion:
        "La cena de la calle de San Pedro Sula, servida en una bandeja o en una bolsa. Pollo frito rebozado sobre una cama de tajadas de plátano verde, con repollo, chismol y un aderezo rosado de mayonesa y kétchup. 'Chuco' quiere decir sucio.",
      sabor: "Crocante, grasoso y muy sabroso.",
      ingredientes: [
        "Pollo frito rebozado en harina",
        "Tajadas de plátano verde",
        "Repollo y chismol",
        "Aderezo de mayonesa y kétchup",
      ],
      contiene: ["carne", "gluten", "huevo"],
      picante: 0,
      precio: 1,
      momentos: ["cena", "snack"],
      lugares: ["puesto", "casual"],
      aventura: "para-todos",
      regiones: ["norte"],
      imperdible: false,
      paraComerSolo: true,
      buscar: { nombres: ["chuco", "tajad"] },
      foto: null,
    },
    {
      id: "catrachitas",
      nombre: "Catrachitas",
      resumen: "Tortillitas fritas con frijoles molidos y queso rallado.",
      descripcion:
        "La entrada de cualquier comedor y la boca de cualquier bar. Tortillas de maíz chicas y fritas hasta quedar crocantes, con una capa de frijoles molidos y queso seco rallado.",
      sabor: "Crocantes, saladas y cremosas.",
      ingredientes: [
        "Tortillas de maíz fritas",
        "Frijoles molidos",
        "Queso seco rallado",
      ],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["snack"],
      lugares: ["casual", "bar"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["honduran", "regional"],
        nombres: ["típic", "tipic", "catrach", "comedor"],
      },
      foto: null,
    },
    {
      id: "pan-de-coco",
      nombre: "Pan de coco",
      resumen: "Pan suave hecho con leche de coco, de la cocina garífuna.",
      descripcion:
        "Lo hornean y lo venden las mujeres garífunas en la costa y en las islas, en la calle o de casa en casa. La leche de coco reemplaza a la de vaca y le da una miga húmeda y apenas dulce.",
      sabor: "Suave, húmedo y perfumado a coco.",
      ingredientes: ["Harina de trigo", "Leche de coco", "Coco rallado"],
      contiene: ["gluten"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "snack"],
      lugares: ["puesto", "panaderia"],
      aventura: "para-todos",
      regiones: ["caribe"],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Lo venden en la calle y en la playa, en la costa caribe y en las islas: casi nunca en un local.",
      foto: null,
    },
    {
      id: "rosquillas",
      nombre: "Rosquillas",
      resumen: "Rosquitas horneadas de maíz y queso, para el café de la tarde.",
      descripcion:
        "Masa de maíz con queso duro, mantequilla y huevo, en forma de aro, horneada hasta quedar dura y crocante. Se mojan en el café; en Semana Santa se comen en miel de panela.",
      sabor: "Crocantes, saladas y a queso.",
      ingredientes: ["Masa de maíz", "Queso duro", "Mantequilla y huevo"],
      contiene: ["lacteos", "huevo"],
      picante: 0,
      precio: 1,
      momentos: ["snack", "desayuno"],
      lugares: ["panaderia", "cafe", "mercado"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        en: ["panaderia", "comida", "cafe"],
        nombres: ["rosquill"],
      },
      foto: null,
    },
    {
      id: "guifiti",
      nombre: "Guifiti",
      resumen: "Aguardiente macerado con raíces y hierbas, la bebida garífuna.",
      descripcion:
        "Una botella de aguardiente o de ron en la que maceran raíces, cortezas, hierbas y especias durante semanas. Los garífunas le atribuyen de todo, de curar resfríos a dar fuerza, y se toma de a sorbos.",
      sabor: "Amargo, herbal y fuerte.",
      ingredientes: ["Aguardiente o ron", "Raíces, cortezas y hierbas"],
      contiene: ["alcohol"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["puesto", "bar"],
      aventura: "gusto-adquirido",
      regiones: ["caribe"],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se compra en botellas en los pueblos garífunas de la costa, de Tela a Trujillo.",
      foto: null,
    },
    {
      id: "cafe",
      nombre: "Café",
      resumen: "Café de las montañas del occidente, de Copán a Marcala.",
      descripcion:
        "Honduras es el mayor productor de café de Centroamérica. El de Marcala tiene denominación de origen, y alrededor de Copán Ruinas hay fincas que se visitan.",
      sabor: "Suave, dulce y con notas a fruta.",
      ingredientes: ["Café arábica de altura"],
      contiene: [],
      picante: 0,
      precio: 1,
      momentos: ["bebida", "desayuno"],
      lugares: ["cafe"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: { en: ["cafe"] },
      foto: null,
    },
  ],

  menciones: [],

  revisado: "2026-11-12",
};
