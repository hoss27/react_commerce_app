import React from "react";
import "./custom-botton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherPopsButton
}) => (
  <div
    className={`${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherPopsButton}
  >
    {children}
  </div>
);

export default CustomButton;
