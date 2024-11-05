/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundColor_White: '#F6FAFF',
        textColor_Gray: '#575757',
        textColor_Purple: '#8E40F6',
        color_Pink: '#EC4899',
        color_Blue: '#4577F5',

        color_wine: '#722F37',
        color_wine_light: '#bc5c67',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      width: {
        'home-text': '28rem',
      },
    },
  },
  plugins: [],
}