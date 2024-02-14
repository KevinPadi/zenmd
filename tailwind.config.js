/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontFamily : {
      'sans' : ['Montserrat', 'Open Sans']
    },
    extend: {
    },
  },
  plugins: [require('@tailwindcss/typography')],
}