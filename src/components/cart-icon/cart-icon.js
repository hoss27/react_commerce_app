import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {setToggleHidden} from '../../redux/cart/CartActions';
import './cart-icon.scss';



const CartIcon = ({setToggleHidden}) => {
    return (
        <div className='cart-icon' onClick={setToggleHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    setToggleHidden: () => dispatch(setToggleHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon);
