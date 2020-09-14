import React from 'react'
import SignIn from './sign-in/sign-in'
import SignUP from './signup/sign-up'
import './authentification.scss';

const Authentification = () =>{
    return (
        <div className="authentification">
            <SignIn/>
            <SignUP/>
        </div>
    )
}

export default Authentification;
