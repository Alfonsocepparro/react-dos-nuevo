import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src="https://pngimg.com/uploads/ferrari/ferrari_PNG10665.png" alt="" style={{ width: '100px', height: 'auto' }} />
            </Link>
            <nav className='navBar'>
                <NavLink to="/categoria/Audi" className={isActive => isActive ? 'ActiveOption' : 'Option'}>
                    Audi
                </NavLink>
                <NavLink to="/categoria/Mercedes%20Benz" className={isActive => isActive ? 'ActiveOption' : 'Option'}>
                    Mercedes Benz
                </NavLink>
                <NavLink to="/categoria/BMW" className={isActive => isActive ? 'ActiveOption' : 'Option'}>
                    BMW
                </NavLink>
                <CartWidget />
            </nav>
        </header>
    );
}

export default NavBar;
