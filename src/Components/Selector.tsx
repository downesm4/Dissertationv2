import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Selector = ({ options, def, className, onChange }) => {
    const [selected, setSelected] = useState(def)

    const handleChange = (range) => {
        setSelected(range);
        if (onChange) onChange(range);
    };

    return (

        <div className={twMerge("", className)}>

            <div className=" grid grid-cols-1 my-5 ">
                <div className="flex justify-between items-center h-16 ">
                    <div className="flex-1">
                        <div className="flex-1 flex justify-center">
                            <div className=" bg-transparent rounded-lg w-full max-w-md flex justify-between border border-pink-500">
                                {options.map((range) => (
                                    <button key={range} onClick={() => { handleChange(range) }}
                                        className={twMerge('flex-1 py-2 px-2 my-2 mx-1 rounded-md transition-colors shadow-md/30 border font-serif text-red-950 border-pink-500', selected === range ? 'bg-rose-200 inset-shadow-sm inset-shadow-rose-300' : 'bg-transparent')}>{range.charAt(0).toUpperCase() + range.slice(1)}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
}
export default Selector;