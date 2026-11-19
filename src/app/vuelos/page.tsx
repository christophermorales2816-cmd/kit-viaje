import { Suspense } from "react";
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";

import { BotonDeEnviar } from "@/components/vuelos/boton-de-enviar";
import { BuscadorDeOrigen } from "@/components/vuelos/buscador-de-origen";
import {
  FichaDeAeropuerto,
  OpcionDeAeropuerto,
} from "@/components/vuelos/opcion-de-aeropuerto";
import { Radar, type Foco } from "@/components/vuelos/radar";
import { formatDate } from "@/lib/format";
import { olvidarOrigenAction } from "@/lib/vuelos/actions";
import { traerZona } from "@/lib/vuelos/adsb";
import {
  AEROPUERTOS_DESCARGADOS,
  aeropuertoPorIata,
  resumir,
  type Aeropuerto,
} from "@/lib/vuelos/aeropuertos";
import {
  LARGO_MAXIMO_DE_BUSQUEDA,
  buscarAeropuertos,
} from "@/lib/vuelos/buscar";
import { sugerirOrigen, type Sugerencia } from "@/lib/vuelos/cercanos";
import { COOKIE_DE_ORIGEN, origenGuardado } from "@/lib/vuelos/origen";
import type { AeropuertoResumido } from "@/lib/vuelos/tipos";
import { ubicacionAproximada } from "@/lib/vuelos/ubicacion";
import { centroDeZona } from "@/lib/vuelos/zona";
import { enriquecer } from "@/i18n/enriquecer";
import { textos } from "@/i18n/servidor";
import { TEXTOS_DE_VUELOS } from "@/i18n/vuelos";

/**
 * Vuelos: el radar en vivo y "Salgo desde" (spec, 17.3 y 17.5).
 *
 * Arriba, lo que vuela ahora alrededor del aeropuerto de quien mira: es lo
 * curioso, lo que hace que alguien entre. Abajo, la elección de ese
 * aeropuerto, que es la base de lo que viene —las rutas, los precios (17.4)—:
 * se sugiere uno según la conexión, se ofrecen los de alrededor y se puede
 * buscar cualquier otro.
 *
 * Es dinámica: lee la cookie del origen y la ubicación de la request, así que
 * se arma en cada visita y Next la manda sin caché compartida. El radar va en
 * un `<Suspense>`: la página sale sin esperar a adsb.lol, y los aviones
 * llegan atrás. Lo que se escribe en el buscador va por /api/aeropuertos, y lo
 * que pide el radar después, por /api/vuelos/en-vivo; los dos se cachean.
 */

export async function generateMetadata(): Promise<Metadata> {
  const t = (await textos(TEXTOS_DE_VUELOS)).metadatos;

  return { title: t.titulo, description: t.descripcion };
}

/** Un enlace a una fuente, en la línea de las fuentes del pie de la página. */
function fuente(href: string) {
  function EnlaceALaFuente(texto: string) {
    return (
      <a
        href={href}
        className="hover:text-foreground underline underline-offset-2"
      >
        {texto}
      </a>
    );
  }

  return EnlaceALaFuente;
}

/**
 * Dónde arranca el radar si no hay ni origen elegido ni ubicación —en local,
 * o si Vercel no la informa—: Buenos Aires, donde nació el sitio.
 */
const FOCO_POR_DEFECTO = "EZE";

function foco(aeropuerto: Aeropuerto): Foco {
  return { lat: aeropuerto.lat, lon: aeropuerto.lon, iata: aeropuerto.iata };
}

export default async function VuelosPage({
  searchParams,
}: PageProps<"/vuelos">) {
  const { buscar } = await searchParams;
  // Recortada como la recorta la búsqueda: lo que no se busca no se muestra.
  const busqueda =
    typeof buscar === "string"
      ? buscar.slice(0, LARGO_MAXIMO_DE_BUSQUEDA).trim()
      : "";

  const origen = origenGuardado((await cookies()).get(COOKIE_DE_ORIGEN)?.value);
  // Con un origen elegido no hace falta sugerir nada: la ubicación ni se lee.
  const ubicacion = origen ? null : ubicacionAproximada(await headers());
  const sugerencia = ubicacion
    ? sugerirOrigen(ubicacion.lat, ubicacion.lon)
    : null;

  // Solo sin JavaScript: con JavaScript el buscador no cambia la URL.
  const resultados = buscarAeropuertos(busqueda).map((aeropuerto) =>
    resumir(aeropuerto),
  );

  const textosDeVuelos = await textos(TEXTOS_DE_VUELOS);
  const t = textosDeVuelos.pagina;
  const enfocado =
    origen ??
    sugerencia?.sugerido.aeropuerto ??
    aeropuertoPorIata(FOCO_POR_DEFECTO)!;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          {t.titulo}
        </h1>

        <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
          {t.bajada}
        </p>
      </header>

      <section aria-labelledby="en-vivo" className="flex flex-col gap-4">
        <h2 id="en-vivo" className="text-lg font-semibold">
          {t.enVivo}
        </h2>

        <Suspense fallback={<RadarCargando />}>
          <EnVivo foco={foco(enfocado)} />
        </Suspense>

        <p className="text-muted-foreground text-xs text-pretty">
          {t.cobertura}
        </p>
      </section>

      <section aria-labelledby="salgo-desde" className="flex flex-col gap-6">
        <h2 id="salgo-desde" className="text-lg font-semibold">
          {t.salgoDesde}
        </h2>

        {origen ? (
          <OrigenElegido aeropuerto={resumir(origen)} />
        ) : sugerencia ? (
          <Sugerido
            sugerencia={sugerencia}
            ciudad={ubicacion?.ciudad ?? null}
          />
        ) : null}

        <BuscadorDeOrigen
          titulo={
            origen
              ? textosDeVuelos.origen.otroLado
              : sugerencia
                ? textosDeVuelos.origen.noEsTuCiudad
                : textosDeVuelos.origen.buscaTuCiudad
          }
          busquedaInicial={busqueda}
        >
          <ResultadosDelServidor busqueda={busqueda} resultados={resultados} />
        </BuscadorDeOrigen>
      </section>

      <section aria-labelledby="lo-que-viene" className="flex flex-col gap-3">
        <h2 id="lo-que-viene" className="text-lg font-semibold">
          {t.loQueViene}
        </h2>

        <ul className="text-muted-foreground flex flex-col gap-2 text-sm text-pretty">
          {t.proximamente.map((texto) => (
            <li key={texto}>
              {enriquecer(texto, {
                fuerte: (titulo) => (
                  <strong className="text-foreground font-medium">
                    {titulo}
                  </strong>
                ),
              })}
            </li>
          ))}
        </ul>
      </section>

      <div className="text-muted-foreground flex flex-col gap-2 border-t pt-6 text-xs text-pretty">
        <p>{t.privacidad}</p>

        <p>
          {enriquecer(t.fuentes(formatDate(AEROPUERTOS_DESCARGADOS)), {
            ourairports: fuente("https://ourairports.com/data/"),
            adsb: fuente("https://adsb.lol"),
            odbl: fuente("https://opendatacommons.org/licenses/odbl/"),
            openfreemap: fuente("https://openfreemap.org"),
          })}
        </p>
      </div>
    </main>
  );
}

/** El primer pedido a adsb.lol, hecho en el servidor: anda sin JavaScript. */
async function EnVivo({ foco }: { foco: Foco }) {
  const centro = centroDeZona(foco.lat, foco.lon);
  const resultado = await traerZona(centro);

  return (
    <Radar
      inicial={resultado.ok ? resultado.zona : null}
      centroInicial={centro}
      foco={foco}
    />
  );
}

/**
 * Mientras llega adsb.lol: el mismo alto que el radar, para que nada salte.
 *
 * Sin JavaScript, esto es lo único que se ve del radar: lo que trae el
 * servidor llega por streaming, y mostrarlo necesita JavaScript.
 */
async function RadarCargando() {
  const t = (await textos(TEXTOS_DE_VUELOS)).origen;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-muted-foreground text-sm">{t.buscandoAviones}</p>
      <div className="bg-muted text-muted-foreground flex h-[380px] w-full items-center justify-center rounded-xl border p-6 text-center text-sm sm:h-[480px]">
        <noscript>{t.sinJavaScript}</noscript>
      </div>
    </div>
  );
}

async function OrigenElegido({
  aeropuerto,
}: {
  aeropuerto: AeropuertoResumido;
}) {
  const textosDeVuelos = await textos(TEXTOS_DE_VUELOS);
  const t = textosDeVuelos.origen;

  return (
    <div className="flex flex-col gap-3">
      <div className="border-foreground flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4">
        <FichaDeAeropuerto
          aeropuerto={aeropuerto}
          textos={textosDeVuelos.aeropuerto}
        />
        <form action={olvidarOrigenAction}>
          <BotonDeEnviar>{t.olvidar}</BotonDeEnviar>
        </form>
      </div>

      <p className="text-muted-foreground text-sm text-pretty">{t.listo}</p>
    </div>
  );
}

async function Sugerido({
  sugerencia,
  ciudad,
}: {
  sugerencia: Sugerencia;
  /** La ciudad de la conexión, si se sabe. */
  ciudad: string | null;
}) {
  const { sugerido, otros } = sugerencia;
  const textosDeVuelos = await textos(TEXTOS_DE_VUELOS);
  const t = textosDeVuelos.origen;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-pretty">
        {ciudad ? t.cercaDe(ciudad) : t.sugerido}
      </p>

      <OpcionDeAeropuerto
        aeropuerto={resumir(sugerido.aeropuerto, sugerido.distanciaKm)}
        textos={textosDeVuelos.aeropuerto}
        etiqueta={t.salgoDesdeAqui}
        destacada
      />

      {otros.length > 0 ? (
        <>
          <p className="text-muted-foreground text-sm">{t.tambienCerca}</p>

          <ul className="flex flex-col gap-2">
            {otros.map(({ aeropuerto, distanciaKm }) => (
              <li key={aeropuerto.iata}>
                <OpcionDeAeropuerto
                  aeropuerto={resumir(aeropuerto, distanciaKm)}
                  textos={textosDeVuelos.aeropuerto}
                />
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

/** Los resultados de `?buscar=`, para quien busca sin JavaScript. */
async function ResultadosDelServidor({
  busqueda,
  resultados,
}: {
  busqueda: string;
  resultados: AeropuertoResumido[];
}) {
  if (busqueda === "") return null;

  const textosDeVuelos = await textos(TEXTOS_DE_VUELOS);
  if (resultados.length === 0) {
    return (
      <p className="text-muted-foreground text-sm text-pretty">
        {textosDeVuelos.buscador.sinResultados(busqueda)}
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {resultados.map((aeropuerto) => (
        <li key={aeropuerto.iata}>
          <OpcionDeAeropuerto
            aeropuerto={aeropuerto}
            textos={textosDeVuelos.aeropuerto}
          />
        </li>
      ))}
    </ul>
  );
}
