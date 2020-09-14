import React from 'react'
import './custom-botton.scss';


const CustomButton = ({children, isGoogleSignIn, ...otherPopsButton}) => (
    <div className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherPopsButton}>
        {children}
    </div>
)


export default CustomButton;
