import React, { Component } from "react";
import SHOP_DATA from "./SHOP_DATA";
import CollectionPreview from "../../components/collectionpreview/collectionpreview";
import { connect } from "react-redux";
import Authentification from "../../components/authentification/authentification";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { currentUserSelect } from "../../redux/user/UserSectors";
import { selectC } from "../../redux/shop/shopSelector";
import  CollectionOverview  from "../../components/collection-overview/collection-overview";
import {Route} from 'react-router-dom';
import  CategoryShop  from "../../components/category-shop/category-shop";

const ShopPage = ({ match }) => {
  return(
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:categoryId`} component={CategoryShop}/>
    </div>
  
)};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelect,
});

export default connect(mapStateToProps)(ShopPage);
