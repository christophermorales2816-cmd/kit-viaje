import { defineConfig } from "vitest/config";

export default defineConfig({
  // Resolución nativa de los paths de tsconfig (alias "@/*").
  resolve: { tsconfigPaths: true },
  test: {
    // El foco de testing es la lógica pura de los motores de packing y
    // presupuesto (spec, sección 7). No hay tests de componentes, así que
    // no hace falta jsdom.
    environment: "node",
    // Los tests corren en la zona del usuario del MVP, no en UTC. Así, si
    // alguien vuelve a meter new Date(iso) en la aritmética de fechas, el
    // corrimiento de un día aparece en CI en vez de en producción.
    env: { TZ: "America/Argentina/Buenos_Aires" },
    include: ["src/**/*.test.ts"],
  },
});
