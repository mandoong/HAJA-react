/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
        over: ["over"],
        over_b: ["over-bold"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      backgroundImage: {
        main_section: "url('/img/mainCard.png')",
      },
    },
  },
  plugins: [],
};
