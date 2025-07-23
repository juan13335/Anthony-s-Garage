import ProductosAtributos from "../models/productos.js";


const obtenerProducto =  async (req, res) => {
        const productos = await ProductosAtributos.findAll()
        res.json(productos)
    };

const crearProducto = async (req, res) => { 
        const { nombre, proveedor, precio, categoriaId } = req.body;
        try {
            const nuevoProducto = await ProductosAtributos.create({
                nombre,
                proveedor,
                precio,
                categoriaId
            });
            res.status(201).json(nuevoProducto);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
    };


const actualizarProducto = async (req, res) => {
    const {id} = req.params
    const {nombre, precio, proveedor} = req.params.body
    try {
        const producto = ProductosAtributos.findByPk(id);
        if (!producto) {
            return res.status(404).json({error : "No se encontro el producto"})
        };
        producto.nombre = nombre
        producto.precio = precio 
        producto.proveedor = proveedor
        await producto.save();
        res.json(categoria);
        
    } catch (error) {
        return res.status(400).json({error : error.message})
    } 
}


const eliminarProducto = async (req, res) => {
    const {id} = req.params
    try {
        await ProductosAtributos.destroy({where : {id} })
        res.status(204).send()
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

    export { crearProducto , obtenerProducto, actualizarProducto, eliminarProducto};