import { createContext, useState } from "react";

// Crear el contexto
export const GlobalContext = createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
    const [personas, setPersonas] = useState([]);

    return (
        <GlobalContext.Provider value={{ personas, setPersonas }}>
            {children}
        </GlobalContext.Provider>
    );
};

// export default GlobalProvider;