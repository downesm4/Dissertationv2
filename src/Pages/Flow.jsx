import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import TextInput from '../Components/TextInput.tsx'
import ConfirmButton from '../Components/ConfirmButton.tsx'
import '../App.css'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

import Blood1 from '../assets/v2/Bleeding/Blood1.svg'
import Blood2 from '../assets/v2/Bleeding/Blood2.svg'
import Blood3 from '../assets/v2/Bleeding/Blood3.svg'
import Face1 from '../assets/v2/Faces/Face1.svg'
import Face2 from '../assets/v2/Faces/Face2.svg'
import Face3 from '../assets/v2/Faces/Face3.svg'
import Face4 from '../assets/v2/Faces/Face4.svg'
import None from '../assets/v2/none.svg'

function Flow() {

    const [selected, setSelected] = useState()

    return (
        <>
            <Layout allowBack={true} allowNav={false}>

                <div className="flex-col space-y-10">

                    <h1 className="text-2xl text-center font-bold mb-10 mt-5"> How was the bleeding today? </h1>

                    <div className="flex-col mx-3 mt-5 space-y-7">

                        <Button className={twMerge("flex w-full items-center bg-rose-100 p-2 border border-black shadow-xl", selected === "none" ? 'outline-black outline-[0.5vw]' : '')}
                            onClick={() => { setSelected(selected === "none" ? "" : "none") }}>
                            <div className="flex w-[30%]">

                                <img src={None} className="float-left w-[50%] h-auto  mb-auto p-1" />
                                <img src={Face1} className="float-right w-[50%] h-auto  mb-auto p-1" />

                            </div>
                            <h1 className="flex-1 text-xl text-black text-center font-bold "> None </h1>
                        </Button>

                        <Button className={twMerge("flex w-full items-center bg-rose-200 p-2  border border-black shadow-xl", selected === "light" ? 'outline-black outline-[0.5vw] md:outline-[0.25vw]' : '')}
                            onClick={() => { setSelected(selected === "light" ? "" : "light") }}>
                            <div className="flex w-[30%]">
                                <img src={Blood1} className="float-left w-[50%] h-auto  mb-auto p-1" />
                                <img src={Face2} className="float-right w-[50%] h-auto  mb-auto p-1" />
                            </div>
                            <h1 className="flex-1 text-xl  text-black text-center font-bold "> It was okay</h1>
                        </Button>

                        <Button className={twMerge("flex w-full items-center bg-rose-300 p-2  border border-black shadow-xl", selected === "medium" ? ' outline-black outline-[0.5vw]' : '')}
                            onClick={() => { setSelected(selected === "medium" ? "" : "medium") }}>
                            <div className="flex w-[30%]">

                                <img src={Blood2} className="float-left w-[50%] h-auto mb-auto p-1" />
                                <img src={Face3} className="float-right w-[50%] h-auto mb-auto p-1" />
                            </div>
                            <h1 className="flex-1 text-xl text-black text-center font-bold "> Got through with pain medication </h1>
                        </Button>

                        <Button className={twMerge("flex w-full items-center bg-rose-400 p-2 border border-black shadow-xl", selected === "heavy" ? ' outline-black outline-[0.5vw]' : '')}
                            onClick={() => { setSelected(selected === "heavy" ? "" : "heavy") }}>
                            <div className="flex w-[30%]">

                                <img src={Blood3} className="float-left w-[50%] h-auto mb-auto p-1" />
                                <img src={Face4} className="float-right w-[50%] h-auto mb-auto p-1" />
                            </div>
                            <h1 className="flex-1 text-xl text-black text-center font-bold "> Stopped me from doing things </h1>
                        </Button>

                    </div>

                    <div className="flex-col space-y-5 mb-10">
                        <TextInput rowNo={4} />
                        <ConfirmButton className="bg-rose-200" />
                    </div>
                </div>

            </Layout >
        </>
    )
}

export default Flow
