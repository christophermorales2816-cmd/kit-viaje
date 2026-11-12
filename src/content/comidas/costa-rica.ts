import type { CatalogoDeComida } from "./types";

export const costaRica: CatalogoDeComida = {
  slug: "costa-rica",

  intro: [
    "La cocina tica es sencilla y casera, y se come mejor en las sodas: comedores chicos y baratos, muchas veces familiares, que sirven gallo pinto a la mañana y casado al mediodía en todo el país, de San José a la última playa.",
    "En el Caribe, de Limón a Puerto Viejo, la cocina es otra, de herencia afrocaribeña: el arroz con frijoles se cocina en leche de coco, el pollo lleva chile panameño y en las panaderías hay patí.",
    "El café se toma chorreado, filtrado en una bolsita de tela, y la salsa Lizano, agridulce y especiada, está en todas las mesas.",
  ],

  despensa: {
    intro:
      "Una despensa de arroz y frijoles, con plátano, palmito, frutas y café del Valle Central.",
    ingredientes: [
      {
        nombre: "Arroz y frijoles",
        descripcion:
          "Están en el desayuno, el almuerzo y la cena. El frijol negro manda en el Valle Central; el rojo, en el Caribe.",
      },
      {
        nombre: "Salsa Lizano",
        descripcion:
          "Una salsa de verduras y especias, agridulce y un poco picante, que va en el gallo pinto y en casi todo lo demás.",
      },
      {
        nombre: "Natilla",
        descripcion:
          "Una crema agria espesa que acompaña el desayuno, las chorreadas y los tamales.",
      },
      {
        nombre: "Plátano",
        descripcion: "Maduro y frito, al lado del casado; verde, en patacones.",
      },
      {
        nombre: "Pejibaye",
        descripcion:
          "El fruto de una palmera, que se come hervido con mayonesa: harinoso, entre la castaña y la calabaza.",
      },
      {
        nombre: "Café",
        descripcion:
          "Arábica de altura, del Valle Central, de Tarrazú y de Naranjo: el que se toma chorreado.",
      },
    ],
  },

  foto: null,

  regiones: [
    { id: "valle-central", nombre: "San José y el Valle Central" },
    { id: "caribe", nombre: "El Caribe" },
    { id: "guanacaste", nombre: "Guanacaste" },
    { id: "pacifico", nombre: "El Pacífico central" },
    { id: "norte", nombre: "La zona norte" },
  ],

  extracto: "central-america/costa-rica",
  ciudades: [
    {
      id: "san-jose",
      nombre: "San José",
      coords: [9.9325, -84.0796],
      region: "valle-central",
    },
    {
      id: "la-fortuna",
      nombre: "La Fortuna (Arenal)",
      coords: [10.4678, -84.6427],
      region: "norte",
    },
    {
      id: "monteverde",
      nombre: "Monteverde",
      coords: [10.3125, -84.8247],
      region: "norte",
    },
    {
      id: "liberia",
      nombre: "Liberia",
      coords: [10.6346, -85.4377],
      region: "guanacaste",
    },
    {
      id: "tamarindo",
      nombre: "Tamarindo",
      coords: [10.2993, -85.8371],
      region: "guanacaste",
    },
    {
      id: "quepos",
      nombre: "Quepos y Manuel Antonio",
      coords: [9.43, -84.162],
      region: "pacifico",
    },
    {
      id: "limon",
      nombre: "Puerto Limón",
      coords: [9.9907, -83.0359],
      region: "caribe",
    },
    {
      id: "puerto-viejo",
      nombre: "Puerto Viejo de Talamanca",
      coords: [9.6558, -82.7542],
      region: "caribe",
    },
    {
      id: "tortuguero",
      nombre: "Tortuguero",
      coords: [10.5428, -83.5039],
      region: "caribe",
    },
  ],

  nombresDeLugares: {
    casual: "Soda",
    almacen: "Pulpería",
    puesto: "Puesto o carrito",
  },

  platos: [
    {
      id: "gallo-pinto",
      nombre: "Gallo pinto",
      resumen: "Arroz y frijoles negros salteados con culantro y salsa Lizano.",
      descripcion:
        "El desayuno tico. El arroz y los frijoles negros del día anterior se saltean con cebolla, chile dulce, culantro y salsa Lizano, y se sirven con huevo, natilla, plátano maduro y tortillas. Nicaragua dice que es suyo; en Costa Rica nadie lo discute.",
      sabor: "Suave, herbal y con el agridulce de la Lizano.",
      ingredientes: [
        "Arroz",
        "Frijoles negros",
        "Cebolla, chile dulce y culantro",
        "Salsa Lizano",
      ],
      contiene: [],
      picante: 0,
      precio: 1,
      momentos: ["desayuno"],
      lugares: ["casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      nota: "Solo es vegano: casi siempre viene con huevo y natilla.",
      buscar: {
        cocinas: ["costa_rican", "regional"],
        nombres: ["soda", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "casado",
      nombre: "Casado",
      resumen:
        "Arroz, frijoles, ensalada, maduro, picadillo y una carne o pescado.",
      descripcion:
        "El almuerzo de las sodas, completo y barato. En un mismo plato van arroz, frijoles, ensalada de repollo, plátano maduro frito, un picadillo de verduras y una proteína a elección: bistec, pollo, cerdo o pescado. Se acompaña con un fresco de frutas.",
      sabor: "Casero, equilibrado y abundante.",
      ingredientes: [
        "Arroz y frijoles",
        "Ensalada de repollo",
        "Plátano maduro",
        "Picadillo de verduras",
        "Bistec o pollo",
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
      nota: "Casi todas las sodas tienen uno vegetariano: pedilo con huevo o queso.",
      buscar: {
        cocinas: ["costa_rican", "regional"],
        nombres: ["soda", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "olla-de-carne",
      nombre: "Olla de carne",
      resumen: "Sopa de res con yuca, chayote, elote, plátano y tiquisque.",
      descripcion:
        "La sopa de los fines de semana. La carne de res se cocina con un montón de verduras y tubérculos —yuca, chayote, elote, plátano verde, ñampí, tiquisque, zanahoria— y se sirve con arroz blanco aparte.",
      sabor: "Reconfortante y abundante.",
      ingredientes: [
        "Carne de res",
        "Yuca, chayote, elote y plátano",
        "Ñampí y tiquisque",
        "Arroz blanco",
      ],
      contiene: ["carne"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["costa_rican", "regional"],
        nombres: ["soda", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "rice-and-beans",
      nombre: "Rice and beans",
      resumen: "Arroz y frijoles rojos en leche de coco, con pollo caribeño.",
      descripcion:
        "El plato del Caribe, que en Limón se cocina los domingos. El arroz y los frijoles rojos se cuecen en leche de coco con tomillo y chile panameño, y se sirven con pollo en salsa caribeña, ensalada de repollo y plátano maduro.",
      sabor: "Cremoso, dulce por el coco y especiado.",
      ingredientes: [
        "Arroz y frijoles rojos en leche de coco",
        "Tomillo y chile panameño",
        "Pollo en salsa caribeña",
      ],
      contiene: ["carne"],
      picante: 1,
      precio: 2,
      momentos: ["almuerzo", "cena"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: ["caribe"],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["caribbean", "regional"],
        nombres: ["caribe", "caribbean", "soda"],
      },
      foto: null,
    },
    {
      id: "pati",
      nombre: "Patí",
      resumen:
        "Empanada caribeña de carne molida especiada con chile panameño.",
      descripcion:
        "Una empanada de masa de harina, dorada al horno, rellena de carne molida con cebolla, tomillo y chile panameño. Viene de la cocina jamaiquina que llegó con los trabajadores del ferrocarril, y se vende en las panaderías del Caribe.",
      sabor: "Especiado, picante y con masa tierna.",
      ingredientes: [
        "Masa de harina de trigo",
        "Carne molida de res",
        "Tomillo y chile panameño",
      ],
      contiene: ["gluten", "carne"],
      picante: 2,
      precio: 1,
      momentos: ["snack", "desayuno"],
      lugares: ["panaderia", "puesto"],
      aventura: "para-todos",
      regiones: ["caribe"],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se vende en panaderías y puestos del Caribe, de Limón a Puerto Viejo, que no lo anuncian en el nombre.",
      foto: null,
    },
    {
      id: "chifrijo",
      nombre: "Chifrijo",
      resumen:
        "Frijoles, arroz, chicharrón y pico de gallo, con tortillas tostadas.",
      descripcion:
        "La boca de bar más pedida del país, inventada en una cantina de San José en los años noventa. En un cuenco van arroz, frijoles, chicharrón, pico de gallo y aguacate, y se come con tortillas tostadas, con una cerveza fría.",
      sabor: "Crocante, salado y fresco por el pico de gallo.",
      ingredientes: [
        "Arroz y frijoles",
        "Chicharrón de cerdo",
        "Pico de gallo y aguacate",
        "Tortillas tostadas",
      ],
      contiene: ["cerdo"],
      picante: 1,
      precio: 2,
      momentos: ["cena", "snack"],
      lugares: ["bar", "casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        en: ["bar", "comida"],
        cocinas: ["costa_rican", "regional"],
        nombres: ["cantina", "chifrijo"],
      },
      foto: null,
    },
    {
      id: "ceviche",
      nombre: "Ceviche tico",
      resumen:
        "Pescado blanco en limón con culantro y chile dulce, con galletas.",
      descripcion:
        "Corvina o dorado cortados chicos y curados en limón con cebolla, chile dulce y mucho culantro. Se vende en las cevicherías y en los carritos de la playa, y se come con galletas de soda o patacones.",
      sabor: "Ácido, fresco y herbal.",
      ingredientes: [
        "Corvina o dorado",
        "Limón",
        "Cebolla, chile dulce y culantro",
        "Galletas de soda",
      ],
      contiene: ["pescado", "gluten"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo", "snack"],
      lugares: ["casual", "puesto", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["seafood", "ceviche"],
        nombres: ["cevich", "marisc"],
      },
      foto: null,
    },
    {
      id: "tamal",
      nombre: "Tamal navideño",
      resumen:
        "Tamal de masa con cerdo, arroz y verduras, envuelto en hoja de plátano.",
      descripcion:
        "En diciembre, las familias se juntan a hacer decenas de tamales y los atan de a dos, en 'piñas'. La masa lleva cerdo, arroz, garbanzos, chile dulce, aceitunas y alcaparras, y se cuece envuelta en hoja de plátano.",
      sabor: "Suave, especiado y salado.",
      ingredientes: [
        "Masa de maíz",
        "Cerdo",
        "Arroz, garbanzos y chile dulce",
        "Aceitunas y alcaparras",
        "Hoja de plátano",
      ],
      contiene: ["cerdo"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "cena"],
      lugares: ["casa"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se hace en casa en diciembre; las sodas y los supermercados también los venden en esa época.",
      foto: null,
    },
    {
      id: "chorreadas",
      nombre: "Chorreadas",
      resumen: "Panqueques de maíz tierno, con natilla.",
      descripcion:
        "El elote tierno se muele con huevo, leche y un poco de azúcar, y la mezcla se chorrea en la plancha. Se comen calientes con natilla, en el desayuno o en la merienda, sobre todo en las ferias y en las sodas de carretera.",
      sabor: "Dulce, suave y a maíz fresco.",
      ingredientes: ["Elote tierno molido", "Huevo y leche", "Natilla"],
      contiene: ["huevo", "lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "snack"],
      lugares: ["casual", "puesto"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se hacen en ferias, sodas de carretera y casas: buscalas en la pizarra de la soda.",
      foto: null,
    },
    {
      id: "agua-dulce",
      nombre: "Agua dulce",
      resumen: "Tapa de dulce disuelta en agua caliente o en leche.",
      descripcion:
        "La bebida del campo y del frío. La tapa de dulce —el azúcar de caña sin refinar, en bloque— se disuelve en agua caliente o en leche, y se toma con el desayuno o a la tarde.",
      sabor: "Dulce, a caña y melaza.",
      ingredientes: ["Tapa de dulce", "Agua caliente o leche"],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["casual", "casa"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa: "La sirve cualquier soda, sobre todo en el desayuno.",
      foto: null,
    },
    {
      id: "cafe-chorreado",
      nombre: "Café chorreado",
      resumen:
        "Café filtrado en una bolsita de tela, sobre un soporte de madera.",
      descripcion:
        "La manera tica de hacer café: el agua caliente se vierte de a poco sobre el café molido en una bolsita de tela, colgada de un soporte de madera, el chorreador. En Tarrazú y en el Valle Central hay fincas que se visitan.",
      sabor: "Limpio, suave y aromático.",
      ingredientes: ["Café arábica", "Agua caliente"],
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
      id: "chiliguaro",
      nombre: "Chiliguaro",
      resumen: "Un shot de guaro con jugo de tomate, limón y chile picante.",
      descripcion:
        "El trago de los bares ticos desde hace unos años. El guaro, el aguardiente de caña nacional, se mezcla con jugo de tomate, limón, sal y salsa picante, y se sirve en vasito.",
      sabor: "Picante, salado y fuerte.",
      ingredientes: [
        "Guaro (aguardiente de caña)",
        "Jugo de tomate y limón",
        "Salsa picante",
      ],
      contiene: ["alcohol"],
      picante: 2,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["bar"],
      aventura: "para-animarse",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa: "Se pide en cualquier bar del país.",
      foto: null,
    },
  ],

  menciones: [],

  revisado: "2026-11-12",
};
