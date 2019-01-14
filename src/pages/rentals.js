import React from 'react';

import Layout from '../components/Layout';
import RentalListing from '../components/RentalListing';
import Section from '../components/Section';
import SEO from '../components/SEO';
import bushA from '../images/bush-a.jpeg';

const RentalsPage = () => (
  <Layout className="layout__rentals">
    <SEO description="" keywords={[]} title="Available Rentals" />

    <Section banner>
      <h1>Available Rentals</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl
        <br />
        mattis, blandit eros at, viverra purus.
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
        <img src={bushA} alt="Home at 8441 SE Bush Street" />
      </RentalListing>
    </Section>
  </Layout>
);

export default RentalsPage;
