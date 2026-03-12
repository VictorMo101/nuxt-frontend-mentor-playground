import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(antfu({
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
        indent: 4,
        semi: true,
        quotes: "double",
    },
    ignores: ["**/*.md"],
}, {
    rules: {
        "antfu/top-level-function": "off",
        "vue/max-attributes-per-line": ["error", {
            singleline: {
                max: 2,
            },
            multiline: {
                max: 1,
            },
        }],
        "vue/html-self-closing": "off",
        "ts/no-redeclare": "off",
        "no-console": "off",
        "antfu/no-top-level-await": "off",
        "node/no-process-env": ["error"],
        "node/prefer-global/process": ["off"],
        "perfectionist/sort-imports": ["error", {
            type: "natural",
            order: "asc",
        }],
        "unicorn/filename-case": ["error", {
            case: "camelCase",
            ignore: ["README.md"],
        }],
    },
}));
