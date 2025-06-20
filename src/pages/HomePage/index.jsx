import listaPersonas from "../../utils/listaPersonas";
import ListaPersonas from "../../components/ListaPersonas";

function HomePage() {
    return (
        <ListaPersonas personas={listaPersonas} />
    )
}

export default HomePage;