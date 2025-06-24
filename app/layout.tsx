import "./globals.css";
import localFont from 'next/font/local';
import clsx from 'clsx';

// Optimize font loading using next/font to minimize layout shifts and prevent FOUC
// Move to pages/_app.tsx if we decide on using pages router instead
const diatype = localFont({
  src: [
    { path: './fonts/ABCDiatypeRoundedMono-Regular-Trial.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ABCDiatypeRoundedMono-RegularItalic-Trial.woff2', weight: '400', style: 'italic' },
    { path: './fonts/ABCDiatypeRoundedMono-Bold-Trial.woff2', weight: '700', style: 'normal' },
    { path: './fonts/ABCDiatypeRoundedMono-BoldItalic-Trial.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-diatype',
  display: 'swap',
});

const nhgdisplay = localFont({
  src: [
    { path: './fonts/NHaasGroteskDSPro-55Rg.ttf', weight: '400', style: 'normal' },
    { path: './fonts/NHaasGroteskDSPro-56It.ttf', weight: '400', style: 'italic' },
    { path: './fonts/NHaasGroteskDSPro-65Md.ttf', weight: '500', style: 'normal' },
    { path: './fonts/NHaasGroteskDSPro-66MdIt.ttf', weight: '500', style: 'italic' },
  ],
  variable: '--font-nhgdisplay',
  display: 'swap',
});

const nhgtext = localFont({
  src: [
    { path: './fonts/NHaasGroteskTXPro-55Rg.ttf', weight: '400', style: 'normal' },
    { path: './fonts/NHaasGroteskTXPro-56It.ttf', weight: '400', style: 'italic' },
    { path: './fonts/NHaasGroteskTXPro-65Md.ttf', weight: '500', style: 'normal' },
    { path: './fonts/NHaasGroteskTXPro-66MdIt.ttf', weight: '500', style: 'italic' },
    { path: './fonts/NHaasGroteskTXPro-75Bd.ttf', weight: '700', style: 'normal' },
    { path: './fonts/NHaasGroteskTXPro-76BdIt.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-nhgtext',
  display: 'swap',
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={clsx(diatype.variable, nhgdisplay.variable, nhgtext.variable)}>
      <body>
        {children}
      </body>
    </html>
  );
}
