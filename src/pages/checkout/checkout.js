import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import {selectCartItems,selectCartItemCountTotal} from '../../redux/cart/cart-selector';
import {createStructuredSelector} from 'reselect';

const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => 
                cartItem.name
            )}
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    )
}


const mapStateToProps =  createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemCountTotal
});

export default connect(mapStateToProps)(CheckoutPage);