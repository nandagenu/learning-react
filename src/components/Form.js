import { useState } from "react"

function Form() {
    function cadastrarUsuario(e) { // argumento "e" de "event"
        e.preventDefault() // evita o reload da página, para a execução do formulário para executar a função abaixo
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                     type="text" 
                     id="name" 
                     name="name" 
                     placeholder="Digite seu nome aqui"
                     onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha aqui"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form
