import {useState} from 'react'

function Condicional() {

    const[email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(`Cadastrando`)
    }

    function limparEmail(e) {
        e.preventDefault()
        setUserEmail('')
        console.log(`Limpando`)
    }

    return(
        <>
        <h2>Cadastro de E-mail</h2>
        <form>
            <input type="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)} 
            />
            <button type="submit" onClick={enviarEmail}>
                Cadastrar
            </button>

        {userEmail && ( // cria a div quando o userEmail estiver preenchido
            <div>
                <p>O e-mail do usuário é: {userEmail}</p>
                <button onClick={limparEmail}>Limpar e-mail</button>
            </div>
        )}
        </form>
        </>
    )
}

export default Condicional