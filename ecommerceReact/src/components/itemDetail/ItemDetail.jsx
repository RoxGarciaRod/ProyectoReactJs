import { useNavigate } from "react-router-dom"
import Boton from "../botones/boton"


const ItemDetail = ({item}) => {
    const navigate = useNavigate()

    return (
        <div>
            <strong> {item.id} </strong>
            <h3 className="tituloProducto">{item.nombre}</h3>
            <hr />
            <img className="imagenProducto" src={item.img} alt={item.nombre} />
            <p className="descripcionProducto">{item.descripcion}</p>
            <strong>${item.precio}</strong>
            <Boton label="ver mas" onClick={() => navigate(`/item/${item.id}`)}/>

        </div>

    )
}

export default ItemDetail