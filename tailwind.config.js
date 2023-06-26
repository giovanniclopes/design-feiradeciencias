/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        mbl: { max: "630px" }, // mbl == mobile
        // => @media (max-width: 630px) { ... }
      },
      backgroundImage: {
        vectorHowWillLearn: "url(../assets/vectorHowWillLearn.svg)",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      colors: {
        product: {
          darkPurple: "#1B1834",
          purple: "#381571",
          darkPink: "#76174E",
          pink: "#e7005e",
        },
        pink: {
          100: "#faccdf",
          200: "#f599bf",
          300: "#f1669e",
          400: "#ec337e",
          500: "#e7005e",
          600: "#b9004b",
          700: "#8b0038",
          800: "#5c0026",
          900: "#2e0013",
        },
      },
    },
  },
  plugins: [],
};
