import React from 'react'

function Cuenta() {
  return (
    <div>
      {/* Cuenta*/}
  <div className="container-fluid bg-light overflow-hidden py-5">
    <div className="container py-5">
      <h1 className="mb-4 wow fadeInUp" data-wow-delay="0.1s">Detalles de facturación</h1>
      <form action="#">
        <div className="row g-5">
          <div className="col-md-12 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="form-item w-100">
                  <label className="form-label my-3">Primer nombre<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="form-item w-100">
                  <label className="form-label my-3">Apellido<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-item">
              <label className="form-label my-3">Nombre compañia<sup>*</sup></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">Dirrección <sup>*</sup></label>
              <input type="text" className="form-control" placeholder="House Number Street Name" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">Comuna<sup>*</sup></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">País<sup>*</sup></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">Codigo postal<sup>*</sup></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">Número de telefono<sup>*</sup></label>
              <input type="tel" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">Correo electonico<sup>*</sup></label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-item">
              <textarea name="text" className="form-control" spellCheck="false" cols={30} rows={11} placeholder="Información adiccional" defaultValue={""} />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr className="text-center">
                    <th scope="col" className="text-start">Nombre</th>
                    <th scope="col">edición</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <th scope="row" className="text-start py-4">
                      Elden Ring
                    </th>
                    <td className="py-4">Edición Deluxe</td>
                    <td className="py-4">$76.000</td>
                    <td className="py-4">$76.000</td>
                  </tr>
                  <tr className="text-center">
                    <th scope="row" className="text-start py-4">
                      The Legend of Zelda: Tears of the Kingdom
                    </th>
                    <td className="py-4">Edición Estándar</td>
                    <td className="py-4">$66.500</td>
                    <td className="py-4">$66.500</td>
                  </tr>
                  <tr className="text-center">
                    <th scope="row" className="text-start py-4">
                      Baldur's Gate 3
                    </th>
                    <td className="py-4">Digital Deluxe</td>
                    <td className="py-4">$76.000</td>
                    <td className="py-4">$76.000</td>
                  </tr>
                  <tr className="text-center">
                    <th scope="row" className="text-start py-4">
                      Cyberpunk 2077: Phantom Liberty
                    </th>
                    <td className="py-4">Edición Completa</td>
                    <td className="py-4">$57.000</td>
                    <td className="py-4">$114.000</td>
                  </tr>
                  <tr className="text-center">
                    <th scope="row" className="text-start py-4">
                      God of War Ragnarök
                    </th>
                    <td className="py-4">Edición de Lanzamiento</td>
                    <td className="py-4">$57.000</td>
                    <td className="py-4">$57.000</td>
                  </tr>
                  <tr>
                    <th scope="row">
                    </th>
                    <td className="py-4" />
                    <td className="py-4" />
                    <td className="py-4">
                      <p className="mb-0 text-dark py-2">Subtotal</p>
                    </td>
                    <td className="py-4">
                      <div className="py-2 text-center border-bottom border-top">
                        <p className="mb-0 text-dark">$389.500</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                    </th>
                    <td className="py-4">
                      <p className="mb-0 text-dark text-uppercase py-2">TOTAL</p>
                    </td>
                    <td className="py-4" />
                    <td className="py-4" />
                    <td className="py-4">
                      <div className="py-2 text-center border-bottom border-top">
                        <p className="mb-0 text-dark">$389.500 CLP</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row g-0 text-center align-items-center justify-content-center border-bottom py-2">
              <div className="col-12">
                <div className="form-check text-start my-2">
                  <input type="checkbox" className="form-check-input bg-primary border-0" id="Transfer-1" name="Transfer" defaultValue="Transfer" />
                  <label className="form-check-label" htmlFor="Transfer-1">Banco de Trasferencia</label>
                </div>
                <p className="text-start text-dark">Realice su pago directamente en nuestra cuenta bancaria. 
                  Utilice su número de pedido como referencia de pago. 
                  Su pedido no se enviará hasta que los fondos se hayan acreditado en nuestra cuenta.</p>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
              <div className="col-12">
                <div className="form-check text-start my-2">
                  <input type="checkbox" className="form-check-input bg-primary border-0" id="Payments-1" name="Payments" defaultValue="Payments" />
                  <label className="form-check-label" htmlFor="Payments-1">Cheque de pagos</label>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
              <div className="col-12">
                <div className="form-check text-start my-2">
                  <input type="checkbox" className="form-check-input bg-primary border-0" id="Delivery-1" name="Delivery" defaultValue="Delivery" />
                  <label className="form-check-label" htmlFor="Delivery-1">Reembolso</label>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
              <div className="col-12">
                <div className="form-check text-start my-2">
                  <input type="checkbox" className="form-check-input bg-primary border-0" id="Paypal-1" name="Paypal" defaultValue="Paypal" />
                  <label className="form-check-label" htmlFor="Paypal-1">Paypal</label>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center pt-4">
              <button type="button" className="btn btn-primary border-secondary py-3 px-4 text-uppercase w-100 text-primary">Hacer pedido</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/* Cuenta */}
</div>

  )
}

export default Cuenta
