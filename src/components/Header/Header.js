import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './Header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1>Title</h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
