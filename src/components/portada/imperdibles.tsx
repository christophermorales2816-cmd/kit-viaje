"use client";

import { ChevronDown, Landmark, Mountain } from "lucide-react";
import { useId, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTextos } from "@/i18n/cliente";
import { TEXTOS_DE_LA_PORTADA } from "@/i18n/portada";
import {
  IMPERDIBLES_DE_CULTURA,
  IMPERDIBLES_DE_NATURALEZA,
  VACACIONES,
  type TarjetaConOpciones,
} from "@/content/portada";
import { cn } from "@/lib/utils";

import { EncabezadoDeSeccion } from "./encabezado-de-seccion";
import { Pronto } from "./pronto";
import {
  FondoDeTarjeta,
  TarjetaDeLaPortadaVista,
} from "./tarjeta-de-la-portada";

/**
 * Imperdibles (spec, 19.6): lo mejor de cada destino, por tema, en dos
 * pestañas —Cultura y Naturaleza— para que la sección no sea una pared de
 * diez tarjetas.
 *
 * Todas dicen "Próximamente". Armarlas con lo que ya hay sería adivinar: los
 * 1491 lugares de las guías tienen una etiqueta libre ("Ciudad maya",
 * "Castillo en un lago") y no una categoría, y una lista de "sitios
 * arqueológicos" armada por palabras clave mezclaría ruinas con cualquier
 * cosa que diga "antigua". El camino es sumarle a cada lugar su categoría en
 * las guías, y entonces cada tarjeta lleva a su lista.
 */
export function Imperdibles() {
  const t = useTextos(TEXTOS_DE_LA_PORTADA);

  return (
    <section aria-labelledby="imperdibles-titulo" className="bg-slate-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 md:py-20">
        <EncabezadoDeSeccion
          id="imperdibles-titulo"
          antetitulo={t.imperdibles.antetitulo}
          titulo={t.imperdibles.titulo}
        >
          {t.imperdibles.bajada}
        </EncabezadoDeSeccion>

        <Tabs defaultValue="cultura" className="gap-6">
          <TabsList
            aria-label={t.imperdibles.porTema}
            className="h-11 bg-slate-200/70"
          >
            <TabsTrigger value="cultura" className="px-5 text-[0.95rem]">
              <Landmark aria-hidden />
              {t.imperdibles.cultura}
            </TabsTrigger>
            <TabsTrigger value="naturaleza" className="px-5 text-[0.95rem]">
              <Mountain aria-hidden />
              {t.imperdibles.naturaleza}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cultura">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {IMPERDIBLES_DE_CULTURA.map((tarjeta) => (
                <li key={tarjeta.id}>
                  <TarjetaDeLaPortadaVista
                    tarjeta={tarjeta}
                    texto={t.tarjetas[tarjeta.id]}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/10] sm:aspect-[4/3]"
                  />
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="naturaleza">
            <ul className="grid gap-4 sm:grid-cols-2">
              {IMPERDIBLES_DE_NATURALEZA.map((tarjeta) => (
                <li key={tarjeta.id}>
                  <TarjetaDeLaPortadaVista
                    tarjeta={tarjeta}
                    texto={t.tarjetas[tarjeta.id]}
                    sizes="(min-width: 640px) 560px, 100vw"
                    className="aspect-[16/10] min-h-56"
                  />
                </li>
              ))}
              <li>
                <TarjetaConDesplegable tarjeta={VACACIONES} />
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

/**
 * Vacaciones: una tarjeta que no lleva a un lugar sino que despliega dos
 * (Últimas ofertas y Mejores hoteles). Es una "disclosure" de WAI-ARIA —un
 * botón que muestra y esconde una lista—: no roba el foco ni se cierra sola,
 * y la lista reemplaza a la descripción para que la tarjeta no cambie de alto.
 */
function TarjetaConDesplegable({ tarjeta }: { tarjeta: TarjetaConOpciones }) {
  const t = useTextos(TEXTOS_DE_LA_PORTADA);
  const id = useId();
  const [abierta, setAbierta] = useState(false);
  const { icono: Icono } = tarjeta;
  const texto = t.tarjetas[tarjeta.id];

  return (
    <div className="group/tarjeta relative isolate flex aspect-[16/10] h-full min-h-56 flex-col justify-between gap-4 overflow-hidden rounded-2xl p-5 text-white shadow-sm">
      <FondoDeTarjeta
        imagen={tarjeta.imagen}
        tono={tarjeta.tono}
        icono={tarjeta.icono}
        sizes="(min-width: 640px) 560px, 100vw"
      />

      <span className="ml-auto flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
        <Icono aria-hidden className="size-5" strokeWidth={1.75} />
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg leading-snug font-semibold">{texto.titulo}</h3>

        {abierta ? null : (
          <p className="text-sm text-pretty text-white/80">
            {texto.descripcion}
          </p>
        )}

        <ul
          id={id}
          hidden={!abierta}
          className="flex flex-col gap-1 rounded-xl bg-white/95 p-1.5 text-slate-900 shadow-lg"
        >
          {tarjeta.opciones.map(({ id: clave, icono: IconoDeOpcion }) => (
            <li
              key={clave}
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm"
            >
              <IconoDeOpcion aria-hidden className="size-4 text-slate-500" />
              <span className="font-medium">{t.opciones[clave]}</span>
              <Pronto className="ml-auto" />
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={abierta}
          aria-controls={id}
          onClick={() => setAbierta((antes) => !antes)}
          className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium ring-1 ring-white/30 backdrop-blur-sm transition-colors outline-none hover:bg-white/25 focus-visible:ring-[3px] focus-visible:ring-orange-400/70"
        >
          {abierta ? t.imperdibles.ocultarOpciones : t.imperdibles.verOpciones}
          <ChevronDown
            aria-hidden
            className={cn(
              "size-4 transition-transform motion-reduce:transition-none",
              abierta && "rotate-180",
            )}
          />
        </button>
      </div>
    </div>
  );
}
