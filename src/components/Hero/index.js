import React from "react";
import Rocket from "../../assets/rocket-gif.gif";
import Landing from "../../assets/landing_banner.png";
import Helmet from "react-helmet";
import "./style.css";

export default function Hero() {
  return (
    <div className="wrapper">
      <section className="landing-section">
        <div className="landing-banner">
          <img src={Landing} alt="Landing-Banner" />
          <div
            className="scroll"
            data-rateX="2"
            data-rateY="0"
            data-direction="horizontal"
          >
            <a href="contact.html">
              <img className="rocket" src={Rocket} alt="rocket-gif" />
            </a>
          </div>
        </div>
        <Helmet>
          <script src="./script.js" type="text/javascript"></script>
        </Helmet>
      </section>
    </div>
  );
}
