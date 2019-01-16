import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import './Header.scss';

const Header = ({ siteTitle }) => (
  <Navbar className="header">
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="home-link" to={`/`}>
          <div className="header-text-wrapper">
            <h1>{siteTitle}</h1>
          </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/rentals">Rentals</Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">Contact</Link>
        </ListItem>
        <ListItem>
          <Link to="/tenants">Tenants</Link>
        </ListItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
};

/*
 * This is required because Bootstrap's NavItem can't be used with Gatsby's Link component,
 * and using regular HTML <li> tags generates a console error saying that React is trying to
 * pass props to it that the <li> tag doesn't suport.
 */
const ListItem = ({ children }) => <li>{children}</li>;

export default Header;
