import './Persona.css'

function Persona({ persona }) {
    return (
        <div className="persona">
            <h2>{persona.nombre}</h2>
            <p>{persona.edad}</p>
        </div>
    )
}

export default Persona;