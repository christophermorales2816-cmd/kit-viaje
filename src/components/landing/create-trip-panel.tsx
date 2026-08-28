"use client";

import * as React from "react";
import {
  Briefcase,
  Building2,
  CalendarDays,
  Loader2,
  Mountain,
  TriangleAlert,
  Waves,
} from "lucide-react";
import type { DateRange } from "react-day-picker";

import { Globe } from "@/components/landing/globe";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { createTripAction } from "@/lib/actions/trips";
import type { TripType } from "@/lib/packing";
import { countDays, formatShortDate, toIsoDate } from "@/lib/trips/format";
import { MAX_TRIP_DAYS } from "@/lib/trips/input";
import { EMPTY_CREATE_TRIP_STATE } from "@/lib/trips/state";
import { cn } from "@/lib/utils";

/**
 * Entrada única de la aplicación (spec, sección 6A).
 *
 * Una sola interacción: se toca el globo y se abre el slide-over con las dos
 * decisiones. El tipo de viaje no puede quedar implícito porque es una de las
 * dos dimensiones que filtran el motor de packing.
 */

const TIPOS: { id: TripType; label: string; Icon: typeof Waves }[] = [
  { id: "playa", label: "Playa", Icon: Waves },
  { id: "urbano", label: "Urbano", Icon: Building2 },
  { id: "aventura", label: "Aventura", Icon: Mountain },
  { id: "negocios", label: "Negocios", Icon: Briefcase },
];

function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function CreateTripPanel() {
  const [open, setOpen] = React.useState(false);
  const [range, setRange] = React.useState<DateRange | undefined>();
  const [tripType, setTripType] = React.useState<TripType | null>(null);
  const [state, formAction, isPending] = React.useActionState(
    createTripAction,
    EMPTY_CREATE_TRIP_STATE,
  );

  const from = range?.from;
  const to = range?.to;
  const days = from && to ? countDays(from, to) : null;
  const toolong = days !== null && days > MAX_TRIP_DAYS;
  const listo = Boolean(from && to && tripType) && !toolong;

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <Globe onSelect={() => setOpen(true)} />
        <Button size="lg" onClick={() => setOpen(true)}>
          <CalendarDays />
          Planificar mi viaje
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Buenos Aires</SheetTitle>
            <SheetDescription>
              Dos datos y listo. Con eso armamos el equipaje y el presupuesto.
            </SheetDescription>
          </SheetHeader>

          <form action={formAction} className="flex flex-1 flex-col gap-6 px-6">
            <input type="hidden" name="startDate" value={from ? toIsoDate(from) : ""} />
            <input type="hidden" name="endDate" value={to ? toIsoDate(to) : ""} />
            <input type="hidden" name="tripType" value={tripType ?? ""} />

            <div className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between">
                <Label>¿Cuándo vas?</Label>
                {days !== null && (
                  <Badge variant={toolong ? "destructive" : "secondary"}>
                    {days} {days === 1 ? "día" : "días"}
                  </Badge>
                )}
              </div>

              <div className="rounded-lg border">
                <Calendar
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  disabled={{ before: startOfToday() }}
                  defaultMonth={from}
                  numberOfMonths={1}
                />
              </div>

              {from && to && (
                <p className="text-muted-foreground text-sm">
                  Del {formatShortDate(from)} al {formatShortDate(to)}.
                </p>
              )}
              {toolong && (
                <p className="text-destructive text-sm">
                  El máximo es {MAX_TRIP_DAYS} días. Acortá el rango.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Label>¿Qué tipo de viaje?</Label>
              <div className="grid grid-cols-2 gap-2">
                {TIPOS.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setTripType(id)}
                    aria-pressed={tripType === id}
                    className={cn(
                      "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors",
                      "focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:outline-hidden",
                      tripType === id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {state.errors.length > 0 && (
              <div
                role="alert"
                className="border-destructive/50 text-destructive flex gap-2 rounded-lg border p-3 text-sm"
              >
                <TriangleAlert className="mt-0.5 size-4 shrink-0" />
                <ul className="flex flex-col gap-1">
                  {state.errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <SheetFooter className="px-0">
              <Button type="submit" size="lg" disabled={!listo || isPending}>
                {isPending && <Loader2 className="animate-spin" />}
                {isPending ? "Armando tu kit…" : "Armar mi kit de viaje"}
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
}
