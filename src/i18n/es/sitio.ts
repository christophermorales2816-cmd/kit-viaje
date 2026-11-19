import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";

/**
 * Lo que es igual en todas las páginas: la barra, el menú del teléfono, el pie
 * y las pantallas de error.
 */
const sitio = {
  metadatos: {
    descripcion:
      "Qué llevar y cuánto vas a gastar, con el clima de la ciudad a la que vas y la cotización que elijas. Sin registro.",
  },

  barra: {
    saltarAlContenido: "Saltar al contenido",
    /** El nombre de la navegación para el lector de pantalla. */
    navegacionPrincipal: "Principal",
    destinos: "Destinos",
    herramientas: "Herramientas",
    cantidadDeDestinos: (cantidad: number) =>
      cantidad === 1 ? "1 destino" : `${cantidad} destinos`,
    todosLosDestinos: "Todos los destinos",
    todosPorContinente: (total: number) =>
      `Los ${total}, por continente y zona.`,
    abrirElMenu: "Abrir el menú",
    descripcionDelMenu: "Destinos, herramientas y secciones del sitio.",
    proximamente: "Próximamente",
  },

  enlaces: {
    vuelos: {
      nombre: "Radar de vuelos",
      descripcion: "Qué está volando ahora cerca de ti.",
    },
    queComer: {
      nombre: "Qué comer y beber",
      descripcion: "Los platos de cada país y dónde probarlos.",
    },
    planificar: "Planifica tu viaje",
    blog: "Blog",
    nosotros: "Nosotros",
    contacto: "Contacto",
    foros: "Foros",
    ingresar: "Ingresar",
    ingresarPronto: "Muy pronto: tu cuenta y los foros",
    privacidad: "Privacidad",
    terminos: "Términos de uso",
    mapaDelSitio: "Mapa del sitio",
  },

  pie: {
    lema: "Qué llevar, cuánto vas a gastar y qué comer, con el clima de tus fechas y la moneda de cada destino.",
    destinos: "Destinos",
    todosLosDestinos: (total: number) => `Los ${total} destinos`,
    herramientas: "Herramientas",
    legal: "Legal",
    pronto: "pronto",
    aviso:
      "Medimos las visitas sin cookies para saber qué se usa. No vendemos datos ni mostramos anuncios.",
    build: "build",
  },

  error: {
    titulo: "Algo se rompió de nuestro lado",
    explicacion:
      "No es algo que hayas hecho mal. Prueba de nuevo: si el problema era pasajero, con eso basta.",
    reintentar: "Reintentar",
    volverAlInicio: "Volver al inicio",
    referencia: "Referencia:",
  },

  /** Cuando falla el layout raíz: sin barra, sin pie y sin estilos. */
  errorGlobal: {
    titulo: `${NOMBRE_DEL_SITIO} no pudo cargar`,
    explicacion: "Prueba de nuevo. Si sigue pasando, vuelve en un rato.",
  },

  noEncontrada: {
    codigo: "Error 404",
    titulo: "Esta página no existe",
    explicacion:
      "Puede que el enlace esté mal escrito o que apunte a un destino que todavía no cubrimos.",
    guiasDisponibles: "Guías disponibles",
    estasSonLasGuias: "Estas son las guías que sí tenemos:",
  },
};

export default sitio;
