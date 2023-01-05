// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'hero': "url('/Assets/Images/heroop.png')",
      },
      colors: {
        'ambers' : '#e53170',
        'bottle' : '#004643',
        'bottle-text' : '#fffffe',
      }
    },
  },
  plugins: [],
}