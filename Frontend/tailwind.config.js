export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // ⚠️ "light" first rakho
  },
};
