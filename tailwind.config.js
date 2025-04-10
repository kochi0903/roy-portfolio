/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      "cupcake",
      "lemonade",
      "forest",
      "aqua",
      "pastel",
      "luxury",
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
