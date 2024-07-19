import React from "react";
import "../Styles/sall.css";

const Aboutus = () => {
  return (
    <section id="about">
      <section className="space-top">
        <div className="root">
          <div className="container fixed-width">
            <div className="row">
              <div className="col-md-5 py-6 ps-lg-15">
                <div className="ms-md-12 ps-md-3">
                  <div>
                    <div className="title-deco">
                      <h3>About us</h3>
                    </div>
                  </div>
                  <div
                    className="wow zoomInShort"
                    data-wow-offset={10}
                    data-wow-delay="0.1s"
                    data-wow-duration="0.3s"
                  >
                    <div className="puzzle show-lg-up">
                      <div className="piece-small-top">
                        <span />
                      </div>
                      <div className="piece-small-bottom">
                        <span />
                      </div>
                    </div>
                  </div>
                  <div
                    className="wow zoomInShort"
                    data-wow-offset={10}
                    data-wow-delay="0.3s"
                    data-wow-duration="0.5s"
                  >
                    <div className="deco">
                      <div className="big" />
                      <div className="medium" />
                      <div className="small" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 px-sm-6 px-0">
                <div>
                  <h4 className="title-default use-text-subtitle">
                    Through our large capacity we dare to say we are different.
                  </h4>
                  <div className="counter-wrap">
                    <div className="container fixed-width">
                      <div className="row justify-content-center align-items-center">
                        <div className="col">
                          <div className="counter-item-home">
                            <div className="text">
                              <h3 className="use-text-title">+200</h3>
                              <p className="use-text-subtitle2">employee</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="counter-item-home">
                            <div className="text">
                              <h3 className="use-text-title">+500</h3>
                              <p className="use-text-subtitle2">projects</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="counter-item-home">
                            <div className="text">
                              <h3 className="use-text-title">+300</h3>
                              <p className="use-text-subtitle2">clients</p>
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
        </div>
      </section>
    </section>
  );
};

export default Aboutus;
