import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import TextInput from '../Components/TextInput.tsx'
import ConfirmButton from '../Components/ConfirmButton.tsx'
import Selector from '../Components/Selector.tsx'
import '../App.css'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import Pain1 from '../assets/v2/Pain/Pain1.svg'
import Pain2 from '../assets/v2/Pain/Pain2.svg'
import Pain3 from '../assets/v2/Pain/Pain3.svg'
import Face1 from '../assets/v2/Faces/Face1.svg'
import Face2 from '../assets/v2/Faces/Face2.svg'
import Face3 from '../assets/v2/Faces/Face3.svg'
import Face4 from '../assets/v2/Faces/Face4.svg'
import None from '../assets/v2/none.svg'
import Settings from '../assets/v2/settings.png'
import close from '../assets/v2/close.png'

import { useTheme } from '../Context/ThemeContext.tsx'
import { themes } from '../Styles/themes.js'
import { useHeadings } from '../Context/HeadingContext.tsx'
import { usePainEmoji } from '../Context/PainEmojisContext.tsx'
import { usePainWording } from '../Context/PainWordingContext.tsx'

function Pain() {

    const [selected, setSelected] = useState();
    const [showSettings, setShowSettings] = useState(false);
    const { theme } = useTheme();
    const currentTheme = themes[theme];
    const { painEmoji, setPainEmoji } = usePainEmoji();
    const { painWording, setPainWording } = usePainWording();

    const { headings } = useHeadings();

    return (
        <>
            <Layout allowBack={true} allowNav={false} title={"Today's Pain"}>

                <div className="absolute top-13 right-13 z-50">
                    <button onClick={() => setShowSettings(true)}>
                        <img src={Settings} className="w-8 h-8" />
                    </button>
                </div>

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
                                    <Selector className="mx-3" options={['Descriptive', 'Abstract']} def={painWording} onChange={(newPainWording) => setPainWording(newPainWording)} > </Selector>
                                </div>

                                <div className="border rounded-lg" style={{ borderColor: currentTheme.border }}>
                                    <h1 className="text-xl text-center mb-4 mx-3"> Do you want emojis? </h1>
                                    <Selector className="mx-3" options={['Yes', 'No']} def={painEmoji} onChange={(newPainEmoji) => setPainEmoji(newPainEmoji)} > </Selector>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                <div className="flex-col space-y-10">

                    <h1 className="text-2xl text-center font-bold mb-10 mt-5"> {headings === "Questions" ? "How was the pain today?" : "Today's Pain"} </h1>

                    <div className="flex-col mx-3 mt-5 space-y-7">
                        <Button className={twMerge("flex w-full items-center p-2 border  shadow-xl", selected === "none" ? 'outline-[0.5vw]' : '')}
                            style={{
                                background: currentTheme.PainNone,
                                borderColor: currentTheme.border,
                                color: currentTheme.text,
                                outlineColor: currentTheme.border
                            }}
                            onClick={() => { setSelected(selected === "none" ? "" : "none") }}>
                            <div className="flex w-[30%]">

                                <img src={None} className="float-left w-[50%] h-auto  mb-auto p-1" />
                                {painEmoji === "Yes" && (<img src={Face1} className="float-right w-[50%] h-auto  mb-auto p-1" />)}

                            </div>
                            <h1 className="flex-1 text-xl text-center font-bold "> None </h1>
                        </Button>

                        <Button className={twMerge("flex w-full items-center p-2  border shadow-xl", selected === "light" ? ' outline-[0.5vw]' : '')}
                            style={{
                                background: currentTheme.Pain1,
                                borderColor: currentTheme.border,
                                color: currentTheme.text,
                                outlineColor: currentTheme.border
                            }}
                            onClick={() => { setSelected(selected === "light" ? "" : "light") }}>
                            <div className="flex w-[30%]">
                                <img src={Pain1} className="float-left w-[50%] h-auto  mb-auto p-1" />
                                {painEmoji === "Yes" && (<img src={Face2} className="float-right w-[50%] h-auto  mb-auto p-1" />)}
                            </div>
                            <h1 className="flex-1 text-xl text-center font-bold "> {painWording === 'Descriptive' ? "It was okay" : "Low"}</h1>
                        </Button>

                        <Button className={twMerge("flex w-full items-center p-2  border shadow-xl", selected === "medium" ? ' outline-[0.5vw]' : '')}
                            style={{
                                background: currentTheme.Pain2,
                                borderColor: currentTheme.border,
                                color: currentTheme.text,
                                outlineColor: currentTheme.border
                            }}
                            onClick={() => { setSelected(selected === "medium" ? "" : "medium") }}>
                            <div className="flex w-[30%]">

                                <img src={Pain2} className="float-left w-[50%] h-auto mb-auto" />
                                {painEmoji === "Yes" && (<img src={Face3} className="float-right w-[50%] h-auto mb-auto p-1" />)}
                            </div>
                            <h1 className="flex-1 text-xl text-center font-bold "> {painWording === 'Descriptive' ? "Got through the day with medication" : "Medium"} </h1>
                        </Button>

                        <Button className={twMerge("flex w-full items-center p-2 border shadow-xl", selected === "heavy" ? ' outline-[0.5vw]' : '')}
                            style={{
                                background: currentTheme.Pain3,
                                borderColor: currentTheme.border,
                                color: currentTheme.text,
                                outlineColor: currentTheme.border
                            }}
                            onClick={() => { setSelected(selected === "heavy" ? "" : "heavy") }}>
                            <div className="flex w-[30%]">

                                <img src={Pain3} className="float-left w-[50%] h-auto mb-auto p-1" />
                                {painEmoji === "Yes" && (<img src={Face4} className="float-right w-[50%] h-auto mb-auto p-1" />)}
                            </div>
                            <h1 className="flex-1 text-xl  text-center font-bold "> {painWording === 'Descriptive' ? "Stopped me from doing things" : "High"} </h1>
                        </Button>
                    </div>

                    <div className="flex-col space-y-5 mb-10">
                        <TextInput rowNo={4} />
                        <ConfirmButton style={{
                            background: currentTheme.name === "Muted" ? currentTheme.ConfirmButton : currentTheme.Pain1,
                            borderColor: currentTheme.name === "Muted" ? currentTheme.ConfirmBorder : currentTheme.border,
                            borderWidth: currentTheme.name === "Muted" ? "1.5vw" : "0.5vw",
                            color: currentTheme.name === "Muted" ? currentTheme.NavBar : currentTheme.text,
                            outlineColor: currentTheme.border
                        }} />
                    </div>

                </div>

            </Layout >
        </>
    )
}

export default Pain
