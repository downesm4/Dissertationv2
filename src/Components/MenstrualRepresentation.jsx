import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { themes } from "../Styles/themes";

// Circular Representation of the menstrual cycle 
const Menstruation = () => {

    // Deals with the colour scheme depending on current settings
    const { theme } = useTheme()
    const currentTheme = themes[theme]

    // Details for sizing and styling of the circle
    const size = 280
    const stroke = 30
    const center = size / 2
    const radius = (size - stroke) / 2
    const arc_span = 306 // don't span the whole circle only 85%
    const arc_offset = (360 - arc_span) / 2

    const segments = [
        { start: 0, end: arc_span, color: '#ffe4e6' }, //background circle
        { start: 0, end: 60, color: '#fecdd3' }, // predicted bleeding 
        { start: 0, end: 25, color: '#fb7185' }, //Logged Bleeding
        { start: 100, end: 150, color: '#bfdbfe' }, //fertile
        { start: 120, end: 125, color: '#60a5fa' }, // ovulation 
    ]

    // Example messages to go in the middle of the circle
    const messages = [
        { day: 1, text: "Expect some bleeding today" },
        { day: 4, text: "Maybe lighter bleeding today" },
        { day: 6, text: "Preparing for fertile window" },
        { day: 9, text: "Fertile window open" },
        { day: 11, text: "Ovulation day!" },
        { day: 12, text: "Fertile window open" },
        { day: 15, text: "Fertile window closed" },
        { day: 25, text: "Pre-menstrual symptoms" },
    ]

    // Decides whether the user is dragging to appropriately move the handle around the curcle 
    const [dragging, setDragging] = useState(false)

    // Convert the angle in degrees to x and y coordinates 
    const polarToCartesian = (angleDeg) => {
        const adjusted = angleDeg + arc_offset; // adds the arc offset ot move the starting position
        const rad = (adjusted - 90) * (Math.PI / 180); // converts degrees to radians
        return { // Calculates position on a circle using radius and center
            x: center + radius * Math.cos(rad),
            y: center + radius * Math.sin(rad),
        };
    };

    // creates an SVG path to draw an arc from the start to the end 
    const arc_path = (startAngle, endAngle) => {
        // Convert start and end to x and y coordinates 
        const start = polarToCartesian(startAngle);
        const end = polarToCartesian(endAngle);

        // determine if arc is more than 180 degrees 
        const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

        // returns the SVG path string 
        // M - move to the start of the arc point
        // A - Draw an Arc
        return `
      M ${start.x} ${start.y}
      A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}
    `;
    };

    // Converts an angle into a day between 1 and 28 
    const angleToDay = (angle) => Math.max(1, Math.round((angle / arc_span) * 28));

    // Start the handle at day 3 for example 
    const initial_Day = 3
    const initial_Angle = ((initial_Day - 1) / 27) * arc_span

    const [angle, setAngle] = useState(initial_Angle);
    const [day, setDay] = useState(initial_Day);
    const svgRef = useRef(null);

    // handsles when the user is moving the handle around the circle 
    const handleMove = (clientX, clientY) => {
        const rect = svgRef.current.getBoundingClientRect();
        const x = clientX - (rect.left + center);
        const y = clientY - (rect.top + center);
        let deg = (Math.atan2(y, x) * 180) / Math.PI + 90;
        if (deg < 0) deg += 360;
        if (deg > arc_span) deg = arc_span;
        setAngle(deg);
        setDay(angleToDay(deg));
    };

    // Deal with when the touch moves
    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
    };

    // Deals with when the mouse moves
    const handleMouseMove = (e) => {
        if (e.buttons !== 1) return;
        handleMove(e.clientX, e.clientY);
    };

    // set dragging depending on whether mouse/touch is up or down 
    const handleMouseDown = (e) => setDragging(true);
    const handleMouseUp = (e) => setDragging(false);
    const handleTouchDown = (e) => setDragging(true);
    const handleTouchUp = (e) => setDragging(false);

    // Get the message from the messages array depending on the day to put in the middle of the circle
    const getMessage = () => {
        for (let i = messages.length - 1; i >= 0; i--) {
            if (day >= messages[i].day) return messages[i].text;
        }
        return "";
    };

    // Calculate the position of the handle 
    const handlePos = polarToCartesian(angle);

    return (
        <div>
            <div className="relative w-200px h-200px p-5">
                {/* Creates the SVG */}
                <svg ref={svgRef}
                    width={size}
                    height={size}
                    className="touch-none mx-auto"
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchDown={handleTouchDown}
                    onTouchUp={handleTouchUp}
                    onTouchMove={handleTouchMove}
                >
                    {/* Arc Segments - colour changes depending on what it represents */}
                    {segments.map((seg, i) => (
                        <path
                            key={i}
                            d={arc_path(seg.start, seg.end)}
                            stroke={seg.color}
                            strokeWidth={stroke}
                            fill="none"
                            strokeLinecap="round"
                            transform="rotate(-23 140 140)"
                        />
                    ))}

                    {/*  Handle to move around the circle*/}
                    <circle
                        cx={handlePos.x}
                        cy={handlePos.y}
                        r={14}
                        fill="none"
                        stroke="#5b342c"
                        strokeWidth={4}
                        transform="rotate(-23 140 140)"
                    />
                </svg>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none mx-2">
                    <p className="text-3xl font-bold " style={{ color: currentTheme.text }}>Day {day}</p>
                    <p className="font-regular text-center mt-1" style={{ color: currentTheme.text }}>{getMessage()}</p>
                </div>


            </div>

            {/* Key for Circle Graphic - help the user understand the different colours - colours in tailwind css because they don't change depending on colour scheme */}
            <div className="rounded-lg border-[0.25vw] bg-rose-100 my-3 grid grid-cols-4 gap-2"
                style={{
                    color: currentTheme.text,
                    borderColor: currentTheme.border,
                }}>

                <div className='flex items-center justify-center rounded-full w-6 h-6 mx-auto mt-2 bg-rose-400 col-span-1 border-[0.2vw]'> </div>
                <div className='flex items-center justify-center rounded-full w-6 h-6 mx-auto mt-2 bg-rose-200 col-span-1 border-[0.2vw]'> </div>
                <div className='flex items-center justify-center rounded-full w-6 h-6 mx-auto mt-2 bg-blue-200 col-span-1 border-[0.2vw]'> </div>
                <div className='flex items-center justify-center rounded-full w-6 h-6 mx-auto mt-2 bg-blue-400 col-span-1 border-[0.2vw]'> </div>


                <h3 className='col-span-1 text-center text-sm font-bold'> Logged Bleeding </h3>
                <h3 className='col-span-1 text-center text-sm font-bold'> Predicted Bleeding </h3>
                <h3 className='col-span-1 text-center text-sm font-bold'> Predicted Fertile Days </h3>
                <h3 className='col-span-1 text-center text-sm font-bold'> Predicted Ovulation </h3>
            </div>
        </div>
    );
}

export default Menstruation;