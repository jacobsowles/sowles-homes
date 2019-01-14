import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const RentalsPage = () => (
  <Layout>
    <SEO description="" keywords={[]} title="Available Rentals" />

    <Section banner>
      <h1>Available Rentals</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut quis nisl mattis, blandit eros at, viverra purus.
      </p>
    </Section>

    <Section color="white" flex>
      There are currently no rentals available. Please check back later.
    </Section>
  </Layout>
);

export default RentalsPage;
