"use client";

import { useActionState, useState } from "react";
import type { DateRange } from "react-day-picker";
import { es } from "react-day-picker/locale";
import { CalendarDays, Loader2, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { formatDateRange, formatDuration, formatTripType } from "@/lib/format";
import { TRIP_TYPES, type TripType } from "@/lib/packing";
import { createTripAction } from "@/lib/trips/actions";
import { MAX_TRIP_DAYS } from "@/lib/trips/validate";
import { toIsoDate } from "@/lib/format";

/**
 * Los dos únicos datos del MVP (spec, sección 6A paso 1).
 *
 * El tipo de viaje no puede quedar implícito: junto con el clima es una de las
 * dos dimensiones que filtran el catálogo (sección 4). Sin ese dato el motor no
 * distingue equipaje de playa de equipaje de negocios, así que el botón de
 * confirmar queda deshabilitado hasta que estén los dos.
 */

/** Hoy a medianoche local: el datepicker no ofrece días que ya pasaron. */
function hoy(): Date {
  const ahora = new Date();

  return new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
}

function diasEntre(range: DateRange): number | null {
  if (!range.from || !range.to) return null;

  const dia = 86_400_000;
  const desde = new Date(
    range.from.getFullYear(),
    range.from.getMonth(),
    range.from.getDate(),
  );
  const hasta = new Date(
    range.to.getFullYear(),
    range.to.getMonth(),
    range.to.getDate(),
  );

  return Math.round((hasta.getTime() - desde.getTime()) / dia) + 1;
}

export function NewTripForm() {
  const [state, formAction, isPending] = useActionState(createTripAction, null);
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [tripType, setTripType] = useState<TripType | null>(null);

  const dias = range ? diasEntre(range) : null;
  const completo = Boolean(range?.from && range.to && tripType);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {/*
        Las fechas viajan como yyyy-mm-dd en campos ocultos y no como Date: una
        Date serializada por el navegador llegaría en UTC y le restaría un día
        al usuario en Buenos Aires.
      */}
      <input
        type="hidden"
        name="startDate"
        value={range?.from ? toIsoDate(range.from) : ""}
      />
      <input
        type="hidden"
        name="endDate"
        value={range?.to ? toIsoDate(range.to) : ""}
      />
      <input type="hidden" name="tripType" value={tripType ?? ""} />

      <fieldset className="flex flex-col gap-3">
        <legend className="flex items-center gap-2 text-sm font-medium">
          <CalendarDays className="size-4 text-muted-foreground" />
          ¿Cuándo viajás?
        </legend>

        <div className="rounded-lg border">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            locale={es}
            // El tope lo repiten el constraint trips_max_duration y
            // parseTripInput. Acá es para que el usuario no pueda ni pintar un
            // rango que después le van a rechazar.
            max={MAX_TRIP_DAYS}
            disabled={{ before: hoy() }}
            startMonth={hoy()}
            className="w-full"
          />
        </div>

        <p className="min-h-5 text-sm text-muted-foreground" aria-live="polite">
          {range?.from && range.to && dias
            ? `${formatDateRange(toIsoDate(range.from), toIsoDate(range.to))} — ${formatDuration(dias)}`
            : `Elegí la ida y la vuelta. Hasta ${MAX_TRIP_DAYS} días.`}
        </p>
      </fieldset>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-medium">¿Qué tipo de viaje?</legend>

        {/*
          Chips de un tap y no un select: son cuatro opciones fijas y el spec
          pide que siga siendo una sola interacción, no dos pantallas.
        */}
        <div className="flex flex-wrap gap-2">
          {TRIP_TYPES.map((tipo) => {
            const elegido = tripType === tipo;

            return (
              <button
                key={tipo}
                type="button"
                onClick={() => setTripType(tipo)}
                aria-pressed={elegido}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  "focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none",
                  elegido
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-input bg-background hover:bg-accent",
                )}
              >
                {formatTripType(tipo)}
              </button>
            );
          })}
        </div>
      </fieldset>

      {state?.error ? (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive"
        >
          <TriangleAlert className="mt-0.5 size-4 shrink-0" />
          {state.error}
        </p>
      ) : null}

      <Button type="submit" disabled={!completo || isPending} size="lg">
        {isPending ? (
          <>
            <Loader2 className="animate-spin" />
            Armando tu kit…
          </>
        ) : (
          "Armar mi kit de viaje"
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        Sin cuenta y sin mail. Te vamos a dar un link: ese link es la única forma
        de volver a tu viaje.
      </p>
    </form>
  );
}
