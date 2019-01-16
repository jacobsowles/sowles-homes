import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './SectionItem.scss';

const SectionItem = ({ className, icon, iconSize, subtitle, title }) => (
  <div className={classNames('section-item', className)}>
    <div className="section-item-wrapper">
      {icon && <FontAwesomeIcon icon={icon} size={iconSize} />}

      <div className="text-wrapper">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  </div>
);

SectionItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.array,
  iconSize: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

SectionItem.defaultProps = {
  className: '',
  icon: undefined,
  iconSize: '4x',
  subtitle: '',
};

export default SectionItem;
