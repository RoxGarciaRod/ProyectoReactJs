import Boton from "../botones/boton"
import { useContext, useState } from "react"
import QuantitySelector from "./QuantitySelector"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1)
  const { addToCart, isInCart } = useContext(CartContext)

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
    };

    addToCart(itemToCart)
  }
  
  return (
    <div>
      <strong> {item.id} </strong>
      <h3 className="tituloProducto">{item.nombre}</h3>
      <hr />

      <div>
        <img className="imagenProducto" src={item.img} alt={item.nombre} />

        <div>
          <p className="descripcionProducto">{item.descripcion}</p>
          <strong>${item.precio}</strong>

          {
            isInCart( item.id ) 
            ? <Link to="/cart" > <Boton to="/cart" label="Terminar mi compra" /></Link>
            : <>
               <QuantitySelector
                  cantidad={cantidad}
                  stock={item.stock}
                 setCantidad={setCantidad}
                />
                <Boton label="Agregar al carrito" onClick={handleAgregar} />
              </>
          }


          
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
