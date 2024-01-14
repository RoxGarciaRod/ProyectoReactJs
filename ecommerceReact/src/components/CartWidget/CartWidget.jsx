import { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { itemsInCart } = useContext(CartContext)

    return (
        <Link to="/cart">
        <img className="Widget" src="imagenes/icono-cartwidget.png" alt="Icono de mi carrito de compras" />
        <span>{ itemsInCart() }</span>
        </Link>
    )
}

export default CartWidget