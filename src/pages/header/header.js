import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon";
import CardDropdown  from "../../components/card-dropdown/card-dropdown";
import {cartHiddenSelector} from '../../redux/cart/cart-selector';
import {currentUserSelect} from '../../redux/user/UserSectors';
import {createStructuredSelector} from 'reselect';

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

const mapStateToProps = createStructuredSelector ({
  currentUser : currentUserSelect,
  hidden: cartHiddenSelector
});
export default connect(mapStateToProps)(Header);
