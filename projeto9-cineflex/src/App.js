import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topo from "./components/topo/Topo";
import Filmes from "./components/filmes/Filmes";
import Sessoes from "./components/sessao/Sessoes";
import Assentos from "./components/assento/Assentos";
import Sucesso from "./components/sucesso/Sucesso";

export default function App() {
    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Filmes />}/>
                <Route path="/filme/37" element={<Sessoes />}/>
                <Route path="/sessao/240" element={<Assentos />}/>
                <Route path="/sucesso" element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
    )
}

