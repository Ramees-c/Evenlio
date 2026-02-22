/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#112b50",
        secondary: "#aa8342",
        tertiary: "#93245e",
      },
    },
  },
  plugins: [],
};
