/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E3A78', // Royal Blue
          50: '#F0F4FA',
          100: '#DDE6F4',
          200: '#C0D0EC',
          300: '#94B2E0',
          400: '#638DD0',
          500: '#0E3A78', // Main Royal
          600: '#0B2D5D',
          700: '#092144',
          800: '#06162D',
          900: '#030B17',
          950: '#020710',
        },
        secondary: {
          DEFAULT: '#32A7FF', // Sky Blue
          50: '#F0F8FF',
          100: '#E1F0FF',
          200: '#BCE0FF',
          300: '#82C6FF',
          400: '#32A7FF', // Main Sky
          500: '#0085F2',
          600: '#0066C0',
          700: '#004A8D',
          800: '#002E5A',
          950: '#001327',
        },
        accent: {
          orange: '#FF6B00',
          pink: '#FF2F78',
          green: '#18B84A',
          purple: '#6A38FF',
        },
        bgLight: '#F7FAFD',
        textDark: '#13203B',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        luxury: '0 10px 30px -10px rgba(14, 58, 120, 0.15)',
        'luxury-lg': '0 20px 40px -15px rgba(14, 58, 120, 0.25)',
        glass: '0 8px 32px 0 rgba(14, 58, 120, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(3, 11, 23, 0.4)',
        glow: '0 0 20px rgba(50, 167, 255, 0.4)',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(0.98)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
