import { Link, NavLink } from 'react-router-dom'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar=() =>{
    return (
        <header>
            <Link to="/" className="logo"><img src="https://pngimg.com/uploads/ferrari/ferrari_PNG10665.png" alt="" style={{ width: '100px', height: 'auto' }}/></Link>
            <nav>
                <NavLink className="menu-link" to="/categoria/Audi" style={{fontSize: 32, color: 'black' }}>Audi</NavLink>
                <NavLink className="menu-link" to="/categoria/Mercedes Benz" style={{fontSize: 32, color: 'black' }}>Mercedes Benz</NavLink>
                <NavLink className="menu-link" to="/categoria/BMW" style={{fontSize: 32, color: 'black' }}>BMW</NavLink>
                <CartWidget />
            </nav>
        </header>

);
}
export default NavBar