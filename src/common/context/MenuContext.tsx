"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type MenuContextType = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

// 使用 undefined 作為初始值，並讓 useMenu 檢查 Context 是否已提供
const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen((prev) => !prev);
    };
  
    return (
      <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
        {children}
      </MenuContext.Provider>
    );
  };
  

// 提供一個自定義 Hook 用來使用 Context
export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
