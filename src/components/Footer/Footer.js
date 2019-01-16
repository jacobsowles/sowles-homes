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
    <div className="footer-section-wrapper">
      <FooterSection title="Contact Us">
        <ul>
          <li>
            <TextWithIcon
              icon={['fas', 'envelope']}
              text="P.O. Box 66013, Portland, OR 97290"
            />
          </li>
          <li>
            <TextWithIcon
              icon={['fas', 'at']}
              text="info@sowleshomes.com"
              url="mailto:info@sowleshomes.com"
            />
          </li>
        </ul>
      </FooterSection>

      <FooterSection title="Tenants">
        <ul>
          <li>
            <TextWithIcon
              icon={['fas', 'home']}
              text="Manage your home"
              url="https://home.cozy.co/#!/"
            />
          </li>
          <li>
            <TextWithIcon
              icon={['fas', 'credit-card']}
              text="Make or review rent payments"
              url="https://home.cozy.co/app/#!/payments/"
            />
          </li>
          <li>
            <TextWithIcon
              icon={['fas', 'tools']}
              text="Submit a maintenance request"
              url="https://home.cozy.co/app/#!/maintenance-requests/"
            />
          </li>
        </ul>
      </FooterSection>
    </div>

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
