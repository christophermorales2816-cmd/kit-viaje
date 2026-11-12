import type { CatalogoDeComida } from "./types";

export const guatemala: CatalogoDeComida = {
  slug: "guatemala",

  intro: [
    "La cocina guatemalteca es maya en su base —maíz, frijol, chile, cacao— y mestiza en todo lo demás. Su firma son los recados: salsas espesas de chiles, tomate y semillas tostadas que se muelen en piedra y que hacen del pepián y del kak'ik platos de fiesta.",
    "En el altiplano se come en los mercados y en los comedores, con tortillas de maíz palmeadas a mano que no se terminan nunca. En la capital manda la calle, con los shucos; y en Livingston, sobre el Caribe, la cocina garífuna pone coco y mariscos.",
    "Para tomar hay atoles calientes, de maíz o de elote, y un café de altura que se cultiva en las laderas de los volcanes, de Antigua a Huehuetenango.",
  ],

  despensa: {
    intro:
      "Una despensa de milpa: maíz, frijol, chile y calabaza, con semillas y cacao para los recados.",
    ingredientes: [
      {
        nombre: "Maíz",
        descripcion:
          "Blanco, amarillo, negro o rojo, se nixtamaliza y se vuelve tortilla, tamal, chuchito o atol. Las tortillas se palmean a mano todo el día.",
      },
      {
        nombre: "Frijol negro",
        descripcion:
          "Está en todas las comidas: entero, colado o volteado, una pasta frita que acompaña el desayuno.",
      },
      {
        nombre: "Chiles secos",
        descripcion:
          "El guaque y el pasa dan color y cuerpo a los recados; el cobanero, chico y ahumado, es el de Alta Verapaz.",
      },
      {
        nombre: "Pepitoria y ajonjolí",
        descripcion:
          "Las semillas de calabaza y de sésamo, tostadas y molidas, espesan los recados del pepián y de los tamales.",
      },
      {
        nombre: "Cacao",
        descripcion:
          "Los mayas lo tomaban como bebida, y todavía se vende en tablillas para hacer chocolate caliente con agua.",
      },
      {
        nombre: "Café",
        descripcion:
          "De altura y de suelo volcánico: Antigua, Atitlán, Huehuetenango y Cobán tienen cada uno su perfil.",
      },
    ],
  },

  foto: null,

  regiones: [
    { id: "capital", nombre: "Ciudad de Guatemala" },
    { id: "altiplano", nombre: "Antigua y el altiplano" },
    { id: "verapaz", nombre: "Las Verapaces" },
    { id: "caribe", nombre: "Izabal y el Caribe" },
    { id: "peten", nombre: "Petén" },
  ],

  extracto: "central-america/guatemala",
  ciudades: [
    {
      id: "ciudad-de-guatemala",
      nombre: "Ciudad de Guatemala",
      coords: [14.6407, -90.5133],
      region: "capital",
    },
    {
      id: "antigua",
      nombre: "Antigua Guatemala",
      coords: [14.5573, -90.7337],
      region: "altiplano",
    },
    {
      id: "panajachel",
      nombre: "Lago de Atitlán (Panajachel)",
      coords: [14.7406, -91.1586],
      region: "altiplano",
    },
    {
      id: "chichicastenango",
      nombre: "Chichicastenango",
      coords: [14.9441, -91.111],
      region: "altiplano",
    },
    {
      id: "quetzaltenango",
      nombre: "Quetzaltenango",
      coords: [14.8347, -91.518],
      region: "altiplano",
    },
    {
      id: "coban",
      nombre: "Cobán",
      coords: [15.4708, -90.3708],
      region: "verapaz",
    },
    {
      id: "livingston",
      nombre: "Livingston",
      coords: [15.827, -88.75],
      region: "caribe",
    },
    {
      id: "flores",
      nombre: "Flores (Tikal)",
      coords: [16.929, -89.8926],
      region: "peten",
    },
  ],

  nombresDeLugares: {
    casual: "Comedor",
    almacen: "Tienda",
    puesto: "Puesto o carreta",
  },

  platos: [
    {
      id: "pepian",
      nombre: "Pepián",
      resumen:
        "Guiso de pollo en un recado de chiles, tomate y semillas tostadas.",
      descripcion:
        "Uno de los platos más antiguos del país, de raíz maya. El pollo, o la carne de res, se cocina en un recado espeso de tomate, miltomate, chile guaque, chile pasa, pepitoria y ajonjolí tostados y molidos, con güisquil, papa y ejotes. Se come con arroz y tortillas.",
      sabor: "Ahumado, terroso y especiado, apenas picante.",
      ingredientes: [
        "Pollo o carne de res",
        "Tomate y miltomate",
        "Chile guaque y chile pasa",
        "Pepitoria y ajonjolí (sésamo) tostados",
        "Güisquil, papa y ejotes",
      ],
      contiene: ["carne", "sesamo"],
      picante: 1,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["guatemalan", "regional"],
        nombres: ["típic", "tipic", "chapín", "chapin", "comedor"],
      },
      foto: null,
    },
    {
      id: "kakik",
      nombre: "Kak'ik",
      resumen: "Caldo rojo de chompipe con chile cobanero, achiote y culantro.",
      descripcion:
        "El plato q'eqchi' de Cobán. El chompipe —el pavo— se cocina en un caldo rojo y perfumado de tomate, miltomate, chile cobanero, achiote y culantro, y se sirve con arroz y tamalitos de masa envueltos en hoja.",
      sabor: "Profundo, ahumado y con un picor que se siente al final.",
      ingredientes: [
        "Chompipe (pavo)",
        "Tomate y miltomate",
        "Chile cobanero y chile guaque",
        "Achiote y culantro",
      ],
      contiene: ["carne"],
      picante: 2,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: ["verapaz"],
      imperdible: true,
      paraComerSolo: true,
      buscar: {
        cocinas: ["guatemalan", "regional"],
        nombres: ["kak'ik", "kakik", "típic", "tipic", "cobaner"],
      },
      foto: null,
    },
    {
      id: "jocon",
      nombre: "Jocón",
      resumen: "Pollo en una salsa verde de miltomate, cilantro y pepitoria.",
      descripcion:
        "El hermano verde del pepián. El pollo se cocina en una salsa de miltomate, cebolla, cilantro y chile verde, espesada con pepitoria y tortilla, y se sirve con arroz.",
      sabor: "Ácido, herbal y fresco.",
      ingredientes: [
        "Pollo",
        "Miltomate y cilantro",
        "Pepitoria y tortilla",
        "Chile verde",
      ],
      contiene: ["carne"],
      picante: 1,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casual", "restaurante"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["guatemalan", "regional"],
        nombres: ["típic", "tipic", "chapín", "chapin", "comedor"],
      },
      foto: null,
    },
    {
      id: "chuchitos",
      nombre: "Chuchitos",
      resumen:
        "Tamalitos firmes de masa con recado y carne, envueltos en tusa.",
      descripcion:
        "El tamal de todos los días, chico y firme. La masa se rellena con un recado de tomate y un trozo de cerdo o de pollo, se envuelve en tusa —la hoja seca del maíz— y se cuece al vapor. Se come con salsa de tomate y queso seco rallado.",
      sabor: "Masa compacta, salsa ácida y queso salado.",
      ingredientes: [
        "Masa de maíz",
        "Recado de tomate y chile",
        "Cerdo o pollo",
        "Queso seco rallado",
      ],
      contiene: ["cerdo", "carne", "lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["snack", "cena"],
      lugares: ["puesto", "casual", "mercado"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        en: ["comida", "mercado"],
        nombres: ["chuchito", "tamal", "comedor"],
      },
      foto: null,
    },
    {
      id: "tamales-colorados",
      nombre: "Tamales colorados",
      resumen:
        "Tamales grandes de masa suave con recado rojo, carne y aceitunas.",
      descripcion:
        "Los de los sábados y de la Navidad. La masa, suave y húmeda, lleva un recado rojo de tomate, chiles y semillas, un trozo de cerdo o de pollo, aceitunas, alcaparras, pasas y tiras de chile pimiento, y se envuelve en hojas de maxán y de plátano.",
      sabor: "Húmedo, especiado y con toques dulces y salados.",
      ingredientes: [
        "Masa de maíz",
        "Recado de tomate, chiles, pepitoria y ajonjolí (sésamo)",
        "Cerdo o pollo",
        "Aceitunas, alcaparras y pasas",
        "Hojas de maxán y de plátano",
      ],
      contiene: ["cerdo", "carne", "sesamo"],
      picante: 0,
      precio: 1,
      momentos: ["desayuno", "cena"],
      lugares: ["casual", "casa"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      nota: "Los sábados, muchas casas cuelgan un farolito rojo: avisa que ahí venden tamales.",
      buscar: { nombres: ["tamal", "comedor"] },
      foto: null,
    },
    {
      id: "hilachas",
      nombre: "Hilachas",
      resumen:
        "Carne de res deshilachada en salsa de tomate, con papa y güisquil.",
      descripcion:
        "Un guiso casero que está en el menú de casi todos los comedores. La carne se cocina hasta deshacerse en hilachas y se termina en una salsa de tomate, miltomate y chile guaque, con papa y güisquil.",
      sabor: "Tierno, ácido y reconfortante.",
      ingredientes: [
        "Carne de res",
        "Tomate y miltomate",
        "Chile guaque",
        "Papa y güisquil",
      ],
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
        cocinas: ["guatemalan", "regional"],
        nombres: ["típic", "tipic", "comedor"],
      },
      foto: null,
    },
    {
      id: "desayuno-chapin",
      nombre: "Desayuno chapín",
      resumen:
        "Huevos, frijoles volteados, plátano frito, crema, queso y tortillas.",
      descripcion:
        "El desayuno del país, en cualquier comedor o cafetería. Huevos estrellados o revueltos, frijoles negros volteados, plátanos maduros fritos, crema, queso fresco y tortillas o pan, con un café.",
      sabor: "Salado, dulce y cremoso, todo en el mismo plato.",
      ingredientes: [
        "Huevos",
        "Frijoles negros volteados",
        "Plátano maduro frito",
        "Crema y queso fresco",
        "Tortillas",
      ],
      contiene: ["huevo", "lacteos"],
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
        nombres: ["desayun", "típic", "tipic", "chapín", "chapin", "comedor"],
      },
      foto: null,
    },
    {
      id: "shucos",
      nombre: "Shucos",
      resumen:
        "Panes tostados con salchicha o carne, guacamole, repollo y salsas.",
      descripcion:
        "El perro caliente de la capital, que se vende en carretas a la salida de los colegios y en las esquinas. El pan se tuesta en la plancha y se carga de guacamole, repollo, salchicha, chorizo, longaniza o carne asada, mayonesa, mostaza y salsas. 'Shuco' quiere decir sucio.",
      sabor: "Tostado, grasoso y muy cargado.",
      ingredientes: [
        "Pan tostado a la plancha",
        "Salchicha, chorizo, longaniza o carne asada",
        "Guacamole y repollo",
        "Mayonesa, mostaza y salsas",
      ],
      contiene: ["gluten", "cerdo", "carne", "huevo"],
      picante: 1,
      precio: 1,
      momentos: ["snack", "cena"],
      lugares: ["puesto"],
      aventura: "para-todos",
      regiones: ["capital"],
      imperdible: true,
      paraComerSolo: true,
      buscar: { nombres: ["shuco"] },
      foto: null,
    },
    {
      id: "tapado",
      nombre: "Tapado",
      resumen:
        "Sopa garífuna de pescado y mariscos en leche de coco con plátano.",
      descripcion:
        "El plato de Livingston, el pueblo garífuna al que se llega en lancha. Pescado entero, camarones, cangrejo y caracol se cocinan en leche de coco con plátano verde y maduro, cilantro y chile.",
      sabor: "Cremoso, dulce por el coco y muy marino.",
      ingredientes: [
        "Pescado, camarones y cangrejo",
        "Leche de coco",
        "Plátano verde y maduro",
        "Cilantro y chile",
      ],
      contiene: ["pescado", "mariscos"],
      picante: 1,
      precio: 2,
      momentos: ["almuerzo", "cena"],
      lugares: ["restaurante", "casual"],
      aventura: "para-todos",
      regiones: ["caribe"],
      imperdible: false,
      paraComerSolo: true,
      buscar: {
        cocinas: ["seafood"],
        nombres: ["tapado", "garífuna", "garifuna", "marisc"],
      },
      foto: null,
    },
    {
      id: "rellenitos",
      nombre: "Rellenitos de plátano",
      resumen:
        "Plátano maduro relleno de frijol negro dulce con chocolate, frito.",
      descripcion:
        "Un postre que sorprende: el plátano maduro se cocina, se hace masa y se rellena con frijoles negros endulzados con azúcar, canela y chocolate. Se fríe y se espolvorea con azúcar.",
      sabor: "Dulce, suave y con el chocolate que asoma.",
      ingredientes: [
        "Plátano maduro",
        "Frijol negro dulce",
        "Chocolate y canela",
        "Azúcar",
      ],
      contiene: [],
      picante: 0,
      precio: 1,
      momentos: ["postre", "snack"],
      lugares: ["cafe", "mercado", "puesto"],
      aventura: "para-animarse",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Se venden en cafeterías, mercados y puestos de refacción, que casi nunca los anuncian en el nombre.",
      foto: null,
    },
    {
      id: "fiambre",
      nombre: "Fiambre",
      resumen:
        "Ensalada fría de decenas de ingredientes, solo el 1 de noviembre.",
      descripcion:
        "El plato del Día de Todos los Santos, cuando las familias visitan a sus muertos. Es una ensalada enorme de embutidos, carnes, quesos, huevo duro y verduras encurtidas en un caldillo de vinagre, y cada familia la hace a su manera.",
      sabor: "Ácido, salado y sorprendente en cada bocado.",
      ingredientes: [
        "Embutidos y carnes frías",
        "Pollo y lengua",
        "Quesos",
        "Huevo duro",
        "Verduras encurtidas en vinagre",
      ],
      contiene: ["cerdo", "carne", "lacteos", "huevo"],
      picante: 0,
      precio: 2,
      momentos: ["almuerzo"],
      lugares: ["casa", "restaurante"],
      aventura: "para-animarse",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Solo se hace para el Día de Todos los Santos, en casas y en algunos restaurantes que lo venden por encargo.",
      foto: null,
    },
    {
      id: "atol-de-elote",
      nombre: "Atol de elote",
      resumen: "Bebida caliente y espesa de maíz tierno, leche y canela.",
      descripcion:
        "Se toma en vaso o en guacal a la caída de la tarde, en los parques y los mercados. El elote se muele, se cuela y se cocina con leche, azúcar y canela hasta que espesa.",
      sabor: "Dulce, cremoso y a maíz recién cosechado.",
      ingredientes: ["Maíz tierno molido", "Leche", "Azúcar y canela"],
      contiene: ["lacteos"],
      picante: 0,
      precio: 1,
      momentos: ["bebida", "snack"],
      lugares: ["puesto", "mercado"],
      aventura: "para-todos",
      regiones: [],
      imperdible: false,
      paraComerSolo: true,
      sinMapa:
        "Lo venden en puestos de los parques y los mercados, sobre todo a la tarde.",
      foto: null,
    },
    {
      id: "cafe",
      nombre: "Café de altura",
      resumen:
        "Café de las laderas de los volcanes, de Antigua a Huehuetenango.",
      descripcion:
        "Guatemala cultiva café entre los 1.300 y los 2.000 metros, en suelos volcánicos que le dan cuerpo y acidez. En Antigua y en el lago de Atitlán hay fincas que muestran todo el proceso, del grano a la taza.",
      sabor: "Con cuerpo, acidez brillante y notas a chocolate.",
      ingredientes: ["Café arábica de altura"],
      contiene: [],
      picante: 0,
      precio: 1,
      momentos: ["bebida", "desayuno"],
      lugares: ["cafe"],
      aventura: "para-todos",
      regiones: [],
      imperdible: true,
      paraComerSolo: true,
      buscar: { en: ["cafe"] },
      foto: null,
    },
  ],

  menciones: [],

  revisado: "2026-11-12",
};
