import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import BigPersonaCard from "../../components/UI/BigPersonaCard";
import NoEncontradoPage from "../NoEncontradoPage";


function PersonaPage() {
    const { personas } = useContext(GlobalContext);
    const { personaId } = useParams();
    const [persona] = useState(personas.find(p => p.id === parseInt(personaId)));

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