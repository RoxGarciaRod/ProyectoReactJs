import { useNavigate } from "react-router-dom"
import Boton from "../botones/boton"
import { useState } from "react"
import QuantitySelector from "./QuantitySelector"


const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    //const navigate = useNavigate()

   

   const handleAgregar = () => {
    const itemToCart= {
        ...item,
        cantidad
    }
    console.log (itemToCart)
   }

    return (
        <div>
            <strong> {item.id} </strong>
            <h3 className="tituloProducto">{item.nombre}</h3>
            <hr />
            <img className="imagenProducto" src={item.img} alt={item.nombre} />
            <p className="descripcionProducto">{item.descripcion}</p>
            <strong>${item.precio}</strong>

            <QuantitySelector cantidad={cantidad} stock={item.stock} setCantidad={setCantidad} />

            
            <Boton label="Agregar al carrito" onClick={handleAgregar} />

        </div>

    )
}

export default ItemDetail