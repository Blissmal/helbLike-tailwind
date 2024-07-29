/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['Poppins', 'sans-serif'],
      },
      animation: {
        'spinner-grow': 'spinner-grow 0.75s linear infinite',
        'spinner-grow-slow': 'spinner-grow 1.5s linear infinite',
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
