import React, { createContext, useContext, useEffect, useState } from "react";

// HANDLES THE TYPE OF WORDING THE USER WANTS ON THE FLOW PAGE
// For details on code, please see ThemeContext.tsx

type FlowWording = 'Descriptive' | 'Abstract';  // Specifies the options

interface FlowWordingContextType {
    flowWording: FlowWording,
    setFlowWording: (flowWording: FlowWording) => void;
}

const FlowWordingContext = createContext<FlowWordingContextType | undefined>(undefined)

export const FlowWordingProvider = ({ children }: { children: React.ReactNode }) => {
    const [flowWording, setFlowWordingState] = useState<FlowWording>('Descriptive'); // Default should be descriptive wording - default is always the LD accessible option

    const setFlowWording = (newFlowWording: FlowWording) => {
        setFlowWordingState(newFlowWording);
        localStorage.setItem('flowWording', newFlowWording);
    }

    useEffect(() => {
        const storedFlowWording = localStorage.getItem('flowWording');
        if (storedFlowWording === 'Descriptive' || storedFlowWording === 'Abstract') {
            setFlowWordingState(storedFlowWording)
        }
    }, [])

    return (
        <FlowWordingContext.Provider value={{ flowWording, setFlowWording }}>
            {children}
        </FlowWordingContext.Provider>
    )
};

export const useFlowWording = () => {
    const ctx = useContext(FlowWordingContext);
    if (!ctx) throw new Error('useFlowWording must be used within FlowWordingProvider');
    return ctx;
}