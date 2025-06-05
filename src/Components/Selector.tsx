import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../Context/ThemeContext";
import { themes } from "../Styles/themes";

// Deals with the user choosing between different options
const Selector = ({ options, def, className, onChange }) => {

    const [selected, setSelected] = useState(def) // for styling based on what the user is selected
    // Deals with colour scheme based on current settings
    const { theme } = useTheme()
    const currentTheme = themes[theme]

    // Deals with what happens when the user clicks a different option 
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
                            <div className="bg-transparent rounded-lg w-full max-w-md flex justify-between border "
                                style={{
                                    borderColor: currentTheme.border
                                }}>
                                {/* Map all of the options passed in - in separate buttons */}
                                {options.map((range) => (
                                    <button key={range} onClick={() => { handleChange(range) }}
                                        style={{
                                            color: currentTheme.text,
                                            borderColor: currentTheme.border,
                                            background: selected === range ? currentTheme.NavSelected : currentTheme.bg,
                                            boxShadow: selected === range ? `inset 0 2px 4px  ${currentTheme.NavShadow}` : ""
                                        }}
                                        className={twMerge('flex-1 py-2 px-2 my-2 mx-1 rounded-md transition-colors shadow-md/30 border')}>
                                        {range.charAt(0).toUpperCase() + range.slice(1)} {/* Ensure the first letter is capital and the rest is lowercase */}
                                    </button>
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