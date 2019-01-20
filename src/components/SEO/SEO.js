import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;

        alert(
          window.location.host + data.bannerImage.childImageSharp.fluid.src
        );

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              { name: `description`, content: metaDescription },
              { property: `og:description`, content: metaDescription },
              {
                property: `og:image`,
                content: data.bannerImage.childImageSharp.fluid.src,
              },
              { property: `og:title`, content: 'Sowles Homes' },
              { property: `og:type`, content: `website` },
              { name: `twitter:card`, content: `summary_large_image` },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              { name: `twitter:description`, content: metaDescription },
              {
                name: `twitter:image`,
                content: `sowleshomes.com${
                  data.bannerImage.childImageSharp.fluid.src
                }`,
              },
              { name: `twitter:image:alt`, content: 'home interior' },
              { name: `twitter:site`, content: '@jacobsowles' },
              { name: `twitter:title`, content: 'Sowles Homes' },
            ]
              .concat(
                keywords.length > 0
                  ? { name: `keywords`, content: keywords.join(`, `) }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    bannerImage: file(relativePath: { regex: "/interior-1.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
