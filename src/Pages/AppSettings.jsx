// imports components
import Layout from '../Templates/MobileLayout.tsx'
import Selector from '../Components/Selector.tsx'

//imports for context 
import { useTheme } from '../Context/ThemeContext.tsx'
import { useHomeIcon } from '../Context/HomeIconContext.tsx';
import { useRepresentation } from '../Context/RepresentationContext.tsx';
import { useHomeWording } from '../Context/HomeWordingContext.tsx';
import { useHeadings } from '../Context/HeadingContext.tsx';
import { themes } from '../Styles/themes.js';

function AppSettings() {

    const { theme, setTheme } = useTheme(); // deals with colour scheme 
    const currentTheme = themes[theme] // stores the current colour scheme 
    const { homeIcon, setHomeIcon } = useHomeIcon(); // deals with whether the user wants home icons on the homepages
    const { representation, setRepresentation } = useRepresentation(); // deals with whether the user wants linear or circular menstrual representation
    const { homeWording, setHomeWording } = useHomeWording() // deals with type of wordings on homepage buttons
    const { headings, setHeadings } = useHeadings() // deals with the types  of heading used 


    // This page is the settings for the Accessibility first options for the homepages and whole app
    return (
        <Layout allowBack={true} allowNav={false}>

            <div className="flex-col space-y-5 mt-5 mb-10">

                {/* Sets the settings for colour scheme */}
                <div className="flex-col border rounded-lg" style={{
                    background: currentTheme.Calendar,
                    color: currentTheme.text,
                    borderColor: currentTheme.border
                }}>
                    <h1 className="flex text-center text-xl m-3 "> Do you want a colourful or muted colour scheme? </h1>
                    <Selector className="-my-2 mx-4" options={["Colourful", "Muted"]} def={theme} onChange={(newTheme) => setTheme(newTheme)} > </Selector>
                </div>

                {/* Sets the settings for icons on homepages */}
                <div className="flex-col border rounded-lg" style={{
                    background: currentTheme.Calendar,
                    color: currentTheme.text,
                    borderColor: currentTheme.border
                }}>
                    <h1 className="flex text-center text-xl m-3 "> Do you want icons on the homepage buttons? </h1>
                    <Selector className="-my-2 mx-4" options={["Yes", "No"]} def={homeIcon} onChange={(newHomeIcon) => setHomeIcon(newHomeIcon)} > </Selector>
                </div>

                {/* Sets the settings for linear or circular menstruation representations */}
                <div className="flex-col border rounded-lg" style={{
                    background: currentTheme.Calendar,
                    color: currentTheme.text,
                    borderColor: currentTheme.border
                }}>
                    <h1 className="flex text-center text-xl m-3 "> Do you want a linear or circular menstruation cycle? </h1>
                    <Selector className="-my-2 mx-4" options={["Linear", "Circular"]} def={representation} onChange={(newRepresentation) => setRepresentation(newRepresentation)} > </Selector>
                </div>

                {/* Sets the settings for wording type on homepage buttons */}
                <div className="flex-col border rounded-lg" style={{
                    background: currentTheme.Calendar,
                    color: currentTheme.text,
                    borderColor: currentTheme.border
                }}>
                    <h1 className="flex text-center text-xl m-3 "> Do you want easy read or complex wording for homepage buttons? </h1>
                    <Selector className="-my-2 mx-4" options={["Easy Read", "Complex"]} def={homeWording} onChange={(newHomeWording) => setHomeWording(newHomeWording)} > </Selector>
                </div>

                {/* Sets the settings for headings */}
                <div className="flex-col border rounded-lg" style={{
                    background: currentTheme.Calendar,
                    color: currentTheme.text,
                    borderColor: currentTheme.border
                }}>
                    <h1 className="flex text-center text-xl m-3 "> Do you want question or statement headings? </h1>
                    <Selector className="-my-2 mx-4" options={["Questions", "Statements"]} def={headings} onChange={(newHeadings) => setHeadings(newHeadings)} > </Selector>
                </div>

            </div>

        </Layout >
    )
}

export default AppSettings
