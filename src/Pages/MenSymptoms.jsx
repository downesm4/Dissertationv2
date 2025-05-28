import React, { useState } from 'react';

import SymptomSeverity from "../Components/SymptomSeverity.tsx";
import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import TextInput from '../Components/TextInput.tsx'
import ConfirmButton from '../Components/ConfirmButton.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx';
import '../App.css'
import Popup from "reactjs-popup";


import Headache from '../assets/Symptoms/headache.png'
import Tinnitus from '../assets/Symptoms/tinnitus.png'
import Joint from '../assets/Symptoms/joint.png'
import Breasts from '../assets/Symptoms/breasts.png'
import HotFlushes from '../assets/Symptoms/hot-flashes.png'
import Fatigue from '../assets/Symptoms/fatigue.png'
import NightSweats from '../assets/Symptoms/night-sweat.png'
import Sleep from '../assets/Symptoms/insomnia.png'
import Vagina from '../assets/Symptoms/cystitis.png'
import Plus from '../assets/plus.png';
import Selector from "../Components/Selector.tsx";

import MoodSwings from '../assets/Symptoms/moodswings.png'
import Concentration from '../assets/Symptoms/concentration.png'
import Anxiety from '../assets/Symptoms/anxiety.png'
import LowMoods from '../assets/Symptoms/lowmood.png'
import Abstinence from '../assets/Symptoms/abstinence.png'
import Confusion from '../assets/Symptoms/confusion.png'
import Default from '../assets/default.png'


const Physical = [
    {
        id: 1, symptom: "Fatigue", Icon: Fatigue
    }, {
        id: 2, symptom: "Headache", Icon: Headache
    }, {
        id: 3, symptom: "Tinnitus", Icon: Tinnitus
    }, {
        id: 4, symptom: "Tender Breasts", Icon: Breasts
    }, {
        id: 5, symptom: "Joint aches and pains", Icon: Joint
    }, {
        id: 7, symptom: "Hot Flushes", Icon: HotFlushes
    }, {
        id: 8, symptom: "Night Sweats", Icon: NightSweats
    }, {
        id: 9, symptom: "Cannot Sleep", Icon: Sleep
    }, {
        id: 10, symptom: "Painful Vagina", Icon: Vagina
    }
];

const Emotional = [
    {
        id: 1, symptom: "Mood Swings", Icon: MoodSwings
    }, {
        id: 2, symptom: "Lack of Concentration", Icon: Concentration
    }, {
        id: 3, symptom: "Anxiety", Icon: Anxiety
    }, {
        id: 4, symptom: "Low Moods", Icon: LowMoods
    }, {
        id: 5, symptom: "Low Sex Drive", Icon: Abstinence
    }, {
        id: 6, symptom: "Confusion", Icon: Confusion
    },
]

function MenSymptoms() {

    const [selected, setSelected] = useState('Physical');
    const [physicalSymptoms, setPhysical] = useState(Physical);
    const [emotionalSymptoms, setEmotional] = useState(Emotional);

    const handlePopUpPhysical = (title) => {
        const newSymptom = {
            id: physicalSymptoms.length + 1,
            symptom: title,
            Icon: Default
        };
        setPhysical([...physicalSymptoms, newSymptom])
    }

    const handlePopUpEmotional = (title) => {
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

                    <div className="-mb-3">
                        <Selector options={['Physical', 'Emotional']} def={selected} onChange={setSelected} />
                    </div>

                    {selected === "Physical" && (
                        <div>
                            <div className=" h-[360px] overflow-y-auto">
                                {physicalSymptoms.map(({ id, symptom, Icon }) => (
                                    <div key={id} >
                                        <SymptomSeverity Icon={Icon} title={symptom} />
                                    </div>
                                ))}
                            </div>

                            <Popup
                                modal
                                trigger={
                                    <Button className="border-red-950 flex mx-5 -p-2 justify-center items-center mt-3">
                                        <img src={Plus} className="float-left w-[5%] h-auto mx-3" />
                                        <h1 className="flex-1 text-center"> Add Physical Symptom </h1>
                                    </Button>} >

                                {(close) => <AdditionalPopUp onAddSymptom={(input) => {
                                    handlePopUpPhysical(input);
                                    close()
                                }} onClose={() => { close() }} />}

                            </Popup>
                        </div>)}

                    {selected === "Emotional" && (
                        <div>
                            <div className=" h-[360px] overflow-y-auto ">
                                {emotionalSymptoms.map(({ id, symptom, Icon }) => (
                                    <div key={id} >
                                        <SymptomSeverity Icon={Icon} title={symptom} />
                                    </div>
                                ))}
                            </div>

                            <Popup
                                modal
                                trigger={
                                    <Button className="border-red-950 flex mx-5 mt-3 -p-2 justify-center items-center">
                                        <img src={Plus} className="float-left w-[5%] h-auto mx-3" />
                                        <h1 className="flex-1 text-center"> Add Emotional Symptom </h1>
                                    </Button>} >

                                {(close) => <AdditionalPopUp onAddSymptom={(input) => {
                                    handlePopUpEmotional(input);
                                    close()
                                }} onClose={() => { close() }} />}

                            </Popup>

                        </div>
                    )}

                    <div className="flex-col space-y-3 -mt-3 mb-10">
                        <TextInput rowNo={4} />
                        <ConfirmButton className="mx-15" />
                    </div>

                </div>

            </Layout >
        </>
    )
}

export default MenSymptoms
