import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {setToggleHidden} from '../../redux/cart/CartActions';
import './cart-icon.scss';



const CartIcon = ({setToggleHidden,quantity}) => {
    console.log(quantity);
    return (
        <div className='cart-icon' onClick={setToggleHidden}>
            <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{quantity}</span>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    setToggleHidden: () => dispatch(setToggleHidden())
});


const mapStateToprops = ({cart:{cartItems}}) => ({
    quantity : cartItems.length
});
export default connect(mapStateToprops, mapDispatchToProps)(CartIcon);
