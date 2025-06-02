import React, { createContext, useContext, useEffect, useState } from "react";

type PainEmoji = 'Yes' | 'No';

interface PainEmojiContextType {
    painEmoji: PainEmoji,
    setPainEmoji: (painEmoji: PainEmoji) => void;
}

const PainEmojiContext = createContext<PainEmojiContextType | undefined>(undefined)

export const PainEmojiProvider = ({ children }: { children: React.ReactNode }) => {
    const [painEmoji, setPainEmojiState] = useState<PainEmoji>('Yes');

    const setPainEmoji = (newPainEmoji: PainEmoji) => {
        setPainEmojiState(newPainEmoji);
        localStorage.setItem('painEmoji', newPainEmoji);
    }

    useEffect(() => {
        const storedPainEmoji = localStorage.getItem('painEmoji');
        if (storedPainEmoji === 'Yes' || storedPainEmoji === 'No') {
            setPainEmojiState(storedPainEmoji)
        }
    }, [])

    return (
        <PainEmojiContext.Provider value={{ painEmoji, setPainEmoji }}>
            {children}
        </PainEmojiContext.Provider>
    )
};

export const usePainEmoji = () => {
    const ctx = useContext(PainEmojiContext);
    if (!ctx) throw new Error('usePainEmoji must be used within PainEmojiProvider');
    return ctx;
}