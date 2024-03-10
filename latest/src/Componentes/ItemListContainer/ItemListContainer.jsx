import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Configuracion/Configuracion";
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
        const { categoria } = useParams();
    
        useEffect(() => {
        const obtenerProductos = async () => {
            const productosRef = collection(db, "productos");
            const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
    
            try {
            const querySnapshot = await getDocs(q);
            const productosData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setProductos(productosData);
            console.log("Productos:", productosData);
            } catch (error) {
            console.error("Error al obtener datos de Firestore:", error);
            }
        };
    
        obtenerProductos();
        }, [categoria]);
    
        return (
        <div>
            <ItemList productos={productos} />
        </div>
        );
    };
    
    export default ItemListContainer;
  