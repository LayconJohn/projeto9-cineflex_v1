import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from "axios";

import pedido from "../../global/pedido";
import Rodape from "../rodape/Rodape";
import { Loading } from "../Loading";

import "./estilos.css";

const legendas = ["selecionado", "disponivel", "indisponivel"];

export default function Assentos() {

    //Estado
    const [assentos, setAssentos] = useState([]);
    const [data, setData] = useState({});
    const [selecionado, setSelecionado] = useState(false)
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    //logic
    const {idAssento} = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAssento}/seats`);
        promisse
            .then((response) => {
            setAssentos([...response.data.seats])
            setData(response.data)
            console.log("Assentos... OK")
        })
            .catch((err) => {
                console.log("Erro nos Assentos")
                console.log(err)
            })
    }, []);

    function submitDados() {
        pedido.reserva.name = nome;
        pedido.reserva.cpf = cpf;
        setNome("");
        setCpf("");
        console.log(pedido)
    }
    

    //render
    return (
        <>
            <Titulo>Selecione o(s) assento(s)</Titulo>
            <main>
                {assentos.length === 0 ? <Loading /> : 
                    <SelecionarAssentos>
                        {assentos.map((assento,index) => {
                            return <div className={`assento ${assento.isAvailable ? "disponivel" : "indisponivel"} ${selecionado ? "selecionado" : ""}`} key={index}>{assento.name}</div>
                        })}
                    </SelecionarAssentos>
                }
                <Legenda>
                    {legendas.map((nome, index) => {
                        return <div>
                            <div className={`assento ${nome}`} key={index}></div>
                            <p>{nome}</p>
                        </div>
                    })}
                </Legenda>
                <form onSubmit={submitDados}>
                    <Form>

                        <div>
                            <p>Nome do comprador</p>
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                value={nome}
                                required
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div>
                            <p>CPF do comprador</p>
                            <input
                                type="text"
                                placeholder="Digite seu CPF"
                                value={cpf}
                                required
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                 
                    </Form>
                    <Button>
                        <Link to="/sucesso">
                            <div onClick={submitDados}>Reservar assento (s)</div> 
                        </Link>     
                    </Button>
                </form>
            </main>
            <Rodape 
                image={""}
                title={""}
                horario={data.name}
            />
        </>
    )
}

const Titulo = styled.h3`
    font-size: 24px;
    color: #293845;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 10px;
`;

const SelecionarAssentos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px 18px 15px 18px;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 327px;
        height: 51px;
        border: 1px solid #D4D4D4;
        display: flex;
        align-items: center;
        padding-left: 18px;
    
        color: #AFAFAF;
        font-size: 18px;
    }

    p {
        margin: 10px 0px;
    }
`;

const Button = styled.div`
    padding-left: 72px;
    padding-bottom: 20px;
    padding: 20px 0px 20px 72px;

    div {
        width: 225px;
        height: 42px;
        background-color:#E8833A;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    
        color: white;
        font-size: 18px;
    }
`;

const Legenda = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px 6px 15px 6px;
    }

    p {
        color:#4E5A65;
        font-size: 13px;
    }
`