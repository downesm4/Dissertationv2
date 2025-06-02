import React, { createContext, useContext, useEffect, useState } from "react";

type Headings = 'Questions' | 'Statements';

interface HeadingsContextType {
    headings: Headings,
    setHeadings: (headings: Headings) => void;
}

const HeadingsContext = createContext<HeadingsContextType | undefined>(undefined)

export const HeadingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [headings, setHeadingsState] = useState<Headings>('Questions');

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