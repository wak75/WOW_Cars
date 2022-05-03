import React from "react";
import StripeCheckout from "react-stripe-checkout"

// eslint-disable-next-line
const DateTime = ()=>{
    return(
        <div>
            <label> Enter thr Booking Date and time </label>
            <input type="datetime-local" for="booking date"/>
        </div>
    )
}


const StripeButton = ({ price})=>{
        const actualPrice  = (price*100)*50
        const publicKey = "pk_test_51KrcAPSEeYSzFYDQaYQDY4ZXxjWdVZ8TUT05xom09JO7y97ouLv8vY5zy9LJ9eVy2NW252DPh8pl2cJFuYuHAEUT00P03nGJnx"

    const onToken = (token)=>{        
        console.log(token)   
        alert("Payment successful")    
    }



        return(
            <StripeCheckout 
            currency="INR"
            label="BOOK NOW"
            name="WOW CARS"
            //ComponentClass={} 
            
            billingAddress
            shippingAddress
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            description={`Advance money: RS${price*50} for 50 kms` }
            
            amount={actualPrice}
            panelLabel="Pay Now"
            allowRememberMe
            token={(onToken)}
            stripeKey = {publicKey} >
            
                

            </StripeCheckout>              
            
            
        )       
}

export default StripeButton