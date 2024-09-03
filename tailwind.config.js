const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#464775",
        darkColor: "#2B2A29",
        mainColorShade: "rgba(70, 71, 117, 0.8)",
      }
    },
  },
  plugins: [],
});