import express from 'express';
import { obtenerProducto, crearProducto, actualizarProducto, eliminarProducto} from '../controllers/productoController.js';

const router = express.Router();

router.get('/productos', obtenerProducto);
router.post('/crearproducto', crearProducto);
router.put('/actualizarproducto/:id', actualizarProducto );
router.delete('/productos/:id', eliminarProducto)

export default router;