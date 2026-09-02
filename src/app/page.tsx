import Link from "next/link";

import { GlobeHero } from "@/components/landing/globe-hero";
import { Button } from "@/components/ui/button";
import { CORREDOR_INICIAL, getGuide } from "@/content/guias";

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

const guia = getGuide(CORREDOR_INICIAL);

const ESTADISTICAS = [
  {
    valor: "4",
    etiqueta: "cotizaciones en vivo",
    nota: "Oficial, blue, MEP y CCL",
  },
  { valor: "0", etiqueta: "registros", nota: "Sin cuenta y sin mail" },
  {
    valor: "1",
    etiqueta: "corredor por ahora",
    nota: "Argentina; el motor suma más",
  },
  { valor: "100%", etiqueta: "gratis", nota: "Sin anuncios ni venta de datos" },
];

export default function Home() {
  // El corredor inicial sale del índice de guías, así que si alguien renombra
  // el slug esto falla al construir y no en la cara del visitante.
  if (!guia) {
    throw new Error(
      `El corredor inicial "${CORREDOR_INICIAL}" no tiene guía en src/content/guias.`,
    );
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

            <div className="flex flex-col gap-3 sm:flex-row">
              {/*
                Sobre la banda oscura el primario por defecto es casi
                invisible: `bg-primary` es oscuro en el tema claro. Se invierte
                a blanco sobre slate en vez de usar el naranja del marcador —
                ese naranja significa "acá hay un destino" en el globo, y
                gastarlo en un botón le saca ese significado.
              */}
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-950 hover:bg-slate-200"
              >
                <Link href={`/guia/${guia.slug}`}>Explorar {guia.country}</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-slate-100 hover:bg-white/10 hover:text-slate-100"
              >
                <Link href={`/guia/${guia.slug}/planificar`}>
                  Abrir el planificador
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex w-full max-w-[460px] flex-col gap-2">
            <GlobeHero href={`/guia/${guia.slug}`} label={guia.country} />

            {/*
              Dicho de frente (spec, 8.1): el globo insinúa "elegí cualquier
              país" y el MVP tiene uno. Esconderlo sería peor que decirlo.
            */}
            <p className="text-center text-sm text-balance text-slate-400">
              Un corredor por ahora: {guia.country}. El motor está hecho para
              sumar más.
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
    </main>
  );
}
