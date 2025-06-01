import React, { useState } from 'react';
import Menstruation from '../assets/v2/Navigation/menstruation.svg';
import Menopause from '../assets/v2/Navigation/menopause.svg';
import History from '../assets/v2/Navigation/rewind.svg';
import Learning from '../assets/v2/Navigation/learning.svg';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '../Context/ThemeContext';
import { themes } from '../Styles/themes';

interface NavBarProps {
    current: string
}

export default function NavBar({ current }: NavBarProps) {

    const [selected, setSelected] = useState<string>(current)
    const navigate = useNavigate()
    const { theme } = useTheme()
    const currentTheme = themes[theme]

    return (
        <div className="flex w-full border "
            style={{ borderColor: currentTheme.border }}>

            <button
                className='flex flex-col items-center justify-center border-r w-[25%] py-3'
                style={{
                    borderColor: currentTheme.border,
                    background: selected === 'menstruation' ? currentTheme.NavSelected : currentTheme.NavBar,
                    boxShadow: selected === 'menstruation' ? `inset 0 2px 4px  ${currentTheme.NavShadow}` : ""
                }}
                onClick={() => { setSelected("menstruation"); navigate('/') }}> {/*Styling for when a button is clicked */}
                <img src={Menstruation} className='w-[40%] h-auto' />
                <p className="mb-2"> Periods</p>
            </button>


            <button
                className='flex flex-col items-center justify-center border-r w-[25%] border-zinc-700 py-3'
                style={{
                    borderColor: currentTheme.border,
                    background: selected === 'menopause' ? currentTheme.NavSelected : currentTheme.NavBar,
                    boxShadow: selected === 'menopause' ? `inset 0 2px 4px  ${currentTheme.NavShadow}` : ""
                }}
                onClick={() => { setSelected("menopause"); navigate('/menopause') }}>
                <img src={Menopause} className='w-[40%] h-auto' />
                <p className="mb-2"> Menopause </p>
            </button>


            <button
                className='flex flex-col items-center justify-center border-r w-[25%] border-zinc-700 py-3'
                style={{
                    borderColor: currentTheme.border,
                    background: selected === 'history' ? currentTheme.NavSelected : currentTheme.NavBar,
                    boxShadow: selected === 'history' ? `inset 0 2px 4px  ${currentTheme.NavShadow}` : ""
                }}
                onClick={() => { setSelected("history"); navigate('/history') }}>
                <img src={History} className='w-[40%] h-auto' />
                <p className="mb-2"> History </p>
            </button>


            <button
                className='flex flex-col items-center justify-center border-r w-[25%] border-zinc-700 py-3'
                style={{
                    borderColor: currentTheme.border,
                    background: selected === 'learning' ? currentTheme.NavSelected : currentTheme.NavBar,
                    boxShadow: selected === 'learning' ? `inset 0 2px 4px  ${currentTheme.NavShadow}` : ""
                }}
                onClick={() => { setSelected("learning"); navigate('/topic') }}>
                <img src={Learning} className='w-[40%] h-auto' />
                <p className="mb-2"> Learning</p>
            </button>
        </div>
    )
}
