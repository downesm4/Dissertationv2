import React, { createContext, useContext, useEffect, useState } from "react";

type PainWording = 'Descriptive' | 'Abstract';

interface PainWordingContextType {
    painWording: PainWording,
    setPainWording: (painWording: PainWording) => void;
}

const PainWordingContext = createContext<PainWordingContextType | undefined>(undefined)

export const PainWordingProvider = ({ children }: { children: React.ReactNode }) => {
    const [painWording, setPainWordingState] = useState<PainWording>('Descriptive');

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