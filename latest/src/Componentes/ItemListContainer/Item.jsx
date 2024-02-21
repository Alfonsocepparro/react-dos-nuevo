import { Link } from "react-router-dom"


const Item = (producto) => {
    return (
    <div className="producto">
        <img src={producto.imagen} alt="" />
        <div>
            <h4 className= "titulo-producto">{producto.titulo}</h4>
            <p> Precio: ${producto.precio} </p>
            <p> Categoria: ${producto.categoria} </p>
            <Link className= "ver-mas" to={"/item/${producto.id}"}>Ver mas</Link>
        </div>
    </div>
    )
}

export default Item
