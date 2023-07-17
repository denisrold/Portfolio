/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
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
        animateborde: {
          "0%": { borderWidth: "0" },
          "25%": { borderWidth: "0" },
          "50%": { borderWidth: "2px" },
          "75%": { borderWidth: "2px" },
          "100%": { borderWidth: "0" },
        },
      },
      animation: {
        borde: "animateborde 4s linear infinite", // Duración y repetición de la animación
      },
    },
  },
  plugins: [],
};
