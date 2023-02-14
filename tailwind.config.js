/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6edff',
          100: '#eaddff',
          200: '#d0bcff',
          300: '#b69df8',
          400: '#9a82db',
          500: '#7f67be',
          600: '#6750a4',
          700: '#4f378b',
          800: '#381e72'
        }
      }
    }
  },
  plugins: []
}
