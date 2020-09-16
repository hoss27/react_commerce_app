import React from 'react'
import CustomButton from '../../sharedui/custom-botton/custom-button'
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item';
import './card-dropdown.scss';


const CardDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))}   
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)


const mapStateToProps = ({cart:{cartItems}}) => ({
  cartItems
});

export default connect(mapStateToProps)(CardDropdown);
