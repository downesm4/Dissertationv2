import React, { createContext, useContext, useEffect, useState } from "react";

// HANDLES WHETHER THE USER WANT CALENDARS ON THE HISTORY PAGES 
// For details on code, please see ThemeContext.tsx

type Calendars = 'Yes' | 'No';  // Specifies the options

interface CalendarsContextType {
    calendars: Calendars,
    setCalendars: (calendars: Calendars) => void;
}

const calendarsContext = createContext<CalendarsContextType | undefined>(undefined)

export const CalendarsProvider = ({ children }: { children: React.ReactNode }) => {
    const [calendars, setCalendarsState] = useState<Calendars>('No'); // Default should be no calendars - default is always the LD accessible option

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