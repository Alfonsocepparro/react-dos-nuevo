import { useEffect, useState } from "react";
import { getProductoId } from "../Productos/PedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';

const ItemDetailConteiner = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        getProductoId(Number(id))
        .then ((response) =>{
            setItem(response);
        })

    },[id]);

    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )

}

export default ItemDetailConteiner;