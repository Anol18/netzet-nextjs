import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--color-primary)",
				},
				secondary: {
					DEFAULT: "var(--color-secondary)",
				},
				text: {
					primary: "var(--text-primary)",
					secondary: "var(--text-secondary)",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
