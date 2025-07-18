import { CSSProperties, ReactNode } from "react";
import { PrevRouteProvider } from "@/contexts/PrevRouteContext";
import { fonts } from "@/fonts";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // TODO: fetch data
  const homeColor = "#91ff8b";
  return (
    <html
      lang="en"
      className={`${fonts.diatype.variable} ${fonts.nhgDisplay.variable} ${fonts.nhgText.variable} text-black antialiased`}
      style={
        {
          "--color-home": homeColor,
        } as CSSProperties
      }
    >
      <body>
        <PrevRouteProvider>{children}</PrevRouteProvider>
      </body>
    </html>
  );
}
