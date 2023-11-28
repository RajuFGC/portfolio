/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        Slowspin:'spin 16s infinite linear'
      },
      colors: {
      bg: '#020916',
      accent: {DEFAULT: '#CEFF7E',500:'#b9f942'},
      },
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif']
      },
      maxWidth: {
        'raju': '82rem' 
      },
      borderRadius: {
        'rajuBorder': '0.625rem',
        'rajuborderXL': '1.25rem'
      },
      boxShadow: {
        'inner-light':'inset 0 2px 0 0 rgba(255,255,255,0.15)',

        'inner Lightmini':'inset 0 1px 0 0 rgba(255,255,255,0.15)'

      }
    },
  },
  plugins: [],
}
