import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick, className }) => {

    return (

        <div onClick={onClick} className={twMerge('rounded-lg border-[0.5vw] border-pink-500 bg-rose-100 shadow-md/50 p-3 font-sans text-red-950', className)}>
            {children}

        </div >

    );
}
export default Button;