import { useEffect, useState } from "react"
import { pedirItemPorId } from "../Productos/PedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

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
        </div>
    )
}

export default ItemDetailContainer
