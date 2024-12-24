/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      'purple-100': 'hsl(254, 88%, 90%)',
      'purple-500': 'hsl(256, 67%, 59%)',
      'yellow-100': 'hsl(31, 66%, 93%)',
      'yellow-500': 'hsl(39, 100%, 71%)',
      'white': 'hsl(0, 0%, 100%)', 
      'pale-gray': '#f5f5f5',
      'black': 'hsl(0, 0%, 7%)', 
    },
    fontFamily: {
      'main' : ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}

