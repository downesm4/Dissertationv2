import React, { createContext, useContext, useEffect, useState } from "react";

type FlowWording = 'Descriptive' | 'Abstract';

interface FlowWordingContextType {
    flowWording: FlowWording,
    setFlowWording: (flowWording: FlowWording) => void;
}

const FlowWordingContext = createContext<FlowWordingContextType | undefined>(undefined)

export const FlowWordingProvider = ({ children }: { children: React.ReactNode }) => {
    const [flowWording, setFlowWordingState] = useState<FlowWording>('Descriptive');

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