import data from './data.json';

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject(new Error("Error al cargar datos."));
            }
        }, 1000);
    });
};


export const pedirItemPorId = (id) => {
    return new Promise ((resolve, reject) =>{

        const item = data.find((el) => el.id.toString() === id);
        if (item) {
            resolve (item)
        } else {
            reject ({
                error: "Producto no encontrado"
            })
        }
    })
}