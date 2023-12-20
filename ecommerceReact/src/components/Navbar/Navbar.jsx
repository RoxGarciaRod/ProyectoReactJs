import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'

const links = [
    {
        label:'Inicio',
        href:'/'
    },
    {
        label:'Buzos',
        href:'/productos/Buzos'
    },
    {
        label:'Remeras',
        href:'/productos/remeras'
    },
    {
        label:'Pantalones',
        href:'/productos/pantalones'
    },
    {
        label:'Sacos',
        href:'/productos/sacos'
    },
    {
        label:'Shorts',
        href:'/productos/Shorts'
    },
    {
        label:'Vestidos',
        href:'/productos/Vestidos'
    },
    {
        label:'Perfumes',
        href:'/productos/Perfumes'
    },
]

const Navbar = () => {

    return (
        <header className="header">
            <div className="contenedorHeader">
                <img className="logo" src="imagenes/logoFavicon.png" alt="Logo" />

                <nav className="navbar">

                    {links.map((link) =>
                    <Link className="items" to={link.href} >{link.label}</Link>
                    )}
                </nav>
            <CartWidget />
            </div>

        </header>
    )
}

export default Navbar