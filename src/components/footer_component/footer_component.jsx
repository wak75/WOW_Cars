import React from "react"
import "./footer_style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-section">
        <div className="f-section1">
          <h3>WOW Cars</h3>
          <p>
            <b>Address- </b>123, Park Street Road, Norway
          </p>
        </div>

        <div className="f-section2">
          <h3>Our Sponsers</h3>
          <img className="f-img" src="https://www.carlogos.org/logo/Volkswagen-logo-2015-1920x1080.png" alt="logo" />
          <img className="f-img" src="https://www.carlogos.org/logo/Lamborghini-logo-1920x1080.png" alt="logo" />
          <img className="f-img" src="https://pngimg.com/uploads/nissan/nissan_PNG64.png"  alt="logo"/>
          <img className="f-img" src="https://logos-world.net/wp-content/uploads/2021/03/Aston-Martin-Logo.png" alt="logo" />
          
        </div>

        <div className="f-section3">
          <h3>Contact Us</h3>
          <p>+123 456 7890</p>
          <p>info@wowcars.com</p>
        </div>
      </div>

      <div className="f-last">
        <ul class="policy">
          <li>Policy &nbsp;</li>
          <li>
            <span>|</span> &nbsp; Terms of Use &nbsp;
          </li>
          <li>
            <span>| </span> &nbsp; Submit your ideas &nbsp;
          </li>
          <li>
            <span>|</span> &nbsp; Cookie Preference &nbsp;
          </li>
        </ul>

        <div class="rights">
          <span> &copy; 2022 Wow Cars. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
