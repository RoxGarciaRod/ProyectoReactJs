import './boton.css'

const Boton = ( {onClick, label} ) => {

    return (
        <button className="botonGeneral" onClick={onClick}>
            {label}
        </button>
    )
}


export default Boton