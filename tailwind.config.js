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
          DEFAULT: '#78BB1B',
          dark: '#314C1C',
          light: '#9BD748',
        },
        bg: {
          light: '#F8FAF5',
        },
        text: {
          dark: '#2D3E1F',
          light: '#6B7C5F',
        },
        border: '#E2E8D8',
        success: '#16A34A',
        error: '#DC2626',
      },
      width: {
        '65': '16.25rem', // 260px
        '45': '11.25rem', // 180px
      },
      margin: {
        '65': '16.25rem', // 260px
      },
      spacing: {
        '2.5': '0.625rem', // 10px
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}