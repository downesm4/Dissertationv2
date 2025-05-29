import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react"

const Header = ({ allowBack, className, title }) => {

    const navigate = useNavigate()

    return (

        <div className={twMerge("", allowBack ? "" : " hidden ", className)} onClick={() => navigate(-1)}>
            <div className="flex float-left mt-10" onClick={() => navigate(-1)}>
                <ChevronLeft className=" w-[50%] h-auto ml-5 mr-2 text-blue-700" />
                <p className="text-md font-light text-blue-700"> Back </p>
            </div>

        </div >


    );
}

export default Header;