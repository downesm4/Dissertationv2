import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import '../App.css'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

import Menopause from '../assets/v2/Navigation/menopause.svg'
import Menstruation from '../assets/v2/Navigation/menstruation.svg'
import Symptoms from '../assets/v2/symptoms.svg'
import Sanitary from '../assets/v2/Sanitary.png'
import Conversation from '../assets/v2/Conversation.png'
import Calendar from '../assets/v2/calendar.png'

import { useNavigate } from 'react-router-dom'
const MensResources = [
    { id: 1, question: "VIDEO: What is a period?", Icon: Menstruation },
    { id: 2, question: "What problems might I have?", Icon: Symptoms },
    { id: 3, question: "VIDEO: How can I deal with my period?", Icon: Sanitary },
    { id: 4, question: "Who can I talk to about my period?", Icon: Conversation }
]

const MenoResources = [
    { id: 1, question: "VIDEO: What is the menopause?", Icon: Menopause },
    { id: 2, question: "When will I get the menopause?", Icon: Calendar },
    { id: 3, question: "What problems might I have?", Icon: Symptoms }
]

function Topic() {

    const navigate = useNavigate()

    return (
        <>
            <Layout allowBack={false} allowNav={true} current={"learning"}>

                <div className="flex-col space-y-10">

                    <h1 className="text-2xl text-center font-bold mb-10 mt-5"> What would you like to learn about? </h1>

                    <div className="flex-col mx-3 mt-10 space-y-10">

                        <Button className={twMerge("flex flex-col w-full items-center bg-orange-100 p-2 border border-zinc-700 shadow-xl")}
                            onClick={() => navigate("/resources", { state: { resources: MensResources, title: "Menstruation" } })}>
                            <div className="flex items-center justify-center">
                                <img src={Menstruation} className="float-left w-[25%] h-auto mb-auto p-1" />
                                <h1 className="flex-1 text-3xl text-black text-center font-bold "> Menstruation </h1>
                            </div>

                            <p className="font-light text-lg text-center"> Menstruation is when a woman has a monthly period, and blood comes from her vagina as part of her body's natural cycle </p>
                        </Button>

                        <Button className={twMerge("flex flex-col w-full items-center bg-orange-100 p-2  border border-zinc-700 shadow-xl")}
                            onClick={() => navigate("/resources", { state: { resources: MenoResources, title: "Menopause" } })}>
                            <div className="flex items-center justify-center">
                                <img src={Menopause} className="float-left w-[25%] h-auto mb-auto p-1" />
                                <h1 className="flex-1 text-3xl text-black text-center font-bold "> Menopause </h1>
                            </div>

                            <p className="font-light text-lg text-center"> Menopause is when a woman stops having periods, and her body changes because she can no longer have babies. </p>
                        </Button>


                    </div>

                </div>

            </Layout >
        </>
    )
}

export default Topic
