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
  variable: "--font-diatype",
  display: "swap",
});

const nhgDisplay = localFont({
  src: [
    { path: "./NHaasGroteskDSPro-55Rg.ttf", weight: "400", style: "normal" },
    { path: "./NHaasGroteskDSPro-56It.ttf", weight: "400", style: "italic" },
    { path: "./NHaasGroteskDSPro-65Md.ttf", weight: "500", style: "normal" },
    { path: "./NHaasGroteskDSPro-66MdIt.ttf", weight: "500", style: "italic" },
  ],
  variable: "--font-nhg-display",
  display: "swap",
});

const nhgText = localFont({
  src: [
    { path: "./NHaasGroteskTXPro-55Rg.ttf", weight: "400", style: "normal" },
    { path: "./NHaasGroteskTXPro-56It.ttf", weight: "400", style: "italic" },
    { path: "./NHaasGroteskTXPro-65Md.ttf", weight: "500", style: "normal" },
    { path: "./NHaasGroteskTXPro-66MdIt.ttf", weight: "500", style: "italic" },
    { path: "./NHaasGroteskTXPro-75Bd.ttf", weight: "700", style: "normal" },
    { path: "./NHaasGroteskTXPro-76BdIt.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-nhg-text",
  display: "swap",
});

const times = localFont({
  src: [{ path: "./TimesNewRomanBold.ttf", weight: "400", style: "normal" }],
  variable: "--font-times",
  display: "swap",
});

export const fonts = {
  diatype,
  nhgDisplay,
  nhgText,
  times,
};
