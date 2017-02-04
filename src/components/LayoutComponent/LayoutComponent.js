import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Link from 'react-router/lib/Link'

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

    const menuItems = [
      {name: 'Resume', path: 'resume'},
      {name: 'Consultants', path: 'consultants'},
      {name: 'Consultants Details', path: 'consultant-details'}
    ].map((sectionDetails) => (
        <Link to={sectionDetails.path}><MenuItem key={sectionDetails.name}>{sectionDetails.name}</MenuItem></Link>
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
