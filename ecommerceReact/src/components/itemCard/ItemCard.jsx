
import { Navigate, useNavigate } from 'react-router-dom';
import Boton from '../botones/boton';
import './itemCard.css'


const ItemCard = ({item}) => {
  const navigate = useNavigate()

    return (
        <section className="cardContainer">
        <article className="cardProducto">
            <strong>{item.id} </strong>
            <img className="imagenProducto" src={item.img} alt={item.nombre} />
            <h3 className="tituloProducto">{item.nombre}</h3>
            <p className="descripcionProducto">{item.descripcion}</p>
            { item.stock <= 10 && <p className="stockProducto" >Quedan solo {item.stock} unidades!</p> }
            <strong>${item.precio}</strong>
          <Boton label="ver mas" onClick={() => navigate(`/item/${item.id}`)}/>
          </article>
        </section>
        )
}
export default ItemCard