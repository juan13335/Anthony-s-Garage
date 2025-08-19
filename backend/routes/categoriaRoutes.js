import express from 'express';
import { obtenerCategorias, crearCategoria, actualizarCategoria, eliminarCategoria, cantidadProductos} from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/categorias', obtenerCategorias);
router.post('/categorias', crearCategoria);
router.put('/categorias/:id', actualizarCategoria);
router.delete('/categorias/:id', eliminarCategoria);
router.get('/categorias/:id/productos-asociados', cantidadProductos)

export default router;