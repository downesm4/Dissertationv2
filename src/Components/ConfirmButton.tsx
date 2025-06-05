import { useNavigate } from "react-router-dom";
import Button from "../Components/Button.tsx";

// Confirm button for the bottom of the pages - most styling is done in the page declaring the button 
const ConfirmButton = ({ style }) => {

    const navigate = useNavigate()

    return (

        <div className="px-8">

            <Button className="font-bold border"
                style={{ ...style }}
                onClick={() => navigate(-1)} > {/* Uses navigate to go back a page when clicked */}
                <h1 className="flex-1 text-3xl text-center font-bold "> Done </h1>
            </Button>
        </div>


    );
}
export default ConfirmButton;