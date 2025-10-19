import { Link } from "react-router-dom"

function NavBar () {
    return(
<div className="container-fluid nav-bar bg-primary">
  <div className="container">
    <nav className="navbar navbar-light navbar-expand-lg py-3">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars text-white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <Link className = "nav-item nav-link" to = '/'>Inicio</Link>
          <Link className= "nav-item nav-link" to = '/Tienda'>Tienda</Link>
          <Link className="nav-item nav-link" to = "/Carrito">Carrito</Link>
          <Link className="nav-item nav-link" to = "/Contacto">Contacto</Link>
          <Link className="nav-item nav-link" to="/Datos de compra"> Datos de compra</Link>
        </div>
      </div>
    </nav>
  </div>
</div>
)
}

export default NavBar