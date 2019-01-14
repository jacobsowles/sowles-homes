import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Section.scss';

const Section = ({ banner, children, className, color, flex }) => (
  <section
    className={classNames(
      'section',
      className,
      { section__banner: banner },
      { section__flex: flex },
      { [`section__${color}`]: color }
    )}
  >
    {children}
  </section>
);

Section.propTypes = {
  color: PropTypes.oneOf(['white']),
  banner: PropTypes.bool,
  className: PropTypes.string,
  flex: PropTypes.bool,
};

Section.defaultProps = {
  color: undefined,
  banner: false,
  className: '',
  flex: false,
};

export default Section;
