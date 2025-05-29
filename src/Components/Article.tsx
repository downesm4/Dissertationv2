import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Article = ({ title, image, className }) => {

    return (
        <div className="my-3 mr-3">
            <img src={image} className="w-[130px] h-[80px] object-cover object-center rounded-t-md" />
            <h3 className={twMerge("w-[130px] h-[50px] text-center flex justify-center bg-white text-black rounded-b-md overflow-hidden", className)}> {title} </h3>
        </div>


    );
}
export default Article;