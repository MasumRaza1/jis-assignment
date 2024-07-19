import React from "react";
import "../Styles/sall.css";
import agency from "../Assets/Testimonials/agency.png";
import profile1 from "../Assets/Testimonials/profile1.jpg";
import profile2 from "../Assets/Testimonials/profile2.jpg";
import profile3 from "../Assets/Testimonials/profile3.jpg";
import profile4 from "../Assets/Testimonials/profile4.jpg";

const Testimonials = () => {
  return (
    <>
      <section className="space-top-short" id="testimonials">
        <div className="root">
          <div className="container carousel-header">
            <h4 className="title-primary">client testimonials</h4>
          </div>
          <div className="carousel">
            <div
              className="slick-carousel"
              id="testimonial_carousel"
              data-length={9}
            >
              <div className="item">
                <div className="testi-card">
                  <div className="card paper">
                    <p>
                      Sed imperdiet enim ligula, vitae viverra justo porta vel.
                    </p>
                    <div className="rating">
                      <i className="material-icons star-icon" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={2}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={3}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={4}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={5}>
                        star
                      </i>
                    </div>
                  </div>
                  <div className="person">
                    <div className="avatar-img avatar">
                      <img src={profile1} alt="name" />
                    </div>
                    <div className="name">
                      <h6>John Doe</h6>
                      <span className="caption">Chief Digital Officer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-card">
                  <div className="card paper">
                    <p>
                      Cras convallis lacus orci, tristique tincidunt magna
                      consequat in. In vel pulvinar est, at euismod libero.
                    </p>
                    <div className="rating">
                      <i className="material-icons star-icon" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={2}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={3}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={4}>
                        star
                      </i>
                      <i className="material-icons star-icon-disable" title={1}>
                        star
                      </i>
                    </div>
                  </div>
                  <div className="person">
                    <div className="avatar-img avatar">
                      <img src={profile2} alt="name" />
                    </div>
                    <div className="name">
                      <h6>Jean Doe</h6>
                      <span className="caption">Chief Digital Officer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-card">
                  <div className="card paper">
                    <p>
                      Cras convallis lacus orci, tristique tincidunt magna
                      consequat in. In vel pulvinar est, at euismod libero.
                    </p>
                    <div className="rating">
                      <i className="material-icons star-icon" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={2}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={3}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={4}>
                        star
                      </i>
                      <i className="material-icons star-icon-disable" title={1}>
                        star
                      </i>
                    </div>
                  </div>
                  <div className="person">
                    <div className="avatar-img avatar">
                      <img src={profile3} alt="name" />
                    </div>
                    <div className="name">
                      <h6>Jena Doe</h6>
                      <span className="caption">Graphic Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-card">
                  <div className="card paper">
                    <p>
                      Sed imperdiet enim ligula, vitae viverra justo porta vel.
                    </p>
                    <div className="rating">
                      <i className="material-icons star-icon" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={2}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={3}>
                        star
                      </i>
                      <i className="material-icons star-icon-disable" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon-disable" title={2}>
                        star
                      </i>
                    </div>
                  </div>
                  <div className="person">
                    <div className="avatar-img avatar">
                      <img src={profile4} alt="name" />
                    </div>
                    <div className="name">
                      <h6>Jovelin Doe</h6>
                      <span className="caption">Senior Graphic Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-card">
                  <div className="card paper">
                    <p>
                      Cras convallis lacus orci, tristique tincidunt magna
                      consequat in. In vel pulvinar est, at euismod libero.
                    </p>
                    <div className="rating">
                      <i className="material-icons star-icon" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={2}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={3}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={4}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={5}>
                        star
                      </i>
                    </div>
                  </div>
                  <div className="person">
                    <div className="avatar-img avatar">
                      <img src={profile1} alt="name" />
                    </div>
                    <div className="name">
                      <h6>Jihan Doe</h6>
                      <span className="caption">CEO Software House</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-card">
                  <div className="card paper">
                    <p>
                      Cras convallis lacus orci, tristique tincidunt magna
                      consequat in. In vel pulvinar est, at euismod libero.
                    </p>
                    <div className="rating">
                      <i className="material-icons star-icon" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={2}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={3}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={4}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={5}>
                        star
                      </i>
                    </div>
                  </div>
                  <div className="person">
                    <div className="avatar-img avatar">
                      <img src={profile2} alt="name" />
                    </div>
                    <div className="name">
                      <h6>Jovelin Doe</h6>
                      <span className="caption">Senior Graphic Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-card">
                  <div className="card paper">
                    <p>
                      Cras convallis lacus orci, tristique tincidunt magna
                      consequat in. In vel pulvinar est, at euismod libero.
                    </p>
                    <div className="rating">
                      <i className="material-icons star-icon" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={2}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={3}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={4}>
                        star
                      </i>
                      <i className="material-icons star-icon-disable" title={1}>
                        star
                      </i>
                    </div>
                  </div>
                  <div className="person">
                    <div className="avatar-img avatar">
                      <img src={profile3} alt="name" />
                    </div>
                    <div className="name">
                      <h6>John Doe</h6>
                      <span className="caption">Senior Graphic Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-card">
                  <div className="card paper">
                    <p>
                      Sed imperdiet enim ligula, vitae viverra justo porta vel.
                    </p>
                    <div className="rating">
                      <i className="material-icons star-icon" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={2}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={3}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={4}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={5}>
                        star
                      </i>
                    </div>
                  </div>
                  <div className="person">
                    <div className="avatar-img avatar">
                      <img src={profile4} alt="name" />
                    </div>
                    <div className="name">
                      <h6>John Doe</h6>
                      <span className="caption">Chief Digital Officer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-card">
                  <div className="card paper">
                    <p>
                      Cras convallis lacus orci, tristique tincidunt magna
                      consequat in. In vel pulvinar est, at euismod libero.
                    </p>
                    <div className="rating">
                      <i className="material-icons star-icon" title={1}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={2}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={3}>
                        star
                      </i>
                      <i className="material-icons star-icon" title={4}>
                        star
                      </i>
                      <i className="material-icons star-icon-disable" title={1}>
                        star
                      </i>
                    </div>
                  </div>
                  <div className="person">
                    <div className="avatar-img avatar">
                      <img src={profile1} alt="name" />
                    </div>
                    <div className="name">
                      <h6>Jean Doe</h6>
                      <span className="caption">Chief Digital Officer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item show-lg-up">
                <div className="item-props-last" />
              </div>
            </div>
          </div>
          <div className="floating-artwork">
            <div className="container fixed-width">
              <div className="artwork">
                <div className="slider-art">
                  <div className="deco">
                    <div className="figure show-lg-up" id="art_testimonials">
                      <div
                        className="wow fadeInLeftShort"
                        data-wow-ffset={-60}
                        data-wow-delay="0.3s"
                        data-wow-duration="0.5s"
                      >
                        <img className="img-2d3d" src={agency} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
