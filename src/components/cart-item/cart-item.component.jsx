import React from 'react';
import './cart-item.styles.scss';


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {`${quantity} x ${price}`}
      </span>
    </div>
  </div>
);


// const CartItem = ({item: {quantity ,price,name,imageUrl}})=>{
//     return(
//         <div className="cart-item">
//             <img src={imageUrl}  alt="Added Car"/>
//             <div className="car-details">
//                 <span className="name">{name}</span>
//                 <span className="price">{`${quantity} X ${price}/km`}</span>

//             </div>
//         </div>
//     )
// } //not working dont know why


export default CartItem;
