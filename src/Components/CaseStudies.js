import React from "react";
import "../Styles/sall.css";
import case1 from '../Assets/caseStudy/case1.jpg';
import case2 from '../Assets/caseStudy/case2.jpg';
import case3 from '../Assets/caseStudy/case3.jpg';
import case4 from '../Assets/caseStudy/case4.jpg';
import case5 from '../Assets/caseStudy/case5.jpg';

import cloud from '../Assets/Company-logos/cloud.png';
import architect from '../Assets/Company-logos/architect.png';
import coin from '../Assets/Company-logos/coin.png';
import profile from '../Assets/Company-logos/profile.png';
import saas from '../Assets/Company-logos/saas.png';

const CaseStudies = () => {
  return (
    <>
      <section id="case-studies">
        <div className="root">
          <div className="container fixed-width-md-up">
            <div className="row spacing6">
              <div className="col-md-3 px-10 pt-10 pb-md-10">
                <div
                  className="wow fadeInLeftShort"
                  data-offset={-100}
                  data-delay="0.2s"
                  data-duration="0.3s"
                >
                  <div className="side-filter">
                    <h4 className="title-primary">Case studies</h4>
                    <ul className="collection nav" id="case_categories">
                      <li className="collection-item filter">
                        <a className="waves-effect">corporate</a>
                      </li>
                      <li className="collection-item filter active">
                        <a className="waves-effect">advertising</a>
                      </li>
                      <li className="collection-item filter">
                        <a className="waves-effect">marketing</a>
                      </li>
                      <li className="collection-item filter">
                        <a className="waves-effect">government</a>
                      </li>
                      <li className="collection-item filter">
                        <a className="waves-effect">creative</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-9 pa-sm-6">
                <div className="massonry">
                  <div className="row" id="case_gallery">
                    <div className="col-sm-6 pa-3">
                      <div
                        className="wow fadeInUpShort"
                        data-wow-delay="0.6s"
                        data-wow-duration="0.4s"
                      >
                        <div className="item">
                          <a
                            className="waves-effect case-card big"
                            href={case1}
                          >
                            <span className="figure">
                              <img
                                src={case1}
                                alt="img"
                              />
                            </span>
                            <span className="property">
                              <span className="title">
                                <span className="logo">
                                  <img
                                    src={cloud}
                                    alt="logo"
                                  />
                                </span>
                                <span className="text">
                                  <span className="title">
                                    Donec commodo convallis ligula
                                  </span>
                                  <span className="desc">
                                    Vestibulum consequat hendrerit
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="item">
                          <a
                            className="waves-effect case-card big"
                            href={case2}
                          >
                            <span className="figure">
                              <img
                                src={case2}
                                alt="img"
                              />
                            </span>
                            <span className="property">
                              <span className="title">
                                <span className="logo">
                                  <img
                                    src={coin}
                                    alt="logo"
                                  />
                                </span>
                                <span className="text">
                                  <span className="title">
                                    Donec commodo convallis ligula
                                  </span>
                                  <span className="desc">
                                    Vestibulum consequat hendrerit
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-5 pa-3">
                      <div
                        className="wow fadeInUpShort"
                        data-wow-delay="0.4s"
                        data-wow-duration="0.4s"
                      >
                        <div className="item">
                          <a
                            className="waves-effect case-card medium"
                            href={case3}
                          >
                            <span className="figure">
                              <img
                                src={case3}
                                alt="img"
                              />
                            </span>
                            <span className="property">
                              <span className="title">
                                <span className="logo">
                                  <img
                                    src={architect}
                                    alt="logo"
                                  />
                                </span>
                                <span className="text">
                                  <span className="title">
                                    Donec commodo convallis ligula
                                  </span>
                                  <span className="desc">
                                    Vestibulum consequat hendrerit
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="item">
                          <a
                            className="waves-effect case-card medium"
                            href={case4}
                          >
                            <span className="figure">
                              <img
                                src={case4}
                                alt="img"
                              />
                            </span>
                            <span className="property">
                              <span className="title">
                                <span className="logo">
                                  <img
                                    src={profile}
                                    alt="logo"
                                  />
                                </span>
                                <span className="text">
                                  <span className="title">
                                    Donec commodo convallis ligula
                                  </span>
                                  <span className="desc">
                                    Vestibulum consequat hendrerit
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="item">
                          <a
                            className="waves-effect case-card medium"
                            href={case5}
                          >
                            <span className="figure">
                              <img
                                src={case5}
                                alt="img"
                              />
                            </span>
                            <span className="property">
                              <span className="title">
                                <span className="logo">
                                  <img
                                    src={saas}
                                    alt="logo"
                                  />
                                </span>
                                <span className="text">
                                  <span className="title">
                                    Donec commodo convallis ligula
                                  </span>
                                  <span className="desc">
                                    Vestibulum consequat hendrerit
                                  </span>
                                </span>
                              </span>
                            </span>
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
      </section>
    </>
  );
};

export default CaseStudies;
