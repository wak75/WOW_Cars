import React from "react"
import "./banner_style.css";
import {Link} from "react-router-dom"

const Banner = () => {
  return (
    <div className="banner">
      <div className="b-bg">
          <img src="https://images.unsplash.com/photo-1604682714387-959af5626618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
      </div>
      <div className="b-text">
        <h2>Here we are</h2>
        <h1>Wow Cars</h1>
        
        <Link className="button" to ="/all">Book Now</Link>
        
      </div>
    </div>
  );
};

export default Banner;
