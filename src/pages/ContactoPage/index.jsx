import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./ContactoPage.css";
import { isEmail } from "../../utils/validador-helper";

function ContactoPage() {
    const { personas, setPersonas } = useContext(GlobalContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");
    const [errors, setErrors] = useState({});
    const [exito, setExito] = useState(false);

    function obtenerFormFormateado() {
        return {
            nombre: nombre.trim(),
            apellido: apellido.trim(),
            email: email.trim(),
            edad: parseInt(edad)
        }
    }

    function validar(formData) {
        const newErrors = {};
        if (!formData.nombre)
            newErrors.nombre = 'El nombre es obligatorio';
        if (!formData.apellido)
            newErrors.apellido = 'El apellido es obligatorio';

        if (!formData.email)
            newErrors.email = 'El email es obligatorio';
        else if (!isEmail(formData.email))
            newErrors.email = 'El formato del email no es válido';
        
        if (!formData.edad)
            newErrors.edad = 'La edad es obligatoria';
        else if (isNaN(edad) || edad <= 0)
            newErrors.edad = 'Introduzca un número desde 0';
        
        return newErrors;
    }

    function ordenarPorNombre(lista) {
        return lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    function handleNombre(e) {
        setNombre(e.target.value);
    }
    function handleApellido(e) {
        setApellido(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handleEdad(e) {
        setEdad(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formFormateado = obtenerFormFormateado();
        const errores = validar(formFormateado);
        setErrors(errores);

        if (Object.keys(errores).length > 0) {
            setExito(false);
        } else {
            setExito(true);
            setPersonas(ordenarPorNombre([...personas, formFormateado]));
            setNombre("");
            setApellido("");
            setEmail("");
            setEdad("");
        }
    };

    return (
        <>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="nombre" value={nombre} onChange={handleNombre} />
                    {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" name="apellido" value={apellido} onChange={handleApellido} />
                    {errors.apellido && <p style={{ color: 'red' }}>{errors.apellido}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={handleEmail} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <label>Edad</label>
                    <input type="number" name="edad" value={edad} onChange={handleEdad} />
                    {errors.edad && <p style={{ color: 'red' }}>{errors.edad}</p>}
                </div>
                <button className="primary-outline" type="submit">Enviar</button>
            </form>
            {exito && <p style={{ color: "green" }}>A&ntilde;adido</p>}
        </>
    );
}

export default ContactoPage;