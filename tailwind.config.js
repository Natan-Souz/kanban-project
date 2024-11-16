/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "mainBackGoundColor": '#0D1117',
        "cloumnBackgroundColor": '#161c22'
      }
    },
  },
  plugins: [],
}

