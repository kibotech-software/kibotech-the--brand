/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   maroon: "#800000",
      //   cream: "#FFF8E7",
      //   gold: "#D4AF37",
      // },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography"), require("@tailwindcss/forms")],

  daisyui: {
    themes: [
      {
        marooncream: {
          primary: "#800000",
          secondary: "#D4AF37",
          accent: "#FFF8E7",
          neutral: "#291334",
          "base-100": "#FFF8E7",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
