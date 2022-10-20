/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontSize: {

      xs:12,
      sm:14, //16
      md:16, //18 
      lg:18, //20
      xl:20, //24
      '2xl':24, //32
      '3xl':32
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      colors: {
        black: '#000',
        white: '#fff',

        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7c7c8a',
          200: '#c4c4cc',
          100: '#e1e1e6'
        },
        red: {
          300 : '#C66262',
          500: '#C94A4A'
        },          
      },
    },
  },
  plugins: [],
}
