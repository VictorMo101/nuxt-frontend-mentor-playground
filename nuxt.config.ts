// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    pages: true,
    css: ["./assets/css/main.css"],

    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
        },
    },
    modules: ["@nuxt/eslint"],
    eslint: {
        config: {
            standalone: false,
        },
    },
});
