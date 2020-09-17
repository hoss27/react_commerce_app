import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory-meni.scss";
import { connect } from "react-redux";
import {selectDirectorySections} from '../../redux/directory/directorySelector';
import {createStructuredSelector} from 'reselect';
const DirectoryMenu = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsPros }) => (
      <MenuItem key={id} {...otherSectionsPros} />
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);
