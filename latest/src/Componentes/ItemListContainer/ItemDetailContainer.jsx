import { useEffect, useState } from "react"
import { pedirItemPorId } from "../Productos/PedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemCount from "../CartWidget/ItemCount/ItemCount";
import './Item.css';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState(null);

    useEffect (() => {
        pedirItemPorId(id)
        .then((res)=>{
            setItem(res);
        })
    }, [])

    return (
        <div>
            {item && <ItemDetail item={item} />}
            
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/> 
        </div>
    )
}
export default ItemDetailContainer
