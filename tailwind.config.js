const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A174DB',
        secondary: '#49BE55',
        gray: {
          1: '#cccccc',
          2: '#c2c2c2'
        },
        darkblue: '#101C21',
        black: {
          1: '#999999',
          2: '#777777',
          3: '#666666',
          4: '#555555',
          5: '#222222'
        },
        purple: { 1: '#C6BAF8', 2: '#9D60EB' }
      },
      boxShadow: {
        box: '0px 10px 30px rgba(153,153,153,0.2)'
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans]
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(28deg,#6362d7 -13.00%, #ff8fe2 147.00%)',
        'gradient-secondary':
          'linear-gradient(-35deg,#24553a 0.00%, #49be55 100.00%)'
      }
    }
  },
  plugins: []
}
