import type { CatalogoDeComida } from "./types";

export const nicaragua: CatalogoDeComida = {
  slug: "nicaragua",

  intro: [
    "La cocina nica es de maíz, de frijol rojo y de fritanga: los puestos de la calle que a la tarde prenden la parrilla y fríen carne, plátano, queso y gallo pinto, y que son la mejor manera de comer bien y barato en Granada o en León.",
    "En el Pacífico están los platos de siempre —el vigorón, el nacatamal, el indio viejo— y en la costa caribe, de habla inglesa y miskita, otra cocina: el rondón, el pan de coco y el pescado en leche de coco.",
    "Para tomar está el pinolillo, la bebida de maíz y cacao que dio a los nicaragüenses su apodo, pinoleros; un café de altura del norte, y un ron añejo que se destila al pie de un volcán.",
  ],

  despensa: {
    intro:
      "Una despensa de milpa y de trópico: maíz, frijol rojo, plátano y yuca, con cacao y café.",
    ingredientes: [
      {
        nombre: "Maíz",
        descripcion:
          "Para tortillas, nacatamales, rosquillas y bebidas como el pinolillo y la chicha.",
      },
      {
        nombre: "Frijol rojo",
        descripcion:
          "El de todos los días: cocido, frito con arroz en el gallo pinto o molido.",
      },
      {
        nombre: "Quesillo y cuajada",
        descripcion:
          "Quesos frescos: el quesillo es elástico y se enrolla en tortilla; la cuajada, blanda y salada.",
      },
      {
        nombre: "Chiltoma",
        descripcion:
          "Así se le dice al pimiento verde, que va en el gallo pinto, en los guisos y en el nacatamal.",
      },
      {
        nombre: "Naranja agria",
        descripcion:
          "El ácido de la cocina nica: adoba la carne y le da el toque al indio viejo.",
      },
      {
        nombre: "Cacao",
        descripcion:
          "Se toma molido con maíz en el pinolillo y en el tiste, servido en jícara.",
      },
    ],
  },

  foto: null,

  regiones: [
    { id: "pacifico", nombre: "El Pacífico: Managua, Granada y León" },
    { id: "norte", nombre: "El norte cafetalero" },
    { id: "caribe", nombre: "La costa caribe" },
  ],

  extracto: "central-america/nicaragua",
  ciudades: [
    {
      id: "managua",
      nombre: "Managua",
      coords: [12.1364, -86.2514],
      region: "pacifico",
    },
    {
      id: "granada",
      nombre: "Granada",
      coords: [11.9344, -85.956],
      region: "pacifico",
    },
    {
      id: "leon",
      nombre: "León",
      coords: [12.4345, -86.878],
      region: "pacifico",
    },
    {
      id: "masaya",
      nombre: "Masaya",
      coords: [11.9744, -86.0942],
      region: "pacifico",
    },
    {
      id: "san-juan-del-sur",
      nombre: "San Juan del Sur",
      coords: [11.2529, -85.8705],
      region: "pacifico",
    },
    {
      id: "ometepe",
      nombre: "Isla de Ometepe",
      coords: [11.5394, -85.6967],
      region: "pacifico",
    },
    {
      id: "esteli",
      nombre: "Estelí",
      coords: [13.0919, -86.3538],
      region: "norte",
    },
    {
      id: "matagalpa",
      nombre: "Matagalpa",
      coords: [12.9256, -85.9175],
      region: "norte",
    },
    {
      id: "bluefields",
      nombre: "Bluefields",
      coords: [12.0137, -83.7635],
      region: "caribe",
    },
    {
      id: "corn-islands",
      nombre: "Corn Islands",
      coords: [12.1694, -83.0418],
      region: "caribe",
    },
  ],

  nombresDeLugares: {
    casual: "Comedor o fritanga",
    almacen: "Pulpería",
    puesto: "Fritanga o puesto",
  },

  platos: [
    {
      id: "gallo-pinto",
      nombre: "Gallo pinto",
      resumen: "Arroz y frijoles rojos fritos juntos, con cebolla y chiltoma.",
      descripcion:
        "El arroz y los frijoles rojos, ya cocidos, se fríen juntos con cebolla y chiltoma hasta que el arroz toma color. Es el desayuno de todos los días, con huevo, queso frito, plátano maduro y crema, y vuelve en el almuerzo y en la cena. Costa Rica también lo reclama como propio.",
      sabor: "Tostado, salado y con el sabor del frijol.",
      ingredientes: ["Arroz", "Frijoles rojos", "Cebolla y chiltoma"],
      contiene: [],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "almuerzo", "cena"],
      lugares: ["casual", "puesto"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      nota: "Solo es vegano: casi siempre viene con huevo, queso y crema.",
      buscar: {
        cocinas: ["nicaraguan", "regional"],
        nombres: ["fritang", "comedor", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "vigoron",
      nombre: "Vigorón",
      resumen:
        "Yuca hervida, chicharrón y ensalada de repollo, en hoja de plátano.",
      descripcion:
        "El plato de Granada, que se come en el parque central servido sobre una hoja de plátano. Yuca hervida, chicharrón crocante y una ensalada de repollo, tomate y chile en vinagre.",
      sabor: "Crocante, ácido y contundente.",
      ingredientes: [
        "Yuca hervida",
        "Chicharrón",
        "Ensalada de repollo, tomate y chile en vinagre",
        "Hoja de plátano",
      ],
      contiene: ["cerdo"],
      picante: 1,
      precio: 1,
      momentos: ["almuerzo", "snack"],
      lugares: ["puesto"],
      aventura: "para-todos",
      regiones: ["pacifico"],
      imperdible: true,
      paraComerSolo: true,
      buscar: { nombres: ["vigorón", "vigoron", "fritang"] },
      foto: null,
    },
    {
      id: "nacatamal",
      nombre: "Nacatamal",
      resumen:
        "Tamal grande de masa con cerdo, arroz, papa y hierbabuena, en hoja de plátano.",
      descripcion:
        "El desayuno de los fines de semana, con pan y café. La masa de maíz, con manteca y naranja agria, se rellena con cerdo adobado, arroz, papa, tomate, chiltoma, cebolla y hierbabuena, se envuelve en hoja de plátano y se cuece durante horas.",
      sabor: "Húmedo, especiado y fresco por la hierbabuena.",
      ingredientes: [
        "Masa de maíz con manteca de cerdo",
        "Cerdo adobado",
        "Arroz y papa",
        "Tomate, chiltoma y hierbabuena",
        "Hoja de plátano",
      ],
      contiene: ["cerdo"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "cena"],
      lugares: ["casual", "puesto", "casa"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      nota: "Muchas casas venden los sábados y los domingos: lo anuncian con un cartel en la puerta.",
      buscar: { nombres: ["nacatamal", "fritang", "comedor"] },
      foto: null,
    },
    {
      id: "indio-viejo",
      nombre: "Indio viejo",
      resumen:
        "Guiso espeso de carne deshilachada con masa de maíz y naranja agria.",
      descripcion:
        "Uno de los platos más antiguos del país. La carne de res se deshilacha y se cocina con tortilla o masa de maíz desleída, cebolla, chiltoma, tomate y achiote hasta quedar espeso, y se termina con naranja agria y hierbabuena.",
      sabor: "Espeso, ácido y herbal.",
      ingredientes: [
        "Carne de res deshilachada",
        "Masa de maíz",
        "Naranja agria y hierbabuena",
        "Achiote, tomate y chiltoma",
      ],
      contiene: ["carne"],
      picante: 0,
      precio: 1,
      momentos: ["almuerzo"],
      lugares: ["casual"],
      aventura: "para-todos",
      regiones: ["pacifico"],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["nicaraguan", "regional"],
        nombres: ["típic", "tipic", "comedor"],
      },
      foto: null,
    },
    {
      id: "quesillo",
      nombre: "Quesillo",
      resumen:
        "Tortilla con queso fresco elástico, crema y cebolla en vinagre.",
      descripcion:
        "El de la ruta entre Managua y León, donde Nagarote y La Paz Centro tienen puestos uno al lado del otro. Una tortilla caliente envuelve una tira de quesillo, cebolla encurtida en vinagre y crema, y se sirve en una bolsa para comer en el camino.",
      sabor: "Cremoso, ácido y salado.",
      ingredientes: [
        "Tortilla de maíz",
        "Quesillo",
        "Crema",
        "Cebolla encurtida en vinagre",
      ],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["snack"],
      lugares: ["puesto"],
      aventura: "para-todos",
      regiones: ["pacifico"],
      imperdible: true,
      paraComerSolo: true,
      buscar: { nombres: ["quesill"] },
      foto: null,
    },
    {
      id: "rondon",
      nombre: "Rondón",
      local: "Rundown",
      resumen:
        "Guiso caribeño de pescado y mariscos en leche de coco con tubérculos.",
      descripcion:
        "El plato de Bluefields y de las Corn Islands, de herencia afrocaribeña. Pescado, langosta o caracol se cocinan a fuego lento en leche de coco con yuca, quequisque, plátano y fruta de pan, hasta que el caldo se espesa.",
      sabor: "Cremoso, dulce y marino.",
      ingredientes: [
        "Pescado, langosta o caracol",
        "Leche de coco",
        "Yuca, quequisque y plátano",
        "Fruta de pan",
      ],
      contiene: ["pescado", "mariscos"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo", "cena"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: ["caribe"],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["seafood", "caribbean"],
        nombres: ["rondón", "rondon", "rundown", "marisc"],
      },
      foto: null,
    },
    {
      id: "vaho",
      nombre: "Vaho",
      resumen:
        "Carne salada, plátano y yuca cocidos al vapor en hojas de plátano.",
      descripcion:
        "El almuerzo de los domingos. En una olla grande se acomodan capas de hojas de plátano, carne de res salada, plátano verde y maduro, y yuca, y se cuecen horas al vapor —al vaho—. Se sirve con ensalada de repollo.",
      sabor: "Ahumado, salado y dulce a la vez.",
      ingredientes: [
        "Carne de res salada",
        "Plátano verde y maduro",
        "Yuca",
        "Hojas de plátano",
        "Ensalada de repollo",
      ],
      contiene: ["carne"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual"],
      aventura: "para-todos",
      regiones: ["pacifico"],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["nicaraguan", "regional"],
        nombres: ["vaho", "baho", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "rosquillas",
      nombre: "Rosquillas somoteñas",
      resumen: "Rosquitas horneadas de maíz y cuajada, de Somoto.",
      descripcion:
        "Las del norte, de Somoto, junto a la frontera con Honduras. Masa de maíz con cuajada, huevo y manteca, horneada en forma de aro hasta quedar crocante. Se comen con café; las hojaldras, con dulce de panela, son sus primas.",
      sabor: "Crocantes, saladas y a queso.",
      ingredientes: ["Masa de maíz", "Cuajada", "Huevo y manteca de cerdo"],
      contiene: ["lacteos", "huevo", "cerdo"],
      picante: 0,
      precio: 1,
      momentos: ["snack", "desayuno"],
      lugares: ["panaderia", "mercado", "puesto"],
      aventura: "para-todos",
      regiones: ["norte"],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        en: ["panaderia", "comida", "cafe"],
        nombres: ["rosquill"],
      },
      foto: null,
    },
    {
      id: "pinolillo",
      nombre: "Pinolillo",
      resumen: "Bebida de maíz tostado y cacao, servida en jícara.",
      descripcion:
        "La bebida nacional, que dio a los nicaragüenses su apodo: pinoleros. El maíz tostado y el cacao se muelen con canela y clavo, y el polvo se bate con agua o con leche, fría o caliente.",
      sabor: "Tostado, terroso y apenas achocolatado.",
      ingredientes: [
        "Maíz tostado y molido",
        "Cacao",
        "Canela y clavo",
        "Agua o leche",
      ],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["casual", "mercado"],
      aventura: "para-animarse",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se toma en comedores y mercados, donde se ofrecen refrescos naturales, y en casa.",
      foto: null,
    },
    {
      id: "ron",
      nombre: "Ron añejo",
      resumen: "El ron nica, añejado durante años al pie de un volcán.",
      descripcion:
        "Nicaragua destila en Chichigalpa, al pie del volcán San Cristóbal, uno de los rones más premiados del mundo. Los añejos se toman solos o con hielo; los jóvenes, con soda, limón o coco.",
      sabor: "Suave, a caramelo, vainilla y madera.",
      ingredientes: ["Ron de caña añejado"],
      contiene: ["alcohol"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["bar", "tienda"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa: "Se pide en cualquier bar y se vende en cualquier pulpería.",
      foto: null,
    },
    {
      id: "cafe",
      nombre: "Café de Matagalpa y Jinotega",
      resumen: "Café de altura de las montañas del norte.",
      descripcion:
        "Casi todo el café del país crece en las montañas del norte, alrededor de Matagalpa y de Jinotega, muchas veces a la sombra del bosque. Hay fincas y cooperativas que se pueden visitar.",
      sabor: "Suave, dulce y con notas a chocolate.",
      ingredientes: ["Café arábica de altura"],
      contiene: [],
      picante: 0,
      precio: 1,
      momentos: ["bebida", "desayuno"],
      lugares: ["cafe"],
      aventura: "para-todos",
      regiones: ["norte"],
      imperdible: false,
      paraComerSolo: true,
      buscar: { en: ["cafe"] },
      foto: null,
    },
  ],

  menciones: [],

  revisado: "2026-11-12",
};
