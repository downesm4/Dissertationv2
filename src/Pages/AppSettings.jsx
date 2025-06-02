import Layout from '../Templates/MobileLayout.tsx'
import Selector from '../Components/Selector.tsx'
import { useTheme } from '../Context/ThemeContext.tsx'
import { useHomeIcon } from '../Context/HomeIconContext.tsx';
import { useRepresentation } from '../Context/RepresentationContext.tsx';
import { useHomeWording } from '../Context/HomeWordingContext.tsx';
import { useHeadings } from '../Context/HeadingContext.tsx';
import { themes } from '../Styles/themes.js';

function AppSettings() {

    const { theme, setTheme } = useTheme();
    const currentTheme = themes[theme]
    const { homeIcon, setHomeIcon } = useHomeIcon();
    const { representation, setRepresentation } = useRepresentation();
    const { homeWording, setHomeWording } = useHomeWording()
    const { headings, setHeadings } = useHeadings()

    return (
        <Layout allowBack={true} allowNav={false}>

            <div className="flex-col space-y-5 mt-5">

                <div className="flex-col border rounded-lg" style={{
                    background: currentTheme.Calendar,
                    color: currentTheme.text,
                    borderColor: currentTheme.border
                }}>
                    <h1 className="flex text-center text-xl m-3 "> Do you want a colourful or muted colour scheme? </h1>
                    <Selector className="-my-2 mx-4" options={["Colourful", "Muted"]} def={theme} onChange={(newTheme) => setTheme(newTheme)} > </Selector>
                </div>

                <div className="flex-col border rounded-lg" style={{
                    background: currentTheme.Calendar,
                    color: currentTheme.text,
                    borderColor: currentTheme.border
                }}>
                    <h1 className="flex text-center text-xl m-3 "> Do you want icons on the homepage buttons? </h1>
                    <Selector className="-my-2 mx-4" options={["Yes", "No"]} def={homeIcon} onChange={(newHomeIcon) => setHomeIcon(newHomeIcon)} > </Selector>
                </div>

                <div className="flex-col border rounded-lg" style={{
                    background: currentTheme.Calendar,
                    color: currentTheme.text,
                    borderColor: currentTheme.border
                }}>
                    <h1 className="flex text-center text-xl m-3 "> Do you want a linear or circular menstruation cycle? </h1>
                    <Selector className="-my-2 mx-4" options={["Linear", "Circular"]} def={representation} onChange={(newRepresentation) => setRepresentation(newRepresentation)} > </Selector>
                </div>

                <div className="flex-col border rounded-lg" style={{
                    background: currentTheme.Calendar,
                    color: currentTheme.text,
                    borderColor: currentTheme.border
                }}>
                    <h1 className="flex text-center text-xl m-3 "> Do you want simple or complex wording for homepage buttons? </h1>
                    <Selector className="-my-2 mx-4" options={["Easy Read", "Complex"]} def={homeWording} onChange={(newHomeWording) => setHomeWording(newHomeWording)} > </Selector>
                </div>

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
