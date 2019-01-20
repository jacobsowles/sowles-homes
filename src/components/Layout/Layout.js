import classNames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import { init } from '../../utils/icons';
import Footer from '../Footer';
import Header from '../Header';
import './Layout.scss';

init();

const Layout = ({
  background,
  backgroundAlt,
  children,
  className,
  style,
  transparentFooter,
}) => (
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

        <main>
          <Image
            alt={backgroundAlt}
            className="background"
            fluid={background}
          />
          {children}
        </main>

        <Footer transparent={transparentFooter} />
      </div>
    )}
  />
);

Layout.propTypes = {
  background: PropTypes.object.isRequired,
  backgroundAlt: PropTypes.string.isRequired,
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
