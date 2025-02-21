/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bgColor: "rgb(var(--color-bg) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      blue: "rgb(var(--color-blue) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
      red: "rgb(var(--color-red) / <alpha-value>)",
      hovercolor: "rgb(var(--color-hovercolor) / <alpha-value>)",
      shadowcolor: "rgb(var(--color-shadowcolor) / <alpha-value>)",
      bg2: "rgb(var(--color-bg2) / <alpha-value>)",
      bg3: "rgb(var(--color-bg3) / <alpha-value>)",
      ascent: {
        1: "rgb(var(--color-ascent1) / <alpha-value>)",
        2: "rgb(var(--color-ascent2) / <alpha-value>)",
      },
    },
    extend: {},
  },
  plugins: [],
}

