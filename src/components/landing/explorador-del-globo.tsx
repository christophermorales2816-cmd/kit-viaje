"use client";

import { useState } from "react";

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
        <span className="pointer-coarse:hidden">
          Arrastrá para girar, acercá con los botones o Ctrl + rueda, y tocá un
          punto para elegirlo.
        </span>
        <span className="hidden pointer-coarse:inline">
          Arrastrá para girar, pellizcá para acercar y tocá un punto para
          elegirlo.
        </span>
      </p>
    </div>
  );
}
