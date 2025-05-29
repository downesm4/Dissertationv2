import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import '../App.css'
import Calendar from '../Components/Calendar.tsx'
import rewind from '../assets/Rewind.png'
import { useNavigate } from 'react-router-dom'

import Blood from '../assets/v2/Bleeding/blood2.svg'
import Pain from '../assets/v2/Pain/pain2.svg'
import Physical from '../assets/v2/physical.svg'
import Emotional from '../assets/v2/emotional.svg'
import Mood from '../assets/v2/Mood.png'

function Menopause() {

    let insight = "You are on track for less hot flushes this month"
    const navigate = useNavigate()

    return (
        <Layout allowBack={false} allowNav={true} current={'menopause'} title={""}>

            <Calendar className="bg-orange-100" />

            <div className="flex flex-col mt-5 gap-x-5 gap-y-5 mb-5">

                <Button
                    className="flex bg-violet-200 justify-center items-center text-center text-black font-bold text-2xl"
                    onClick={() => navigate('/physical')}>
                    <img src={Physical} className='float-left w-[15%] h-auto ' />

                    <p className='flex-1'> Physical Problems </p>
                </Button>

                <Button
                    className="flex bg-emerald-200 justify-center items-center text-center text-black font-bold text-2xl"
                    onClick={() => navigate('/emotional')}>
                    <img src={Emotional} className='float-left w-[15%] h-auto ' />

                    <p className="flex-1"> Emotional Problems </p>
                </Button>

                <Button
                    className="flex bg-amber-200 justify-center items-center text-center text-black font-bold text-2xl"
                    onClick={() => navigate('/mood')}>
                    <img src={Mood} className='float-left w-[15%] h-auto ' />

                    <p className="flex-1"> Mood </p>
                </Button>

                <Button
                    className="flex bg-rose-200 justify-center items-center text-center text-black font-bold text-2xl"
                    onClick={() => navigate('/flow')}>
                    <img src={Blood} className='float-left w-[15%] h-auto ' />
                    <p className="flex-1"> Bleeding </p>
                </Button>

                <Button
                    className="flex bg-cyan-200 justify-center items-center text-center text-black font-bold text-2xl"
                    onClick={() => navigate('/pain')}>
                    <img src={Pain} className='float-left w-[15%] h-auto ' />
                    <p className='flex-1'> Pain </p>
                </Button>

            </div>

        </Layout >

    )
}

export default Menopause
