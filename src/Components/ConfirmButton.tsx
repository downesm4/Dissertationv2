import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Button from "../Components/Button.tsx";

const ConfirmButton = ({ children, className }) => {

    const navigate = useNavigate()

    return (

        <Button className={twMerge("frame w-full text-4xl text-black font-bold border border-primary", className)}
            onClick={() => navigate(-1)} >
            <h1 className="flex-1 text-xl text-black text-center font-bold "> Done </h1>
        </Button>

    );
}
export default ConfirmButton;