import React, { createContext, useContext, useEffect, useState } from "react";

// HANDLES WHETHER THE USER WANTS ICONS ON THE BUTTONS ON THE HOME SCREENS
// For details on code, please see ThemeContext.tsx

type HomeIcon = 'Yes' | 'No';  // Specifies the options

interface HomeIconContextType {
    homeIcon: HomeIcon,
    setHomeIcon: (homeIcon: HomeIcon) => void;
}

const HomeIconContext = createContext<HomeIconContextType | undefined>(undefined)

export const HomeIconProvider = ({ children }: { children: React.ReactNode }) => {
    const [homeIcon, setHomeIconState] = useState<HomeIcon>('Yes'); // Default should be yes to home icons - default is always the LD accessible option

    const setHomeIcon = (newHomeIcon: HomeIcon) => {
        setHomeIconState(newHomeIcon);
        localStorage.setItem('homeIcon', newHomeIcon);
    }

    useEffect(() => {
        const storedHomeIcon = localStorage.getItem('homeIcon');
        if (storedHomeIcon === 'Yes' || storedHomeIcon === 'No') {
            setHomeIconState(storedHomeIcon)
        }
    }, [])

    return (
        <HomeIconContext.Provider value={{ homeIcon, setHomeIcon }}>
            {children}
        </HomeIconContext.Provider>
    )
};

export const useHomeIcon = () => {
    const ctx = useContext(HomeIconContext);
    if (!ctx) throw new Error('useHomeIcon must be used within HomeIconProvider');
    return ctx;
}