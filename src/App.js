import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/home";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./pages/header/header";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
