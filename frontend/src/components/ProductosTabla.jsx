import { useState, useEffect } from 'react'
import { productosService } from '../services/productos.service'
function ProductosTabla() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos();
    }, [])

  async function obtenerProductos(e) {
    if (e) e.preventDefault();
    let data = await productosService.getProductos();
    setProductos(data)
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
                    <td>{producto.categoriaId}</td>
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