import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import TextInput from '../Components/TextInput.tsx'
import ConfirmButton from '../Components/ConfirmButton.tsx'
import AdditionalPopUp from '../Components/AdditionalPopUp.tsx'
import Popup from 'reactjs-popup'
import '../App.css'
import { useState } from 'react'

import Happy from '../assets/Moods/happy.png';
import Sad from '../assets/Moods/sad.png';
import Okay from '../assets/Moods/okay.png';
import Angry from '../assets/Moods/angry.png';
import Excited from '../assets/Moods/excited.png';
import Scared from '../assets/Moods/scared.png';
import Lonely from '../assets/Moods/lonely.png';
import Surprised from '../assets/Moods/surprised.png';
import Plus from '../assets/plus.png';
import Default from '../assets/default.png'


import MoodSeverity from '../Components/MoodSeverity.tsx'

const defaultMoods = [
    {
        id: 1, emotion: "Happy", Icon: Happy
    }, {
        id: 2, emotion: "Sad", Icon: Sad
    }, {
        id: 3, emotion: "Okay", Icon: Okay
    }, {
        id: 4, emotion: "Angry", Icon: Angry
    }, {
        id: 5, emotion: "Excited", Icon: Excited
    }, {
        id: 6, emotion: "Scared", Icon: Scared
    }, {
        id: 7, emotion: "Lonely", Icon: Lonely
    }, {
        id: 8, emotion: "Surprised", Icon: Surprised
    }
];

function Mood() {

    const [moods, setMoods] = useState(defaultMoods);


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

                    <div className="mt-5 h-[420px] overflow-y-auto">
                        {moods.map(({ id, emotion, Icon }) => (
                            <div key={id} >
                                <MoodSeverity Icon={Icon} title={emotion} />
                            </div>
                        ))}
                    </div>

                    {/* Add Additional ... button */}
                    <Popup
                        modal
                        trigger={
                            <Button className="border-zinc-700 flex mx-5 -mt-2 -p-2 justify-center items-center">
                                <img src={Plus} className="float-left w-[5%] h-auto mx-3" />
                                <h1 className="flex-1 text-center"> Add Additional Mood </h1>
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

export default Mood
