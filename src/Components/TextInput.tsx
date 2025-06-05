import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../Context/ThemeContext";
import { themes } from "../Styles/themes";

// Allow text to be inputted by the user for text boxes on ranking pages 
const TextInput = ({ rowNo, colNo, className }) => {

    const { theme } = useTheme();
    const currentTheme = themes[theme]

    return (

        // rows - how high the box is 
        // columns - how wide the box is 
        <textarea
            className={twMerge("rounded-lg p-3 w-[100%] font-regular bg-white border-[0.5vw]  text-base", className)} style={{ borderColor: currentTheme.border }} rows={rowNo} cols={colNo} placeholder="Want to write something?">
        </textarea>

    );
}
export default TextInput;