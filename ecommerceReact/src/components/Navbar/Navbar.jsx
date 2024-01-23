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
        href:'/productos/buzos'
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
        href:'/productos/shorts'
    },
    {
        label:'Vestidos',
        href:'/productos/vestidos'
    },
    {
        label:'Perfumes',
        href:'/productos/perfumes'
    },
]

const Navbar = () => {

    return (
        <header className="header">
            <div className="contenedorHeader">
                <img className="logo" src="imagenes/logoFavicon.png" alt="Logo" />

                <nav className="navbar">

                    {links.map((link) =>
                    <Link className="items" key={link.href} to={link.href} >{link.label}</Link>
                    )}
                </nav>
            <CartWidget />
            </div>

        </header>
    )
}

export default Navbar