import React, { createContext, useContext, useEffect, useState } from "react";

// HANDLES THE TYPE OF WORDING THE USER WANTS ON FOR THE SYMPTOMS
// For details on code, please see ThemeContext.tsx

type SymptomWording = 'Descriptive' | 'Abstract';  // Specifies the options

interface SymptomWordingContextType {
    symptomWording: SymptomWording,
    setSymptomWording: (symptomWording: SymptomWording) => void;
}

const SymptomWordingContext = createContext<SymptomWordingContextType | undefined>(undefined)

export const SymptomWordingProvider = ({ children }: { children: React.ReactNode }) => {
    const [symptomWording, setSymptomWordingState] = useState<SymptomWording>('Descriptive'); // Default should be descriptive - default is always the LD accessible option

    const setSymptomWording = (newSymptomWording: SymptomWording) => {
        setSymptomWordingState(newSymptomWording);
        localStorage.setItem('symptomWording', newSymptomWording);
    }

    useEffect(() => {
        const storedSymptomWording = localStorage.getItem('symptomWording');
        if (storedSymptomWording === 'Descriptive' || storedSymptomWording === 'Abstract') {
            setSymptomWordingState(storedSymptomWording)
        }
    }, [])

    return (
        <SymptomWordingContext.Provider value={{ symptomWording, setSymptomWording }}>
            {children}
        </SymptomWordingContext.Provider>
    )
};

export const useSymptomWording = () => {
    const ctx = useContext(SymptomWordingContext);
    if (!ctx) throw new Error('useSymptomWording must be used within SymptomWordingProvider');
    return ctx;
}