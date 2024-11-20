"use client";

import Image from "next/image";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { useMenu } from "./context/MenuContext";

export default function NavigationBar(): JSX.Element {
  const { menuOpen, toggleMenu } = useMenu();
  return (
    <div className="w-dvh px-20 py-4 flex justify-between items-center bg-[#FEF4E0]">
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <div className="ml-4 text-2xl">123546</div>
      </div>
      <div className="flex items-center">
        <div className="cursor-pointer">登入或註冊/登出</div>
        <div
          className="ml-4 text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiMenuAlt3 /> : <HiMenu />}
        </div>
      </div>
    </div>
  );
}
