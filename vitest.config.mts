import { defineConfig } from "vitest/config";

export default defineConfig({
  // Resolución nativa de los paths de tsconfig (alias "@/*").
  resolve: { tsconfigPaths: true },
  test: {
    // El foco de testing es la lógica pura de los motores de packing y
    // presupuesto (spec, sección 7). No hay tests de componentes, así que
    // no hace falta jsdom.
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
