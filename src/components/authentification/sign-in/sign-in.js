import React, { Component } from "react";
import FormInput from "../../../sharedui/form-input/form-input";
import "./sign-in.scss";
import CustomButton from "../../../sharedui/custom-botton/custom-button";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (e) {
      console.log(e);
    }
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
          <div className="buttons">
            <CustomButton type="submit" onClick={this.handleSubmit}>SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Google Sign IN{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
