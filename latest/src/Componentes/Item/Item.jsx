import { Link } from "react-router-dom"
import './Item.css';

export default function Item({producto}) {
    return (
    <div className="itemConteiner">
        <img className="imagenProd" src={producto.imagen} />
        <div>
            <h3 className= "titulo-producto">{producto.titulo}</h3>
            <p> Precio: ${producto.precio} </p>
            <p> Categoria: {producto.categoria} </p>
            <button><Link className="ver-mas" to={`Item/${producto.id}`}>Ver mas</Link></button>
        </div>
    </div>
    )
}

