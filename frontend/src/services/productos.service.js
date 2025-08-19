import axios from 'axios';

const URL = 'http://localhost:3000/api/productos';


async function getProductos() {
    const res = await axios.get(URL);
    return res.data;
}

async function postProducto(producto) {
    const res = await axios.post(URL, producto);
    return res.data;
}


async function deleteProducto(id) {
    const res = await axios.delete(URL + '/' + id);
    return res.data;
}


export const productosService = {
    getProductos,
    postProducto,
    deleteProducto
}