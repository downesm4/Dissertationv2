import React, { createContext, useContext, useEffect, useState } from "react";

type Calendars = 'Yes' | 'No';

interface CalendarsContextType {
    calendars: Calendars,
    setCalendars: (calendars: Calendars) => void;
}

const calendarsContext = createContext<CalendarsContextType | undefined>(undefined)

export const CalendarsProvider = ({ children }: { children: React.ReactNode }) => {
    const [calendars, setCalendarsState] = useState<Calendars>('No');

    const setCalendars = (newCalendars: Calendars) => {
        setCalendarsState(newCalendars);
        localStorage.setItem('calendars', newCalendars);
    }

    useEffect(() => {
        const storedCalendars = localStorage.getItem('calendars');
        if (storedCalendars === 'Yes' || storedCalendars === 'No') {
            setCalendarsState(storedCalendars)
        }
    }, [])

    return (
        <calendarsContext.Provider value={{ calendars, setCalendars }}>
            {children}
        </calendarsContext.Provider>
    )
};

export const useCalendars = () => {
    const ctx = useContext(calendarsContext);
    if (!ctx) throw new Error('useCalendar must be used within CalendarsProvider');
    return ctx;
}