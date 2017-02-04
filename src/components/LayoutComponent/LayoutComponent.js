import React from 'react'
import AppBar from 'material-ui/AppBar'

export default (props) => (
  <div>
    <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    {props.children}
  </div>
)