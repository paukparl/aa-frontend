import localFont from "next/font/local";

// Optimize font loading using next/font to minimize layout shifts and prevent FOUC
// Move to pages/_app.tsx if we decide on using pages router instead
const diatype = localFont({
  src: [
    {
      path: "./ABCDiatypeRoundedMono-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ABCDiatypeRoundedMono-RegularItalic-Trial.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./ABCDiatypeRoundedMono-Bold-Trial.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./ABCDiatypeRoundedMono-BoldItalic-Trial.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-diatype-src",
  display: "swap",
});

const nhgdisplay = localFont({
  src: [
    { path: "./NHaasGroteskDSPro-55Rg.ttf", weight: "400", style: "normal" },
    { path: "./NHaasGroteskDSPro-56It.ttf", weight: "400", style: "italic" },
    { path: "./NHaasGroteskDSPro-65Md.ttf", weight: "500", style: "normal" },
    { path: "./NHaasGroteskDSPro-66MdIt.ttf", weight: "500", style: "italic" },
  ],
  variable: "--font-nhgdisplay-src",
  display: "swap",
});

const nhgtext = localFont({
  src: [
    { path: "./NHaasGroteskTXPro-55Rg.ttf", weight: "400", style: "normal" },
    { path: "./NHaasGroteskTXPro-56It.ttf", weight: "400", style: "italic" },
    { path: "./NHaasGroteskTXPro-65Md.ttf", weight: "500", style: "normal" },
    { path: "./NHaasGroteskTXPro-66MdIt.ttf", weight: "500", style: "italic" },
    { path: "./NHaasGroteskTXPro-75Bd.ttf", weight: "700", style: "normal" },
    { path: "./NHaasGroteskTXPro-76BdIt.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-nhgtext-src",
  display: "swap",
});

export const fonts = {
  diatype,
  nhgdisplay,
  nhgtext,
};
