
function Error() {
  return (
  <div>
  <div className="container-fluid py-5">
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <i className="bi bi-exclamation-triangle display-1 text-secondary" />
          <h1 className="display-1">404</h1>
          <h1 className="mb-4">Páginas no encontrada</h1>
          <p className="mb-4">Lo sentimos, no pudimos encontrar el destino que estaba buscando</p>
          <a className="btn btn-primary rounded-pill py-3 px-5" href="index.html">Volver a Inico</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Error
