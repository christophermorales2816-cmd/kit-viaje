"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * Calendario sobre react-day-picker.
 *
 * Los nombres de `classNames` están tomados del enum UI de la versión 10 que
 * hay instalada, no de memoria: entre versiones cambiaron (`button_previous` y
 * `button_next` antes eran otra cosa), y escribirlos de cabeza deja un
 * calendario sin estilos que igual compila.
 *
 * Locale español por defecto: el MVP es monolingüe (spec, sección 2).
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      locale={es}
      showOutsideDays={showOutsideDays}
      // `relative` no es decorativo: en la v10 el nav es hermano del root, no hijo
      // del caption. Sin un ancestro posicionado acá, las flechas de mes se
      // posicionan contra lo que haya más arriba —el panel entero— y terminan
      // en las esquinas de la pantalla.
      className={cn("relative p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "flex flex-col gap-4",
        month_caption: "flex justify-center pt-1 relative items-center h-9",
        caption_label: "text-sm font-medium capitalize",
        nav: "flex items-center gap-1 absolute inset-x-0 top-0 justify-between px-1 h-9",
        button_previous: cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        button_next: cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        month_grid: "w-full border-collapse space-x-1",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] capitalize",
        week: "flex w-full mt-2",
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          "[&:has([aria-selected])]:bg-accent",
          "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md",
          "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100",
        ),
        range_start: "day-range-start rounded-l-md",
        range_end: "day-range-end rounded-r-md",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside: "text-muted-foreground opacity-50 aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...chevronProps }) =>
          orientation === "left" ? (
            <ChevronLeftIcon className="size-4" {...chevronProps} />
          ) : (
            <ChevronRightIcon className="size-4" {...chevronProps} />
          ),
      }}
      {...props}
    />
  );
}

export { Calendar };
