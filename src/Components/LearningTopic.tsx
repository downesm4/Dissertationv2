import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeft, ChevronRight } from "lucide-react"

const Topic = ({ title, children, className }) => {

    const scrollRef = useRef<HTMLDivElement>(null);
    const [start, setStart] = useState(true)




    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const child = container.children[index];

        if (child) {
            child.scrollIntoView({ behavior: "smooth", inline: "start" });
        }

        setStart(!start)
    };

    return (
        <div className={twMerge("", className)}>
            <h1 className="text-3xl font-bold font-serif text-red-950 text-left"> {title} </h1>

            <div className="relative">
                <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth">
                    {children}
                </div>


                {start === true &&
                    <button
                        onClick={() => scrollToIndex(2)}
                        className=" absolute z-50 top-10 right-5 float-right flex items-center justify-center h-10 w-10 bg-rose-50 border border-pink-500 rounded-full">
                        <ChevronRight className=" w-10 h-10 text-red-950" />
                    </button>
                }

                {start === false &&
                    <button
                        onClick={() => scrollToIndex(0)}
                        className=" absolute z-50 top-10 left-5 float-right flex items-center justify-center h-10 w-10 bg-rose-50 border border-pink-500 rounded-full">
                        <ChevronLeft className=" w-10 h-10 text-red-950" />
                    </button>
                }

            </div>

        </div>

    );
}
export default Topic;