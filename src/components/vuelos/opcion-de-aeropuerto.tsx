import { formatDistance } from "@/lib/format";
import { cn } from "@/lib/utils";
import { elegirOrigenAction } from "@/lib/vuelos/actions";
import type { AeropuertoResumido } from "@/lib/vuelos/tipos";

import { BotonDeEnviar } from "./boton-de-enviar";

/**
 * Un aeropuerto en pantalla: el código, dónde queda y cómo se llama.
 *
 * Sin "use client", a propósito. En la página son componentes de servidor y
 * el formulario anda antes de que cargue el JavaScript; en los resultados del
 * buscador, que solo existen con JavaScript, los usa el cliente.
 */
export function FichaDeAeropuerto({
  aeropuerto,
}: {
  aeropuerto: AeropuertoResumido;
}) {
  // Unos pocos aeropuertos no tienen ciudad en OurAirports: va el nombre.
  const lugar = `${aeropuerto.ciudad || aeropuerto.nombre}, ${aeropuerto.pais}`;

  return (
    <div className="flex min-w-0 flex-1 items-baseline gap-3">
      <span className="font-mono text-sm font-semibold">{aeropuerto.iata}</span>

      <div className="flex min-w-0 flex-col">
        <span className="font-medium text-pretty">{lugar}</span>

        <span className="text-muted-foreground text-sm text-pretty">
          {aeropuerto.nombre}
          {aeropuerto.distanciaKm === undefined
            ? null
            : ` · a ${formatDistance(aeropuerto.distanciaKm)}`}
        </span>
      </div>
    </div>
  );
}

/**
 * Un aeropuerto para elegir como origen.
 *
 * Es un formulario con la Server Action: el código viaja en un campo oculto y
 * la acción lo valida contra la lista. El botón le dice a un lector de
 * pantalla a qué aeropuerto se refiere: en una lista de "Elegir" no habría
 * cómo distinguirlos.
 */
export function OpcionDeAeropuerto({
  aeropuerto,
  etiqueta = "Elegir",
  destacada = false,
}: {
  aeropuerto: AeropuertoResumido;
  etiqueta?: string;
  /** La sugerida: con borde marcado y el botón principal. */
  destacada?: boolean;
}) {
  return (
    <form
      action={elegirOrigenAction}
      className={cn(
        "flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4",
        destacada && "border-foreground",
      )}
    >
      <input type="hidden" name="iata" value={aeropuerto.iata} />

      <FichaDeAeropuerto aeropuerto={aeropuerto} />

      <BotonDeEnviar
        variant={destacada ? "default" : "outline"}
        aria-label={`${etiqueta}: ${aeropuerto.nombre}`}
      >
        {etiqueta}
      </BotonDeEnviar>
    </form>
  );
}
