import React from "react"
import "./section_style.css";

const Section = () => {
  return (
    <div className="sec">
      <div className="sec-right">
        <h1>Wow Cars</h1>
        <p>
        &#10004; great experience
        </p>
        <p>&#10004; Affordable price</p>
        <p>&#10004; Refer and Earn</p>
        <p>&#10004; 24/7 customer help service</p>
      </div>
      <div className="sec-left">
        <h1> Other Companies</h1>
        <p>&#10540; High booking charge</p>
        <p>&#10540; Less duration</p>
        <p>&#10540; No extra values</p>
      </div>
    </div>
  );
};

export default Section;
