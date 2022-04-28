module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1560px"}, 
        // => @media (max-width: 1560px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "991px" },
      // => @media (max-width: 991px) { ... }

      mid: { max: "860px" },
      // => @media (max-width: 860px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "574px" },
      // => @media (max-width: 574px) { ... }
    },
    extend: {
      fontSize: {
        'md': '16px'
      }
    },
  },
  plugins: [],
};
