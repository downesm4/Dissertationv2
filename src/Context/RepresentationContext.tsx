import React, { createContext, useContext, useEffect, useState } from "react";

type Representation = "Linear" | "Circular"

interface RepresentationContextType {
    representation: Representation,
    setRepresentation: (representation: Representation) => void;
}

const RepresentationContext = createContext<RepresentationContextType | undefined>(undefined)

export const RepresentationProvider = ({ children }: { children: React.ReactNode }) => {
    const [representation, setRepresentationState] = useState<Representation>('Linear');

    const setRepresentation = (newRepresentation: Representation) => {
        setRepresentationState(newRepresentation);
        localStorage.setItem('representation', newRepresentation)
    }

    useEffect(() => {
        const storedRepresentation = localStorage.getItem('representation');
        if (storedRepresentation === 'Linear' || storedRepresentation === 'Circular') {
            setRepresentationState(storedRepresentation)
        }
    }, [])

    return (
        <RepresentationContext.Provider value={{ representation, setRepresentation }}>
            {children}
        </RepresentationContext.Provider>
    )
}
export const useRepresentation = () => {
    const ctx = useContext(RepresentationContext);
    if (!ctx) throw new Error('useRepresentation must be used within RepresentationProvider');
    return ctx;
}