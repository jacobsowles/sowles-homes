import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import './TextWithIcon.scss';

const TextWithIcon = ({ icon, text, url }) => {
  const itemText = url ? <a href={url}>{text}</a> : text;

  return (
    <span className="text-with-icon">
      <FontAwesomeIcon icon={icon} />
      {itemText}
    </span>
  );
};

TextWithIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};

TextWithIcon.defaultProps = {
  url: undefined,
};

export default TextWithIcon;
