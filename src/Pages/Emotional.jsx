import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx';
import Selector from '../Components/Selector.tsx';
import '../App.css'

// Accessibility Settings for the page
import { useTheme } from '../Context/ThemeContext.tsx';
import { themes } from '../Styles/themes.js';
import { useHeadings } from '../Context/HeadingContext.tsx';
import { useSymptomWording } from '../Context/SymptomsWordingContext.tsx';

// Images for the page
import MoodSwings from '../assets/v2/Symptoms/moodSwings.svg'
import Concentration from '../assets/v2/Symptoms/concentration.svg'
import Anxiety from '../assets/v2/Symptoms/anxiety.svg'
import LowMoods from '../assets/v2/Symptoms/depression.svg'
import Abstinence from '../assets/v2/Symptoms/noSex.svg'
import Confusion from '../assets/v2/Symptoms/confused.svg'
import Default from '../assets/v2/default.png'
import Settings from '../assets/v2/settings.png'
import close from '../assets/v2/close.png'
import Plus from '../assets/v2/plus.png';


// Default symptoms 
const EmotionalSymptoms = [
    {
        id: 1, symptom: ["My mood changes quickly and randomly", "Mood Swings"], Icon: MoodSwings, question: ["How were your mood changes today?", "Mood Swings"]
    }, {
        id: 2, symptom: ["I cannot concentrate on things for a long time", "Lack of Concentration"], Icon: Concentration, question: ["How was your concentration?", "Concentration"]
    }, {
        id: 3, symptom: ["I am anxious", "Anxiety"], Icon: Anxiety, question: ["How was your anxiety?", "Anxiety"]
    }, {
        id: 4, symptom: ["I am having negative emotions", "Low Moods"], Icon: LowMoods, question: ["How were your low moods?", "Low moods"]
    }, {
        id: 5, symptom: ["I do not want to have sex", "Low Sex Drive"], Icon: Abstinence, question: ["How was your sex drive?", "Low Sex Drive"]
    }, {
        id: 6, symptom: ["I am confused", "Confusion"], Icon: Confusion, question: ["How was your confusion?", "Confusion"]
    },
]

// This page displays all emotional symptoms
function Emotional() {

    // Initates the list of emotional symptoms
    const [emotionalSymptoms, setEmotional] = useState(() => {
        const saved = localStorage.getItem("emotionalSymptoms");
        return saved ? JSON.parse(saved) : EmotionalSymptoms
    });

    const [showPopup, setShowPopup] = useState(false); // deals with whether the additional emotion pop up is open or not 
    const [showSettings, setShowSettings] = useState(false) // deals with whether the settings are shown
    const [input, setInput] = useState(""); // input for the name of the additional symptom
    const [input2, setInput2] = useState("") // input for the question of the additional symptom
    const navigate = useNavigate();

    // Deals with the accessibility first settings
    const { headings } = useHeadings();
    const { symptomWording, setSymptomWording } = useSymptomWording();
    const { theme } = useTheme();
    const currentTheme = themes[theme];


    // when user adds a new symptom it creates a new symptom and adds it to the list
    const handlePopUp = (title, question) => {
        const newSymptom = {
            id: emotionalSymptoms.length + 1,
            symptom: [title, title],
            Icon: Default,
            question: [question, question]

        };
        setEmotional([...emotionalSymptoms, newSymptom])
    }

    // When the emotional symptoms is updated it stores the symptoms in local storage
    useEffect(() => {
        localStorage.setItem("emotionalSymptoms", JSON.stringify(emotionalSymptoms))
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

                {/* if showSettings is true show the pop up with the accessibility first settings */}
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

                {/* Main div for the page with heading and symptoms*/}
                <div className="flex-col space-y-8">

                    {/* Depending on the headings settings the heading which renders is different */}
                    <h1 className="text-2xl text-center font-bold mb-10 mt-5"> {headings === "Questions" ? "Any problems with your feelings today?" : "Today's Emotional Symptoms"} </h1>

                    <div>
                        <div className="flex flex-col overflow-y-auto gap-y-5 mt-5">
                            {/* Goes through each of the items in the emotional symptoms array and adds a button for that symptom */}
                            {emotionalSymptoms.map(({ id, symptom, Icon, question }) => (
                                <Button key={id} className="flex items-center justify-center"
                                    style={{
                                        background: currentTheme.Emotional1,
                                        borderColor: currentTheme.border,
                                        color: currentTheme.text,
                                        outlineColor: currentTheme.border
                                    }} onClick={() => navigate("/severity", { state: { q: { question }, type: "E" } })}> {/* navigate to the severity  */}
                                    <img src={Icon} className="float-left w-[15%] h-auto " />
                                    {/* Wording for the symptom depends on what the setting is */}
                                    <p className="flex-1 font-bold text-xl text-center"> {symptomWording === "Descriptive" ? symptom[0] : symptom[1]} </p>

                                </Button>
                            ))}

                            {/* Button for the add additional symptom */}
                            <Button
                                style={{
                                    background: currentTheme.Emotional1,
                                    borderColor: currentTheme.border,
                                    color: currentTheme.text,
                                    outlineColor: currentTheme.border
                                }} onClick={() => setShowPopup(true)} // open the pop up when the button is clicked
                                className="flex justify-center items-center mb-5">
                                <img src={Plus} className="float-left w-[10%] h-auto mx-3" />
                                <h1 className="flex-1 text-xl text-center"> Add Additional Symptom </h1>
                            </Button>
                        </div>


                    </div>

                    {/* If pop up should be open shows the add additional symptom pop up */}
                    {showPopup && (<AdditionalPopUp
                        input={input}
                        setInput={setInput}
                        input2={input2}
                        setInput2={setInput2}
                        onClose={() => { setShowPopup(false); setInput("") }}
                        onConfirm={() => { handlePopUp(input, input2); setShowPopup(false); setInput("") }} />
                    )}

                </div>

            </Layout >
        </>
    )
}

export default Emotional
