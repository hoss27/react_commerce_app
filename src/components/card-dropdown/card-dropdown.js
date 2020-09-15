import React from 'react'
import CustomButton from '../../sharedui/custom-botton/custom-button'
import './card-dropdown.scss';


export const CardDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">   
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

