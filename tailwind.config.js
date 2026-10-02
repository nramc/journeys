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
          DEFAULT: 'var(--app-primary)',
          light: 'var(--app-primary)',
          dark: 'var(--app-primary)'
        },
        'on-primary': 'var(--app-on-primary)',
        secondary: 'var(--app-accent)',
        danger: 'var(--app-danger)',
        'danger-background': 'var(--app-danger-background)',
        success: 'var(--app-success)',
        'success-background': 'var(--app-success-background)',
        warning: 'var(--app-warning)',
        'warning-background': 'var(--app-warning-background)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--app-primary), var(--app-accent))',
      },
      textColor: {
        transparent: 'transparent',
      }
    },
  },
  plugins: [],
}

