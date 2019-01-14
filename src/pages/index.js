import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO description="" keywords={[]} title="Home" />
    <section className="banner">
      <h1>Welcome Home</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Ut quis nisl mattis, blandit eros at, viverra purus.</p>
    </section>
  </Layout>
);

export default IndexPage;
