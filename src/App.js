import React, { Component } from "react";
import "./App.css";
import Home from "./pages/home/home";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./pages/header/header";
import Authentification from "./components/authentification/authentification";
import { auth } from "../src/firebase/firebase.utils";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user,
      });
      console.log(user)
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/authentification" component={Authentification} />
        </Switch>
      </div>
    );
  }
}
