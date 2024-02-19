import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Carpishop</h1></Link>
        <ul className="menu">
            <li><NavLink className="menu-link" to="/">Inicio</NavLink></li>
            <li><NavLink className="menu-link" to="/productos">Productos</NavLink></li>
            <li><NavLink className="menu-link" to="/productos/medias">Medias</NavLink></li>
            <li><NavLink className="menu-link" to="/productos/pantalones">Pantalones</NavLink></li>
        </ul>
    </nav>
    )
}

export default Navbar