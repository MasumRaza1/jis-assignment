import React from "react";
import "../Styles/sall.css";
import servicesImg from '../Assets/login.png';
import services1 from '../Assets/servicesImg/servies1.jpeg';
import services2 from '../Assets/servicesImg/servies2.jpeg';
import services3 from '../Assets/servicesImg/servies3.jpeg';
const Services = () => {
  return (
    <>
      {/* PWA primary color*/}
      <meta name="theme-color" content="#2196f3" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="../../../code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      />

      <div className="m-application theme--light transition-page" id="app">
        <div className="m-content ocean-blue ocean-blue-var" id="main-wrap">
          <div id="home">
            <div className="main-wrap">
              <main className="container-wrap">
                <section id="banner"></section>

                <section className="" id=""></section>

                {/* ##### SERVICES #####*/}
                <section className="space-top space-top-short-md" id="services">
                  <div className="root">
                    <div className="container carousel-header">
                      <h4 className="title-primary">Our Services</h4>
                      <p className="btn-flat primary-text waves-effect view-all">
                        see all
                        <i className="material-icons icon">arrow_forward</i>
                      </p>
                    </div>
                    <div className="carousel-handle">
                      <div className="carousel-wrap">
                        <div className="carousel">
                          <div id="services_carousel" data-length={6}>
                            <div className="item">
                              <div className="card product-card portrait over">
                                <a
                                  className="waves-effect hidden-link"
                                  href="#"
                                >
                                  &nbsp;
                                </a>
                                <div className="figure">
                                  <div
                                    className="responsive-img"
                                    style={{

                                      backgroundImage: `url(${services1})`,
                                    }}
                                  />
                                </div>
                                <div className="desc">
                                  <div className="text">
                                    <h6 className="title pb-2 text-truncate">
                                      Lorem Ipsum
                                    </h6>
                                    <p className="use-text-paragraph">
                                      Proin ac arcu nisl. Duis eu molestie
                                      lectus. Nam quis mauris faucibus, aliquet
                                      elit eu, rhoncus ipsum.
                                    </p>
                                  </div>
                                  <div>
                                    <div className="property" />
                                    <a
                                      className="btn btn-outlined primary button block"
                                      href="#"
                                    >
                                      see detail
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="card product-card portrait over">
                                <a
                                  className="waves-effect hidden-link"
                                  href="#"
                                >
                                  &nbsp;
                                </a>
                                <div className="figure">
                                  <div
                                    className="responsive-img"
                                    style={{
                                      backgroundImage: `url(${services2})`,
                                    }}
                                  />
                                </div>
                                <div className="desc">
                                  <div className="text">
                                    <h6 className="title pb-2 text-truncate">
                                      Etiam rhoncus
                                    </h6>
                                    <p className="use-text-paragraph">
                                      Proin quis pellentesque dui. Ut sed leo
                                      neque. Nullam aliquet iaculis neque a
                                      commodo.
                                    </p>
                                  </div>
                                  <div>
                                    <div className="property" />
                                    <a
                                      className="btn btn-outlined primary button block"
                                      href="#"
                                    >
                                      see detail
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="card product-card portrait over">
                                <a
                                  className="waves-effect hidden-link"
                                  href="#"
                                >
                                  &nbsp;
                                </a>
                                <div className="figure">
                                  <div
                                    className="responsive-img"
                                    style={{
                                      backgroundImage: `url(${services3})`,
                                    }}
                                  />
                                </div>
                                <div className="desc">
                                  <div className="text">
                                    <h6 className="title pb-2 text-truncate">
                                      Duis fermentum
                                    </h6>
                                    <p className="use-text-paragraph">
                                      Quisque consectetur lectus vel orci
                                      porttitor gravida ac eu erat. Nullam
                                      accumsan nibh tortor.
                                    </p>
                                  </div>
                                  <div>
                                    <div className="property" />
                                    <a
                                      className="btn btn-outlined primary button block"
                                      href="#"
                                    >
                                      see detail
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="card product-card portrait over">
                                <a
                                  className="waves-effect hidden-link"
                                  href="#"
                                >
                                  &nbsp;
                                </a>
                                <div className="figure">
                                  <div
                                    className="responsive-img"
                                    style={{
                                      backgroundImage: `url(${services1})`,
                                    }}
                                  />
                                </div>
                                <div className="desc">
                                  <div className="text">
                                    <h6 className="title pb-2 text-truncate">
                                      Lorem Ipsum
                                    </h6>
                                    <p className="use-text-paragraph">
                                      Proin ac arcu nisl. Duis eu molestie
                                      lectus. Nam quis mauris faucibus, aliquet
                                      elit eu, rhoncus ipsum.
                                    </p>
                                  </div>
                                  <div>
                                    <div className="property" />
                                    <a
                                      className="btn btn-outlined primary button block"
                                      href="#"
                                    >
                                      see detail
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="card product-card portrait over">
                                <a
                                  className="waves-effect hidden-link"
                                  href="#"
                                >
                                  &nbsp;
                                </a>
                                <div className="figure">
                                  <div
                                    className="responsive-img"
                                    style={{
                                      backgroundImage: `url(${services2})`,
                                    }}
                                  />
                                </div>
                                <div className="desc">
                                  <div className="text">
                                    <h6 className="title pb-2 text-truncate">
                                      Etiam rhoncus
                                    </h6>
                                    <p className="use-text-paragraph">
                                      Proin quis pellentesque dui. Ut sed leo
                                      neque. Nullam aliquet iaculis neque a
                                      commodo.
                                    </p>
                                  </div>
                                  <div>
                                    <div className="property" />
                                    <a
                                      className="btn btn-outlined primary button block"
                                      href="#"
                                    >
                                      see detail
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="card product-card portrait over">
                                <a
                                  className="waves-effect hidden-link"
                                  href="#"
                                >
                                  &nbsp;
                                </a>
                                <div className="figure">
                                  <div
                                    className="responsive-img"
                                    style={{
                                      backgroundImage: `url(${services3})`,
                                    }}
                                  />
                                </div>
                                <div className="desc">
                                  <div className="text">
                                    <h6 className="title pb-2 text-truncate">
                                      Duis fermentum
                                    </h6>
                                    <p className="use-text-paragraph">
                                      Quisque consectetur lectus vel orci
                                      porttitor gravida ac eu erat. Nullam
                                      accumsan nibh tortor.
                                    </p>
                                  </div>
                                  <div>
                                    <div className="property" />
                                    <a
                                      className="btn btn-outlined primary button block"
                                      href="#"
                                    >
                                      see detail
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item show-lg-up">
                              <div className="carousel-prop">
                                <div />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="floating-artwork">
                      <div className="container fixed-width">
                        <div className="artwork">
                          <div className="slider-art">
                            <div className="deco">
                              <div
                                className="figure show-lg-up"
                                id="art_services"
                              >
                                <div
                                  className="wow fadeInLeftShort"
                                  data-wow-offset={-60}
                                  data-wow-delay="0.3s"
                                  data-wow-duration="0.5s"
                                >
                                  <div>
                                    <img
                                      className="img-2d3d"
                                      src={servicesImg}
                                      style={{ top:'150px'  }}
                                      alt="services 3d"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <nav className="arrow">
                            <button
                              className="btn-floating margin"
                              id="next_services"
                            >
                              <i className="material-icons">arrow_back</i>
                            </button>
                            <button
                              className="btn-floating margin"
                              id="prev_services"
                            >
                              <i className="material-icons">arrow_forward</i>
                            </button>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* ##### END SERVICES #####*/}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
