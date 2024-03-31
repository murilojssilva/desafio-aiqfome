/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  fontFamily: {
    nunito: ['Nunito', 'sans-serif'],
    'my-font': ['"My Font"', 'serif'],
  },
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        'blue-150': '#EECFFC',

        'gray-150': '#EEF0F5',
        'gray-450': '#A8ADB7',

        'purple-150': '#F8ECFE',
        'purple-750': '#7B1FA2',
        'purple-850': '#580F78',
      },
      width: {
        29.5: '118px',
        105: '420px',
        161: '644px',
      },
      sizes: {
        xss: '8px',
      },
      screens: {
        tablet: '520px',
        laptop: '1024px',
      },
    },
  },
  plugins: [],
}
