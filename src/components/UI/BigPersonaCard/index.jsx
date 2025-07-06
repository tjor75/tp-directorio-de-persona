function BigPersonaCard({ persona }) {
    return (
        <div className="card persona-card secondary-outline">
            <h2>{persona.apellido}, {persona.nombre}</h2>
            <p>{persona.edad}</p>
            <p>{persona.email}</p>
        </div>
    )
}

export default BigPersonaCard;