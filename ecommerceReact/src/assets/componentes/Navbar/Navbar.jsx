import Widget from '../widget/widget'
import './Navbar.css'


const Navbar = () => {

    return (
        <header className="header">
            <div className="contenedorHeader">
                <img className="logo" src="imagenes/logoFavicon.png" alt="Logo" />

                <nav className="navbar">
                    <a className="items" href="#">Sucursales</a>
                    <a className="items" href="#">Medios de Pago</a>
                    <a className="items" href="#">Favoritos</a>
                </nav>
            <Widget />
            </div>

        </header>
    )
}

export default Navbar