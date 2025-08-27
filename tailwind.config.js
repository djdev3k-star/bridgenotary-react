/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.1s ease-out'
      },
      colors: {
        'electric-blue': '#0046fa',
        'hover-blue': '#1437c0',
        'light-headings-text': '#f9f9f7',
        gold: '#FFD700',
        'gold-dark': '#BFA100',
        'royal-blue': '#274B8C',
        proof: {
          DEFAULT: '#192252', // Proof.com dark blue
          light: '#2A3163',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          700: '#3F3F46',
          900: '#18181B',
        },
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#3b82f6',
        success: '#10b981',
      },
      borderRadius: {
        'md': '4px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        brand: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
