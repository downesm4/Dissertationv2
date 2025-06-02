import Layout from '../Templates/MobileLayout.tsx'
import Selector from '../Components/Selector.tsx'
import { useTheme } from '../Context/ThemeContext.tsx'
import { useHomeIcon } from '../Context/HomeIconContext.tsx';
import { useRepresentation } from '../Context/RepresentationContext.tsx';

function AppSettings() {

    const { theme, setTheme } = useTheme();
    const { homeIcon, setHomeIcon } = useHomeIcon();
    const { representation, setRepresentation } = useRepresentation();

    return (
        <Layout allowBack={true} allowNav={false}>

            <div className="flex-col space-y-10 mt-10">

                <div className="flex-col">
                    <h1 className="flex text-left text-xl ml-5 "> Choose a colour scheme: </h1>
                    <Selector options={["Colourful", "Muted"]} def={theme} onChange={(newTheme) => setTheme(newTheme)} > </Selector>
                </div>

                <div className="flex-col">
                    <h1 className="flex text-left text-xl ml-5 "> Do you want icons on the homepage buttons? </h1>
                    <Selector options={["Yes", "No"]} def={homeIcon} onChange={(newHomeIcon) => setHomeIcon(newHomeIcon)} > </Selector>
                </div>

                <div className="flex-col">
                    <h1 className="flex text-left text-xl ml-5 "> Linear or Circular Menstruation Cycle? </h1>
                    <Selector options={["Linear", "Circular"]} def={representation} onChange={(newRepresentation) => setRepresentation(newRepresentation)} > </Selector>
                </div>

            </div>

        </Layout >
    )
}

export default AppSettings
