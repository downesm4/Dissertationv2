import React from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const ConfirmButton = ({ children, className }) => {

    const navigate = useNavigate()

    return (

        <div
            onClick={() => navigate(-1)}
            className={twMerge('rounded-lg shadow-lg/80 p-2 flex justify-center items-center h-[75%] bg-pink-400 text-white text-xl font-bold border-rose-700 border-4', className)}>
            Confirm
        </div >

    );
}
export default ConfirmButton;