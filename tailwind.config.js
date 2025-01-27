/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        pRed: "#ff0000",
        pYellow: "#ffff00",
        pGreen: "#00ff00",
        pCyan: "#00ffff",
        pBlue: "#0000ff",
        pPurple: "#ff00ff"
      },
    },
  },
  content: ["./src/**/*.{js,jsx}"],
};
