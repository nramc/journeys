/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3459E6',
        secondary: '#952eab',
        danger: '#dc3545',
        success: '#198754',
        warning: '#ffc107',
        info: '#0dcaf0',
        light: '#f8f9fa',
        dark: '#212529',
      }
    },
  },
  plugins: [],
}

