/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx', 'index.html'],
	theme: {
		fontFamily: { sans: ['Inter', 'sans-serif'] },
		extend: {
			backgroundImage: {
				galaxy: "url('/background-galaxy.png')",
				'nlw-gradient': 'linear-gradient(90deg,#996dff,#35e8b3 56%,#e2d45c)',
				'game-gradient': ' linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
			},
		},
	},
	plugins: [],
};
