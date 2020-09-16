import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { setToggleHidden } from "../../redux/cart/CartActions";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import "./cart-icon.scss";

const CartIcon = ({ quantity, dispatch }) => {
  console.log(quantity);
  return (
    <div className="cart-icon" onClick={() => dispatch(setToggleHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
};

const mapStateToprops = createStructuredSelector({
  quantity: selectCartItemsCount,
});
export default connect(mapStateToprops)(CartIcon);
