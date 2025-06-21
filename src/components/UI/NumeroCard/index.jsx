

import "./NumeroCard.css";

function NumeroCard({ numero, texto, className="secondary" }) {
    return (
        <div className={"card numero-card " + className}>
            <p className="big-number">{numero}</p>
            <p>{texto}</p>
        </div>
    )
}

export default NumeroCard;