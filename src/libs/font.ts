// app/fonts.ts
import { Figtree, Urbanist } from "next/font/google";

export const figtree = Figtree({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-figtree", // useful for Tailwind or CSS vars
});

export const urbanist = Urbanist({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-urbanist",
});
