module.exports = {
  content: ["./index.html", "./src/js/**/*.js", "./src/scss/**/*.scss"],
  darkMode: "media",
  theme: {
    extend: {
      backgroundColor: {
        "ocean-dark": "#2B303B",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        serif: ['"Source Serif Pro"', "serif"],
        sans: ['"Source Sans Pro"', "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
    },
  },
};
