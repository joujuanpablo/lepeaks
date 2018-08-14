import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class MainNav extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { logo } = this.props;

    return (
      <div className="main-nav--wrapper">
        <Navbar className="main-nav" dark expand="md">
          <NavbarBrand href="/" className="main-nav--brand">
            <img className="main-nav--brand-image" alt="lepeaks logo" src={logo}/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Gallery">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Story">Story</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}