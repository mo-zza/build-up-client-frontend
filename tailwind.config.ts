import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "Giants-Bold": ["Giants-Bold"],
      giants: ["Giants"],
    },
    extend: {
      gap: {
        "10px": "10px",
        "60px": "60px",
        "70px": "70px",
      },
      margin: {
        header: "13.5px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "#626262"
      },
    },
  },
  plugins: [],
};
export default config;
