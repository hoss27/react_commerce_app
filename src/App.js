import React, { Component } from "react";
import "./App.css";
import Home from "./pages/home/home";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./pages/header/header";
import Authentification from "./components/authentification/authentification";
import {
  auth,
  createDocumentUserProfile,
} from "../src/firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/UserActions';

class App extends Component {
  
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createDocumentUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser(
            {
                id: snapshot.id,
                ...snapshot.data()
            },
            
          );
        });
      }
      setCurrentUser(userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/authentification" component={Authentification} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);