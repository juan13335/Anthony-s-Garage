import { React, useEffect, useState } from 'react'
import ProductosTabla from './ProductosTabla'
import { useForm } from 'react-hook-form'
import { productosService } from '../services/productos.service'
import { categoriaService } from '../services/categorias.service'

export default function CargarProductos() {
    const [categorias, setCategorias] = useState([]);

    const { register, handleSubmit, reset } = useForm();

    async function onSubmit(data) {
        await productosService.postProducto(data);
        reset();
    }


    useEffect(() => {
        obtenerCategorias();
    }, [])

    async function obtenerCategorias(e) {
        if (e) e.preventDefault();
        let data = await categoriaService.getCategorias();
        setCategorias(data)
    }


    return (
        <>
            <h2 className='text-center mb-5'>Cargar Productos</h2>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                    <div className="form-group mb-3">
                        <input {...register("nombre")} className='form-control' placeholder="Nombre" />
                    </div>
                    <div className="form-group mb-3">
                        <input {...register("proveedor")} className='form-control' placeholder="Proveedor" />
                    </div>
                    <div className="form-group mb-3">
                        <input {...register("precio")} className='form-control' placeholder="Precio" />
                    </div>
                    <div className="form-group mb-3">
                        <select {...register("categoriaId")} className='form-control' placeholder="Categoria" >
                            <option value="">Seleccione la categoria: </option>
                            {categorias.map(categoria => (
                                <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Cargar</button>
                </form>
            </div>

        </>
    )
}