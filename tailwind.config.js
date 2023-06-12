/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.jsx', './components/**/*.jsx'],
	theme: {
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
			cursive: ['Bungee Shade', 'cursive'],
		},
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
				wobble: {
					'0%, 40%, 100%': {
						transform: 'translateY(0)',
					},

					'20%': {
						transform: 'translateY(-20px)',
					},
				},
				shake: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'10%': {
						transform: 'rotate(-10deg)',
					},
					'20%': {
						transform: 'rotate(10deg)',
					},
					'40%': {
						transform: 'rotate(-15deg)',
					},
					'60%': {
						transform: 'rotate(15deg)',
					},
					'80%': {
						transform: 'rotate(-5deg)',
					},
					'100%': {
						transform: 'rotate(0deg)',
					},
				},
			},
			animation: {
				blink: 'blink 1s ease-in-out infinite',
				gradient: 'gradient 5s ease-in-out infinite',
				wobble: 'wobble 3s ease-in-out infinite calc(.1s * var(--i))',
				shake: 'shake 2s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
