/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      bg: '#020916',
      accent: '#CEFF7E',
      },
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
