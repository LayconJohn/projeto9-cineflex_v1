import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from "axios";

import pedido from "../../global/pedido";
import Rodape from "../rodape/Rodape";
import { Loading } from "../Loading";

import "./estilos.css";

function Sessao({sessoes, valor}) {
 
    return (
        <div className="sessao" key={valor.id}>
            <p>{`${valor.weekday} - ${valor.date}`}</p>             
                <Horarios>
                    <Link to={`/sessao/${valor.showtimes[0].id}`}>
                        <div>{valor.showtimes[0].name}</div>
                    </Link>
                    <Link to={`/sessao/${valor.showtimes[0].id}`}>
                        <div>{valor.showtimes[1].name}</div>     
                    </Link> 
                </Horarios>
        </div> 
    )
}

export default function Sessoes() {
    //Estado
    const [sessoes, setSessoes] = useState({});

    //logic
    const {idSessao} = useParams();
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessao}/showtimes`);
        promisse.then((response) => {
            setSessoes(response.data)
            console.log("Sessões... OK")
            pedido.idImage = response.data.posterURL;
            pedido.nomeFilme = response.data.title;

        });
        promisse.catch(() => {
            alert("Deu ruim");
        });
        
        
    }, []);

    //render
    return (
        <>
            <Titulo>Selecione a Sessão</Titulo>
            {sessoes.days === undefined ? <Loading /> : 
                <RegiaoSessoes>
                    {sessoes.days.map(valor => {
                        return <Sessao sessoes={sessoes} valor={valor}/>
                    })}
                </RegiaoSessoes>
            }
            <Rodape 
                image={sessoes.posterURL}
                title={sessoes.title}
                horario={""}
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

const RegiaoSessoes = styled.main`
    padding: 0px 24px;
    height: 100%;
    overflow-y: scroll;

    p {
        font-size: 20px;
        color: #293845;
        margin: 20px 0px;
    }
`;

const Horarios = styled.div`
    display: flex;
    flex-wrap: wrap;

    div {
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 4px 8px 4px 0px;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
}
`;