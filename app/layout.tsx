import { fonts } from "@/fonts";
import "./globals.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${fonts.diatype.variable} ${fonts.nhgdisplay.variable} ${fonts.nhgtext.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
