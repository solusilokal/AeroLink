/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./aerolink_app.tsx"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A2B4E',
          navyLight: '#0E355F',
          blue: '#189AD3',
          blueHover: '#127AA8',
        }
      }
    },
  },
  plugins: [],
}
