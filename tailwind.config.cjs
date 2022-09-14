/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px",
      tablet: "768px",
      lg: "1020px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        primaryCyan: "hsl(180, 29%, 50%)",
        backgroundLightCyan: "hsl(180, 52%, 96%)",
        filteringLightCyan: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        serif: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        base: "15px",
      },
    },
  },
  plugins: [],
};
