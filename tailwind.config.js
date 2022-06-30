/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "4px",
    },
    extend: {
      colors: {
        theme1: "#fafafa",
        theme2: "#fde68a",
        theme3: "#171717",
      },
    },
    screen: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
