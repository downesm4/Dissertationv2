import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import TextInput from '../Components/TextInput.tsx'
import ConfirmButton from '../Components/ConfirmButton.tsx'
import '../App.css'
import Selector from '../Components/Selector.tsx'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'


function Flow() {

    const [selected, setSelected] = useState()

    return (
        <>
            <Layout allowBack={true} allowNav={false} title={"Today's Flow"}>

                <div className="flex-col space-y-10">

                    <Selector className="mb-8" options={['Morning', 'Afternoon', 'Evening', 'Night ']} def={'Morning'} />

                    <div className="flex-col space-y-7">
                        <Button className={twMerge("text-center text-2xl mx-2", selected === "spotting" ? "bg-rose-300 border-[0.75vw] shadow-lg/90" : "bg-rose-100 border-[0.5vw] shadow-md/50")} onClick={() => {
                            setSelected(selected === "spotting" ? "" : "spotting")
                        }}> Spotting </Button>
                        <Button className={twMerge("text-center text-2xl mx-2", selected === "light" ? "bg-rose-300 border-[0.75vw] shadow-lg/90" : "bg-rose-100 border-[0.5vw] shadow-md/50")} onClick={() => {
                            setSelected(selected === "light" ? "" : "light")
                        }}> Light </Button>
                        <Button className={twMerge("text-center text-2xl mx-2", selected === "medium" ? "bg-rose-300 border-[0.75vw] shadow-lg/90" : "bg-rose-100 border-[0.5vw] shadow-md/50")} onClick={() => {
                            setSelected(selected === "medium" ? "" : "medium")
                        }}> Medium </Button>
                        <Button className={twMerge("text-center text-2xl mx-2", selected === "heavy" ? "bg-rose-300 border-[0.75vw] shadow-lg/90" : "bg-rose-100 border-[0.5vw] shadow-md/50")} onClick={() => {
                            setSelected(selected === "heavy" ? "" : "heavy")
                        }}> Heavy </Button>
                    </div>

                    <div className="flex-col space-y-3 mb-10">
                        <TextInput rowNo={4} />
                        <ConfirmButton className="mx-15" />
                    </div>

                </div>

            </Layout >
        </>
    )
}

export default Flow
