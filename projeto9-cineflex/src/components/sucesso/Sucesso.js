import "./estilos.css";

const dados = [
    {descricao: "Filme e sessão", info: ["Enola Holmes", "26/04/2021 15:00"]},
    {descricao: "Filme e sessão", info: ["Assento 15", "Assento 16"]},
    {descricao: "comprador", info: ["Nome: Alfredo Novaes", "CPF: 000.000.000-00"]}
]

export default function Sucesso() {
    return (
        <>
            <h3 className="titulo">Pedido feito com sucesso!</h3>
            <main className="sucesso">
                
                    {dados.map((dado, index) => {
                        return <div className="descricao" key={index}><h6>{dado.descricao}</h6>
                        {dado.info.map(info => {
                            return <p>{info}</p>
                        })}
    
                        </div>
                    })}
                <div className="back-home">
                    <div className="button">Voltar para a Home</div>
                </div>
            </main>
        </>
    )
}