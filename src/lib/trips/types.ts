import type { BudgetLineItem } from "@/lib/budget";
import type { PackingCatalogItem, TripType } from "@/lib/packing";
import type { Destination } from "@/lib/supabase/reference";

/**
 * Tipos de las tablas de sesión (spec, sección 3), ya traducidos a camelCase.
 */

export interface TripRecord {
  id: string;
  destinationId: string;
  /** yyyy-mm-dd. */
  startDate: string;
  /** yyyy-mm-dd, inclusive. */
  endDate: string;
  tripType: TripType;
  /**
   * PRIVADO. Habilita escritura. Es lo único que separa a un visitante de
   * editar un viaje ajeno.
   */
  editToken: string;
  /** PÚBLICO. Solo lectura. Es el que se comparte. */
  shareSlug: string;
}

/**
 * El viaje sin su token de edición.
 *
 * La vista compartida (`/viaje/ver/{share_slug}`) renderiza el mismo componente
 * que el dashboard, y todo lo que un Server Component le pasa a un componente
 * de cliente viaja en el payload RSC —legible con ver-código-fuente, sin
 * devtools ni nada—. Que el tipo directamente no tenga el campo hace que
 * filtrarlo no dependa de que alguien se acuerde de no pasarlo.
 */
export type TripSummary = Omit<TripRecord, "editToken">;

export interface TripPackingEntry {
  item: PackingCatalogItem;
  qty: number;
  checked: boolean;
  /** weightG × qty. Informativo (spec, sección 4). */
  totalWeightG: number;
}

/**
 * Todo lo que necesita el dashboard en una sola lectura.
 *
 * Las cotizaciones NO están acá: se traen aparte (fetchQuotes) porque tienen su
 * propio cacheo y su propio modo de fallar. Que la API de dólar esté caída no
 * puede dejar a nadie sin lista de equipaje.
 */
export interface TripView {
  trip: TripSummary;
  /**
   * El token, aparte del viaje y solo cuando se entró por la ruta privada.
   * `null` en la vista compartida: no hay nada que ocultar en el render porque
   * el dato nunca se leyó.
   */
  editToken: string | null;
  destination: Destination;
  packing: TripPackingEntry[];
  /** Suma de la lista guardada, no de la generada: el usuario editó cantidades. */
  totalWeightG: number;
  budget: BudgetLineItem[];
}
