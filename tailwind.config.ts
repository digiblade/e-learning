import type { Config } from "tailwindcss";
const colors: string[] = [
  "red",
  "green",
  "blue",
  "yellow",
  "#1AB69D",
  "#8E56FF",
  "#F2B31D",
]; // Add your desired colors here
const prefixes: string[] = ["bg", "text", "border"]; // Add more prefixes if needed

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primaryBlue: "var(--primary-blue)",
        secondaryBlue: "var(--secondary-blue)",
        primaryYellow: "var(--primary-yellow)",
      },
      backgroundImage: {
        "gradient-60": "linear-gradient(60deg, var(--tw-gradient-stops))",
      },
    },
  },

  // safelist: [
  //   {
  //     pattern:
  //       /from-(green|blue|red|yellow|indigo|purple|pink|gray|black|white|teal|cyan|amber|lime|emerald|fuchsia|rose|sky|)-[1-9]00/,
  //   },
  //   {
  //     pattern:
  //       /to-(green|blue|red|yellow|indigo|purple|pink|gray|black|white|teal|cyan|amber|lime|emerald|fuchsia|rose|sky)-[1-9]00/,
  //   },
  //   {
  //     pattern:
  //       /text-(green|blue|red|yellow|indigo|purple|pink|gray|black|white|teal|cyan|amber|lime|emerald|fuchsia|rose|sky)-[1-9]00/,
  //   },
  // ],
  //prefixes.flatMap(
  //   (prefix) => colors.map((color) => `${prefix}-${color}-500`) // Add shades as needed
  // ),

  plugins: [],
};
export default config;
