import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx'
import Selector from '../Components/Selector.tsx'
import '../App.css'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

// icons
import Cramps from "../assets/v2/Symptoms/cramps.svg";
import Headache from "../assets/v2/Symptoms/headache.svg";
import Joint from "../assets/v2/Symptoms/joint.svg";
import Breasts from "../assets/v2/Symptoms/pain.svg";
import Acne from "../assets/v2/Symptoms/acne.svg";
import Fatigue from "../assets/v2/Symptoms/tired.svg";
import Sweet from "../assets/v2/Symptoms/sweets.svg";
import Salty from "../assets/v2/Symptoms/salty.svg";
import BackPain from "../assets/v2/Symptoms/backPain.svg";
import Diarrhea from "../assets/v2/Symptoms/diarrhea.svg";
import Constipation from "../assets/v2/Symptoms/constipation.svg";
import Nausea from "../assets/v2/Symptoms/nausea.svg";
import Vomit from "../assets/v2/Symptoms/vomit.svg";
import Plus from '../assets/plus.png';
import Default from '../assets/default.png'
import Settings from '../assets/v2/settings.png'
import close from '../assets/v2/close.png'

// Initial symptoms for the page 
const initialSymptoms = [
    {
        id: 1, symptom: ["Headache", "Headache"], Icon: Headache, question: ["How were your headaches?", "Headaches"]
    }, {
        id: 2, symptom: ["Cramps in my tummy", "Cramps"], Icon: Cramps, question: ["How was the cramp pain?", "Cramps"]
    }, {
        id: 3, symptom: ["My body hurts", "Joint aches and pains"], Icon: Joint, question: ["How was your body pain?", "Joint Pain"]
    }, {
        id: 4, symptom: ["Boobs are sore", "Tender Breasts"], Icon: Breasts, question: ["How were your boobs?", "Breasts"]
    }, {
        id: 5, symptom: ["Spots on my face and body", "Acne"], Icon: Acne, question: ["How was the spots on your face and body?", "Acne"]
    }, {
        id: 6, symptom: ["I feel tired", "Fatigue"], Icon: Fatigue, question: ["How tired were you?", "Fatigue"]
    }, {
        id: 7, symptom: ["I want more sweet food", "Sweet Cravings"], Icon: Sweet, question: ["How were your sweet cravings?", "Sweet cravings"]
    }, {
        id: 8, symptom: ["I want more salty food", "Salty Cravings"], Icon: Salty, question: ["How were your salty cravings?", "Salty Cravings"]
    }, {
        id: 9, symptom: ["Pain in my back", "Back Pain"], Icon: BackPain, question: ["How was your back pain?", "Back pain"]
    }, {
        id: 10, symptom: ["Poop is loose", "Diarrhea"], Icon: Diarrhea, question: ["How loose was your poop?", "Diarrhea"]
    }, {
        id: 11, symptom: ["Pooping is hard", "Constipation"], Icon: Constipation, question: ["How hard was pooping?", "Constipation"]
    }, {
        id: 12, symptom: ["I felt sick", "Nausea"], Icon: Nausea, question: ["How sick did you feel?", "Nausea"]
    }, {
        id: 13, symptom: ["I was sick", "Vomited"], Icon: Vomit, question: ["How was the throwing up?", "Threw Up"]
    }
];

// Accessibility first settings
import { useTheme } from '../Context/ThemeContext.tsx';
import { themes } from '../Styles/themes.js';
import { useHeadings } from '../Context/HeadingContext.tsx';
import { useSymptomWording } from '../Context/SymptomsWordingContext.tsx';


// This page lists all of the menstruation symptoms
function Symptoms() {

    const [showSettings, setShowSettings] = useState(false) // whether the settings pop up should show

    // initial symptoms and allows for the symptoms to change 
    const [symptoms, setSymptoms] = useState(() => {
        const saved = localStorage.getItem("symptoms");
        return saved ? JSON.parse(saved) : initialSymptoms
    });

    const [showPopup, setShowPopup] = useState(false); // whether the additional symptoms pop up shows

    const [input, setInput] = useState(""); // input for name with additional symptoms
    const [input2, setInput2] = useState(""); // input for question with additional symptoms

    // navigate and accessibility first settings
    const navigate = useNavigate();
    const { headings } = useHeadings();
    const { symptomWording, setSymptomWording } = useSymptomWording();
    const { theme } = useTheme()
    const currentTheme = themes[theme]

    // deals with the inputs from the additional pop up screen
    // Creates a new symptom and adds it to the symptoms list 
    const handlePopUp = (title, question) => {
        const newSymptom = {
            id: symptoms.length + 1,
            symptom: [title, title],
            Icon: Default,
            question: [question, question]

        };
        setSymptoms([...symptoms, newSymptom])
    }

    // updates the stores list of symptoms when a new symptom is added
    useEffect(() => {
        localStorage.setItem("symptoms", JSON.stringify(symptoms))
    })

    return (
        <Layout allowBack={true} allowNav={false} >

            {/* settings button  */}
            <div className="absolute top-13 right-13 z-50">
                <button onClick={() => setShowSettings(true)}>
                    <img src={Settings} className="w-8 h-8" />
                </button>
            </div>

            {/* Pop Up for settings shows when showSettings is true */}
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

            {/* Heading dependig on the settings */}
            <h1 className="text-2xl text-center font-bold mb-10 mt-5"> {headings === "Questions" ? "Any problems today?" : "Today's Symptoms"} </h1>

            <div className="flex-col space-y-8 mb-10">

                <div className="flex flex-col mt-5 gap-y-5 ">
                    {/* Add the symptoms and put each one on a button which navigates to the severity page and passes the question and type of symptom */}
                    {symptoms.map(({ id, symptom, Icon, question }) => (
                        <Button key={id} className=" flex items-center justify-center"
                            style={{
                                background: currentTheme.Symptom1,
                                borderColor: currentTheme.border,
                                color: currentTheme.text,
                                outlineColor: currentTheme.border
                            }}
                            onClick={() => navigate("/severity", { state: { q: { question }, type: "P" } })}>
                            <img src={Icon} className="float-left w-[15%] h-auto " />
                            <p className="flex-1 text-xl font-bold text-center"> {symptomWording === "Descriptive" ? symptom[0] : symptom[1]} </p> {/* type of wording depends on settings*/}

                        </Button>
                    ))}

                    {/* additional symptom button */}
                    <Button
                        style={{
                            background: currentTheme.Symptom1,
                            borderColor: currentTheme.border,
                            color: currentTheme.text,
                        }}
                        onClick={() => setShowPopup(true)} className="flex justify-center items-center mb-5">
                        <img src={Plus} className="float-left w-[10%] h-auto mx-3" />
                        <h1 className="flex-1 text-xl text-center"> Add Additional Symptom </h1>
                    </Button>

                </div>

                {/* When the showPopUp is true show the additional pop up and take input which when confirm is clicked handle the input */}
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
    )
}

export default Symptoms
