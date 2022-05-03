import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout_item_component';
import StripeButton from '../../components/stripe_button/stripe_button_component'; 
import {selectCartItems,selectCartTotal} from '../../redux/booking_cart/cart.selectors';
import DateTime from '../../components/date_time_component/date_time_component';
import Footer from '../../components/footer_component/footer_component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div>
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Car</span>
        </div>
        <div className='header-block'>
          <span>About</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>PPKM</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>{`TOTAL: ${total}/km`}</div>
      <div className='total'>{` Advance for 50Km = Rs ${total*50}/- `}</div>
      <div className='warning'>Please make sure that you make the booking atleast 24 hours before the journey, because it will take us atleast 24hours to ship all the cars to your location.Thankyou</div>
      <form action="">
        <div >
        <DateTime/>
        </div>
      </form>
        <div className="payment">
          <StripeButton  price={total} type="submit"/>
        </div>
    </div>
    <Footer/>
  </div>
  
)

const mapToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapToProps)(CheckoutPage);
