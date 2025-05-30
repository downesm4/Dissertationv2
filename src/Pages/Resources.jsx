import Layout from "../Templates/MobileLayout"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Components/Button";

function Resources() {

    const [selected, setSelected] = useState();

    const location = useLocation();
    const navigate = useNavigate()
    const resources = location.state?.resources;
    const title = location.state?.title

    useEffect(() => {
        if (!resources || !title) {
            navigate("/"); // or another fallback route
        }
    }, [resources, title, navigate]);

    if (!resources) return null;

    return (
        <Layout allowBack={true} allowNav={false} current={'learning'}>

            <h1 className="text-center text-3xl mt-3 "> {title} </h1>

            <div className="flex-col mx-3 mt-10 space-y-10">

                {resources.map(({ id, question, Icon }) => (
                    <Button key={id} className="bg-orange-200 flex items-center justify-center"
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