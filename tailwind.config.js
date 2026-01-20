/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'slide-in-from-bottom-8': {
          '0%': { transform: 'translateY(2rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-from-bottom-10': {
          '0%': { transform: 'translateY(2.5rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'zoom-in': 'zoom-in 1s ease-out',
        'slide-in-from-bottom-8': 'slide-in-from-bottom-8 0.7s ease-out',
        'slide-in-from-bottom-10': 'slide-in-from-bottom-10 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
