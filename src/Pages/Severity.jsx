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

function Severity() {

    const location = useLocation();
    const navigate = useNavigate()
    const q = location.state?.q;
    const type = location.state?.type;

    useEffect(() => {
        if (!q || !type) {
            navigate("/"); // or another fallback route
        }
    }, [q, type, navigate]);

    const [selected, setSelected] = useState();

    return (
        <>
            <Layout allowBack={true} allowNav={false}>

                <div className="flex-col space-y-10">

                    <h1 className="text-2xl text-center font-bold mb-10 mt-5">  {q ? q.question : "No question provided"} </h1>

                    <div className="flex mx-3 mt-10 mb-8 space-y-10 gap-x-3">

                        <Button className={twMerge("flex-col w-full items-center border border-zinc-700 shadow-xl h-[120px]", type === "P" ? 'bg-violet-100' : 'bg-emerald-100', selected === "none" ? 'outline-zinc-700 outline-[0.5vw]' : '')}
                            onClick={() => { setSelected(selected === "none" ? "" : "none") }}>
                            <img src={None} className=" w-[100%] h-auto  mb-auto p-1" />
                            <h1 className=" text-lg text-black text-center font-bold "> None </h1>
                        </Button>

                        <Button className={twMerge("flex-col w-full items-center border border-zinc-700 shadow-xl h-[120px]", type === "P" ? 'bg-violet-200' : 'bg-emerald-200', selected === "light" ? 'outline-zinc-700 outline-[0.5vw] md:outline-[0.25vw]' : '')}
                            onClick={() => { setSelected(selected === "light" ? "" : "light") }}>
                            <img src={Face1} className=" w-[100%] h-auto  mb-auto p-1" />
                            <h1 className=" text-lg text-black text-center font-bold "> Okay</h1>
                        </Button>

                        <Button className={twMerge("flex-col w-full items-center border border-zinc-700 shadow-xl h-[120px]", type === "P" ? 'bg-violet-300' : 'bg-emerald-300', selected === "medium" ? ' outline-zinc-700 outline-[0.5vw]' : '')}
                            onClick={() => { setSelected(selected === "medium" ? "" : "medium") }}>
                            <img src={Face2} className=" w-[100%] h-auto mb-auto p-1" />
                            <h1 className="text-lg text-black text-center font-bold "> Bad </h1>
                        </Button>

                        <Button className={twMerge("flex-col w-full items-center border border-zinc-700 shadow-xl h-[120px]", type === "P" ? 'bg-violet-400' : 'bg-emerald-400', selected === "heavy" ? ' outline-zinc-700 outline-[0.5vw]' : '')}
                            onClick={() => { setSelected(selected === "heavy" ? "" : "heavy") }}>
                            <img src={Face3} className=" w-[100%] h-auto mb-auto p-1" />
                            <h1 className=" text-lg text-black text-center font-bold "> Very Bad </h1>
                        </Button>

                    </div>

                    <div className="flex-col space-y-8 mb-10">
                        <TextInput rowNo={4} />
                        <ConfirmButton className="bg-rose-200 mt-10 " />
                    </div>
                </div>

            </Layout >
        </>
    )
}

export default Severity
