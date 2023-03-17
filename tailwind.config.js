const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			'grey': '#e0e0e0',
			'black': '#1a1a1a',
			'pure-black': '#000',
			'dark-grey': '#474747',
			'white': '#ffffff',
			'current': 'currentColor',
			'transparent': 'transparent',
			'red': '#d93526',
			'blue': '#140fff',
			'var': 'var(--color)'
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
			},
			boxShadow: {
				'top': '0 0 30px 0 rgb(0 0 0 / 75%)',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
