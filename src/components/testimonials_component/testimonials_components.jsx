import React from "react"
import "./testimonials_style.css"

const Testimonial = ()=>{
    return(
        <div class="section8">
         <div class="container">
            <h2>Our Customers Review</h2>
            <div class="box">
               <div class="boxes">
                  <img src="https://www.cheatsheet.com/wp-content/uploads/2021/01/johnny-depp-15-1024x732.jpg" alt="Jhonny"/>
                  <h3>Jhonny Depp</h3>
                  <h4>Customer Since 2018</h4>
                  <p><b><i>"Best Service Ever"</i></b></p>
              
               </div>
               <div class="boxes">
                  <img src="https://celebvogue.com/wp-content/uploads/2019/11/Carryminati.jpg" alt="Ajay"/>
                  <h3>Carry Minati</h3>
                  <h4>Customer Since 2019</h4>
                  <p><b><i>Very Good Customer Service<br/> Love It</i></b></p>
                  
               </div>
               <div class="boxes">
                  <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/06/17/837288-zakir-khan-crop.jpg" alt="Zakir"/>
                  <h3>Zakir Khan</h3>
                  <h4>Customer Since 2021</h4>
                  <p><b><i>Sakth Cars for <br/> "SAKTH LAUNDAS"</i></b></p>
                 
               </div>
               <div class="clear"></div>
            </div>
         </div>
      </div>
    )
}

export default Testimonial