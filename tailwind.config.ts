import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/module/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkBrand: "#179FDB",
        pinkBrandSecond: "#179FDB",
        greenBrand: "#162F43",
        greenBrandSecond: "#215781",
        chocolateBrand: "#6C93AE",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config;
