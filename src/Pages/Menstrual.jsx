import { useNavigate } from 'react-router-dom'

import '../App.css'

import Menstruation from '../Components/MenstrualRepresentation.jsx'
import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'

import Blood from '../assets/v2/Bleeding/blood2.svg'
import Pain from '../assets/v2/Pain/pain2.svg'
import Symptoms from '../assets/v2/symptoms.svg'
import Mood from '../assets/v2/Mood.png'

function Menstrual() {
    const navigate = useNavigate();

    return (
        <Layout allowBack={false} allowNav={true} current={'menstruation'} title={""}>

            <Menstruation />

            <div className="flex flex-col mt-8 mb-10 gap-x-5 gap-y-5">
                <Button className="flex items-center justify-center bg-rose-200 text-center text-black font-bold text-2xl"
                    onClick={() => navigate('/flow')}>
                    <img src={Blood} className='float-left w-[15%] h-auto ' />
                    <p className="flex-1"> Bleeding </p>
                </Button>

                <Button
                    className="flex items-center justify-center text-center bg-cyan-200 text-black font-bold text-2xl"
                    onClick={() => navigate('/pain')}>
                    <img src={Pain} className='float-left w-[15%] h-auto ' />
                    <p className="flex-1"> Pain </p>
                </Button>

                <Button
                    className="flex items-center justify-center bg-violet-200 text-center text-black font-bold text-2xl"
                    onClick={() => navigate('/symptoms')}>
                    <img src={Symptoms} className='float-left w-[15%] h-auto ' />
                    <p className="flex-1"> Problems </p>
                </Button>

                <Button
                    className="flex items-center justify-center bg-amber-200 text-center text-black font-bold text-2xl"
                    onClick={() => navigate('/mood')}>
                    <img src={Mood} className='float-left w-[15%] h-auto ' />
                    <p className="flex-1"> Moods </p>
                </Button>

            </div>

        </Layout >



    )
}

export default Menstrual
