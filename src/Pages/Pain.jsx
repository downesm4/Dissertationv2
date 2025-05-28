import Layout from '../Templates/MobileLayout.tsx'
import Button from '../Components/Button.tsx'
import TextInput from '../Components/TextInput.tsx'
import ConfirmButton from '../Components/ConfirmButton.tsx'
import '../App.css'
import Selector from '../Components/Selector.tsx'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'


function Pain() {

    const [selected, setSelected] = useState()

    return (
        <>
            <Layout allowBack={true} allowNav={false} title={"Today's Pain"}>

                <div className="flex-col space-y-10">

                    <Selector className="mb-8" options={['Morning', 'Afternoon', 'Evening', 'Night ']} def={'Morning'} />

                    <div className="flex-col space-y-7">
                        <Button className={twMerge("text-center text-2xl mx-2", selected === "none" ? "bg-rose-300 border-[0.75vw] shadow-lg/90" : "bg-rose-100 border-[0.5vw] shadow-md/50")} onClick={() => {
                            setSelected(selected === "none" ? "" : "none")
                        }}> None </Button>
                        <Button className={twMerge("text-center text-2xl mx-2", selected === "low" ? "bg-rose-300 border-[0.75vw] shadow-lg/90" : "bg-rose-100 border-[0.5vw] shadow-md/50")} onClick={() => {
                            setSelected(selected === "low" ? "" : "low")
                        }}> Low </Button>
                        <Button className={twMerge("text-center text-2xl mx-2", selected === "medium" ? "bg-rose-300 border-[0.75vw] shadow-lg/90" : "bg-rose-100 border-[0.5vw] shadow-md/50")} onClick={() => {
                            setSelected(selected === "medium" ? "" : "medium")
                        }}> Medium </Button>
                        <Button className={twMerge("text-center text-2xl mx-2", selected === "heavy" ? "bg-rose-300 border-[0.75vw] shadow-lg/90" : "bg-rose-100 border-[0.5vw] shadow-md/50")} onClick={() => {
                            setSelected(selected === "heavy" ? "" : "heavy")
                        }}> High </Button>
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

export default Pain
