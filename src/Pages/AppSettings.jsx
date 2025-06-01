import Layout from '../Templates/MobileLayout.tsx'
import Selector from '../Components/Selector.tsx'
import { useTheme } from '../Context/ThemeContext.tsx'

function AppSettings() {

    const { theme, setTheme } = useTheme();

    return (
        <Layout allowBack={true} allowNav={false}>

            <div className="flex-col space-y-10 mt-10">

                <div className="flex-col space-y-3">
                    <h1 className="flex text-left text-xl ml-5 "> Choose a colour scheme: </h1>
                    <Selector options={["Muted", "Colourful"]} def={theme} onChange={(newTheme) => setTheme(newTheme)} > </Selector>
                </div>

            </div>

        </Layout >
    )
}

export default AppSettings
