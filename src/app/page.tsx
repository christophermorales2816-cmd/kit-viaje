import Link from "next/link";

import { GlobeHero } from "@/components/landing/globe-hero";
import { Button } from "@/components/ui/button";
import { allGuides, type DestinationGuide } from "@/content/guias";
import {
  continenteDeLaZona,
  guiasPorZona,
  rasgoDeLaGuia,
} from "@/content/guias/continentes";
import { estadisticasDelSitio } from "@/lib/sitio/estadisticas";

/**
 * Página 1 — bienvenida (spec, sección 8.1).
 *
 * No habla del país. Esa es toda la idea: primero el mundo y el gesto de
 * elegir, después el destino. Quien llega acá todavía no pidió información de
 * Argentina; pedirle que lea sobre un país antes de haberlo elegido invierte
 * el orden natural.
 *
 * Sin foto de fondo todavía (spec, 8.6): la banda oscura no es un placeholder
 * a la espera de una imagen, es el mismo fondo para el que cobe ilumina el
 * globo. Cuando haya foto con licencia, entra detrás sin rehacer el layout.
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

const ESTADISTICAS = estadisticasDelSitio();

export default function Home() {
  // Sin guías no hay adónde ir, y es mejor que falle al construir que en la
  // cara del visitante.
  if (GUIAS.length === 0) {
    throw new Error("No hay ninguna guía en src/content/guias.");
  }

  return (
    <main className="flex flex-1 flex-col">
      {/*
        Un solo rectángulo oscuro a sangre, del borde superior hasta debajo de
        los números: el hero y las estadísticas son la misma zona, no dos
        bandas apiladas con una costura en el medio.
      */}
      {/*
        `-mt-16` la sube por debajo de la barra, que en la portada arranca
        transparente (spec, 19.1); el padding de arriba le devuelve ese lugar
        al contenido.

        `overflow-x-clip`: los nombres ocultos de los puntos del borde del
        globo asomaban fuera de la pantalla y en el teléfono la página se
        corría de costado, y con ella el menú.
      */}
      <section className="-mt-16 flex flex-col overflow-x-clip gap-14 bg-slate-950 px-6 pt-30 pb-14 text-slate-100 md:gap-20 md:pt-36 md:pb-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
          <div className="flex max-w-lg flex-col items-center gap-6 text-center md:items-start md:text-left">
            <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              El mundo en tus manos
            </h1>

            <p className="text-lg text-pretty text-slate-300">
              Elegí un destino en el globo y te decimos qué llevar y cuánto vas
              a gastar.
            </p>

            <p className="text-sm text-pretty text-slate-400">
              Guías de cada destino con lo que hay que saber antes de reservar,
              y dos motores que arman tu equipaje según el clima de tus fechas y
              tu presupuesto en la cotización que elijas. Te llevás la planilla
              en CSV.
            </p>

            {/*
              El radar de vuelos y "Qué comer" estaban acá como dos enlaces;
              ahora están en el menú "Herramientas" de la barra de arriba
              (spec, 19.1).

              Un botón por país servía con dos. Con diecinueve el hero se
              convertía en una pared de botones, así que el hero invita a
              elegir y la elección se hace en la lista de abajo, agrupada.

              Sobre la banda oscura el primario por defecto es casi
              invisible: `bg-primary` es oscuro en el tema claro. Se invierte a
              blanco sobre slate en vez de usar el naranja del marcador — ese
              naranja significa "acá hay un destino" en el globo.
            */}
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-950 hover:bg-slate-200"
              >
                <Link href="#paises">Elegir entre {GUIAS.length} destinos</Link>
              </Button>
            </div>
          </div>

          <div className="flex w-full max-w-[460px] flex-col gap-2">
            <GlobeHero destinations={DESTINOS} inicio={INICIO} />

            {/*
              Dicho de frente (spec, 8.1): el globo muestra un lado a la vez,
              así que la lista es la forma segura de llegar a cualquier país.
              Y que se puede arrastrar no se adivina mirándolo.
            */}
            <p className="text-center text-sm text-balance text-slate-400">
              Arrastrá el globo para girarlo y tocá un punto, o elegí el destino
              en la lista de abajo.
            </p>
          </div>
        </div>
        {/*
          Los cuatro números del reference son de cobertura ("146 países"). Los
          nuestros empiezan por la cobertura, contada del contenido y no escrita
          a mano, y siguen con lo que el producto sí tiene: cero fricción de
          entrada, las cotizaciones que de verdad se traen en vivo y gratis. El
          tercero es el que incomoda —son pocas—, y por eso está.
        */}
        <dl
          aria-label="En números"
          className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-8 border-t border-white/10 pt-12 text-center md:grid-cols-4"
        >
          {ESTADISTICAS.map((stat) => (
            <div key={stat.etiqueta} className="flex flex-col gap-1">
              <dt className="text-3xl font-semibold tracking-tight tabular-nums">
                {stat.valor}
              </dt>
              <dd className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{stat.etiqueta}</span>
                <span className="text-xs text-pretty text-slate-400">
                  {stat.nota}
                </span>
              </dd>
            </div>
          ))}
        </dl>
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
