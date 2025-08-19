import { useState, useEffect } from 'react'
import { productosService } from '../services/productos.service'
import { categoriaService } from '../services/categorias.service';
function ProductosTabla() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);

  
    useEffect(() => {
        obtenerProductos();
        obtenerCategorias();
    }, [])

  async function obtenerProductos(e) {
    if (e) e.preventDefault();
    let data = await productosService.getProductos();
    setProductos(data)
  }

  async function obtenerCategorias() {
    let data = await categoriaService.getCategorias();
    setCategorias(data);
  }

  function obtenerNombreCategoria(id) {
    const categoria = categorias.find(cat => cat.id === id);
    return categoria ? categoria.nombre : id;
  }

    return(
        <div className="table-responsive">
          <table className="table table-striped w-100">
            <thead>
              <tr>
                <th scope="col">IdProducto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Proveedor</th>
                <th scope="col">Precio</th>
                <th scope="col">Categoria</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {productos &&
                productos.map((producto) => (
                  <tr key={producto.id}>
                    <th scope="row">{producto.id}</th>
                    <td>{producto.nombre}</td>
                    <td>{producto.proveedor}</td>
                    <td>{producto.precio}</td>
                    <td>{obtenerNombreCategoria(producto.categoriaId)}</td>
                    <td>
                      <button type="button" className="btn btn-success me-2">
                        Editar
                      </button>
                      <button type="button" className="btn btn-danger">
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
}

export default ProductosTabla;