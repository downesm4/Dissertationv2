import React, { createContext, useContext, useEffect, useState } from "react";

// HANDLES WHETHER THE USER WANTS EMOJI ICONS ON THE FLOW PAGE
// For details on code, please see ThemeContext.tsx

type FlowEmoji = 'Yes' | 'No';  // Specifies the options

interface FlowEmojiContextType {
    flowEmoji: FlowEmoji,
    setFlowEmoji: (flowEmoji: FlowEmoji) => void;
}

const FlowEmojiContext = createContext<FlowEmojiContextType | undefined>(undefined)

export const FlowEmojiProvider = ({ children }: { children: React.ReactNode }) => {
    const [flowEmoji, setFlowEmojiState] = useState<FlowEmoji>('Yes'); // Default should be yes to emoji icons - default is always the LD accessible option

    const setFlowEmoji = (newFlowEmoji: FlowEmoji) => {
        setFlowEmojiState(newFlowEmoji);
        localStorage.setItem('flowEmoji', newFlowEmoji);
    }

    useEffect(() => {
        const storedFlowEmoji = localStorage.getItem('flowEmoji');
        if (storedFlowEmoji === 'Yes' || storedFlowEmoji === 'No') {
            setFlowEmojiState(storedFlowEmoji)
        }
    }, [])

    return (
        <FlowEmojiContext.Provider value={{ flowEmoji, setFlowEmoji }}>
            {children}
        </FlowEmojiContext.Provider>
    )
};

export const useFlowEmoji = () => {
    const ctx = useContext(FlowEmojiContext);
    if (!ctx) throw new Error('useFlowEmoji must be used within FlowEmojiProvider');
    return ctx;
}