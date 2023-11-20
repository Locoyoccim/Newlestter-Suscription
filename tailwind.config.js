/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Main_font: ["Roboto", "ui-sans-serif"],
      },
      colors: {
        /*Primary*/
        Tomato: "hsl(4, 100%, 67%)",
        TomatoDegrade: "hsl(4, 100%, 67%,.2)",
        /*Neutral*/
        Dark_Slate_Grey: "hsl(234, 29%, 20%)",
        Charcoal_Grey: "hsl(235, 18%, 26%)",
        Grey_page: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        3: "repeat(3, minmax(150, 1fr, 1fr))",
      },
    },
  },
  plugins: [],
};
