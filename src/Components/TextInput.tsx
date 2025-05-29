import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const TextInput = ({ rowNo, colNo, className }) => {

    return (

        <textarea
            className={twMerge("rounded-lg p-3 w-[100%] font-regular bg-white border-[0.5vw] border-zinc-700 text-base", className)} rows={rowNo} cols={colNo} placeholder="Want to write something?">
        </textarea>

    );
}
export default TextInput;