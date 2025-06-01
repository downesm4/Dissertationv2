import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../Context/ThemeContext";
import { themes } from "../Styles/themes";

const Button = ({ children, onClick, className, style }) => {

    const { theme } = useTheme();
    const currentTheme = themes[theme]

    return (

        <div onClick={onClick} style={{ ...style }} className={twMerge('rounded-lg border-[0.5vw] shadow-md/50 p-3', className)} >
            {children}

        </div >

    );
}
export default Button;