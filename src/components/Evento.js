function Evento() {
    function meuEvento() {
        console.log("Teste")
    }
    return (
        <div>
            <p>Clique abaixo para disparar um evento.</p>
            <button onClick={meuEvento}>Clique aqui</button>
        </div>
    )
}

export default Evento
