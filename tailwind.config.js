const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "1815px",
        tall: { raw: "(min-height: 1200px)" },
      },
    },
  },
  variants: {
    extend: {
      colors: {
        primary: "#ec4099",
        hotpink: {
          50: "#fae5f1",
          100: "#f4bddc",
          200: "#f091c5",
          300: "#ed64ad",
          400: "#ec4099", // main
          500: "#ed1084",
          600: "#db127f",
          700: "#c41377",
          800: "#ae1371",
          900: "#861366",
        },
        green: {
          50: "#e3fced",
          100: "#bcf7d2",
          200: "#8af1b4",
          300: "#40ec93", // main
          400: "#00e578",
          500: "#00dd62",
          600: "#00cc57",
          700: "#00b849",
          800: "#00a63d",
          900: "#008428",
        },
        purple: {
          50: "#fce3fb",
          100: "#f6b8f6",
          200: "#f184f1",
          300: "#e940ec", // main
          400: "#e200e7",
          500: "#d300db",
          600: "#c200d7",
          700: "#aa00d2",
          800: "#9500cc",
          900: "#6a00c3",
        },
        red: {
          50: "#ffecf0",
          100: "#ffcfd6",
          200: "#f19ea1",
          300: "#e9787d",
          400: "#f5595c",
          500: "#fa4844",
          600: "#ec4043", // main
          700: "#da363c",
          800: "#cc3035",
          900: "#bd2529",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

/**
 * colors were generated here: https://m2.material.io/inline-tools/color/
 * with the starting hex value #EC409A
 */
