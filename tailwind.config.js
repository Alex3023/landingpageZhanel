/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': 'inset 1px 1px 60px rgba(0, 0, 0, .05), inset 1px 1px 3px rgba(0, 0, 0, .1), inset -1px -1px 3px rgba(0, 0, 0, .1), inset -1px -1px 3px rgba(0, 0, 0, .1)',
      },
      colors:{
        'gris-marron': '#07080a',
        'gris-claro':'#2e3943',
        'morado': '#3e1f47',
        'celeste-claro': '#edf2f4',
        'verde-dorado' : '#a5a58d',
      },
      fontFamily:{
        nunito: ['Nunito'],
        noto_serif:['Noto Serif'],
        playfair: ['Playfair Display'],
        IBM: ['IBM Plex Serif'],
        montserrat: ['Montserrat'],
        raleway: ['Raleway'],
      }
    },
  },
  plugins: [],
}

