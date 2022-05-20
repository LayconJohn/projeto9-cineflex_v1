import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./estilos.css"
import { Loading } from "../Loading";

function Filme({valor}){
    const {idSessao} = useParams();

    return (

        
        <Link to={`/filme/${idSessao}`}>
            <div className="filme" key={valor.id}>
                <img src={valor.posterURL}></img>
            </div>
        </Link>

    )
}

export default function Filmes() {
    //Estado
    const [filmes, setFilmes] = useState([]);

    

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promisse.then(response => {
            setFilmes(response.data)
            console.log(filmes)
        })
    },[])
    


    return (
        <>
            <Titulo>Selecione o filme</Titulo>
            {filmes.length === 0 ? <Loading /> :
                <SelecionarFilmes>
                    {filmes.map((valor) => {
                        return <Filme valor={valor}/>
                    })}
                </SelecionarFilmes>
            }

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

const SelecionarFilmes = styled.main`
    display: flex;
    flex-wrap: wrap;
`;