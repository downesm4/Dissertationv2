import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import '../App.css'
import Calendar from '../Components/Calendar.tsx'
import rewind from '../assets/Rewind.png'
import { useNavigate } from 'react-router-dom'

function Menopause() {

    let insight = "You are on track for less hot flushes this month"
    const navigate = useNavigate()

    return (
        <Layout allowBack={false} allowNav={true} current={'menopause'} title={""}>

            <Calendar />

            <div className="rounded-lg border-[0.25vw] border-pink-500 bg-rose-200 flex-row my-3">
                <img src={rewind} className="float-left w-[15%] h-auto p-2" />
                <h3 className="flex-1 text-md italic  text-red-950 text-center px-5">  {insight} </h3>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-5 mb-5">

                <Button
                    className="col-span-2  text-center text-red-950 font-bold text-2xl"
                    onClick={() => navigate('/menSymptoms')}>
                    Symptoms
                </Button>

                <Button
                    className="col-span-2 text-center text-red-950 font-bold text-2xl"
                    onClick={() => navigate('/mood')}>
                    Mood
                </Button>

                <Button
                    className="col-span-1 text-center text-red-950 font-bold text-2xl"
                    onClick={() => navigate('/flow')}>
                    Bleeding
                </Button>

                <Button
                    className="col-span-1 text-center text-red-950 font-bold text-2xl"
                    onClick={() => navigate('/pain')}>
                    Pain
                </Button>

            </div>

        </Layout >

    )
}

export default Menopause
