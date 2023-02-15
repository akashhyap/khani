/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      poppins: '"Poppins", sans-serif',
      merriweather: '"Merriweather", sans-serif',
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
],
}
