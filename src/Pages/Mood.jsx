import Layout from '../Templates/MobileLayout.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx'
import '../App.css'
import { useState } from 'react'

import Happy3 from '../assets/v2/Moods/happy3.png';
import Happy2 from '../assets/v2/Moods/happy2.png';
import Happy1 from '../assets/v2/Moods/happy1.png';

import Sad3 from '../assets/v2/Moods/sad3.png';
import Sad2 from '../assets/v2/Moods/sad2.png';
import Sad1 from '../assets/v2/Moods/sad1.png';

import Angry3 from '../assets/v2/Moods/angry3.png';
import Angry2 from '../assets/v2/Moods/angry2.png';
import Angry1 from '../assets/v2/Moods/angry1.png';

import Excited3 from '../assets/v2/Moods/excited3.png';
import Excited2 from '../assets/v2/Moods/excited2.png';
import Excited1 from '../assets/v2/Moods/excited1.png';

import Scared3 from '../assets/v2/Moods/scared3.png';
import Scared2 from '../assets/v2/Moods/scared2.png';
import Scared1 from '../assets/v2/Moods/scared1.png';

import Lonely3 from '../assets/v2/Moods/lonely3.png';
import Lonely2 from '../assets/v2/Moods/lonely2.png';
import Lonely1 from '../assets/v2/Moods/lonely1.png';

import Surprised3 from '../assets/v2/Moods/suprised3.png';
import Surprised2 from '../assets/v2/Moods/surprised2.png';
import Surprised1 from '../assets/v2/Moods/surprised1.png';


import Other from '../assets/v2/other.png';
import Default from '../assets/default.png'
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';

const defaultMoods = [
    {
        id: 1, emotion: "Happy", question: "How happy were you?", IC: Happy3
    }, {
        id: 2, emotion: "Sad", question: "How sad were you?", IC: Sad3
    }, {
        id: 3, emotion: "Angry", question: "How angry were you?", IC: Angry3
    }, {
        id: 4, emotion: "Excited", question: "How excited were you?", IC: Excited3
    }, {
        id: 5, emotion: "Scared", question: "How scared were you?", IC: Scared3
    }, {
        id: 6, emotion: "Lonely", question: "How lonely were you?", IC: Lonely3
    }, {
        id: 7, emotion: "Surprised", question: "How surprised were you?", IC: Surprised3
    }
];

function Mood() {

    const [moods, setMoods] = useState(defaultMoods);
    const [showPopup, setShowPopup] = useState(false);
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const handlePopUp = (title) => {
        const newMood = {
            id: moods.length + 1,
            emotion: title,
            Icon: Default
        };
        setMoods([...moods, newMood])
    }

    return (
        <>
            <Layout allowBack={true} allowNav={false} title={"Today's Mood"}>

                <div className="flex-col space-y-8">

                    <h1 className="text-xl text-center mb-10"> How are you feeling? </h1>

                    <div className="mt-5 grid grid-cols-3 gap-y-6 gap-x-3 ">
                        {moods.map(({ id, emotion, question, IC }) => (
                            <div key={id}
                                onClick={() => navigate("/mseverity", { state: { q: { question }, id: { id } } })}
                                className="col-span-1 flex flex-col items-center justify-center bg-amber-200 border border-zinc-700 rounded-lg">
                                <img src={IC} className='p-1 w-[70%] h-auto' />
                                <p className="text-lg text-center font-bold "> {emotion} </p>
                            </div>
                        ))}

                        <div key={9} onClick={() => setShowPopup(true)}
                            className={twMerge("col-span-1 flex flex-col items-center justify-center bg-amber-200 border border-zinc-700 rounded-lg")}>
                            <img src={Other} className='p-1 w-[80%] h-auto' />
                            <p className="text-lg text-center font-bold "> Other </p>
                        </div>


                    </div>

                    {showPopup && (<AdditionalPopUp
                        input={input}
                        setInput={setInput}
                        onClose={() => { setShowPopup(false); setInput("") }}
                        onConfirm={() => { handlePopUp(input); setShowPopup(false); setInput("") }} />
                    )}

                </div>

            </Layout >
        </>
    )
}

export default Mood
