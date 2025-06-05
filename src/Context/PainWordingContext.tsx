import React, { createContext, useContext, useEffect, useState } from "react";

// HANDLES THE TYPE OF WORDING THE USER WANTS ON THE PAIN PAGE
// For details on code, please see ThemeContext.tsx

type PainWording = 'Descriptive' | 'Abstract';  // Specifies the options

interface PainWordingContextType {
    painWording: PainWording,
    setPainWording: (painWording: PainWording) => void;
}

const PainWordingContext = createContext<PainWordingContextType | undefined>(undefined)

export const PainWordingProvider = ({ children }: { children: React.ReactNode }) => {
    const [painWording, setPainWordingState] = useState<PainWording>('Descriptive'); // Default should be descriptive wording - default is always the LD accessible option

    const setPainWording = (newPainWording: PainWording) => {
        setPainWordingState(newPainWording);
        localStorage.setItem('painWording', newPainWording);
    }

    useEffect(() => {
        const storedPainWording = localStorage.getItem('painWording');
        if (storedPainWording === 'Descriptive' || storedPainWording === 'Abstract') {
            setPainWordingState(storedPainWording)
        }
    }, [])

    return (
        <PainWordingContext.Provider value={{ painWording, setPainWording }}>
            {children}
        </PainWordingContext.Provider>
    )
};

export const usePainWording = () => {
    const ctx = useContext(PainWordingContext);
    if (!ctx) throw new Error('usePainWording must be used within PainWordingProvider');
    return ctx;
}