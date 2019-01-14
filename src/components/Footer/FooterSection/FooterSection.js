import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './FooterSection.scss';

const FooterSection = ({ children, className, title }) => (
  <section className={classNames('footer-section', className)}>
    <h3>{title}</h3>
    {children}
  </section>
);

FooterSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FooterSection.defaultProps = {
  className: '',
};

export default FooterSection;
