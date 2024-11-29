// import { useState } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { MenuProvider } from "@/src/common/context/MenuContext";
import NavigationBar from "@/src/common/navigationBar";
import Menu from "@/src/common/menu";

export const metadata: Metadata = {
  title: "月經 Notebook",
  description: "月經 Notebook",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", // 如果需要支援舊版瀏覽器
    apple: "/logo.png", // 用於 Apple Touch Icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <body className="relative">
        <MenuProvider>
          <NavigationBar />
          <Menu />
          <div>{children}</div>
        </MenuProvider>
      </body>
    </html>
  );
}
