import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import ReactDOM from "react-dom"

const AdditionalPopUp = ({ input, setInput, onClose, onConfirm }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('textarea')?.focus();
        }, 300); // short delay helps on iOS
    }, []);


    return ReactDOM.createPortal(

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" style={{ pointerEvents: "auto" }}>
            <div className="rounded-lg border-[0.5vw] border-zinc-700 bg-sky-100 shadow-lg w-11/12 max-w-md p-5 text-black">
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
                        className="w-1/2 bg-violet-200 text-black text-center text-xl"
                        onClick={onClose}
                    >
                        Close
                    </Button>

                    <Button
                        className="w-1/2 bg-violet-200 text-black text-center text-xl"
                        onClick={onConfirm}
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    );
}
export default AdditionalPopUp;