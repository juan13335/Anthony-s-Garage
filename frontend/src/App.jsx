import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Principal from './components/Principal.jsx';
import CargarProductos from './components/CargarProductos.jsx';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path='/cargar' element={<CargarProductos />} />
        </Routes>
      </Router>
    </>
  )
}


export default App
