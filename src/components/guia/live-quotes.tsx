import {
  fetchQuotes,
  getQuoteCorridor,
  latestQuoteUpdate,
  resolveQuoteSpreads,
} from "@/lib/quotes";
import { formatMoney } from "@/lib/format";

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

// El valor se formatea con la moneda de la propia cotización, no con un
// formateador fijo en pesos argentinos.
//
// Estaba clavado en ARS y sin decimales, lo que con Argentina se veía bien
// —"$ 1.220"— y con Brasil destruía el dato: 5,1114 salía como "$ 5", con el
// símbolo equivocado y sin la parte que importa. En una moneda cuyo valor
// entero es 5, redondear al entero no es redondear, es borrar.
//
// `formatMoney` ya resolvía esto y ya estaba testeada; el formateador local era
// una copia peor.

// signDisplay "exceptZero" no imprime signo para el cero, y eso incluye al
// cero negativo: una brecha de -0,065% (el MEP contra la oficial) sale "0%",
// no "-0%". Verificado en Chromium, no asumido.
const formatoBrecha = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 0,
  signDisplay: "exceptZero",
});

// La hora del destino y no la del servidor: el server component se renderiza
// en UTC y la hora del visitante no existe todavía. Fijar el huso del destino
// da un valor estable, sin desajuste entre servidor e hidratación, y además es
// la hora que le importa a quien mira esa cotización.
//
// El huso sale del corredor y no de una constante. Estaba fijo en Buenos Aires
// y la guía de Brasil decía "hora de Buenos Aires": la hora coincide, porque
// los dos husos son UTC−3 y ninguno usa horario de verano, pero la etiqueta
// nombraba una ciudad que no era la del destino.
function formatoHora(timeZone: string) {
  return new Intl.DateTimeFormat("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "short",
    timeZone,
  });
}

/**
 * Título y bajada del bloque, según cuántas cotizaciones tenga el corredor.
 *
 * "Las cuatro cotizaciones" estaba escrito a mano de cuando había un solo país.
 * En la guía de Brasil, que tiene una sola, ese título era literalmente falso —y
 * encima contradecía el número del hero, que dice "1 cotización, no cuatro" dos
 * pantallas más arriba.
 *
 * El plural también cambia la bajada: "el mismo gasto cambia de tamaño según
 * cuál mires" no significa nada cuando no hay entre cuáles elegir. Ahí lo que
 * importa es que el número está en vivo.
 */
/**
 * Cuántas columnas usa la grilla.
 *
 * `md:grid-cols-4` estaba fijo, así que la única cotización de Brasil salía
 * ocupando un cuarto del ancho con tres huecos al lado.
 */
function columnas(cuantas: number): string {
  if (cuantas <= 1) return "grid-cols-1";
  if (cuantas === 2) return "grid-cols-2";
  if (cuantas === 3) return "grid-cols-1 sm:grid-cols-3";
  return "grid-cols-2 md:grid-cols-4";
}

function encabezado(cuantas: number | null): {
  titulo: string;
  bajada: string;
} {
  if (cuantas === 1) {
    return {
      titulo: "La cotización, ahora",
      bajada:
        "Acá hay un solo tipo de cambio, así que no hay que elegir. Esto es lo único de esta página que está en vivo.",
    };
  }

  return {
    titulo:
      cuantas === null
        ? "Las cotizaciones, ahora"
        : `Las ${cuantas} cotizaciones, ahora`,
    bajada:
      "El mismo gasto cambia de tamaño según cuál mires. Esto es lo único de esta página que está en vivo.",
  };
}

function Marco({
  children,
  cuantas,
}: {
  children: React.ReactNode;
  /** Cotizaciones que se van a mostrar. `null` mientras no se sabe. */
  cuantas: number | null;
}) {
  const { titulo, bajada } = encabezado(cuantas);

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
          {titulo}
        </h2>

        <p className="text-muted-foreground text-sm text-pretty">{bajada}</p>
      </header>

      {children}
    </section>
  );
}

export async function LiveQuotes({ corridor }: { corridor: string }) {
  const resultado = await fetchQuotes(corridor);

  if (!resultado.ok) {
    // Se dice que falló, no se muestra un cero ni se rompe la página. Es la
    // misma decisión de la sección 5, aplicada acá.
    //
    // El título sale igual del corredor: que la fuente esté caída no cambia
    // cuántas cotizaciones tiene el país.
    return (
      <Marco cuantas={getQuoteCorridor(corridor)?.quoteIds.length ?? null}>
        <p className="text-muted-foreground rounded-xl border border-dashed p-6 text-sm">
          No pudimos traer las cotizaciones ahora. {resultado.reason} El resto
          de la guía sigue disponible más abajo.
        </p>
      </Marco>
    );
  }

  const spreads = resolveQuoteSpreads(resultado.quotes, resultado.corridor);
  const ultima = latestQuoteUpdate(resultado.quotes);

  // Contra qué se compara la brecha lo dice el corredor. "vs. oficial" estaba
  // escrito a mano y solo es cierto en Argentina.
  const referenciaId = resultado.corridor.referenceQuoteId;
  const referencia =
    referenciaId === null
      ? ""
      : (resultado.corridor.labels[referenciaId] ?? referenciaId).toLowerCase();

  return (
    <Marco cuantas={resultado.quotes.length}>
      <dl
        className={`grid gap-px overflow-hidden rounded-xl bg-border ${columnas(resultado.quotes.length)}`}
      >
        {spreads.map(({ quote, premiumPercent }) => (
          <div key={quote.id} className="flex flex-col gap-1 bg-background p-5">
            <dt className="text-muted-foreground text-sm font-medium">
              {quote.label}
            </dt>
            <dd className="flex flex-col gap-1">
              <span className="text-2xl font-semibold tracking-tight tabular-nums">
                {formatMoney(quote.sell, quote.baseCurrency)}
              </span>
              <span className="text-muted-foreground text-xs">
                {premiumPercent === null
                  ? "referencia"
                  : `${formatoBrecha.format(premiumPercent)}% vs. ${referencia}`}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      {ultima === null ? null : (
        <p className="text-muted-foreground text-xs">
          Valor de venta.{" "}
          <time dateTime={ultima}>
            Actualizado{" "}
            {formatoHora(resultado.corridor.clock.timeZone).format(
              new Date(ultima),
            )}{" "}
            ({resultado.corridor.clock.label})
          </time>
          .
        </p>
      )}
    </Marco>
  );
}

/** Fallback del <Suspense>: mismo alto, para que el layout no salte. */
export function LiveQuotesSkeleton({ corridor }: { corridor?: string }) {
  const cuantas =
    corridor === undefined
      ? null
      : (getQuoteCorridor(corridor)?.quoteIds.length ?? null);

  return (
    <Marco cuantas={cuantas}>
      <div
        aria-hidden
        className={`grid gap-px overflow-hidden rounded-xl bg-border ${columnas(cuantas ?? 4)}`}
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
