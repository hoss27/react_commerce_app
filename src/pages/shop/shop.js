import React, { Component } from 'react'
import SHOP_DATA from './SHOP_DATA';
import CollectionPreview from '../../components/collectionpreview/collectionpreview';

export default class ShopPage extends Component {

    constructor(){
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div>
                {collections.map(({id, ...otherSectionsProps}) => (
                    <CollectionPreview key={id} {...otherSectionsProps}/>
                ))}
            </div>
        )
    }
}


