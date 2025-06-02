import { useState } from 'react';

import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx';
import '../App.css'

import { useNavigate } from 'react-router-dom';

import Headache from '../assets/v2/Symptoms/headache.svg'
import Tinnitus from '../assets/v2/Symptoms/tinnitus.svg'
import Joint from '../assets/v2/Symptoms/joint.svg'
import Breasts from '../assets/v2/Symptoms/pain.svg'
import HotFlushes from '../assets/v2/Symptoms/hotFlushes.svg'
import Fatigue from '../assets/v2/Symptoms/tired.svg'
import NightSweats from '../assets/v2/Symptoms/nightSweats.svg'
import Sleep from '../assets/v2/Symptoms/noSleep.svg'
import Vagina from '../assets/v2/Symptoms/privateParts.svg'
import Plus from '../assets/plus.png';
import Default from '../assets/default.png'


const PhysicalSymptoms = [
    {
        id: 1, symptom: "Fatigue", Icon: Fatigue, question: ["How tired were you?", "Fatigue"]
    }, {
        id: 2, symptom: "Headache", Icon: Headache, question: ["How was the headaches?", "Headaches"]
    }, {
        id: 3, symptom: "Tinnitus", Icon: Tinnitus, question: ["How was the ringing in your ear?", "Tinnitus"]
    }, {
        id: 4, symptom: "Tender Breasts", Icon: Breasts, question: ["How were your boobs?", "Breasts"]
    }, {
        id: 5, symptom: "Joint aches and pains", Icon: Joint, question: ["How were your joint aches and pains?", "Joint Pain"]
    }, {
        id: 7, symptom: "Hot Flushes", Icon: HotFlushes, question: ["How were the hot flushes?", "Hot flushes"]
    }, {
        id: 8, symptom: "Night Sweats", Icon: NightSweats, question: ["How were the night sweats?", "Night Sweats"]
    }, {
        id: 9, symptom: "Cannot Sleep", Icon: Sleep, question: ["How was your sleep?", "Sleep"]
    }, {
        id: 10, symptom: "Painful Vagina", Icon: Vagina, question: ["How were your private parts?", "Private Parts"]
    }
];

import { useTheme } from '../Context/ThemeContext.tsx';
import { themes } from '../Styles/themes.js';
import { useHeadings } from '../Context/HeadingContext.tsx';
function Physical() {

    const [physicalSymptoms, setPhysical] = useState(PhysicalSymptoms);
    const [showPopup, setShowPopup] = useState(false);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const { theme } = useTheme();
    const currentTheme = themes[theme];

    const { headings } = useHeadings();


    const handlePopUp = (title) => {
        const newSymptom = {
            id: physicalSymptoms.length + 1,
            symptom: title,
            Icon: Default
        };
        setPhysical([...physicalSymptoms, newSymptom])
    }

    return (
        <>
            <Layout allowBack={true} allowNav={false} >

                <div className="flex-col space-y-8">

                    <h1 className="text-2xl text-center font-bold mb-10 mt-5"> {headings === "Questions" ? "Any problems with your body today?" : "Today's Physical Symptoms"} </h1>

                    <div>
                        <div className="flex flex-col overflow-y-auto gap-y-5 mt-5">
                            {physicalSymptoms.map(({ id, symptom, Icon, question }) => (
                                <Button key={id}
                                    style={{
                                        background: currentTheme.Symptom1,
                                        borderColor: currentTheme.border,
                                        color: currentTheme.text,
                                        outlineColor: currentTheme.border
                                    }}
                                    className="flex items-center justify-center"
                                    onClick={() => navigate("/severity", { state: { q: { question }, type: "P" } })}>
                                    <img src={Icon} className="float-left w-[15%] h-auto " />
                                    <p className="flex-1 text-xl text-center"> {symptom} </p>

                                </Button>
                            ))}

                            <Button
                                style={{
                                    background: currentTheme.Symptom1,
                                    borderColor: currentTheme.border,
                                    color: currentTheme.text,
                                    outlineColor: currentTheme.border
                                }}
                                onClick={() => setShowPopup(true)} className="flex justify-center items-center mb-5">
                                <img src={Plus} className="float-left w-[10%] h-auto mx-3" />
                                <h1 className="flex-1 text-xl text-center"> Add Additional Symptom </h1>
                            </Button>

                        </div>


                        {showPopup && (<AdditionalPopUp
                            input={input}
                            setInput={setInput}
                            onClose={() => { setShowPopup(false); setInput("") }}
                            onConfirm={() => { handlePopUp(input); setShowPopup(false); setInput("") }} />
                        )}
                    </div>



                </div>

            </Layout >
        </>
    )
}

export default Physical
