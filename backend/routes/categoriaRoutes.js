import express from 'express';
import { obtenerCategorias, crearCategoria, actualizarCategoria, eliminarCategoria, cantidadProductos} from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/categorias', obtenerCategorias);
router.post('/crearcategoria', crearCategoria);
router.put('/actualizarcategoria/:id', actualizarCategoria);
router.delete('/categorias/:id', eliminarCategoria);
router.get('/categorias/:id/productos-asociados', cantidadProductos)

export default router;