/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#B411EF",
        indigo: "#A340E0",
        magnolia: "#FBF0FF",
        violet: "#631499",
        eerie: "#1F1F1F",
        deepviolet: "rgb(60, 9, 100)"
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
