import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
            <Item marca="Ferrari" ano_lançamento={1999}/>
            <Item marca="Fiat" ano_lançamento={2000}/>
            <Item marca="Renault" ano_lançamento={1982}/>
            <Item />
            </ul>
        </>
    )
}

export default List;