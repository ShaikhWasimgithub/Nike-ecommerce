/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        gilroyExtraBold: ['"Gilroy-ExtraBold"', "sans-serif"],
        gilroyMedium: ['"Gilroy-Medium"', "sans-serif"],
        gilroyBlack: ['"Gilroy-Black"', "sans-serif"],
      },
    },
  },
};
