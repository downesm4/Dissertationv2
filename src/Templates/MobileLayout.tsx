import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"
import Header from "./Header";
import NavBar from "./NavBar";
import { Capacitor } from "@capacitor/core";
import { useTheme } from "../Context/ThemeContext";
import { themes } from '../Styles/themes.js'


const Layout = ({ children, title, allowBack, allowNav, current, className }) => {

  const { theme } = useTheme()
  const currentTheme = themes[theme]

  const statusbar = 24

  return (

    <div className={twMerge("flex flex-col w-screen h-screen overflow-hidden", className)}
      style={{
        backgroundColor: currentTheme.bg,
        color: currentTheme.text,
        paddingTop: Capacitor.getPlatform() === 'ios'
          ? 'env(safe-area-inset-top)'
          : statusbar,
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}>

      <Header allowBack={allowBack} title={title} className="text-black text-3xl font-bold text-center z-10 h-25% " />

      <main className="flex-1 overflow-y-auto mx-5">
        {children}
      </main>

      <div className={allowNav ? "" : "hidden"}>
        <NavBar current={current} />

      </div>


    </div >

  );

}

export default Layout;