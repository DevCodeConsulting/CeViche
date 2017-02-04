import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default (props) => (
  <div>
    <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <Drawer open={false}>
      <MenuItem>Resume</MenuItem>
      <MenuItem>Consultants</MenuItem>
      <MenuItem>Consultants Details</MenuItem>
    </Drawer>
    {props.children}
  </div>
)
