import "./estilos.css";

const assentos = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]

export default function Assentos() {
    return (
        <>
            <h3 className="titulo">Selecione o(s) assento(s)</h3>
            <main>
                <div className="assentos">
                    {assentos.map(assento => {
                        return <div className="assento disponivel">{assento}</div>
                    })}
                </div>
            </main>
        </>
    )
}