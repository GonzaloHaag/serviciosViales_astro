/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'sv-blue':'#0052FF',
				'sv-negro':'#15141C',
				'sv-negro-light':'#212124',
				'sv-gris-bold':'#757575',
				'sv-gris-regular':'#DDDDDD',
				'sv-gris-light':'#EEEEEE',
				'sv-gris-extralight':'#FBFBFB'
			}
		},
	},
	plugins: [],
}
