/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideOutLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '0%': { transform: 'translateX(100vw)' }
        },
        slideInLeft: {
          '100%': { transform: 'translateX(100vw)' },
          '100%, 0%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        slideOutLeft: 'slideOutLeft 400ms ease-in-out',
        slideInLeft: 'slideInLeft 400ms ease-in-out'
      },
      fontFamily: {
        body: ["Lato"]
      }
    },
  },
  plugins: [],
}

