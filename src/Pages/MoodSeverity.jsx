import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Templates/MobileLayout";
import Button from "../Components/Button";
import TextInput from "../Components/TextInput";
import ConfirmButton from "../Components/ConfirmButton";

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

import None from '../assets/v2/none.svg'

import { twMerge } from "tailwind-merge";
import { useTheme } from "../Context/ThemeContext";
import { themes } from "../Styles/themes";

function MoodSeverity() {

    const icons = [[Happy1, Happy2, Happy3], [Sad1, Sad2, Sad3], [Angry1, Angry2, Angry3], [Excited1, Excited2, Excited3], [Scared1, Scared2, Scared3], [Lonely1, Lonely2, Lonely3], [Surprised1, Surprised2, Surprised3]]
    const location = useLocation();
    const navigate = useNavigate();
    const q = location.state?.q;
    const id = location.state?.id;
    const currentID = id.id - 1;
    const currentIcons = icons[currentID]
    const icon1 = currentIcons[0]
    const icon2 = currentIcons[1]
    const icon3 = currentIcons[2]
    const [selected, setSelected] = useState()
    const { theme } = useTheme();
    const currentTheme = themes[theme]

    useEffect(() => {
        if (!q || !id) {
            navigate("/");
        }
    }, [q, id, navigate]);

    return (
        <Layout allowBack={true} allowNav={false}>

            <div className="flex-col space-y-10"  >

                <h1 className="text-2xl text-center font-bold mb-10 mt-5"> {q ? q.question : "No question provided"}</h1>

                <div className="flex flex-col justify-between mx-3 mt-10 mb-8 gap-y-3">

                    <Button className={twMerge(" border shadow-xl", selected === "none" ? 'outline-[0.5vw]' : '')}
                        onClick={() => { setSelected(selected === "none" ? "" : "none") }}
                        style={{
                            background: currentTheme.MoodNone,
                            borderColor: currentTheme.border,
                            color: currentTheme.text,
                            outlineColor: currentTheme.border
                        }}>
                        <div className="flex flex-row justify-center items-center w-full h-full">
                            <img src={None} className="float-right w-[20%] h-auto  mb-auto p-1" />
                            <h1 className="flex-1 text-xl text-center font-bold "> None </h1>
                        </div>
                    </Button>

                    <Button className={twMerge(" border shadow-xl", selected === "slightly" ? 'outline-[0.5vw]' : '')}
                        onClick={() => { setSelected(selected === "slightly" ? "" : "slightly") }}
                        style={{
                            background: currentTheme.Mood1,
                            borderColor: currentTheme.border,
                            color: currentTheme.text,
                            outlineColor: currentTheme.border
                        }}>
                        <div className="flex flex-row justify-center items-center w-full h-full">

                            <img src={icon1} className="float-left w-[20%] h-auto  mb-auto p-1" />
                            <h1 className="flex-1 text-xl text-center font-bold "> Slightly </h1>
                        </div>
                    </Button>

                    <Button className={twMerge(" border shadow-xl", selected === "very" ? ' outline-[0.5vw]' : '')}
                        onClick={() => { setSelected(selected === "very" ? "" : "very") }}
                        style={{
                            background: currentTheme.Mood2,
                            borderColor: currentTheme.border,
                            color: currentTheme.text,
                            outlineColor: currentTheme.border
                        }}>
                        <div className="flex flex-row justify-center items-center w-full h-full">
                            <img src={icon2} className=" float-left w-[20%] h-auto mb-auto p-1" />
                            <h1 className="flex-1 text-xl text-center font-bold "> Very </h1>
                        </div>
                    </Button>

                    <Button className={twMerge("border shadow-xl ", selected === "extremely" ? ' outline-[0.5vw]' : '')}
                        onClick={() => { setSelected(selected === "extremely" ? "" : "extremely") }}
                        style={{
                            background: currentTheme.Mood3,
                            borderColor: currentTheme.border,
                            color: currentTheme.text,
                            outlineColor: currentTheme.border
                        }}>
                        <div className="flex flex-row justify-center items-center w-full h-full">
                            <img src={icon3} className="float-left w-[20%] h-auto mb-auto p-1" />
                            <h1 className="flex-1 text-xl text-center font-bold "> Extremely </h1>
                        </div>
                    </Button>

                </div>

                <div className="flex-col space-y-8 mb-10">
                    <TextInput rowNo={4} />
                    <ConfirmButton style={{
                        background: currentTheme.name === "Muted" ? currentTheme.ConfirmButton : currentTheme.Mood1,
                        borderColor: currentTheme.name === "Muted" ? currentTheme.ConfirmBorder : currentTheme.border,
                        borderWidth: currentTheme.name === "Muted" ? "1.5vw" : "0.5vw",
                        color: currentTheme.name === "Muted" ? currentTheme.NavBar : currentTheme.text,
                        outlineColor: currentTheme.border
                    }} />
                </div>
            </div>

        </Layout>
    )

}

export default MoodSeverity