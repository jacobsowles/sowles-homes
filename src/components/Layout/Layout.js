import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { init } from '../../utils/icons';
import Header from '../Header';
import TextWithIcon from '../TextWithIcon';
import './Layout.scss';

init();

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <section>
            <h3>Contact Us</h3>
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
          </section>

          <small>
            Copyright © {new Date().getFullYear()}{' '}
            <Link to="/">Sowles Homes</Link> &nbsp;|&nbsp; Site design by{' '}
            <a href="https://jacobsowles.com">Jacob Sowles</a>
          </small>
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
