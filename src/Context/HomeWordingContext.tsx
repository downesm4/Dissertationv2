import React, { createContext, useContext, useEffect, useState } from "react";

type HomeWording = 'Easy Read' | 'Complex';

interface HomeWordingContextType {
    homeWording: HomeWording,
    setHomeWording: (homeWording: HomeWording) => void;
}

const HomeWordingContext = createContext<HomeWordingContextType | undefined>(undefined)

export const HomeWordingProvider = ({ children }: { children: React.ReactNode }) => {
    const [homeWording, setHomeWordingState] = useState<HomeWording>('Easy Read');

    const setHomeWording = (newHomeWording: HomeWording) => {
        setHomeWordingState(newHomeWording);
        localStorage.setItem('homeWording', newHomeWording);
    }


    useEffect(() => {
        const storedHomeWording = localStorage.getItem('homeWording');
        if (storedHomeWording === 'Easy Read' || storedHomeWording === 'Complex') {
            setHomeWordingState(storedHomeWording)
        }
    }, [])

    return (
        <HomeWordingContext.Provider value={{ homeWording, setHomeWording }}>
            {children}
        </HomeWordingContext.Provider>
    )
};

export const useHomeWording = () => {
    const ctx = useContext(HomeWordingContext);
    if (!ctx) throw new Error('useHomeWording must be used within HomeWordingProvider');
    return ctx;
}