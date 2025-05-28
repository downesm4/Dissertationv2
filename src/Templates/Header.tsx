import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import arrow from '../assets/arrow.png';
import { useNavigate } from "react-router-dom";


const Header = ({ allowBack, className, title }) => {

    const navigate = useNavigate()

    return (

        <div className={twMerge("", allowBack ? "grid grid-cols-6" : "flex items-center justify-center mb-5", className)}>

            < button className={twMerge("col-span-1", allowBack ? "" : "hidden")} onClick={() => navigate(-1)} > <img src={arrow} className=" w-[50%] h-auto mx-5 " /> </button >

            <div className={twMerge("flex justify-center items-center", allowBack ? "col-span-5" : " flex ")}>
                <h1 className="text-3xl font-serif font-bold">{title}</h1>
            </div>

        </div >


    );
}

export default Header;