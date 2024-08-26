/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./base/templates/**/*.html",
    "./base/templates/base/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a', // negro opaco
          800: '#1a1a1a', // un tono más claro que el negro opaco
        },
        purple: {
          500: '#9b59b6', // púrpura
          600: '#8e44ad', // púrpura un poco más oscuro
        },
      },
    },
  },
  plugins: [],
}