import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../utils/utils'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {categorias} = useParams()
    console.log(categorias)

    useEffect(() => {
        pedirDatos ()
        .then((data) => {
            const items = categorias ? data.filter(prod => prod.categoria === categorias ) : data
            setProductos(items)
        })
    }, [categorias])

    return (
        <>
        <ItemList productos= {productos} />
        </>

        )
    }
    
export default ItemListContainer