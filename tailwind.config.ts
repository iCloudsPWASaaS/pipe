import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f3",
          100: "#e2ede5",
          200: "#c6dccd",
          300: "#9cc2a8",
          400: "#6ca07d",
          500: "#4a825d",
          600: "#36684a",
          700: "#2b533c",
          800: "#244331",
          900: "#1f3829",
          950: "#0f1f17",
        },
        moss: "#d3d6b2",
        emerald: {
          DEFAULT: "#1c9967",
          deep: "#0a6131",
          dark: "#386331",
        },
        ink: "#1f2c1d",
        cream: "#f6f6f6",
        stone: "#71736b",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter-tight)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(15, 31, 23, 0.35)",
        card: "0 24px 60px -32px rgba(15, 31, 23, 0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
