import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import ReactDOM from "react-dom"
import { useTheme } from "../Context/ThemeContext";
import { themes } from "../Styles/themes";


// This pop up forms the add additional symptom pop up and is used when the user wants to add a symptom
const AdditionalPopUp = ({ input, setInput, input2, setInput2, onClose, onConfirm }) => {

    // deals with the colour scheme based on user settings
    const { theme } = useTheme()
    const currentTheme = themes[theme]

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('textarea')?.focus();
        }, 300); // short delay helps on iOS
    }, []);

    return ReactDOM.createPortal(

        // Main div for the pop up which makes the rest of the screen darker to make the pop up stand out. 
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" style={{ pointerEvents: "auto" }}>
            <div className="rounded-lg border-[0.5vw] shadow-lg w-11/12 max-w-md p-5"
                style={{
                    backgroundColor: currentTheme.Calendar,
                    border: currentTheme.border,
                    color: currentTheme.text
                }}>
                {/* title for pop up */}
                <h1 className="text-xl text-center mb-4">What would you like to add?</h1>

                <div className="flex-col items-center mb-4">
                    <h1 className="text-xl">Name:</h1>
                    <input // Deals with the input for the name of the symptom 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={(e) => {
                            e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className="w-[95%] border-[0.3vw] rounded-md border-zinc-700 bg-white px-3 mx-2"
                        placeholder="Name"
                    />
                </div>


                <div className="flex-col items-center mb-4">
                    <h1 className="text-xl">Question for Severity:</h1>
                    <input // Deals with the input for the question realted to the symptom - the question is used to pass to the severity ranker 
                        type="text"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                        onFocus={(e) => {
                            e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className="w-[95%] border-[0.3vw] rounded-md border-zinc-700 bg-white px-3 mx-2"
                        placeholder="Question"
                    />
                </div>


                <div className="flex gap-3">
                    <Button // close button for the pop up - closes the pop up 
                        className="w-1/2 text-center text-xl"
                        onClick={onClose}
                        style={{
                            background: currentTheme.PopUpButtons,
                            color: currentTheme.text
                        }}
                    >
                        Close
                    </Button>

                    <Button // Confirm button for the pop up - adds the symptom to the list and closes the pop up 
                        className="w-1/2 text-center text-xl"
                        onClick={onConfirm}
                        style={{
                            background: currentTheme.PopUpButtons,
                            color: currentTheme.text
                        }}
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </div >,
        document.body
    );
}
export default AdditionalPopUp;