/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/subComponents/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
				fondaItalic: ['Fonda-italic'],
				niconne: ['Niconne'],
			},
      textShadow: {
        'golden': '0 2px 2px rgba(166, 124, 0, 0.55)',
     },
     keyframes: {
        loading: {
          '0%': { left: '-100%' },
          '100%': { left: '-10%' },
        },
      },
      animation: {
        loading: 'loading 0.8s linear ',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide')
  ],
});
