import classNames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { init } from '../../utils/icons';
import Footer from '../Footer';
import Header from '../Header';
import './Layout.scss';

init();

const Layout = ({ children, className, style, transparentFooter }) => (
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
      <div className={classNames('layout', className)} style={style}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer transparent={transparentFooter} />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  transparentFooter: PropTypes.bool,
};

Layout.defaultProps = {
  className: '',
  style: undefined,
  transparentFooter: false,
};

export default Layout;
