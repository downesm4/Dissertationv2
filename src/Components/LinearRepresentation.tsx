import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Context/ThemeContext"
import { themes } from "../Styles/themes";

import Blood from '../assets/v2/Bleeding/blood2.svg';
import Check from '../assets/v2/check.png'

// LD friendly representation of the menstrual cycle
// Displays the cycle as a line showing different days 
// Gives a brief overview of what to expect that day 
// Has a button to log whether the user has bled quickly

// Colours, days etc on this are all examples and logic would need to create an accurate representation based on what the user has inputted previously 
function LinearRepresentation() {

    // Deals with colour scheme based on user settings
    const { theme } = useTheme();
    const currentTheme = themes[theme]
    const [selected, setSelected] = useState("") // for styling the tick button 

    // For representation example
    let totalDays = 30;
    let bleedingDays = [1, 2, 3, 4, 5, 6]
    let fertileDays = [9, 10, 12, 13, 14]
    let ovulationDay = 11
    let currentDay = 3

    // Allows for scrolling
    const containerRef = useRef<HTMLDivElement>(null);
    const currentDayRef = useRef<HTMLDivElement>(null);

    // Automitically scrolls the element into view when the currentDay value change - ensures current Day always starts centered
    useEffect(() => {
        if (currentDayRef.current) {
            currentDayRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest",
            });
        }
    }, [currentDay]);


    return (
        <div className="grid grid-cols-1items-center items-justify rounded-lg border m-5"
            style={{
                background: currentTheme.Calendar,
                color: currentTheme.text,
                borderColor: currentTheme.border
            }}>

            <h1 className="text-xl font-bold text-center mt-3"> Your Period Cycle: </h1>

            <div
                ref={containerRef}
                className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory whitespace-nowrap justify-start items-center my-4 mx-5 p-3 rounded-md border border-black"
            >
                {Array.from({ length: totalDays }, (no, index) => index + 1).map((no, index) => (
                    <div
                        key={index}
                        ref={el => {
                            if (no === currentDay) currentDayRef.current = el;
                        }}
                        className={`min-w-[32px] h-8 snap-center flex items-center justify-center text-base font-bold rounded-full mx-1 px-5 py-5 
                             ${bleedingDays.includes(no) ? "bg-rose-200 mx-1" : ""}
                             ${no < currentDay && bleedingDays.includes(no) ? ' bg-rose-400 mx-1' : ""} 
                             ${fertileDays.includes(no) ? "bg-blue-200 mx-1" : ""}
                             ${no === ovulationDay ? "bg-blue-400 mx-1" : ""}
                             ${no === currentDay ? "outline-4 outline-red-600 outline-offset-2 mx-2" : ""}`} // styles the days differently depending on what the represent
                    >
                        {no}
                    </div>
                ))}
            </div>

            {/* Example of what would be shown on the day  */}
            <div className="flex flex-row mx-5 items-center justify-center my-3">
                <img src={Blood} className=" float-left w-[50%] max-w-12" />
                <p className="flex-1 text-center text-lg font-light" style={{ color: currentTheme.text }}> Expect some bleeding today </p>
            </div>

            {/* Allows the user to quickly log whether they have bled today or not without needing to rank severity */}
            <div className="flex flex-col justify-center items-center my-5">
                <h1 className="font-bold text-center text-2xl"> Did you bleed today?</h1>
                <div className="flex items-center justify-center mx-auto">
                    <button key="Yes"
                        className="flex flex-col w-[35%] border items-center rounded-lg shadow-lg"
                        style={{
                            background: selected === "Yes" ? currentTheme.LinearPress : currentTheme.LinearUnPress,
                            borderColor: currentTheme.border,
                            color: currentTheme.text
                        }}
                        onClick={() => { setSelected(selected === "Yes" ? "" : "Yes") }}>
                        <img src={Check} className="w-[50%] px-3 py-2" />
                        <p className="text-xl font-bold text-center pb-2"> Yes </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LinearRepresentation