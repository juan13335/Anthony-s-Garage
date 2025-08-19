import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductosTabla from './components/ProductosTabla';
import CargarProductos from './components/CargarProductos';
import NavBar from './components/NavBar';
import CategoriasForm from './components/CategoriasForm';
function App() {
  

  return (
    <>
      <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductosTabla />} />
        <Route path="/categorias/cargar" element={<CategoriasForm />} />
        <Route path="/productos/cargar" element={<CargarProductos />} />
        <Route path="/productos/listar" element={<ProductosTabla />} />
      </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
