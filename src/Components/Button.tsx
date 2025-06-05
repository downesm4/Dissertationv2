import { twMerge } from "tailwind-merge";

// Creates the button which is used for the majority of the application
// styling and colours is mostly done in the page when the button is declared
const Button = ({ children, onClick, className, style }) => {

    return (

        <div onClick={onClick} style={{ ...style }} className={twMerge('rounded-lg border-[0.5vw] shadow-md/50 p-3', className)} >
            {children}
        </div >
    );
}
export default Button;