import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.css"
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        
        <NavItem className = "myNav"><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem className = "myNav"><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
