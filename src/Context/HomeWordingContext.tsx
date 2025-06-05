import React, { createContext, useContext, useEffect, useState } from "react";

// HANDLES THE TYPE OF WORDING FOR THE BUTTONS ON THE HOMEPAGES
// For details on code, please see ThemeContext.tsx

type HomeWording = 'Easy Read' | 'Complex';  // Specifies the options

interface HomeWordingContextType {
    homeWording: HomeWording,
    setHomeWording: (homeWording: HomeWording) => void;
}

const HomeWordingContext = createContext<HomeWordingContextType | undefined>(undefined)

export const HomeWordingProvider = ({ children }: { children: React.ReactNode }) => {
    const [homeWording, setHomeWordingState] = useState<HomeWording>('Easy Read'); // Default should be easy read - default is always the LD accessible option

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