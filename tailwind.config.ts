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
    'h1',
    'h1-tipin',
    'h2',
    'body',
    'mono',
    'caption'
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
        dta_map_foreground_color: "var(--dta-map-foreground-color)",
        dta_map_background_color: "var(--dta-map-background-color)",
        dta_map_highlight_color :"var(--dta-map-highlight-color)",
        dta_people_foreground_color :"var(--dta-people-foreground-color)",
        dta_institutions_foreground_color :"var(--dta-institutions-foreground-color)",
        dta_practices_foreground_color :"var(--dta-practices-foreground-color)",
        dta_collections_foreground_color :"var(--dta-collections-foreground-color)",
        dta_about_foreground_color :"var(--dta-about-foreground-color)",
        dta_search_foreground_color :"var(--dta-search-foreground-color)",
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
