import "./estilos.css";
import styled from 'styled-components';

export default function Rodape() {
    return (
        <RegiaoRodape>
            <div>
                <img src="https://m.media-amazon.com/images/M/MV5BZDJmODA5NGEtZmU1ZC00NDRkLWJkYmEtYmUxYzY0NmY4MTYwXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_QL75_UY562_CR7,0,380,562_.jpg"></img>
            </div>
            <h4>Enola Holmes</h4>
        </RegiaoRodape>
    )
}

const RegiaoRodape = styled.footer`
    min-width: 375px;
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;

    position: fixed;
    bottom: 0px;
    margin-top: 20px;

    div {
        width: 64px;
        height: 89px;
        background-color: #FFFFFF;
        border-radius: 2px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        margin: 14px;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 48px;
        height: 72px;
        object-fit: cover;
    }

    h4 {
        font-size: 26px;
        color: #293845;
    }
`