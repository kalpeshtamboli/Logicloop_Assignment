/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFF9DA',
      },
      fontFamily : {
        santoshi : ["santoshi", "sans-serif"]
      }
    },
  },
  plugins: [],
}