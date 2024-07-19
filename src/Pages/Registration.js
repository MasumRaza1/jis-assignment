import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import Logo from "../Assets/logo-agency.png";
import Register from "../Assets/register.png";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const Registration = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div class="m-application theme--light transition-page" id="app">
    <div class="m-content ocean-blue-var" id="main-wrap">

    <div id="register-page">
  <div className="main-wrap">
    {/* #### HEADER ####*/}
    <header className="app-bar header" id="header">
      <div className="container">
        <div className="header-content">
          <nav className="nav-menu flex-grow-1">
            <div className="logo flex-grow-1 start-mobile">
            <Link to="/">
                <span className="logo-main landscape medium">
                <img src={Logo} alt="logo" />
                  JIS Agency
                </span>
              </Link>
            </div>
            <nav className="user-menu">
              
            <button
            className="btn primary waves-effect"
            type="button"
            onClick={handleLoginClick}
          >
           Login
          </button>

            </nav>
          </nav>
        </div>
      </div>
    </header>
  </div>
  {/* #### END HEADER ####*/}
  {/* ##### FORM #####*/}
  <div className="container-general container-front">
    <div className="form-style">
      <div className="page-wrap">
        <div className="container inner-wrap">
          <div className="auth-frame">
            <div className="row mb-0">
              <div className="col-md-6 px-lg-6 px-2">
                <div className="card form-box fragment-fadeUp">
                  <div className="form-wrap">
                    <div className="form-style">
                      <div className="head">
                        <h4
                          className="use-text-title mq-md-up use-text-primary"
                          data-class="use-text-subtitle"
                        >
                          Create new account
                        </h4>
                      </div>
                      <div className="socmed-side-login">
                        <button className="btn navi-btn waves-effect">
                          <i className="ion-social-facebook left" />
                          Facebook
                        </button>
                        <button className="btn blue-btn waves-effect">
                          <i className="ion-social-twitter left" />
                          Twitter
                        </button>
                        <button className="btn red-btn waves-effect">
                          <i className="ion-social-google left" />
                          Google
                        </button>
                      </div>
                      <div className="separator">
                        <p>Or register with email</p>
                      </div>
                      <form id="register_form">
                        <div className="row spacing3 mb-0">
                          <div className="col-sm-12">
                            <div className="input-field">
                              <input
                                className="validate"
                                id="name"
                                type="text"
                                name="name"
                                required=""
                              />
                              <label htmlFor="name">Name? *</label>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="input-field">
                              <input
                                className="validate"
                                id="email"
                                type="email"
                                name="email"
                                required=""
                              />
                              <label htmlFor="email">Email? *</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div
                              className="input-field mq-md-up"
                              data-class="me-2"
                            >
                              <input
                                className="validate"
                                id="password"
                                type="password"
                                name="password"
                                required=""
                              />
                              <label htmlFor="password">Password</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div
                              className="input-field mq-md-up"
                              data-class="ms-2"
                            >
                              <input
                                className="validate"
                                id="confirm"
                                type="password"
                                name="confirm"
                                data-validation="confirmation"
                                data-validation-confirm="password"
                                required=""
                              />
                              <label htmlFor="confirm">Confirm Password</label>
                            </div>
                          </div>
                        </div>
                        <div className="btn-area">
                          <div className="form-helper">
                            <div className="form-control-label">
                              <label>
                                <input
                                  className="filled-in secondary"
                                  type="checkbox"
                                  required=""
                                />
                                <span>
                                  I have read and accept the Terms of
                                  <a className="link" href="#">
                                    Service &amp; Privacy Policy *
                                  </a>
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="mt-4">
                            <button
                              className="btn primary btn-large waves-effect"
                              type="submit"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hidden-sm-down">
                  <div className="greeting">
                    <h4 className="use-text-title2 use-text-primary pb-2">
                      Just register to join with us
                    </h4>
                    <h6 className="use-text-subtitle2">
                      A platform with efficient integration of many features and
                      so much more
                    </h6>
                    <div className="img">
                      <div className="deco">
                        <div className="big" />
                        <div className="small" />
                      </div>
                      <img
                        className="" 
                        style={{ height: '200px', width: '300px' }} 
                        src={Register}
                        alt="registes"
                      />
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
</div>
</div>
  )
}

export default Registration