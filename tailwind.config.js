/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
     'rubi':['Rubik Doodle Shadow']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/home/amansrivastav/Desktop/daydox1/src/assets/background1.jpg')"
      }
    },
  },
  plugins: [],
}