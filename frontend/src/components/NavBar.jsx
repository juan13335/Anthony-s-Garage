import { Link } from 'react-router-dom';
import logo from '../assets/anthonys.jpg'
function NavBar() {
   
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#a6afb6' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" width="80" height="80" className="d-inline-block align-text-top" />
            </a>
            <span className="navbar-brand ms-2">Anthony's Garage</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav me-5 fs-6">
              <li className="nav-item dropdown me-3">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" >
                  Producto
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Crear</a></li>
                  <li><a className="dropdown-item" href="#">Listar</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" >
                  Categoria
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/categorias/cargar">Cargar</Link></li>
                  <li><Link className="dropdown-item" to="/categorias/listar">Listar</Link></li>
                  <li><Link className="dropdown-item" to="/categorias/otra">Something else here</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;