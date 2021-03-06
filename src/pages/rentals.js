import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const RentalsPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout
        background={data.bannerImage.childImageSharp.fluid}
        backgroundAlt="interior"
      >
        <SEO
          description="Homes available for rent"
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
          title="Available Rentals"
        />

        <Section banner>
          <h1>Available Rentals</h1>
        </Section>

        <Section color="white" flex>
          {/*<RentalListing
            address="8441 SE Bush Street"
            baths="1"
            beds="2"
            city="Portland"
            link="https://home.cozy.co/apply/#!/479126/new/overview"
            size="1092"
            state="OR"
            zip="97266"
          >
            <Image
              fluid={data.bushImage.childImageSharp.fluid}
              alt="Home at 8441 SE Bush Street"
            />
          </RentalListing>*/}
          <p>
            An up-to-date list of our available rentals can be found{' '}
            <a
              alt="list of available rentals"
              href="https://home.cozy.co/app/#!/profile/sowleshomes"
            >
              here
            </a>
            .
          </p>
        </Section>
      </Layout>
    )}
  />
);

const query = graphql`
  query {
    bannerImage: file(relativePath: { regex: "/interior-3.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bushImage: file(relativePath: { regex: "/bush-a.jpeg/" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default RentalsPage;
