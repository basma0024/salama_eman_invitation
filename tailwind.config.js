/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fef7f7',
          100: '#fdeef0',
          200: '#fadce2',
          300: '#f5c1cb',
          400: '#ee9aa9',
          500: '#e4748b',
          600: '#d4536d',
          700: '#b23f55',
          800: '#92364a',
          900: '#7a3342',
        },
        ivory: {
          50: '#fefefa',
          100: '#fcfcf0',
          200: '#f7f5e1',
          300: '#f0ebcc',
          400: '#e6deb0',
          500: '#d8cc8f',
          600: '#c6b56d',
          700: '#a89756',
          800: '#8c7f4a',
          900: '#756940',
        },
        gold: {
          50: '#fdfbf3',
          100: '#fbf5e0',
          200: '#f4e7b8',
          300: '#ebd589',
          400: '#e0c25c',
          500: '#d4af3a',
          600: '#bc9530',
          700: '#9a7628',
          800: '#7e6125',
          900: '#684f21',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
