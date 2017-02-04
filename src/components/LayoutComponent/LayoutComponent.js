import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { push } from 'react-router-redux'

export default class LayoutComponent extends Component {
  constructor () {
    super();
    this.state = { drawerIsOpen: false }
    this.handleHamburgerTouch = this.handleHamburgerTouch.bind(this);
    this.handleMenuItemTap = this.handleMenuItemTap.bind(this);
  }

  handleMenuItemTap(data) {
    return () => {
      //FIXME Make navigation work
      console.log('pushing', data)
      push(data.path)
    }
  }

  handleHamburgerTouch() {
    this.setState({drawerIsOpen: !this.state.drawerIsOpen});
  }

  render () {

    const menuItems = [
      {name: 'Resume', path: '/resume'},
      {name: 'Consultants', path: '/consultants'},
      {name: 'Consultants Details', path: '/consultant-details'}
    ].map((sectionDetails) => (
        <MenuItem key={sectionDetails.name} onTouchTap={this.handleMenuItemTap(sectionDetails)}>
          {sectionDetails.name}
        </MenuItem>
      )
    )

    return (
      <div>
        <AppBar title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleHamburgerTouch}
          />
        <Drawer open={this.state.drawerIsOpen}>
          {menuItems}
        </Drawer>
        {this.props.children}
      </div>
    )
  }
}
