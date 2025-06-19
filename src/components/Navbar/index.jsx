import { NavLink } from "react-router-dom";
import { HiHome, HiTrendingUp, HiUserAdd } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <NavLink to="/">
                <HiHome />
                <span>Inicio</span>
            </NavLink>
            <NavLink to="/estadisticas">
                <HiTrendingUp />
                <span>Estad&iacute;sticas</span>
            </NavLink>
            <NavLink to="/contacto">
                <HiUserAdd />
                <span>Contacto</span>
            </NavLink>
        </nav>
    );
}

export default Navbar;