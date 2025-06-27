import { Link } from "react-router-dom";

function BigPersonaCard({ persona }) {
    return (
        <Link to={"/persona/" + persona.id} className="card persona-card secondary-outline">
            <div>
                <h2>{persona.nombre}</h2>
                <p>{persona.edad}</p>
            </div>
        </Link>
    )
}

export default BigPersonaCard;