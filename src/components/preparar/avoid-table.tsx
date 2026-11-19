import type { GuideAvoidRow } from "@/content/guias/types";
import { TEXTOS_DE_LA_GUIA } from "@/i18n/guia";
import { textos } from "@/i18n/servidor";

/**
 * "Estos no los lleves" (spec, sección 9.6).
 *
 * Es una tabla de verdad, con <th scope>, y no una grilla de divs: son tres
 * columnas que se leen de a filas, y un lector de pantalla necesita saber que
 * "Pesan y tardan en secar" es el porqué de "Vaqueros pesados".
 *
 * En móvil scrollea horizontal dentro de su contenedor. Apilar cada fila en
 * tres bloques rompería justamente la comparación que hace útil la tabla.
 */
export async function AvoidTable({
  rows,
  country,
}: {
  rows: GuideAvoidRow[];
  country: string;
}) {
  const t = (await textos(TEXTOS_DE_LA_GUIA)).evitar;

  return (
    <section
      id="no-lleves"
      aria-labelledby="no-lleves-titulo"
      className="flex w-full max-w-5xl scroll-mt-8 flex-col gap-4"
    >
      <h2
        id="no-lleves-titulo"
        className="text-2xl font-semibold tracking-tight text-balance"
      >
        {t.titulo(country)}
      </h2>

      <p className="text-muted-foreground text-pretty">{t.bajada}</p>

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[42rem] border-collapse text-sm">
          <thead>
            <tr className="bg-muted/60 text-left">
              <th scope="col" className="p-4 font-medium">
                {t.dejaloEnCasa}
              </th>
              <th scope="col" className="p-4 font-medium">
                {t.porQue}
              </th>
              <th scope="col" className="p-4 font-medium">
                {t.enSuLugar}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((fila) => (
              <tr key={fila.leave} className="border-t align-top">
                <th scope="row" className="p-4 text-left font-medium">
                  {fila.leave}
                </th>
                <td className="text-muted-foreground p-4 text-pretty">
                  {fila.why}
                </td>
                <td className="text-muted-foreground p-4 text-pretty">
                  {fila.instead}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
