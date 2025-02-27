// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [ 
		"nuxt-swiper",
		"@primevue/nuxt-module",
	],
	components: {
    global: true,
    dirs: ["@/components"],
  },
	plugins: [
    "~/plugins/maska.ts",
  ],
	vite: {
    css: {
      preprocessorOptions: {
        scss: {
					api: 'modern-compiler',
          additionalData: `
          @use "@/assets/scss/variables.scss" as *;
        `,
        },
      },
    },
  },
	css: [
    "@/assets/scss/normalize.scss",
    "@/assets/scss/icons.scss",
    "@/assets/scss/index.scss",
		"@/assets/scss/primevue/index.scss",
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false }
})
