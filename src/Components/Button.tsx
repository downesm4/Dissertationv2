import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick, className }) => {

    return (

        <div onClick={onClick} className={twMerge('rounded-lg border-[0.5vw] border-zinc-700 bg-rose-100 shadow-md/50 p-3  text-black', className)}>
            {children}

        </div >

    );
}
export default Button;