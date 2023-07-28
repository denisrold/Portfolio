/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      transitionDuration: {
        long: "8000ms",
      },
      width: {
        wbig: "530px",
      },
      height: {
        84: "360px",
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
    },
  },
  plugins: [],
};
