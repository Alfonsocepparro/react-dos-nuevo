import { useContext } from "react"
import { Link } from "react-router-dom";
import './Carrito.css'
import { CartContext } from "../Context/CartContext";



const Carrito = () => {

    const { carrito, precioTotal, vacio } = useContext(CartContext);
    
    const carritoVacio = () => {
        vacio();
    }


    return (
    <div className="containerCart">

        {
        carrito.map ((producto) => (
            <div key={producto.id} className="product">
            <h3>{producto.titulo}</h3>
            <p>Precio unitario: $ {producto.precio}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio Total : $ {producto.precio * producto.cantidad}</p>
            </div>
        ))
    }

    { 
        carrito.length > 0 ?
        
        <>
        <h2>Precio Total: $ {precioTotal()}</h2> 

        <div className="buttons">
        <button onClick={carritoVacio}>Vaciar Carrito</button>

        <Link to="/checkout">Finaliza tu compra</Link>
        </div>
    

        </> :

        <h2>Su carrito esta vacio</h2>
    }

    </div>
    )
}

export default Carrito
