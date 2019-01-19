import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import Layout from '../components/Layout';
import RentalListing from '../components/RentalListing';
import Section from '../components/Section';
import SEO from '../components/SEO';

const RentalsPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout>
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

        <Image
          alt="interior"
          className="background"
          fluid={data.bannerImage.childImageSharp.fluid}
        />

        <Section banner>
          <h1>Available Rentals</h1>

          <p>
            Below is the list of our available rentals. Click the images to see
            more details about each home.
          </p>
        </Section>

        <Section color="white" flex>
          <RentalListing
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
          </RentalListing>
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
