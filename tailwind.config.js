/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  fontFamily: {
    nunito: ["nunito", "sans-serif"],
    MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
  },
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        delivery_in: "##EECFFC",
        placeholder: "#6D6F73",
        button_enter: "#00A296",
        bookmark: "#F8ECFE",
        bookmark_text: "#7B1FA2",
        title: "#202326",
        subtitle: "#393A3C",
        bars: "#EEF0F5",
        infos: "#6D6F73",
        footer_text: "#580F78",
      },
      width: {
        105: "420px",
        161: "644px",
      },
    },
  },
  plugins: [],
};
