import Layout from '../Templates/MobileLayout.tsx'
import '../App.css'
import Calendar from '../Components/Calendar.tsx'
import DropDown from '../Components/DropDown.tsx'
import { useState } from "react";


function History() {

    const bleeding = ['Heavy', 'Medium ', 'Light']
    const pain = ['Medium', 'Low', 'High']
    const symptoms = [['Headache', 'Cramps', 'Sweet Cravings'], ['Fatigue', 'Joint Pain', 'Back Pain'], ['Acne', 'Cramps', 'Headache']]

    const [selected, setSelected] = useState(1)
    const [selectedArray, setSelectedArray] = useState(['Headache', 'Cramps', 'Sweet Cravings'])


    const handleDropDownClick = () => {
        const randomIndex = Math.floor(Math.random() * 3);
        setSelected(randomIndex);
        const selectedArray = symptoms[randomIndex];
        setSelectedArray(selectedArray);
    };

    return (
        <Layout allowBack={false} allowNav={true} current={'history'} title={""}>

            <div className='mx-10'>
                <DropDown onClick={handleDropDownClick} />

            </div>

            <Calendar />

            <div className="flex-col flex space-y-3 mt-5">

                <div className="flex mx-5">
                    <h1 className="float-left text-xl text-red-950"> Average Bleeding: </h1>
                    <p className="flex-1 text-right text-lg font-bold text-red-950"> {bleeding[selected]} </p>
                </div>

                <div className="w-[80%] h-[0.3vw] mx-auto bg-red-950" />

                <div className="flex mx-5">
                    <h1 className="float-left text-xl text-red-950"> Average Pain: </h1>
                    <p className='flex-1 text-right text-lg font-bold text-red-950'> {pain[selected]} </p>
                </div>

                <div className="w-[80%] h-[0.3vw] mx-auto bg-red-950" />

                <div className="mx-5 mb-10">
                    <h1 className='text-xl text-red-950'> Common symptoms: </h1>
                    <ul className='list-disc ml-5'>
                        {selectedArray.map((item, index) => (
                            <li key={index} className="mx-10 text-lg font-bold text-red-950">{item}</li>
                        ))}
                    </ul>
                </div>

            </div>

        </Layout >

    )
}

export default History
