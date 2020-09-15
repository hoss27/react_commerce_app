import React, { Component } from "react";
import "./App.css";
import Home from "./pages/home/home";
import { Route, Switch, Redirect } from "react-router-dom";
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
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log('hoss'+this.props.currentUser)
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/authentification" render={() => this.props.currentUser ?
          (<Redirect to='/'/>) : (<Authentification/>)}/>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);