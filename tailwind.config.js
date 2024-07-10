/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
        "max-2xl": { max: "1536px" },
      },
      fontFamily: {
        custom: ['GroteskBold', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
