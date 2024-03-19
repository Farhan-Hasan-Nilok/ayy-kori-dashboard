/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#11998e",
        "secondary": "#ff6a49",
        "yellow": "#e7b860",
        "color-gray": "#797979",
        "light-green": "#b9f2e5"
      }
    },
  },
  plugins: [],
}

