import { describe, expect, it } from "vitest";

/**
 * El sello de build se lee de una env var que Vercel define en el build, así
 * que el módulo se importa de nuevo en cada caso para que tome el valor.
 */
async function cargar(sha: string | undefined) {
  const previo = process.env.VERCEL_GIT_COMMIT_SHA;

  if (sha === undefined) delete process.env.VERCEL_GIT_COMMIT_SHA;
  else process.env.VERCEL_GIT_COMMIT_SHA = sha;

  // Sin esto, el segundo import devuelve el módulo ya evaluado con el valor
  // viejo: las constantes se calculan una sola vez.
  const mod = await import(`@/lib/version?${sha ?? "sin-sha"}`);

  if (previo === undefined) delete process.env.VERCEL_GIT_COMMIT_SHA;
  else process.env.VERCEL_GIT_COMMIT_SHA = previo;

  return mod as { BUILD_ID: string; BUILD_URL: string | null };
}

describe("sello de build", () => {
  it("abrevia el SHA a siete caracteres, como git", async () => {
    const { BUILD_ID } = await cargar(
      "5893383b6f430c3c56a74544c17763ff36b36866",
    );

    expect(BUILD_ID).toBe("5893383");
  });

  it("apunta al commit exacto en GitHub", async () => {
    const sha = "5893383b6f430c3c56a74544c17763ff36b36866";
    const { BUILD_URL } = await cargar(sha);

    // El SHA completo y no el abreviado: el link tiene que resolver siempre.
    expect(BUILD_URL).toBe(
      `https://github.com/christophermorales2816-cmd/kit-viaje/commit/${sha}`,
    );
  });

  it("dice 'dev' fuera de Vercel, que también es informativo", async () => {
    const { BUILD_ID, BUILD_URL } = await cargar(undefined);

    expect(BUILD_ID).toBe("dev");
    // Sin commit conocido no hay link que ofrecer, y un link roto sería peor.
    expect(BUILD_URL).toBeNull();
  });
});
