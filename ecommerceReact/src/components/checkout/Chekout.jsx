import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"

const CheckOut = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email:"",
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(values)

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date(),
        }

        const ordersRef = collection(db, 'ordenes')
        addDoc(ordersRef, orden)
            .then((doc) =>{
                setOrderId(doc.id)
                clearCart()
            })
    }

    if (orderId) {
        return (
            <div>
                <h2>Gracias por tu compra</h2>
                <hr />
                <p>Tu codigo de orden es: {orderId}</p>
            </div>

        )
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr />

            <h4>Ingresa tus datos</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={values.nombre} onChange={handleInputChange} name="nombre" />
                <input type="text" placeholder="Direccion" value={values.direccion} onChange={handleInputChange} name="direccion" />
                <input type="email" placeholder="Email" value={values.email} onChange={handleInputChange} name="email" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default CheckOut