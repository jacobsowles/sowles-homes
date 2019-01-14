import classNames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import FooterSection from './FooterSection';
import TextWithIcon from '../TextWithIcon';
import './Footer.scss';

const Footer = ({ transparent }) => (
  <footer
    className={classNames('footer', { footer__transparent: transparent })}
  >
    <FooterSection title="Contact Us">
      <ul>
        <li>
          <TextWithIcon
            icon={['fas', 'map-marker-alt']}
            text="P.O. Box 66013, Portland, OR 97290"
          />
        </li>
        <li>
          <TextWithIcon
            icon={['fas', 'envelope']}
            text="info@sowleshomes.com"
            url="mailto:info@sowleshomes.com"
          />
        </li>
      </ul>
    </FooterSection>

    <small>
      Copyright © {new Date().getFullYear()} <Link to="/">Sowles Homes</Link>{' '}
      &nbsp;|&nbsp; Site design by{' '}
      <a href="https://jacobsowles.com">Jacob Sowles</a>
    </small>
  </footer>
);

Footer.propTypes = {
  transparent: PropTypes.bool,
};

Footer.defaultProps = {
  transparent: false,
};

export default Footer;
