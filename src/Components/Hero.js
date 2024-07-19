import React, { useEffect, useState } from "react";
import Banner from "../Assets/banner1.png";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const handleRegistrationClick = () => {
    navigate("/registration");
  };

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <h2 className="text-title">Create Business Solution</h2>
          <p className="text-descritpion">
            We work with international startups, helps entrepreneurs launch for
            the long term.
          </p>
          <button className="banner-btn1" type="button">
            SEE DETAIL
          </button>

          <button
            className="banner-btn"
            type="button"
            onClick={handleRegistrationClick}
          >
            GET STARTED
          </button>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
