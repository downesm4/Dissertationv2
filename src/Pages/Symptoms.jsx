import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx'
import '../App.css'
import { useState } from "react";

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
import Popup from "reactjs-popup";
import { useNavigate } from 'react-router-dom';


const initialSymptoms = [
    {
        id: 1, symptom: "Headache", Icon: Headache, question: ["How were the headaches?", "Headaches"]
    }, {
        id: 2, symptom: "Cramps", Icon: Cramps, question: ["How were the cramps?", "Cramps"]
    }, {
        id: 3, symptom: "Joint aches and pains", Icon: Joint, question: ["How were the joint aches and pains?", "Joint Pain"]
    }, {
        id: 4, symptom: "Tender Breasts", Icon: Breasts, question: ["How were your boobs?", "Breasts"]
    }, {
        id: 5, symptom: "Acne", Icon: Acne, question: ["How was the acne?", "Acne"]
    }, {
        id: 6, symptom: "Fatigue", Icon: Fatigue, question: ["How tired were you?", "Fatigue"]
    }, {
        id: 7, symptom: "Sweet Cravings", Icon: Sweet, question: ["How were the sweet cravings?", "Sweet cravings"]
    }, {
        id: 8, symptom: "Salty Cravings", Icon: Salty, question: ["How were the salty cravings?", "Salty Cravings"]
    }, {
        id: 9, symptom: "Back Pain", Icon: BackPain, question: ["How was the back pain?", "Back pain"]
    }, {
        id: 10, symptom: "Diarrhea", Icon: Diarrhea, question: ["How was the diarrhea?", "Diarrhea"]
    }, {
        id: 11, symptom: "Constipation", Icon: Constipation, question: ["How was the constipation?", "Constipation"]
    }, {
        id: 12, symptom: "Nausea", Icon: Nausea, question: ["How was the nausea?", "Nausea"]
    }, {
        id: 13, symptom: "Vomited", Icon: Vomit, question: ["How was the throwing up?", "Threw Up"]
    }
];

import { useTheme } from '../Context/ThemeContext.tsx';
import { themes } from '../Styles/themes.js';
import { useHeadings } from '../Context/HeadingContext.tsx';



function Symptoms() {

    const [symptoms, setSymptoms] = useState(initialSymptoms);
    const [showPopup, setShowPopup] = useState(false);
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const { headings } = useHeadings();

    const { theme } = useTheme()
    const currentTheme = themes[theme]

    const handlePopUp = (title) => {
        const newSymptom = {
            id: symptoms.length + 1,
            symptom: title,
            Icon: Default
        };
        setSymptoms([...symptoms, newSymptom])
    }

    return (
        <Layout allowBack={true} allowNav={false} >

            <h1 className="text-2xl text-center font-bold mb-10 mt-5"> {headings === "Questions" ? "Any problems today?" : "Today's Symptoms"} </h1>


            <div className="flex-col space-y-8 mb-10">

                <div className="flex flex-col mt-5 gap-y-5 overflow-y-auto ">
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
                            <p className="flex-1 text-xl text-center"> {symptom} </p>

                        </Button>
                    ))}


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

                {showPopup && (<AdditionalPopUp
                    input={input}
                    setInput={setInput}
                    onClose={() => { setShowPopup(false); setInput("") }}
                    onConfirm={() => { handlePopUp(input); setShowPopup(false); setInput("") }} />
                )}

            </div>

        </Layout >
    )
}

export default Symptoms
