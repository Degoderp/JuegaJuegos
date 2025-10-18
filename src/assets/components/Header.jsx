import React from 'react'

function Header() {
  return (
    <div className="container-fluid px-5 py-4">
  <div className="row gx-0 align-items-center">
    <div className="col-lg-3 text-center text-lg-start">
      <a href="index.html" className="navbar-brand p-0">
        <h1 className="display-5 text-primary m-0"><i className="fas fa-shopping-bag text-secondary me-2" />JuegaJuegos</h1>
      </a>
    </div>
    <div className="col-lg-6 text-center">
      <div className="position-relative">
        <div className="input-group">
          <input className="form-control border-primary rounded-pill w-100 py-3 ps-4" type="text" placeholder="¿Qué estás buscando?" />
          <button type="button" className="btn btn-primary rounded-pill py-3 px-4 position-absolute top-0 end-0" style={{marginRight: '-1px'}}><i className="fas fa-search" /></button>
        </div>
      </div>
    </div>
    {/* Columna de Iconos: Carrito y Deseos */}
    <div className="col-lg-3 text-center text-lg-end">
      <div className="d-inline-flex align-items-center">
        <a href="cart.html" className="text-muted d-flex align-items-center justify-content-center position-relative">
          <span className="rounded-circle btn-md-square border">
            <i className="fas fa-shopping-cart fa-lg" />
          </span>
          <span id="cart-count" className="position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{top: '-5px', right: '-10px', height: 20, minWidth: 20, fontSize: 12}}>
            0
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Header