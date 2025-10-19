
function Contacto() {
  return (
    <div>
        {/* Pagina de contacto */}
 <div className="container-fluid contact py-5">
  <div className="container py-5">
    <div className="p-5 bg-light rounded">
      <div className="row g-4">
        <div className="col-12">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 900}}>
            <h4 className="text-primary border-bottom border-primary border-2 d-inline-block pb-2">Ponte en contacto</h4>
            <p className="mb-5 fs-5 text-dark">¡Estamos aquí para ti! ¿Cómo podemos ayudarte? ¡Estamos aquí para ti!
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <h5 className="text-primary wow fadeInUp" data-wow-delay="0.1s">Conectemos</h5>
          <h1 className="display-5 mb-4 wow fadeInUp" data-wow-delay="0.3s">Envía tu mensaje</h1>
          <p className="mb-4 wow fadeInUp" data-wow-delay="0.5s">Si tienes alguna pregunta, inquietud o simplemente quieres decir hola, no dudes en enviarnos un mensaje. Nuestro equipo está listo para ayudarte con cualquier consulta que puedas tener. 
            </p>
          <form>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Tú nombre</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  <label htmlFor="email">Tú correo electronico</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                  <label htmlFor="phone">Número de telefono</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="project" placeholder="Project" />
                  <label htmlFor="project">Asunto</label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 160}} defaultValue={""} />
                <label htmlFor="message">Mensaje</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3">Enviar mensaje</button>
            </div>
          </form></div>
      </div>
      <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.2s">
        <div className="h-100 rounded">
          <iframe className="rounded w-100" style={{height: '100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.57794711124!2d-70.6183588847926!3d-33.43450098077882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c585572b984d%3A0x6a7b7a5a3d3c8c66!2sAv.%20Antonio%20Varas%20666%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2scl!4v1678886400000!5m2!1ses-419!2scl" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  </div>
</div>
    {/* Pagina de contacto */}
    </div>
  )
}

export default Contacto
