import React, { createContext, useContext, useEffect, useState } from "react";

// HANDLES THE TYPE OF HEADINGS THE USER WANTS FOR THE WHOLE APP 
// For details on code, please see ThemeContext.tsx

type Headings = 'Questions' | 'Statements';  // Specifies the options

interface HeadingsContextType {
    headings: Headings,
    setHeadings: (headings: Headings) => void;
}

const HeadingsContext = createContext<HeadingsContextType | undefined>(undefined)

export const HeadingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [headings, setHeadingsState] = useState<Headings>('Questions'); // Default should be questions - default is always the LD accessible option

    const setHeadings = (newHeadings: Headings) => {
        setHeadingsState(newHeadings);
        localStorage.setItem('headings', newHeadings);
    }


    useEffect(() => {
        const storedHeadings = localStorage.getItem('headings');
        if (storedHeadings === 'Questions' || storedHeadings === 'Statements') {
            setHeadingsState(storedHeadings)
        }
    }, [])

    return (
        <HeadingsContext.Provider value={{ headings, setHeadings }}>
            {children}
        </HeadingsContext.Provider>
    )
};

export const useHeadings = () => {
    const ctx = useContext(HeadingsContext);
    if (!ctx) throw new Error('useHeadings must be used within HeadingsProvider');
    return ctx;
}