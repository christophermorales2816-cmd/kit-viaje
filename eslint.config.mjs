import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // Los textos de la interfaz van en los diccionarios de src/i18n/ (spec,
  // 21.1): un texto escrito a mano en un componente no se traduce. Esta regla
  // lo marca. Se permiten los signos que no cambian con el idioma, y los
  // atributos quedan afuera (className, href, ids).
  {
    files: ["src/app/**/*.tsx", "src/components/**/*.tsx"],
    ignores: ["src/components/ui/**", "**/*.test.tsx"],
    rules: {
      "react/jsx-no-literals": [
        "error",
        {
          noStrings: false,
          ignoreProps: true,
          allowedStrings: [
            ".",
            ",",
            ":",
            ";",
            "/",
            "·",
            "×",
            "—",
            "–",
            "(",
            ")",
            "©",
            "°",
            "%",
            "✓",
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
