/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom1:"#E83F25",
        custom:"#EC1F25"
      }
    },
  },
  plugins: [],
}