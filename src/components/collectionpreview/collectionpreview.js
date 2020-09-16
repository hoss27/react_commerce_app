import React from "react";
import "./collectionpreview.scss";
import CollectionItem from "../collectionitem/collection-item";

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
          {items.filter((item, indx) => indx < 4).map(item => (
              <CollectionItem key={item.id} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
