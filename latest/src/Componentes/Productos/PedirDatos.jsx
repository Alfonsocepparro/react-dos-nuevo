import data from './data.json';

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 150)
    })
}

export const getProductoId = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = data.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
}

export const getProductosPorCategoria = (idCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria =data.filter(item => item.category === idCategory);
            resolve(productosCategoria);
    })}
    )}