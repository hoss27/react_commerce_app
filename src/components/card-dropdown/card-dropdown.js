import React from "react";
import CustomButton from "../../sharedui/custom-botton/custom-button";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selector";
import "./card-dropdown.scss";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import {setToggleHidden} from '../../redux/cart/CartActions';


const CardDropdown = ({ cartItems, history, dispatch, ...props }) => (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
          history.push("/checkout");
          dispatch(setToggleHidden())
          }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CardDropdown));
