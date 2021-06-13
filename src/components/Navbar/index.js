import React from "react";
import "./style.css"
import Icon from "../../assets/dl_dev_icon.png"
import Create from "../../assets/we-create.png"
import Contact from "../../assets/contact-me.png"

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo-container">
          <div className="logo-link">
            <a href="#about-me">
              <img src={Icon} alt="dl.dev-logo" />
            </a>
          </div>
        </div>
        <div className="navbar-container">
          <div className="nav-container">
            <div className="nav-link">
              <a href="portfolio.html">
                <img src={Create} alt="portfolio-logo" />
              </a>
            </div>
          </div>
          <div className="contact-container">
            <div className="contact-link">
              <a href="contact.html">
                <img src={Contact} alt="contact-logo" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
