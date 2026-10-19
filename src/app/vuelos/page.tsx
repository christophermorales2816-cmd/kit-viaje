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

export const metadata: Metadata = {
  title: "Vuelos en vivo desde tu ciudad",
  description:
    "Los aviones que vuelan ahora cerca tuyo, en un mapa que se actualiza cada 15 segundos, y el aeropuerto del que salís.",
};

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

  const enfocado =
    origen ??
    sugerencia?.sugerido.aeropuerto ??
    aeropuertoPorIata(FOCO_POR_DEFECTO)!;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          Vuelos desde tu ciudad
        </h1>

        <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
          Lo que vuela ahora cerca tuyo y el aeropuerto del que salís. Pronto,
          también a dónde llegás desde ahí y cuánto cuesta.
        </p>
      </header>

      <section aria-labelledby="en-vivo" className="flex flex-col gap-4">
        <h2 id="en-vivo" className="text-lg font-semibold">
          En vivo
        </h2>

        <Suspense fallback={<RadarCargando />}>
          <EnVivo foco={foco(enfocado)} />
        </Suspense>

        <p className="text-muted-foreground text-xs text-pretty">
          Los aviones salen de adsb.lol, una red de antenas de voluntarios:
          cubre muy bien Europa, Estados Unidos y Japón, y con huecos
          Sudamérica, África y los océanos. Para ver otra zona, mové el mapa. No
          mostramos los aviones que pidieron no aparecer.
        </p>
      </section>

      <section aria-labelledby="salgo-desde" className="flex flex-col gap-6">
        <h2 id="salgo-desde" className="text-lg font-semibold">
          Salgo desde
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
              ? "¿Salís de otro lado?"
              : sugerencia
                ? "¿No es tu ciudad? Buscala"
                : "Buscá tu ciudad o tu aeropuerto"
          }
          busquedaInicial={busqueda}
        >
          <ResultadosDelServidor busqueda={busqueda} resultados={resultados} />
        </BuscadorDeOrigen>
      </section>

      <section aria-labelledby="lo-que-viene" className="flex flex-col gap-3">
        <h2 id="lo-que-viene" className="text-lg font-semibold">
          Lo que viene
        </h2>

        <ul className="text-muted-foreground flex flex-col gap-2 text-sm text-pretty">
          <li>
            <strong className="text-foreground font-medium">
              Tu aeropuerto.
            </strong>{" "}
            Qué está saliendo y llegando en este momento, y a dónde vuela.
          </li>
          <li>
            <strong className="text-foreground font-medium">Rutas.</strong> A
            dónde llegás desde tu ciudad, directo o con escala, también desde
            cada guía.
          </li>
          <li>
            <strong className="text-foreground font-medium">Precios.</strong>{" "}
            Cuánto cuesta cada ruta según la fecha y la aerolínea, con un aviso
            por mail cuando baja.
          </li>
        </ul>
      </section>

      <div className="text-muted-foreground flex flex-col gap-2 border-t pt-6 text-xs text-pretty">
        <p>
          La ubicación sale de tu conexión y es aproximada: la usamos para
          sugerirte un aeropuerto y no la guardamos. El que elegís queda en una
          cookie de este navegador, con su código de tres letras, hasta que
          toques «Olvidar».
        </p>

        <p>
          Aeropuertos:{" "}
          <a
            href="https://ourairports.com/data/"
            className="hover:text-foreground underline underline-offset-2"
          >
            OurAirports
          </a>
          , de dominio público, actualizados el{" "}
          {formatDate(AEROPUERTOS_DESCARGADOS)}. Aviones:{" "}
          <a
            href="https://adsb.lol"
            className="hover:text-foreground underline underline-offset-2"
          >
            adsb.lol
          </a>
          , con licencia{" "}
          <a
            href="https://opendatacommons.org/licenses/odbl/"
            className="hover:text-foreground underline underline-offset-2"
          >
            ODbL
          </a>
          . Mapa:{" "}
          <a
            href="https://openfreemap.org"
            className="hover:text-foreground underline underline-offset-2"
          >
            OpenFreeMap
          </a>
          , con datos de OpenStreetMap.
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
function RadarCargando() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-muted-foreground text-sm">
        Buscando los aviones de la zona…
      </p>
      <div className="bg-muted text-muted-foreground flex h-[380px] w-full items-center justify-center rounded-xl border p-6 text-center text-sm sm:h-[480px]">
        <noscript>
          El radar en vivo necesita JavaScript. Elegir el aeropuerto del que
          salís, más abajo, anda igual.
        </noscript>
      </div>
    </div>
  );
}

function OrigenElegido({ aeropuerto }: { aeropuerto: AeropuertoResumido }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="border-foreground flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4">
        <FichaDeAeropuerto aeropuerto={aeropuerto} />

        <form action={olvidarOrigenAction}>
          <BotonDeEnviar>Olvidar</BotonDeEnviar>
        </form>
      </div>

      <p className="text-muted-foreground text-sm text-pretty">
        Listo: lo que venga en esta sección va a salir desde acá.
      </p>
    </div>
  );
}

function Sugerido({
  sugerencia,
  ciudad,
}: {
  sugerencia: Sugerencia;
  /** La ciudad de la conexión, si se sabe. */
  ciudad: string | null;
}) {
  const { sugerido, otros } = sugerencia;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-pretty">
        {ciudad
          ? `Por tu conexión, parece que estás cerca de ${ciudad}.`
          : "Por tu conexión, este parece ser el aeropuerto que te sirve."}
      </p>

      <OpcionDeAeropuerto
        aeropuerto={resumir(sugerido.aeropuerto, sugerido.distanciaKm)}
        etiqueta="Salgo desde acá"
        destacada
      />

      {otros.length > 0 ? (
        <>
          <p className="text-muted-foreground text-sm">También cerca:</p>

          <ul className="flex flex-col gap-2">
            {otros.map(({ aeropuerto, distanciaKm }) => (
              <li key={aeropuerto.iata}>
                <OpcionDeAeropuerto
                  aeropuerto={resumir(aeropuerto, distanciaKm)}
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
function ResultadosDelServidor({
  busqueda,
  resultados,
}: {
  busqueda: string;
  resultados: AeropuertoResumido[];
}) {
  if (busqueda === "") return null;

  if (resultados.length === 0) {
    return (
      <p className="text-muted-foreground text-sm text-pretty">
        Ningún aeropuerto coincide con «{busqueda}». Probá con el código de tres
        letras o con el nombre en otro idioma.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {resultados.map((aeropuerto) => (
        <li key={aeropuerto.iata}>
          <OpcionDeAeropuerto aeropuerto={aeropuerto} />
        </li>
      ))}
    </ul>
  );
}
