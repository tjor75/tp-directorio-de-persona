import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import NumeroCard from "../../components/UI/NumeroCard";

function obtenerMayoresDe(personas, edadMinima) {
    return personas.filter((persona) => {
        const fechaNacimiento = new Date(persona.fechaNacimiento);
        const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
        return edad > edadMinima;
    });
}

function EstadisticasPage() {
    // const { personas } = useSelector((state) => state.personas);
    const { personas } = useContext(GlobalContext);
    const totalPersonas = personas.length;
    const mayores35 = obtenerMayoresDe(personas, 35).length;
    const mayoresEdad = obtenerMayoresDe(personas, 18).length;
    const menoresEdad = totalPersonas - mayoresEdad;

    return (
        <>
            <h1>Estad&iacute;sticas</h1>
            <div>
                <NumeroCard numero={totalPersonas} texto="Personas" />
                <NumeroCard numero={mayores35} texto="Personas mayores de 35" />
                <NumeroCard className="secondary-outline" numero={mayoresEdad} texto="Personas mayores de edad" />
                <NumeroCard className="secondary-outline" numero={menoresEdad} texto="Personas menores de edad" />
            </div>
        </>
    )
}

export default EstadisticasPage;