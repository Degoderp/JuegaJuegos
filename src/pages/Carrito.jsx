
function carrito() {
  return (
    
<div className="container-fluid py-5">
    {/* Pagina de Carrito */}
  <div className="container py-5">
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody id="cart-items-body">
        </tbody>
      </table>
    </div>
    <div className="mt-5">
      <input type="text" id="coupon-code" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Código de Cupón" />
      <button className="btn btn-primary rounded-pill px-4 py-3" type="button" id="apply-coupon-btn">Aplicar Cupón</button>
      <p id="coupon-message" className="mt-2" />
    </div>
    <div className="row g-4 justify-content-end">
      <div className="col-8" />
      <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
        <div className="bg-light rounded">
          <div className="p-4">
            <h1 className="display-6 mb-4">Total <span className="fw-normal">del Carrito</span></h1>
            <div className="d-flex justify-content-between mb-4">
              <h5 className="mb-0 me-4">Subtotal:</h5>
              <p className="mb-0" id="cart-subtotal">$0</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 me-4">IVA (19%)</h5>
              <p className="mb-0" id="cart-iva">$0</p>
            </div>
          </div>
          <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
            <h5 className="mb-0 ps-4 me-4">Total</h5>
            <p className="mb-0 pe-4 fw-bold" id="cart-total">$0</p>
          </div>
          <a href="checkout.html" className="btn btn-primary rounded-pill px-4 py-3 text-uppercase mb-4 ms-4" type="button">Proceder al pago</a>
        </div>
      </div>
    </div>
  </div>
  {/* Pagina de Carrito */}
</div>



  )
}

export default carrito
