import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Section.scss';

const Section = ({ banner, center, children, className, color, flex }) => (
  <section
    className={classNames(
      'section',
      className,
      { section__banner: banner },
      { section__center: center },
      { section__flex: flex },
      { [`section__${color}`]: color }
    )}
  >
    {children}
  </section>
);

Section.propTypes = {
  center: PropTypes.bool,
  color: PropTypes.oneOf(['white']),
  banner: PropTypes.bool,
  className: PropTypes.string,
  flex: PropTypes.bool,
};

Section.defaultProps = {
  center: false,
  color: undefined,
  banner: false,
  className: '',
  flex: false,
};

export default Section;
