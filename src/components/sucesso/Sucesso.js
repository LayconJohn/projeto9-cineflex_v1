import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";

import pedido from "../../global/pedido";
import "./estilos.css";



export default function Sucesso() {
    //logic
    const dados = [
        {descricao: "Filme e sessão", info: [`${pedido.nomeFilme}`, `${pedido.dataFilme} - ${pedido.horarioFilme}`]},
        {descricao: "Assentos", info: [...pedido.reserva.ids]},
        {descricao: "Comprador", info: [`Nome: ${pedido.reserva.name}`, `CPF: ${pedido.reserva.cpf}`]}
    ]

    const navigate = useNavigate();

    function enviarDados() {
        const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: [...pedido.reserva.ids],
            name: pedido.reserva.name,
            cpf: pedido.reserva.cpf
        })
        promisse
            .then(() => {
                pedido.idImage = "";
                pedido.nomeFilme = "";
                pedido.horarioFilme = "";
                pedido.dataFilme = "";
                pedido.reserva.ids =[];
                pedido.reserva.name ="Fulano";
                pedido.reserva.cpf = "12345678900";
                navigate("/");
            })
            .catch(() => alert("Erro de reserva, olhe novamente e preencha os campos."))
        
    }


    //render
    return (
        <>
            <Titulo>Pedido feito com sucesso!</Titulo>
            <RegiaoSucesso>
                
                    {dados.map((dado, index) => {
                        return <div className="descricao" key={index}><h6>{dado.descricao}</h6>
                        {dado.info.map(info => {
                            return <p>{info}</p>
                        })}
    
                        </div>
                    })}
                <Button>
                    <Link to="/">
                        <div onClick={enviarDados}>Voltar para a Home</div>
                    </Link>
                </Button>
            </RegiaoSucesso>
        </>
    )
}

const Titulo = styled.h3`
    font-weight: bold;
    font-size: 24px;
    color: #247A6B;
    text-align: center;
    margin: 40px 80px 10px 80px;

    word-wrap: normal;
`;

const RegiaoSucesso = styled.main`
    h6 {
        font-size: 24px;
        font-weight: bold;
        color: #293845;
    }

    p {
        font-size: 22px;
        color: #293845; 
    }

    div {
        margin: 6px auto;
        margin-top: 40px;
    }
`

const Button = styled.div`
    padding-left: 72px;
    padding-bottom: 20px;
    padding: 20px 0px 20px 10px;

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