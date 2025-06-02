import React, { createContext, useContext, useEffect, useState } from "react";

type FlowEmoji = 'Yes' | 'No';

interface FlowEmojiContextType {
    flowEmoji: FlowEmoji,
    setFlowEmoji: (flowEmoji: FlowEmoji) => void;
}

const FlowEmojiContext = createContext<FlowEmojiContextType | undefined>(undefined)

export const FlowEmojiProvider = ({ children }: { children: React.ReactNode }) => {
    const [flowEmoji, setFlowEmojiState] = useState<FlowEmoji>('Yes');

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