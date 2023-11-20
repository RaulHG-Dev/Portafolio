/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-image': "url('../img/fondo.jpg')"
      },
      colors: {
        'special-black': '#111111',
        'special-gray': '#1D1D1D'
      }
    },
  },
  plugins: [],
}
