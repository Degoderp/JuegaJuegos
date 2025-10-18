import './App.css'
import Header from './assets/components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Footer from './assets/components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/About' element = {<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App
