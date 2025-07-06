import { useState } from "react";
import PersonaCard from "../UI/PersonaCard";
import "./ListaPersonas.css";

const CANT_AGREGAR = 12;

function ListaPersonas({ personas }) {
    const [cantPersonas, setCantPersonas] = useState(CANT_AGREGAR);
    const totalPersonas = personas.length;

    const ordenarPorNombre = (lista) => lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

    const verMas = () => {
        let nuevaCantPersonas = cantPersonas + CANT_AGREGAR;
        setCantPersonas(nuevaCantPersonas <= totalPersonas ? nuevaCantPersonas : totalPersonas);
    };

    return (
        <div className="lista-personas">
            {personas.length !== 0 ?
                <>
                    {ordenarPorNombre(personas).slice(0, cantPersonas).map(persona => (
                        <PersonaCard key={"persona" + persona.id} persona={persona} />
                    ))}
                    {cantPersonas < totalPersonas && <button className="primary-outline" onClick={verMas}>Ver m&aacute;s</button>}
                </>
                :
                <p className="no-personas">No hay personas para mostrar</p>
            }
        </div>
    )
}

export default ListaPersonas;