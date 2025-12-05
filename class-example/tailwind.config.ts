import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        //  내가 만드는 부트스트랩의 변수
        철수가좋아하는색깔: "blue",
        영희가좋아하는색깔: "green",
      },
    },
  },
  plugins: [],
};
export default config;
