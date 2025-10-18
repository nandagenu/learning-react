function Form() {
    function cadastrarUsuario(e) { // argumento "e" de "event"
        e.preventDefault() // evita o reload da página, para a execução do formulário para executar a função abaixo
        console.log("Usuário foi cadastrado.")
    }
    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome aqui" />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form
