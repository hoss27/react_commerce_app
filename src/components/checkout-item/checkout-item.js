import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import { clearItem,removeItem,addItem } from "../../redux/cart/CartActions";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
          <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
          <div className='value'>{quantity}</div>
          <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(clearItem(cartItem))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default connect(null)(CheckoutItem);
