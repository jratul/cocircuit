import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WrapperLayout from "./WrapperLayout";

export const metadata: Metadata = {
  title: "Cocircuit",
  description: "Build it together",
};

const PretendardFont = localFont({
  src: [
    {
      path: "/fonts/Pretendard-Black.woff2",
      weight: "900",
    },
    {
      path: "/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={PretendardFont.className}>
      <body>
        <WrapperLayout>{children}</WrapperLayout>
      </body>
    </html>
  );
}
