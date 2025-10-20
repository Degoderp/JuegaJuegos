import './App.css'
import Header from './assets/components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './assets/components/Footer'
import TopBar from './assets/components/Topbar'
import NavBar from './assets/components/NavBar'
import './css/style.css';
import './css/bootstrap.min.css';
import Error from './pages/error'
import Cuenta from './pages/cuenta'
import Inicio from './pages/inicio'
import Tienda from './pages/tienda'
import Carrito from './pages/carrito'
import Contacto from './pages/Contacto'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <TopBar/>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Inicio/>}/>
        <Route path='/Tienda' element = {<Tienda/>}/>
        <Route path='/Datos de compra' element = {<Cuenta/>}/>
        <Route path='/Error' element = {<Error/>}/>
        <Route path='/Carrito' element = {<Carrito/>}/>
        <Route path="/Contacto" element = {<Contacto/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App
