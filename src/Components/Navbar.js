import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../Assets/logo.svg";
import "../Styles/sall.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();
  const handleRegistrationClick = () => {
    navigate("/registration");
  };

  const navigatee = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img src={logo} alt="JIS Agency Logo" />
        </Link>
      </h1>

      <ul className="navbar-items">
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>

        <li>
          <a href="#expertise" className="navbar-links">
            Our Expertise
          </a>
        </li>
        <li>
          <a href="#case-studies" className="navbar-links">
            Case Studies
          </a>
        </li>
        <li>
          <a href="#" className="navbar-links">
            Inner Page ▽
          </a>
        </li>
      </ul>

      <button
        className="btn"
        type="button"
        style={{
          backgroundColor: "#fff",
          color: "#6d7b85",
          fontWeight: "500",
          marginRight: "-90px",
          boxShadow: "none",
        }}
        onClick={handleLoginClick}
      >
        LOGIN
      </button>

      <button
        className="btn primary waves-effect"
        type="button"
        style={{
          backgroundColor: "#2196f3",
          color: "#fff",
          fontWeight: "bolder",
        }}
        onClick={handleRegistrationClick}
      >
        register
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#volunteers">
              Volunteers
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <button
          className="navbar-btn mobile-navbar-btn" // Add a specific class for mobile button
          type="button"
          disabled={isButtonDisabled}
          onClick={handleChatBtnClick}
        >
          <FontAwesomeIcon icon={faHeart} /> Donate
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
