import express from 'express';
import { obtenerCategorias, crearCategoria } from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/categorias', obtenerCategorias);
router.post('/crearcategoria', crearCategoria);

export default router;