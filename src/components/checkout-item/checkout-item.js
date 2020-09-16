import React from "react";
import "./checkout-item.scss";
import {connect} from 'react-redux';
import {clearItem} from '../../redux/cart/CartActions';

const CheckoutItem = ({cartItem, dispatch}) => {
    const {imageUrl, name, price, quantity} = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => dispatch(clearItem(cartItem))}>&#10005;</span>
    </div>
  );
};

export default connect(null)(CheckoutItem)