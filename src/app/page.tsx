import Link from "next/link";

import { GlobeHero } from "@/components/landing/globe-hero";
import { Button } from "@/components/ui/button";
import {
  allGuides,
  getGuide,
  type DestinationGuide,
  type GuideSubregion,
} from "@/content/guias";
import { allQuoteCorridors } from "@/lib/quotes";

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
const DESTINOS = GUIAS.map((guia) => {
  const base = guia.places.find((place) => place.featured) ?? guia.places[0];

  return {
    href: `/guia/${guia.slug}`,
    label: guia.country,
    coords: base.coords,
  };
});

/**
 * Las zonas en el orden en que se leen, de sur a norte.
 *
 * El tipo `GuideSubregion` garantiza que cada guía cae en una de estas tres; el
 * orden es una decisión editorial y por eso vive acá y no en el contenido.
 */
const ZONAS: GuideSubregion[] = [
  "Sudamérica",
  "México y Centroamérica",
  "Caribe",
];

const POR_ZONA = ZONAS.map((zona) => ({
  zona,
  guias: GUIAS.filter((guia) => guia.subregion === zona).sort((a, b) =>
    a.country.localeCompare(b.country, "es"),
  ),
})).filter(({ guias }) => guias.length > 0);

/**
 * Las cotizaciones que de verdad se traen en vivo, por país.
 *
 * Decía "5 — cuatro en Argentina, una en Brasil" escrito a mano. Era cierto, y
 * habría dejado de serlo el día que se conectara la fuente de cualquier otro
 * país sin que nadie se acordara de esta línea. Ahora se cuenta del registro de
 * corredores: solo los que tienen `source`.
 */
const EN_VIVO = allQuoteCorridors()
  .filter((corredor) => corredor.source !== null)
  .map((corredor) => ({
    pais: getGuide(corredor.corridor)?.country ?? corredor.corridor,
    cuantas: corredor.quoteIds.length,
  }));

/**
 * El número de países y su nota salen del contenido.
 *
 * "2 países" estuvo fijo mientras había tres. Es el mismo error que el 404 que
 * decía que el único corredor era Argentina: un dato que hay que acordarse de
 * actualizar a mano en cada país es un dato que va a quedar viejo.
 */
const ESTADISTICAS = [
  {
    valor: String(GUIAS.length),
    etiqueta: GUIAS.length === 1 ? "país" : "países",
    nota: POR_ZONA.map(({ zona, guias }) => `${guias.length} en ${zona}`).join(
      ", ",
    ),
  },
  { valor: "0", etiqueta: "registros", nota: "Sin cuenta y sin mail" },
  {
    valor: String(EN_VIVO.reduce((total, { cuantas }) => total + cuantas, 0)),
    etiqueta: "cotizaciones en vivo",
    nota: EN_VIVO.map(({ pais, cuantas }) => `${cuantas} en ${pais}`).join(
      ", ",
    ),
  },
  { valor: "100%", etiqueta: "gratis", nota: "Sin anuncios ni venta de datos" },
];

/** El primer número del hero de cada guía: lo que define a ese país. */
function rasgo(guia: DestinationGuide): string {
  const [primero] = guia.highlights;
  return `${primero.value} ${primero.label}`;
}

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
      <section className="flex flex-col gap-14 bg-slate-950 px-6 py-14 text-slate-100 md:gap-20 md:py-20">
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
              Guías de país con lo que hay que saber antes de reservar, y dos
              motores que arman tu equipaje según el clima de tus fechas y tu
              presupuesto en la cotización que elijas. Te llevás la planilla en
              CSV.
            </p>

            {/*
              Un botón por país servía con dos. Con diecinueve el hero se
              convertía en una pared de botones, así que el hero invita a
              elegir y la elección se hace en la lista de abajo, agrupada.

              Sobre la banda oscura el primario por defecto es casi
              invisible: `bg-primary` es oscuro en el tema claro. Se invierte a
              blanco sobre slate en vez de usar el naranja del marcador — ese
              naranja significa "acá hay un destino" en el globo.
            */}
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-950 hover:bg-slate-200"
            >
              <Link href="#paises">Elegir entre {GUIAS.length} países</Link>
            </Button>
          </div>

          <div className="flex w-full max-w-[460px] flex-col gap-2">
            <GlobeHero destinations={DESTINOS} />

            {/*
              Dicho de frente (spec, 8.1): el globo insinúa "elegí cualquier
              país" y todavía hay dos. Esconderlo sería peor que decirlo.
            */}
            <p className="text-center text-sm text-balance text-slate-400">
              Tocá un punto del globo, o elegí el país en la lista de abajo.
            </p>
          </div>
        </div>
        {/*
          Los cuatro números del reference son de cobertura ("146 países"). Los
          nuestros no pueden serlo sin mentir, así que dicen lo que este
          producto sí tiene: tasas en vivo, cero fricción de entrada, un
          corredor honesto y gratis. El tercero es el que incomoda, y por eso
          está.
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
            Cada país tiene su guía, su clima mes a mes por ciudad y su
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
                      {rasgo(guia)}
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
