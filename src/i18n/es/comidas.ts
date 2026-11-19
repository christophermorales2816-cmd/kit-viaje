import type {
  Aventura,
  Contiene,
  Lugar,
  Momento,
  Picante,
  Precio,
  TipoDeLugarOsm,
  TipoDeMencion,
} from "@/content/comidas/types";
import type { Dieta } from "@/lib/comidas/filtros";

/**
 * "Qué comer y beber" (spec, sección 18): las páginas, el catálogo con sus
 * filtros, la ficha de cada plato y el mapa de los lugares. Los platos mismos
 * (nombres, descripciones, ingredientes) son contenido y se traducen en la
 * fase 2.
 *
 * Las partes entre <marcas> se dibujan aparte, con `enriquecer()`.
 */
const comidas = {
  /** Los nombres de lo que los filtros y las fichas usan como claves. */
  etiquetas: {
    lugares: {
      puesto: "Puesto callejero",
      mercado: "Mercado",
      panaderia: "Panadería",
      dulceria: "Pastelería",
      almacen: "Almacén o kiosco",
      tienda: "Tienda especializada",
      casual: "Comedor sencillo",
      restaurante: "Restaurante",
      "alta-cocina": "Alta cocina",
      bar: "Bar",
      cafe: "Café",
      heladeria: "Heladería",
      casa: "En casa",
    } satisfies Record<Lugar, string>,
    momentos: {
      desayuno: "Desayuno",
      almuerzo: "Almuerzo",
      cena: "Cena",
      snack: "Para picar",
      postre: "Postre",
      bebida: "Bebida",
    } satisfies Record<Momento, string>,
    picante: {
      0: "Nada",
      1: "Suave",
      2: "Medio",
      3: "Picante",
    } satisfies Record<Picante, string>,
    aventura: {
      "para-todos": "Para todos",
      "para-animarse": "Para animarse",
      "gusto-adquirido": "Gusto adquirido",
    } satisfies Record<Aventura, string>,
    /** El rango de cada símbolo de precio, por porción. */
    precios: {
      1: "menos de 5 USD",
      2: "de 5 a 15 USD",
      3: "de 15 a 40 USD",
      4: "más de 40 USD",
    } satisfies Record<Precio, string>,
    /** En minúscula: van adentro de una frase ("Lleva huevo y gluten"). */
    contiene: {
      carne: "carne",
      cerdo: "cerdo",
      pescado: "pescado",
      mariscos: "mariscos",
      insectos: "insectos",
      huevo: "huevo",
      lacteos: "lácteos",
      miel: "miel",
      alcohol: "alcohol",
      gluten: "gluten",
      mani: "maní",
      "frutos-secos": "frutos secos",
      soja: "soja",
      sesamo: "sésamo",
    } satisfies Record<Contiene, string>,
    menciones: {
      puestito: "Puestito",
      emblematico: "Emblemático",
      "alta-cocina": "Alta cocina",
      mercado: "Mercado",
    } satisfies Record<TipoDeMencion, string>,
    /** Qué es cada lugar del mapa, según su etiqueta en OpenStreetMap. */
    tiposDeLugar: {
      comida: "Restaurante o comida al paso",
      cafe: "Café",
      bar: "Bar",
      heladeria: "Heladería",
      panaderia: "Panadería",
      dulceria: "Pastelería",
      mercado: "Mercado",
      almacen: "Almacén",
      bebidas: "Tienda de bebidas",
    } satisfies Record<TipoDeLugarOsm, string>,
    dietas: {
      vegetariano: "Vegetariano",
      vegano: "Vegano",
      "con-carne": "Con carne",
      "con-pescado": "Con pescado o mariscos",
    } satisfies Record<Dieta, string>,
  },

  indice: {
    titulo: "Qué comer y beber",
    metadatos: {
      titulo: "Qué comer y beber en cada país",
      descripcion:
        "Los platos y las bebidas de cada país: qué llevan, a qué saben, cuánto cuestan y dónde los sirven hoy, con filtros para tu dieta.",
    },
    bajada:
      "En cada país, lo que no te puedes ir sin probar: qué lleva, a qué sabe, cuánto cuesta y dónde lo sirven hoy. Con filtros para tu dieta y un mapa de los lugares que se renueva todos los días.",
    paises: (cantidad: number) => (cantidad === 1 ? "país" : "países"),
    platosYBebidas: "platos y bebidas",
    eligeElPais: "Elige el país",
    porAhora: (catalogos: number, destinos: number) =>
      `Por ahora, ${catalogos} de los ${destinos} destinos del sitio. Los demás se suman por tandas.`,
    /** El final de "Sushi, ramen, okonomiyaki y 36 más". */
    yMas: (cantidad: number) => `${cantidad} más`,
  },

  pais: {
    titulo: (pais: string) => `Qué comer y beber en ${pais}`,
    otrosPaises: "Qué comer en otros países",
    laGuiaDe: (pais: string) => `La guía de ${pais}`,
    antetitulo: "Qué comer y beber",
    platosYBebidas: "platos y bebidas",
    imperdibles: "imperdibles",
    regiones: "regiones",
    despensa: "La despensa",
    menu: "El menú",
    menuBajada:
      "Toca un plato para ver qué lleva, a qué sabe y dónde lo sirven cerca de ti. Los precios son por porción, en dólares, para comparar entre países.",
    menciones: "Menciones de honor",
    mencionesBajada:
      "Puestitos de barrio, lugares con historia y mesas de alta cocina. Si alguno cierra, deja de aparecer solo.",
    fuentes: (fecha: string) =>
      `Lugares: © colaboradores de <osm>OpenStreetMap</osm> (ODbL), que se renuevan cada doce horas. Fotos: Wikimedia Commons, con su autor y su licencia al lado de cada una. Catálogo revisado el ${fecha}.`,
  },

  plato: {
    titulo: (plato: string, pais: string) =>
      `${plato}: qué es y dónde comerlo en ${pais}`,
    volver: (pais: string) => `Qué comer y beber en ${pais}`,
  },

  tarjeta: {
    imperdible: "Imperdible",
    /** Antes del precio, para el lector de pantalla. */
    imperdibleParaElLector: "Imperdible. ",
    precioParaElLector: (simbolo: string, rango: string) =>
      `${simbolo}, ${rango}.`,
    picante: (nivel: string) => `Picante: ${nivel}`,
    vegano: "Vegano",
    vegetariano: "Vegetariano",
  },

  foto: {
    credito: (autor: string, licencia: string) =>
      `Foto: <autor>${autor}</autor>, <licencia>${licencia}</licencia>, en Wikimedia Commons.`,
  },

  ficha: {
    /** El nombre de las etiquetas del plato para el lector de pantalla. */
    enResumen: "En resumen",
    imperdible: "Imperdible",
    paraComerSolo: "Para comer solo",
    sabor: "Sabor",
    ingredientes: "Ingredientes",
    dondeYCuando: "Dónde y cuándo",
    donde: "Dónde:",
    cuando: "Cuándo:",
    region: "Región:",
    todoElPais: "todo el país",
    paraTuDieta: "Para tu dieta",
    lleva: (cosas: string) => `Lleva ${cosas}.`,
    sinAlergenos: "No lleva ninguno de los alérgenos más comunes.",
    sinCerdoNiAlcohol: "No lleva cerdo ni alcohol.",
    cerdoYAlcohol: "Lleva cerdo y alcohol.",
    cerdo: "Lleva cerdo.",
    alcohol: "Lleva alcohol.",
    receta:
      "Es la receta de siempre: cada lugar la hace a su manera. Con una alergia, pregunta antes de pedir.",
    menciones: "Menciones de honor",
  },

  acciones: {
    tituloAlCompartir: (plato: string, pais: string) =>
      `${plato} — Qué comer en ${pais}`,
    copiaElEnlace: "Copia el enlace:",
    buscarRestaurantes: "Busca restaurantes con esta comida",
    copiado: "Enlace copiado",
    compartir: "Compartir",
  },

  catalogo: {
    cuenta: (total: number) => `${total} platos y bebidas`,
    cuentaFiltrada: (visibles: number, total: number) =>
      `${visibles} de ${total} platos y bebidas`,
    filtros: "Filtros",
    filtrosElegidos: (elegidos: number) => `Filtros (${elegidos})`,
    borrar: "Borrar",
    borrarLosFiltros: "Borrar los filtros",
    ninguno:
      "Ningún plato cumple todo eso a la vez. Prueba quitando un filtro.",
  },

  filtros: {
    enTodoElPais: "En todo el país",
    paraDestacar: "Para destacar",
    soloImperdibles: "Solo los imperdibles",
    paraComerSolo: "Para comer solo",
    dieta: "Dieta",
    sinCerdoNiAlcohol: "Sin cerdo ni alcohol",
    noEsHalal:
      "No es lo mismo que halal: eso depende también de la carne. Y las recetas cambian: confírmalo en el lugar.",
    picante: "Picante",
    dondeSeConsigue: "Dónde se consigue",
    momento: "Momento del día",
    aventura: "Qué tan aventurero",
    precio: "Precio por porción",
    precioConRango: (simbolo: string, rango: string) => `${simbolo} · ${rango}`,
    region: "De dónde es típico",
    /** Después de la cuenta, para el lector de pantalla: "3 platos". */
    platos: (cantidad: number) => (cantidad === 1 ? " plato" : " platos"),
  },

  secciones: {
    por: "Por",
    /** Entre los dos últimos platos de una lista. */
    y: " y ",
    comoLlegar: "Cómo llegar",
    enOpenStreetMap: "En OpenStreetMap",
    negocio: (pais: string) => `¿Tienes un negocio de comida en ${pais}?`,
    negocioDetalle:
      "Regístralo gratis en OpenStreetMap, con el tipo de cocina que haces —ramen, tacos, parrilla—. Al día siguiente aparece en el mapa de cada plato que sirves, aquí y en todas las apps que usan OpenStreetMap. No se cobra por aparecer, ni aquí ni allá.",
    noSeCompran: "Las menciones de honor no se compran: las elegimos nosotros.",
    comoAgregar: "Cómo agregar un lugar a OpenStreetMap",
  },

  mapa: {
    cargando: "Cargando el mapa…",
    /** Lo que el lector de pantalla anuncia al llegar al mapa. */
    titulo: (plato: string) =>
      `Mapa de los lugares que sirven ${plato}. La lista de abajo tiene los mismos datos.`,
    mapaRoto:
      "No se pudo dibujar el mapa en este navegador. La lista de abajo tiene los mismos lugares.",
    acercalo: "Acerca el mapa para ver los lugares.",
    fueraDe: (pais: string) => `Esta parte del mapa queda fuera de ${pais}.`,
    buscando: "Buscando lugares en OpenStreetMap…",
    pausa: (minutos: number) =>
      minutos <= 1
        ? "OpenStreetMap pidió una pausa: volvemos a buscar en un minuto. Mientras, quedan los últimos datos."
        : `OpenStreetMap no está atendiendo nuestros pedidos: volvemos a buscar en ${minutos} minutos. Mientras, quedan los últimos datos.`,
    fallo: "No pudimos traer los lugares de una parte del mapa.",
    sinLugares:
      "Todavía no hay lugares con este plato cargados en OpenStreetMap en esta zona.",
    enLaZona: (cantidad: number, formateada: string) =>
      `${formateada} ${cantidad === 1 ? "lugar" : "lugares"} en esta zona.`,
    actualizando: (cuando: string) =>
      `Estamos actualizando los datos de OpenStreetMap, que son del ${cuando}`,
    datosDel: (cuando: string) => `Datos de OpenStreetMap del ${cuando}`,
    dondeComer: (plato: string) => `Dónde comer ${plato}`,
    /** El nombre de los botones de ciudad para el lector de pantalla. */
    ciudades: "Ciudades",
    reintentar: "Reintentar",
    noSePudoCargar: "El mapa no se pudo cargar.",
    confirmado: "Confirmado o con cambios en los últimos años",
    sinConfirmar: "Sin confirmar hace años: puede haber cerrado",
    mencion: "Mención de honor",
    recortado:
      "En esta zona hay más lugares de los que mostramos: son tantos que traemos los primeros mil de cada parte del mapa.",
    verLaLista: (cantidad: string) =>
      `Ver los lugares en una lista (${cantidad})`,
    sinNombre: "Sin nombre cargado",
    delCentro: (distancia: string) => `${distancia} del centro del mapa`,
    puedeHaberCerrado: " · puede haber cerrado",
    ver: "Ver",
    fuentes:
      "Lugares: © colaboradores de <osm>OpenStreetMap</osm>, con licencia ODbL. ¿Falta uno, o cerró? <avisar>Avísalo en OpenStreetMap</avisar>: cuando alguien lo corrige, aquí se ve en un día.",
    confirmoQueSigue: (mesYAno: string) =>
      `Alguien confirmó que sigue abierto en ${mesYAno}.`,
    nadieConfirmaDesde: (ano: string) =>
      `Nadie lo confirma en OpenStreetMap desde ${ano}: puede haber cerrado.`,
    nadieConfirmo: "Nadie lo confirmó en OpenStreetMap: puede haber cerrado.",
    ultimaNovedad: (ano: string) => `Última novedad en OpenStreetMap: ${ano}.`,
    mencionDeHonor: (tipo: string) => `Mención de honor · ${tipo}`,
    cerrar: "Cerrar",
    direccion: "Dirección",
    horario: "Horario",
    telefono: "Teléfono",
    web: "Web",
    comoLlegar: "Cómo llegar",
    verEnOpenStreetMap: "Ver en OpenStreetMap",
    avisar: "¿Cerró o está mal? Avisa",
  },
};

export default comidas;
