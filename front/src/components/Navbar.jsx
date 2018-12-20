import React from "react";
import { NavItem, NavLink } from "reactstrap";
import "./Navbar.css";

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
      <nav className="nav">
        <NavItem className="nav-items">
          <NavLink href="/myhome/">

            <img
              className="home"
              src="../images/home.png"
              alt="logoNavbar"
              height="50"
              width="50"
            />
          </NavLink>
        </NavItem>
        <NavItem className="nav-items">
          <NavLink href="/favoris/">

            <img
              className="favoris"
              src="../images/fav.png"
              alt="logoNavbar"
              height="50"
              width="50"
            />
          </NavLink>
        </NavItem>
        <NavItem className="nav-items">
          <NavLink href="/homepage/">
          
            <img
              className="logo"
              src="../images/logo.png"
              alt="logoNavbar"
              height="80"
              width="150"
            />
          </NavLink>
        </NavItem>
        <NavItem className="nav-items">
          <NavLink href="/trophees/">
       
            <img
              className="trophees"
              src="../images/trophee.png"
              alt="logoNavbar"
              height="50"
              width="50"
            />
          </NavLink>
        </NavItem>
        <NavItem className="nav-items">
          <NavLink href="/moncompte/">
            
            <img
              className="moncompte"
              src="../images/profile.png"
              alt="logoNavbar"
              height="50"
              width="50"
            />
          </NavLink>
        </NavItem>
      </nav>
    );
  }
}
