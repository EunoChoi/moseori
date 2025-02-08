import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "모서리",
  description: "모여라 서평 리뷰단!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
