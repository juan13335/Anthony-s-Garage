import CategoriasAtributos from "../models/categorias.js";


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
        }};


const actualizarCategoria = async (req, res) => {
    const {id} = req.params;
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
export { obtenerCategorias, crearCategoria };