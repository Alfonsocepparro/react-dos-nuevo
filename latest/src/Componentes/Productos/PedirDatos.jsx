import data from './data.json';

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 150)
    })
}


export const getProductoId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = data.find(product => product.id === id)

            if (product) {
                resolve(product);
            } else {
                reject({
                    error: "Producto no encontrado",
                })
            }
        }, 500)
    });
}



export const getProductosPorCategoria = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria =data.filter(item => item.category === categoryId);
            resolve(productosCategoria);
    })}
    )}