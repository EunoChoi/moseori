import type { Metadata } from "next";
import localFont from 'next/font/local';
import StyledComponentsRegistry from "../../common/components/Registry/StyledComponentsRegistry";
import "../globals.css";

export const metadata: Metadata = {
  title: "모서리",
  description: "모여라 서평 리뷰단!",
};

const pretendard = localFont({
  src: '../../common/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={pretendard.className}>
      <head>
        {/* android */}
        <meta name="theme-color" content="#f8f9fa" />
        {/* ios */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#f8f9fa" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <div id="modal-root" />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
