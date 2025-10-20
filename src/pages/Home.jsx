import React from "react";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div>
      {/* Carousel Start */}
      <div className="container-fluid carousel bg-light px-0">
        <div className="row g-0 justify-content-end">
          <div className="col-12 col-lg-7 col-xl-9">
            <div className="header-carousel bg-light py-5">
              <Slider {...settings}>
                {/* PRODUCTO 1: Minecraft */}
                <div className="row g-0 header-carousel-item align-items-center">
                  <div
                    className="col-xl-6 carousel-img wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <img
                      src="https://img.redbull.com/images/c_crop,x_1015,y_0,h_1320,w_990/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2025/8/11/dcusojkfgapu4zxe3gtb/minecraft-landscape"
                      className="img-fluid w-100"
                      alt="Minecraft"
                    />
                  </div>
                  <div className="col-xl-6 carousel-content p-4">
                    <h4
                      className="text-uppercase fw-bold mb-4 wow fadeInRight"
                      data-wow-delay="0.1s"
                      style={{ letterSpacing: 3 }}
                    >
                      Es tuyo solo por 20.000 clp
                    </h4>
                    <h1
                      className="display-3 text-capitalize mb-4 wow fadeInRight"
                      data-wow-delay="0.3s"
                    >
                      TODOS LOS MINECRAFT
                    </h1>
                    <p
                      className="text-dark wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      Terminos y condiciones
                    </p>
                    <a
                      className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight add-to-cart-btn"
                      data-wow-delay="0.7s"
                      href="#"
                      data-id="minecraft-bundle"
                      data-name="Todos los Minecraft"
                      data-price={20000}
                      data-image="https://img.redbull.com/images/c_crop,x_1015,y_0,h_1320,w_990/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2025/8/11/dcusojkfgapu4zxe3gtb/minecraft-landscape"
                    >
                      Compra ahora
                    </a>
                  </div>
                </div>

                {/* PRODUCTO 2: Call of Duty WW2 */}
                <div className="row g-0 header-carousel-item align-items-center">
                  <div
                    className="col-xl-6 carousel-img wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <img
                      src="https://m.media-amazon.com/images/M/MV5BMTUyNDY4NDY5MF5BMl5BanBnXkFtZTgwMjg3NDQwNDI@._V1_.jpg"
                      className="img-fluid w-100"
                      alt="Call of Duty WW2"
                    />
                  </div>
                  <div className="col-xl-6 carousel-content p-4">
                    <h4
                      className="text-uppercase fw-bold mb-4 wow fadeInRight"
                      data-wow-delay="0.1s"
                      style={{ letterSpacing: 3 }}
                    >
                      Es tuyo solo por 23.900 clp
                    </h4>
                    <h1
                      className="display-3 text-capitalize mb-4 wow fadeInRight"
                      data-wow-delay="0.3s"
                    >
                      CALL OF DUTY WW2
                    </h1>
                    <p
                      className="text-dark wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      Terminos y condiciones
                    </p>
                    <a
                      className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight add-to-cart-btn"
                      data-wow-delay="0.7s"
                      href="#"
                      data-id="cod-ww2"
                      data-name="Call of Duty: WW2"
                      data-price={23900}
                      data-image="https://m.media-amazon.com/images/M/MV5BMTUyNDY4NDY5MF5BMl5BanBnXkFtZTgwMjg3NDQwNDI@._V1_.jpg"
                    >
                      Compra ahora
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          {/* PRODUCTO 3: GTA V (Banner Lateral) */}
          <div
            className="col-12 col-lg-5 col-xl-3 wow fadeInRight"
            data-wow-delay="0.1s"
          >
            <div className="carousel-header-banner h-100">
              <img
                src="https://thegamekeys.in/wp-content/uploads/2023/08/71uizbdZ5dL.jpg"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
                alt="GTA V"
              />
              <div className="carousel-banner-offer">
                <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">
                  ahorra 21.900
                </p>
                <p className="text-primary fs-5 fw-bold mb-0">
                  oferta especial
                </p>
              </div>
              <div className="carousel-banner">
                <div className="carousel-banner-content text-center p-4">
                  <a href="#" className="d-block mb-2">
                    GTA V
                  </a>
                  <a href="#" className="d-block text-white fs-3">
                    VERSIÓN ELITE <br /> ONLINE PREMIUM
                  </a>
                  <del className="me-2 text-white fs-5">43.900</del>
                  <span className="text-primary fs-5">$21.000</span>
                </div>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill py-2 px-4 add-to-cart-btn"
                  data-id="gta5-elite"
                  data-name="GTA V: Elite Online Premium"
                  data-price={21000}
                  data-image="https://thegamekeys.in/wp-content/uploads/2023/08/71uizbdZ5dL.jpg"
                >
                  <i className="fas fa-shopping-cart me-2" /> añadir a carrito
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
  {/* Searvices Start */}
  <div className="container-fluid px-0">
    <div className="row g-0">
      <div className="col-6 col-md-4 col-lg-2 border-start border-end wow fadeInUp" data-wow-delay="0.1s">
        <div className="p-4">
          <div className="d-inline-flex align-items-center">
            <i className="fa fa-sync-alt fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Devolución gratis</h6>
              <p className="mb-0">por 30 días!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.2s">
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fab fa-telegram-plane fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Envio gratis</h6>
              <p className="mb-0">Envio gratis a todo chile</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.3s">
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-life-ring fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">soporte 24/7</h6>
              <p className="mb-0">Nosotros tenemos soporte todo el día</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.4s">
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-credit-card fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Gana una gift card</h6>
              <p className="mb-0">Recibe una gift card por compras sobre 50.000 clp</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.5s">
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-lock fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Metodo de pago seguro</h6>
              <p className="mb-0">Nos importa tú seguridad</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.6s">
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-blog fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Servicio online</h6>
              <p className="mb-0">Devolución de productos gratis duranet 30 días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Searvices End */}
  {/* Products Offer Start */}
  <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
          <a href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
            <div>
              <p className="text-muted mb-3">Juego de moda!</p>
              <h3 className="text-primary">Terraria</h3>
              <h1 className="display-3 text-secondary mb-0">40% <span className="text-primary fw-normal">Descuento</span></h1>
            </div>
            <img src="https://wallpapers.com/images/featured/terraria-9jnp0hmkf1tqc0l2.jpg" className="img-fluid" alt width={300} />
          </a>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <a href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
            <div>
              <p className="text-muted mb-3">Los mejores juegos para tí!</p>
              <h3 className="text-primary">The legend of zelda</h3>
              <h1 className="display-3 text-secondary mb-0">20% <span className="text-primary fw-normal">Descuento</span></h1>
            </div>
            <img src="https://preview.redd.it/my-thoughts-on-the-legend-of-zelda-tears-of-the-kingdom-v0-kqujnm4as6wb1.jpg?width=1170&format=pjpg&auto=webp&s=c68ffca1313b7d33d1f039e982bdcd6c18f92c2a" className="img-fluid" alt width={300} />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Products Offer End */}
  {/* Our Products Start */}
  <div className="container-fluid product py-5">
    <div className="container py-5">
      <div className="tab-class">
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              {/* Producto: Hollow Knight: Silksong */}
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="product-item rounded wow fadeInUp w-100" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded d-flex flex-column h-100">
                    <div className="product-item-inner-item">
                      <img src="https://static.wikia.nocookie.net/hollowknight/images/1/13/Silksong_cover.jpg" className="img-fluid w-100 rounded-top" alt="Silksong" />
                      <div className="product-new">Nuevo</div>
                      <div className="product-details">
                        <a href="single.html"><i className="fa fa-eye fa-1x" /></a>
                      </div>
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
              {/* Producto: Deltarune */}
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="product-item rounded wow fadeInUp w-100" data-wow-delay="0.3s">
                  <div className="product-item-inner border rounded d-flex flex-column h-100">
                    <div className="product-item-inner-item">
                      <img src="https://notadogame.com/uploads/game/cover/250x/5c2bcbfc5eacb.jpg" className="img-fluid w-100 rounded-top" alt="Deltarune" />
                      <div className="product-sale">Oferta</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4 flex-grow-1">
                      <a href="#" className="d-block h4">Deltarune</a>
                      <del className="me-2 fs-5">$13.000</del>
                      <span className="text-primary fs-5">$5.000</span>
                    </div>
                    <div className="text-center p-4 pt-0">
                      <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="deltarune" data-name="Deltarune" data-price={5000} data-image="https://notadogame.com/uploads/game/cover/250x/5c2bcbfc5eacb.jpg">
                        <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Producto: Overcooked 2 */}
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="product-item rounded wow fadeInUp w-100" data-wow-delay="0.5s">
                  <div className="product-item-inner border rounded d-flex flex-column h-100">
                    <div className="product-item-inner-item">
                      <img src="https://image.api.playstation.com/vulcan/img/cfn/11307bEskTfSij9cY91PAbL4Asz425G35YGllLqiSPUd_T9kLPLphROTklNtob4UUQntuct-mfXYD75s0WORnivvopUm8mIv.png" className="img-fluid w-100 rounded-top" alt="Overcooked 2" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4 flex-grow-1">
                      <a href="#" className="d-block h4">Overcooked 2</a>
                      <span className="text-primary fs-5">$13.000</span>
                    </div>
                    <div className="text-center p-4 pt-0">
                      <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="overcooked2" data-name="Overcooked 2" data-price={13000} data-image="https://image.api.playstation.com/vulcan/img/cfn/11307bEskTfSij9cY91PAbL4Asz425G35YGllLqiSPUd_T9kLPLphROTklNtob4UUQntuct-mfXYD75s0WORnivvopUm8mIv.png">
                        <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Producto: Hollow Knight */}
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="product-item rounded wow fadeInUp w-100" data-wow-delay="0.7s">
                  <div className="product-item-inner border rounded d-flex flex-column h-100">
                    <div className="product-item-inner-item">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png" className="img-fluid w-100 rounded-top" alt="Hollow Knight" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4 flex-grow-1">
                      <a href="#" className="d-block h4">Hollow Knight</a>
                      <span className="text-primary fs-5">$8.000</span>
                    </div>
                    <div className="text-center p-4 pt-0">
                      <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="hollowknight" data-name="Hollow Knight" data-price={8000} data-image="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png">
                        <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Producto: Left 4 Dead 2 */}
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="product-item rounded wow fadeInUp w-100" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded d-flex flex-column h-100">
                    <div className="product-item-inner-item">
                      <img src="https://m.media-amazon.com/images/I/91cFzvxFGyS.jpg" className="img-fluid w-100 rounded-top" alt="Left 4 Dead 2" />
                      <div className="product-sale">Oferta</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
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
              {/* Producto: Stray */}
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="product-item rounded wow fadeInUp w-100" data-wow-delay="0.3s">
                  <div className="product-item-inner border rounded d-flex flex-column h-100">
                    <div className="product-item-inner-item">
                      <img src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png" className="img-fluid w-100 rounded-top" alt="Stray" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4 flex-grow-1">
                      <a href="#" className="d-block h4">Stray</a>
                      <span className="text-primary fs-5">$14.000</span>
                    </div>
                    <div className="text-center p-4 pt-0">
                      <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="stray" data-name="Stray" data-price={14000} data-image="https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png">
                        <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Producto: Hades */}
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="product-item rounded wow fadeInUp w-100" data-wow-delay="0.5s">
                  <div className="product-item-inner border rounded d-flex flex-column h-100">
                    <div className="product-item-inner-item">
                      <img src="https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a0/Hades_Pack_Art.png/" className="img-fluid w-100 rounded-top" alt="Hades" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4 flex-grow-1">
                      <a href="#" className="d-block h4">Hades</a>
                      <span className="text-primary fs-5">$12.000</span>
                    </div>
                    <div className="text-center p-4 pt-0">
                      <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="hades" data-name="Hades" data-price={12000} data-image="https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a0/Hades_Pack_Art.png/">
                        <i className="fas fa-shopping-cart me-2" /> Añadir al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Producto: Red Dead Redemption 2 */}
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="product-item rounded wow fadeInUp w-100" data-wow-delay="0.7s">
                  <div className="product-item-inner border rounded d-flex flex-column h-100">
                    <div className="product-item-inner-item">
                      <img src="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png" className="img-fluid w-100 rounded-top" alt="RDR2" />
                      <div className="product-sale">Oferta</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4 flex-grow-1">
                      <a href="#" className="d-block h4">Red Dead Redemption 2</a>
                      <del className="me-2 fs-5">$50.000</del>
                      <span className="text-primary fs-5">$13.000</span>
                    </div>
                    <div className="text-center p-4 pt-0">
                      <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-2 add-to-cart-btn" data-id="rdr2-offer" data-name="Red Dead Redemption 2" data-price={13000} data-image="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png">
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
  </div>
  {/* Our Products End */}
  {/* Product Banner Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <a href="#">
          </a><div className="bg-primary rounded position-relative"><a href="#">
              <img src="https://www.infobae.com/new-resizer/uUdPENPhcySk3rOZCo3gIoPSU5s=/arc-anglerfish-arc2-prod-infobae/public/EXPB4AGS2ZA7VKTZKFMVELDHQU.jpg" className="img-fluid w-100 rounded" alt />
            </a><div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{background: 'rgba(255, 255, 255, 0.5)'}}><a href="#">
                <h3 className="display-5 text-primary">Minecraft Java &amp; Bedrock</h3>
                <p className="fs-4 text-muted">$20.000</p>
              </a><a href="shop.html" className="btn btn-primary rounded-pill align-self-start py-2 px-4">Comprar ahora</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
          <a href="#">
          </a><div className="text-center bg-primary rounded position-relative"><a href="#">
              <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/550/header.jpg?t=1745368562" className="img-fluid w-100" alt />
            </a><div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{background: 'rgba(242, 139, 0, 0.5)'}}><a href="#">
                <h2 className="display-2 text-secondary">OFERTA</h2>
                <h4 className="display-5 text-white mb-4">Consigue hasta un 50%</h4>
              </a><a href="shop.html" className="btn btn-secondary rounded-pill align-self-center py-2 px-4">Compra ahora</a>
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

export default Home
