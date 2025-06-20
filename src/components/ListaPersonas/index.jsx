import { useState } from "react";
import Persona from "../UI/Persona";
import "./ListaPersonas.css";

const CANT_AGREGAR = 12;

function ListaPersonas({ personas }) {
    const [cantMostrar, setCantMostrar] = useState(CANT_AGREGAR);
    let i = -1;

    const verMas = () => {
        let nuevaCantMostrar = cantMostrar + CANT_AGREGAR;
        setCantMostrar(nuevaCantMostrar <= personas.length ? nuevaCantMostrar : personas.length);
    };

    return (
        <div className="lista-personas">
            <div>
                {personas.slice(0, cantMostrar).map(persona => {
                    i++;
                    return <Persona key={"persona" + i} persona={persona} />
                })}
            </div>
            <button className="primary-outline" onClick={verMas}>Ver m&aacute;s</button>
        </div>
    )
}

export default ListaPersonas;