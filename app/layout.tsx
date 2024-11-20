import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/src/common/navigationBar";
import SideBar from "@/src/common/sideBar";

export const metadata: Metadata = {
  title: "月經計算機",
  description: "月經計算機",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", // 如果需要支援舊版瀏覽器
    apple: "/favicon.png", // 用於 Apple Touch Icon
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NavigationBar />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
