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


    export { crearProducto , obtenerProducto };