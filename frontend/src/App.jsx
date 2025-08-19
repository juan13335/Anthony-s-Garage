import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductosTabla from './components/ProductosTabla';
import NavBar from './components/NavBar';
function App() {
  

  return (
    <>
      <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductosTabla />} />
      </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
