/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E0E10',
        foreground: '#EDEDED',
        primary: '#6C63FF',    // lavender indigo
        secondary: '#00C9A7',  // aqua teal
        accent: '#FF6B81',      // coral
        border: 'rgba(237, 237, 237, 0.1)',
        card: 'rgba(23, 23, 25, 0.8)',
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        heading: ["Sora", ...fontFamily.sans],
      },
      borderRadius: {
        lg: `1rem`,
        md: `calc(1rem - 4px)`,
        sm: "calc(1rem - 8px)",
      },
      keyframes: {
        "glow": {
          '0%, 100%': { boxShadow: '0 0 5px -5px #6C63FF' },
          '50%': { boxShadow: '0 0 15px 5px #6C63FF' },
        },
        "reveal": {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        "aurora-bg": {
          'from': { backgroundPosition: '0% 50%' },
          'to': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        "glow": "glow 4s ease-in-out infinite",
        "reveal": "reveal 0.8s ease-out forwards",
        "aurora-bg": "aurora-bg 8s ease-in-out infinite alternate",
      },
      boxShadow: {
        'primary-glow': '0 0 15px rgba(108, 99, 255, 0.3)',
        'secondary-glow': '0 0 15px rgba(0, 201, 167, 0.3)',
      }
    },
  },
  plugins: [],
}
