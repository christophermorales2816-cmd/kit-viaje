"use client";

import { useId } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import type { Lugar, Plato, Region } from "@/content/comidas/types";
import { useTextos } from "@/i18n/cliente";
import { TEXTOS_DE_COMIDAS } from "@/i18n/comidas";
import { SIMBOLOS_DE_PRECIO, nombreDeLugar } from "@/lib/comidas/etiquetas";
import {
  DIETAS,
  type Filtros,
  type GrupoDeFiltro,
  type OpcionesDelCatalogo,
  TODO_EL_PAIS,
  contarOpcion,
} from "@/lib/comidas/filtros";

type GrupoDeLista = Exclude<
  GrupoDeFiltro,
  "sinCerdoNiAlcohol" | "imperdibles" | "paraComerSolo"
>;
type Interruptor = Extract<
  GrupoDeFiltro,
  "sinCerdoNiAlcohol" | "imperdibles" | "paraComerSolo"
>;

interface Props {
  platos: readonly Plato[];
  filtros: Filtros;
  opciones: OpcionesDelCatalogo;
  regiones: readonly Region[];
  nombresDeLugares?: Partial<Record<Lugar, string>>;
  onCambio: (filtros: Filtros) => void;
}

/**
 * Los filtros del catálogo (spec, 18.3), con cuántos platos deja cada opción.
 *
 * Cada grupo es un fieldset con su leyenda: un lector de pantalla anuncia
 * "Dieta, Vegano, casilla, 4 platos". Una opción que no dejaría ningún plato
 * se deshabilita en vez de esconderse, para que el panel no salte.
 *
 * El panel está dos veces en la página —al costado en la computadora, en un
 * panel desplegable en el teléfono—, así que los ids de cada casilla llevan el
 * de su panel: con ids repetidos, la etiqueta de una marcaría la otra.
 */
export function PanelDeFiltros({
  platos,
  filtros,
  opciones,
  regiones,
  nombresDeLugares,
  onCambio,
}: Props) {
  const { etiquetas, filtros: t } = useTextos(TEXTOS_DE_COMIDAS);
  const panel = useId();

  // Funciones que devuelven filas, no componentes: un componente definido acá
  // adentro sería otro en cada render, y React rearmaría todas las casillas
  // —perdiendo el foco— cada vez que se toca una.
  function opcion<G extends GrupoDeLista>(
    grupo: G,
    valor: Filtros[G][number],
    etiqueta: string,
  ) {
    const actuales = filtros[grupo] as Filtros[G][number][];
    const elegida = actuales.includes(valor);

    return (
      <FilaDeOpcion
        key={`${grupo}-${String(valor)}`}
        id={`${panel}-${grupo}-${String(valor)}`}
        etiqueta={etiqueta}
        cuenta={contarOpcion(platos, filtros, grupo, valor as never)}
        elegida={elegida}
        onCambio={() =>
          onCambio({
            ...filtros,
            [grupo]: elegida
              ? actuales.filter((otro) => otro !== valor)
              : [...actuales, valor],
          })
        }
      />
    );
  }

  function interruptor(grupo: Interruptor, etiqueta: string) {
    return (
      <FilaDeOpcion
        key={grupo}
        id={`${panel}-${grupo}`}
        etiqueta={etiqueta}
        cuenta={contarOpcion(platos, filtros, grupo, true)}
        elegida={filtros[grupo]}
        onCambio={() => onCambio({ ...filtros, [grupo]: !filtros[grupo] })}
      />
    );
  }

  const nombreDeRegion = (id: string) =>
    id === TODO_EL_PAIS
      ? t.enTodoElPais
      : (regiones.find((region) => region.id === id)?.nombre ?? id);

  return (
    <div className="flex flex-col gap-6">
      {(opciones.interruptores.includes("imperdibles") ||
        opciones.interruptores.includes("paraComerSolo")) && (
        <Grupo leyenda={t.paraDestacar}>
          {opciones.interruptores.includes("imperdibles") &&
            interruptor("imperdibles", t.soloImperdibles)}
          {opciones.interruptores.includes("paraComerSolo") &&
            interruptor("paraComerSolo", t.paraComerSolo)}
        </Grupo>
      )}

      <Grupo leyenda={t.dieta}>
        {DIETAS.map((dieta) => opcion("dieta", dieta, etiquetas.dietas[dieta]))}
        {opciones.interruptores.includes("sinCerdoNiAlcohol") && (
          <>
            {interruptor("sinCerdoNiAlcohol", t.sinCerdoNiAlcohol)}
            <p className="text-muted-foreground text-xs text-pretty">
              {t.noEsHalal}
            </p>
          </>
        )}
      </Grupo>

      <Grupo leyenda={t.picante}>
        {opciones.picante.map((nivel) =>
          opcion("picante", nivel, etiquetas.picante[nivel]),
        )}
      </Grupo>

      <Grupo leyenda={t.dondeSeConsigue}>
        {opciones.lugares.map((lugar) =>
          opcion(
            "lugares",
            lugar,
            nombreDeLugar(lugar, nombresDeLugares, etiquetas.lugares),
          ),
        )}
      </Grupo>

      <Grupo leyenda={t.momento}>
        {opciones.momentos.map((momento) =>
          opcion("momentos", momento, etiquetas.momentos[momento]),
        )}
      </Grupo>

      <Grupo leyenda={t.aventura}>
        {opciones.aventura.map((nivel) =>
          opcion("aventura", nivel, etiquetas.aventura[nivel]),
        )}
      </Grupo>

      <Grupo leyenda={t.precio}>
        {opciones.precio.map((precio) =>
          opcion(
            "precio",
            precio,
            t.precioConRango(
              SIMBOLOS_DE_PRECIO[precio],
              etiquetas.precios[precio],
            ),
          ),
        )}
      </Grupo>

      {opciones.regiones.length > 1 && (
        <Grupo leyenda={t.region}>
          {opciones.regiones.map((region) =>
            opcion("regiones", region, nombreDeRegion(region)),
          )}
        </Grupo>
      )}
    </div>
  );
}

function Grupo({
  leyenda,
  children,
}: {
  leyenda: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-muted-foreground mb-1 text-xs font-semibold tracking-wide uppercase">
        {leyenda}
      </legend>
      {children}
    </fieldset>
  );
}

function FilaDeOpcion({
  id,
  etiqueta,
  cuenta,
  elegida,
  onCambio,
}: {
  id: string;
  etiqueta: string;
  cuenta: number;
  elegida: boolean;
  onCambio: () => void;
}) {
  const t = useTextos(TEXTOS_DE_COMIDAS).filtros;
  const inutil = cuenta === 0 && !elegida;
  const idDelControl = `filtro-${id}`;

  return (
    <div className="flex items-center gap-2 text-sm">
      <Checkbox
        id={idDelControl}
        checked={elegida}
        disabled={inutil}
        onCheckedChange={onCambio}
        aria-describedby={`${idDelControl}-cuenta`}
      />
      <label
        htmlFor={idDelControl}
        className={inutil ? "text-muted-foreground" : "cursor-pointer"}
      >
        {etiqueta}
      </label>
      <span
        id={`${idDelControl}-cuenta`}
        className="text-muted-foreground ml-auto text-xs tabular-nums"
      >
        {cuenta}
        <span className="sr-only">{t.platos(cuenta)}</span>
      </span>
    </div>
  );
}
