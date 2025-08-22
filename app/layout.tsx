import { draftMode } from "next/headers";
import { CSSProperties, ReactNode } from "react";
import { DisableDraftMode } from "@/components/DisableDraftModeButton";
import Layout from "@/components/Layout";
import StrapiUpdateListener from "@/components/StrapiUpdateListener";
import { PrevRouteProvider } from "@/contexts/PrevRouteContext";
import { fonts } from "@/fonts";
import { cn } from "@/lib/cn";
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
      className={cn(
        fonts.diatype.variable,
        fonts.nhgDisplay.variable,
        fonts.nhgText.variable,
        fonts.times.variable,
        "text-black antialiased",
      )}
      style={{ "--color-home": homeColor } as CSSProperties}
    >
      <body>
        <PrevRouteProvider>
          <Layout>{children}</Layout>
        </PrevRouteProvider>
        {(await draftMode()).isEnabled && <DisableDraftMode />}
        <StrapiUpdateListener />
      </body>
    </html>
  );
}
