import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import data from '../Productos/data.json'


function asyncMock(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryId === undefined) {
                resolve(data);
            } else {
                const productosFiltro = data.filter((item) => {
                    return item.categoria === categoryId;
                });

                if (productosFiltro.length === 0) {
                    reject("Producto no encontrado");
                }

                resolve(productosFiltro);
            }
        }, 1000);
    });
}



const ItemListContainer = ({greeting}) => {

    const [productos , setProductos] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        asyncMock(categoryId)
        .then((response) => setProductos(response))
        .catch ((rej) => console.log (rej)); 
    },[categoryId]);

    return (
        <main>
            <h1 className="greeting">{greeting}</h1>
            <ItemList productos= {productos} />
        </main>
    )
}

export default ItemListContainer
