import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import i18next from "eslint-plugin-i18next";

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
  {
    files: ["**/*.tsx", "**/*.jsx"],
    plugins: { i18next },
    rules: {
      "i18next/no-literal-string": [
        "error",
        {
          markupOnly: false,
          ignoreAttribute: [
            "className",
            "style",
            "href",
            "src",
            "key",
            "type",
            "id",
            "role",
            "tabIndex",
            "rel",
            "target",
            "name",
            "variant",
            "size",
            "scrim",
            "tone",
            "background",
            "spacing",
            "sizes",
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
