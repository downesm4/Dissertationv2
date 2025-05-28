import { useNavigate } from 'react-router-dom'

import '../App.css'

import Menstruation from '../Components/MenstrualRepresentation.jsx'
import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'

function Menstrual() {
    const navigate = useNavigate();

    return (
        <Layout allowBack={false} allowNav={true} current={'menstruation'} title={""}>

            <Menstruation />


            <div className="rounded-lg border-[0.25vw] border-pink-500 bg-rose-100 my-3 grid grid-cols-4 gap-2 ">
                {/* Key for Circle Graphic*/}

                <div className='flex items-center justify-center rounded-full w-6 h-6 mx-auto mt-2 bg-rose-400 col-span-1 '> </div>
                <div className='flex items-center justify-center rounded-full w-6 h-6 mx-auto mt-2 bg-rose-200 col-span-1 '> </div>
                <div className='flex items-center justify-center rounded-full w-6 h-6 mx-auto mt-2 bg-sky-200 col-span-1 '> </div>
                <div className='flex items-center justify-center rounded-full w-6 h-6 mx-auto mt-2 bg-sky-400 col-span-1 '> </div>


                <h3 className='col-span-1 text-center text-sm font-bold text-red-950'> Logged Bleeding </h3>
                <h3 className='col-span-1 text-center text-sm font-bold text-red-950'> Predicted Bleeding </h3>
                <h3 className='col-span-1 text-center text-sm font-bold text-red-950'> Predicted Fertile Days </h3>
                <h3 className='col-span-1 text-center text-sm font-bold text-red-950'> Predicted Ovulation </h3>
            </div>

            <div className="grid grid-cols-2 mt-8 mb-10 gap-x-5 gap-y-5">
                <Button className="col-span-2  flex items-center justify-center text-center text-red-950 font-bold text-2xl"
                    onClick={() => navigate('/flow')}>
                    Menstrual Flow
                </Button>
                <Button
                    className="col-span-2  flex items-center justify-center text-center text-red-950 font-bold text-2xl"
                    onClick={() => navigate('/pain')}>
                    Menstrual Pain
                </Button>
                <Button
                    className="col-span-1 flex items-center justify-center text-center text-red-950 font-bold text-2xl"
                    onClick={() => navigate('/symptoms')}>
                    Symptoms
                </Button>
                <Button
                    className="col-span-1 flex items-center justify-center text-center text-red-950 font-bold text-2xl"
                    onClick={() => navigate('/mood')}
                > Mood and Feelings </Button>

            </div>

        </Layout >



    )
}

export default Menstrual
