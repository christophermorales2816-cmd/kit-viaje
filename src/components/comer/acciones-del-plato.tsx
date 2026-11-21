"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Check, MapPin, MapPinOff, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CiudadDelMapa, Mencion } from "@/content/comidas/types";
import { useTextos } from "@/i18n/cliente";
import { TEXTOS_DE_COMIDAS } from "@/i18n/comidas";

/**
 * El mapa recién se baja cuando alguien lo pide: MapLibre pesa más que todo
 * el resto del catálogo junto, y la mayoría mira la ficha y sigue de largo.
 */
const MapaDeLugares = dynamic(
  () => import("./mapa-de-lugares").then((modulo) => modulo.MapaDeLugares),
  {
    ssr: false,
    loading: () => <CargandoElMapa />,
  },
);

function CargandoElMapa() {
  const t = useTextos(TEXTOS_DE_COMIDAS).mapa;

  return (
    <div className="bg-muted text-muted-foreground flex h-[420px] items-center justify-center rounded-xl border text-sm sm:h-[480px]">
      {t.cargando}
    </div>
  );
}

interface Props {
  pais: string;
  nombreDelPais: string;
  plato: { id: string; nombre: string };
  /** Por qué no hay mapa, si no lo hay. */
  sinMapa: string | null;
  ciudades: CiudadDelMapa[];
  ciudadInicial: string;
  menciones: Mencion[];
}

/**
 * Lo que cierra la ficha: buscar dónde lo sirven y compartirla (spec, 18.3).
 */
export function AccionesDelPlato({
  pais,
  nombreDelPais,
  plato,
  sinMapa,
  ciudades,
  ciudadInicial,
  menciones,
}: Props) {
  const t = useTextos(TEXTOS_DE_COMIDAS).acciones;
  const [mapaAbierto, setMapaAbierto] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const seccion = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapaAbierto) {
      seccion.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [mapaAbierto]);

  async function compartir() {
    const url = window.location.href;

    // En el teléfono, el menú de compartir del sistema; en la computadora,
    // copiar el link, que es lo que se hace después igual.
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.tituloAlCompartir(plato.nombre, nombreDelPais),
          url,
        });
      } catch {
        // Cerrar el menú sin elegir no es un error.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2500);
    } catch {
      window.prompt(t.copiaElEnlace, url);
    }
  }

  return (
    <div className="flex flex-col gap-4 border-t border-dashed pt-5">
      {sinMapa && (
        <p className="text-muted-foreground flex items-start gap-2 text-sm text-pretty">
          <MapPinOff className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {sinMapa}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        {!sinMapa && !mapaAbierto && (
          <Button size="lg" onClick={() => setMapaAbierto(true)}>
            <MapPin className="size-4" aria-hidden="true" />
            {t.buscarRestaurantes}
          </Button>
        )}
        <Button size="lg" variant="outline" onClick={compartir}>
          {copiado ? (
            <Check className="size-4" aria-hidden="true" />
          ) : (
            <Share2 className="size-4" aria-hidden="true" />
          )}
          {copiado ? t.copiado : t.compartir}
        </Button>
      </div>

      {mapaAbierto && (
        <div ref={seccion} className="scroll-mt-4">
          <MapaDeLugares
            pais={pais}
            nombreDelPais={nombreDelPais}
            plato={plato}
            ciudades={ciudades}
            ciudadInicial={ciudadInicial}
            menciones={menciones}
          />
        </div>
      )}
    </div>
  );
}
