import PropTypes from 'prop-types'

function Item({marca = 'Faltou a marca', ano_lançamento = 0}) {
    return (
        <>
            <li>
            {marca} - {ano_lançamento}
            </li>
        </>
    )
}

Item.propTypes = { // definindo regras para os parâmetros
    marca: PropTypes.string, 
    ano_lançamento: PropTypes.number, 
}

export default Item;