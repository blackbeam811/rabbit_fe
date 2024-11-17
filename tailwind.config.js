/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        screens: {
          xs: "320px",
        },
      },
    },
  },
  plugins: [],
};
