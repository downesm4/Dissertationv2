import React, { useState } from 'react';
import Menstruation from '../assets/Navigation/menstruation-cycle.png';
import Menopause from '../assets/Navigation/menopause.png';
import History from '../assets/Navigation/history.png';
import Learning from '../assets/Navigation/idea.png';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
    current: string
}

export default function NavBar({ current }: NavBarProps) {

    const [selected, setSelected] = useState<string>(current)
    const navigate = useNavigate()

    return (
        <div className="flex w-full border-t border-pink-400">

            <button
                className={twMerge(`flex flex-1 items-center justify-center border-r border-pink-400 py-6`,
                    selected === "menstruation" ? "bg-red-300 inset-shadow-sm inset-shadow-red-400" : "bg-rose-50")}
                onClick={() => { setSelected("menstruation"); navigate('/') }}> {/*Styling for when a button is clicked */}
                <img src={Menstruation} className='w-[40%] h-auto' />
            </button>


            <button
                className={twMerge(`flex flex-1 items-center justify-center border-r border-pink-400 py-6`,
                    selected === "menopause" ? "bg-red-300 inset-shadow-sm inset-shadow-red-400" : "bg-rose-50")}
                onClick={() => { setSelected("menopause"); navigate('/menopause') }}>
                <img src={Menopause} className='w-[40%] h-auto' />
            </button>


            <button
                className={twMerge(`flex flex-1 items-center justify-center border-r border-pink-400 py-6`,
                    selected === "history" ? "bg-red-300 inset-shadow-sm inset-shadow-red-400" : "bg-rose-50")}
                onClick={() => { setSelected("history"); navigate('/history') }}>
                <img src={History} className='w-[40%] h-auto' />
            </button>


            <button
                className={twMerge(`flex flex-1 items-center justify-center border-r border-pink-400 py-6`,
                    selected === "learning" ? "bg-red-300 inset-shadow-sm inset-shadow-red-400" : "bg-rose-50")}
                onClick={() => { setSelected("learning"); navigate('/learning') }}>
                <img src={Learning} className='w-[40%] h-auto' />
            </button>
        </div>
    )
}
