import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        kameron: ["var(--font-kameron)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      screens: {
        sm: { 'max': '480px' },
        md: { 'min': '481px', 'max': '768px' },
        lg: { 'min': '769px' }
      },
    },
  },
  plugins: [],
} satisfies Config;
