import { defineConfig } from "vitest/config";

export default defineConfig({
  // Resolución nativa de los paths de tsconfig (alias "@/*").
  //
  // `server-only` se reemplaza por un módulo vacío: tira apenas se importa
  // fuera de un Server Component, que es lo correcto en producción —hace
  // fallar el build si la service role key entra en un bundle de cliente— pero
  // en Vitest no hay bundle de cliente y sin esto no se puede testear ni una
  // línea de create.ts, read.ts o mutate.ts. La guarda real la sigue aplicando
  // el bundler de Next en cada build.
  resolve: {
    tsconfigPaths: true,
    alias: {
      "server-only": new URL("./src/test/server-only.ts", import.meta.url)
        .pathname,
    },
  },
  test: {
    // El foco de testing sigue siendo la lógica pura de los motores de packing
    // y presupuesto (spec, sección 7). Los pocos tests de componentes que hay
    // renderizan a string con renderToStaticMarkup y no tocan el DOM, así que
    // tampoco hace falta jsdom: son Server Components sin estado ni efectos.
    environment: "node",
    // Los tests corren en la zona del usuario del MVP, no en UTC. Así, si
    // alguien vuelve a meter new Date(iso) en la aritmética de fechas, el
    // corrimiento de un día aparece en CI en vez de en producción.
    env: { TZ: "America/Argentina/Buenos_Aires" },
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
