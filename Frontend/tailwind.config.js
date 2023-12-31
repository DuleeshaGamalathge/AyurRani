/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
    },
    colors: {
      //primary: '#5c6ac4',
      //secondary: '#ecc94b',
      'white': '#ffffff',
      'primary': '#6b3cc9',
      'secondary': '#6b3cc9',
      'analogous1': '#6b3cc9',
      'analogous2': '#6b3cc9',
      'triadic': '#6b3cc9',
      'dark': '#6b3cc9',
      'text': '#6b3cc9',
      'textLight': '#6b3cc9',
      'textSubtle': '#6b3cc9',
      'accent1': '#6b3cc9',
      'accent2': '#6b3cc9',
      'error': '#6b3cc9',
      'success': '#6b3cc9',
      // ...
    },
    screens:{
      'mb': '375px',
      'sm': '768px',
      'md': '1200px',
      'lg': '1400px',
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px":"400px"
      },
    },
  },
  plugins: [],
};
