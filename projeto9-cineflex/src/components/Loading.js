import styled from 'styled-components';

export function Loading() {
    return (
        <EspacoLoading>
            <div></div>
        </EspacoLoading>
    )
}

const EspacoLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(5);

    div {
        animation: is-rotating 3s infinite;
        width: 50px;
        height: 50px;
        border: 6px solid #C3CFD9;
        border-top-color: #51d4db;
        border-radius: 50%;
        margin-top: 70px;
    }

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }

`