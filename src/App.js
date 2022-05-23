import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topo from "./components/topo/Topo";
import Filmes from "./components/filmes/Filmes";
import Sessoes from "./components/sessao/Sessoes";
import Assentos from "./components/assento/Assentos";
import Sucesso from "./components/sucesso/Sucesso";

export default function App({idSessao}) {
    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Filmes idSessao={idSessao}/>}/>
                <Route path="/filme/:idSessao" element={<Sessoes />}/>
                <Route path="/sessao/:idAssento" element={<Assentos />}/>
                <Route path="/sucesso" element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
    )
}

