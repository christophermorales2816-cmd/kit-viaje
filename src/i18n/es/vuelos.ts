import type { PuntoCardinal } from "@/lib/vuelos/radar";

/**
 * El radar de vuelos y "Salgo desde" (spec, sección 17). Los nombres de los
 * aeropuertos y de las ciudades salen de OurAirports y quedan como vienen.
 *
 * Las partes entre <marcas> se dibujan aparte, con `enriquecer()`.
 */
const vuelos = {
  metadatos: {
    titulo: "Vuelos en vivo desde tu ciudad",
    descripcion:
      "Los aviones que vuelan ahora cerca de ti, en un mapa que se actualiza cada 15 segundos, y el aeropuerto del que sales.",
  },

  pagina: {
    titulo: "Vuelos desde tu ciudad",
    bajada:
      "Lo que vuela ahora cerca de ti y el aeropuerto del que sales. Pronto, también a dónde llegas desde ahí y cuánto cuesta.",
    enVivo: "En vivo",
    cobertura:
      "Los aviones salen de adsb.lol, una red de antenas de voluntarios: cubre muy bien Europa, Estados Unidos y Japón, y con huecos Sudamérica, África y los océanos. Para ver otra zona, mueve el mapa. No mostramos los aviones que pidieron no aparecer.",
    salgoDesde: "Salgo desde",
    loQueViene: "Lo que viene",
    proximamente: [
      "<fuerte>Tu aeropuerto.</fuerte> Qué está saliendo y llegando en este momento, y a dónde vuela.",
      "<fuerte>Rutas.</fuerte> A dónde llegas desde tu ciudad, directo o con escala, también desde cada guía.",
      "<fuerte>Precios.</fuerte> Cuánto cuesta cada ruta según la fecha y la aerolínea, con un aviso por correo cuando baja.",
    ],
    privacidad:
      "La ubicación sale de tu conexión y es aproximada: la usamos para sugerirte un aeropuerto y no la guardamos. El que eliges queda en una cookie de este navegador, con su código de tres letras, hasta que toques «Olvidar».",
    fuentes: (fecha: string) =>
      `Aeropuertos: <ourairports>OurAirports</ourairports>, de dominio público, actualizados el ${fecha}. Aviones: <adsb>adsb.lol</adsb>, con licencia <odbl>ODbL</odbl>. Mapa: <openfreemap>OpenFreeMap</openfreemap>, con datos de OpenStreetMap.`,
  },

  origen: {
    buscandoAviones: "Buscando los aviones de la zona…",
    sinJavaScript:
      "El radar en vivo necesita JavaScript. Elegir el aeropuerto del que sales, más abajo, funciona igual.",
    olvidar: "Olvidar",
    listo: "Listo: lo que venga en esta sección va a salir desde aquí.",
    cercaDe: (ciudad: string) =>
      `Por tu conexión, parece que estás cerca de ${ciudad}.`,
    sugerido: "Por tu conexión, este parece ser el aeropuerto que te sirve.",
    salgoDesdeAqui: "Salgo desde aquí",
    tambienCerca: "También cerca:",
    otroLado: "¿Sales de otro lado?",
    noEsTuCiudad: "¿No es tu ciudad? Búscala",
    buscaTuCiudad: "Busca tu ciudad o tu aeropuerto",
  },

  buscador: {
    buscando: "Buscando…",
    fallo: "No pudimos buscar. Prueba de nuevo en un momento.",
    sinResultados: (consulta: string) =>
      `Ningún aeropuerto coincide con «${consulta}». Prueba con el código de tres letras o con el nombre en otro idioma.`,
    resultados: (cantidad: number) =>
      cantidad === 1 ? "Un aeropuerto." : `${cantidad} aeropuertos.`,
    placeholder: "Ciudad, aeropuerto o código: Rosario, Ezeiza, EZE",
    buscar: "Buscar",
  },

  aeropuerto: {
    elegir: "Elegir",
    /** Lo que lee el lector de pantalla en el botón: "Elegir: Ezeiza". */
    elegirEste: (accion: string, aeropuerto: string) =>
      `${accion}: ${aeropuerto}`,
    aDistancia: (distancia: string) => `a ${distancia}`,
  },

  radar: {
    /** Lo que el lector de pantalla anuncia al llegar al mapa. */
    tituloDelMapa:
      "Mapa de los aviones en el aire. La lista de abajo tiene los mismos datos.",
    estados: {
      listo: "En vivo: se actualiza cada 15 segundos.",
      cargando: "Buscando los aviones de la zona…",
      pausa:
        "adsb.lol pidió una pausa: volvemos a buscar en un minuto. Mientras, quedan los últimos datos.",
      fallo:
        "No pudimos traer los aviones. Volvemos a intentar en 30 segundos.",
    },
    zonaAlrededorDe: (radio: number, aeropuerto: string, iata: string) =>
      `Zona: hasta ${radio} km alrededor de ${aeropuerto} (${iata}).`,
    zonaAlrededorDelCentro: (radio: number) =>
      `Zona: hasta ${radio} km alrededor del centro del mapa.`,
    enLaZona: "aviones en el aire en esta zona",
    enElMundo: "en todo el mundo, según adsb.lol",
    mapaRoto:
      "No pudimos dibujar el mapa en este navegador. La lista de abajo tiene los mismos aviones.",
    cargandoElMapa: "Cargando el mapa…",
    tocaUnAvion: (iata: string) =>
      `Toca un avión para ver su vuelo, su modelo y a qué altura va. El punto naranja es ${iata}.`,
    verLaLista: "Ver los aviones en una lista",
    sinAviones: "No hay aviones en el aire en esta zona ahora.",
    orden: "Del más cercano al más lejano del centro de la zona.",
    recorte: (filas: number, total: string) =>
      ` Son los ${filas} más cercanos de ${total}.`,
    columnas: {
      vuelo: "Vuelo",
      modelo: "Modelo",
      altitud: "Altitud",
      velocidad: "Velocidad",
      distancia: "Distancia",
      enElMapa: "En el mapa",
    },
    ver: "Ver",
    verEnElMapa: (vuelo: string) => `${vuelo} en el mapa`,
    sinNumero: "Vuelo sin número",
    rumbo: "Rumbo",
    noInforma: "No informa",
    hacia: (punto: string, grados: number) => `Hacia el ${punto} (${grados}°)`,
    cerrar: "Cerrar",
    puntosCardinales: {
      norte: "norte",
      noreste: "noreste",
      este: "este",
      sureste: "sureste",
      sur: "sur",
      suroeste: "suroeste",
      oeste: "oeste",
      noroeste: "noroeste",
    } satisfies Record<PuntoCardinal, string>,
  },
};

export default vuelos;
