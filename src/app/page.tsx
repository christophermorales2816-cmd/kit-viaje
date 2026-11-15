import Image from "next/image";
import Link from "next/link";

import fondo from "@/assets/portada/mar.jpg";
import { ExploradorDelGlobo } from "@/components/landing/explorador-del-globo";
import { Button } from "@/components/ui/button";
import { allGuides, type DestinationGuide } from "@/content/guias";
import {
  continenteDeLaZona,
  guiasPorZona,
  rasgoDeLaGuia,
} from "@/content/guias/continentes";

/**
 * Página 1 — bienvenida (spec, sección 8.1).
 *
 * No habla del país. Esa es toda la idea: primero el mundo y el gesto de
 * elegir, después el destino. Quien llega acá todavía no pidió información de
 * Argentina; pedirle que lea sobre un país antes de haberlo elegido invierte
 * el orden natural.
 *
 * El fondo es una foto del mar (spec, 19.5), que la provee el dueño del sitio
 * y está en el repo sin metadatos. Entró detrás de la banda oscura sin rehacer
 * el layout, como estaba previsto (8.6), con un velo para que el texto blanco
 * se lea sobre el cielo, que es claro.
 */

const GUIAS = allGuides();

/**
 * El marcador de cada país sale de su destino destacado, que es la ciudad para
 * la que están calibrados los cálculos. No hace falta un campo nuevo: el test
 * de contenido ya garantiza que hay exactamente uno por guía.
 */
function base(guia: DestinationGuide) {
  return guia.places.find((place) => place.featured) ?? guia.places[0];
}

const DESTINOS = GUIAS.map((guia) => ({
  href: `/guia/${guia.slug}`,
  label: guia.country,
  coords: base(guia).coords,
  zona: guia.subregion,
  detalle: rasgoDeLaGuia(guia),
}));

/**
 * Adónde mira el globo al cargar, antes de empezar a girar (spec, 14.9).
 *
 * La longitud es el promedio de los países de América y Europa: cae en el
 * Atlántico, y desde ahí se ven los dos continentes enteros. Es también lo que
 * ve quien entra sin JavaScript, para quien el globo no gira.
 *
 * La latitud no es un promedio sino el punto medio entre el marcador más al
 * norte y el más al sur. Queda fija mientras gira, y así los dos extremos
 * —Islandia y Nueva Zelanda, hoy— pasan a la misma distancia del centro,
 * unos 50°.
 * El promedio de todos caía en 29° norte, y el Río de la Plata giraba a 64°,
 * pegado al borde del disco.
 */
const INICIO: [number, number] = (() => {
  const lats = DESTINOS.map((destino) => destino.coords[0]);
  const atlanticos = GUIAS.filter((guia) =>
    ["america", "europa"].includes(continenteDeLaZona(guia.subregion).id),
  ).map((guia) => base(guia).coords[1]);

  return [
    (Math.max(...lats) + Math.min(...lats)) / 2,
    atlanticos.reduce((a, lon) => a + lon, 0) / atlanticos.length,
  ];
})();

const POR_ZONA = guiasPorZona(GUIAS);

export default function Home() {
  // Sin guías no hay adónde ir, y es mejor que falle al construir que en la
  // cara del visitante.
  if (GUIAS.length === 0) {
    throw new Error("No hay ninguna guía en src/content/guias.");
  }

  return (
    <main className="flex flex-1 flex-col">
      {/*
        `-mt-16` sube el hero por debajo de la barra, que en la portada arranca
        transparente (spec, 19.1); el padding de arriba le devuelve ese lugar al
        contenido.

        `overflow-x-clip`: nada del globo puede correr la página de costado en
        el teléfono.

        Los números que cerraban esta banda se mudaron a /nosotros (19.4):
        debajo del hero ahora van las noticias.
      */}
      <section className="relative isolate -mt-16 overflow-x-clip text-white">
        <Image
          src={fondo}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover object-[center_42%]"
        />
        {/*
          El velo: en el teléfono, parejo, porque el texto va centrado sobre el
          cielo; en la pantalla grande, más oscuro del lado del texto y más
          claro del lado del globo, para que se vea el mar.
        */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-slate-950/60 md:bg-transparent md:bg-linear-to-r md:from-slate-950/85 md:via-slate-950/55 md:to-slate-950/25"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-slate-950/60 to-transparent"
        />

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 pt-28 pb-14 md:flex-row md:items-center md:justify-between md:gap-12 md:pt-32 md:pb-20">
          <div className="flex max-w-lg flex-col items-center gap-6 text-center md:items-start md:text-left">
            <h1 className="text-4xl font-semibold tracking-tight text-balance drop-shadow-sm md:text-6xl">
              El mundo en tus manos
            </h1>

            <p className="text-lg text-pretty text-white/90">
              Elegí un destino en el globo y te decimos qué llevar y cuánto vas
              a gastar.
            </p>

            <p className="text-sm text-pretty text-white/75">
              Guías de cada destino con lo que hay que saber antes de reservar,
              y dos motores que arman tu equipaje según el clima de tus fechas y
              tu presupuesto en la cotización que elijas. Te llevás la planilla
              en CSV.
            </p>

            {/*
              Sobre la foto, el primario por defecto se perdería: `bg-primary`
              es oscuro en el tema claro. Se invierte a blanco en vez de usar
              el naranja del marcador, que en el globo significa "acá hay un
              destino".
            */}
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-950 shadow-lg hover:bg-slate-200"
            >
              <Link href="#paises">Elegir entre {GUIAS.length} destinos</Link>
            </Button>
          </div>

          <ExploradorDelGlobo destinos={DESTINOS} inicio={INICIO} />
        </div>
      </section>

      <section
        id="paises"
        aria-labelledby="paises-titulo"
        className="mx-auto flex w-full max-w-5xl scroll-mt-8 flex-col gap-10 px-6 py-14 md:py-20"
      >
        <header className="flex flex-col gap-2">
          <h2
            id="paises-titulo"
            className="text-3xl font-semibold tracking-tight text-balance"
          >
            Elegí tu destino
          </h2>

          <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
            Cada destino tiene su guía, su clima mes a mes por ciudad y su
            presupuesto en moneda local. Al lado del nombre, lo que más cambia
            cómo se prepara ese viaje.
          </p>
        </header>

        {POR_ZONA.map(({ zona, guias }) => (
          <div key={zona} className="flex flex-col gap-4">
            <h3 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              {zona}
            </h3>

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {guias.map((guia) => (
                <li key={guia.slug}>
                  <Link
                    href={`/guia/${guia.slug}`}
                    className="hover:bg-muted flex h-full flex-col gap-1 rounded-xl border p-4 transition-colors"
                  >
                    <span className="font-medium">{guia.country}</span>
                    <span className="text-muted-foreground text-sm text-pretty">
                      {rasgoDeLaGuia(guia)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
