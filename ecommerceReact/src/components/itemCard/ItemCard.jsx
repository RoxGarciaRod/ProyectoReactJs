import Boton from "../botones/boton";
import './itemCard.css'


const ItemCard = ({item}) => {

    return (
        <section className="cardContainer">
        <article className="cardProducto">
            <img className="imagenProducto" src={item.img} alt={item.name} />
            <h3 className="tituloProducto">{item.nombre}</h3>
            <p className="descripcionProducto">{item.descripcion}</p>
            <strong>${item.precio}</strong>
          </article>
        </section>
    )
}
export default ItemCard;