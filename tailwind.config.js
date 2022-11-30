/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Montserrat',
      body: 'Montserrat',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#050402',
        secondary: '#1C9A9E',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#1C9A9E',
          hover: '#1C9A9E',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
