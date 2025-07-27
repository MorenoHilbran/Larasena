/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nusantara': {
          'light-brown': '#D8B08C',
          'deep-red': '#B33F00',
          'cream': '#F5F0E1',
          'soft-gold': '#A67B5B',
          'dark-brown': '#8B4513',
          'warm-beige': '#E6D3B0'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

