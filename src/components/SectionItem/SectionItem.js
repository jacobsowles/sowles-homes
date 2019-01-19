import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../components/Link';
import './SectionItem.scss';

const SectionItem = ({
  className,
  icon,
  iconSize,
  linkUrl,
  subtitle,
  title,
}) => {
  const sectionItem = (
    <div
      className={classNames(
        { 'section-item': !linkUrl },
        { className: !linkUrl }
      )}
    >
      <div className="section-item-wrapper">
        {icon && <FontAwesomeIcon icon={icon} size={iconSize} />}

        <div className="text-wrapper">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </div>
  );

  return linkUrl ? (
    <Link
      activeClassName="active"
      className={classNames('section-item', className)}
      to={linkUrl}
    >
      {sectionItem}
    </Link>
  ) : (
    sectionItem
  );
};

SectionItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.array,
  iconSize: PropTypes.string,
  linkUrl: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

SectionItem.defaultProps = {
  className: '',
  icon: undefined,
  iconSize: '4x',
  linkUrl: undefined,
  subtitle: '',
};

export default SectionItem;
