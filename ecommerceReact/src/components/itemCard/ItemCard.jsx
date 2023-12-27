
import { Link } from 'react-router-dom';
import Boton from '../botones/boton';
import './itemCard.css'


const ItemCard = ({item}) => {

    return (
        <section className="cardContainer">
        <article className="cardProducto">
            <strong>{item.id} </strong>
            <img className="imagenProducto" src={item.img} alt={item.nombre} />
            <h3 className="tituloProducto">{item.nombre}</h3>
            <p className="descripcionProducto">{item.descripcion}</p>
            <strong>${item.precio}</strong>
          <Boton label="ver mas">
            <Link to={`/item/${item.id}`} ></Link>
          </Boton>
          </article>
        </section>
        )
}
export default ItemCard