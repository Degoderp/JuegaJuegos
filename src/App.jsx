import './App.css'
import Header from './assets/components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Footer from './assets/components/Footer'
import TopBar from './assets/components/Topbar'
import NavBar from './assets/components/NavBar'
import './css/style.css';
import './css/bootstrap.min.css';
import Shop from './pages/Shop'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
      <TopBar/>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Tienda' element = {<Shop/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App
