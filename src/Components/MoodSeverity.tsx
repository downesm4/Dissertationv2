import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function MoodSeverity({ title, Icon }) {

    const [selected, setSelected] = useState<number | null>(null)

    return (<div className="">

        <div className="flex">
            <div className="float-left flex items-center">
                <img src={Icon} className="w-[30%] h-auto p-3" />
                <h1 className="text-lg font-medium text-"> {title} </h1>
            </div>
            <div className="flex">

                {[1, 2, 3, 4, 5].map((severity) => (
                    <div className="flex items-center">
                        <button key={severity}
                            onClick={() => {
                                setSelected(severity)
                            }}
                            className={twMerge("w-6 h-6 border-[0.5vw] border-pink-500 rounded-full ",
                                selected === severity ? "bg-rose-200" : "bg-transparent",
                                selected !== null && severity <= selected
                                    ? "bg-rose-200"
                                    : "bg-rose-50")}
                        />
                        {severity < 5 && <div className="w-3 h-0.5 bg-pink-500" />}

                    </div>
                ))}

            </div>

        </div>


    </div>)

}