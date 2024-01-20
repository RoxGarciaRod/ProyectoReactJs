import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../utils/utils'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Spinner from '../Loader/Spinner'
import { collection } from "firebase/firestore"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categorias} = useParams()

    useEffect(() => {

        setLoading(true)

        //SEGUIR CON CLASE DE FIREBASE PARA USAR EL SERVICIO DE BASE DE DATOS

        /*pedirDatos ()
        .then((data) => {
            const items = categorias ? data.filter(prod => prod.categoria === categorias ) : data
            setProductos(items)
        })
        .finally(() => setLoading(false))*/

    }, [categorias])

    return (
        <>
      {
        loading
          ? <Spinner />
          : <ItemList productos={productos}/>
      }
    </>

        )
    }
    
export default ItemListContainer