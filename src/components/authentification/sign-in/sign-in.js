import React, { Component } from "react";
import FormInput from "../../form-input/form-input";
import './sign-in.scss';
import CustomButton from "../../custom-botton/custom-button";
export default class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account!</h1>
        <span className="title">Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />
          <CustomButton type="submit">Sign IN</CustomButton>
        </form>
      </div>
    );
  }
}
