import { createContext, useState } from "react";
import ejemploListaPersonas from "../utils/ejemploListaPersonas";

// Crear el contexto
export const GlobalContext = createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
    const [personas, setPersonas] = useState(ejemploListaPersonas);

    return (
        <GlobalContext.Provider value={{ personas, setPersonas }}>
            {children}
        </GlobalContext.Provider>
    );
};

// export default GlobalProvider;