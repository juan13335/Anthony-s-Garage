import axios from 'axios'

const URL = 'http://localhost:3000/api/categorias'

async function getCategorias() {
    const res = await axios.get(URL)
    return res.data;
}

async function postCategorias(categoria) {
    const res = await axios.post(URL, categoria)
    return res.data;
}

async function eliminarCategoria(id) {
    const res = await axios.delete(URL + '/' + id)
    return res.data;
}

export const categoriaService = {
    getCategorias,
    postCategorias,
    eliminarCategoria
}