import SymptomSeverity from "../Components/SymptomSeverity";
import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import TextInput from '../Components/TextInput.tsx'
import ConfirmButton from '../Components/ConfirmButton.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx'
import '../App.css'
import { useState } from "react";

import Headache from '../assets/Symptoms/headache.png'
import Cramps from '../assets/Symptoms/cramps.png'
import Joint from '../assets/Symptoms/joint.png'
import Breasts from '../assets/Symptoms/breasts.png'
import Acne from '../assets/Symptoms/acne.png'
import Fatigue from '../assets/Symptoms/fatigue.png'
import Sweet from '../assets/Symptoms/sweets.png'
import Salty from '../assets/Symptoms/salt.png'
import BackPain from '../assets/Symptoms/backpain.png'
import Diarrhea from '../assets/Symptoms/diarrhea.png'
import Constipation from '../assets/Symptoms/constipation.png'
import Nausea from '../assets/Symptoms/nausea.png'
import Vomit from '../assets/Symptoms/vomit.png'
import Plus from '../assets/plus.png';
import Default from '../assets/default.png'
import Popup from "reactjs-popup";


const initialSymptoms = [
    {
        id: 1, symptom: "Headache", Icon: Headache
    }, {
        id: 2, symptom: "Cramps", Icon: Cramps
    }, {
        id: 3, symptom: "Joint aches and pains", Icon: Joint
    }, {
        id: 4, symptom: "Tender Breasts", Icon: Breasts
    }, {
        id: 5, symptom: "Acne", Icon: Acne
    }, {
        id: 6, symptom: "Fatigue", Icon: Fatigue
    }, {
        id: 7, symptom: "Sweet Cravings", Icon: Sweet
    }, {
        id: 8, symptom: "Salty Cravings", Icon: Salty
    }, {
        id: 9, symptom: "Back Pain", Icon: BackPain
    }, {
        id: 10, symptom: "Diarrhea", Icon: Diarrhea
    }, {
        id: 11, symptom: "Constipation", Icon: Constipation
    }, {
        id: 12, symptom: "Nausea", Icon: Nausea
    }, {
        id: 13, symptom: "Vomited", Icon: Vomit
    }
];

function Symptoms() {

    const [symptoms, setSymptoms] = useState(initialSymptoms);

    const handlePopUp = (title) => {
        const newSymptom = {
            id: symptoms.length + 1,
            symptom: title,
            Icon: Default
        };
        setSymptoms([...symptoms, newSymptom])

    }

    return (
        <>
            <Layout allowBack={true} allowNav={false} title={"Today's Symptoms"}>

                <div className="flex-col space-y-8">

                    <div className="mt-5 h-[410px] overflow-y-auto ">
                        {symptoms.map(({ id, symptom, Icon }) => (
                            <div key={id} >
                                <SymptomSeverity Icon={Icon} title={symptom} />
                            </div>
                        ))}
                    </div>

                    <Popup
                        modal
                        trigger={
                            <Button className="border-red-950 flex mx-5 -mt-2 -p-2 justify-center items-center">
                                <img src={Plus} className="float-left w-[5%] h-auto mx-3" />
                                <h1 className="flex-1 text-center"> Add Additional Symptom </h1>
                            </Button>} >

                        {(close) => <AdditionalPopUp onAddSymptom={(input) => {
                            handlePopUp(input);
                            close()
                        }} onClose={() => { close() }} />}

                    </Popup>


                    <div className="flex-col space-y-3 mb-10">
                        <TextInput rowNo={4} />
                        <ConfirmButton className="mx-15" />
                    </div>

                </div>

            </Layout >
        </>
    )
}

export default Symptoms
