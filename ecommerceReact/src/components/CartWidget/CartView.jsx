import './cartView.css'
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import Boton from "../botones/boton"
import trashIcon from '../../assets/trash.svg'
import { UserContext } from "../../Context/UserContext"
import { Link } from "react-router-dom"


const CartView = () => {

    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)
    const {user} = useContext(UserContext)

    return (
        <section>
            <p className="user">Bienvenido: {user.email}</p>
            <h2 className="user">Tu compra</h2>
            <ul>
                {
                    cart.map ((item) => (
                        <li className="cartContainer" key={item.id}>
                            <img className="imagenCarrito" src={item.img} alt="Cart img" />
                            <div>
                            <h3>{item.nombre}</h3>
                            <p>${item.precio}</p>
                            <p>Cantidad: {item.cantidad * item.cantidad}</p>

                            <Boton onClick={() => (removeItem(item.id))} label={<img src={trashIcon} alt="trash icon" />}>
                            </Boton>
                            </div>

                        </li>
                    ))
                }
            </ul>

            <h4>TOTAL: ${totalCart()}</h4>
            <Boton label="Vaciar carrito" onClick={clearCart} />
            <Link to="/checkout" > <Boton to="/checkout" label="Terminar mi compra" /></Link>
        </section>

    )
}

export default CartView