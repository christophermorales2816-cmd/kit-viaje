import { defineConfig } from "vitest/config";

export default defineConfig({
  // Resolución nativa de los paths de tsconfig (alias "@/*").
  resolve: { tsconfigPaths: true },
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
