import { fonts } from "@/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${fonts.diatype.variable} ${fonts.nhgDisplay.variable} ${fonts.nhgText.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
