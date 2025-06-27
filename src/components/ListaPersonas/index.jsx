import { useState } from "react";
import PersonaCard from "../UI/PersonaCard";
import "./ListaPersonas.css";

const CANT_AGREGAR = 12;

function ListaPersonas({ personas }) {
    const [cantPersonas, setCantPersonas] = useState(CANT_AGREGAR);
    const totalPersonas = personas.length;

    const verMas = () => {
        let nuevaCantPersonas = cantPersonas + CANT_AGREGAR;
        setCantPersonas(nuevaCantPersonas <= totalPersonas ? nuevaCantPersonas : totalPersonas);
    };

    return (
        <div className="lista-personas">
            {personas.slice(0, cantPersonas).map(persona => (
                <PersonaCard key={"persona" + persona.id} persona={persona} />
            ))}
            {cantPersonas !== totalPersonas && <button className="primary-outline" onClick={verMas}>Ver m&aacute;s</button>}
        </div>
    )
}

export default ListaPersonas;