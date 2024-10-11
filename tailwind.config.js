/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00ffff',
        'neon-pink': '#ff00ff',
        'neon-green': '#00ff00',
      },
      animation: {
        'neon-pulse': 'neonPulse 2s infinite',
      },
    },
  },
  plugins: [],
}