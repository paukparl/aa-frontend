import type { Config } from "tailwindcss";

import svgToDataUri from "mini-svg-data-uri";
import { record } from "zod";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'h1-dta',
    'h1-dta-tipin2',
    'body-dta',
    'mono-dta',
    'caption-dta'
  ],
  theme: {
    extend: {
      colors: {
        /* Uncomment colors below once dev starts on other pages
           rename colors to match design system */
        // main_public: "var(--main-public)",
        // main_public_tint: "var(--main-public-tint)",
        // main_school: "var(--main-school)",
        // main_school_tint: "var(--main-school-tint)",
        // main_white: "var(--main-white)",
        // main_black: "var(--main-black)",
        // main_seasonal: "var(--main-seasonal)",
        // record_news: "var(--record-news)",
        // record_exhibition: "var(--record-exhibitions)",
        // record_events: "var(--record-events)",
        // record_facilities: "var(--record-facilities)",
        // programmes_foundation: "var(--programmes-foundation)",
        // programmes_intermediate: "var(--programmes-intermediate)",
        // programmes_diploma: "var(--programmes-diploma)",
        // programmes_profpractice: "var(--programmes-profpractice)",
        // programmes_postgrad: "var(--programmes-postgrad)",
        // programmes_shortcourses: "var(--programmes-shortcourses)",
        // roam_light: "var(--roam-light)",
        // roam_dark: "var(--roam-dark)",
        // hooke_base: "var(--hooke-base)",
        // hooke_middle: "var(--hooke-middle)",
        // hooke_top: "var(--hooke-top)",
        dta_primary_background_color: "var(--dta-primary-background-color)",
        dta_primary_highlight_color :"var(--dta-primary-highlight-color)",
        dta_tipin_people_foreground_color :"var(--dta-tipin-people-foreground-color)",
        dta_tipin_institutions_foreground_color :"var(--dta-tipin-institutions-foreground-color)",
        dta_tipin_practices_foreground_color :"var(--dta-tipin-practices-foreground-color)",
        dta_tipin_collections_foreground_color :"var(--dta-tipin-collections-foreground-color)",
        dta_tipin_about_foreground_color :"var(--dta-tipin-about-foreground-color)",
        dta_tipin_search_foreground_color :"var(--dta-tipin-search-foreground-color)",
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
