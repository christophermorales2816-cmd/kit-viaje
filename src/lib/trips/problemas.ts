import type { TextosDelViaje } from "@/i18n/viaje";

/**
 * Lo que puede salir mal al crear o editar un viaje, como datos y no como
 * texto (spec, 21.2).
 *
 * Las Server Actions no saben en qué idioma está la página que las llamó:
 * `next/root-params` no se puede leer en ellas. Devuelven el problema, y la
 * pantalla lo cuenta en su idioma con `describirProblema`. De paso, los tests
 * verifican qué pasó sin depender de cómo está redactado.
 */
export type ProblemaDelViaje =
  | { codigo: "faltan-fechas" }
  | { codigo: "destino-desconocido" }
  | { codigo: "falta-tipo"; tipos: readonly string[] }
  | { codigo: "fechas-invalidas" }
  | { codigo: "vuelta-antes-que-ida" }
  | { codigo: "duracion"; minimo: number; maximo: number; dias: number }
  | { codigo: "ciudad-desconocida" }
  | { codigo: "cantidad-no-entera" }
  | { codigo: "cantidad-fuera-de-rango"; minimo: number; maximo: number }
  | { codigo: "nada-que-cambiar" }
  | { codigo: "item-inexistente" }
  | { codigo: "gasto-inexistente" }
  | { codigo: "sin-permiso" }
  | { codigo: "fallo-al-guardar" }
  | { codigo: "demasiados-viajes" }
  /** `codigoDeLaBase`: el código de Postgres, si lo hubo. Nunca su texto. */
  | { codigo: "fallo-al-crear"; codigoDeLaBase: string | null }
  | { codigo: "esquema-viejo"; codigoDeLaBase: string | null }
  | { codigo: "datos-rechazados"; codigoDeLaBase: string | null };

/** El problema contado en el idioma de `t`. */
export function describirProblema(
  t: TextosDelViaje,
  problema: ProblemaDelViaje,
): string {
  const p = t.problemas;
  const conCodigo = (mensaje: string, codigo: string | null) =>
    codigo ? p.conCodigo(mensaje, codigo) : mensaje;

  switch (problema.codigo) {
    case "faltan-fechas":
      return p.faltanFechas;
    case "destino-desconocido":
      return p.destinoDesconocido;
    case "falta-tipo":
      return p.faltaTipo(
        problema.tipos
          .map(
            (tipo) => (t.tiposDeViaje as Record<string, string>)[tipo] ?? tipo,
          )
          .join(", "),
      );
    case "fechas-invalidas":
      return p.fechasInvalidas;
    case "vuelta-antes-que-ida":
      return p.vueltaAntesQueIda;
    case "duracion":
      return p.duracion(problema.minimo, problema.maximo, problema.dias);
    case "ciudad-desconocida":
      return p.ciudadDesconocida;
    case "cantidad-no-entera":
      return p.cantidadNoEntera;
    case "cantidad-fuera-de-rango":
      return p.cantidadFueraDeRango(problema.minimo, problema.maximo);
    case "nada-que-cambiar":
      return p.nadaQueCambiar;
    case "item-inexistente":
      return p.itemInexistente;
    case "gasto-inexistente":
      return p.gastoInexistente;
    case "sin-permiso":
      return p.sinPermiso;
    case "fallo-al-guardar":
      return p.falloAlGuardar;
    case "demasiados-viajes":
      return p.demasiadosViajes;
    case "fallo-al-crear":
      return conCodigo(p.falloAlCrear, problema.codigoDeLaBase);
    case "esquema-viejo":
      return conCodigo(p.esquemaViejo, problema.codigoDeLaBase);
    case "datos-rechazados":
      return conCodigo(p.datosRechazados, problema.codigoDeLaBase);
  }
}
