import express from 'express';
import { obtenerProducto, crearProducto } from '../controllers/productoController.js';

const router = express.Router();

router.get('/productos', obtenerProducto);
router.post('/crearproducto', crearProducto);

export default router;