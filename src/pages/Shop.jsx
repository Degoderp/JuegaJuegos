function Shop () {
    return(
<div>
  {/* Products Offer Start */}
  <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
          <a href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
            <div>
              <p className="text-muted mb-3">Juego de moda!</p>
              <h3 className="text-primary">Terraria</h3>
              <h1 className="display-3 text-secondary mb-0">40% <span className="text-primary fw-normal">Off</span></h1>
            </div>
            <img src="https://wallpapers.com/images/featured/terraria-9jnp0hmkf1tqc0l2.jpg" className="img-fluid" alt="terraria" width={325} />
          </a>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <a href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
            <div>
              <p className="text-muted mb-3">Los mejores juegos para tí!</p>
              <h3 className="text-primary">The legend of zelda</h3>
              <h1 className="display-3 text-secondary mb-0">20% <span className="text-primary fw-normal">Descuento</span></h1>
            </div>
            <img src="https://preview.redd.it/my-thoughts-on-the-legend-of-zelda-tears-of-the-kingdom-v0-kqujnm4as6wb1.jpg?width=1170&format=pjpg&auto=webp&s=c68ffca1313b7d33d1f039e982bdcd6c18f92c2a" className="img-fluid" alt="tears of the kingdom" width={300} />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Products Offer End */}
  {/* Shop Page Start */}
  <div className="container-fluid shop py-5">
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
          <div className="price mb-4">
            <h4 className="mb-2">Precios</h4>
            <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={50000} defaultValue={0} oninput="amount.value=rangeInput.value" />
            <output id="amount" name="amount" min-velue={0} max-value={50000} htmlFor="rangeInput">0</output>
          </div>
          <div className="product-color mb-3">
            <h4>Selecciona por plataforma</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark"><i className="fas fa-desktop text-secondary me-2" /> PC</a></li>
              <li><a href="#" className="text-dark"><i className="fab fa-xbox text-secondary me-2" /> Xbox</a></li>
              <li><a href="#" className="text-dark"><i className="fab fa-playstation text-secondary me-2" /> PlayStation</a></li>
              <li><a href="#" className="text-dark"><i className="fas fa-gamepad text-secondary me-2" /> Nintendo Switch</a></li>
            </ul>
          </div>
          <div className="featured-product mb-4">
            <h4 className="mb-3">Productos Destacados</h4>
            {/* Producto Destacado 1 */}
            <div className="featured-product-item d-flex align-items-center mb-3">
              <div className="rounded me-4" style={{width: 100, height: 100}}>
                <img src="https://static.wikia.nocookie.net/hollowknight/images/1/13/Silksong_cover.jpg" className="img-fluid rounded" alt="Silksong" />
              </div>
              <div>
                <h6 className="mb-2">Hollow Knight: Silksong</h6>
                <div className="d-flex mb-2"><h5 className="fw-bold me-2">$7.500</h5><h5 className="text-danger text-decoration-line-through">$10.500</h5></div>
              </div>
            </div>
            {/* Producto Destacado 2 */}
            <div className="featured-product-item d-flex align-items-center mb-3">
              <div className="rounded me-4" style={{width: 100, height: 100}}>
                <img src="https://fintualist.com/content/images/2023/06/zeldatearsofkingdom.jpg" className="img-fluid rounded" alt="Zelda" />
              </div>
              <div>
                <h6 className="mb-2">Zelda: Tears of the Kingdom</h6>
                <div className="d-flex mb-2"><h5 className="fw-bold me-2">$36.000</h5><h5 className="text-danger text-decoration-line-through">$45.000</h5></div>
              </div>
            </div>
            {/* Producto Destacado 3 */}
            <div className="featured-product-item d-flex align-items-center">
              <div className="rounded me-4" style={{width: 100, height: 100}}>
                <img src="https://media.vandal.net/m/46558/terraria-20196289252376_6.jpg" className="img-fluid rounded" alt="Terraria" />
              </div>
              <div>
                <h6 className="mb-2">Terraria</h6>
                <div className="d-flex mb-2"><h5 className="fw-bold me-2">$3.600</h5><h5 className="text-danger text-decoration-line-through">$6.000</h5></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-4 justify-content-center">
            {/* Producto: Hollow Knight: Silksong */}
            <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
              <div className="product-item rounded w-100">
                <div className="product-item-inner border rounded d-flex flex-column h-100">
                  <div className="product-item-inner-item">
                    <img src="https://static.wikia.nocookie.net/hollowknight/images/1/13/Silksong_cover.jpg" className="img-fluid w-100 rounded-top" alt="Silksong" />
                    <div className="product-new">Nuevo</div>
                  </div>
                  <div className="text-center rounded-bottom p-4 flex-grow-1">
                    <a href="#" className="d-block h4">Hollow Knight: Silksong</a>
                    <del className="me-2 fs-5">$10.500</del>
                    <span className="text-primary fs-5">$7.500</span>
                  </div>
                  <div className="text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="silksong" data-name="Hollow Knight: Silksong" data-price={7500} data-image="https://static.wikia.nocookie.net/hollowknight/images/1/13/Silksong_cover.jpg">
                      <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Producto: Zelda */}
            <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
              <div className="product-item rounded w-100">
                <div className="product-item-inner border rounded d-flex flex-column h-100">
                  <div className="product-item-inner-item">
                    <img src="https://fintualist.com/content/images/2023/06/zeldatearsofkingdom.jpg" className="img-fluid w-100 rounded-top" alt="Zelda" />
                    <div className="product-new">Oferta</div>
                  </div>
                  <div className="text-center rounded-bottom p-4 flex-grow-1">
                    <a href="#" className="d-block h4">Zelda: Tears of the Kingdom</a>
                    <del className="me-2 fs-5">$45.000</del>
                    <span className="text-primary fs-5">$36.000</span>
                  </div>
                  <div className="text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="zelda-totk-shop" data-name="Zelda: Tears of the Kingdom" data-price={36000} data-image="https://fintualist.com/content/images/2023/06/zeldatearsofkingdom.jpg">
                      <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Producto: Terraria */}
            <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
              <div className="product-item rounded w-100">
                <div className="product-item-inner border rounded d-flex flex-column h-100">
                  <div className="product-item-inner-item">
                    <img src="https://media.vandal.net/m/46558/terraria-20196289252376_6.jpg" className="img-fluid w-100 rounded-top" alt="Terraria" />
                    <div className="product-new">Oferta</div>
                  </div>
                  <div className="text-center rounded-bottom p-4 flex-grow-1">
                    <a href="#" className="d-block h4">Terraria</a>
                    <del className="me-2 fs-5">$6.000</del>
                    <span className="text-primary fs-5">$3.600</span>
                  </div>
                  <div className="text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="terraria" data-name="Terraria" data-price={3600} data-image="https://media.vandal.net/m/46558/terraria-20196289252376_6.jpg">
                      <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Producto: Left 4 Dead 2 */}
            <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
              <div className="product-item rounded w-100">
                <div className="product-item-inner border rounded d-flex flex-column h-100">
                  <div className="product-item-inner-item">
                    <img src="https://m.media-amazon.com/images/I/91cFzvxFGyS.jpg" className="img-fluid w-100 rounded-top" alt="L4D2" />
                    <div className="product-new">Oferta</div>
                  </div>
                  <div className="text-center rounded-bottom p-4 flex-grow-1">
                    <a href="#" className="d-block h4">Left 4 Dead 2</a>
                    <del className="me-2 fs-5">$6.000</del>
                    <span className="text-primary fs-5">$3.000</span>
                  </div>
                  <div className="text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="l4d2" data-name="Left 4 Dead 2" data-price={3000} data-image="https://m.media-amazon.com/images/I/91cFzvxFGyS.jpg">
                      <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Producto: GTA V */}
            <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
              <div className="product-item rounded w-100">
                <div className="product-item-inner border rounded d-flex flex-column h-100">
                  <div className="product-item-inner-item">
                    <img src="https://thegamekeys.in/wp-content/uploads/2023/08/71uizbdZ5dL.jpg" className="img-fluid w-100 rounded-top" alt="GTA V" />
                    <div className="product-new">Oferta</div>
                  </div>
                  <div className="text-center rounded-bottom p-4 flex-grow-1">
                    <a href="#" className="d-block h4">GTA V</a>
                    <del className="me-2 fs-5">$43.900</del>
                    <span className="text-primary fs-5">$21.000</span>
                  </div>
                  <div className="text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="gta5-shop" data-name="GTA V" data-price={21000} data-image="https://thegamekeys.in/wp-content/uploads/2023/08/71uizbdZ5dL.jpg">
                      <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Producto: Deltarune */}
            <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
              <div className="product-item rounded w-100">
                <div className="product-item-inner border rounded d-flex flex-column h-100">
                  <div className="product-item-inner-item">
                    <img src="https://notadogame.com/uploads/game/cover/250x/5c2bcbfc5eacb.jpg" className="img-fluid w-100 rounded-top" alt="Deltarune" />
                    <div className="product-new">Oferta</div>
                  </div>
                  <div className="text-center rounded-bottom p-4 flex-grow-1">
                    <a href="#" className="d-block h4">Deltarune</a>
                    <del className="me-2 fs-5">$13.000</del>
                    <span className="text-primary fs-5">$5.000</span>
                  </div>
                  <div className="text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="deltarune-shop" data-name="Deltarune" data-price={5000} data-image="https://notadogame.com/uploads/game/cover/250x/5c2bcbfc5eacb.jpg">
                      <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Shop Page End */}
  {/* Product Banner Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <a href="#">
          </a><div className="bg-primary rounded position-relative"><a href="#">
              <img src="https://www.infobae.com/new-resizer/uUdPENPhcySk3rOZCo3gIoPSU5s=/arc-anglerfish-arc2-prod-infobae/public/EXPB4AGS2ZA7VKTZKFMVELDHQU.jpg" className="img-fluid w-100 rounded" alt />
            </a><div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{background: 'rgba(255, 255, 255, 0.5)'}}><a href="#">
                <h3 className="display-5 text-primary">Minecraft java &amp; bedrock edition</h3>
                <p className="fs-4 text-muted">$20.000</p>
              </a><a href="#" className="btn btn-primary rounded-pill align-self-start py-2 px-4">Comprar ahora</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
          <a href="#">
          </a><div className="text-center bg-primary rounded position-relative"><a href="#">
              <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/550/header.jpg?t=1745368562" className="img-fluid w-100" alt />
            </a><div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{background: 'rgba(242, 139, 0, 0.5)'}}><a href="#">
                <h2 className="display-2 text-secondary">DESCUENTO</h2>
                <h4 className="display-5 text-white mb-4">Consigue hasta un 50%</h4>
              </a><a href="#" className="btn btn-secondary rounded-pill align-self-center py-2 px-4">Compra ahora</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Product Banner End */}
</div>

    )
}

export default Shop