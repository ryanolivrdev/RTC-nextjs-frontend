/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
      },

      colors: {

        gray: {
          100: '#E1E1E6',
        },

        green: {
          200: "#00B37E",
          500: "#07847E"
        },

        purple: {
          100: '#282843',
          500: "#633BBC",
          800: "#282843",
          900: "#1A1924"
        }
      },
    },
  },
  plugins: [],
};
