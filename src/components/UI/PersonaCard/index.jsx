import { Link } from "react-router-dom";
import "./PersonaCard.css";

function PersonaCard({ persona }) {
    return (
        <Link to={"/persona/" + persona.id}>
            <div className="persona">
                <h2>{persona.nombre}</h2>
                <p>{persona.edad}</p>
            </div>
        </Link>
    )
}

export default PersonaCard;