import React from "react";
import "./category-shop.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";
import CollectionItem from "../collectionitem/collection-item";

const CategoryShop = ({ collection }) => {
  const {title, items} = collection
  return (
     <div className="category">
       <h2 className="title">{title}</h2>
       <div className="items">
           {items.map(item => <CollectionItem key ={item.id} item={item}/>)}
       </div>
     </div>
     );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps)(CategoryShop);
