import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Configuracion/Configuracion";
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);


    const categoria = useParams().categoria;

    useEffect(() => {

        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        getDocs(q)
        .then((resp) => {
            console.log(resp);
            setProductos(
                console.log(resp.docs[0].id),
                console.log(resp.docs[0].data()),
                
            resp.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
        )
    })
        
    }, [categoria])
    
    
    return (
    <div>
        <ItemList productos={productos} />
    </div>
    )
}

export default ItemListContainer