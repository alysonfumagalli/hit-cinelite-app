/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Iris', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        accent: 'var(--accent-color)',
        'background-primary': 'var(--background-primary-color)',
        'background-secondary': 'var(--background-secondary-color)',
        border: 'var(--border-color)',
        title: 'var(--title-color)',
        paragraph: 'var(--paragraph-color)',
        error: 'var(--error-color)',
        star: 'var(--star-color)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
