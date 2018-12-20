import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  import './Navbar.css';

export default class Navigation extends React.Component {
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
    return (
      <div className="Nav" >
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem className="nav-items" >
                <NavLink href="/myhome/"> <i className="fas fa-home"></i> </NavLink>
              </NavItem>
              <NavItem className="nav-items" >
                <NavLink href="/favoris/"> <i className="fas fa-star"></i> </NavLink>
              </NavItem>
              <NavItem className="nav-items" >
                <NavLink href="/homepage/"> <img className="logo" src="../images/logo.png" alt="logoNavbar" height="50" width="100" /> </NavLink>
              </NavItem>
              <NavItem className="nav-items" >
                <NavLink href="/trophees/"> <i className="fas fa-trophy"></i> </NavLink>
              </NavItem>
              <NavItem className="nav-items" >
                <NavLink href="/moncompte/"> <i className="items fas fa-user-circle"></i> </NavLink>
              </NavItem>  
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}