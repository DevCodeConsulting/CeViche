import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class LayoutComponent extends Component {
  constructor () {
    super();
    this.state = { drawerIsOpen: false }
    this.handleHamburgerTouch = this.handleHamburgerTouch.bind(this);
  }

  handleHamburgerTouch() {
    this.setState({drawerIsOpen: !this.state.drawerIsOpen});
  }

  render () {
    return (
      <div>
        <AppBar title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleHamburgerTouch}
          />
        <Drawer open={this.state.drawerIsOpen}>
          <MenuItem>Resume</MenuItem>
          <MenuItem>Consultants</MenuItem>
          <MenuItem>Consultants Details</MenuItem>
        </Drawer>
        {this.props.children}
      </div>
    )
  }
}
