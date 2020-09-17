import React from "react";
import "./collection-item.scss";
import CustomButton from "../../sharedui/custom-botton/custom-button";
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/CartActions';

const CollectionItem = ({ item, dispatch }) =>  {
  
  const {imageUrl, name, price} = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>ADD TO CART</CustomButton>
    </div>
  );
};



export default connect(null)(CollectionItem);
