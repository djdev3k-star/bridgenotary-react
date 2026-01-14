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
        // Professional color palette - Deep navy, muted gold, professional blue
        'deep-navy': '#1A2B4D',
        'professional-blue': '#0055E6',
        'hover-blue': '#0049CC',
        'muted-gold': '#D4AF37',
        'gold-dark': '#BFA100',
        'charcoal': '#2C3E50',
        'soft-gray': '#7F8C8D',
        'light-headings-text': '#f9f9f7',
        
        // Legacy colors (maintained for backward compatibility)
        'electric-blue': '#0055E6',
        'light-gray': '#ECF0F1',
        gold: '#D4AF37',
        'royal-blue': '#274B8C',
        proof: {
          DEFAULT: '#1A2B4D', // Updated to deep navy
          light: '#2C3E50',   // Charcoal
        },
        neutral: {
          50: '#F8F9FA',      // Off-white
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          700: '#3F3F46',
          900: '#18181B',
        },
        primary: '#0055E6',
        secondary: '#1A2B4D',
        accent: '#D4AF37',
        success: '#10b981',
      },
      // Tighter, consistent radii across the site
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        '2xl': '12px',
        '3xl': '14px',
        full: '9999px',
      },
      fontFamily: {

        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],

      },
    },
  },
  plugins: [],
}
