/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FF007F', // Base pink
          neon: '#FF1F90', // Lighter neon pink
          dark: '#050505', // Deepest black
          surface: '#121212', // Slightly lighter for cards
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 0, 127, 0.5)',
        'neon-strong': '0 0 30px rgba(255, 0, 127, 0.8)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
