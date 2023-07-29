/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    theme: {
      screens: {
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
    },
    extend: {
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
    },
  },
  plugins: [],
};
