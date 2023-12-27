import Boton from "../botones/boton"


const ItemDetail = ({item}) => {
    return (
        <div>
            <strong> {item.id} </strong>
            <h3 className="tituloProducto">{item.nombre}</h3>
            <hr />
            <img className="imagenProducto" src={item.img} alt={item.name} />
            <p className="descripcionProducto">{item.descripcion}</p>
            <strong>${item.precio}</strong>
          <Boton label="Agregar al carrito"/>

        </div>

    )
}

export default ItemDetail