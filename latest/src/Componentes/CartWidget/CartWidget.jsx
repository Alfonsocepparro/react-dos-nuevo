import { Link } from "react-router-dom"
import './CartWidget.css';
import { useContext } from "react";
import { CartContext } from '../Context/CartContext';


const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className="CWidget">
        <Link className="menu-link" to="/carrito">
                <img src="https://static.vecteezy.com/system/resources/previews/007/629/777/non_2x/shopping-cart-line-icon-vector.jpg" alt="" style={{ width: '100px', height: 'auto' }}/>
                <span className="numerito">{cantidadEnCarrito()}</span>
                </Link>
        </div>
    )
}

export default CartWidget
