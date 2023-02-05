/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        poppins: ['Poppins, sans-serif'],
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#3DDC97',
          700: '#015F43',
        },
        blue: {
          500: '#3A35DF',
          600: '#6C6CFD',
          900: '#141A31'
        },
        orange: {
          500: '#FF5C00',
          600: '#B15A35',
        },
        red: {
          600: '#FF4040',
          300: '#FA5A69',
          500: '#EA4335',
        },
        gray: {
          100: '#FCFCFC',
          200: '#E4ECF0',
          400: '#9A9A9A',
          500: '#525252',
          600: '#757575',
          650: '#424242',
          700: '#1C1C1D',
          800: '#161819',
          900: '#01080B'
        },
        pink: {
          500: '#FF495C',
        },
        yellow: {
          500: '#FEA600',
        }
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
