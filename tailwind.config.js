/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graytheme: {
          default: "#232323",
          light: "#D9D9D9",
          button: "#898989",
        },
        redtheme: {
          default: "#F80506",
        },
      },
    },
  },
  plugins: [],
};
