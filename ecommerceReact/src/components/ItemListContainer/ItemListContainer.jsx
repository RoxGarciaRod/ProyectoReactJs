import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Spinner from '../Loader/Spinner'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../firebase/config'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categorias} = useParams();

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, 'productos')

        const productosFilt = categorias ? query(productosRef, where('categoria', '==', categorias) ) : productosRef
       
        getDocs( productosFilt )
        .then((querySnapshot) => {
            const docs = querySnapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id        
                }
            })
            console.log (docs)
            setProductos( docs )
        })
        .finally(() => setLoading(false))        
    }, [categorias])

    return (
        <>
      { loading ? <Spinner /> : <ItemList productos={productos}/> }
    </>
        )
    }
    
export default ItemListContainer