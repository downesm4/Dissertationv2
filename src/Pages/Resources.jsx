import Layout from "../Templates/MobileLayout"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Components/Button";
import { useTheme } from "../Context/ThemeContext";
import { themes } from "../Styles/themes";

// This page lists the resources for the learning area 
function Resources() {

    const [selected, setSelected] = useState(); // for styling selected button 

    // Constants for what has been passed in 
    const location = useLocation();
    const navigate = useNavigate()
    const resources = location.state?.resources;
    const title = location.state?.title

    // Colour scheme settings
    const { theme } = useTheme()
    const currentTheme = themes[theme]

    // Checks that resources and a title has been passed in and if not navigates to the menstrual hoe 
    useEffect(() => {
        if (!resources || !title) {
            navigate("/"); // or another fallback route
        }
    }, [resources, title, navigate]);

    if (!resources) return null;

    return (
        <Layout allowBack={true} allowNav={false}>

            {/* Title depending on what has been passed in */}
            <h1 className="text-center font-bold text-3xl mt-3 "> {title} </h1>

            <div className="flex-col mx-3 mt-10 space-y-10">

                {/* maps all the resources related to the topic in individual buttons */}
                {resources.map(({ id, question, Icon }) => (
                    <Button key={id} className="bg-orange-200 flex items-center justify-center"
                        style={{ background: currentTheme.Learning2 }}
                        onClick={() => setSelected(selected === id ? "" : id)}>
                        <img src={Icon} className="float-left w-[15%] h-auto" />
                        <p className="flex-1 text-xl text-center"> {question} </p>

                    </Button>
                ))}


            </div>

        </Layout>
    )

}

export default Resources