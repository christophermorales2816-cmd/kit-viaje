"use client";

import { useMemo, useSyncExternalStore } from "react";
import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Lugar, Plato, Region } from "@/content/comidas/types";
import {
  type Filtros,
  type OpcionesDelCatalogo,
  SIN_FILTROS,
  busquedaDeFiltros,
  cantidadDeFiltros,
  filtrar,
  filtrosDeLaUrl,
} from "@/lib/comidas/filtros";

import { PanelDeFiltros } from "./panel-de-filtros";
import { TarjetaDePlato } from "./tarjeta-de-plato";

interface Props {
  slug: string;
  platos: Plato[];
  opciones: OpcionesDelCatalogo;
  regiones: Region[];
  nombresDeLugares?: Partial<Record<Lugar, string>>;
}

/**
 * La búsqueda de la URL, como estado de React.
 *
 * Los filtros viven en la URL para que se puedan compartir. Se leen recién en
 * el navegador: el HTML del servidor tiene el catálogo entero, que es lo que
 * lee un buscador. Mientras la ficha de un plato está abierta encima, la URL
 * es la del plato; el catálogo de abajo sigue con la última búsqueda suya, en
 * vez de vaciarse detrás de la ficha.
 */
const oyentes = new Set<() => void>();

function suscribir(oyente: () => void) {
  oyentes.add(oyente);
  window.addEventListener("popstate", oyente);

  return () => {
    oyentes.delete(oyente);
    window.removeEventListener("popstate", oyente);
  };
}

const ultimaBusqueda = new Map<string, string>();

function busquedaDe(ruta: string): string {
  if (window.location.pathname === ruta) {
    ultimaBusqueda.set(ruta, window.location.search);
  }

  return ultimaBusqueda.get(ruta) ?? "";
}

/** El catálogo con sus filtros (spec, 18.3). */
export function Catalogo({
  slug,
  platos,
  opciones,
  regiones,
  nombresDeLugares,
}: Props) {
  const ruta = `/que-comer/${slug}`;
  const busqueda = useSyncExternalStore(
    suscribir,
    () => busquedaDe(ruta),
    () => "",
  );
  const regionesValidas = useMemo(
    () => regiones.map((region) => region.id),
    [regiones],
  );
  const filtros = useMemo(
    () => filtrosDeLaUrl(new URLSearchParams(busqueda), regionesValidas),
    [busqueda, regionesValidas],
  );

  function cambiar(nuevos: Filtros) {
    // replaceState y no pushState: tocar diez casillas no son diez páginas
    // para el botón de volver.
    window.history.replaceState(
      null,
      "",
      `${ruta}${busquedaDeFiltros(nuevos)}`,
    );
    for (const oyente of oyentes) oyente();
  }

  const visibles = filtrar(platos, filtros);
  const elegidos = cantidadDeFiltros(filtros);

  const panel = (
    <PanelDeFiltros
      platos={platos}
      filtros={filtros}
      opciones={opciones}
      regiones={regiones}
      nombresDeLugares={nombresDeLugares}
      onCambio={cambiar}
    />
  );

  const cuenta =
    visibles.length === platos.length
      ? `${platos.length} platos y bebidas`
      : `${visibles.length} de ${platos.length} platos y bebidas`;

  return (
    <div className="grid gap-8 lg:grid-cols-[15rem_1fr]">
      <aside className="hidden lg:block" aria-label="Filtros">
        <div className="sticky top-6 flex max-h-[calc(100dvh-3rem)] flex-col gap-4 overflow-y-auto pr-2 pb-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Filtros</h3>
            {elegidos > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => cambiar(SIN_FILTROS)}
              >
                Borrar
              </Button>
            )}
          </div>
          {panel}
        </div>
      </aside>

      <div className="flex min-w-0 flex-col gap-4">
        <div className="bg-background/95 sticky top-0 z-10 -mx-2 flex items-center justify-between gap-3 px-2 py-2 backdrop-blur lg:static lg:mx-0 lg:p-0">
          <p className="text-muted-foreground text-sm" aria-live="polite">
            {cuenta}
          </p>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal className="size-4" aria-hidden="true" />
                Filtros{elegidos > 0 ? ` (${elegidos})` : ""}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85%] overflow-y-auto">
              <div className="flex flex-col gap-1 p-4 pb-0">
                <SheetTitle>Filtros</SheetTitle>
                <SheetDescription>{cuenta}</SheetDescription>
              </div>
              <div className="flex flex-col gap-4 p-4">
                {elegidos > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="self-start"
                    onClick={() => cambiar(SIN_FILTROS)}
                  >
                    Borrar los filtros
                  </Button>
                )}
                {panel}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {visibles.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visibles.map((plato) => (
              <li key={plato.id}>
                <TarjetaDePlato plato={plato} href={`${ruta}/${plato.id}`} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-start gap-3 rounded-xl border border-dashed p-8">
            <p className="text-pretty">
              Ningún plato cumple todo eso a la vez. Probá sacando un filtro.
            </p>
            <Button variant="outline" onClick={() => cambiar(SIN_FILTROS)}>
              Borrar los filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
