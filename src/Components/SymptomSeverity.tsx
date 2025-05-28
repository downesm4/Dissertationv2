import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadacheSeverityProps {
    title?: string
}


export default function SymptomSeverity({ title, Icon }) {

    const [selected, setSelected] = useState<number | null>(null)

    return (<div className="">

        <div className="flex items-center justify-between">


            <div className="float-left flex items-center">
                <img src={Icon} className="w-[20%] h-auto p-3" />
                <h1 className="text-lg text-red-950"> {title} </h1>
            </div>

            <div className="flex gap-x-2">

                {[1, 2, 3].map((severity) => (
                    <button
                        key={severity}
                        onClick={() => {
                            setSelected(prev => (prev === severity ? null : severity));
                        }}
                        className={twMerge(
                            "w-8 h-8 border-[0.3vw] border-red-950",
                            selected !== null && severity <= selected
                                ? "bg-rose-300"
                                : "bg-rose-100"
                        )}
                    />
                ))}

            </div>

        </div>


    </div>)

}