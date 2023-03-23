/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "17.5rem",
      md: "48rem",
      lg: "66rem",
    },
    extend: {},
  },
  plugins: [],
};
