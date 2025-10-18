function TopBar() {
    return(
        <div className="container-fluid bg-light px-5 d-none d-lg-block">
  <div className="row gx-0 align-items-center" style={{height: 45}}>
    <div className="col-lg-4 text-center text-lg-start">
      <div className="d-inline-flex align-items-center">
        <a href="contact.html" className="text-muted me-2"><small>Ayuda</small></a>
        <small className="text-muted">/</small>
        <a href="contact.html" className="text-muted px-2"><small>Soporte</small></a>
      </div>
    </div>
    <div className="col-lg-4 text-center">
      <div className="d-inline-flex align-items-center">
        <small className="text-dark me-2">Llama a:</small>
        <a href="contact.html" className="text-muted"><small>(+56) 9 6235 2425</small></a>
      </div>
    </div>
    <div className="col-lg-4 text-center text-lg-end">
      <div className="d-inline-flex align-items-center">
        <a href="login.html" className="text-muted px-2"><small>Iniciar Sesión</small></a>
        <small className="text-muted">/</small>
        <a href="registro.html" className="text-muted ps-2"><small>Registrarse </small></a>
      </div>
    </div>
  </div>
</div>
    )
}

export default TopBar