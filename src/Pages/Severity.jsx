import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import TextInput from '../Components/TextInput.tsx'
import ConfirmButton from '../Components/ConfirmButton.tsx'
import '../App.css'
import { twMerge } from 'tailwind-merge'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Face1 from '../assets/v2/Faces/Face2.svg'
import Face2 from '../assets/v2/Faces/Face3.svg'
import Face3 from '../assets/v2/Faces/Face4.svg'
import None from '../assets/v2/none.svg'

import { useTheme } from '../Context/ThemeContext.tsx'
import { themes } from '../Styles/themes.js'

function Severity() {

    const location = useLocation();
    const navigate = useNavigate()
    const q = location.state?.q;
    const type = location.state?.type;

    const { theme } = useTheme()
    const currentTheme = themes[theme]

    useEffect(() => {
        if (!q || !type) {
            navigate("/");
        }
    }, [q, type, navigate]);

    const [selected, setSelected] = useState();

    return (
        <>
            <Layout allowBack={true} allowNav={false}>

                <div className="flex-col space-y-10">

                    <h1 className="text-2xl text-center font-bold mb-10 mt-5">  {q ? q.question : "No question provided"} </h1>

                    <div className="flex mx-3 mt-10 mb-8 space-y-10 gap-x-3">

                        <Button className={twMerge("flex-col w-full items-center border shadow-xl h-[120px]", selected === "none" ? 'outline-[0.5vw]' : '')}
                            style={{
                                background: type === "P" ? currentTheme.SymptomNone : currentTheme.EmotionalNone,
                                borderColor: currentTheme.border,
                                color: currentTheme.text,
                                outlineColor: currentTheme.border
                            }}
                            onClick={() => { setSelected(selected === "none" ? "" : "none") }}>
                            <img src={None} className=" w-[100%] h-auto  mb-auto p-1" />
                            <h1 className=" text-lg text-center font-bold "> None </h1>
                        </Button>

                        <Button className={twMerge("flex-col w-full items-center border  shadow-xl h-[120px]", selected === "light" ? ' outline-[0.5vw]' : '')}
                            style={{
                                background: type === "P" ? currentTheme.Symptom1 : currentTheme.Emotional1,
                                borderColor: currentTheme.border,
                                color: currentTheme.text,
                                outlineColor: currentTheme.border
                            }}
                            onClick={() => { setSelected(selected === "light" ? "" : "light") }}>
                            <img src={Face1} className=" w-[100%] h-auto  mb-auto p-1" />
                            <h1 className=" text-lg text-center font-bold "> Okay</h1>
                        </Button>

                        <Button className={twMerge("flex-col w-full items-center border  shadow-xl h-[120px]", selected === "medium" ? ' outline-[0.5vw]' : '')}
                            style={{
                                background: type === "P" ? currentTheme.Symptom2 : currentTheme.Emotional2,
                                borderColor: currentTheme.border,
                                color: currentTheme.text,
                                outlineColor: currentTheme.border
                            }}
                            onClick={() => { setSelected(selected === "medium" ? "" : "medium") }}>
                            <img src={Face2} className=" w-[100%] h-auto mb-auto p-1" />
                            <h1 className="text-lg text-center font-bold "> Bad </h1>
                        </Button>

                        <Button className={twMerge("flex-col w-full items-center border shadow-xl h-[120px]", selected === "heavy" ? ' outline-[0.5vw]' : '')}
                            style={{
                                background: type === "P" ? currentTheme.Symptom3 : currentTheme.Emotional3,
                                borderColor: currentTheme.border,
                                color: currentTheme.text,
                                outlineColor: currentTheme.border
                            }}
                            onClick={() => { setSelected(selected === "heavy" ? "" : "heavy") }}>
                            <img src={Face3} className=" w-[100%] h-auto mb-auto p-1" />
                            <h1 className=" text-lg text-center font-bold "> Very Bad </h1>
                        </Button>

                    </div>

                    <div className="flex-col space-y-8 mb-10">
                        <TextInput rowNo={4} />

                        <ConfirmButton style={{
                            background: currentTheme.name === "Muted" ? currentTheme.ConfirmButton : type === "P" ? currentTheme.Symptom1 : currentTheme.Emotional1,
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

export default Severity
