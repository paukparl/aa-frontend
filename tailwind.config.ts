import type { Config } from "tailwindcss";

import svgToDataUri from "mini-svg-data-uri";
import { record } from "zod";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_public: "var(--main-public)",
        main_public_tint: "var(--main-public-tint)",
        main_school: "var(--main-school)",
        main_school_tint: "var(--main-school-tint)",
        main_white: "var(--main-white)",
        main_black: "var(--main-black)",
        main_seasonal: "var(--main-seasonal)",
        record_news: "var(--record-news)",
        record_exhibition: "var(--record-exhibitions)",
        record_events: "var(--record-events)",
        record_facilities: "var(--record-facilities)",
        programmes_foundation: "var(--programmes-foundation)",
        programmes_intermediate: "var(--programmes-intermediate)",
        programmes_diploma: "var(--programmes-diploma)",
        programmes_profpractice: "var(--programmes-profpractice)",
        programmes_postgrad: "var(--programmes-postgrad)",
        programmes_shortcourses: "var(--programmes-shortcourses)",
        roam_light: "var(--roam-light)",
        roam_dark: "var(--roam-dark)",
        hooke_base: "var(--hooke-base)",
        hooke_middle: "var(--hooke-middle)",
        hooke_top: "var(--hooke-top)",
        dta_brown: "var(--dta-brown)",
        dta_green: "var(--dta-green)",
        dta_blue: "var(--dta-blue)",
        dta_maroon: "var(--dta-maroon)",
        dta_red: "var(--dta-red)",
      },
      fontFamily: {
        diatype: ['var(--font-diatype)', 'mono'],
        nhgdisplay: ['var(--font-nhgdisplay)', 'sans-serif'],
        nhgtext: ['var(--font-nhgtext)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
