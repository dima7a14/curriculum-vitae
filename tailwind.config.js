/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.js', './components/**/*.js'],
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
				gradient: 'gradient 15s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
