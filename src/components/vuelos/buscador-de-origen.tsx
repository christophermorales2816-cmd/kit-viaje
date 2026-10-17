"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Loader2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { AeropuertoResumido } from "@/lib/vuelos/tipos";

import { OpcionDeAeropuerto } from "./opcion-de-aeropuerto";

/**
 * El buscador de "Salgo desde" (spec, 17.3).
 *
 * Es un formulario GET común. Sin JavaScript, "Buscar" lleva a
 * `/vuelos?buscar=…` y la página trae los resultados desde el servidor: llegan
 * acá como `children` y siguen siendo formularios de servidor, que andan sin
 * JavaScript. Con JavaScript, busca mientras se escribe —en /api/aeropuertos,
 * que guarda la CDN—, la URL no cambia y los resultados nuevos reemplazan a
 * los del servidor.
 *
 * Espera ESPERA_MS desde la última tecla y cancela el pedido anterior cuando
 * sale uno nuevo: quien escribe "buenos aires" hace uno o dos pedidos, no
 * doce, y nunca ve los resultados de "bue" después de los de "buenos".
 */

const ESPERA_MS = 200;

// Los mismos límites que src/lib/vuelos/buscar.ts, que es solo del servidor:
// con menos letras no busca, y más largo que esto no es una ciudad.
const LARGO_MINIMO = 2;
const LARGO_MAXIMO = 60;

type Estado =
  // Lo que mandó el servidor, si mandó algo: los `children`.
  | { tipo: "servidor" }
  // Menos letras que el mínimo: no hay nada que mostrar.
  | { tipo: "vacio" }
  // Mientras llega la respuesta quedan los resultados anteriores, para que
  // la lista no salte a cada letra.
  | { tipo: "buscando"; anteriores: AeropuertoResumido[] }
  | { tipo: "listo"; consulta: string; resultados: AeropuertoResumido[] }
  | { tipo: "fallo" };

function mensaje(estado: Estado): string {
  switch (estado.tipo) {
    case "buscando":
      return "Buscando…";
    case "fallo":
      return "No pudimos buscar. Probá de nuevo en un momento.";
    case "listo":
      if (estado.resultados.length === 0) {
        return `Ningún aeropuerto coincide con «${estado.consulta}». Probá con el código de tres letras o con el nombre en otro idioma.`;
      }
      return estado.resultados.length === 1
        ? "Un aeropuerto."
        : `${estado.resultados.length} aeropuertos.`;
    default:
      return "";
  }
}

export function BuscadorDeOrigen({
  titulo,
  busquedaInicial,
  children,
}: {
  titulo: string;
  /** Lo que venía en `?buscar=`, para que el campo no aparezca vacío. */
  busquedaInicial: string;
  /** Los resultados que trajo el servidor para `busquedaInicial`. */
  children?: ReactNode;
}) {
  const [texto, setTexto] = useState(busquedaInicial);
  const [estado, setEstado] = useState<Estado>({ tipo: "servidor" });

  // La espera y el pedido en curso. Un solo objeto que no cambia, así la
  // limpieza del efecto ve siempre los valores de ahora.
  const pendiente = useRef<{ espera?: number; pedido?: AbortController }>({});

  useEffect(() => {
    const actual = pendiente.current;

    // Al irse de la página, que no quede nada en vuelo.
    return () => {
      window.clearTimeout(actual.espera);
      actual.pedido?.abort();
    };
  }, []);

  function buscar(valor: string, demoraMs: number) {
    const actual = pendiente.current;
    window.clearTimeout(actual.espera);
    actual.pedido?.abort();

    const consulta = valor.trim();

    if (consulta.length < LARGO_MINIMO) {
      setEstado({ tipo: "vacio" });
      return;
    }

    actual.espera = window.setTimeout(async () => {
      const pedido = new AbortController();
      actual.pedido = pedido;

      setEstado((previo) => ({
        tipo: "buscando",
        anteriores: previo.tipo === "listo" ? previo.resultados : [],
      }));

      try {
        const respuesta = await fetch(
          `/api/aeropuertos?q=${encodeURIComponent(consulta)}`,
          { signal: pedido.signal },
        );

        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

        const datos: { aeropuertos: AeropuertoResumido[] } =
          await respuesta.json();

        setEstado({ tipo: "listo", consulta, resultados: datos.aeropuertos });
      } catch {
        // Cancelado porque salió otro pedido: el estado lo maneja ese.
        if (pedido.signal.aborted) return;

        setEstado({ tipo: "fallo" });
      }
    }, demoraMs);
  }

  const resultados =
    estado.tipo === "listo"
      ? estado.resultados
      : estado.tipo === "buscando"
        ? estado.anteriores
        : [];

  return (
    <div className="flex flex-col gap-3">
      <form
        role="search"
        action="/vuelos"
        method="get"
        className="flex flex-col gap-2"
        onSubmit={(evento) => {
          // Con JavaScript no hace falta ir a otra página: se busca ya.
          evento.preventDefault();
          buscar(texto, 0);
        }}
      >
        <label htmlFor="buscar" className="text-sm font-medium">
          {titulo}
        </label>

        <div className="flex gap-2">
          <Input
            id="buscar"
            name="buscar"
            type="search"
            value={texto}
            onChange={(evento) => {
              setTexto(evento.target.value);
              buscar(evento.target.value, ESPERA_MS);
            }}
            placeholder="Ciudad, aeropuerto o código: Rosario, Ezeiza, EZE"
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="search"
            maxLength={LARGO_MAXIMO}
          />

          <Button type="submit" variant="outline">
            {estado.tipo === "buscando" ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Search />
            )}
            Buscar
          </Button>
        </div>
      </form>

      <p aria-live="polite" className="text-muted-foreground text-sm">
        {mensaje(estado)}
      </p>

      {estado.tipo === "servidor" ? (
        children
      ) : resultados.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {resultados.map((aeropuerto) => (
            <li key={aeropuerto.iata}>
              <OpcionDeAeropuerto aeropuerto={aeropuerto} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
