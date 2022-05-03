import React from "react";
import "./membership_payment_style.css"
import StripeCheckout from "react-stripe-checkout";

const AddMember = ({price})=>{
    const actualPrice  = (price*100)
    const publicKey = "pk_test_51KrcAPSEeYSzFYDQaYQDY4ZXxjWdVZ8TUT05xom09JO7y97ouLv8vY5zy9LJ9eVy2NW252DPh8pl2cJFuYuHAEUT00P03nGJnx"

const onToken = (token)=>{
    console.log(token)
    alert("payment success")
}

    return(
        <StripeCheckout 
        currency="INR"
        label="SUBSCRIBE NOW"
        name="WOW CARS"
        //ComponentClass={}        
        billingAddress
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        description={`Membership Of ${price} only`}
        
        amount={actualPrice}
        panelLabel="Pay Now"
        allowRememberMe
        token={onToken}
        stripeKey = {publicKey}               
        />
    )

}

export default AddMember