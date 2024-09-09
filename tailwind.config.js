/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['"Open Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      animation: {
        'spinner-grow': 'spinner-grow 0.5s linear infinite',
        'spinner-grow-slow': 'spinner-grow 1s linear infinite',
      },
      keyframes: {
        'spinner-grow': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-reduce'],
    },
  },
  plugins: [],
}
