const  defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
       colors: {
      'light-green': "#2cbcd8",
       'white-100': "rgba(255,255,255,0.3)",
       'light-blue':"#f1f5fd",
        cyan: colors.cyan,
       ...defaultTheme.colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
