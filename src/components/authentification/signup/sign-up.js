import React, { Component } from "react";
import FormInput from "../../form-input/form-input";

export default class SignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
      this.setState({
          email: e.target.default
      })
  };
  render() {
    return (
      <div className="sign-up">
        <h1>Create an account</h1>
        <span className="title">Sign up with your email and password</span>
        <FormInput type="email" name="email" handleChange={this.handleChange} />
      </div>
    );
  }
}
