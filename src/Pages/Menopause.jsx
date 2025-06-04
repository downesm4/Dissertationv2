import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import '../App.css'
import Calendar from '../Components/Calendar.tsx'
import { useNavigate } from 'react-router-dom'

//icons
import Blood from '../assets/v2/Bleeding/blood2.svg'
import Pain from '../assets/v2/Pain/pain2.svg'
import Physical from '../assets/v2/physical.svg'
import Emotional from '../assets/v2/emotional.svg'
import Mood from '../assets/v2/Mood.png'
import Settings from '../assets/v2/settings.png'

// states for accessibility first 
import { useTheme } from '../Context/ThemeContext.tsx'
import { themes } from '../Styles/themes.js'
import { useHomeIcon } from '../Context/HomeIconContext.tsx'
import { useHomeWording } from '../Context/HomeWordingContext.tsx'


// This is the menopause home screen to access all things menopause 
function Menopause() {

    // navigation and accessibility first settings
    const navigate = useNavigate()
    const { theme } = useTheme()
    const currentTheme = themes[theme]
    const { homeIcon } = useHomeIcon()
    const { homeWording } = useHomeWording();

    return (
        <Layout allowBack={false} allowNav={true} current={'menopause'} >

            {/* Button for the accessibility first settings - navigate to the app Settings page */}
            <button onClick={() => navigate("/settings")} className="flex">
                <img src={Settings} className="w-8 h-8 float-left mb-2" />
            </button>

            <Calendar />

            <div className="flex flex-col mt-5 gap-x-5 gap-y-5 mb-5">

                {/* Button for physical symptoms - render icons depending on settings and wording based on settings */}
                <Button
                    className="flex justify-center items-center text-center font-bold text-2xl"
                    style={{
                        background: currentTheme.Symptom1,
                        color: currentTheme.text,
                        borderColor: currentTheme.border
                    }}
                    onClick={() => navigate('/physical')}>
                    {homeIcon === 'Yes' && (<img src={Physical} className='float-left w-[15%] h-auto ' />)}
                    <p className='flex-1'> {homeWording === 'Easy Read' ? 'Problems with your body' : 'Physical Symptoms'} </p>
                </Button>

                {/* Button for emotional symptoms - render icons depending on settings and wording based on settings */}
                <Button
                    className="flex justify-center items-center text-center font-bold text-2xl"
                    onClick={() => navigate('/emotional')}
                    style={{
                        background: currentTheme.Emotional1,
                        color: currentTheme.text,
                        borderColor: currentTheme.border
                    }}>
                    {homeIcon === 'Yes' && (<img src={Emotional} className='float-left w-[15%] h-auto ' />)}
                    <p className="flex-1"> {homeWording === 'Easy Read' ? 'Problems with how you feel' : 'Emotional Problems'} </p>
                </Button>

                {/* Button for mood symptoms - render icons depending on settings and wording based on settings */}
                <Button
                    className="flex justify-center items-center text-center font-bold text-2xl"
                    onClick={() => navigate('/mood')}
                    style={{
                        background: currentTheme.Mood1,
                        color: currentTheme.text,
                        borderColor: currentTheme.border
                    }}>
                    {homeIcon === 'Yes' && (<img src={Mood} className='float-left w-[15%] h-auto ' />)}

                    <p className="flex-1"> Mood </p>
                </Button>

                {/* Button for bleeding - render icons depending on settings and wording based on settings */}
                <Button
                    className="flex justify-center items-center text-center font-bold text-2xl"
                    onClick={() => navigate('/flow')}
                    style={{
                        background: currentTheme.Bleeding1,
                        color: currentTheme.text,
                        borderColor: currentTheme.border
                    }}>
                    {homeIcon === 'Yes' && (<img src={Blood} className='float-left w-[15%] h-auto ' />)}
                    <p className="flex-1"> {homeWording === 'Easy Read' ? 'Bleeding' : 'Menstrual Flow'} </p>
                </Button>

                {/* Button for pain - render icons depending on settings and wording based on settings */}
                <Button
                    className="flex bg-cyan-200 justify-center items-center text-center text-black font-bold text-2xl"
                    onClick={() => navigate('/pain')}
                    style={{
                        background: currentTheme.Pain1,
                        color: currentTheme.text,
                        borderColor: currentTheme.border
                    }}>
                    {homeIcon === 'Yes' && (<img src={Pain} className='float-left w-[15%] h-auto ' />)}
                    <p className='flex-1'> {homeWording === 'Easy Read' ? 'Pain' : 'Menstrual Pain'} </p>
                </Button>

            </div>

        </Layout >

    )
}

export default Menopause
