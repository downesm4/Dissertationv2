import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Button from "../Components/Button.tsx";

const ConfirmButton = ({ className, style }) => {

    const navigate = useNavigate()

    return (

        <div className="px-8">

            <Button className="font-bold border"
                style={{ ...style }}
                onClick={() => navigate(-1)} >
                <h1 className="flex-1 text-3xl text-center font-bold "> Done </h1>
            </Button>
        </div>


    );
}
export default ConfirmButton;