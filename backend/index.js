    import express from 'express';
    import sequelize from './database/bd.js';
    import productosRoutes from './routes/productoRoutes.js';
    import categoriasRoutes from './routes/categoriaRoutes.js';

    const app = express();
    const PORT = 3000;
    app.use(express.json());

    app.use('/api', productosRoutes);
    app.use('/api', categoriasRoutes);


    sequelize.sync()
    app.listen(PORT, ()=>{
        console.log(`El servidor está escuchando en el puerto ${PORT}`)
    })

   


