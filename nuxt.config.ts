// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/devtools',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
	],
	css: ['assets/main.css'],
	routeRules: {
		'/**': {
			ssr: false
		}
	},
	runtimeConfig: {
		public: {
			apiUrl: 'https://bmm-api.brunstad.org',
			authUrl: 'https://login.bcc.no',
			clientId: ''
		}
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},
})
