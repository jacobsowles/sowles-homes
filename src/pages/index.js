import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout className="layout__home" transparentFooter>
    <SEO description="" keywords={[]} title="Home" />

    <Section banner>
      <h1>Welcome Home</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut quis nisl mattis, blandit eros at, viverra purus.
      </p>

      <Link className="button" to="/rentals">
        Rentals available now
      </Link>
    </Section>
  </Layout>
);

export default IndexPage;
