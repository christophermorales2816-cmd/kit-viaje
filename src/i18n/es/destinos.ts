import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";

/**
 * Las páginas de destinos: todos, y los de cada continente (spec, 19.3). Los
 * nombres de los continentes, las zonas y los países son contenido y se
 * traducen en la fase 2 (spec, 21.1).
 */
const destinos = {
  indice: {
    titulo: "Destinos",
    descripcion: (cantidad: number) =>
      `Los ${cantidad} destinos de ${NOMBRE_DEL_SITIO}, por continente: cada uno con su guía, su clima mes a mes y su presupuesto en moneda local.`,
    bajada: (cantidad: number) =>
      `${cantidad} destinos en cinco continentes. Cada uno tiene su guía, su clima mes a mes por ciudad y su presupuesto en moneda local; al lado del nombre, lo que más cambia cómo se prepara ese viaje.`,
    /** El nombre de la lista de continentes para el lector de pantalla. */
    continentes: "Continentes",
  },

  continente: {
    titulo: (continente: string) => `Destinos en ${continente}`,
    descripcion: (resumen: string, cantidad: number, continente: string) =>
      `${resumen} Los ${cantidad} destinos de ${continente}, cada uno con su guía, su clima y su presupuesto.`,
    /** El nombre de las migas de pan para el lector de pantalla. */
    rutaDeNavegacion: "Ruta de navegación",
    destinos: "Destinos",
    /** Lo que va debajo de cada número grande. */
    etiquetaDeDestinos: (cantidad: number) =>
      cantidad === 1 ? "destino" : "destinos",
    etiquetaDeZonas: (cantidad: number) => (cantidad === 1 ? "zona" : "zonas"),
    otrosContinentes: "Otros continentes",
    todos: "Todos",
  },
};

export default destinos;
