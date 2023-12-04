/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			'red-dark': '#BF3B44',
			'red': '#F3BABD',
			'red-light': '#F4E6E7',
			'green-dark': '#639339',
			'green': '#CBE4B4',
			'green-light': '#E5F0DB',
			'white': '#FFFFFF',
			'gray': {
				100: '#FAFAFA',
				200: '#EFF0F0',
				300: '#DDDEDF',
				400: '#B9BBBC',
				500: '#5C6265',
				600: '#333638',
				700: '#1B1D1E',
			},
		},
	},
	plugins: [],
};
