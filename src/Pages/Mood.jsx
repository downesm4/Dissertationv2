import Layout from '../Templates/MobileLayout.tsx'
import '../App.css'

// icons
import Happy3 from '../assets/v2/Moods/happy3.png';
import Sad3 from '../assets/v2/Moods/sad3.png';
import Angry3 from '../assets/v2/Moods/angry3.png';
import Excited3 from '../assets/v2/Moods/excited3.png';
import Scared3 from '../assets/v2/Moods/scared3.png';
import Lonely3 from '../assets/v2/Moods/lonely3.png';
import Surprised3 from '../assets/v2/Moods/suprised3.png';

// Settings 
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext.tsx';
import { themes } from '../Styles/themes.js';
import { useHeadings } from '../Context/HeadingContext.tsx';
import Button from '../Components/Button.tsx';

// Default moods 
const defaultMoods = [
    {
        id: 1, emotion: "Happy", question: ["How happy were you?", "Happy"], IC: Happy3
    }, {
        id: 2, emotion: "Sad", question: ["How sad were you?", "Sad"], IC: Sad3
    }, {
        id: 3, emotion: "Angry", question: ["How angry were you?", "Angry"], IC: Angry3
    }, {
        id: 4, emotion: "Excited", question: ["How excited were you?", "Excited"], IC: Excited3
    }, {
        id: 5, emotion: "Scared", question: ["How scared were you?", "Scared"], IC: Scared3
    }, {
        id: 6, emotion: "Lonely", question: ["How lonely were you?", "Lonely"], IC: Lonely3
    }, {
        id: 7, emotion: "Surprised", question: ["How surprised were you?", "Surprised"], IC: Surprised3
    }
];

// this page is for selecting moods

function Mood() {

    // navigation and accessibility states
    const navigate = useNavigate();
    const { theme } = useTheme();
    const currentTheme = themes[theme];
    const { headings } = useHeadings()

    return (
        <>
            {/* Layout used in each of the pages - 
            allowBack decides if the back button should be rendered, allowNav decides if the navigation bar should render */}
            <Layout allowBack={true} allowNav={false} >

                <div className="flex-col space-y-8">

                    {/* Heading for the mood page */}
                    <h1 className="text-xl font-bold text-center mb-10"> {headings === "Questions" ? "How are you feeling today?" : "Today's Feelings"} </h1>

                    <div className="mt-5 grid grid-cols-2 gap-y-6 gap-x-6 ">
                        {/* Map the moods in divs and when clicked navigate the mood severity 
                            Navigate - passes in the question and the id related to the mood */}
                        {defaultMoods.map(({ id, emotion, question, IC }) => (
                            <Button key={id}
                                onClick={() => navigate("/mseverity", { state: { q: { question }, id: { id } } })}
                                className="col-span-1 flex flex-col items-center justify-center border rounded-lg"
                                style={{
                                    background: currentTheme.Mood1,
                                    borderColor: currentTheme.border,
                                    color: currentTheme.text
                                }}>
                                <img src={IC} className='p-1 w-[50%] h-auto' />
                                <p className="text-xl text-center font-bold "> {emotion} </p>
                            </Button>
                        ))}
                    </div>
                </div>
            </Layout >
        </>
    )
}

export default Mood
