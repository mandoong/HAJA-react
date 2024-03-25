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
    },
  },
  plugins: [],
};
