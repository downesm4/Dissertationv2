import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const TextInput = ({ rowNo, colNo, className }) => {

    return (

        <textarea
            className={twMerge("rounded-lg p-3 w-[100%] bg-transparent border-[0.5vw] border-pink-500 text-base", className)} rows={rowNo} cols={colNo} placeholder="Additional Notes">
        </textarea>

    );
}
export default TextInput;