/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1by3': '1fr 2fr'
      },
      colors: {
        'transparent-black': 'rgba(0, 0, 0, 0.5)'
      },
      width:{
        '25vw': '25vw'
      }
    },
  },
  plugins: [],
}