"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useMemo, useState, type KeyboardEvent } from "react";

import { buscarDestinos } from "@/lib/globo/buscar";

/**
 * El buscador del globo (spec, 19.5): la forma de llegar a cualquier destino
 * con el teclado o un lector de pantalla, y la más rápida para quien ya sabe
 * adónde va.
 *
 * Es un combobox de ARIA 1.2 —el patrón de "lista con autocompletado"—: se
 * escribe, las flechas recorren las opciones y Enter va a la guía. Mientras se
 * recorre, el globo vuela hasta la opción resaltada: es una vista previa, no
 * una elección. Elegir es ir a la guía, como en cualquier buscador.
 */

export interface DestinoBuscable {
  label: string;
  href: string;
  zona: string;
}

export function BuscadorDeDestinos({
  destinos,
  alResaltar,
}: {
  destinos: DestinoBuscable[];
  /** El índice del destino resaltado, o null: el globo vuela hasta él. */
  alResaltar: (i: number | null) => void;
}) {
  const router = useRouter();
  const id = useId();
  const [consulta, setConsulta] = useState("");
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState(-1);

  const conIndice = useMemo(
    () => destinos.map((destino, i) => ({ ...destino, i })),
    [destinos],
  );
  const resultados = useMemo(
    () => buscarDestinos(conIndice, consulta),
    [conIndice, consulta],
  );
  const mostrar = abierto && consulta.trim().length > 0;

  const resaltar = (posicion: number) => {
    setActivo(posicion);
    alResaltar(posicion >= 0 ? (resultados[posicion]?.i ?? null) : null);
  };

  const cerrar = () => {
    setAbierto(false);
    setActivo(-1);
    alResaltar(null);
  };

  const ir = (posicion: number) => {
    const destino = resultados[posicion];
    if (!destino) return;
    cerrar();
    router.push(destino.href);
  };

  const alTeclear = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!mostrar) {
        setAbierto(true);
        return;
      }
      if (resultados.length === 0) return;
      const paso = e.key === "ArrowDown" ? 1 : -1;
      const siguiente =
        activo === -1
          ? paso === 1
            ? 0
            : resultados.length - 1
          : (activo + paso + resultados.length) % resultados.length;
      resaltar(siguiente);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      // Con una sola opción, o ninguna resaltada, Enter va a la primera.
      if (resultados.length > 0) ir(activo >= 0 ? activo : 0);
      return;
    }

    if (e.key === "Escape") {
      if (mostrar) {
        e.preventDefault();
        cerrar();
      } else if (consulta) {
        setConsulta("");
      }
    }
  };

  const idDeLaLista = `${id}-lista`;
  const idDeOpcion = (posicion: number) => `${id}-opcion-${posicion}`;

  return (
    <div className="relative w-full">
      <label htmlFor={`${id}-entrada`} className="sr-only">
        Buscá un destino
      </label>
      <Search
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-500"
      />
      <input
        id={`${id}-entrada`}
        type="text"
        role="combobox"
        aria-expanded={mostrar}
        aria-controls={idDeLaLista}
        aria-autocomplete="list"
        aria-activedescendant={
          mostrar && activo >= 0 ? idDeOpcion(activo) : undefined
        }
        autoComplete="off"
        spellCheck={false}
        placeholder="Buscá un país o un destino"
        value={consulta}
        onChange={(e) => {
          setConsulta(e.target.value);
          setAbierto(true);
          setActivo(-1);
          alResaltar(null);
        }}
        onFocus={() => setAbierto(true)}
        onBlur={cerrar}
        onKeyDown={alTeclear}
        className="h-12 w-full rounded-full border border-white/20 bg-white pr-4 pl-11 text-[0.95rem] text-slate-950 shadow-lg outline-none placeholder:text-slate-500 focus-visible:ring-[3px] focus-visible:ring-orange-400/70"
      />

      {mostrar ? (
        <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border bg-white text-slate-950 shadow-2xl">
          <ul id={idDeLaLista} role="listbox" aria-label="Destinos">
            {resultados.map((destino, posicion) => (
              <li
                key={destino.href}
                id={idDeOpcion(posicion)}
                role="option"
                aria-selected={posicion === activo}
                // mousedown y no click: el click llegaría después del blur, que
                // ya cerró la lista.
                onMouseDown={(e) => {
                  e.preventDefault();
                  ir(posicion);
                }}
                onMouseEnter={() => resaltar(posicion)}
                className="flex cursor-pointer items-baseline justify-between gap-3 px-4 py-2.5 aria-selected:bg-orange-50"
              >
                <span className="font-medium">{destino.label}</span>
                <span className="text-xs text-slate-500">{destino.zona}</span>
              </li>
            ))}
          </ul>
          {resultados.length === 0 ? (
            <p role="status" className="px-4 py-3 text-sm text-slate-600">
              No tenemos guía de “{consulta.trim()}” todavía.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
