import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Context/ThemeContext"
import { themes } from "../Styles/themes";

import Blood from '../assets/v2/Bleeding/blood2.svg';
import Check from '../assets/v2/check.png'
import { twMerge } from "tailwind-merge";

function LinearRepresentation() {

    const { theme } = useTheme();
    const currentTheme = themes[theme]
    const [selected, setSelected] = useState("")

    let totalDays = 30;
    let bleedingDays = [1, 2, 3, 4, 5, 6]
    let fertileDays = [9, 10, 12, 13, 14]
    let ovulationDay = 11
    let currentDay = 3

    const containerRef = useRef<HTMLDivElement>(null);
    const currentDayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentDayRef.current) {
            currentDayRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
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

            <h1 className="text-xl font-bold text-center"> Your Period Cycle: </h1>

            <div ref={containerRef} style={{
                WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS/Android
                touchAction: "pan-x", // Ensures horizontal scrolling works
            }} className="flex overflow-x-auto justify-center items-center my-4 mx-5 p-3 rounded-md border border-black px-10">
                {Array.from({ length: totalDays }, (_, index) => index + 1).map((_, index) => (
                    <div
                        key={index}
                        ref={_ === currentDay ? currentDayRef : null}
                        className={`flex w-8 h-8 items-center justify-center md:mx-[3%] text-basefont-bold rounded-full px-5 py-5 
                             ${bleedingDays.includes(_) ? "bg-rose-200 mx-1" : ""} 
                             ${_ < currentDay && bleedingDays.includes(_) ? ' bg-rose-400 mx-1' : ""} 
                             ${fertileDays.includes(_) ? "bg-blue-200 mx-1" : ""}
                             ${_ === ovulationDay ? "bg-blue-400 mx-1" : ""}
                             ${_ === currentDay ? "outline-4 outline-red-600 outline-offset-2 mx-2" : ""}`}
                    >
                        {_}
                    </div>
                ))}
            </div>

            <div className="flex flex-row mx-5 items-center justify-center my-3">
                <img src={Blood} className=" float-left w-[50%] max-w-12" />
                <p className="flex-1 text-center text-lg font-light" style={{ color: currentTheme.text }}> Expect some bleeding today </p>
            </div>

            <div className="flex flex-col justify-center items-center my-5">

                <h1 className="font-bold text-center text-2xl"> Did you bleed today?</h1>

                <div className="flex items-center justify-center mx-auto">
                    <button key="Yes"
                        className="flex flex-col w-[35%] border items-center rounded-lg"
                        style={{
                            background: selected === "Yes" ? currentTheme.LinearPress : currentTheme.Bleeding1,
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