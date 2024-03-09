import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
    <nav className="navbar">
        <Link to="/" className="logo">
            <img src="https://pngimg.com/uploads/ferrari/ferrari_PNG10665.png" alt="" style={{ width: '100px', height: 'auto' }} />
        </Link>
        <ul className="menu">
            <li><NavLink  className={isActive => isActive ? 'ActiveOption' : 'Option'} to="/productos">Autos</NavLink></li>
            <li><NavLink  className={isActive => isActive ? 'ActiveOption' : 'Option'} to="/productos/Audi">Audi</NavLink></li>
            <li><NavLink  className={isActive => isActive ? 'ActiveOption' : 'Option'} to="/productos/Mercedes Benz">Mercedes Benz</NavLink></li>
            <li><NavLink className={isActive => isActive ? 'ActiveOption' : 'Option'} to="/productos/BMW">BMW</NavLink></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
    )
}

export default Navbar