import { useState } from "react";
import "./ContactoPage.css";

function ContactoPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        edad: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio.';
        if (!formData.apellido) newErrors.apellido = 'El apellido es obligatorio.';
        if (!formData.email) {
            newErrors.email = 'El email es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El formato del email no es válido.';
        }
        if (!formData.edad) {
            newErrors.edad = 'La edad es obligatoria.';
        } else if (isNaN(formData.edad) || formData.edad <= 0) {
            newErrors.edad = 'La edad debe ser un número positivo.';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
        } else {
            setErrors({});
            setSuccessMessage('Formulario enviado con éxito.');
            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                edad: ''
            });
        }
    };

    return (
        <div>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}
                </div>
                <div>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                    {errors.apellido && <p style={{ color: 'red' }}>{errors.apellido}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <label>Edad:</label>
                    <input
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                    />
                    {errors.edad && <p style={{ color: 'red' }}>{errors.edad}</p>}
                </div>
                <button type="submit">Enviar</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
}

export default ContactoPage;