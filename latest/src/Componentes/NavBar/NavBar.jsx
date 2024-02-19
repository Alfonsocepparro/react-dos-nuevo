import { Link, NavLink } from 'react-router-dom'
import './NavBar.css';
import CartWidget from './CartWidget/CartWidget';

const NavBar=() =>{
    return (
        <header>
            <Link to="/" className="logo"><img src="https://pngimg.com/uploads/ferrari/ferrari_PNG10665.png" alt="" style={{ width: '100px', height: 'auto' }}/></Link>
            <nav>
                <NavLink className="menu-link" to="/categoria/Audi">Audi</NavLink>
                <NavLink className="menu-link" to="/categoria/Mercedes Benz">Mercedes Benz</NavLink>
                <NavLink className="menu-link" to="/categoria/BMW">BMW</NavLink>
                <CartWidget />
            </nav>
        </header>

);
}
export default NavBar