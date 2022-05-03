import React from "react";
import "./membership_style.css"
import AddMember from "../membership_payment_component/membership_payment_component";

const Membership = ()=>{
    return(
        <div class="section10">
         <div class="container">
            <h2><b>Membership </b></h2>
            <div class="sec10-content">
               <div class="sec10-box">
                  <div class="sec10-upper">
                     <div class="circle">
                        <div class="inner-circle">
                           <h4><b>599</b> </h4>
                        </div>
                     </div>
                     <h3>Basic Plan</h3>
                  </div>
                  <div class="sec10-lower">
                     <ul>
                        <li>Duration:<b> 1 Month</b></li>
                        <li><b>50km Free on 1 Ride</b></li> 
                        <li>Car Type: <b>Micro,Sedan</b></li>
                        <li>Car Delivary time:
                            <b>
                               <p>24 Hours</p>
                            </b></li>
                        <li>With Additional Befinits</li>
                        <li><b>24x7 Customer Support</b></li>
                     </ul>
                     <button className="member"><AddMember price={599}/></button>
                  </div>
               </div>
               <div class="sec10-box">
                  <div class="sec10-upper">
                     <div class="circle1">
                        <div class="inner-circle1">
                           <h4><b>499</b></h4>
                        </div>
                     </div>
                     <h3>Premium Plan</h3>
                  </div>
                  <div class="sec10-lower">
                     <ul>
                        <li>Duration:<b> 3 Months</b></li>
                        <li><b>70km Free On 1 Ride</b></li>
                        <li>Car Type: <b>Sedan,Sportz</b></li>
                        <li>Car Delivary time:
                            <b>
                               <p>24 Hours</p>
                            </b></li>
                        <li>With Additional Befinits</li>
                        <li><b>24x7 Customer Support</b></li>
                     </ul>
                     <button className="member"><AddMember price={499}/></button>
                  </div>
               </div>
               <div class="sec10-box">
                  <div class="sec10-upper">
                     <div class="circle">
                        <div class="inner-circle">
                           <h4><b>399</b></h4>
                        </div>
                     </div>
                     <h3>Advanced Plan</h3>
                  </div>
                  <div class="sec10-lower">
                     <ul>
                        <li>Duration:<b> 6 Months</b></li>
                        <li><b>100km Free On 1 Ride</b></li>
                        <li>Car Type: <u><b><i>All Cars</i></b></u></li>
                        <li>Car Delivary time:
                            <b>
                               <p>24 Hours</p>
                            </b></li>
                        <li>With Additional Befinits</li>
                        <li><b>24x7 Customer Support</b></li>
                     </ul>
                     <button className="member"><AddMember price={399}/></button>
                  </div>
               </div>
               <div class="clear"></div>
            </div>
         </div>
      </div>
    )
}

export default Membership