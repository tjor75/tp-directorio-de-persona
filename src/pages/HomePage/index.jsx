import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ListaPersonas from "../../components/ListaPersonas";

function HomePage() {
    const { personas } = useContext(GlobalContext);

    return (
        <ListaPersonas personas={personas} />
    )
}

export default HomePage;