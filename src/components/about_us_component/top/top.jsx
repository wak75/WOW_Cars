import React from "react"
import "./top_style.css";

const Top = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Us</h1>
        <p className="a-sub">
        No more worries about petrol mileage, insurance, and car breakdowns! Wow Car has enabled driving convenience for travellers around the country and is fast expanding its reach to cities including Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR, Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai, Mysore, Pune, Siliguri and Vizag. 
        </p>
        <p className="a-desc">
        Self-drive cars from Wow Car have given customers more control, privacy, and freedom. Book a self-drive car in any city you visit with the Wow Car on your phone and feel at home wherever you go. 
        </p>
        <div className="a-award">
          <img
            src="https://images.unsplash.com/photo-1627667148896-13c6065dc44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
            className="a-award-img"
          />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Globally recognised Car Rental Brand 2022
            </h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
