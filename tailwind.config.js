import tailwindcssAnimate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        excel: {
          DEFAULT: "#107C41",
          dark: "#0B5E2E",
          light: "#F7F7F7",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(16,124,65,0.95) 0%, rgba(11,94,46,0.9) 100%)",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(16, 124, 65, 0.35)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config

