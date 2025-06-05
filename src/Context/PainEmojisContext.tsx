import React, { createContext, useContext, useEffect, useState } from "react";

// HANDLES WHETHER THE USER WANTS EMOJI ICONS ON THE PAIN PAGE
// For details on code, please see ThemeContext.tsx

type PainEmoji = 'Yes' | 'No';  // Specifies the options

interface PainEmojiContextType {
    painEmoji: PainEmoji,
    setPainEmoji: (painEmoji: PainEmoji) => void;
}

const PainEmojiContext = createContext<PainEmojiContextType | undefined>(undefined)

export const PainEmojiProvider = ({ children }: { children: React.ReactNode }) => {
    const [painEmoji, setPainEmojiState] = useState<PainEmoji>('Yes'); // Default should be yes to emojis - default is always the LD accessible option

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