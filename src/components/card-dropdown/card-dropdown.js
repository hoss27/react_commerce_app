import React from 'react'
import CustomButton from '../../sharedui/custom-botton/custom-button'
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item';
import {selectCartItems} from '../../redux/cart/cart-selector';
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


const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CardDropdown);
