import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Link = ({ activeClassName, children, className, to, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        className={className}
        {...rest}
      >
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a className={className} href={to} {...rest}>
      {children}
    </a>
  );
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  activeClassName: 'active',
};

export default Link;
