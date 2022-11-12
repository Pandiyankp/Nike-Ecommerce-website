/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screen:{
      'xl':{'max': '1280px'},
      'lg':{'max': '1024px'},
      'md':{'max': '768px'},
      'sm':{'max': '640px'},
      'xsm':{'max': '375px'},
      // 'lg':{'max': '1200px'},
      // 'md':{'max': '920px'},
      // 'sm':{'max': '570px'},
    }
  },
  plugins: [],
}