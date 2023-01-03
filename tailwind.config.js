/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_light: "#fcfaf3",
      },
      fontFamily: {
        gt_america_mono: ["GT-America-Mono-Regular", "sans-serif"],
        monument_grotesk: ["Monument-Grotesk-Ultra", "sans-serif"],
      },
    },
  },
  plugins: [],
};
