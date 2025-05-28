import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const Additional = ({ onAddSymptom, onClose }) => {

    const [input, setInput] = useState('')

    const handleSubmit = () => {

        if (input.trim() !== "") {
            onAddSymptom(input)
        }
    }


    return (



        <div className='rounded-lg border-[0.5vw] border-pink-500 bg-rose-100 shadow-md/60 flex-col items-center justify-center m-10 py-5 text-red-950 '>
            <h1 className="text-center text-xl "> What would you like to add?</h1>

            <div className="flex p-3">
                <h1 className="text-xl"> Name: </h1>

                <textarea className="border-[0.3vw] rounded-md border-red-950 bg-white px-3 mx-2" value={input} onChange={(e) => setInput(e.target.value)} rows={1} placeholder="Name"> </textarea>
            </div>

            <div className="flex px-3 gap-x-3">
                <Button onClick={onClose} className="flex items-center justify-center w-[50%] text-red-950 text-xl mx-auto my-3" > Close </Button>
                <Button onClick={handleSubmit} className=" bg-rose-200 flex items-center justify-center w-[50%] text-red-950 text-xl mx-auto my-3" > Confirm </Button>

            </div>


        </div >

    );
}
export default Additional;