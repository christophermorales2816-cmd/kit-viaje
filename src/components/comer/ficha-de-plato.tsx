import { Star, User } from "lucide-react";

import { DialogTitle } from "@/components/ui/dialog";
import { fotoDe } from "@/content/comidas/fotos";
import type { CatalogoDeComida, Mencion, Plato } from "@/content/comidas/types";
import {
  NOMBRES_DE_AVENTURA,
  NOMBRES_DE_CONTIENE,
  NOMBRES_DE_MENCION,
  NOMBRES_DE_MOMENTO,
  PRECIOS,
  enumerar,
  nombreDeLugar,
} from "@/lib/comidas/etiquetas";
import { sinCerdoNiAlcohol } from "@/lib/comidas/filtros";
import { ciudadInicial } from "@/lib/comidas/mapa";

import { AccionesDelPlato } from "./acciones-del-plato";
import { CreditoDeFoto, FotoDeComidaImagen } from "./foto-de-comida";
import { NivelDePicante, etiquetaDeDieta } from "./tarjeta-de-plato";

/**
 * La ficha de un plato, como una página de menú (spec, 18.3).
 *
 * La misma ficha sirve en la ventana que se abre sobre el catálogo y en la
 * página del plato, que es adonde llega un link compartido o quien no tiene
 * JavaScript. Cambia solo el título: en la ventana es el del diálogo, para
 * que el lector de pantalla lo anuncie al abrirla.
 */
export function FichaDePlato({
  catalogo,
  pais,
  plato,
  menciones,
  enVentana,
}: {
  catalogo: CatalogoDeComida;
  pais: string;
  plato: Plato;
  /** Las vigentes, de este plato (src/lib/comidas/menciones.ts). */
  menciones: Mencion[];
  enVentana: boolean;
}) {
  const foto = fotoDe(plato.foto);
  const precio = PRECIOS[plato.precio];
  const dieta = etiquetaDeDieta(plato);
  const regiones = plato.regiones.map(
    (id) => catalogo.regiones.find((region) => region.id === id)?.nombre ?? id,
  );
  const alergenos = plato.contiene.filter((cosa) =>
    [
      "huevo",
      "lacteos",
      "gluten",
      "mani",
      "frutos-secos",
      "soja",
      "sesamo",
      "mariscos",
      "pescado",
    ].includes(cosa),
  );
  const ciudades = new Map(
    catalogo.ciudades.map((ciudad) => [ciudad.id, ciudad.nombre]),
  );

  const titulo = (
    <span className="font-serif text-3xl leading-tight font-normal tracking-tight text-balance md:text-4xl">
      {plato.nombre}
    </span>
  );

  return (
    <article className="flex min-w-0 flex-col gap-6">
      {foto && (
        <figure className="flex flex-col gap-1.5">
          <FotoDeComidaImagen
            foto={foto}
            alt={plato.nombre}
            prioridad
            className="aspect-[16/9] w-full rounded-lg"
          />
          <figcaption>
            <CreditoDeFoto foto={foto} />
          </figcaption>
        </figure>
      )}

      <header className="flex flex-col gap-2 border-b border-dashed pb-5">
        <div className="flex items-start justify-between gap-4 pr-8">
          {enVentana ? (
            <DialogTitle asChild>
              <h2>{titulo}</h2>
            </DialogTitle>
          ) : (
            <h1>{titulo}</h1>
          )}
          <p className="shrink-0 pt-2 text-right">
            <span className="text-lg font-semibold">{precio.simbolo}</span>
            <span className="text-muted-foreground block text-xs">
              {precio.rango}
            </span>
          </p>
        </div>

        {plato.local && plato.local !== plato.nombre && (
          <p className="text-muted-foreground font-serif text-lg">
            {plato.local}
          </p>
        )}

        <ul className="flex flex-wrap gap-2 text-xs" aria-label="En resumen">
          {plato.imperdible && (
            <li className="inline-flex items-center gap-1 rounded-full bg-slate-950 px-2.5 py-1 font-medium text-white">
              <Star className="size-3 fill-current" aria-hidden="true" />
              Imperdible
            </li>
          )}
          {plato.paraComerSolo && (
            <li className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1">
              <User className="size-3" aria-hidden="true" />
              Para comer solo
            </li>
          )}
          {dieta && (
            <li className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-800">
              {dieta}
            </li>
          )}
          <li className="rounded-full border px-2.5 py-1">
            {NOMBRES_DE_AVENTURA[plato.aventura]}
          </li>
          {plato.picante > 0 && (
            <li className="inline-flex items-center rounded-full border px-2.5 py-1">
              <NivelDePicante nivel={plato.picante} />
            </li>
          )}
        </ul>
      </header>

      <p className="text-lg leading-relaxed text-pretty">{plato.descripcion}</p>

      <dl className="grid gap-5 sm:grid-cols-2">
        <Seccion titulo="Sabor" ancho>
          <p className="font-serif text-lg text-pretty italic">{plato.sabor}</p>
        </Seccion>

        <Seccion titulo="Ingredientes">
          <ul className="flex flex-col gap-1">
            {plato.ingredientes.map((ingrediente) => (
              <li key={ingrediente}>{ingrediente}</li>
            ))}
          </ul>
        </Seccion>

        <Seccion titulo="Dónde y cuándo">
          <p>
            <span className="font-medium">Dónde: </span>
            {enumerar(
              plato.lugares.map((lugar) =>
                nombreDeLugar(lugar, catalogo.nombresDeLugares).toLowerCase(),
              ),
              "o",
            )}
            .
          </p>
          <p>
            <span className="font-medium">Cuándo: </span>
            {enumerar(
              plato.momentos.map((momento) =>
                NOMBRES_DE_MOMENTO[momento].toLowerCase(),
              ),
              "o",
            )}
            .
          </p>
          <p>
            {/* Con etiqueta, como las otras dos: "Típico de Patagonia" no se
                dice, y cada región pediría su artículo. */}
            <span className="font-medium">Región: </span>
            {regiones.length > 0 ? enumerar(regiones) : "todo el país"}.
          </p>
        </Seccion>

        <Seccion titulo="Para tu dieta" ancho>
          <p>
            {alergenos.length > 0
              ? `Lleva ${enumerar(alergenos.map((cosa) => NOMBRES_DE_CONTIENE[cosa]))}.`
              : "No lleva ninguno de los alérgenos más comunes."}{" "}
            {sinCerdoNiAlcohol(plato.contiene)
              ? "No lleva cerdo ni alcohol."
              : plato.contiene.includes("cerdo") &&
                  plato.contiene.includes("alcohol")
                ? "Lleva cerdo y alcohol."
                : plato.contiene.includes("cerdo")
                  ? "Lleva cerdo."
                  : "Lleva alcohol."}
          </p>
          {plato.nota && (
            <p className="rounded-md bg-amber-50 px-3 py-2 text-amber-950">
              {plato.nota}
            </p>
          )}
          <p className="text-muted-foreground text-xs">
            Es la receta de siempre: cada lugar la hace a su manera. Con una
            alergia, preguntá antes de pedir.
          </p>
        </Seccion>
      </dl>

      {menciones.length > 0 && (
        <section className="flex flex-col gap-3">
          <h3 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            Menciones de honor
          </h3>
          <ul className="flex flex-col gap-3">
            {menciones.map((mencion) => (
              <li key={mencion.id} className="rounded-lg border p-3">
                <p className="font-medium">
                  {mencion.nombre}{" "}
                  <span className="text-muted-foreground text-sm font-normal">
                    · {ciudades.get(mencion.ciudad)} ·{" "}
                    {NOMBRES_DE_MENCION[mencion.tipo]}
                  </span>
                </p>
                <p className="text-muted-foreground text-sm text-pretty">
                  {mencion.porQue}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <AccionesDelPlato
        pais={catalogo.slug}
        nombreDelPais={pais}
        plato={{ id: plato.id, nombre: plato.nombre }}
        sinMapa={plato.sinMapa ?? null}
        ciudades={catalogo.ciudades}
        ciudadInicial={ciudadInicial(catalogo, plato).id}
        menciones={menciones}
      />
    </article>
  );
}

function Seccion({
  titulo,
  ancho = false,
  children,
}: {
  titulo: string;
  ancho?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        ancho ? "flex flex-col gap-2 sm:col-span-2" : "flex flex-col gap-2"
      }
    >
      <dt className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
        {titulo}
      </dt>
      <dd className="flex flex-col gap-2 text-sm">{children}</dd>
    </div>
  );
}
