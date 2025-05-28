import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge"
import { StatusBar } from '@capacitor/status-bar';
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = ({ children, title, allowBack, allowNav, current, className }) => {

  return (

    <div className={twMerge("flex flex-col w-screen h-screen bg-rose-50 overflow-hidden", className)} style={{
      paddingTop: 'env(safe-area-inset-top)',
      paddingLeft: 'env(safe-area-inset-left)',
      paddingRight: 'env(safe-area-inset-right)',
    }}>
      <Header allowBack={allowBack} title={title} className="text-red-950 font-serif text-3xl font-bold text-center z-10 h-25% " />

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