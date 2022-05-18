import Topo from "./components/topo/Topo";
import Filmes from "./components/filmes/Filmes";
import Sessoes from "./components/sessao/Sessoes";
import Assentos from "./components/assento/Assentos";
import Sucesso from "./components/sucesso/Sucesso";
import Rodape from "./components/rodape/Rodape";

export default function App() {
    return (
        <>
            <Topo />
            <Filmes />
            <Sessoes />
            <Assentos />
            <Sucesso />
            <Rodape />
        </>
    )
}