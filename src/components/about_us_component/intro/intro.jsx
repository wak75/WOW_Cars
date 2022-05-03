import React from "react"
import "./intro_style.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Welcome to </h2>
          <h1 className="i-name">WOW Cars</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Sports</div>
              <div className="i-title-item">Micro</div>
              <div className="i-title-item">Sedan</div>
              <div className="i-title-item">SUV</div>
              <div className="i-title-item">Luxury</div>
            </div>
          </div>
          <p className="i-desc">
          Getting self-driven cars for rent in India has never been simpler, and you can begin by picking from the wide range of self-drive cars on the Wow Car website or app. Each of these cars comes with vehicle insurance and all India permits and is a safe bet for young women who love driving. Maybe this weekend, you can get a car on rent in India plan that much needed getaway from Delhi to Agra.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
      </div>
    </div>
  );
};

export default Intro;
