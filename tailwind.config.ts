import type { Config } from 'tailwindcss'
import TailwindAnimate from "tailwindcss-animate";

export default {
    darkMode: 'class',
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				bakbak: ['Bakbak']
			},
		}
	},
	plugins: [TailwindAnimate]
} satisfies Config
