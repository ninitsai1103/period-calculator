"use client";

import React from "react";
import { IoCalendar, IoFileTrayFull, IoSunny, IoMoon, IoNewspaper } from "react-icons/io5";
import { useMenu } from "./context/MenuContext";
export default function Menu(): JSX.Element {
  const { menuOpen } = useMenu();
  return (
    <>
      {menuOpen && (
        <div className="py-2 bg-[#EDE9E6] absolute right-20 top-20 rounded-lg cursor-pointer">
          <ul className="text-xl">
            <li className="px-4 py-1 flex items-center justify-center border-b border-[#F8F4F4]">
              <IoCalendar className="mr-2" /> 快速計算
            </li>
            <li className="px-4 py-1 flex items-center justify-center border-b border-[#F8F4F4]">
              <IoFileTrayFull className="mr-2" /> 歷史記錄
            </li>
            <li className="px-4 py-1 flex items-center justify-center border-b border-[#F8F4F4]">
              <IoNewspaper className="mr-2" /> 相關文章
            </li>
            <li className="px-4 py-1 flex items-center justify-center">
              <IoSunny className="mr-2" />
              顯示模式
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
