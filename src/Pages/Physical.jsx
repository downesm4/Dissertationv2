import { useState, useEffect } from 'react';
import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx';
import Selector from '../Components/Selector.tsx';
import '../App.css'

import { useNavigate } from 'react-router-dom';

// Icons 
import Headache from '../assets/v2/Symptoms/headache.svg'
import Tinnitus from '../assets/v2/Symptoms/tinnitus.svg'
import Joint from '../assets/v2/Symptoms/joint.svg'
import Breasts from '../assets/v2/Symptoms/pain.svg'
import HotFlushes from '../assets/v2/Symptoms/hotFlushes.svg'
import Fatigue from '../assets/v2/Symptoms/tired.svg'
import NightSweats from '../assets/v2/Symptoms/nightSweats.svg'
import Sleep from '../assets/v2/Symptoms/noSleep.svg'
import Vagina from '../assets/v2/Symptoms/privateParts.svg'
import Plus from '../assets/v2/plus.png';
import Default from '../assets/v2/default.png'
import Settings from '../assets/v2/settings.png'
import close from '../assets/v2/close.png'

// Accessibility First Setting States
import { useTheme } from '../Context/ThemeContext.tsx';
import { themes } from '../Styles/themes.js';
import { useHeadings } from '../Context/HeadingContext.tsx';
import { useSymptomWording } from '../Context/SymptomsWordingContext.tsx';

// Default Physical Symptoms 
const PhysicalSymptoms = [
    {
        id: 1, symptom: ["I feel tired", "Fatigue"], Icon: Fatigue, question: ["How tired were you?", "Fatigue"]
    }, {
        id: 2, symptom: ["Headache", "Headache"], Icon: Headache, question: ["How were your headaches?", "Headaches"]
    }, {
        id: 3, symptom: ["There is a ringing in my ear I cannot stop", "Tinnitus"], Icon: Tinnitus, question: ["How was the ringing in your ear?", "Tinnitus"]
    }, {
        id: 4, symptom: ["My boobs are sore", "Tender Breasts"], Icon: Breasts, question: ["How were your boobs?", "Breasts"]
    }, {
        id: 5, symptom: ["My body hurts", "Joint aches and pains"], Icon: Joint, question: ["How were your aches and pains in your body?", "Joint Pain"]
    }, {
        id: 7, symptom: ["I get hot very quickly in my face and body", "Hot Flushes"], Icon: HotFlushes, question: ["How were your hot flushes?", "Hot flushes"]
    }, {
        id: 8, symptom: ["Hot and Sweaty in my sleep", "Night Sweats"], Icon: NightSweats, question: ["How were your night sweats?", "Night Sweats"]
    }, {
        id: 9, symptom: ["I cannot sleep through the night", "Cannot Sleep"], Icon: Sleep, question: ["How did you sleep?", "Sleep"]
    }, {
        id: 10, symptom: ["My private parts are sore", "Painful Vagina"], Icon: Vagina, question: ["How were your private parts?", "Private Parts"]
    }
];

// this page lists all of the physical menopause symptoms
function Physical() {

    // Get the physical symptoms based on what is stored in local storage or default symptoms
    const [physicalSymptoms, setPhysical] = useState(() => {
        const saved = localStorage.getItem("physicalSymptoms");
        return saved ? JSON.parse(saved) : PhysicalSymptoms
    });

    const [showPopup, setShowPopup] = useState(false); // For additional symptom pop up 
    const [showSettings, setShowSettings] = useState(false); // For setting pop up 

    const [input, setInput] = useState(""); // Input for name of additional symptoms
    const [input2, setInput2] = useState(""); // Input for question of additional symptoms

    // Navigation and accessibility first settings
    const navigate = useNavigate();
    const { theme } = useTheme();
    const currentTheme = themes[theme];
    const { headings } = useHeadings();
    const { symptomWording, setSymptomWording } = useSymptomWording();


    // When new symptom is saved, create a new symptom and add it to the list of symptoms 
    const handlePopUp = (title, question) => {
        const newSymptom = {
            id: physicalSymptoms.length + 1,
            symptom: [title, title],
            Icon: Default,
            question: [question, question]

        };
        setPhysical([...physicalSymptoms, newSymptom])
    }

    // When a new symptom is added updated to local storage 
    useEffect(() => {
        localStorage.setItem("physicalSymptoms", JSON.stringify(physicalSymptoms))

    })

    return (
        <>
            <Layout allowBack={true} allowNav={false} >

                {/* Settings button */}
                <div className="flex float-right">
                    <button onClick={() => setShowSettings(true)}>
                        <img src={Settings} className="w-8 h-8" />
                    </button>
                </div>

                {/* Pop up for settings for wording */}
                {showSettings && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" style={{ pointerEvents: "auto" }}>
                        <div className="rounded-lg border-[0.5vw] shadow-lg w-11/12 max-w-md p-3"
                            style={{
                                backgroundColor: currentTheme.Calendar,
                                border: currentTheme.border,
                                color: currentTheme.text
                            }}>

                            <button onClick={() => setShowSettings(false)} className="flex">
                                <img src={close} className="w-4 h-4 float-left mb-2" />
                            </button>
                            <div className="flex flex-col gap-y-3">
                                <div className="border rounded-lg" style={{ borderColor: currentTheme.border }}>
                                    <h1 className="text-xl text-center mb-4 mx-3"> Do you want descriptive or abstract wording? </h1>
                                    <Selector className="mx-3" options={['Descriptive', 'Abstract']} def={symptomWording} onChange={(newSymptomWording) => setSymptomWording(newSymptomWording)} > </Selector>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex-col space-y-8">

                    <h1 className="text-2xl text-center font-bold mb-10 mt-5"> {headings === "Questions" ? "Any problems with your body today?" : "Today's Physical Symptoms"} </h1>

                    <div>
                        <div className="flex flex-col overflow-y-auto gap-y-5 mt-5">
                            {/* put buttons for each of the symptoms on the screen and navigate to severity with the question and symptom type */}
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
                                    <p className="flex-1 font-bold text-xl text-center"> {symptomWording === "Descriptive" ? symptom[0] : symptom[1]} </p>

                                </Button>
                            ))}

                            {/* Button for the additional symptom  pop up */}
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

                        {/* Show the pop up when required */}
                        {showPopup && (<AdditionalPopUp
                            input={input}
                            setInput={setInput}
                            input2={input2}
                            setInput2={setInput2}
                            onClose={() => { setShowPopup(false); setInput("") }}
                            onConfirm={() => { handlePopUp(input, input2); setShowPopup(false); setInput("") }} />
                        )}
                    </div>
                </div>
            </Layout >
        </>
    )
}

export default Physical
