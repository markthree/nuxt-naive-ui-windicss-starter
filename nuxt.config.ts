export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    "nuxt-windicss",
    "@bg-dev/nuxt-naiveui",
  ],
  css: [
    "virtual:windi-base.css",
    // 你的全局 css
    // "@/assets/main.css",
    // ----
    "virtual:windi-components.css",
    "virtual:windi-utilities.css",
  ],
  sourcemap: false, // 关闭 sourcemap
});
