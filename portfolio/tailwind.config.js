/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        md: "968px",
        // => @media (min-width: 992px) { ... }
      },
      transitionDuration: {
        long: "6000ms",
      },
      width: {
        wbig: "460px",
      },
      height: {
        84: "360px",
      },
      boxShadow: {
        shadowTop: "0px -4px 6px rgba(0, 0, 0, 0.1)",
      },
      scale: {
        114: "1.14",
      },

      keyframes: {
        fade: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fade: "fade 1s infinite",
      },

      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 1s infinite",
      },
    },
  },
  plugins: [],
};
