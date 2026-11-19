import type { Season } from "@/lib/prepare/climate-year";

/**
 * La guía de cada país: la página de la guía, la de preparar el viaje y la del
 * planificador, con sus componentes. El contenido de cada guía (los datos, los
 * consejos, las preguntas) se traduce en la fase 2 (spec, 21.1).
 *
 * Las partes entre <marcas> se dibujan aparte, con `enriquecer()`.
 */
const guia = {
  volverALaGuia: (pais: string) => `Volver a la guía de ${pais}`,

  pagina: {
    queComer: {
      antetitulo: "Qué comer y beber",
      titulo: (platos: number, pais: string) =>
        `Los ${platos} platos y bebidas de ${pais}, y dónde los sirven hoy`,
      bajada:
        "Qué lleva cada uno, a qué sabe, cuánto cuesta y si es para tu dieta.",
    },
    cierre: {
      titulo: "Ya sabes a qué vas. Ahora armemos el viaje.",
      bajada:
        "Antes del calendario, lo práctico: cuándo conviene ir, qué clima te toca cada mes y qué llevar. Después eliges las fechas.",
      boton: "Preparar el viaje",
    },
  },

  cotizaciones: {
    una: {
      titulo: "La cotización, ahora",
      bajada:
        "Aquí hay un solo tipo de cambio, así que no hay que elegir. Esto es lo único de esta página que está en vivo.",
    },
    varias: {
      titulo: "Las cotizaciones, ahora",
      tituloConCantidad: (cantidad: number) =>
        `Las ${cantidad} cotizaciones, ahora`,
      bajada:
        "El mismo gasto cambia de tamaño según cuál mires. Esto es lo único de esta página que está en vivo.",
    },
    dolarizado: {
      titulo: "Aquí se paga en dólares",
      bajada:
        "La moneda que circula es el dólar estadounidense, así que no hay tipo de cambio que seguir ni brecha que medir. Los precios del planificador ya están en dólares.",
      consejo:
        "Lo único que cambia el costo es lo que cobre tu banco por usar la tarjeta en el exterior. Si llevas efectivo, que sean billetes pequeños y en buen estado: los de cien suelen rechazarse en comercios pequeños.",
    },
    sinFuente: (moneda: string) =>
      `Todavía no tenemos una fuente de cotizaciones en vivo para ${moneda}. El resto de la guía sigue disponible más abajo.`,
    noPudimos: (motivo: string) =>
      `No pudimos traer las cotizaciones ahora. ${motivo} El resto de la guía sigue disponible más abajo.`,
    /** La cotización contra la que se mide la brecha de las demás. */
    referencia: "referencia",
    brecha: (porcentaje: string, referencia: string) =>
      `${porcentaje}% vs. ${referencia}`,
    valorDeVenta: "Valor de venta.",
    actualizado: "Actualizado",
    consultando: "Consultando cotizaciones…",
  },

  antesDeReservar: {
    titulo: "Todo lo que hay que saber antes de reservar",
    revisadoEl: "Revisado el",
  },

  puntajes: {
    titulo: (pais: string) => `Cómo puntúa ${pais}`,
    bajada:
      "Valoración editorial, no un índice oficial. Es una opinión fundamentada, no una medición.",
    sobreDiez: " / 10",
    dondeBrilla: "Dónde brilla",
    dondeTeCuesta: "Dónde te cuesta",
  },

  adondeIr: {
    titulo: "Adónde ir",
    bajada: (cantidad: number) =>
      `${cantidad} destinos que anclan la mayoría de los viajes. Filtra por región para armar tu ruta.`,
    /** El nombre de los filtros para el lector de pantalla. */
    filtrarPorRegion: "Filtrar por región",
    todas: "Todas",
    planificar: (lugar: string) => `Planificar ${lugar}`,
  },

  mapa: {
    titulo: "El país de un vistazo",
    bajada: (pais: string) =>
      `Las distancias de ${pais} no se entienden en una lista. Toca un marcador para ver de qué destino se trata.`,
  },

  preparar: {
    titulo: (lugar: string) => `${lugar}: condiciones actuales`,
    /** Cuando falta un dato: "sin dato". */
    sinDato: "s/d",
    rangoDelAno: "Rango del año",
    rango: (minima: number, maxima: number) => `${minima}° a ${maxima}°`,
    mejorMes: "Mejor mes",
    ningunoIdeal: "Ninguno ideal",
    mesesIdeales: "Meses ideales",
    enchufe: "Enchufe",
    claves: "Lo que cambia cómo armas la maleta",
    creaTuLista: (ciudad: string) => `Crea tu lista para ${ciudad}`,
    yaSabes: (ciudad: string) =>
      `Ya sabes qué mes te conviene. Pon las fechas y el tipo de viaje, y armamos la lista de equipaje y el presupuesto sobre el clima de ${ciudad} en esos días concretos.`,
    iniciarGenerador: "Iniciar el generador de listas",
    faltaElClima: (pais: string) =>
      `Todavía no cargamos el clima de ${pais} en nuestra base.`,
    faltaElClimaDetalle:
      "Los consejos, las checklists y las preguntas de aquí abajo son del país y siguen valiendo. Lo que falta es el detalle mes a mes y el generador de listas, que se calculan con datos de cada ciudad. Es un problema nuestro y lo estamos resolviendo.",
  },

  ciudad: {
    /** El nombre del selector de ciudad para el lector de pantalla. */
    nombre: "Ciudad",
    deQuienSonLosNumeros: (ciudad: string) =>
      `El clima cambia mucho dentro del país. Estos números son de <ciudad>${ciudad}</ciudad>.`,
  },

  tira: {
    titulo: "El año de un vistazo",
    temporadas: {
      ideal: "Ideal",
      media: "Aceptable",
      dificil: "Exigente",
    } satisfies Record<Season, string>,
  },

  graficos: {
    titulo: "Clima mes a mes",
    sinDatos: "Sin datos",
    maxima: {
      titulo: "Temperatura máxima",
      descripcion:
        "Promedio histórico de la máxima diaria. La escala arranca en el mes más fresco del año, no en cero.",
    },
    lluvia: {
      titulo: "Probabilidad de lluvia",
      descripcion:
        "Qué tan probable es que llueva en un día cualquiera del mes. Es probabilidad, no milímetros: es el dato que hay.",
    },
  },

  meses: {
    titulo: "Qué llevar según el mes",
    mismoClima:
      "Aquí se empaca parecido los doce meses: todos caen en el mismo clima, así que la ropa no cambia. Lo que cambia es cuánto calor y cuánta lluvia te toca, y eso está en los gráficos de arriba.",
    sinDatosDeClima: "Sin datos de clima",
    hasta: (maxima: number) => `Hasta ${maxima} °C`,
    desde: (minima: number) => `Desde ${minima} °C`,
    entre: (minima: number, maxima: number) => `${minima} a ${maxima} °C`,
  },

  consejos: {
    titulo: (pais: string) => `Consejos de empaque para ${pais}`,
    si: "Sí",
    no: "No",
  },

  evitar: {
    titulo: (pais: string) =>
      `Lo que ocupa espacio y no vale la pena en ${pais}`,
    bajada: "Empaca para el viaje que vas a hacer, no para el que imaginas.",
    dejaloEnCasa: "Déjalo en casa",
    porQue: "Por qué",
    enSuLugar: "En su lugar",
  },

  preguntas: {
    titulo: (pais: string) => `Preguntas frecuentes sobre ${pais}`,
  },

  planificar: {
    titulo: "Planifica tu viaje",
    metadatos: {
      titulo: (pais: string) => `Planifica tu viaje a ${pais}`,
      descripcion: (pais: string) =>
        `Equipaje y presupuesto para tu viaje a ${pais}, sin registro.`,
    },
    bajada:
      "Elige las fechas y el tipo de viaje: armamos la lista de equipaje según el clima de esos meses y el presupuesto en la cotización que quieras. Sin registro, y te llevas la hoja de cálculo en CSV.",
    sinCiudades: (pais: string) =>
      `Todavía no podemos armar listas para ${pais}.`,
    sinCiudadesDetalle:
      "Falta cargar las ciudades de este país en nuestra base. Es un problema nuestro, no del enlace. Mientras tanto, la guía tiene los consejos de equipaje y las preguntas frecuentes.",
    verLosConsejos: (pais: string) => `Ver los consejos de ${pais}`,
  },
};

export default guia;
