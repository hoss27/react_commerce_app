import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon";
import { CardDropdown } from "../../components/card-dropdown/card-dropdown";
import {setToggleHidden} from '../../redux/cart/CartActions';

const Header = ({ currentUser,hidden }) => {

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/authentification">
            SIGN IN
          </Link>
        )}
        <CartIcon/>
      </div>
      {hidden ? null : <CardDropdown/>}
    </div>
  );
};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
