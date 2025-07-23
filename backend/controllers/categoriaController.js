import CategoriasAtributos from "../models/categorias.js";
import ProductosAtributos from "../models/productos.js";


const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await CategoriasAtributos.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las categorías" });
    }
};


const crearCategoria = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const nuevaCategoria = await CategoriasAtributos.create({
            nombre,
            descripcion
        });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        const categoria = await CategoriasAtributos.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ error: "Categoría no encontrada" });
        }
        categoria.nombre = nombre;
        categoria.descripcion = descripcion;
        await categoria.save();
        res.json(categoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        await CategoriasAtributos.destroy({
            where: { id }
        });
        res.status(204).send();
    } catch (error) {
        console.error("Error al eliminar la categoría:", error);
        res.status(500).json({ error: error.message });
    }
}

const cantidadProductos = async (req, res) => {
    const { id } = req.params
    try {
        const cantidad = await ProductosAtributos.count({ where: { categoriaId: id } })
        res.json({cantidad})
    } catch (error) {
        return res.json({error : error.message})
    }
}

export {
    obtenerCategorias, 
    crearCategoria, 
    actualizarCategoria, 
    eliminarCategoria,
    cantidadProductos
};