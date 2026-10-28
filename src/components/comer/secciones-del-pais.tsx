import Link from "next/link";
import { Store } from "lucide-react";

import type { CatalogoDeComida, Mencion } from "@/content/comidas/types";
import { NOMBRES_DE_MENCION } from "@/lib/comidas/etiquetas";
import { urlEnOpenStreetMap, urlParaLlegar } from "@/lib/comidas/lugares";

/** La despensa del país: qué se usa en su cocina (spec, 18.2). */
export function Despensa({ catalogo }: { catalogo: CatalogoDeComida }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-muted-foreground max-w-2xl text-pretty">
        {catalogo.despensa.intro}
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {catalogo.despensa.ingredientes.map((ingrediente) => (
          <li
            key={ingrediente.nombre}
            className="flex flex-col gap-1 rounded-xl border bg-amber-50/40 p-4"
          >
            <p className="font-medium">
              {ingrediente.nombre}
              {ingrediente.local && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  {ingrediente.local}
                </span>
              )}
            </p>
            <p className="text-muted-foreground text-sm text-pretty">
              {ingrediente.descripcion}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Las menciones de honor (spec, 18.5): lugares elegidos, no pagados, que se
 * esconden solos si en OpenStreetMap cierran.
 */
export function MencionesDeHonor({
  catalogo,
  menciones,
}: {
  catalogo: CatalogoDeComida;
  menciones: Mencion[];
}) {
  const ciudades = new Map(
    catalogo.ciudades.map((ciudad) => [ciudad.id, ciudad.nombre]),
  );
  const platos = new Map(catalogo.platos.map((plato) => [plato.id, plato]));

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {menciones.map((mencion) => (
        <li
          key={mencion.id}
          className="flex flex-col gap-2 rounded-xl border p-5"
        >
          <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            {NOMBRES_DE_MENCION[mencion.tipo]} · {ciudades.get(mencion.ciudad)}
          </p>
          <p className="text-lg font-semibold text-balance">{mencion.nombre}</p>
          <p className="text-muted-foreground text-sm text-pretty">
            {mencion.porQue}
          </p>
          <p className="text-sm">
            Por{" "}
            {mencion.platos.map((id, i) => (
              <span key={id}>
                {i > 0 && (i === mencion.platos.length - 1 ? " y " : ", ")}
                <Link
                  href={`/que-comer/${catalogo.slug}/${id}`}
                  scroll={false}
                  className="underline underline-offset-2"
                >
                  {platos.get(id)?.nombre.toLowerCase()}
                </Link>
              </span>
            ))}
          </p>
          <p className="mt-auto flex flex-wrap gap-x-4 pt-1 text-sm">
            <a
              href={urlParaLlegar(mencion.coords[0], mencion.coords[1])}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-2"
            >
              Cómo llegar
            </a>
            <a
              href={urlEnOpenStreetMap({ id: mencion.osm })}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground underline underline-offset-2"
            >
              En OpenStreetMap
            </a>
          </p>
        </li>
      ))}
    </ul>
  );
}

/**
 * Para los negocios: cómo aparecer en los mapas, gratis (spec, 18.5).
 *
 * Es la otra mitad de la frescura: el mapa sale de OpenStreetMap, y el que
 * más rápido puede cargar un lugar nuevo es su dueño.
 */
export function ParaNegocios({ pais }: { pais: string }) {
  return (
    <aside className="flex flex-col gap-3 rounded-2xl border border-dashed p-6 sm:flex-row sm:items-start sm:gap-5">
      <Store className="size-8 shrink-0 text-orange-500" aria-hidden="true" />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">
          ¿Tenés un negocio de comida en {pais}?
        </h3>
        <p className="text-muted-foreground text-sm text-pretty">
          Cargalo gratis en OpenStreetMap, con el tipo de cocina que hacés —
          ramen, tacos, parrilla—. Al día siguiente aparece en el mapa de cada
          plato que servís, acá y en todas las apps que usan OpenStreetMap. No
          se cobra por aparecer, ni acá ni allá.
        </p>
        <p className="text-muted-foreground text-sm text-pretty">
          Las menciones de honor no se compran: las elegimos nosotros.
        </p>
        <a
          href="https://www.openstreetmap.org/fixthemap"
          target="_blank"
          rel="noreferrer"
          className="w-fit text-sm font-medium underline underline-offset-4"
        >
          Cómo sumar un lugar a OpenStreetMap
        </a>
      </div>
    </aside>
  );
}
