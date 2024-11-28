import type { Config } from 'tailwindcss'
import TailwindAnimate from "tailwindcss-animate";

export default {
    darkMode: ['selector', '[data-mode="dark"]'],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		colors: {
			black: '#000',
			snow: '#EDEDED',
			grey:{
				100: '#202020',
				200: '#2E2E2E',
				300: '#3E3E3E',
				400: '#4E4E4E'
			}
		},
		fontFamily: {
			bakbak: ['Bakbak"']
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {}
		}
	},
	plugins: [TailwindAnimate]
} satisfies Config
