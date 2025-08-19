import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductosTabla from './components/ProductosTabla';
import CargarProductos from './components/CargarProductos';
import Otro from './components/Otro';
import NavBar from './components/NavBar';
function App() {
  

  return (
    <>
      <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductosTabla />} />
        <Route path="/productos/cargar" element={<CargarProductos />} />
        <Route path="/productos/listar" element={<ProductosTabla />} />
        <Route path="/productos/otra" element={<Otro />} />
      </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
