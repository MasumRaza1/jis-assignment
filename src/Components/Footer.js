import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import "../Styles/sall.css";
import Logo from "../Assets/logo-agency.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-main">
        <div
          className="footer-component active"
          id="footer-sitemap footer-main"
        >
          <footer className="footer-sitemap">
            <div className="footer-deco">
              <div className="left-deco">
                <div className="big" />
                <div className="small" />
              </div>
              <div className="right-deco">
                <div className="big" />
                <div className="small" />
              </div>
            </div>
            <div className="container mq-sm-down" data-class="fixed-width">
              <div className="row">
                <div className="col-md-3 pa-lg-4 logo-area">
                  <div className="logo">
                    <span className="logo-main landscape medium">
                      <img src={Logo} alt="logo" />
                      JIS-Agency
                    </span>
                  </div>
                  <p className="body-2">
                    We work with international startups, help entrepreneurs
                    launch for the long term.
                  </p>
                  <p className="body-2 hidden-sm-down">© JIS Agency 2024</p>
                </div>
                <div className="col-md-6 pa-4">
                  <ul className="show-sm-down collapsible">
                    <li className="accordion-content">
                      <div className="collapsible-header">
                        <h6 className="title">Company</h6>
                        <i className="material-icons right arrow">
                          expand_more
                        </i>
                      </div>
                      <div className="collapsible-body">
                        <ul>
                          <li>
                            <a href="#team">Team</a>
                          </li>
                          <li>
                            <a href="#history">History</a>
                          </li>
                          <li>
                            <a href="#contact-us">Contact us</a>
                          </li>
                          <li>
                            <a href="#locations">Locations</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="accordion-content">
                      <div className="collapsible-header">
                        <h6 className="title">Resources</h6>
                        <i className="material-icons right arrow">
                          expand_more
                        </i>
                      </div>
                      <div className="collapsible-body">
                        <ul>
                          <li>
                            <a href="#resource">Resource</a>
                          </li>
                          <li>
                            <a href="#resource-name">Resource name</a>
                          </li>
                          <li>
                            <a href="#another-resource">Another resource</a>
                          </li>
                          <li>
                            <a href="#final-resource">Final resource</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="accordion-content">
                      <div className="collapsible-header">
                        <h6 className="title">Legal</h6>
                        <i className="material-icons right arrow">
                          expand_more
                        </i>
                      </div>
                      <div className="collapsible-body">
                        <ul>
                          <li>
                            <a href="#privacy-policy">Privacy policy</a>
                          </li>
                          <li>
                            <a href="#terms-of-use">Terms of use</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <div className="row show-md-up justify-content-around">
                    <div className="col pa-4 site-map-item">
                      <h6 className="title mb-4">Company</h6>
                      <ul>
                        <li>
                          <a href="#team">Team</a>
                        </li>
                        <li>
                          <a href="#history">History</a>
                        </li>
                        <li>
                          <a href="#contact-us">Contact us</a>
                        </li>
                        <li>
                          <a href="#locations">Locations</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col pa-4 site-map-item">
                      <h6 className="title mb-4">Resources</h6>
                      <ul>
                        <li>
                          <a href="#resource">Resource</a>
                        </li>
                        <li>
                          <a href="#resource-name">Resource name</a>
                        </li>
                        <li>
                          <a href="#another-resource">Another resource</a>
                        </li>
                        <li>
                          <a href="#final-resource">Final resource</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col pa-4 site-map-item">
                      <h6 className="title mb-4">Legal</h6>
                      <ul>
                        <li>
                          <a href="#privacy-policy">Privacy policy</a>
                        </li>
                        <li>
                          <a href="#terms-of-use">Terms of use</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 pa-4">
                  <div className="socmed">
                    <a href="#" className="btn btn-icon waves-effect">
                      <FaFacebook className="icon" />
                    </a>
                    <a href="#" className="btn btn-icon waves-effect">
                      <FaTwitter className="icon" />
                    </a>
                    <a href="#" className="btn btn-icon waves-effect">
                      <FaInstagram className="icon" />
                    </a>
                    <a href="#" className="btn btn-icon waves-effect">
                      <FaLinkedin className="icon" />
                    </a>
                  </div>
                  <div className="select-lang select-outlined">
                    <select className="select" id="lang_select">
                      <option value="ar">󠁥󠁮󠁧󠁿العربيّة</option>
                      <option value="de">Deutsch</option>
                      <option value="en" selected="selected">
                        English
                      </option>
                      <option value="id">󠁥󠁮󠁧󠁿Bahasa Indonesia</option>
                      <option value="pt">󠁥󠁮󠁧󠁿Português</option>
                      <option value="zh">简体中文</option>
                    </select>
                  </div>
                  <p className="body-2 mt-5 text-center hidden-md-up">
                    © JIS Agency 2024
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
