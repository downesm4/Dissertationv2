import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import drop from '../assets/drop.png'

const DropDown = ({ className, onClick }) => {
    const options = ["Daily", "Weekly", "Monthly"]
    const [selected, setSelected] = useState('Daily')
    const [open, setOpen] = useState(false)

    const handleClick = (option) => {
        setSelected(option)
        setOpen(!open);
        if (onClick) onClick();
    };

    return (
        <div className="flex flex-col items-center justify-center w-full" >
            <div className="relative w-full flex-col mx-10 mb-5"  >
                <div className="flex items-center justify-center">
                    <div
                        onClick={() => { setOpen(!open) }}
                        className={twMerge(
                            'rounded-full flex items-center justify-between border-[0.75vw] border-pink-500 bg-rose-100 shadow-md/50 p-3 font-sans text-red-950 w-full', className)}>
                        <h1 className="text-xl"> {selected} </h1>
                        <img src={drop} className="w-[10%] h-auto" />

                    </div >
                </div>

                {open && (
                    <div className=" absolute z-10 top-full mt-2 w-full bg-white rounded-md shadow-lg border border-pink-500">
                        {options.map((option) => (
                            <button
                                key={option} onClick={() => {
                                    handleClick(option)
                                }}
                                className="block w-[90%] text-left text-xl px-4 py-2 text-red-950"
                            > {option} </button>
                        ))}
                    </div>
                )}
            </div>
        </div>

    );
}
export default DropDown;