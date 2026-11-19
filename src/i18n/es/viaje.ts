import type { TripType } from "@/lib/packing";

/**
 * El viaje: el formulario que lo crea, el tablero con el equipaje y el
 * presupuesto, y la vista compartida (spec, secciones 6 y 11). Los nombres de
 * los ítems y de los gastos salen de la base y se traducen en la fase 2.
 *
 * Las partes entre <marcas> se dibujan aparte, con `enriquecer()`.
 */
const viaje = {
  metadatos: {
    privado: "Tu kit de viaje",
    compartido: "Kit de viaje compartido",
  },

  formulario: {
    ciudad: "¿A qué ciudad vas?",
    ciudadDetalle:
      "El clima de la ciudad es lo que define la lista de equipaje.",
    cuando: "¿Cuándo viajas?",
    eligeLasFechas: (maximo: number) =>
      `Elige la ida y la vuelta. Hasta ${maximo} días.`,
    fechasElegidas: (fechas: string, duracion: string) =>
      `${fechas} — ${duracion}`,
    tipo: "¿Qué tipo de viaje?",
    armando: "Armando tu kit…",
    armar: "Armar mi kit de viaje",
    sinCuenta:
      "Sin cuenta y sin correo. Te vamos a dar un enlace: ese enlace es la única forma de volver a tu viaje.",
  },

  tiposDeViaje: {
    playa: "Playa",
    urbano: "Urbano",
    aventura: "Aventura",
    negocios: "Negocios",
  } satisfies Record<TripType, string>,

  /**
   * Las categorías del catálogo: en la base son claves en minúscula y sin
   * acento. Una que no esté acá se muestra capitalizada (formatCategory).
   */
  categorias: {
    documentacion: "Documentación",
    tecnologia: "Tecnología",
    ropa: "Ropa",
    calzado: "Calzado",
    higiene: "Higiene",
    salud: "Salud",
    accesorios: "Accesorios",
    comida: "Comida",
    transporte: "Transporte",
    alojamiento: "Alojamiento",
    entretenimiento: "Entretenimiento",
  } as Record<string, string>,

  tablero: {
    soloLectura: "Solo lectura",
    equipaje: "Equipaje",
    presupuesto: "Presupuesto",
    noSePudoCalcular:
      "No se pudo calcular el total: hay gastos en una moneda que no coincide con la de la cotización.",
  },

  compartir: {
    copiado: "Enlace copiado",
    compartir: "Compartir solo lectura",
    copiarMiEnlace: "Copiar mi enlace",
    aviso:
      "<fuerte>Guarda este enlace.</fuerte> Es la única forma de volver a tu viaje: no hay cuenta ni correo para recuperarlo.",
  },

  exportar: {
    imprimir: "Imprimir o PDF",
    descargar: (que: string) => `Descargar ${que} (CSV)`,
    equipaje: "equipaje",
    presupuesto: "presupuesto",
  },

  cantidad: {
    restar: (item: string) => `Restar uno a ${item}`,
    cantidadDe: (item: string) => `Cantidad de ${item}`,
    sumar: (item: string) => `Sumar uno a ${item}`,
  },

  equipaje: {
    vacio:
      "No se generó ningún ítem para este viaje. Puede que falten datos de clima o de catálogo para el mes y el tipo de viaje elegidos.",
    listos: (listos: number, total: number) =>
      `<cifra>${listos} de ${total}</cifra> ${listos === 1 ? "ítem listo" : "ítems listos"}`,
    pesoTotal: "Peso total",
    marcar: (item: string) => `Marcar ${item} como listo`,
    cadaUno: (peso: string) => `${peso} c/u`,
  },

  presupuesto: {
    dolarizado:
      "Los precios de este destino están en dólares: el total ya está en la moneda que vas a usar y no hay cotización que elegir.",
    sinFuente: (moneda: string) =>
      `Todavía no tenemos cotización en vivo para ${moneda}. El total en moneda local es correcto; la conversión a dólares no está disponible.`,
    sinCotizaciones: (motivo: string) =>
      `No pudimos traer las cotizaciones ahora (${motivo}). El total en moneda local es correcto; la conversión a dólares no está disponible.`,
    vacio: "No hay gastos cargados para este destino.",
    total: "Total del viaje",
    /** El nombre del selector para el lector de pantalla. */
    cotizacionParaConvertir: "Cotización para convertir el total",
    cotizacion: "Cotización",
    actualizada: (cuando: string) => `actualizada ${cuando}`,
    convertido: (monto: string, cotizacion: string, tasa: string) =>
      `Son <monto>${monto}</monto> al ${cotizacion} (${tasa} por dólar).`,
    preciosActualizados: (hace: string) => `Precios actualizados ${hace}.`,
    preciosViejos: (hace: string, dias: number) =>
      `Precios actualizados ${hace}, hace más de ${dias} días. Tómalos como una referencia vieja.`,
    cadaUno: (precio: string) => `${precio} c/u`,
  },

  /** Los encabezados y los valores de los CSV que se descargan. */
  csv: {
    categoria: "Categoría",
    item: "Ítem",
    gasto: "Gasto",
    cantidad: "Cantidad",
    pesoUnitario: "Peso unitario (g)",
    pesoTotal: "Peso total (g)",
    listo: "Listo",
    precioUnitario: "Precio unitario",
    subtotal: "Subtotal",
    moneda: "Moneda",
    si: "sí",
    no: "no",
  },

  /** Lo que puede salir mal al crear o editar un viaje (src/lib/trips/problemas.ts). */
  problemas: {
    faltanFechas: "Elige las fechas de ida y de vuelta.",
    destinoDesconocido:
      "No reconocemos ese destino. Vuelve a la guía y prueba de nuevo.",
    faltaTipo: (tipos: string) => `Elige un tipo de viaje: ${tipos}.`,
    fechasInvalidas: "Las fechas del viaje no son válidas.",
    vueltaAntesQueIda:
      "La vuelta es antes que la ida. Elige las fechas de nuevo.",
    duracion: (minimo: number, maximo: number, dias: number) =>
      `El viaje tiene que durar entre ${minimo} y ${maximo} días, y este dura ${dias}.`,
    ciudadDesconocida:
      "No reconocemos esa ciudad. Vuelve a elegirla y prueba de nuevo.",
    cantidadNoEntera: "La cantidad tiene que ser un número entero.",
    cantidadFueraDeRango: (minimo: number, maximo: number) =>
      `La cantidad tiene que estar entre ${minimo} y ${maximo}.`,
    nadaQueCambiar: "No hay nada que cambiar.",
    itemInexistente: "El ítem no existe.",
    gastoInexistente: "El gasto no existe.",
    sinPermiso:
      "No se pudo guardar: este viaje no existe o el enlace no permite editarlo.",
    falloAlGuardar: "No se pudo guardar. Prueba de nuevo en un momento.",
    demasiadosViajes:
      "Se crearon demasiados viajes desde tu conexión en la última hora. Espera un rato y prueba de nuevo.",
    falloAlCrear: "No pudimos crear el viaje. Prueba de nuevo en un momento.",
    esquemaViejo:
      "No pudimos crear el viaje: la base de datos no tiene algo que la aplicación necesita. Reintentar no ayuda: hay migraciones sin aplicar.",
    datosRechazados:
      "No pudimos crear el viaje: la base rechazó los datos. Puede ser una regla del esquema o una migración sin aplicar.",
    /** El código de Postgres, para encontrar el detalle en los logs. */
    conCodigo: (mensaje: string, codigo: string) =>
      `${mensaje} (código ${codigo})`,
  },
};

export default viaje;
