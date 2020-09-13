import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/home";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
