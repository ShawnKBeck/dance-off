/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '0 0 8px rgba(0, 0, 0, 0.7), 0 0 16px rgba(0, 0, 0, 0.5)',
      },
      brightness: {
        25: '.25',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'dance': 'dance 2s ease-in-out infinite',
      },
      keyframes: {
        dance: {
          '0%, 100%': { transform: 'rotate(-5deg) translateY(0)' },
          '25%': { transform: 'rotate(5deg) translateY(-10px)' },
          '50%': { transform: 'rotate(-5deg) translateY(0)' },
          '75%': { transform: 'rotate(5deg) translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 0 8px rgba(0, 0, 0, 0.7), 0 0 16px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
