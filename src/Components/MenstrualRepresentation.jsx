import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const Menstruation = () => {

    const size = 280
    const stroke = 30
    const center = size / 2
    const radius = (size - stroke) / 2

    const arc_span = 306
    const arc_offset = (360 - arc_span) / 2

    const segments = [
        { start: 0, end: arc_span, color: '#ffe8eb' }, //background circle
        { start: 0, end: 60, color: '#fecdd3' }, // predicted bleeding 
        { start: 0, end: 25, color: '#fb7185' }, //Logged Bleeding
        { start: 100, end: 150, color: '#bae6fd' }, //fertile
        { start: 120, end: 125, color: '#38bdf8' }, // ovulation 
    ]

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

    const [dragging, setDragging] = useState(false)

    const polarToCartesian = (angleDeg) => {
        const adjusted = angleDeg + arc_offset;
        const rad = (adjusted - 90) * (Math.PI / 180);
        return {
            x: center + radius * Math.cos(rad),
            y: center + radius * Math.sin(rad),
        };
    };

    const arc_path = (startAngle, endAngle) => {
        const start = polarToCartesian(startAngle);
        const end = polarToCartesian(endAngle);
        const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

        return `
      M ${start.x} ${start.y}
      A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}
    `;
    };

    const angleToDay = (angle) => Math.max(1, Math.round((angle / arc_span) * 28));

    const initial_Day = 3
    const initial_Angle = ((initial_Day - 1) / 27) * arc_span

    const [angle, setAngle] = useState(initial_Angle);
    const [day, setDay] = useState(initial_Day);
    const svgRef = useRef(null);

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

    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
    };

    const handleMouseMove = (e) => {
        if (e.buttons !== 1) return;
        handleMove(e.clientX, e.clientY);
    };

    const handleMouseDown = (e) => setDragging(true);
    const handleMouseUp = (e) => setDragging(false);
    const handleTouchDown = (e) => setDragging(true);
    const handleTouchUp = (e) => setDragging(false);

    const getMessage = () => {
        for (let i = messages.length - 1; i >= 0; i--) {
            if (day >= messages[i].day) return messages[i].text;
        }
        return "";
    };

    useEffect(() => {
        console.log('Angle:', angle, 'Day:', day, 'Handle Position:', handlePos);
    }, [angle, day]);

    const handlePos = polarToCartesian(angle);

    return (
        <div className="relative w-200px h-200px p-5">
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
                {/* Arc Segments */}
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
                {/*  Handle */}
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
                <p className="text-3xl font-bold text-red-950">Day {day}</p>
                <p className="text-red-950 font-regular text-center mt-1">{getMessage()}</p>
            </div>
        </div>
    );
}
export default Menstruation;