import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx';
import '../App.css'

import Plus from '../assets/plus.png';

import { useTheme } from '../Context/ThemeContext.tsx';
import { themes } from '../Styles/themes.js';

import MoodSwings from '../assets/v2/Symptoms/moodSwings.svg'
import Concentration from '../assets/v2/Symptoms/concentration.svg'
import Anxiety from '../assets/v2/Symptoms/anxiety.svg'
import LowMoods from '../assets/v2/Symptoms/depression.svg'
import Abstinence from '../assets/v2/Symptoms/noSex.svg'
import Confusion from '../assets/v2/Symptoms/confused.svg'
import Default from '../assets/default.png'


const EmotionalSymptoms = [
    {
        id: 1, symptom: "Mood Swings", Icon: MoodSwings, question: "How were the mood swings?"
    }, {
        id: 2, symptom: "Lack of Concentration", Icon: Concentration, question: "How was your concentration?"
    }, {
        id: 3, symptom: "Anxiety", Icon: Anxiety, question: "How was your anxiety?"
    }, {
        id: 4, symptom: "Low Moods", Icon: LowMoods, question: "How were the low moods?"
    }, {
        id: 5, symptom: "Low Sex Drive", Icon: Abstinence, question: "How was your sex drive?"
    }, {
        id: 6, symptom: "Confusion", Icon: Confusion, question: "How was the confusion?"
    },
]

function Emotional() {

    const [emotionalSymptoms, setEmotional] = useState(EmotionalSymptoms);
    const [showPopup, setShowPopup] = useState(false)
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const { theme } = useTheme()
    const currentTheme = themes[theme]

    const handlePopUp = (title) => {
        const newSymptom = {
            id: emotionalSymptoms.length + 1,
            symptom: title,
            Icon: Default
        };
        setEmotional([...emotionalSymptoms, newSymptom])
    }



    return (
        <>
            <Layout allowBack={true} allowNav={false} title={"Today's Symptoms"}>

                <div className="flex-col space-y-8">

                    <div>
                        <div className="flex flex-col overflow-y-auto gap-y-5 mt-5">
                            {emotionalSymptoms.map(({ id, symptom, Icon, question }) => (
                                <Button key={id} className="flex items-center justify-center"
                                    style={{
                                        background: currentTheme.Emotional1,
                                        borderColor: currentTheme.border,
                                        color: currentTheme.text,
                                        outlineColor: currentTheme.border
                                    }} onClick={() => navigate("/severity", { state: { q: { question }, type: "E" } })}>
                                    <img src={Icon} className="float-left w-[15%] h-auto " />
                                    <p className="flex-1 text-xl text-center"> {symptom} </p>

                                </Button>
                            ))}

                            <Button
                                style={{
                                    background: currentTheme.Emotional1,
                                    borderColor: currentTheme.border,
                                    color: currentTheme.text,
                                    outlineColor: currentTheme.border
                                }} onClick={() => setShowPopup(true)} className="flex justify-center items-center mb-5">
                                <img src={Plus} className="float-left w-[10%] h-auto mx-3" />
                                <h1 className="flex-1 text-xl text-center"> Add Additional Symptom </h1>
                            </Button>
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

export default Emotional
