import React from 'react';
import './header_component_styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../car_icon/cart-icon.component';
import CartDropdown from '../cart_dropdown/cart_dropdown_component';
import { selectCartHidden } from '../../redux/booking_cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden,  }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/all'>
        ALL CARS
      </Link>
      <Link className='option' to='/about'>
        ABOUT US
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)

//const mapToProps=(state)=>{  this is used if we are not using the createStructured 
// const mapToProps=(state)=>{
//     return ({
//         // currentUser: state.user.currentUser
//         currentUser:selectCurrentUser(state),
//         hidden:selectCartHidden(state)
//     })
// }


const mapToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  //displayname: UserName

  
  
})

// const mapToProps=({user:{currentUser},cart:{hidden}})=>{
//     return ({
//         // currentUser: state.user.currentUser
//         currentUser,
//         hidden
//     })
// }

export default connect(mapToProps)(Header);
