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
          // Heritage Mode (Original)
          'light-brown': '#D8B08C',
          'deep-red': '#B33F00',
          'cream': '#F5F0E1',
          'soft-gold': '#A67B5B',
          'dark-brown': '#8B4513',
          'warm-beige': '#E6D3B0'
        },
        'genz': {
          // Gen-Z Mode (Vibrant)
          'primary': '#B33F00',      // Deep red (consistent)
          'secondary': '#F5F0E1',    // Cream (consistent)
          'accent': '#A67B5B',       // Warm gold (consistent)
          'turquoise': '#00BFA6',    // New Gen-Z accent
          'coral': '#FF5E6C',        // New Gen-Z accent
          'electric': '#00D4FF',     // Electric blue
          'neon-green': '#39FF14',   // Neon green
          'purple': '#8B5CF6',       // Modern purple
          'gradient-start': '#FF5E6C',
          'gradient-end': '#00BFA6'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'genz-gradient': 'linear-gradient(135deg, #FF5E6C 0%, #00BFA6 100%)',
        'genz-gradient-2': 'linear-gradient(135deg, #8B5CF6 0%, #00D4FF 100%)',
        'nusantara-gradient': 'linear-gradient(135deg, #B33F00 0%, #A67B5B 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

