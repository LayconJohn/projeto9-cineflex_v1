import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from "axios";

import Rodape from "../rodape/Rodape";
import { Loading } from "../Loading";

import "./estilos.css";

function Sessao({valor}) {
 
    return (
        <div className="sessao" key={valor.id}>
            <p>{`${valor.weekday} - ${valor.date}`}</p>
            <Link to={`/sessao/240`}>
                <div className="horarios">
                    <div>{valor.showtimes[0].name}</div>
                    <div>{valor.showtimes[1].name}</div>
                </div>
            </Link>
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
            console.log(response.data)
        });
        promisse.catch(() => {
            alert("Deu ruim");
        });
        
        
    }, []);



    return (
        <>
            <Titulo>Selecione a Sessão</Titulo>
            {sessoes.days === undefined ? <Loading /> : 
                <RegiaoSessoes>
                    {sessoes.days.map(valor => {
                        return <Sessao valor={valor}/>
                    })}
                </RegiaoSessoes>
            }
            <Rodape />
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
`