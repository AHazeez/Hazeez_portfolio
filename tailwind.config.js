/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#030014',
          bgLight: '#0d072c',
          text: '#f8fafc',
          textMuted: '#94a3b8',
          primary: '#00f0ff',     // Neon Cyan
          secondary: '#9d4edd',   // Electric Purple
          accent: '#ec4899',      // Neon Pink
          darkCard: 'rgba(10, 5, 30, 0.4)',
          lightCard: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 15px rgba(0, 240, 255, 0.4)',
        'purple-glow': '0 0 15px rgba(157, 78, 221, 0.4)',
        'pink-glow': '0 0 15px rgba(236, 72, 153, 0.4)',
        'card-neon': '0 8px 32px 0 rgba(0, 240, 255, 0.05)',
        'card-neon-hover': '0 8px 32px 0 rgba(0, 240, 255, 0.2)',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'cyber-grid': 'gridScroll 20s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        gridScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50%)' }
        }
      }
    },
  },
  plugins: [],
}
