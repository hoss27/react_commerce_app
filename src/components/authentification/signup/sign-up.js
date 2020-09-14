import React, { Component } from "react";
import FormInput from "../../form-input/form-input";
import CustomButton from "../../custom-botton/custom-button";
import {auth, createDocumentUserProfile} from '../../../firebase/firebase.utils';
import './sign-up.scss';

export default class SignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      displayName: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
      e.preventDefault();
      const {displayName, email, password, confirmPassword} = this.state;
      if(password !== confirmPassword){
        alert('passwords don`t match')
        return;
      }

      try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        await createDocumentUserProfile(user, {displayName});
        this.setState({
          email: '',
          password: '',
          displayName: '',
          confirmPassword: ''
        })
      } catch (error){
        alert(error)
      }
  }

  handleChange = (e) => {
    const {value,name} = e.target
    this.setState({
      [name]: value
    });
  };
  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label='displayName'
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label='email'
            required
          /> 
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <FormInput
            type="password"
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type="submit" onClick={this.handleSubmit}>Sign UP</CustomButton>
        </form>
      </div>
    );
  }
}
