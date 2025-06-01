import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import ReactDOM from "react-dom"
import { useTheme } from "../Context/ThemeContext";
import { themes } from "../Styles/themes";

const AdditionalPopUp = ({ input, setInput, onClose, onConfirm }) => {

    const { theme } = useTheme()
    const currentTheme = themes[theme]

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('textarea')?.focus();
        }, 300); // short delay helps on iOS
    }, []);


    return ReactDOM.createPortal(

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" style={{ pointerEvents: "auto" }}>
            <div className="rounded-lg border-[0.5vw] shadow-lg w-11/12 max-w-md p-5"
                style={{
                    backgroundColor: currentTheme.Calendar,
                    border: currentTheme.border,
                    color: currentTheme.text
                }}>
                <h1 className="text-xl text-center mb-4">What would you like to add?</h1>
                <div className="flex items-center mb-4">
                    <h1 className="text-xl">Name:</h1>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={(e) => {
                            e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className="border-[0.3vw] rounded-md border-zinc-700 bg-white px-3 mx-2"
                        placeholder="Name"
                    />
                </div>
                <div className="flex gap-3">
                    <Button
                        className="w-1/2 text-center text-xl"
                        onClick={onClose}
                        style={{
                            background: currentTheme.PopUpButtons,
                            color: currentTheme.text
                        }}
                    >
                        Close
                    </Button>

                    <Button
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