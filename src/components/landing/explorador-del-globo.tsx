"use client";

import { useState } from "react";

import { useTextos } from "@/i18n/cliente";
import { TEXTOS_DE_LA_PORTADA } from "@/i18n/portada";
import type { Coordenadas } from "@/lib/globo/geometria";

import { BuscadorDeDestinos } from "./buscador-de-destinos";
import { GlobeHero, type GlobeDestination } from "./globe-hero";

/**
 * El globo y su buscador, que se hablan: lo que resalta el buscador, el globo
 * lo muestra (spec, 19.5).
 */
export function ExploradorDelGlobo({
  destinos,
  inicio,
}: {
  destinos: GlobeDestination[];
  inicio: Coordenadas;
}) {
  const t = useTextos(TEXTOS_DE_LA_PORTADA).globo;
  const [destacado, setDestacado] = useState<number | null>(null);

  return (
    <div className="flex w-full max-w-[460px] flex-col gap-4">
      <GlobeHero
        destinations={destinos}
        inicio={inicio}
        destacado={destacado}
      />

      <BuscadorDeDestinos destinos={destinos} alResaltar={setDestacado} />

      {/*
        Que se puede arrastrar y acercar no se adivina mirándolo (spec, 8.1).
        En el teléfono se dice con los gestos del dedo.
      */}
      <p className="text-center text-sm text-balance text-white/75">
        <span className="pointer-coarse:hidden">{t.instrucciones}</span>
        <span className="hidden pointer-coarse:inline">
          {t.instruccionesTactiles}
        </span>
      </p>
    </div>
  );
}
