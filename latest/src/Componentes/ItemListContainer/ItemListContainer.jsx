import { useEffect, useState } from "react"
import { pedirDatos } from "../Productos/PedirDatos"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [productos , setProductos] = useState([]);

    useEffect (() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
        }, [])

    return (
        <div>
            <ItemList productos= {productos} />
    </div>
    )
}

export default ItemListContainer
