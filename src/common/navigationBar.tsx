"use client";

import Image from "next/image";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { useMenu } from "./context/MenuContext";

export default function NavigationBar(): JSX.Element {
  const { menuOpen, toggleMenu } = useMenu();
  return (
    <div className="w-dvh lg:px-32 px-6 py-4 flex justify-between items-center bg-[#FEF4E0]">
      <div className="flex items-center">
        <div className="w-8 h-8">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <div className="ml-4 lg:text-2xl">123546</div>
      </div>
      <div className="flex items-center">
        <div className="cursor-pointer text-md">
          <IoPerson />
        </div>
        <div className="ml-4 text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <HiMenuAlt3 /> : <HiMenu />}
        </div>
      </div>
    </div>
  );
}
