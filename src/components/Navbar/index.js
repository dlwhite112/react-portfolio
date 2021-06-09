import React from "react";
import "./style.css"
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo-container">
          <div className="logo-link">
            <a href="#about-me">
              <img src="../../../assets/dl_dev_icon.png" alt="dl.dev-logo" />
            </a>
          </div>
        </div>
        <div className="navbar-container">
          <div className="nav-container">
            <div className="nav-link">
              <a href="portfolio.html">
                <img src="../../../assets/we-create.png" alt="portfolio-logo" />
              </a>
            </div>
          </div>
          <div className="contact-container">
            <div className="contact-link">
              <a href="contact.html">
                <img src="../../../assets/contact-me.png" alt="contact-logo" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
