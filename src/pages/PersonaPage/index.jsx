import { useState } from "react";
import { useParams } from "react-router-dom";
import BigPersonaCard from "../../components/UI/BigPersonaCard";
import NoEncontradoPage from "../NoEncontradoPage";

function PersonaPage() {
    const { personaId } = useParams();
    const [persona, setPersona] = useState(null);

    const getPersona = () => {
        
    }

    return (
        <>
            {persona ?
                <BigPersonaCard persona={persona} />
                :
                <NoEncontradoPage />
            }
        </>
    )
}

export default PersonaPage;