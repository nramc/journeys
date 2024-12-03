/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3459E6',
          light: '#3459E6',
          dark: '#e2e2ed'
        },
        secondary: '#952eab',
        danger: '#E63457',
        success: '#198754',
        warning: '#ffc107',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #3459E6, #d53a9d)', // Customize colors
      },
      textColor: {
        transparent: 'transparent',
      }
    },
  },
  plugins: [],
}

