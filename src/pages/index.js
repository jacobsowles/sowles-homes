import { graphql, Link, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout transparentFooter>
        <SEO
          description="Providing the people of Portland and surrounding areas with a place to call home"
          keywords={[
            'homes',
            'houses',
            'Jacob Sowles',
            'Kate Sowles',
            'real estate',
            'rental',
            'rent',
            'Sowles',
            'Sowles Homes',
            'Sowles Real Estate',
          ]}
          title="Home"
        />

        <Image
          alt="interior"
          className="background"
          fluid={data.bannerImage.childImageSharp.fluid}
        />

        <Section banner>
          <h1>Welcome Home</h1>

          <p>
            Sowles Homes aims to provide the people of Portland and surrounding
            areas with a place to call home. We currently have units available.
            Come take a look!
          </p>

          <Link className="button" to="/rentals/">
            Rentals available now
          </Link>
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

export default IndexPage;
