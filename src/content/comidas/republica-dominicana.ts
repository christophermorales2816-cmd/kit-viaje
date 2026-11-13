import type { CatalogoDeComida } from "./types";

export const republicaDominicana: CatalogoDeComida = {
  slug: "republica-dominicana",

  intro: [
    "La comida dominicana es criolla y abundante: al mediodía, la bandera —arroz, habichuelas y carne guisada— está en todas las mesas, y a la mañana, el mangú con los tres golpes. Lo taíno, lo español y lo africano se mezclan en cada olla.",
    "Se come en los comedores, en los colmados —el almacén de barrio que a la noche pone música y vende cerveza bien fría— y en los carritos de la calle, que venden chimis, quipes y frituras. En la costa, el pescado se fríe entero o se cocina con coco, como en Samaná.",
    "Para tomar hay morir soñando, jugos de chinola y de tamarindo, ron y la mamajuana, una botella de ron, vino y miel en la que maceran cortezas y hierbas.",
  ],

  despensa: {
    intro:
      "Una despensa de arroz, habichuelas y víveres, con el sazón de las hierbas criollas.",
    ingredientes: [
      {
        nombre: "Arroz",
        descripcion:
          "Blanco y suelto, todos los días; con el concón, la costra tostada del fondo de la olla, que se pelea en cada casa.",
      },
      {
        nombre: "Habichuelas",
        descripcion:
          "Así se les dice a los frijoles: rojas o negras, guisadas con auyama para espesar.",
      },
      {
        nombre: "Víveres",
        descripcion:
          "Los tubérculos y los plátanos: plátano verde y maduro, yuca, yautía, batata y ñame.",
      },
      {
        nombre: "Sazón criollo",
        descripcion:
          "Ajo, cebolla, ají cubanela, cilantro, orégano dominicano y naranja agria: la base de casi todo guiso.",
      },
      {
        nombre: "Coco",
        descripcion:
          "Manda en la cocina de Samaná, que lo pone en el pescado, en el arroz y en los dulces.",
      },
    ],
  },

  foto: null,

  regiones: [
    { id: "santo-domingo", nombre: "Santo Domingo" },
    { id: "cibao", nombre: "Santiago y el Cibao" },
    { id: "este", nombre: "El este: Punta Cana y La Romana" },
    { id: "norte", nombre: "La costa norte: Puerto Plata y Cabarete" },
    { id: "samana", nombre: "Samaná" },
    { id: "sur", nombre: "Barahona y el sur" },
  ],

  extracto: "central-america/haiti-and-domrep",
  ciudades: [
    {
      id: "santo-domingo",
      nombre: "Santo Domingo",
      coords: [18.4735, -69.884],
      region: "santo-domingo",
    },
    {
      id: "santiago",
      nombre: "Santiago de los Caballeros",
      coords: [19.45, -70.695],
      region: "cibao",
    },
    {
      id: "jarabacoa",
      nombre: "Jarabacoa",
      coords: [19.1175, -70.6369],
      region: "cibao",
    },
    {
      id: "punta-cana",
      nombre: "Punta Cana y Bávaro",
      coords: [18.6828, -68.4157],
      region: "este",
    },
    {
      id: "la-romana",
      nombre: "La Romana",
      coords: [18.4273, -68.9728],
      region: "este",
    },
    {
      id: "puerto-plata",
      nombre: "Puerto Plata",
      coords: [19.7934, -70.6884],
      region: "norte",
    },
    {
      id: "cabarete",
      nombre: "Cabarete",
      coords: [19.75, -70.4083],
      region: "norte",
    },
    {
      id: "samana",
      nombre: "Samaná",
      coords: [19.2058, -69.3369],
      region: "samana",
    },
    {
      id: "las-terrenas",
      nombre: "Las Terrenas",
      coords: [19.32, -69.54],
      region: "samana",
    },
    {
      id: "barahona",
      nombre: "Barahona",
      coords: [18.2085, -71.1008],
      region: "sur",
    },
  ],

  nombresDeLugares: {
    casual: "Comedor",
    almacen: "Colmado",
    bar: "Bar o colmadón",
    puesto: "Carrito o puesto",
  },

  platos: [
    {
      id: "la-bandera",
      nombre: "La bandera",
      resumen:
        "Arroz blanco, habichuelas guisadas y carne guisada, con ensalada.",
      descripcion:
        "El almuerzo nacional, que se llama como la bandera porque es igual de dominicano. Arroz blanco, habichuelas rojas guisadas con auyama y una carne guisada —pollo, res o cerdo—, con ensalada y, muchas veces, tostones o maduros.",
      sabor: "Casero, jugoso y reconfortante.",
      ingredientes: [
        "Arroz blanco",
        "Habichuelas rojas guisadas con auyama",
        "Pollo o res guisados",
        "Ensalada",
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
        cocinas: ["dominican", "regional"],
        nombres: ["comedor", "criollo", "criolla", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "mangu",
      nombre: "Mangú con los tres golpes",
      resumen:
        "Puré de plátano verde con cebolla, salami frito, queso frito y huevo.",
      descripcion:
        "El desayuno dominicano. El plátano verde se hierve y se maja con mantequilla y un poco del agua de cocción, y se cubre con cebolla roja salteada en vinagre. Los tres golpes son salami frito, queso de freír y huevo frito.",
      sabor: "Suave, salado y con la cebolla ácida.",
      ingredientes: [
        "Plátano verde majado",
        "Cebolla roja en vinagre",
        "Salami dominicano frito",
        "Queso de freír",
        "Huevo frito",
      ],
      contiene: ["cerdo", "carne", "lacteos", "huevo"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno"],
      lugares: ["casual", "cafe"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        en: ["comida", "cafe"],
        cocinas: ["dominican", "regional"],
        nombres: ["comedor", "desayun", "criollo", "criolla"],
      },
      foto: null,
    },
    {
      id: "sancocho",
      nombre: "Sancocho de siete carnes",
      resumen:
        "Guiso espeso de varias carnes y víveres, el plato de las celebraciones.",
      descripcion:
        "El sancocho dominicano es espeso, casi un guiso, y el de fiesta lleva hasta siete carnes: res, cerdo, pollo, chivo, longaniza, costilla ahumada y gallina. Se cocinan con plátano, yuca, yautía, ñame y auyama, y se sirve con arroz blanco y aguacate.",
      sabor: "Espeso, profundo y con el dulce de la auyama.",
      ingredientes: [
        "Res, cerdo, pollo y chivo",
        "Longaniza y costilla ahumada",
        "Plátano, yuca, yautía y ñame",
        "Auyama",
        "Cilantro y orégano",
      ],
      contiene: ["carne", "cerdo"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["dominican", "regional"],
        nombres: ["sancocho", "comedor", "criollo", "criolla"],
      },
      foto: null,
    },
    {
      id: "pica-pollo",
      nombre: "Pica pollo",
      resumen: "Trozos de pollo frito, crocante, con tostones.",
      descripcion:
        "El pollo frito dominicano, de herencia chino-dominicana: trozos con hueso, adobados con limón y ajo, rebozados en harina y fritos hasta que crujen. Se come con tostones y kétchup con mayonesa, en locales que no cierran hasta tarde.",
      sabor: "Crocante, salado y ácido por el limón.",
      ingredientes: [
        "Pollo adobado con limón y ajo",
        "Harina para rebozar",
        "Tostones",
      ],
      contiene: ["carne", "gluten"],
      picante: 0,
      precio: 1,
      momentos: ["almuerzo", "cena", "snack"],
      lugares: ["casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["chicken"],
        nombres: ["pica pollo", "picapollo", "pica-pollo"],
      },
      foto: null,
    },
    {
      id: "chimi",
      nombre: "Chimi",
      resumen:
        "Hamburguesa callejera con carne, repollo y salsa rosada, en pan de agua.",
      descripcion:
        "El chimichurri —el chimi— es la hamburguesa de los carritos de la noche. Una torta de carne molida de res o de cerdo se cocina en la plancha y se mete en un pan de agua con repollo, cebolla, tomate y una salsa rosada de mayonesa y kétchup.",
      sabor: "Jugoso, cremoso y grasoso.",
      ingredientes: [
        "Pan de agua",
        "Carne molida de res o de cerdo",
        "Repollo, cebolla y tomate",
        "Salsa de mayonesa y kétchup",
      ],
      contiene: ["gluten", "carne", "cerdo", "huevo"],
      picante: 0,
      precio: 1,
      momentos: ["cena", "snack"],
      lugares: ["puesto"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: { nombres: ["chimi"] },
      foto: null,
    },
    {
      id: "pescado-con-coco",
      nombre: "Pescado con coco",
      resumen:
        "Pescado entero en salsa de leche de coco con ajíes y especias, de Samaná.",
      descripcion:
        "En Samaná, donde llegaron afroamericanos libres en el siglo XIX, la cocina pone coco en todo. El pescado entero, frito o a la plancha, se termina en una salsa de leche de coco con tomate, ají, ajo y cilantro, y se come con arroz y tostones frente al mar.",
      sabor: "Cremoso, dulce y marino.",
      ingredientes: [
        "Pescado entero (chillo o mero)",
        "Leche de coco",
        "Tomate, ají, ajo y cilantro",
        "Arroz y tostones",
      ],
      contiene: ["pescado"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo", "cena"],
      lugares: ["restaurante", "casual"],
      aventura: "para-todos",
      regiones: ["samana"],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["seafood", "fish"],
        nombres: ["pescad", "marisc"],
      },
      foto: null,
    },
    {
      id: "locrio",
      nombre: "Locrio",
      resumen: "Arroz cocido con pollo, salami o arenque, en una sola olla.",
      descripcion:
        "El primo dominicano de la paella. El arroz se cocina en la misma olla que el pollo guisado —o el salami, o el arenque—, con sazón criollo y pimientos, hasta que absorbe todo el sabor. Lo mejor es el concón del fondo.",
      sabor: "Sabroso, jugoso y con el fondo tostado.",
      ingredientes: ["Arroz", "Pollo guisado", "Sazón criollo y pimientos"],
      contiene: ["carne"],
      picante: 0,
      precio: 1,
      momentos: ["almuerzo"],
      lugares: ["casual"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["dominican", "regional"],
        nombres: ["comedor", "criollo", "criolla", "típic", "tipic"],
      },
      foto: null,
    },
    {
      id: "quipes",
      nombre: "Quipes",
      resumen: "Croquetas fritas de trigo y carne molida, de origen libanés.",
      descripcion:
        "Los trajeron los inmigrantes libaneses a principios del siglo XX, y hoy se venden en cualquier cafetería y carrito. La masa de trigo partido con carne molida se rellena con más carne guisada y se fríe.",
      sabor: "Crocantes, especiados y con relleno jugoso.",
      ingredientes: [
        "Trigo partido (bulgur)",
        "Carne molida de res",
        "Cebolla y hierbabuena",
      ],
      contiene: ["gluten", "carne"],
      picante: 0,
      precio: 1,
      momentos: ["snack", "desayuno"],
      lugares: ["puesto", "casual", "panaderia"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se venden en cafeterías, colmados y carritos, que no los anuncian en el nombre.",
      foto: null,
    },
    {
      id: "habichuelas-con-dulce",
      nombre: "Habichuelas con dulce",
      resumen: "Crema dulce de habichuelas rojas con leche, batata y especias.",
      descripcion:
        "El postre de la Cuaresma y de la Semana Santa, que las familias reparten entre vecinos. Las habichuelas rojas se cocinan y se licúan con leche de coco y leche evaporada, azúcar, canela y clavo, y se sirven con batata, pasas y galletitas de leche.",
      sabor: "Dulce, especiado y cremoso, aunque suene raro.",
      ingredientes: [
        "Habichuelas rojas",
        "Leche de coco y leche evaporada",
        "Batata y pasas",
        "Canela y clavo",
        "Galletitas de leche",
      ],
      contiene: ["lacteos", "gluten"],
      picante: 0,
      precio: 1,
      momentos: ["postre"],
      lugares: ["casa", "casual"],
      aventura: "para-animarse",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Solo se hace en Cuaresma y Semana Santa, en casas y en algunas cafeterías y comedores.",
      foto: null,
    },
    {
      id: "yaniqueques",
      nombre: "Yaniqueques",
      resumen: "Discos de masa frita, crocantes y salados, de la playa.",
      descripcion:
        "Su nombre viene del inglés 'johnny cake'. La masa de harina se estira bien fina y se fríe hasta quedar crocante; se venden en las playas, sobre todo en Boca Chica, junto con pescado frito.",
      sabor: "Crocantes, salados y grasosos.",
      ingredientes: [
        "Harina de trigo",
        "Polvo de hornear",
        "Aceite para freír",
      ],
      contiene: ["gluten"],
      picante: 0,
      precio: 1,
      momentos: ["snack"],
      lugares: ["puesto"],
      aventura: "para-todos",
      regiones: ["santo-domingo"],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se venden en puestos de la playa, sobre todo en Boca Chica y Guayacanes, que no están en el mapa.",
      foto: null,
    },
    {
      id: "morir-sonando",
      nombre: "Morir soñando",
      resumen: "Jugo de naranja con leche, azúcar y mucho hielo.",
      descripcion:
        "La bebida más dominicana: jugo de naranja batido con leche evaporada, azúcar y hielo. Se mezcla con cuidado, la leche sobre el jugo bien frío, para que no se corte. El nombre dice lo que se siente al tomarlo con calor.",
      sabor: "Cremoso, cítrico y muy refrescante.",
      ingredientes: ["Jugo de naranja", "Leche evaporada", "Azúcar y hielo"],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["casual", "cafe"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      sinMapa:
        "Se pide en cualquier comedor, cafetería o puesto de jugos: no hace falta buscarlo.",
      foto: null,
    },
    {
      id: "mamajuana",
      nombre: "Mamajuana",
      resumen: "Ron, vino tinto y miel macerados con cortezas y hierbas.",
      descripcion:
        "Una botella llena de cortezas, raíces y hierbas secas a la que se le agrega ron, vino tinto y miel, y que se deja macerar. Se toma en copitas, y se le atribuye de todo, sobre todo poderes afrodisíacos.",
      sabor: "Dulce, herbal y amargo a la vez, con la fuerza del ron.",
      ingredientes: ["Ron", "Vino tinto", "Miel", "Cortezas, raíces y hierbas"],
      contiene: ["alcohol", "miel"],
      picante: 0,
      precio: 1,
      momentos: ["bebida"],
      lugares: ["bar", "tienda"],
      aventura: "para-animarse",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se pide en bares y colmados, y se vende en botellas en tiendas y aeropuertos.",
      foto: null,
    },
  ],

  menciones: [],

  revisado: "2026-11-12",
};
