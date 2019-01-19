import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout transparentFooter>
        <SEO description="Page not found" title="Not found" />

        <Image
          alt="interior"
          className="background"
          fluid={data.bannerImage.childImageSharp.fluid}
        />

        <Section banner>
          <h1>Not Found</h1>
          <p>The page you requested has moved or doesn't exist.</p>
        </Section>
      </Layout>
    )}
  />
);

const query = graphql`
  query {
    bannerImage: file(relativePath: { regex: "/interior-1.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default NotFoundPage;
