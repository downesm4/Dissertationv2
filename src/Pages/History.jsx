import Layout from '../Templates/MobileLayout.tsx'
import '../App.css'
import Calendar from '../Components/Calendar.tsx'
import DropDown from '../Components/DropDown.tsx'
import { useState } from "react";
import Selector from '../Components/Selector.tsx'

import blood1 from '../assets/v2/Bleeding/blood1.svg'
import blood2 from '../assets/v2/Bleeding/blood2.svg'
import blood3 from '../assets/v2/Bleeding/blood3.svg'
import pain1 from '../assets/v2/Pain/pain1.svg'
import pain2 from '../assets/v2/Pain/pain2.svg'
import pain3 from '../assets/v2/Pain/pain3.svg'
import headache from '../assets/v2/Symptoms/headache.svg'
import cramps from '../assets/v2/Symptoms/cramps.svg'
import sweets from '../assets/v2/Symptoms/sweets.svg'
import fatigue from '../assets/v2/Symptoms/tired.svg'
import joint from '../assets/v2/Symptoms/joint.svg'
import back from '../assets/v2/Symptoms/backPain.svg'
import acne from '../assets/v2/Symptoms/acne.svg'


function History() {

    const bleeding = ["Stopped me from doing things", "Couldn't do everything today", 'It was okay']
    const bloodIcon = [blood3, blood2, blood1]
    const pain = ['Stopped me from doing things', 'Got through the day with medications', 'It was okay']
    const painIcon = [pain3, pain2, pain1]
    const symptoms = [['Headache', 'Cramps', 'Sweet Cravings'], ['Fatigue', 'Joint Pain', 'Back Pain'], ['Acne', 'Cramps', 'Headache']]
    const symptomIcons = [[headache, cramps, sweets], [fatigue, joint, back], [acne, cramps, headache]]

    const [selected, setSelected] = useState(1)
    const [selectedArray, setSelectedArray] = useState(['Headache', 'Cramps', 'Sweet Cravings'])
    const [selectedIcons, setSelectedIcons] = useState([headache, cramps, sweets])


    const handleDropDownClick = () => {
        const randomIndex = Math.floor(Math.random() * 3);

        setSelected(randomIndex);
        setSelectedArray(symptoms[randomIndex]);
        setSelectedIcons(symptomIcons[randomIndex])
    };

    return (
        <Layout allowBack={false} allowNav={true} current={'history'} title={""}>

            <div className='mx-10'>
                <Selector options={["Day", 'Week', 'Month']} def="Day" onChange={handleDropDownClick} />

            </div>

            <Calendar />

            <div className="flex-col flex space-y-3 mt-5">

                <div >
                    <div className="text-2xl font-bold">
                        <h1 className="text-xl text-black font-bold"> Bleeding </h1>
                    </div>
                    <div className="flex items-center justify-center bg-rose-200 border border-zinc-700 rounded-lg">
                        <img src={bloodIcon[selected]} className='float-left p-4 w-[30%] h-auto' />
                        <p className="flex-1 text-xl text-center font-bold block"> {bleeding[selected]} </p>
                    </div>
                </div>

                <div>
                    <div className="text-2xl font-bold">
                        <h1 className="text-xl text-black font-bold"> Pain </h1>
                    </div>
                    <div className="flex items-center justify-center bg-cyan-200 border border-zinc-700  rounded-lg">
                        <img src={painIcon[selected]} className='float-left p-4 w-[30%] h-auto' />
                        <p className="flex-1 text-xl text-center font-bold block"> {pain[selected]} </p>
                    </div>
                </div>

                <div className="mb-10">
                    <h1 className='text-xl text-black'> Common symptoms: </h1>
                    <div className="grid grid-cols-3 gap-x-5">
                        {selectedArray.map((item, index) => (
                            <div key={index} className="col-span-1 flex flex-col items-center justify-center bg-violet-200 border border-zinc-700 rounded-lg">
                                <img src={selectedIcons[index]} className='p-1 w-[80%] h-auto' />
                                <p className="text-lg text-center font-bold "> {item} </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </Layout >

    )
}

export default History
