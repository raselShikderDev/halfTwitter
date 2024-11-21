/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
          md: "1rem",
          xl: "1rem"
        }
      }
    },
  },
  plugins: [],
}

