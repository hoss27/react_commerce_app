import React, { Component } from 'react'
import SHOP_DATA from './SHOP_DATA';
import CollectionPreview from '../../components/collectionpreview/collectionpreview';
import {connect} from 'react-redux';
import Authentification from '../../components/authentification/authentification';
import { Redirect } from 'react-router-dom';
import {createStructuredSelector} from 'reselect'; 
import {currentUserSelect} from '../../redux/user/UserSectors';

class ShopPage extends Component {

    constructor(){
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        const {currentUser} = this.props;
        return (
            currentUser ? <div>
                {collections.map(({id, ...otherSectionsProps}) => (
                    <CollectionPreview key={id} {...otherSectionsProps}/>
                ))}
            </div> : <Redirect to='/authentification'/>
            
        )
    }
}

const mapStateToProps = createStructuredSelector ({
    currentUser: currentUserSelect
})

export default connect(mapStateToProps)(ShopPage)

