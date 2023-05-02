/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.jsx', './components/**/*.jsx'],
	theme: {
		extend: {
			keyframes: {
				blink: {
					'0%, 100%': {
						opacity: 1,
					},
					'50%': {
						opacity: 0,
					},
				},
				gradient: {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
					},
					'50%': {
						backgroundPosition: '100% 50%',
					},
				},
			},
			animation: {
				blink: 'blink 1s ease-in-out infinite',
				gradient: 'gradient 5s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
