import '../App.css'

import Menstruation from '../Components/MenstrualRepresentation.jsx'
import LinearRepresentation from '../Components/LinearRepresentation.tsx'

import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'

//images
import Blood from '../assets/v2/Bleeding/blood2.svg'
import Pain from '../assets/v2/Pain/pain2.svg'
import Symptoms from '../assets/v2/symptoms.svg'
import Mood from '../assets/v2/Mood.png'
import Settings from '../assets/v2/settings.png'

// Settings Accessibility first 
import { themes } from '../Styles/themes.js'
import { useNavigate } from 'react-router-dom'
import { useHomeIcon } from '../Context/HomeIconContext.tsx'
import { useRepresentation } from '../Context/RepresentationContext.tsx'
import { useHomeWording } from '../Context/HomeWordingContext.tsx'
import { useTheme } from '../Context/ThemeContext.tsx'

// This is the menstrual home screen to access all things menstrual 

function Menstrual() {
    // navigation and setting states 
    const navigate = useNavigate();
    const { theme } = useTheme();
    const currentTheme = themes[theme];
    const { homeIcon } = useHomeIcon();
    const { representation } = useRepresentation();
    const { homeWording } = useHomeWording();

    return (
        <Layout allowBack={false} allowNav={true} current={'menstruation'}>

            {/* Button for settings and navigates to the app settings page */}
            <button onClick={() => navigate("/settings")} className="flex">
                <img src={Settings} className="w-8 h-8 float-left " />
            </button>

            {/* Render different representation depending on settings */}
            {representation === 'Linear' && (<LinearRepresentation />)}
            {representation === 'Circular' && (<Menstruation />)}

            <div className="flex flex-col mt-8 mb-10 gap-x-5 gap-y-5">
                {/* Bleeding Button - render icons and wording depending on settings */}
                <Button className="flex items-center justify-center text-center font-bold text-2xl"
                    onClick={() => navigate('/flow')}
                    style={{
                        background: currentTheme.Bleeding1,
                        color: currentTheme.text,
                        borderColor: currentTheme.border
                    }}>
                    {homeIcon === 'Yes' && (<img src={Blood} className='float-left w-[15%] h-auto ' />)}
                    <p className="flex-1"> {homeWording === 'Easy Read' ? 'Bleeding' : 'Menstrual Flow'} </p>
                </Button>

                {/* Pain Button - render icons and wording depending on settings */}
                <Button
                    className="flex items-center justify-center text-center font-bold text-2xl"
                    onClick={() => navigate('/pain')}
                    style={{
                        background: currentTheme.Pain1,
                        color: currentTheme.text,
                        borderColor: currentTheme.border
                    }}>
                    {homeIcon === 'Yes' && (<img src={Pain} className='float-left w-[15%] h-auto ' />)}
                    <p className="flex-1"> {homeWording === 'Easy Read' ? 'Pain' : 'Menstrual Pain'} </p>
                </Button>

                {/* Symptoms Button - render icons and wording depending on settings */}
                <Button
                    className="flex items-center justify-center text-center font-bold text-2xl"
                    onClick={() => navigate('/symptoms')}
                    style={{
                        background: currentTheme.Symptom1,
                        color: currentTheme.text,
                        borderColor: currentTheme.border
                    }}>
                    {homeIcon === 'Yes' && (<img src={Symptoms} className='float-left w-[15%] h-auto ' />)}
                    <p className="flex-1"> {homeWording === 'Easy Read' ? 'Problems' : 'Symptoms'} </p>
                </Button>

                {/* Mood Button - render icons and wording depending on settings */}
                <Button
                    className="flex items-center justify-center text-center font-bold text-2xl"
                    onClick={() => navigate('/mood')}

                    style={{
                        background: currentTheme.Mood1,
                        color: currentTheme.text,
                        borderColor: currentTheme.border
                    }}>
                    {homeIcon === 'Yes' && (<img src={Mood} className='float-left w-[15%] h-auto ' />)}
                    <p className="flex-1"> Moods </p>
                </Button>
            </div >
        </Layout >
    )
}

export default Menstrual
