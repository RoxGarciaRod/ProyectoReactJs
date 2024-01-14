import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import Boton from "../botones/boton"


const CartView = () => {

    const { cart, totalCart, clearCart } = useContext(CartContext)

    return (
        <section>
            <h2>Tu compra</h2>
            <hr />

            <ul>
                {
                    cart.map ((item) => (
                        <li key={item.id}>
                            <img src={item.img} alt="Cart img" />
                            <div>
                            <h3>{item.nombre}</h3>
                            <p>${item.precio}</p>
                            <p>Cantidad: {item.cantidad * item.cantidad}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <h4>TOTAL: ${totalCart()}</h4>
            <Boton label="Vaciar carrito" onClick={clearCart} />
        </section>

    )
}

export default CartView