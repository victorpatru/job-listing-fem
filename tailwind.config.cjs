/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      backgroundImage: {
        "mobile-header-image": "url(/bg-header-mobile.svg)",
        "desktop-header-image": "url(/bg-header-desktop.svg)",
      },
      screens: {
        mobile: "480px",
        md: "768px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
