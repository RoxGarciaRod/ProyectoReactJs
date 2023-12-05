import './ItemListContainer.css'


const ItemListContainer = (props) => {

    return (
        <section className="contenedorProductos">
            <article className="cardProducto">
                <h2 className="producto">{props.producto}</h2>
                <p className="descripcion">{props.descripcion}</p>
                <strong className="precio">{props.precio}</strong>
            </article>
        </section>

    )
}

export default ItemListContainer