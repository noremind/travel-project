// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [ 
		"nuxt-swiper",
	],
	components: {
    global: true,
    dirs: ["@/components"],
  },
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
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false }
})
