import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '../Header';
import './Layout.scss';

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
            <p>
              P.O. Box 66013
              <br />
              Portland, OR 97290
            </p>
            <p>
              <a href="mailto:info@sowleshomes.com">info@sowleshomes.com</a>
            </p>
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
