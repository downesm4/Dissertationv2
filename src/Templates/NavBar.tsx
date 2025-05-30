import React, { useState } from 'react';
import Menstruation from '../assets/v2/Navigation/menstruation.svg';
import Menopause from '../assets/v2/Navigation/menopause.svg';
import History from '../assets/v2/Navigation/rewind.svg';
import Learning from '../assets/v2/Navigation/learning.svg';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
    current: string
}

export default function NavBar({ current }: NavBarProps) {

    const [selected, setSelected] = useState<string>(current)
    const navigate = useNavigate()

    return (
        <div className="flex w-full border-t border-zinc-700">

            <button
                className={twMerge(`flex flex-col items-center justify-center border-r w-[25%] border-zinc-700 py-3`,
                    selected === "menstruation" ? "bg-orange-200 inset-shadow-sm inset-shadow-orange-300" : "bg-white")}
                onClick={() => { setSelected("menstruation"); navigate('/') }}> {/*Styling for when a button is clicked */}
                <img src={Menstruation} className='w-[40%] h-auto' />
                <p className="mb-2"> Periods</p>
            </button>


            <button
                className={twMerge(`flex flex-col items-center justify-center border-r w-[25%] border-zinc-700 py-3`,
                    selected === "menopause" ? "bg-orange-200 inset-shadow-sm inset-shadow-orange-300" : "bg-white")}
                onClick={() => { setSelected("menopause"); navigate('/menopause') }}>
                <img src={Menopause} className='w-[40%] h-auto' />
                <p className="mb-2"> Menopause </p>
            </button>


            <button
                className={twMerge(`flex flex-col items-center justify-center border-r w-[25%] border-zinc-700 py-3`,
                    selected === "history" ? "bg-orange-200 inset-shadow-sm inset-shadow-orange-300" : "bg-white")}
                onClick={() => { setSelected("history"); navigate('/history') }}>
                <img src={History} className='w-[40%] h-auto' />
                <p className="mb-2"> History </p>
            </button>


            <button
                className={twMerge(`flex flex-col items-center justify-center border-r w-[25%] border-zinc-700 py-3`,
                    selected === "learning" ? "bg-orange-200 inset-shadow-sm inset-shadow-orange-300" : "bg-white")}
                onClick={() => { setSelected("learning"); navigate('/topic') }}>
                <img src={Learning} className='w-[40%] h-auto' />
                <p className="mb-2"> Learning</p>
            </button>
        </div>
    )
}
