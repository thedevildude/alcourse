/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#f5f1ff",
          100: "#ede6ff",
          200: "#ded0ff",
          300: "#c5aaff",
          400: "#ab7aff",
          500: "#9444ff",
          600: "#8b1eff",
          700: "#7e0cf5",
          800: "#6c0ad3",
          900: "#580aa8",
          950: "#350372",
        },
      },
    },
  },
  plugins: [],
};
