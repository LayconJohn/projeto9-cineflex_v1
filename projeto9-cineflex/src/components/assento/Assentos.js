import { Link } from "react-router-dom";
import styled from 'styled-components';

import Rodape from "../rodape/Rodape";

import "./estilos.css";

const assentos = {
    id: 1,
    name: "15:00",
    day: {
			id: 24062021,
      weekday: "Quinta-feira",
      date: "24/06/2021",
		},
    movie: {
        id: 1,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
    seats: [
				{
            id: 1,
            name: "1",
            isAvailable: false,
        },
        {
            id: 2,
            name: "2",
            isAvailable: true,
        },
        {
            id: 3,
            name: "3",
            isAvailable: true,
        },
        {
            id: 4,
            name: "4",
            isAvailable: true,
        },
        {
            id: 5,
            name: "5",
            isAvailable: true,
        },
        {
            id: 6,
            name: "6",
            isAvailable: true,
        },
        {
            id: 7,
            name: "7",
            isAvailable: true,
        },
        {
            id: 8,
            name: "8",
            isAvailable: true,
        },
        {
            id: 9,
            name: "9",
            isAvailable: true,
        },
        {
            id: 10,
            name: "10",
            isAvailable: true,
        },
        {
            id: 11,
            name: "11",
            isAvailable: true,
        },
        {
            id: 12,
            name: "12",
            isAvailable: true,
        },
        {
            id: 13,
            name: "13",
            isAvailable: true,
        },
        {
            id: 14,
            name: "14",
            isAvailable: true,
        },
        {
            id: 15,
            name: "15",
            isAvailable: true,
        },
        {
            id: 16,
            name: "16",
            isAvailable: true,
        },
        {
            id: 17,
            name: "17",
            isAvailable: true,
        },
        {
            id: 18,
            name: "18",
            "isAvailable": true,
        },
        {
            id: 19,
            name: "19",
            isAvailable: true,
        },
        {
            id: 20,
            name: "20",
            isAvailable: true,
        },
        {
            id: 21,
            name: "21",
            isAvailable: true,
        },
        {
            id: 22,
            name: "22",
            isAvailable: true,
        },
        {
            id: 23,
            name: "23",
            isAvailable: true,
        },
        {
            id: 24,
            name: "24",
            isAvailable: true,
        },
        {
            id: 25,
            name: "25",
            isAvailable: true,
        },
        {
            id: 26,
            name: "26",
            isAvailable: true,
        },
        {
            id: 27,
            name: "27",
            isAvailable: true,
        },
        {
            id: 28,
            name: "28",
            isAvailable: true,
        },
        {
            id: 29,
            name: "29",
            isAvailable: true,
        },
        {
            id: 30,
            "name": "30",
            "isAvailable": true,
        },
        {
            id: 31,
            name: "31",
            isAvailable: true,
        },
        {
            id: 32,
            name: "32",
            isAvailable: true,
        },
        {
            id: 33,
            name: "33",
            isAvailable: true,
        },
        {
            id: 34,
            name: "34",
            isAvailable: true,
        },
        {
            "id": 35,
            "name": "35",
            "isAvailable": true,
        },
        {
            id: 36,
            name: "36",
            isAvailable: true,
        },
        {
            id: 37,
            name: "37",
            isAvailable: true,
        },
        {
            id: 38,
            name: "38",
            isAvailable: true,
        },
        {
            id: 39,
            name: "39",
            isAvailable: true,
        },
        {
            id: 40,
            name: "40",
            isAvailable: true,
        },
        {
            id: 41,
            name: "41",
            "isAvailable": true,
        },
        {
            id: 42,
            name: "42",
            isAvailable: true,
        },
        {
            id: 43,
            name: "43",
            isAvailable: true,
        },
        {
            id: 44,
            name: "44",
            isAvailable: true,
        },
        {
            id: 45,
            name: "45",
            isAvailable: true,
        },
        {
            id: 46,
            name: "46",
            isAvailable: true,
        },
        {
            id: 47,
            name: "47",
            isAvailable: true,
        },
        {
            id: 48,
            name: "48",
            isAvailable: true,
        },
        {
            id: 49,
            name: "49",
            isAvailable: true,
        },
        {
            id: 50,
            name: "50",
            isAvailable: true,
        },
    ]
}

const listaAssentos = [...assentos.seats]

const legendas = ["selecionado", "disponivel", "indisponivel"];

const forms = [{titulo: "Nome do comprador", input: "Digite seu nome..."},
{titulo: "CPF do comprador", input: "Digite seu CPF..."}]

export default function Assentos() {
    return (
        <>
            <Titulo>Selecione o(s) assento(s)</Titulo>
            <main className="">
                <SelecionarAssentos>
                    {listaAssentos.map(assento => {
                        return <div className={`assento ${assento.isAvailable ? "disponivel" : "indisponivel"}`}>{assento.name}</div>
                    })}
                </SelecionarAssentos>
                <Legenda>
                        {legendas.map((nome, index) => {
                            return <div>
                                <div className={`assento ${nome}`} key={index}></div>
                                <p>{nome}</p>
                            </div>
                        })}
                </Legenda>
                <Form>
                    {forms.map((texto, index) => {
                        return <div>
                        <p>{texto.titulo}</p>
                        <div className="input">{texto.input}</div>
                        </div>
                    })}                   
                </Form>
                <Button>
                    <Link to="/sucesso">
                        <div>Reservar assento (s)</div> 
                    </Link>     
                </Button>
            </main>
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

    .input {
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