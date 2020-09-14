import React from 'react'
import './custom-botton.scss';


const CustomButton = ({children, ...otherPopsButton}) => (
    <div className="custom-button" {...otherPopsButton}>
        {children}
    </div>
)


export default CustomButton;
