import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/booking_icon.svg';
import { selectCartItemsCount } from '../../redux/booking_cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/booking_cart/cart.actions';




const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='booking-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='car-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDisToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
// const mapStateToProps = (state)=>{
//     return({itemCount:selectCartItemsCount(state)})
// }

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

// return(
//     {
//         itemCount: cartItems.reduce((accQuantity,cartItem)=>accQuantity+cartItem.quantity,0)
//     }
// )
// Bad practice as it always as it is being called whenever the state change
//this is not good as there is not always requires to call this whenever the state changes and and should only called when it is actually called.
 

export default connect(mapStateToProps,mapDisToProps)(CartIcon)
