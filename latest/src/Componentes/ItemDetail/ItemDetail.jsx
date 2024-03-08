import { useContext, useState } from "react";
import ItemCount from "../CartWidget/ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

    const {cart, clickAdd} = useContext(CartContext);
    
    const [cantidad, setCantidad] = useState (1);
        

    const clickSubstract = () => {
        cantidad > 1 && setCantidad (cantidad -1)
    }

    const clickAddition = () => {
        cantidad < producto.stock && setCantidad (cantidad + 1)
    }
    return (
        <main className='mainDetail'>
            <article>
                <img src={producto.imagen} alt={producto.titulo} />
                <div>
                    <h3>{producto.titulo}</h3>
                    <p>{producto.descripcion}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <p>$ {producto.precio} </p>
                    <ItemCount cantidad={cantidad} clickSubstract={clickSubstract} clickAddition={clickAddition} clickAdd={() => {clickAdd (producto, cantidad)}}/>
                </div>
            </article>
        </main>
    )
}

export default ItemDetail