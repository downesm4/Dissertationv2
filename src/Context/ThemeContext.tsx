import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'Muted' | 'Colourful';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>('Colourful');

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'Muted' || storedTheme === 'Colourful') {
            setThemeState(storedTheme);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
};







