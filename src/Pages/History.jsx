import Layout from '../Templates/MobileLayout.tsx'
import '../App.css'
import Calendar from '../Components/Calendar.tsx'
import { useState } from "react";
import Selector from '../Components/Selector.tsx'

//images 
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
import close from '../assets/v2/close.png'
import Settings from '../assets/v2/settings.png'

// settings for accessibility first 
import { useTheme } from '../Context/ThemeContext.tsx';
import { themes } from '../Styles/themes.js';
import { useCalendars } from '../Context/CalendarContext.tsx';

// This allows for user to view average logs and previous logs
function History() {

    // Options for what could be shown for flow, pain and symptoms 
    const bleeding = ["Stopped me from doing things", "Couldn't do everything today", 'It was okay']
    const bloodIcon = [blood3, blood2, blood1]
    const pain = ['Stopped me from doing things', 'Got through the day with medications', 'It was okay']
    const painIcon = [pain3, pain2, pain1]
    const symptoms = [['Headache', 'Cramps', 'Sweet Cravings'], ['Fatigue', 'Joint Pain', 'Back Pain'], ['Acne', 'Cramps', 'Headache']]
    const symptomIcons = [[headache, cramps, sweets], [fatigue, joint, back], [acne, cramps, headache]]


    const [selected, setSelected] = useState(1)
    const [selectedArray, setSelectedArray] = useState(['Headache', 'Cramps', 'Sweet Cravings'])
    const [selectedIcons, setSelectedIcons] = useState([headache, cramps, sweets])

    const { theme } = useTheme();
    const currentTheme = themes[theme];
    const [showSettings, setShowSettings] = useState(false);
    const { calendars, setCalendars } = useCalendars();

    // Generates a random number for what option to show in the page 
    const handleDropDownClick = () => {
        const randomIndex = Math.floor(Math.random() * 3);

        setSelected(randomIndex);
        setSelectedArray(symptoms[randomIndex]);
        setSelectedIcons(symptomIcons[randomIndex]);
    };

    return (
        <Layout allowBack={false} allowNav={true} current={'history'} >

            {/* Button for the settings 8*/}
            <div className="absolute top-13 right-13 z-50">
                <button onClick={() => setShowSettings(true)}>
                    <img src={Settings} className="w-8 h-8" />
                </button>
            </div>

            {/* If show settings is true show the settings pop up with the option to choose to render calendars or not */}
            {showSettings && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" style={{ pointerEvents: "auto" }}>
                    <div className="rounded-lg border-[0.5vw] shadow-lg w-11/12 max-w-md p-3"
                        style={{
                            backgroundColor: currentTheme.Calendar,
                            border: currentTheme.border,
                            color: currentTheme.text
                        }}>

                        <button onClick={() => setShowSettings(false)} className="flex">
                            <img src={close} className="w-4 h-4 float-left mb-2" />
                        </button>
                        <h1 className="text-xl text-center mb-4">Do you want to see calendars on history pages? </h1>

                        <Selector options={["Yes", "No"]} def={calendars} onChange={(newCalendars) => setCalendars(newCalendars)} > </Selector>

                    </div>
                </div>
            )}

            {/* Selector for displaying day, month or week averages*/}
            <div className='mx-10'>
                <Selector options={["Day", 'Week', 'Month']} def="Day" onChange={handleDropDownClick} />
            </div>

            {/* If the user wants calendars render them */}
            {calendars === 'Yes' && (<Calendar />)}

            <div className="flex-col flex space-y-3 mt-5">

                <div > {/* Show the bleeding average with text and icons*/}
                    <div className="text-2xl font-bold">
                        <h1 className="text-xl font-bold" style={{ color: currentTheme.text }}> Bleeding </h1>
                    </div>
                    <div className="flex items-center justify-center border rounded-lg"
                        style={{
                            background: currentTheme.Bleeding1,
                            borderColor: currentTheme.border,
                            color: currentTheme.text
                        }}>
                        <img src={bloodIcon[selected]} className='float-left p-4 w-[30%] h-auto' />
                        <p className="flex-1 text-xl text-center font-bold block"> {bleeding[selected]} </p>
                    </div>
                </div>

                <div> {/* Show the pain average with text and icons*/}
                    <div className="text-2xl font-bold">
                        <h1 className="text-xl font-bold" style={{ color: currentTheme.text }}> Pain </h1>
                    </div>
                    <div className="flex items-center justify-center border rounded-lg"
                        style={{
                            background: currentTheme.Pain1,
                            borderColor: currentTheme.border,
                            color: currentTheme.text
                        }}>
                        <img src={painIcon[selected]} className='float-left p-4 w-[30%] h-auto' />
                        <p className="flex-1 text-xl text-center font-bold"> {pain[selected]} </p>
                    </div>
                </div>

                <div className="mb-10"> {/* Show the common symptoms with text and icons*/}
                    <h1 className='text-xl'
                        style={{
                            color: currentTheme.text
                        }}> Common symptoms: </h1>
                    <div className="grid grid-cols-3 gap-x-5">
                        {selectedArray.map((item, index) => (
                            <div key={index} className="col-span-1 flex flex-col items-center justify-center border rounded-lg"
                                style={{
                                    background: currentTheme.Symptom1,
                                    borderColor: currentTheme.border,
                                    color: currentTheme.text
                                }}>
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
