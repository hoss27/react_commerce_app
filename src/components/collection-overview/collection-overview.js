import React from "react";
import { connect } from "react-redux";
import "./collection-overview.scss";
import { selectCollectionForPreview, selectShop} from '../../redux/shop/shopSelector';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collectionpreview/collectionpreview';
const CollectionOverview = ({collections}) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherSectionsProps }) => (
        <CollectionPreview key={id} {...otherSectionsProps} />
      ))}
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
})

export default connect(mapStateToProps)(CollectionOverview);