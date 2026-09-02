import {
  fetchQuotes,
  latestQuoteUpdate,
  resolveQuoteSpreads,
} from "@/lib/quotes";

/**
 * Cotizaciones en vivo (spec, sección 8.7).
 *
 * El único dato verdaderamente en tiempo real del producto, y el que sostiene
 * la promesa de la página. Casi todo estaba hecho: `fetchQuotes` ya trae las
 * cuatro con revalidación de 10 minutos y ya devuelve `{ ok: false, reason }`
 * cuando dolarapi no responde. Acá va la presentación.
 *
 * Server Component asíncrono: la llamada no viaja al cliente y el cacheo de
 * `fetch` se comparte entre visitas. Va dentro de un <Suspense> en la página,
 * así el globo y el resto se pintan sin esperar a una API de terceros.
 */

const formatoPesos = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

// signDisplay "exceptZero" no imprime signo para el cero, y eso incluye al
// cero negativo: una brecha de -0,065% (el MEP contra la oficial) sale "0%",
// no "-0%". Verificado en Chromium, no asumido.
const formatoBrecha = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 0,
  signDisplay: "exceptZero",
});

// Hora de Buenos Aires y no la del servidor: el server component se renderiza
// en UTC y la hora del visitante no existe todavía. Fijar el huso del destino
// da un valor estable, sin desajuste entre servidor e hidratación, y además es
// la hora que le importa a quien mira una cotización argentina.
const formatoHora = new Intl.DateTimeFormat("es-AR", {
  hour: "2-digit",
  minute: "2-digit",
  day: "numeric",
  month: "short",
  timeZone: "America/Argentina/Buenos_Aires",
});

function Marco({ children }: { children: React.ReactNode }) {
  return (
    <section
      // Destino del marcador del globo (spec, 8.1): el click cae acá, en el
      // dato en vivo, no en el texto editorial. Va en el marco y no en la
      // rama cargada para que el ancla exista también mientras carga.
      id="guia"
      aria-labelledby="cotizaciones-titulo"
      className="flex w-full max-w-5xl scroll-mt-8 flex-col gap-6"
    >
      <header className="flex flex-col gap-2">
        <h2
          id="cotizaciones-titulo"
          className="text-3xl font-semibold tracking-tight text-balance"
        >
          Las cuatro cotizaciones, ahora
        </h2>

        <p className="text-muted-foreground text-sm text-pretty">
          El mismo gasto cambia de tamaño según cuál mires. Esto es lo único de
          esta página que está en vivo.
        </p>
      </header>

      {children}
    </section>
  );
}

export async function LiveQuotes() {
  const resultado = await fetchQuotes();

  if (!resultado.ok) {
    // Se dice que falló, no se muestra un cero ni se rompe la página. Es la
    // misma decisión de la sección 5, aplicada acá.
    return (
      <Marco>
        <p className="text-muted-foreground rounded-xl border border-dashed p-6 text-sm">
          No pudimos traer las cotizaciones ahora. {resultado.reason} El resto
          de la guía sigue disponible más abajo.
        </p>
      </Marco>
    );
  }

  const spreads = resolveQuoteSpreads(resultado.quotes);
  const ultima = latestQuoteUpdate(resultado.quotes);

  return (
    <Marco>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border md:grid-cols-4">
        {spreads.map(({ quote, premiumPercent }) => (
          <div key={quote.id} className="flex flex-col gap-1 bg-background p-5">
            <dt className="text-muted-foreground text-sm font-medium">
              {quote.label}
            </dt>
            <dd className="flex flex-col gap-1">
              <span className="text-2xl font-semibold tracking-tight tabular-nums">
                {formatoPesos.format(quote.sell)}
              </span>
              <span className="text-muted-foreground text-xs">
                {premiumPercent === null
                  ? "referencia"
                  : `${formatoBrecha.format(premiumPercent)}% vs. oficial`}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      {ultima === null ? null : (
        <p className="text-muted-foreground text-xs">
          Valor de venta.{" "}
          <time dateTime={ultima}>
            Actualizado {formatoHora.format(new Date(ultima))} (hora de Buenos
            Aires)
          </time>
          .
        </p>
      )}
    </Marco>
  );
}

/** Fallback del <Suspense>: mismo alto, para que el layout no salte. */
export function LiveQuotesSkeleton() {
  return (
    <Marco>
      <div
        aria-hidden
        className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border md:grid-cols-4"
      >
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-2 bg-background p-5">
            <div className="bg-muted h-4 w-16 animate-pulse rounded" />
            <div className="bg-muted h-8 w-24 animate-pulse rounded" />
            <div className="bg-muted h-3 w-20 animate-pulse rounded" />
          </div>
        ))}
      </div>

      <p className="text-muted-foreground text-xs">Consultando cotizaciones…</p>
    </Marco>
  );
}
