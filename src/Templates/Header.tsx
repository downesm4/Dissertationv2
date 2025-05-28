import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import arrow from '../assets/arrow.png';
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react"



const Header = ({ allowBack, className, title }) => {

    const navigate = useNavigate()

    return (

        <div className={twMerge("", allowBack ? "" : " hidden ", className)} onClick={() => navigate(-1)}>
            <div className="flex float-left" onClick={() => navigate(-1)}>
                <ChevronLeft className=" w-[40%] h-auto ml-5 mr-2 text-blue-700" />
                <p className="text-sm font-regular text-blue-700"> Back </p>
            </div>

        </div >


    );
}

export default Header;